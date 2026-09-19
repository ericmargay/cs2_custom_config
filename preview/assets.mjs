// Model-specific transforms are isolated here so calibrated first-person rigs
// can replace these standalone meshes without changing controls or exports.
export const WEAPONS = Object.freeze({
  m4a1s: {
    name: 'M4A1-S', url: 'assets/m4a1s_counter_strike_2.glb', length: 46.3,
    position: [3.8, -5.1, -26], rotation: [0, Math.PI, 0], ammo: '20 / 80',
    pose: 'approximate', materials: ['weapon_rif_m4a1_silencer'],
    agentPose: {
      l: { wrist: [1.2, -7.4, -29], pole: [-12, -21, -8], rotation: [0, Math.PI / 2, -Math.PI / 2] },
      r: { wrist: [4.2, -6.6, -16], pole: [17, -21, 0], rotation: [0, 0, Math.PI] }
    },
    grips: [
      { support: true, palm: [3.4, -6.7, -31], elbow: [-5, -15, -9] },
      { support: false, palm: [3.8, -8, -16], elbow: [12, -14, -3] }
    ],
    source: 'https://sketchfab.com/3d-models/m4a1s-counter-strike-2-c2649f07783b4f979cda0e7773263380'
  },
  awp: {
    name: 'AWP', url: 'assets/awp_counter_strike_2.glb', length: 53.7,
    position: [3.6, -4.8, -30], rotation: [0, Math.PI, 0], ammo: '5 / 30',
    pose: 'approximate', materials: ['weapon_snip_awp'],
    agentPose: {
      l: { wrist: [1.1, -6.8, -28], pole: [-12, -21, -8], rotation: [0, Math.PI / 2, -Math.PI / 2] },
      r: { wrist: [4, -6.1, -18], pole: [17, -21, 0], rotation: [0, 0, Math.PI] }
    },
    grips: [
      { support: true, palm: [3.3, -6.5, -31], elbow: [-5, -15, -9] },
      { support: false, palm: [3.6, -7.5, -18], elbow: [12, -14, -3] }
    ],
    source: 'https://sketchfab.com/3d-models/awp-counter-strike-2-5709ec5d66ed4061a9e1eb4d906c9729'
  }
});

export const AGENT = Object.freeze({
  url: 'assets/miami_viewmodel_arms.glb', name: 'Miami', author: 'gettan',
  source: 'https://sketchfab.com/3d-models/professional-cs2-agent-model-miami-7c3670f707c94b228bcaeffdaa0d4f7a'
});

export const WORLD = Object.freeze({
  url: 'assets/dust2_classic.glb', name: 'Dust II Classic', author: 'vrchris',
  source: 'https://sketchfab.com/3d-models/de-dust2-cs-map-056008d59eb849a29c0ab6884c0c3d87'
});

export const DUST2 = Object.freeze({
  id: 'dust2', name: 'Dust II', image: 'assets/radar_dust2.png',
  background: 'assets/crosshair_preview_dust.webp',
  size: 1024, origin: { x: -2476, y: 3239 }, unitsPerPixel: 4.4,
  positions: [
    { id: 'mid', name: 'Mid', x: -400, y: 800, yaw: 90 },
    { id: 'a', name: 'A', x: 1128, y: 2518, yaw: 180 },
    { id: 'b', name: 'B', x: -1530, y: 2698, yaw: 0 },
    { id: 't', name: 'T spawn', x: -720, y: -860, yaw: 90 }
  ],
  sites: [ { x: 1128, y: 2518, label: 'A' }, { x: -1530, y: 2698, label: 'B' } ],
  // Deliberately synthetic player positions; never presented as live match data.
  markers: [
    { x: -1050, y: 2300, color: '#80c9ff', label: '1' },
    { x: 450, y: 1800, color: '#b4a0ff', label: '2' },
    { x: 1000, y: 2300, color: '#8bdb91', label: '3' },
    { x: -700, y: -500, color: '#f5d26c', label: '4' },
    { x: 1000, y: 1050, color: '#ee6f63', label: '?' }
  ]
});

export const MIRAGE = Object.freeze({
  id: 'mirage', name: 'Mirage', image: 'assets/radar_mirage.png',
  size: 1024, origin: { x: -3230, y: 1713 }, unitsPerPixel: 5,
  positions: [
    { id: 'mid', name: 'Mid', x: -700, y: -600, yaw: 0, floorProbe: 100 },
    { id: 'a', name: 'A', x: -460, y: -2183, yaw: 90, floorProbe: 0 },
    { id: 'b', name: 'B', x: -2056, y: 280, yaw: 90, floorProbe: 0 },
    { id: 't', name: 'T spawn', x: 1290, y: -140, yaw: 90, floorProbe: 0 }
  ],
  sites: [{ x: -460, y: -2183, label: 'A' }, { x: -2056, y: 280, label: 'B' }],
  markers: [
    { x: -950, y: -700, color: '#80c9ff', label: '1' },
    { x: -1700, y: 650, color: '#b4a0ff', label: '2' },
    { x: -300, y: -1900, color: '#8bdb91', label: '3' },
    { x: 1200, y: -100, color: '#f5d26c', label: '4' },
    { x: -1100, y: -1500, color: '#ee6f63', label: '?' }
  ]
});

export const MIRAGE_WORLD = Object.freeze({
  url: 'assets/de_mirage_cs2.glb', name: 'Mirage CS2', author: 'Kyrsia', map: MIRAGE,
  format: 'mirage-sketchfab', textures: false,
  source: 'https://sketchfab.com/3d-models/de-mirage-cs2-42091af5b78941e68b01396d0c955aac'
});

export const ENVIRONMENTS = Object.freeze({
  mirage: { kind: 'world', name: { es: 'Mirage · CS2 3D (sin texturas)', en: 'Mirage · CS2 3D (untextured)' }, world: MIRAGE_WORLD, map: MIRAGE, source: MIRAGE_WORLD.source },
  classic: { kind: 'world', name: { es: 'Dust II clásico · 3D', en: 'Classic Dust II · 3D' }, world: WORLD, map: DUST2, source: WORLD.source },
  cs2: {
    kind: 'image', name: { es: 'Dust II · CS2 (fondo estático)', en: 'Dust II · CS2 (static backdrop)' }, map: DUST2,
    backgrounds: { mid: 'assets/dust2_cs2_mid.png', a: 'assets/dust2_cs2_a.png', b: 'assets/dust2_cs2_b.png' },
    source: 'https://github.com/MurkyYT/cs2-map-icons/tree/main/images/thumbs'
  }
});
export const DEFAULT_ENVIRONMENT = 'mirage';
