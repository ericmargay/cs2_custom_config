# Asset attribution

The repository's MIT license applies to its code, not to third-party game assets.

## Existing weapon GLBs used by the preview

Credits below were read from the embedded `asset.extras` of each existing GLB.
The files have not been modified.

- **M4A1S Counter Strike 2**, by [blazitt](https://sketchfab.com/blazitt).
  [Original model](https://sketchfab.com/3d-models/m4a1s-counter-strike-2-c2649f07783b4f979cda0e7773263380).
  [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
  File: `m4a1s_counter_strike_2.glb`.
- **AWP Counter Strike 2**, by [blazitt](https://sketchfab.com/blazitt).
  [Original model](https://sketchfab.com/3d-models/awp-counter-strike-2-5709ec5d66ed4061a9e1eb4d906c9729).
  [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).
  File: `awp_counter_strike_2.glb`.

The scene changes placement, orientation, camera and illumination at runtime.

## Miami arms

- **Professional CS2 Agent Model Miami**, by [gettan](https://sketchfab.com/kill6lucius).
  [Original model](https://sketchfab.com/3d-models/professional-cs2-agent-model-miami-7c3670f707c94b228bcaeffdaa0d4f7a).
  [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), confirmed through
  the model's Sketchfab API metadata on 2026-09-18.
- The user supplied `professional-cs2-agent-model-miami/source/Professionalmiami.glb`.
  That original and its accompanying textures are unchanged.
- Derived file: `miami_viewmodel_arms.glb`. Modification: extracted gloves and
  sleeve triangles using arm skin weights, compacted vertex/index buffers,
  retained the original PBR textures, 74-bone skeleton and bind matrices.
  Reproduce with `python3 scripts/extract-miami-arms.py`.
- The scene poses the arms using per-weapon inverse kinematics and applies a
  prototype equip transition. These poses/transition are project modifications;
  the source model contains no animation clips.

## Classic Dust II 3D environment

- **de_dust2 - CS map**, by [vrchris](https://sketchfab.com/vrchris).
  [Original model](https://sketchfab.com/3d-models/de-dust2-cs-map-056008d59eb849a29c0ab6884c0c3d87).
  [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), as declared in the
  GLB's embedded `asset.extras`.
- File: `dust2_classic.glb`, downloaded unmodified from the public
  [Stephan-bro/dust2-map mirror](https://github.com/Stephan-bro/dust2-map/blob/main/de_dust2_-_cs_map.glb)
  on 2026-09-18. Includes map geometry and embedded textures.
- Runtime modifications: restore map coordinates from Sketchfab's display
  transform and use unlit materials for textures with baked lighting.
- This is classic Counter-Strike Dust II, **not the current CS2 level**.
  Underlying Counter-Strike artwork belongs to Valve; community asset license
  declarations do not relicense Valve's trademarks or original game content.

## Dust II radar

- File: `radar_dust2.png`, unmodified.
- Original game artwork: Valve, Counter-Strike 2.
- Retrieved from [MurkyYT/cs2-map-icons](https://github.com/MurkyYT/cs2-map-icons/blob/73fb0ba378e4183603eb4d8c4842340dc32eb877/images/radars/de_dust2_radar_psd.png), a mirror of game radar assets, on 2026-09-17.
- SHA-256: `3be20317d1383da6f390a5bb245cabb65857ef08b1e2c5b82b5938a8cb3167bb`.
- The asset is not relicensed as MIT. Counter-Strike and its artwork belong to
  Valve. This project is not affiliated with Valve.

The backdrop `crosshair_preview_dust.webp` was already present in this
repository and is unchanged. The provenance of the other existing backdrop
and soundtrack files is not established by this change.

## Three.js

Three.js 0.160.0, GLTFLoader and BufferGeometryUtils are vendored from the
official npm package through jsDelivr. MIT license included at
[`../vendor/three/LICENSE`](../vendor/three/LICENSE).
The only source changes to the two add-ons are their `three` imports, rewritten
to the adjacent local module. No runtime CDN or import map is required.

## CS2 static Dust II backdrops

Original artwork: Valve, Counter-Strike 2. Downloaded unchanged on 2026-09-18
from [MurkyYT/cs2-map-icons](https://github.com/MurkyYT/cs2-map-icons/tree/main/images/thumbs),
which extracts thumbnails from the game depot. These are elevated promotional
cameras, not first-person captures or 3D geometry. Their game artwork is not
covered by this repository’s MIT license or the community GLBs’ CC BY license.

- `dust2_cs2_mid.png` ← `de_dust2_1_png.png`. SHA-256: `21b370251067263a3089704000f7bba1744c5a5afef0a261cf1eec2be325dff2`.
- `dust2_cs2_a.png` ← `de_dust2_2_png.png`. SHA-256: `77eb2563571efe3a4b1207696bc6b69d6a6a9501833188f1fa29664d277e06f1`.
- `dust2_cs2_b.png` ← `de_dust2_3_png.png`. SHA-256: `890b31f0267335a598aa8e073210fcd650441926373ab16b86b7317577afab76`.

## Mirage CS2 3D environment

- **De_mirage Cs2**, by [Kyrsia](https://sketchfab.com/KyrsiaDesine3d).
  [Original model](https://sketchfab.com/3d-models/de-mirage-cs2-42091af5b78941e68b01396d0c955aac).
  [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/), declared in the
  supplied GLB's embedded `asset.extras`.
- User-supplied `de_mirage_cs2.glb`, unchanged. SHA-256:
  `befc0e6e9178c1489f337744e66ff77b9c12c2bdb0098a0fbc8f7d9df6d45d8f`.
- Contains geometry and UVs, but no images or textures. Runtime changes:
  restore Source units and map orientation, freeze decorative rigs, omit
  editor helpers/light blockers/textureless overlays, batch spatially, and
  use neutral materials with provisional lighting and shadows.
- Underlying Counter-Strike artwork belongs to Valve; the community license
  declaration does not relicense Valve's trademarks or original game content.

## Mirage radar

- `radar_mirage.png`, unmodified. Original artwork: Valve, Counter-Strike 2.
- Retrieved from [MurkyYT/cs2-map-icons](https://github.com/MurkyYT/cs2-map-icons/blob/main/images/radars/de_mirage_radar_psd.png)
  with [overview metadata](https://github.com/MurkyYT/cs2-map-icons/blob/main/data/radar_info/de_mirage.txt).
- SHA-256: `5de1cc16362e538dc5f4561a24661cb1fb1c15c77ec289e32b44c0fc07bfb85b`.
- This game artwork is not covered by the repository's MIT license.
