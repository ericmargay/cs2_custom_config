import * as THREE from '../vendor/three/three.module.js';

const v = values => new THREE.Vector3(...values);
const Y = new THREE.Vector3(0, 1, 0);

// Two-bone IK runs in the unmirrored viewmodel's coordinate system. Keep the
// supplied skeleton and skin weights: future clips can address the same bones.
export class AgentArms {
  constructor(scene) {
    this.root = new THREE.Group();
    this.root.name = 'miami-arms';
    this.root.add(scene);
    this.root.scale.setScalar(1 / 0.0254);
    this.root.rotation.y = Math.PI;
    this.root.position.set(0, -72, -12);
    this.bones = new Map();
    scene.traverse(node => {
      if (node.isBone) this.bones.set(node.name, { bone: node, rest: node.quaternion.clone() });
      if (node.isSkinnedMesh) node.frustumCulled = false;
    });
    for (const side of ['l', 'r']) for (const name of [`arm_upper_${side}`, `arm_lower_${side}`, `hand_${side}`]) {
      if (!this.bones.has(name)) throw new Error(`Miami rig is missing ${name}`);
    }
  }

  orient(bone, quaternion) {
    const parentRotation = bone.parent.getWorldQuaternion(new THREE.Quaternion());
    bone.quaternion.copy(parentRotation.invert().multiply(quaternion));
    this.root.updateMatrixWorld(true);
  }

  aim(bone, endpoint, direction) {
    const origin = bone.getWorldPosition(new THREE.Vector3());
    const axis = endpoint.getWorldPosition(new THREE.Vector3()).sub(origin).normalize();
    const rotation = new THREE.Quaternion().setFromUnitVectors(axis, direction.clone().normalize());
    this.orient(bone, rotation.multiply(bone.getWorldQuaternion(new THREE.Quaternion())));
  }

  solve(side, wrist, pole, handRotation) {
    const upper = this.bones.get(`arm_upper_${side}`).bone;
    const lower = this.bones.get(`arm_lower_${side}`).bone;
    const hand = this.bones.get(`hand_${side}`).bone;
    const shoulder = upper.getWorldPosition(new THREE.Vector3());
    const elbow = lower.getWorldPosition(new THREE.Vector3());
    const end = hand.getWorldPosition(new THREE.Vector3());
    const a = shoulder.distanceTo(elbow), b = elbow.distanceTo(end);
    const direction = v(wrist).sub(shoulder);
    const distance = THREE.MathUtils.clamp(direction.length(), Math.abs(a - b) + 0.01, a + b - 0.01);
    direction.normalize();
    const bend = v(pole).sub(shoulder);
    bend.addScaledVector(direction, -bend.dot(direction));
    if (bend.lengthSq() < 1e-6) bend.crossVectors(direction, Y);
    bend.normalize();
    const along = (a * a - b * b + distance * distance) / (2 * distance);
    const joint = shoulder.clone().addScaledVector(direction, along).addScaledVector(bend, Math.sqrt(Math.max(0, a * a - along * along)));
    this.aim(upper, lower, joint.clone().sub(shoulder));
    this.aim(lower, hand, shoulder.clone().addScaledVector(direction, distance).sub(lower.getWorldPosition(new THREE.Vector3())));
    this.orient(hand, new THREE.Quaternion().setFromEuler(new THREE.Euler(...handRotation)));
  }

  pose(asset) {
    // Detaching avoids baking user offsets, handedness or the equip animation
    // into the bone pose. The whole arm/weapon rig is transformed afterwards.
    const parent = this.root.parent;
    this.root.removeFromParent();
    for (const { bone, rest } of this.bones.values()) bone.quaternion.copy(rest);
    this.root.updateMatrixWorld(true);
    for (const side of ['l', 'r']) {
      const grip = asset.agentPose[side];
      this.solve(side, grip.wrist, grip.pole, grip.rotation);
      for (const finger of ['index', 'middle', 'ring', 'pinky']) for (const segment of [0, 1, 2]) {
        const bone = this.bones.get(`finger_${finger}_${segment}_${side}`)?.bone;
        if (bone) bone.rotateX((side === 'l' ? 1 : -1) * (segment === 0 ? 0.55 : 0.75));
      }
    }
    this.root.updateMatrixWorld(true);
    parent?.add(this.root);
  }
}
