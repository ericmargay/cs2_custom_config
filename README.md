# CS2 Keyboard / Mouse Command Generator

Static CS2 settings tool with console-command export and a shared first-person 3D scene for viewmodel and radar adjustments.

## Run locally

```bash
python -m http.server 8080
```

Open:

```text
http://localhost:8080
```

## What works now

- CS2-like visual layout: top tabs, sub-tabs, rows, bind fields, sliders, dropdowns.
- Click a bind field and press a keyboard key or mouse button to capture it.
- Generates a single console line with:
  - `binddefaults` when enabled.
  - `unbind` commands for changed default keys and conflicting target keys.
  - `bind` commands for the customized values.
  - changed cvars such as `sensitivity`, `zoom_sensitivity_ratio`, `option_duck_method`, `option_speed_method`, `cl_debounce_zoom`.
  - `host_writeconfig` at the end.
- Includes a quick preset matching the current test:
  - Primary Weapon: MOUSE5
  - Secondary Weapon: Q
  - Walk: CapsLock
  - Duck: Left Shift
- Includes a **Match Intel** category with assisted batch lookup for up to ten
  Steam profiles, direct `.rip` links, and an evidence-based feasibility view
  of the local companion/backend required for true live automation.
- A floating console dock stays at the bottom in every category. Copy is always
  visible; Options expands preset, download and reset controls above the dock.
- **View Setup → View Model**: M4A1-S/AWP, FOV, XYZ offsets, left/right hand, Desktop/Classic
  presets, default comparison, 16:9 / 4:3 / stretched formats and fullscreen.
- **View Setup → Minimap** (direct link: `/#viewsetup`, legacy links still work):
  a small corner radar over the same weapon/world scene, CS2 Mirage/Dust II overviews, sample players and heading,
  centering, rotation, map/icon/HUD scale, opacity, shape, alternate zoom and
  dynamic framing. Changes update the preview and console output together.
- Both subtabs retain one scene: **Mirage CS2 3D** by default, with classic
  textured Dust II and static CS2 references selectable. Navigate with WASD,
  Q/E, Shift and drag/arrow-key look, or reset to Mid/A/B/T spawn. Adapted
  Miami arms and a provisional equip transition share the scene. Switching
  controls preserves the weapon, camera orientation and loaded resources.
- Viewmodel/radar changes export the complete affected settings group so the
  result does not depend on the previous in-game values. Preview-only controls
  are not exported. **Copy View Setup** copies both groups together.
- Three.js and assets are local and load on demand. The preview loads extracted
  arms (27 MB), not the full agent. User-supplied source files remain unchanged.

## Preview fidelity

The preview is **not yet an exact reproduction of CS2**. The supplied Mirage
GLB contains geometry but **no textures**. It uses neutral materials and
provisional lighting, with its matching radar. Its 3,553 meshes are batched
at runtime for navigation; the 88 MB original stays unchanged. Classic Dust II
is also available; its older geometry differs from the CS2 radar.
Miami arms retain their skeleton and textures, with approximate first-person
poses. The source has no animation clips: equip is a prototype transition,
with an API for compatible equip/holster/inspect/grenade clips later. Walking,
collisions and grenade selection are not implemented. Radar pixel scaling and
dynamic framing still need calibration against in-game references. There is
a material-slot API for future skins, but no skin catalogue or Source 2 skin
shader implementation yet.

See [architecture, limitations and calibration workflow](docs/preview.md) and
[asset credits](assets/ATTRIBUTION.md).

## Check the preview logic

Requires Node.js 20 or newer (no npm install/build step):

```bash
npm test
npm run check
```

Use an HTTP server as shown above; ES modules do not work reliably from a
`file://` URL. Both View Setup subtabs share the WebGL scene. The 2D radar and
settings remain available if the 3D renderer cannot start.

## Match Intel feasibility

The browser-only version deliberately does not claim automatic ten-player
detection. GitHub Pages cannot securely complete Steam authentication or keep
API keys, and CS2 Game State Integration does not reliably expose every player
SteamID to a regular player during Premier/Competitive matches. The included
batch workflow is usable today; full automation would require a signed local
companion plus a secure backend and data-provider agreements.

## Notes

The initial defaults are seeded from the visible CS2 UI screenshots plus common CS2 default binds. For production, add an importer that reads a verified `key_listboundkeys` export or a local `cs2_user_keys_0_slot0.vcfg` snapshot and builds `defaults` automatically.

Suggested next steps:

1. Split `app.js` into `defaults.js`, `inputMap.js`, and `generator.js`.
2. Add import from copied `key_listboundkeys` output.
3. Calibrate first-person weapon rigs and radar scaling against paired CS2 captures.
4. Add pro presets as JSON files only after verifying current configs from reliable sources or direct player configs.

El visualizador abre **Mirage CS2 en 3D** y permite explorar con WASD, Q/E,
Shift y arrastre. El GLB suministrado no contiene texturas: se muestra con
materiales neutros e iluminación provisional. Dust II clásico y las capturas
estáticas siguen disponibles en el selector. Consulta
[el estado del visualizador](docs/preview.md).
