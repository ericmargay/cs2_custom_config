import * as THREE from '../vendor/three/three.module.js';
import { DUST2, WORLD } from './assets.mjs?v=20260919-mirage3';
import { prepareMirage } from './map-geometry.mjs?v=20260919-mirage3';
import { verticalFov } from './settings.mjs';

export function prepareWorld(root) {
  // Undo Sketchfab's display translation/scale, retaining the OBJ axis flip.
  // Model coordinates are Source units: X east, -Z north, Y elevation.
  const model = root.children[0];
  model.position.set(0, 0, 0);
  model.rotation.set(Math.PI, 0, 0);
  model.scale.setScalar(1);
  root.traverse(node => {
    if (!node.isMesh) return;
    // The classic level already has its lighting baked into its textures.
    const material = node.material;
    node.material = new THREE.MeshBasicMaterial({ map: material.map, color: material.color, side: THREE.FrontSide });
    material.dispose();
  });
  root.updateMatrixWorld(true);
  return root;
}

export class MapWorld {
  constructor(root, asset = WORLD) {
    this.map = asset.map || DUST2;
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xa8c8dc);
    this.scene.fog = new THREE.Fog(0xa8c8dc, 4500, 11000);
    this.root = asset.format === 'mirage-sketchfab' ? prepareMirage(root) : prepareWorld(root);
    this.scene.add(this.root);
    if (asset.format === 'mirage-sketchfab') {
      this.scene.add(new THREE.HemisphereLight(0xddeeff, 0x887962, 1.6));
      const sun = new THREE.DirectionalLight(0xfff0da, 2.2);
      sun.position.set(-1400, 3200, -1000);
      sun.target.position.set(-700, 0, 800);
      sun.castShadow = true;
      Object.assign(sun.shadow.camera, { left: -4000, right: 4000, top: 4000, bottom: -4000, near: 1, far: 10000 });
      sun.shadow.mapSize.set(2048, 2048); sun.shadow.normalBias = 4; sun.shadow.bias = -0.0005;
      this.scene.add(sun, sun.target);
    }
    this.camera = new THREE.PerspectiveCamera(verticalFov(90), 16 / 9, 1, 16000);
    this.camera.rotation.order = 'YXZ';
    this.ray = new THREE.Raycaster();
  }

  setPlayer(player) {
    const station = this.map.positions.find(p => p.id === player.id) || this.map.positions[0];
    const x = Number.isFinite(player.x) ? player.x : station.x;
    const y = Number.isFinite(player.y) ? player.y : station.y;
    let elevation = player.elevation;
    if (!Number.isFinite(elevation)) {
      this.ray.set(new THREE.Vector3(x, station.floorProbe ?? 1000, -y), new THREE.Vector3(0, -1, 0));
      elevation = (this.ray.intersectObject(this.root, true)[0]?.point.y ?? 0) + 64;
    }
    this.camera.position.set(x, elevation, -y);
    this.camera.rotation.y = (player.yaw - 90) * Math.PI / 180;
    this.camera.rotation.x = (player.pitch || 0) * Math.PI / 180;
    this.camera.updateMatrixWorld(true);
  }

  resize(aspect) {
    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();
  }
}
