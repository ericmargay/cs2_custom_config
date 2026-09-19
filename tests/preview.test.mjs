import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import * as settings from '../preview/settings.mjs';
import { DUST2, WEAPONS } from '../preview/assets.mjs';
import * as THREE from '../vendor/three/three.module.js';
import { prepareWeapon, disposeObject, WeaponRenderer } from '../preview/weapon.mjs';
import { PreviewStudio } from '../preview/studio.mjs';

const close = (a, b, tolerance = 1e-9) => assert.ok(Math.abs(a - b) < tolerance, `${a} != ${b}`);
const radar = values => settings.normalizeSettings(values, settings.RADAR);
const player = { x: -400, y: 800, yaw: 90 };

test('editing any radar or viewmodel value exits defaults; redraws preserve comparison', () => {
  const schema = { ...settings.RADAR, ...settings.VIEWMODEL };
  const original = settings.normalizeSettings({}, schema);
  const mode = { comparing: true, alternate: false, scoreboard: false };
  for (const [key, spec] of Object.entries(schema)) {
    const edited = { ...original, [key]: spec.value === spec.min ? spec.max : spec.min };
    assert.equal(settings.previewEditState(original, edited, mode).comparing, false, key);
  }
  assert.deepEqual(settings.previewEditState(original, { ...original, cl_radar_scale: '0.7' }, mode), mode);
});

test('conditional radar edits reveal the affected mode without changing exported settings', () => {
  const values = Object.freeze({ cl_radar_scale_alternate: 0.4 });
  const mode = settings.previewEditState({}, values, { comparing: true, scoreboard: true });
  assert.deepEqual(mode, { comparing: false, alternate: true, scoreboard: false });
  assert.equal(settings.radarTransform(values, DUST2, player, [], mode).zoom, 0.4);
  const main = settings.previewEditState(values, { ...values, cl_radar_scale: 0.3 }, mode);
  assert.equal(main.alternate, false);
  assert.equal(settings.radarTransform({ cl_radar_scale: 0.3 }, DUST2, player, [], main).zoom, 0.3);
  assert.equal(settings.previewEditState({}, { cl_radar_square_with_scoreboard: 0 }).scoreboard, true);
  assert.equal(settings.radarCommands(values).length, Object.keys(settings.RADAR).length);
});

test('studio sends edited settings to the renderer after a defaults comparison', () => {
  const elements = new Map();
  const element = key => {
    if (!elements.has(key)) elements.set(key, { setAttribute(name, value) { this[name] = value; } });
    return elements.get(key);
  };
  const studio = Object.create(PreviewStudio.prototype);
  Object.assign(studio, {
    preferences: {}, copy: { compare: 'Defaults', returnToCurrent: 'Return', current: 'Current', comparing: 'Defaults' },
    element: { querySelector: element }, button: element,
    viewport: { dataset: {}, style: {} }, resize() { this.rendered = this.settings; }
  });
  const original = { cl_radar_scale: 0.4 };
  studio.update(original);
  studio.comparing = true;
  studio.update(original);
  assert.equal(studio.rendered.cl_radar_scale, 0.7);
  assert.equal(element('copy').disabled, true);
  studio.update({ ...original, cl_radar_scale: 0.3 });
  assert.equal(studio.rendered.cl_radar_scale, 0.3);
  assert.equal(element('compare')['aria-pressed'], 'false');
  assert.equal(element('.studio-state').textContent, 'Current');
  assert.equal(element('copy').disabled, false);
  assert.deepEqual(original, { cl_radar_scale: 0.4 });
});

test('current cvar limits reject NaN, Infinity and obsolete FOV/offset ranges', () => {
  const result = settings.normalizeSettings({ viewmodel_fov: 54, viewmodel_offset_x: -2.5, viewmodel_offset_y: NaN, viewmodel_offset_z: Infinity }, settings.VIEWMODEL);
  assert.equal(result.viewmodel_fov, 60);
  assert.equal(result.viewmodel_offset_x, -2);
  assert.equal(result.viewmodel_offset_y, 1);
  assert.equal(result.viewmodel_offset_z, -1);
  assert.equal(radar({ cl_radar_icon_scale_min: 1.25 }).cl_radar_icon_scale_min, 1.25);
});

