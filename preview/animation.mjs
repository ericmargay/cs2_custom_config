import * as THREE from '../vendor/three/three.module.js';

const ACTIONS = new Set(['equip', 'holster', 'inspect', 'select_grenade']);

// Only first-person actions belong here. Locomotion and full-agent animations
// are deliberately outside this layer. Native clips must target this rig's
// bone/object names; they are not automatically retargeted from arbitrary rigs.
export class ViewmodelAnimations {
  constructor(root) {
    this.root = root;
    this.mixer = new THREE.AnimationMixer(root);
    this.clips = new Map();
    this.clips.set('equip', new THREE.AnimationClip('preview_equip', 0.65, [
      new THREE.VectorKeyframeTrack('.position', [0, 0.35, 0.52, 0.65], [0, -9, 4, 0, -1, 0.5, 0, 0.2, 0, 0, 0, 0]),
      new THREE.QuaternionKeyframeTrack('.quaternion', [0, 0.35, 0.65], [
        ...new THREE.Quaternion().setFromEuler(new THREE.Euler(-0.35, 0.12, -0.22)).toArray(),
        ...new THREE.Quaternion().setFromEuler(new THREE.Euler(0.025, 0, 0.03)).toArray(),
        0, 0, 0, 1
      ])
    ]));
    this.mixer.addEventListener('finished', () => { this.active = false; });
  }

  register(action, clip) {
    if (!ACTIONS.has(action) || !(clip instanceof THREE.AnimationClip)) return false;
    this.stop();
    const previous = this.clips.get(action);
    if (previous) this.mixer.uncacheClip(previous);
    this.clips.set(action, clip);
    return true;
  }

  play(action = 'equip') {
    const clip = this.clips.get(action);
    if (!clip) return false;
    this.stop();
    this.action = this.mixer.clipAction(clip);
    this.action.setLoop(THREE.LoopOnce, 1);
    this.action.clampWhenFinished = true;
    this.action.reset().play();
    this.active = true;
    return true;
  }

  tick(delta) { if (this.active) this.mixer.update(Math.min(delta, 0.05)); return this.active; }
  stop() { this.mixer.stopAllAction(); this.root.position.set(0, 0, 0); this.root.quaternion.identity(); this.active = false; }
  dispose() { this.stop(); this.mixer.uncacheRoot(this.root); this.clips.clear(); }
}
