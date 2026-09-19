import test from 'node:test';
import assert from 'node:assert/strict';
import { advanceExplorer } from '../preview/navigation.mjs';
import { PreviewStudio } from '../preview/studio.mjs';

const origin = { id: 'mid', x: 0, y: 0, elevation: 64, yaw: 90, pitch: 0 };
const step = (keys, player = origin, dt = 0.04) => advanceExplorer(player, new Set(keys), dt);
const close = (a, b) => assert.ok(Math.abs(a - b) < 1e-8, `${a} != ${b}`);

test('free flight follows heading and pitch in the same coordinates as the radar', () => {
  close(step(['KeyW']).y, 10);
  close(step(['KeyS']).y, -10);
  close(step(['KeyD']).x, 10);
  close(step(['KeyA']).x, -10);
  close(step(['KeyW'], { ...origin, yaw: 0 }).x, 10);
  const tilted = step(['KeyW'], { ...origin, pitch: 30 });
  close(tilted.elevation, 69);
  close(tilted.y, Math.cos(Math.PI / 6) * 10);
  assert.equal(origin.elevation, 64);
});

test('diagonal movement is normalized, height is independent and Shift speeds up', () => {
  const diagonal = step(['KeyW', 'KeyD', 'KeyE']);
  close(Math.hypot(diagonal.x, diagonal.y, diagonal.elevation - 64), 10);
  close(step(['KeyQ']).elevation, 54);
  close(step(['KeyE']).elevation, 74);
  close(step(['KeyW', 'ShiftLeft']).y, 30);
  assert.deepEqual(step(['KeyW', 'KeyS']), origin);
});

test('long frames cannot teleport the camera and invalid deltas do not move it', () => {
  close(step(['KeyW'], origin, 10).y, 12.5);
  assert.deepEqual(step(['KeyW'], origin, -1), origin);
  assert.deepEqual(step(['KeyW'], origin, NaN), origin);
});

test('leaving navigation cancels its loop and releases every held key', () => {
  const studio = Object.create(PreviewStudio.prototype);
  studio.navigationKeys = new Set(['KeyW', 'ShiftLeft']); studio.navigationFrame = 123;
  const previous = globalThis.cancelAnimationFrame;
  let cancelled;
  globalThis.cancelAnimationFrame = id => { cancelled = id; };
  try { studio.stopNavigation(); } finally { globalThis.cancelAnimationFrame = previous; }
  assert.equal(cancelled, 123);
  assert.equal(studio.navigationKeys.size, 0);
  assert.equal(studio.navigationFrame, null);
});