test('viewmodel exports are complete, ordered, finite and use the current handedness cvar', () => {
  const result = settings.viewmodelCommands({ viewmodel_presetpos: 'custom', viewmodel_offset_x: 0, cl_prefer_lefthanded: 1, __viewmodel_weapon: 'awp' });
  assert.equal(result[0], 'viewmodel_presetpos 1');
  assert.equal(result.length, 6);
  assert.ok(result.includes('viewmodel_offset_x 0'));
  assert.ok(result.includes('viewmodel_offset_y 1'));
  assert.ok(result.includes('cl_prefer_lefthanded 1'));
  assert.doesNotMatch(result.join(';'), /custom|cl_righthand|__|NaN/);
});

test('FOV increases coverage without scaling the weapon; axes map to camera space', () => {
  const low = settings.viewmodelTransform({ viewmodel_fov: 60 });
  const high = settings.viewmodelTransform({ viewmodel_fov: 68 });
  assert.ok(high.fov > low.fov);
  assert.deepEqual(high.scale, low.scale);
  close(2 * Math.atan(Math.tan(low.fov * Math.PI / 360) * (4 / 3)) * 180 / Math.PI, 60);
  assert.deepEqual(settings.viewmodelTransform({ viewmodel_offset_x: 2, viewmodel_offset_y: 2, viewmodel_offset_z: -2 }).position, [2, -2, -2]);
});

test('left hand mirrors the complete pose once, leaving depth and height unchanged', () => {
  const right = settings.viewmodelTransform({ viewmodel_offset_x: 2.5 });
  const left = settings.viewmodelTransform({ viewmodel_offset_x: 2.5, cl_prefer_lefthanded: 1 });
  close(right.position[0], -left.position[0]);
  assert.deepEqual(right.position.slice(1), left.position.slice(1));
  assert.deepEqual(left.scale, [-1, 1, 1]);
});

test('map coordinates round trip through a rotating, zoomed radar', () => {
  for (const yaw of [0, 45, 90, 180, 270, 360]) {
    for (const centered of [0, 1]) {
      const transform = settings.radarTransform({ cl_radar_always_centered: centered }, DUST2, { ...player, yaw }, DUST2.markers);
      for (const point of [player, ...DUST2.markers]) {
        const result = settings.unprojectRadar(settings.projectRadar(point, DUST2, transform), DUST2, transform);
        close(result.x, point.x); close(result.y, point.y);
      }
    }
  }
});

test('centered player stays centered and faces up as the radar rotates', () => {
  for (const yaw of [0, 90, 180, 270]) {
    const p = { ...player, yaw };
    const transform = settings.radarTransform({}, DUST2, p, []);
    const center = settings.projectRadar(p, DUST2, transform);
    close(center.x, 0.5); close(center.y, 0.5);
    close(-yaw * Math.PI / 180 + transform.rotation, -Math.PI / 2);
  }
});

test('alternate zoom and scoreboard modes change the preview without mutating settings', () => {
  const values = { cl_radar_scale: 0.3, cl_radar_scale_alternate: 0.9 };
  const before = JSON.stringify(values);
  assert.equal(settings.radarTransform(values, DUST2, player, [], { alternate: true }).zoom, 0.9);
  const square = settings.radarTransform(values, DUST2, player, [], { scoreboard: true });
  assert.equal(square.square, true); assert.equal(square.rotation, 0);
  const circle = settings.radarTransform({ ...values, cl_radar_square_with_scoreboard: 0 }, DUST2, player, [], { scoreboard: true });
  assert.equal(circle.square, false);
  assert.equal(settings.radarTransform({ cl_radar_square_always: 1 }, DUST2, player, []).square, true);
  assert.equal(JSON.stringify(values), before);
});

test('dynamic zoom responds to spread and remains in the legal range', () => {
  const values = { cl_radar_scale: 1, cl_radar_scale_dynamic: 1 };
  const near = settings.radarTransform(values, DUST2, player, [player]);
  const far = settings.radarTransform(values, DUST2, player, DUST2.markers);
  assert.ok(far.zoom < near.zoom);
  assert.ok(far.zoom >= 0.25 && far.zoom <= 1);
});

test('offscreen markers stay inside circular and square masks', () => {
  for (const p of [{ x: 8, y: -3 }, { x: 0.5, y: 0.5 }, { x: -1, y: 1 }]) {
    const circle = settings.clampMarker(p, false);
    assert.ok(Math.hypot(circle.x - 0.5, circle.y - 0.5) <= 0.4600001);
    const square = settings.clampMarker(p, true);
    assert.ok(square.x >= 0.04 && square.x <= 0.96 && square.y >= 0.04 && square.y <= 0.96);
  }
});

