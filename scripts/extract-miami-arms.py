"""Extract weighted arms/gloves without altering the user-supplied agent.
Run: python3 scripts/extract-miami-arms.py
Keeps the skeleton, bind matrices, vertex weights and original PBR textures.
"""
from pathlib import Path
import copy, json, struct

ROOT = Path(__file__).resolve().parents[1]
source = ROOT / 'assets/professional-cs2-agent-model-miami/source/Professionalmiami.glb'
target = ROOT / 'assets/miami_viewmodel_arms.glb'
raw = source.read_bytes()
length = struct.unpack_from('<I', raw, 12)[0]
g = json.loads(raw[20:20 + length])
binary = raw[28 + length:]
formats = {5120: 'b', 5121: 'B', 5122: 'h', 5123: 'H', 5125: 'I', 5126: 'f'}
widths = {'SCALAR': 1, 'VEC2': 2, 'VEC3': 3, 'VEC4': 4, 'MAT4': 16}
chunks, views, accessors = [], [], []
size = 0

def add_view(data, target=None):
    global size
    data = bytes(data)
    padding = (-size) % 4
    if padding:
        chunks.append(b'\x00' * padding)
        size += padding
    view = {'buffer': 0, 'byteOffset': size, 'byteLength': len(data)}
    if target: view['target'] = target
    views.append(view)
    chunks.append(data)
    size += len(data)
    return len(views) - 1

def read_accessor(index):
    a = g['accessors'][index]
    v = g['bufferViews'][a['bufferView']]
    fmt = '<' + formats[a['componentType']] * widths[a['type']]
    stride = v.get('byteStride', struct.calcsize(fmt))
    start = v.get('byteOffset', 0) + a.get('byteOffset', 0)
    return [struct.unpack_from(fmt, binary, start + i * stride) for i in range(a['count'])]

def add_accessor(values, template, target=None):
    fmt = '<' + formats[template['componentType']] * widths[template['type']]
    data = b''.join(struct.pack(fmt, *v) for v in values)
    a = {k: v for k, v in template.items() if k in ['componentType', 'type', 'normalized']}
    a.update(bufferView=add_view(data, target), count=len(values))
    if template['type'] == 'VEC3':
        a['min'] = list(map(min, zip(*values)))
        a['max'] = list(map(max, zip(*values)))
    accessors.append(a)
    return len(accessors) - 1

joint_names = [g['nodes'][n]['name'] for n in g['skins'][0]['joints']]
arm_joints = {i for i, name in enumerate(joint_names) if name.startswith(('arm_', 'hand_', 'finger_'))}
primitives = []
for p in g['meshes'][0]['primitives']:
    name = g['materials'][p['material']]['name']
    if name not in ['glove_fullfinger', 'tm_professional_body_varf']: continue
    attrs = {key: read_accessor(value) for key, value in p['attributes'].items()}
    weights = [sum(w for j, w in zip(js, ws) if j in arm_joints) for js, ws in zip(attrs['JOINTS_0'], attrs['WEIGHTS_0'])]
    indices = [v[0] for v in read_accessor(p['indices'])]
    kept = [indices[i:i+3] for i in range(0, len(indices), 3) if all(weights[j] > 0.94 for j in indices[i:i+3])]
    used = sorted({v for triangle in kept for v in triangle})
    remap = {old: new for new, old in enumerate(used)}
    attr_refs = {key: add_accessor([values[i] for i in used], g['accessors'][p['attributes'][key]], 34962) for key, values in attrs.items()}
    index_ref = add_accessor([(remap[i],) for triangle in kept for i in triangle], {'componentType': 5123, 'type': 'SCALAR'}, 34963)
    primitives.append({'attributes': attr_refs, 'indices': index_ref, 'material': 0 if name == 'glove_fullfinger' else 1})
    print(name, len(used), 'vertices;', len(kept), 'triangles')

out = copy.deepcopy(g)
out['meshes'] = [{'name': 'Miami first-person arms', 'primitives': primitives}]
for skin in out['skins']:
    ref = skin['inverseBindMatrices']
    skin['inverseBindMatrices'] = add_accessor(read_accessor(ref), g['accessors'][ref])
out['materials'] = [copy.deepcopy(g['materials'][i]) for i in [0, 4]]
texture_ids = set()
def visit(value, replace=False, mapping=None):
    if isinstance(value, dict):
        for key, item in value.items():
            if key.endswith('Texture') and isinstance(item, dict) and 'index' in item:
                if replace: item['index'] = mapping[item['index']]
                else: texture_ids.add(item['index'])
            else: visit(item, replace, mapping)
    elif isinstance(value, list):
        for item in value: visit(item, replace, mapping)
visit(out['materials'])
texture_ids = sorted(texture_ids)
visit(out['materials'], True, {old: i for i, old in enumerate(texture_ids)})
out['textures'] = [copy.deepcopy(g['textures'][i]) for i in texture_ids]
image_ids = sorted({t['source'] for t in out['textures']})
for texture in out['textures']: texture['source'] = image_ids.index(texture['source'])
out['images'] = []
for image_id in image_ids:
    image = copy.deepcopy(g['images'][image_id])
    view = g['bufferViews'][image['bufferView']]
    start = view.get('byteOffset', 0)
    image['bufferView'] = add_view(binary[start:start + view['byteLength']])
    out['images'].append(image)
out['asset']['extras'] = {'author': 'gettan', 'source': 'https://sketchfab.com/3d-models/professional-cs2-agent-model-miami-7c3670f707c94b228bcaeffdaa0d4f7a', 'license': 'CC-BY-4.0', 'modifications': 'Arms and gloves extracted by skin weights; original skeleton and PBR maps retained. No source animations.'}
out['accessors'] = accessors
out['bufferViews'] = views
out['buffers'] = [{'byteLength': size}]
encoded = json.dumps(out, separators=(',', ':')).encode()
encoded += b' ' * (-len(encoded) % 4)
blob = b''.join(chunks)
blob += b'\x00' * (-len(blob) % 4)
target.write_bytes(struct.pack('<III', 0x46546c67, 2, 28+len(encoded)+len(blob)) + struct.pack('<II', len(encoded), 0x4e4f534a) + encoded + struct.pack('<II', len(blob), 0x004e4942) + blob)
print(target.name, target.stat().st_size, 'bytes')
