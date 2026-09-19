import * as THREE from '../vendor/three/three.module.js';

// Temporary, unrigged geometry in camera-space units. Grip anchors are isolated
// per weapon; a real first-person rig can replace this group without touching
// FOV, offsets, handedness or command exports.
export function createPlaceholderArms(asset) {
  const root = new THREE.Group();
  root.name = 'placeholder-arms';
  const sleeve = new THREE.MeshStandardMaterial({ color: 0x48534e, roughness: 0.94 });
  const glove = new THREE.MeshStandardMaterial({ color: 0x282c29, roughness: 0.86 });
  const pad = new THREE.MeshStandardMaterial({ color: 0x42453e, roughness: 0.9 });
  const up = new THREE.Vector3(0, 1, 0);
  const segment = (from, to, startRadius, endRadius, material) => {
    const a = new THREE.Vector3(...from), b = new THREE.Vector3(...to);
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(endRadius, startRadius, a.distanceTo(b), 12), material);
    mesh.position.copy(a).add(b).multiplyScalar(0.5);
    mesh.quaternion.setFromUnitVectors(up, b.sub(a).normalize());
    root.add(mesh);
  };
  const rounded = (position, scale, material) => {
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(1, 16, 10), material);
    mesh.position.fromArray(position);
    mesh.scale.fromArray(scale);
    root.add(mesh);
  };
  for (const grip of asset.grips) {
    const [x, y, z] = grip.palm;
    const wrist = [x - (grip.support ? 1.2 : -0.3), y - 1.5, z + 1.8];
    segment(grip.elbow, wrist, 2.0, 1.15, sleeve);
    segment(wrist, [x, y - 0.3, z], 1.15, 0.9, glove);
    rounded([x, y, z], [1.05, 0.8, 1.65], glove);
    rounded([x - 0.5, y - 0.1, z], [0.6, 0.65, 1.3], pad);
    // Four curled fingers and a thumb wrapping around the fore-end / grip.
    for (let finger = 0; finger < 4; finger++) {
      const depth = z - 0.9 + finger * 0.57;
      rounded([x + 0.8, y + 0.4, depth], [0.37, 0.72, 0.28], glove);
      rounded([x + 0.65, y + 0.9, depth], [0.43, 0.28, 0.28], pad);
    }
    rounded([x - 0.72, y + 0.65, z - 0.6], [0.38, 0.65, 0.65], glove);
  }
  return root;
}