function loadApp() {
  const elements = new Map();
  const element = id => {
    if (!elements.has(id)) elements.set(id, { value: '', checked: false, querySelectorAll: () => [], querySelector: () => null });
    return elements.get(id);
  };
  const context = vm.createContext({ ...settings, Audio: class {}, localStorage: { getItem: () => null }, document: { querySelector: element }, console });
  const source = fs.readFileSync(new URL('../app.js', import.meta.url), 'utf8').replace(/^import .*;\n/gm, '').replace(/\ninit\(\);\s*$/, '');
  vm.runInContext(source, context);
  return { run: code => vm.runInContext(code, context), elements };
}

test('app preset selection updates both category copies and all offsets', () => {
  const app = loadApp();
  app.run('setSettingValue(findRow("viewmodel_position"), "2")');
  assert.equal(app.run('findRow("viewmodel_presetpos_main").value'), '2');
  assert.equal(app.run('findRow("viewmodel_fov").value'), '68');
  assert.equal(app.run('findRow("viewmodel_offset_y").value'), '0');
  app.run('setSettingValue(findRow("viewmodel_offset_x"), "0")');
  assert.equal(app.run('findRow("viewmodel_position").value'), 'custom');
  app.run('updateCommand()');
  const command = app.elements.get('#commandOutput').value;
  assert.match(command, /viewmodel_offset_x 0;/);
  assert.match(command, /viewmodel_offset_y 0;/);
  assert.match(command, /viewmodel_fov 68;/);
  assert.doesNotMatch(command, /custom|cl_righthand|__viewmodel/);
});

test('game and viewmodel handedness share one state and export one command', () => {
  const app = loadApp();
  app.run('setSettingValue(findRow("preferred_hand"), "1"); updateCommand()');
  assert.equal(app.run('findRow("viewmodel_handedness").value'), '1');
  assert.equal(app.elements.get('#commandOutput').value.match(/cl_prefer_lefthanded/g).length, 1);
});

test('radar-only change exports every radar setting and keeps preview controls out', () => {
  const app = loadApp();
  app.run('setSettingValue(findRow("radar_scale"), "0.4"); updateCommand()');
  const command = app.elements.get('#commandOutput').value;
  assert.match(command, /cl_radar_scale 0.4;/);
  assert.match(command, /cl_radar_scale_alternate 1;/);
  assert.match(command, /cl_hud_radar_scale 1;/);
  assert.doesNotMatch(command, /yaw|aspect|__|viewmodel_/);
});

test('View Setup routes and legacy radar/viewmodel links resolve to the correct subtab', () => {
  const app = loadApp();
  for (const route of ['#viewsetup', '#viewsetup/radar', '#radar', '#radar/radar', '#game/radar']) {
    assert.equal(app.run(`applySettingsRoute(${JSON.stringify(route)})`), true);
    assert.equal(app.run('currentCategory'), 'viewsetup');
    assert.equal(app.run('currentSectionId()'), 'radar');
  }
  for (const route of ['#viewsetup/viewmodel', '#viewmodel', '#viewmodel/main']) {
    assert.equal(app.run(`applySettingsRoute(${JSON.stringify(route)})`), true);
    assert.equal(app.run('currentCategory'), 'viewsetup');
    assert.equal(app.run('currentSectionId()'), 'viewmodel');
  }
  for (const route of ['#viewsetup/missing', '#radar/missing', '#__proto__', '#missing']) {
    assert.equal(app.run(`applySettingsRoute(${JSON.stringify(route)})`), false);
    assert.equal(app.run('currentSectionId()'), 'viewmodel');
  }
});

