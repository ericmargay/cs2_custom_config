// Free-flight inspection of a scene, in Source coordinates (Z is elevation).
// This intentionally has no player physics, gravity, combat or game rules.
export const NAVIGATION_KEYS = new Set(['KeyW', 'KeyA', 'KeyS', 'KeyD', 'KeyQ', 'KeyE', 'ShiftLeft', 'ShiftRight']);

export function advanceExplorer(player, keys, seconds) {
  const yaw = player.yaw * Math.PI / 180, pitch = (player.pitch || 0) * Math.PI / 180;
  const forward = Number(keys.has('KeyW')) - Number(keys.has('KeyS'));
  const right = Number(keys.has('KeyD')) - Number(keys.has('KeyA'));
  const up = Number(keys.has('KeyE')) - Number(keys.has('KeyQ'));
  const x = forward * Math.cos(yaw) * Math.cos(pitch) + right * Math.sin(yaw);
  const y = forward * Math.sin(yaw) * Math.cos(pitch) - right * Math.cos(yaw);
  const z = forward * Math.sin(pitch) + up;
  const length = Math.hypot(x, y, z);
  if (!length || !Number.isFinite(seconds)) return { ...player };
  const fast = keys.has('ShiftLeft') || keys.has('ShiftRight');
  const distance = 250 * (fast ? 3 : 1) * Math.max(0, Math.min(seconds, 0.05)) / length;
  return { ...player, x: player.x + x * distance, y: player.y + y * distance, elevation: player.elevation + z * distance };
}
