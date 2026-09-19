import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import * as THREE from '../vendor/three/three.module.js';
import { GLTFLoader } from '../vendor/three/addons/loaders/GLTFLoader.js';
import { AGENT, WORLD, WEAPONS, DUST2, MIRAGE, MIRAGE_WORLD } from '../preview/assets.mjs';
import { AgentArms } from '../preview/agent.mjs';
import { MapWorld } from '../preview/world.mjs';
import { ViewmodelAnimations } from '../preview/animation.mjs';
import { WeaponRenderer, disposeObject } from '../preview/weapon.mjs';

globalThis.ProgressEvent ||= class { constructor(type, properties) { Object.assign(this, { type }, properties); } };

// The real loader reconstructs skin weights, skeletons and indexed geometry.
// Only image decoding is omitted so these asset checks can run without a GPU.
async function loadGeometry(url) {
  const bytes = fs.readFileSync(new URL(`../${url}`, import.meta.url));
  const length = bytes.readUInt32LE(12);
  const gltf = JSON.parse(bytes.subarray(20, 20 + length));
  const bin = bytes.subarray(28 + length);
  for (const mesh of gltf.meshes) for (const primitive of mesh.primitives) delete primitive.material;
  delete gltf.materials; delete gltf.textures; delete gltf.images;
  gltf.buffers = [{ byteLength: bin.length, uri: `data:application/octet-stream;base64,${bin.toString('base64')}` }];
  return new GLTFLoader().parseAsync(JSON.stringify(gltf), '');
}

test('extracted Miami arms retain a working skeleton and reach both weapon grips', async () => {
  const gltf = await loadGeometry(AGENT.url);
  assert.equal(gltf.animations.length, 0, 'source contains no native equip clips');
  const agent = new AgentArms(gltf.scene);
  assert.equal(agent.bones.size, 74);
  const meshes = [];
  agent.root.traverse(node => { if (node.isSkinnedMesh) meshes.push(node); });
  assert.equal(meshes.length, 2, 'only sleeve and glove meshes should remain');
  for (const mesh of meshes) assert.ok(mesh.geometry.getAttribute('skinWeight').count > 1000);
  for (const asset of Object.values(WEAPONS)) {
    agent.pose(asset);
    for (const side of ['l', 'r']) {
      const wrist = agent.bones.get(`hand_${side}`).bone.getWorldPosition(new THREE.Vector3());
      assert.ok(wrist.distanceTo(new THREE.Vector3(...asset.agentPose[side].wrist)) < 0.001);
    }
    for (const mesh of meshes) {
      mesh.skeleton.update();
      assert.ok(mesh.skeleton.boneMatrices.every(Number.isFinite));
      for (let i = 0; i < mesh.geometry.attributes.position.count; i += 25) {
        const vertex = new THREE.Vector3(); mesh.getVertexPosition(i, vertex);
        assert.ok(vertex.toArray().every(Number.isFinite));
      }
    }
    const expected = [...agent.bones.values()].map(({ bone }) => bone.quaternion.toArray());
    const parent = new THREE.Group();
    parent.position.set(-2, -9, 3); parent.rotation.set(0.3, 0.4, 0.1); parent.scale.x = -1;
    parent.add(agent.root); parent.updateMatrixWorld(true);
    agent.pose(asset);
    assert.equal(agent.root.parent, parent);
    for (const [{ bone }, quaternion] of [...agent.bones.values()].map((bone, i) => [bone, expected[i]])) {
      assert.ok(bone.quaternion.toArray().every((value, i) => Math.abs(value - quaternion[i]) < 1e-8), 'posing must ignore parent offsets, mirroring and equip transition');
    }
    agent.root.removeFromParent();
  }
  disposeObject(agent.root);
});