test('moved minimap retains settings, exports and saved values in View Setup', () => {
  const app = loadApp();
  assert.equal(app.run('state.game.tabs.some(tab => tab.id === "radar")'), false);
  assert.equal(app.run('allRows().filter(r => r.command === "cl_radar_scale").length'), 1);
  app.run('setSettingValue(state.viewsetup.sections[0].groups.flatMap(g => g.rows).find(r => r.command === "cl_radar_scale"), "0.25"); updateCommand()');
  assert.equal(app.run('allRows().filter(r => r.command === "cl_radar_scale").every(r => r.value === "0.25")'), true);
  assert.equal(app.elements.get('#commandOutput').value.match(/cl_radar_scale /g).length, 1);
  app.run('const radarSaved = createConfigSnapshot(); setSettingValue(findRow("radar_scale"), "1"); applyConfigSnapshot(radarSaved)');
  assert.equal(app.run('allRows().filter(r => r.command === "cl_radar_scale").every(r => r.value === "0.25")'), true);
});

test('saved categories from before View Setup migrate without losing selected controls', () => {
  const app = loadApp();
  for (const [category, section, expected] of [['radar', 'radar', 'radar'], ['game', 'radar', 'radar'], ['viewmodel', 'main', 'viewmodel'], ['viewsetup', 'viewmodel', 'viewmodel']]) {
    const saved = { currentCategory: category, currentSectionByCategory: { [category]: section }, previewVersion: 1, rows: [{type:'slider', command:'cl_radar_scale', value:'0.4'}] };
    app.run(`applyConfigSnapshot(${JSON.stringify(saved)})`);
    assert.equal(app.run('currentCategory'), 'viewsetup');
    assert.equal(app.run('currentSectionId()'), expected);
    assert.equal(app.run('findRow("radar_scale").value'), '0.4');
  }
});

test('a hidden or disposed shared preview does not initialize WebGL', async () => {
  for (const state of [{ isVisible: false, disposed: false }, { isVisible: true, disposed: true }]) {
    const studio = Object.create(PreviewStudio.prototype);
    Object.assign(studio, state, { setStatus() { assert.fail('inactive preview tried to initialize'); } });
    await studio.ensureWeapon();
    assert.equal(studio.weapon, undefined);
    assert.equal(studio.weaponLoading, undefined);
  }
});

test('old snapshots migrate handedness, clamp obsolete ranges and remain custom', () => {
  const app = loadApp();
  app.run('applyConfigSnapshot({ rows: [{type:"select",command:"cl_righthand",value:"0"}, {type:"select",command:"viewmodel_presetpos",value:"3"}, {type:"slider",command:"viewmodel_fov",value:"54"}, {type:"slider",command:"viewmodel_offset_x",value:"-2.5"}] })');
  assert.equal(app.run('findRow("viewmodel_handedness").value'), '1');
  assert.equal(app.run('findRow("viewmodel_fov").value'), '60');
  assert.equal(app.run('findRow("viewmodel_offset_x").value'), '-2');
  assert.equal(app.run('findRow("viewmodel_position").value'), 'custom');
});

test('saved configurations round trip independently of row order', () => {
  const app = loadApp();
  app.run('setSettingValue(findRow("viewmodel_position"), "2"); setSettingValue(findRow("viewmodel_offset_y"), "-1.2"); const saved = createConfigSnapshot(); saved.rows.reverse(); applyConfigSnapshot(saved)');
  assert.equal(app.run('findRow("viewmodel_offset_y").value'), '-1.2');
  assert.equal(app.run('findRow("viewmodel_position").value'), 'custom');
});

// Reconstruct real GLB geometry and node matrices, without a browser/texture
// decoder. This catches asset-axis and scale mistakes the math-only tests miss.
function readGlbGeometry(url) {
  const bytes = fs.readFileSync(new URL(`../${url}`, import.meta.url));
  const length = bytes.readUInt32LE(12);
  const gltf = JSON.parse(bytes.subarray(20, 20 + length).toString());
  const bin = bytes.subarray(28 + length);
  const nodes = gltf.nodes.map(node => {
    const object = new THREE.Group();
    if (node.matrix) object.applyMatrix4(new THREE.Matrix4().fromArray(node.matrix));
    if (node.translation) object.position.fromArray(node.translation);
    if (node.rotation) object.quaternion.fromArray(node.rotation);
    if (node.scale) object.scale.fromArray(node.scale);
    if (node.mesh !== undefined) for (const primitive of gltf.meshes[node.mesh].primitives) {
      const accessor = gltf.accessors[primitive.attributes.POSITION];
      const view = gltf.bufferViews[accessor.bufferView];
      const start = (view.byteOffset || 0) + (accessor.byteOffset || 0);
      const stride = view.byteStride || 12;
      const vertices = new Float32Array(accessor.count * 3);
      for (let i = 0; i < accessor.count; i++) for (let j = 0; j < 3; j++) vertices[i * 3 + j] = bin.readFloatLE(start + i * stride + j * 4);
      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
      object.add(new THREE.Mesh(geometry, new THREE.MeshStandardMaterial()));
    }
    return object;
  });
  gltf.nodes.forEach((node, i) => { for (const child of node.children || []) nodes[i].add(nodes[child]); });
  const scene = new THREE.Group();
  for (const node of gltf.scenes[gltf.scene || 0].nodes) scene.add(nodes[node]);
  return scene;
}

