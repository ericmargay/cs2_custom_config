// Command ranges from GameTracking-CS2/DumpSource2/convars.txt (2026-09-17).
// Keep preview-only controls out of this schema and out of console exports.
export const VIEWMODEL = Object.freeze({
  viewmodel_fov: { value: 60, min: 60, max: 68 },
  viewmodel_offset_x: { value: 1, min: -2, max: 2.5 },
  viewmodel_offset_y: { value: 1, min: -2, max: 2 },
  viewmodel_offset_z: { value: -1, min: -2, max: 2 },
  cl_prefer_lefthanded: { value: 0, min: 0, max: 1 }
});

export const RADAR = Object.freeze({
  cl_radar_always_centered: { value: 1, min: 0, max: 1 },
  cl_radar_rotate: { value: 1, min: 0, max: 1 },
  cl_hud_radar_map_additive: { value: 1, min: 0, max: 1 },
  cl_hud_radar_background_alpha: { value: 0.627, min: 0, max: 1 },
  cl_radar_square_with_scoreboard: { value: 1, min: 0, max: 1 },
  cl_radar_square_always: { value: 0, min: 0, max: 1 },
  cl_radar_scale_dynamic: { value: 0, min: 0, max: 1 },
  cl_radar_scale: { value: 0.7, min: 0.25, max: 1 },
  cl_radar_scale_alternate: { value: 1, min: 0.25, max: 1 },
  cl_hud_radar_scale: { value: 1, min: 0.8, max: 1.3 },
  cl_radar_icon_scale_min: { value: 0.6, min: 0.4, max: 1.25 },
  hud_scaling: { value: 1, min: 0.5, max: 1 }
});

export const VIEWMODEL_PRESETS = Object.freeze({
  '1': { viewmodel_fov: 60, viewmodel_offset_x: 1, viewmodel_offset_y: 1, viewmodel_offset_z: -1 },
  '2': { viewmodel_fov: 68, viewmodel_offset_x: 2.5, viewmodel_offset_y: 0, viewmodel_offset_z: -1.5 }
});

export const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

export function normalizeSettings(values, schema) {
  return Object.fromEntries(Object.entries(schema).map(([key, spec]) => {
    const raw = values[key];
    const number = raw === 'true' ? 1 : raw === 'false' ? 0 : Number(raw);
    return [key, clamp(raw == null || raw === '' || !Number.isFinite(number) ? spec.value : number, spec.min, spec.max)];
  }));
}

// Editing settings always exits the defaults comparison. Conditional radar
// controls also show the mode they affect, without altering exported cvars.
export function previewEditState(previous, next, mode = {}) {
  const schema = { ...VIEWMODEL, ...RADAR };
  const before = normalizeSettings(previous, schema), after = normalizeSettings(next, schema);
  const changed = Object.keys(schema).filter(key => before[key] !== after[key]);
  const result = { comparing: !!mode.comparing, alternate: !!mode.alternate, scoreboard: !!mode.scoreboard };
  if (!changed.length) return result;
  result.comparing = false;
  if (changed.includes('cl_radar_scale_alternate')) result.alternate = true;
  if (changed.some(key => ['cl_radar_scale', 'cl_radar_scale_dynamic'].includes(key))) result.alternate = false;
  if (changed.includes('cl_radar_square_with_scoreboard')) result.scoreboard = true;
  if (changed.some(key => ['cl_radar_scale', 'cl_radar_scale_alternate', 'cl_radar_scale_dynamic', 'cl_radar_always_centered', 'cl_radar_rotate'].includes(key))) result.scoreboard = false;
  return result;
}

export function viewmodelCommands(values) {
  const settings = normalizeSettings(values, VIEWMODEL);
  // Write the preset first, then ALL offsets. A changed-only export otherwise
  // depends on the user's previous in-game configuration.
  const preset = String(values.viewmodel_presetpos) === '2' ? 2 : 1;
  return [`viewmodel_presetpos ${preset}`, ...Object.entries(settings).map(([k, v]) => `${k} ${v}`)];
}