test('map stations stand on actual geometry and cardinal headings match the radar', async () => {
  const world = new MapWorld((await loadGeometry(WORLD.url)).scene);
  const floorHeights = { mid: -8, a: 96, b: 0, t: 128 };
  for (const station of DUST2.positions) {
    world.setPlayer(station);
    assert.ok(Math.abs(world.camera.position.y - floorHeights[station.id] - 64) < 0.01);
    assert.equal(world.camera.position.x, station.x);
    assert.equal(world.camera.position.z, -station.y);
  }
  for (const yaw of [0, 90, 180, 270]) {
    world.setPlayer({ ...DUST2.positions[0], yaw });
    const direction = world.camera.getWorldDirection(new THREE.Vector3());
    assert.ok(direction.distanceTo(new THREE.Vector3(Math.cos(yaw * Math.PI / 180), 0, -Math.sin(yaw * Math.PI / 180))) < 1e-6);
  }
  const renderer = Object.create(WeaponRenderer.prototype);
  Object.assign(renderer, { world, camera: new THREE.PerspectiveCamera(), poseRig: new THREE.Group(), renderer: { setSize() {} }, render() {} });
  world.setPlayer({ ...DUST2.positions[0], x: 100, y: 200, elevation: 300 });
  assert.deepEqual(world.camera.position.toArray(), [100, 300, -200]);
  renderer.environment = 'classic';
  assert.deepEqual(renderer.getCameraPosition(), { x: 100, y: 200, elevation: 300 });
  const fov = world.camera.fov;
  renderer.update({ viewmodel_fov: 60 }, 800, 450, 16 / 9);
  const low = renderer.camera.fov;
  renderer.update({ viewmodel_fov: 68 }, 800, 600, 4 / 3);
  assert.ok(renderer.camera.fov > low);
  assert.equal(world.camera.fov, fov, 'viewmodel FOV must not zoom the map');
  assert.equal(world.camera.aspect, 4 / 3);
  disposeObject(world.scene);
});

test('equip finishes at rest, cancels cleanly and only accepts first-person actions', () => {
  const root = new THREE.Group();
  const animations = new ViewmodelAnimations(root);
  assert.equal(animations.play(), true);
  animations.tick(0.05);
  assert.ok(root.position.y < -1);
  for (let i = 0; i < 20; i++) animations.tick(0.05);
  assert.equal(animations.active, false);
  assert.ok(root.position.length() < 1e-6);
  assert.ok(root.quaternion.angleTo(new THREE.Quaternion()) < 1e-6);
  animations.play(); animations.tick(0.05); animations.stop();
  assert.equal(root.position.length(), 0);
  assert.equal(animations.active, false);
  const grenade = new THREE.AnimationClip('grenade', 0.3, []);
  assert.equal(animations.register('select_grenade', grenade), true);
  assert.equal(animations.play('select_grenade'), true);
  assert.equal(animations.register('walk', grenade), false);
  assert.equal(animations.register('equip', {}), false);
  animations.dispose();
  assert.equal(animations.clips.size, 0);
});

test('static scene skips world loading; repeated classic selection shares one load', async () => {
  let finish, loads = 0;
  const renderer = Object.create(WeaponRenderer.prototype);
  const states = [];
  Object.assign(renderer, {
    notify(kind, value) { states.push([kind, value]); }, render() {},
    loadEnvironment() { loads++; return new Promise(resolve => { finish = resolve; }); }
  });
  renderer.setEnvironment('cs2');
  assert.equal(loads, 0);
  renderer.setEnvironment('classic'); renderer.setEnvironment('classic');
  assert.equal(loads, 1);
  renderer.setEnvironment('cs2');
  assert.deepEqual(states.at(-1), ['world', 'ready']);
  finish(); await renderer.environmentPending;
  assert.equal(renderer.environment, 'cs2');
  assert.equal(renderer.environmentPending, null);
});

test('switching to static hides a cached world while preserving the interactive weapon', () => {
  const rendered = [];
  const renderer = Object.create(WeaponRenderer.prototype);
  Object.assign(renderer, {
    worlds: new Map([['classic', { scene: 'map', camera: 'map-camera', resize() {} }]]), scene: 'weapon', camera: 'weapon-camera',
    notify() {}, renderer: { clear() {}, clearDepth() {}, render(scene) { rendered.push(scene); } }
  });
  renderer.setEnvironment('classic');
  assert.deepEqual(rendered, ['map', 'weapon']);
  rendered.length = 0;
  renderer.setEnvironment('cs2');
  assert.deepEqual(rendered, ['weapon']);
  assert.equal(renderer.world, null);
  assert.equal(renderer.worlds.get('classic').scene, 'map');
});

