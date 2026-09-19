import * as THREE from '../vendor/three/three.module.js';
import { GLTFLoader } from '../vendor/three/addons/loaders/GLTFLoader.js';
import { WEAPONS, AGENT, WORLD, ENVIRONMENTS, DEFAULT_ENVIRONMENT } from './assets.mjs?v=20260919-mirage3';
import { viewmodelTransform } from './settings.mjs';
import { createPlaceholderArms } from './arms.mjs?v=20260919-mirage3';
import { AgentArms } from './agent.mjs?v=20260919-mirage3';
import { MapWorld } from './world.mjs?v=20260919-mirage3';
import { ViewmodelAnimations } from './animation.mjs?v=20260919-mirage3';

export function disposeObject(root) {
  const geometries = new Set(), materials = new Set(), textures = new Set(), skeletons = new Set();
  root.traverse(node => {
    if (node.geometry) geometries.add(node.geometry);
    if (node.shadow) { node.shadow.map?.dispose(); node.shadow.mapPass?.dispose(); }
    if (node.skeleton) skeletons.add(node.skeleton);
    for (const material of [node.material].flat().filter(Boolean)) {
      materials.add(material);
      for (const value of Object.values(material)) if (value?.isTexture) textures.add(value);
    }
  });
  for (const texture of textures) { texture.dispose(); texture.source?.data?.close?.(); }
  for (const material of materials) material.dispose();
  for (const geometry of geometries) geometry.dispose();
  for (const skeleton of skeletons) skeleton.dispose();
}

export function prepareWeapon(scene, asset) {
  const bounds = new THREE.Box3().setFromObject(scene);
  const size = bounds.getSize(new THREE.Vector3());
  const center = bounds.getCenter(new THREE.Vector3());
  const model = new THREE.Group();
  const centered = new THREE.Group();
  // Preserve the glTF root transforms, UVs, normals and original PBR materials.
  centered.add(scene);
  scene.position.sub(center);
  centered.scale.setScalar(asset.length / Math.max(size.x, size.y, size.z));
  model.add(centered);
  model.position.fromArray(asset.position);
  model.rotation.fromArray(asset.rotation);
  return model;
}

