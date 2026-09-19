import * as THREE from '../vendor/three/three.module.js';
import { mergeGeometries } from '../vendor/three/addons/utils/BufferGeometryUtils.js';

// This particular export has no images/material maps. Freeze decorative rigs
// and batch spatially for navigation, without modifying the user's source GLB.
export function prepareMirage(root) {
  root.scale.setScalar(1 / 0.0254); // exported metres -> Source inches
  root.rotation.y = Math.PI / 2; // verified against the two bombsite decals
  root.updateMatrixWorld(true);
  const buckets = new Map(), oldGeometry = new Set(), oldMaterials = new Set(), skeletons = new Set();
  const vertex = new THREE.Vector3(), center = new THREE.Vector3();
  root.traverse(node => {
    if (!node.isMesh) return;
    oldGeometry.add(node.geometry);
    for (const m of [node.material].flat()) oldMaterials.add(m);
    if (node.skeleton) { node.skeleton.update(); skeletons.add(node.skeleton); }
    // Editor helper spheres and decals need their missing alpha textures;
    // drawing them as opaque polygons would obscure the actual architecture.
    if (/^Icosphere|mesh_overlay|tools(?:solid)?blocklight/i.test(node.name)) return;
    const input = node.geometry, geometry = new THREE.BufferGeometry();
    const position = input.getAttribute('position'), uv = input.getAttribute('uv'), normal = input.getAttribute('normal');
    const positions = new Float32Array(position.count * 3), uvs = new Float32Array(position.count * 2);
    const normals = normal ? new Float32Array(position.count * 3) : null;
    for (let i = 0; i < position.count; i++) {
      node.getVertexPosition(i, vertex).toArray(positions, i * 3);
      if (uv) { uvs[i * 2] = uv.getX(i); uvs[i * 2 + 1] = uv.getY(i); }
      if (normal) { normals[i * 3] = normal.getX(i); normals[i * 3 + 1] = normal.getY(i); normals[i * 3 + 2] = normal.getZ(i); }
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));
    if (normal) geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));
    geometry.setIndex(input.index ? input.index.clone() : Array.from({ length: position.count }, (_, i) => i));
    if (!normal) geometry.computeVertexNormals();
    geometry.applyMatrix4(node.matrixWorld);
    geometry.computeBoundingBox(); geometry.boundingBox.getCenter(center);
    const key = `${Math.floor(center.x / 1024)},${Math.floor(center.z / 1024)}`;
    if (!buckets.has(key)) buckets.set(key, []);
    buckets.get(key).push(geometry);
  });
  const result = new THREE.Group(); result.name = 'Mirage_CS2_geometry';
  const material = new THREE.MeshStandardMaterial({ color: 0xbab6ad, roughness: 0.95, side: THREE.DoubleSide, shadowSide: THREE.FrontSide });
  for (const [key, geometries] of buckets) {
    const geometry = mergeGeometries(geometries);
    const mesh = new THREE.Mesh(geometry, material); mesh.name = `Mirage_${key}`;
    mesh.castShadow = mesh.receiveShadow = true;
    geometry.computeBoundingSphere(); result.add(mesh);
    for (const g of geometries) g.dispose();
  }
  for (const g of oldGeometry) g.dispose();
  for (const m of oldMaterials) m.dispose();
  for (const s of skeletons) s.dispose();
  root.clear();
  result.updateMatrixWorld(true);
  return result;
}