test('a failed classic load cannot leave the static scene in error', async () => {
  let reject;
  const renderer = Object.create(WeaponRenderer.prototype);
  const states = [];
  Object.assign(renderer, {
    loader: { loadAsync: () => new Promise((_, fail) => { reject = fail; }) },
    notify(kind, value) { states.push(value); }, render() {}
  });
  renderer.setEnvironment('classic');
  renderer.setEnvironment('cs2');
  const warn = console.warn;
  try {
    console.warn = () => {};
    reject(new Error('offline')); await renderer.environmentPending;
  } finally { console.warn = warn; }
  assert.equal(states.at(-1), 'ready');
  assert.equal(renderer.world, null);
});

test('real Mirage geometry is aligned, batched and navigable at all four stations', async () => {
  const gltf = await loadGeometry(MIRAGE_WORLD.url);
  const world = new MapWorld(gltf.scene, MIRAGE_WORLD);
  assert.ok(world.root.children.length < 100, 'thousands of source meshes should be spatially batched');
  let triangles = 0;
  world.root.traverse(n => { if (n.isMesh) triangles += n.geometry.index.count / 3; });
  assert.ok(triangles > 1000000, 'retain map architecture and props');
  const floors = { mid: -272.373, a: -180, b: -160, t: -168 };
  for (const station of MIRAGE.positions) {
    world.setPlayer(station);
    assert.ok(Math.abs(world.camera.position.y - floors[station.id] - 64) < 0.1, station.id);
    assert.equal(world.camera.position.x, station.x);
    assert.equal(world.camera.position.z, -station.y);
  }
  world.setPlayer({ ...MIRAGE.positions[0], x: -100, y: -200, elevation: 400 });
  assert.deepEqual(world.camera.position.toArray(), [-100, 400, 200]);
  disposeObject(world.scene);
});

test('a late map load is cached without replacing the currently selected map', async () => {
  const pending = new Map();
  const renderer = Object.create(WeaponRenderer.prototype);
  Object.assign(renderer, {
    loader: { loadAsync: url => new Promise(resolve => pending.set(url, resolve)) },
    camera: new THREE.PerspectiveCamera(), notify() {}, render() {}
  });
  const scene = () => { const root = new THREE.Group(); root.add(new THREE.Mesh(new THREE.BoxGeometry(), new THREE.MeshStandardMaterial())); return { scene: root }; };
  renderer.setEnvironment('classic');
  const classic = renderer.environmentPending;
  renderer.setEnvironment('mirage');
  const mirage = renderer.environmentPending;
  pending.get(MIRAGE_WORLD.url)(scene()); await mirage;
  const selected = renderer.world;
  pending.get(WORLD.url)(scene()); await classic;
  assert.equal(renderer.environment, 'mirage');
  assert.equal(renderer.world, selected);
  assert.deepEqual(renderer.world.map, MIRAGE);
  renderer.setEnvironment('classic');
  assert.deepEqual(renderer.world.map, DUST2);
  for (const world of renderer.worlds.values()) disposeObject(world.scene);
});

for (const method of ['loadEnvironment', 'loadArms']) test(`${method} releases late assets after leaving View Setup`, async () => {
  let resolve, released = false;
  const scene = new THREE.Group();
  const geometry = new THREE.BoxGeometry();
  geometry.addEventListener('dispose', () => { released = true; });
  scene.add(new THREE.Mesh(geometry, new THREE.MeshStandardMaterial()));
  const renderer = Object.create(WeaponRenderer.prototype);
  Object.assign(renderer, { loader: { loadAsync: () => new Promise(done => { resolve = done; }) }, onStatus() { assert.fail('disposed preview updated status'); } });
  const pending = renderer[method]();
  renderer.disposed = true; resolve({ scene }); await pending;
  assert.equal(released, true);
  assert.equal(renderer.world, undefined);
  assert.equal(renderer.agent, undefined);
});