export class WeaponRenderer {
  constructor(canvas, onStatus, { environment = DEFAULT_ENVIRONMENT } = {}) {
    this.onStatus = onStatus;
    this.models = new Map();
    this.pending = new Map();
    this.worlds = new Map();
    this.worldLoads = new Map();
    this.disposed = false;
    this.active = true;
    this.assetStates = { world: 'loading', arms: 'loading', weapon: 'loading' };
    this.renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: 'low-power' });
    this.renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
    this.renderer.setClearColor(0, 0);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;
    this.renderer.autoClear = false;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.shadowMap.autoUpdate = false;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(45, 16 / 9, 0.1, 200);
    this.rig = new THREE.Group();
    this.poseRig = new THREE.Group();
    this.poseRig.add(this.rig);
    this.animation = new ViewmodelAnimations(this.rig);
    this.scene.add(this.poseRig, new THREE.HemisphereLight(0xe4efff, 0x787164, 2.5));
    const sun = new THREE.DirectionalLight(0xffefd7, 3);
    sun.position.set(-15, 30, 15);
    const fill = new THREE.DirectionalLight(0xc3d9f7, 1.3);
    fill.position.set(20, 5, -20);
    this.scene.add(sun, fill);
    this.loader = new GLTFLoader();
    this.setEnvironment(environment);
    this.loadArms();
    this.contextLost = event => {
      event.preventDefault();
      this.setActive(false);
      this.onStatus('error');
    };
    this.contextRestored = () => { this.setActive(true); this.notify('weapon', this.models.has(this.selected) ? 'ready' : 'loading'); this.render(); };
    canvas.addEventListener('webglcontextlost', this.contextLost);
    canvas.addEventListener('webglcontextrestored', this.contextRestored);
  }

  notify(kind, state) {
    if (this.disposed) return;
    if (!this.assetStates) { this.onStatus(state); return; }
    this.assetStates[kind] = state;
    const states = Object.values(this.assetStates);
    this.onStatus(states.includes('error') ? 'error' : states.includes('loading') ? 'loading' : 'ready');
  }

  setEnvironment(id) {
    this.environment = Object.hasOwn(ENVIRONMENTS, id) ? id : DEFAULT_ENVIRONMENT;
    this.worlds ||= new Map(); this.worldLoads ||= new Map();
    this.world = this.worlds.get(this.environment) || null;
    if (ENVIRONMENTS[this.environment].kind === 'world' && !this.world) {
      this.notify('world', 'loading');
      if (!this.worldLoads.has(this.environment)) {
        const selected = this.environment;
        const task = this.loadEnvironment(selected).finally(() => {
          this.worldLoads.delete(selected);
          if (this.environmentPending === task) this.environmentPending = null;
        });
        this.worldLoads.set(selected, task);
      }
      this.environmentPending = this.worldLoads.get(this.environment);
    } else {
      if (this.world) this.activateWorld();
      this.notify('world', 'ready');
    }
    this.render();
  }

  activateWorld() {
    this.world.resize(this.camera.aspect);
    if (this.player) this.world.setPlayer(this.player);
    if (this.renderer?.shadowMap) this.renderer.shadowMap.needsUpdate = true;
  }

  async loadEnvironment(id = 'classic') {
    let gltf;
    try {
      const asset = ENVIRONMENTS[id].world;
      gltf = await this.loader.loadAsync(asset.url);
      if (this.disposed) { disposeObject(gltf.scene); return; }
      const world = new MapWorld(gltf.scene, asset);
      this.worlds ||= new Map(); this.worlds.set(id, world);
      if (this.environment === id) {
        this.world = world;
        this.activateWorld();
        this.notify('world', 'ready');
        this.render();
      }
    } catch (error) {
      if (gltf && !this.worlds?.has(id)) disposeObject(gltf.scene);
      if (this.environment === id) this.notify('world', 'error');
      console.warn('Map unavailable', error);
    }
  }

  async loadArms() {
    let gltf;
    try {
      gltf = await this.loader.loadAsync(AGENT.url);
      if (this.disposed) { disposeObject(gltf.scene); return; }
      const agent = new AgentArms(gltf.scene);
      agent.pose(WEAPONS[this.selected] || WEAPONS.m4a1s);
      this.agent = agent;
      this.rig.add(this.agent.root);
      this.setArmsVisible(this.armsVisible !== false);
      this.notify('arms', 'ready');
      this.render();
    } catch (error) {
      if (gltf && !this.agent) disposeObject(gltf.scene);
      this.notify('arms', 'error'); console.warn('Miami arms unavailable', error);
    }
  }

  async select(id) {
    if (this.disposed) return;
    const asset = WEAPONS[id];
    if (!asset) return;
    this.animation?.stop();
    this.selected = id;
    this.agent?.pose(asset);
    for (const [key, model] of this.models) model.visible = key === id;
    this.render();
    if (this.models.has(id)) { this.notify('weapon', 'ready'); this.playAnimation(); return; }
    this.notify('weapon', 'loading');
    if (!this.pending.has(id)) {
      const promise = this.loader.loadAsync(asset.url).then(gltf => {
        if (this.disposed) { disposeObject(gltf.scene); return; }
        const model = new THREE.Group();
        model.add(prepareWeapon(gltf.scene, asset));
        const arms = createPlaceholderArms(asset);
        arms.visible = this.armsVisible !== false && !this.agent;
        model.add(arms);
        model.visible = this.selected === id;
        this.models.set(id, model);
        this.rig.add(model);
      });
      this.pending.set(id, promise);
    }
    try {
      await this.pending.get(id);
      if (!this.disposed && this.selected === id) { this.notify('weapon', 'ready'); this.playAnimation(); this.render(); }
    } catch (error) {
      if (!this.disposed && this.selected === id) this.notify('weapon', 'error');
      console.warn(`Unable to load ${asset.name}`, error);
    } finally {
      this.pending.delete(id);
    }
  }

  update(settings, width, height, aspect) {
    if (this.disposed) return;
    const pose = viewmodelTransform(settings);
    this.camera.fov = pose.fov;
    this.camera.aspect = aspect;
    this.camera.updateProjectionMatrix();
    this.poseRig.position.fromArray(pose.position);
    this.poseRig.scale.fromArray(pose.scale);
    this.world?.resize(aspect);
    this.renderer.setSize(Math.max(1, width), Math.max(1, height), false);
    this.render();
  }

  setArmsVisible(visible) {
    this.armsVisible = visible;
    if (this.agent) this.agent.root.visible = visible;
    for (const model of this.models.values()) model.getObjectByName('placeholder-arms').visible = visible && !this.agent;
    this.render();
  }

  setPlayer(player) {
    this.player = { ...player };
    this.world?.setPlayer(player);
    this.render();
  }

  getCameraPosition() {
    if (!this.world) return null;
    const p = this.world.camera.position;
    return { x: p.x, y: -p.z, elevation: p.y };
  }

  setActive(active) {
    this.active = active;
    if (!active) { cancelAnimationFrame(this.frame); this.animation?.stop(); }
    else this.render();
  }

  registerAnimation(action, clip) { return this.animation?.register(action, clip) || false; }

  playAnimation(action = 'equip') {
    if (!this.animation || this.disposed || !this.active) return false;
    cancelAnimationFrame(this.frame);
    if (!this.animation.play(action)) return false;
    let previous;
    const tick = now => {
      if (this.disposed || !this.active) return;
      const running = this.animation.tick(previous == null ? 0 : (now - previous) / 1000);
      previous = now;
      this.render();
      if (running) this.frame = requestAnimationFrame(tick);
    };
    this.frame = requestAnimationFrame(tick);
    return true;
  }

  // Material-slot boundary for future skin assets. It accepts complete PBR
  // materials with compatible UVs; it does not pretend a tint is a CS2 skin.
  setMaterial(id, slot, material) {
    const root = this.models.get(id);
    if (!root || !WEAPONS[id].materials.includes(slot)) return false;
    root.traverse(node => {
      if (!node.isMesh) return;
      const original = node.userData.originalMaterials ||= [node.material].flat();
      const previous = [node.material].flat();
      const next = original.map((base, index) => {
        if (base.name !== slot) return previous[index];
        if (previous[index] !== base) previous[index].dispose();
        return material ? material.clone() : base;
      });
      node.material = Array.isArray(node.material) ? next : next[0];
    });
    this.render();
    return true;
  }

  render() {
    if (this.disposed) return;
    this.renderer.clear();
    if (this.world) this.renderer.render(this.world.scene, this.world.camera);
    this.renderer.clearDepth();
    this.renderer.render(this.scene, this.camera);
  }

  dispose() {
    if (this.disposed) return;
    this.disposed = true;
    cancelAnimationFrame(this.frame);
    this.animation.dispose();
    const canvas = this.renderer.domElement;
    canvas.removeEventListener('webglcontextlost', this.contextLost);
    canvas.removeEventListener('webglcontextrestored', this.contextRestored);
    // Restore originals so shared maps and unselected variants are released once.
    this.scene.traverse(node => {
      if (!node.userData.originalMaterials) return;
      const originals = node.userData.originalMaterials;
      for (const material of [node.material].flat()) if (!originals.includes(material)) material.dispose();
      node.material = originals;
    });
    disposeObject(this.scene);
    for (const world of new Set([this.world, ...this.worlds.values()].filter(Boolean))) disposeObject(world.scene);
    this.worlds.clear();
    this.models.clear();
    this.renderer.dispose();
    this.renderer.forceContextLoss();
  }
}