export function radarCommands(values) {
  return Object.entries(normalizeSettings(values, RADAR)).map(([k, v]) => `${k} ${v}`);
}

export function isViewmodelCommand(command) {
  return command in VIEWMODEL || command === 'viewmodel_presetpos';
}

// Source's FOV convention is horizontal at 4:3; Three expects vertical FOV.
// Aspect ratio changes horizontal coverage, never the model's physical size.
export function verticalFov(horizontalAtFourThree) {
  return 2 * Math.atan(Math.tan(horizontalAtFourThree * Math.PI / 360) / (4 / 3)) * 180 / Math.PI;
}

export function viewmodelTransform(values) {
  const s = normalizeSettings(values, VIEWMODEL);
  const hand = s.cl_prefer_lefthanded ? -1 : 1;
  return {
    fov: verticalFov(s.viewmodel_fov),
    position: [hand * s.viewmodel_offset_x, s.viewmodel_offset_z, -s.viewmodel_offset_y],
    scale: [hand, 1, 1]
  };
}

export function worldToOverview(point, map) {
  return { x: (point.x - map.origin.x) / map.unitsPerPixel, y: (map.origin.y - point.y) / map.unitsPerPixel };
}

export function overviewToWorld(point, map) {
  return { x: point.x * map.unitsPerPixel + map.origin.x, y: map.origin.y - point.y * map.unitsPerPixel };
}

// Radar geometry uses the same transform for the map and every marker.
// The zoom-to-pixels multiplier and dynamic framing are approximations until
// paired captures from a fixed game build are available (see docs/preview.md).
export function radarTransform(values, map, player, markers, mode = {}) {
  const s = normalizeSettings(values, RADAR);
  const square = !!s.cl_radar_square_always || (!!mode.scoreboard && !!s.cl_radar_square_with_scoreboard);
  const fullMap = square;
  const center = fullMap || !s.cl_radar_always_centered ? { x: map.size / 2, y: map.size / 2 } : worldToOverview(player, map);
  const rotation = fullMap || !s.cl_radar_rotate ? 0 : (player.yaw - 90) * Math.PI / 180;
  let zoom = mode.alternate ? s.cl_radar_scale_alternate : s.cl_radar_scale;
  if (s.cl_radar_scale_dynamic && !fullMap) {
    const farthest = Math.max(1, ...[player, ...markers].map(p => {
      const m = worldToOverview(p, map);
      return Math.hypot(m.x - center.x, m.y - center.y);
    }));
    zoom = clamp(Math.min(zoom, map.size * 0.25 * 0.43 / farthest), 0.25, 1);
  }
  return { center, rotation, zoom, square, scale: (fullMap ? 0.92 : zoom / 0.25) / map.size };
}

export function projectRadar(point, map, transform) {
  const p = worldToOverview(point, map);
  const x = p.x - transform.center.x, y = p.y - transform.center.y;
  const c = Math.cos(transform.rotation), s = Math.sin(transform.rotation);
  return { x: 0.5 + (x * c - y * s) * transform.scale, y: 0.5 + (x * s + y * c) * transform.scale };
}

export function unprojectRadar(point, map, transform) {
  const x = (point.x - 0.5) / transform.scale, y = (point.y - 0.5) / transform.scale;
  const c = Math.cos(transform.rotation), s = Math.sin(transform.rotation);
  return overviewToWorld({ x: x * c + y * s + transform.center.x, y: -x * s + y * c + transform.center.y }, map);
}

export function clampMarker(point, square, margin = 0.04) {
  if (square) return { x: clamp(point.x, margin, 1 - margin), y: clamp(point.y, margin, 1 - margin) };
  const x = point.x - 0.5, y = point.y - 0.5;
  const factor = Math.min(1, (0.5 - margin) / (Math.hypot(x, y) || 1));
  return { x: 0.5 + x * factor, y: 0.5 + y * factor };
}