for (const [id, asset] of Object.entries(WEAPONS)) test(`${id} real geometry faces forward, stays below center and preserves scale`, () => {
  const model = prepareWeapon(readGlbGeometry(asset.url), asset);
  const box = new THREE.Box3().setFromObject(model);
  const size = box.getSize(new THREE.Vector3());
  close(size.z, asset.length, 0.0001);
  assert.ok(box.max.z < -1, 'model must remain in front of camera');
  assert.ok(box.getCenter(new THREE.Vector3()).y < 0, 'model belongs below the crosshair');
  const rig = new THREE.Group(); rig.add(model);
  const pose = settings.viewmodelTransform({});
  rig.position.fromArray(pose.position);
  const camera = new THREE.PerspectiveCamera(pose.fov, 16 / 9, 0.1, 200);
  const center = new THREE.Box3().setFromObject(rig).getCenter(new THREE.Vector3()).project(camera);
  assert.ok(center.x > 0 && center.x < 1 && center.y < 0 && center.y > -1);
  disposeObject(model);
});

test('late model loads after disposal release their resources without mounting', async () => {
  let resolve;
  const scene = new THREE.Group();
  const geometry = new THREE.BoxGeometry();
  let disposed = false; geometry.addEventListener('dispose', () => { disposed = true; });
  scene.add(new THREE.Mesh(geometry, new THREE.MeshStandardMaterial()));
  const renderer = Object.create(WeaponRenderer.prototype);
  Object.assign(renderer, { disposed: false, models: new Map(), pending: new Map(), rig: new THREE.Group(), onStatus() {}, render() {}, loader: { loadAsync: () => new Promise(done => { resolve = done; }) } });
  const task = renderer.select('m4a1s');
  renderer.disposed = true;
  resolve({ scene });
  await task;
  assert.equal(disposed, true);
  assert.equal(renderer.rig.children.length, 0);
});

test('rapid weapon switching cannot display a stale load', async () => {
  const waiting = new Map();
  const renderer = Object.create(WeaponRenderer.prototype);
  Object.assign(renderer, { disposed: false, models: new Map(), pending: new Map(), rig: new THREE.Group(), onStatus() {}, render() {}, loader: { loadAsync: url => new Promise(resolve => waiting.set(url, resolve)) } });
  const first = renderer.select('m4a1s'), second = renderer.select('awp');
  const geometry = () => ({ scene: new THREE.Mesh(new THREE.BoxGeometry(1, 2, 10), new THREE.MeshStandardMaterial()) });
  waiting.get(WEAPONS.awp.url)(geometry()); await second;
  waiting.get(WEAPONS.m4a1s.url)(geometry()); await first;
  assert.equal(renderer.models.get('awp').visible, true);
  assert.equal(renderer.models.get('m4a1s').visible, false);
  disposeObject(renderer.rig);
});

test('placeholder visibility applies to pending models and shares the weapon rig', async () => {
  let finish;
  const renderer = Object.create(WeaponRenderer.prototype);
  Object.assign(renderer, { disposed: false, models: new Map(), pending: new Map(), rig: new THREE.Group(), onStatus() {}, render() {}, loader: { loadAsync: () => new Promise(resolve => { finish = resolve; }) } });
  const task = renderer.select('m4a1s');
  renderer.setArmsVisible(false);
  finish({ scene: new THREE.Mesh(new THREE.BoxGeometry(1, 2, 10), new THREE.MeshStandardMaterial()) });
  await task;
  const arms = renderer.models.get('m4a1s').getObjectByName('placeholder-arms');
  assert.equal(arms.visible, false);
  assert.equal(arms.parent.parent, renderer.rig);
  renderer.setArmsVisible(true);
  assert.equal(arms.visible, true);
  disposeObject(renderer.rig);
});
