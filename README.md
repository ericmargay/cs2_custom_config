# CS2 Keyboard / Mouse Command Generator

Static prototype that mimics the CS2 Keyboard / Mouse settings UI and generates a one-line console command.

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

## Notes

The initial defaults are seeded from the visible CS2 UI screenshots plus common CS2 default binds. For production, add an importer that reads a verified `key_listboundkeys` export or a local `cs2_user_keys_0_slot0.vcfg` snapshot and builds `defaults` automatically.

Suggested next steps:

1. Split `app.js` into `defaults.js`, `inputMap.js`, and `generator.js`.
2. Add import from copied `key_listboundkeys` output.
3. Add viewmodel settings:
   - `viewmodel_offset_x`
   - `viewmodel_offset_y`
   - `viewmodel_offset_z`
   - `viewmodel_fov`
4. Add pro presets as JSON files only after verifying current configs from reliable sources or direct player configs.
