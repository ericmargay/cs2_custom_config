const KEYMAP = {
  Backquote: ["scancode53", "`"], Digit1: ["scancode30", "1"], Digit2: ["scancode31", "2"], Digit3: ["scancode32", "3"], Digit4: ["scancode33", "4"], Digit5: ["scancode34", "5"], Digit6: ["scancode35", "6"], Digit7: ["scancode36", "7"], Digit8: ["scancode37", "8"], Digit9: ["scancode38", "9"], Digit0: ["scancode39", "0"], Minus: ["scancode45", "-"], Equal: ["scancode46", "="],
  KeyA: ["scancode4", "A"], KeyB: ["scancode5", "B"], KeyC: ["scancode6", "C"], KeyD: ["scancode7", "D"], KeyE: ["scancode8", "E"], KeyF: ["scancode9", "F"], KeyG: ["scancode10", "G"], KeyH: ["scancode11", "H"], KeyI: ["scancode12", "I"], KeyJ: ["scancode13", "J"], KeyK: ["scancode14", "K"], KeyL: ["scancode15", "L"], KeyM: ["scancode16", "M"], KeyN: ["scancode17", "N"], KeyO: ["scancode18", "O"], KeyP: ["scancode19", "P"], KeyQ: ["scancode20", "Q"], KeyR: ["scancode21", "R"], KeyS: ["scancode22", "S"], KeyT: ["scancode23", "T"], KeyU: ["scancode24", "U"], KeyV: ["scancode25", "V"], KeyW: ["scancode26", "W"], KeyX: ["scancode27", "X"], KeyY: ["scancode28", "Y"], KeyZ: ["scancode29", "Z"],
  BracketLeft: ["scancode47", "["], BracketRight: ["scancode48", "]"], Backslash: ["scancode49", "\\"], Semicolon: ["scancode51", ";"], Quote: ["scancode52", "'"], Comma: ["scancode54", ","], Period: ["scancode55", "."], Slash: ["scancode56", "/"],
  Escape: ["scancode41", "Esc"], Tab: ["scancode43", "Tab"], CapsLock: ["scancode57", "CapsLock"], ShiftLeft: ["scancode225", "Left Shift"], ControlLeft: ["scancode224", "Left Ctrl"], AltLeft: ["scancode226", "Left Alt"], Space: ["scancode44", "Space"], AltRight: ["scancode230", "Right Alt"], ControlRight: ["scancode228", "Right Ctrl"], ShiftRight: ["scancode229", "Right Shift"], Enter: ["scancode40", "Enter"], Backspace: ["scancode42", "Backspace"],
  F1: ["scancode58", "F1"], F2: ["scancode59", "F2"], F3: ["scancode60", "F3"], F4: ["scancode61", "F4"], F5: ["scancode62", "F5"], F6: ["scancode63", "F6"], F7: ["scancode64", "F7"], F8: ["scancode65", "F8"], F9: ["scancode66", "F9"], F10: ["scancode67", "F10"], F11: ["scancode68", "F11"], F12: ["scancode69", "F12"],
  Insert: ["scancode73", "Insert"], Home: ["scancode74", "Home"], PageUp: ["scancode75", "Page Up"], Delete: ["scancode76", "Delete"], End: ["scancode77", "End"], PageDown: ["scancode78", "Page Down"], ArrowRight: ["scancode79", "Right Arrow"], ArrowLeft: ["scancode80", "Left Arrow"], ArrowDown: ["scancode81", "Down Arrow"], ArrowUp: ["scancode82", "Up Arrow"],
  NumpadDivide: ["scancode84", "Num /"], NumpadMultiply: ["scancode85", "Num *"], NumpadSubtract: ["scancode86", "Num -"], NumpadAdd: ["scancode87", "Num +"], NumpadEnter: ["scancode88", "Num Enter"], Numpad1: ["scancode89", "Num 1"], Numpad2: ["scancode90", "Num 2"], Numpad3: ["scancode91", "Num 3"], Numpad4: ["scancode92", "Num 4"], Numpad5: ["scancode93", "Num 5"], Numpad6: ["scancode94", "Num 6"], Numpad7: ["scancode95", "Num 7"], Numpad8: ["scancode96", "Num 8"], Numpad9: ["scancode97", "Num 9"], Numpad0: ["scancode98", "Num 0"], NumpadDecimal: ["scancode99", "Num ."]
};

const mouseButtons = {
  0: ["mouse1", "MOUSE1"],
  1: ["mouse3", "MOUSE3"],
  2: ["mouse2", "MOUSE2"],
  3: ["mouse4", "MOUSE4"],
  4: ["mouse5", "MOUSE5"]
};

const languages = [
  { id: "en", label: "EN" },
  { id: "es", label: "ES" },
  { id: "ru", label: "RU" }
];

const sceneryMaps = [
  { id: "ancient", label: "Ancient" },
  { id: "anubis", label: "Anubis" },
  { id: "cache", label: "Cache" },
  { id: "dust", label: "Dust" },
  { id: "inferno", label: "Inferno" },
  { id: "italy", label: "Italy" },
  { id: "nuke", label: "Nuke" },
  { id: "office", label: "Office" },
  { id: "overpass", label: "Overpass" },
  { id: "train", label: "Train" },
  { id: "vertigo", label: "Vertigo" }
];

const sceneryThemes = {
  ancient: {
    "--scene-a": "rgba(35, 108, 75, .56)",
    "--scene-b": "rgba(177, 139, 54, .44)",
    "--scene-c": "rgba(73, 95, 67, .42)",
    "--scene-d": "rgba(211, 201, 144, .22)",
    "--scene-base-1": "#1e3029",
    "--scene-base-2": "#56664d",
    "--scene-base-3": "#232a24",
    "--scene-vignette": "rgba(26, 48, 35, .42)",
    "--scene-light": "rgba(236, 221, 152, .16)"
  },
  anubis: {
    "--scene-a": "rgba(188, 130, 52, .50)",
    "--scene-b": "rgba(47, 121, 133, .46)",
    "--scene-c": "rgba(210, 178, 105, .28)",
    "--scene-d": "rgba(25, 78, 95, .40)",
    "--scene-base-1": "#2c2a25",
    "--scene-base-2": "#6b6d5b",
    "--scene-base-3": "#1e343a",
    "--scene-vignette": "rgba(94, 58, 24, .34)",
    "--scene-light": "rgba(241, 202, 127, .16)"
  },
  cache: {
    "--scene-a": "rgba(86, 138, 66, .44)",
    "--scene-b": "rgba(128, 153, 122, .34)",
    "--scene-c": "rgba(186, 193, 154, .22)",
    "--scene-d": "rgba(51, 68, 55, .52)",
    "--scene-base-1": "#25302b",
    "--scene-base-2": "#58655a",
    "--scene-base-3": "#202625",
    "--scene-vignette": "rgba(31, 47, 33, .44)",
    "--scene-light": "rgba(192, 218, 172, .13)"
  },
  dust: {
    "--scene-a": "rgba(178, 124, 54, .52)",
    "--scene-b": "rgba(92, 123, 132, .38)",
    "--scene-c": "rgba(216, 190, 125, .30)",
    "--scene-d": "rgba(106, 75, 37, .34)",
    "--scene-base-1": "#322b25",
    "--scene-base-2": "#796f5b",
    "--scene-base-3": "#252928",
    "--scene-vignette": "rgba(86, 52, 26, .36)",
    "--scene-light": "rgba(242, 211, 150, .16)"
  },
  inferno: {
    "--scene-a": "rgba(156, 70, 42, .52)",
    "--scene-b": "rgba(196, 150, 72, .34)",
    "--scene-c": "rgba(92, 114, 82, .32)",
    "--scene-d": "rgba(105, 42, 31, .42)",
    "--scene-base-1": "#302525",
    "--scene-base-2": "#715848",
    "--scene-base-3": "#252821",
    "--scene-vignette": "rgba(87, 30, 24, .40)",
    "--scene-light": "rgba(242, 171, 109, .14)"
  },
  italy: {
    "--scene-a": "rgba(190, 132, 62, .46)",
    "--scene-b": "rgba(88, 137, 111, .38)",
    "--scene-c": "rgba(219, 200, 144, .24)",
    "--scene-d": "rgba(93, 68, 47, .40)",
    "--scene-base-1": "#302a25",
    "--scene-base-2": "#6c6d59",
    "--scene-base-3": "#21312d",
    "--scene-vignette": "rgba(70, 44, 26, .34)",
    "--scene-light": "rgba(237, 217, 166, .14)"
  },
  nuke: {
    "--scene-a": "rgba(57, 104, 144, .48)",
    "--scene-b": "rgba(190, 80, 58, .32)",
    "--scene-c": "rgba(161, 178, 185, .24)",
    "--scene-d": "rgba(29, 48, 62, .54)",
    "--scene-base-1": "#202832",
    "--scene-base-2": "#52606b",
    "--scene-base-3": "#222323",
    "--scene-vignette": "rgba(20, 34, 49, .48)",
    "--scene-light": "rgba(181, 215, 233, .16)"
  },
  office: {
    "--scene-a": "rgba(72, 116, 143, .46)",
    "--scene-b": "rgba(191, 210, 218, .22)",
    "--scene-c": "rgba(116, 126, 122, .34)",
    "--scene-d": "rgba(31, 48, 60, .46)",
    "--scene-base-1": "#202b31",
    "--scene-base-2": "#5a696c",
    "--scene-base-3": "#202324",
    "--scene-vignette": "rgba(19, 35, 45, .44)",
    "--scene-light": "rgba(221, 239, 244, .14)"
  },
  overpass: {
    "--scene-a": "rgba(65, 106, 92, .48)",
    "--scene-b": "rgba(122, 139, 83, .36)",
    "--scene-c": "rgba(78, 91, 112, .36)",
    "--scene-d": "rgba(31, 53, 48, .50)",
    "--scene-base-1": "#202c2b",
    "--scene-base-2": "#536557",
    "--scene-base-3": "#222832",
    "--scene-vignette": "rgba(23, 42, 38, .44)",
    "--scene-light": "rgba(184, 211, 171, .13)"
  },
  train: {
    "--scene-a": "rgba(84, 103, 118, .50)",
    "--scene-b": "rgba(147, 64, 52, .30)",
    "--scene-c": "rgba(184, 191, 182, .22)",
    "--scene-d": "rgba(36, 45, 54, .56)",
    "--scene-base-1": "#222930",
    "--scene-base-2": "#5b656a",
    "--scene-base-3": "#242423",
    "--scene-vignette": "rgba(20, 30, 38, .48)",
    "--scene-light": "rgba(210, 220, 218, .13)"
  },
  vertigo: {
    "--scene-a": "rgba(69, 132, 160, .48)",
    "--scene-b": "rgba(207, 164, 69, .30)",
    "--scene-c": "rgba(171, 190, 197, .24)",
    "--scene-d": "rgba(28, 63, 78, .50)",
    "--scene-base-1": "#1f2d34",
    "--scene-base-2": "#5c6f74",
    "--scene-base-3": "#202526",
    "--scene-vignette": "rgba(17, 44, 58, .44)",
    "--scene-light": "rgba(193, 231, 243, .14)"
  }
};

const DEFAULT_SOUNDTRACK_VOLUME = 7;
const SAVED_CONFIGS_KEY = "cs2SavedConfigs";
const MAX_SAVED_CONFIGS = 8;

const i18n = {
  en: {
    "app.title": "CS2 Settings Command Generator",
    "aria.search": "Search",
    "aria.categories": "Settings categories",
    "aria.sections": "Settings sections",
    "aria.language": "Language",
    "category.video": "VIDEO",
    "category.audio": "AUDIO",
    "category.game": "GAME",
    "category.viewmodel": "VIEW MODEL",
    "category.keyboard": "KEYBOARD / MOUSE",
    "panel.title": "Console Line",
    "panel.help": "Paste this into the CS2 developer console.",
    "panel.copy": "COPY",
    "panel.copied": "COPIED",
    "panel.resetFirst": "Reset bind defaults first",
    "panel.resetUi": "RESET UI",
    "panel.preset": "LOAD YOUR TEST PRESET",
    "panel.download": "DOWNLOAD .CFG",
    "panel.aliasPlaceholder": "Preset alias",
    "panel.saveConfig": "SAVE PRESET",
    "panel.savedConfig": "SAVED",
    "panel.recentConfigs": "RECENT CONFIGURATIONS",
    "panel.emptyConfigs": "No saved configurations yet.",
    "panel.loadConfig": "LOAD",
    "panel.editConfig": "EDIT",
    "panel.deleteConfig": "DELETE",
    "crosshair.share": "Share or Import",
    "crosshair.importPlaceholder": "Paste crosshair commands here",
    "crosshair.importApply": "Import",
    "crosshair.importCopy": "Copy",
    "crosshair.undo": "Undo Changes",
    "crosshair.reset": "Reset",
    "hint.capture": "Capture mode: click any key field, then press a keyboard key or mouse button.",
    "hint.refresh": "CS2 refresh: after pasting commands, switch to another settings sub-section and back.",
    "hint.accuracy": "Accuracy note: this tool mirrors CS2 settings as closely as possible, but some in-game options are external, account-level, restart-only, or not safely configurable through console commands.",
    "scenery.toggle": "Open scenery menu",
    "scenery.change": "Change Main Menu Scenery",
    "scenery.weapon": "Change Weapon",
    "scenery.agent": "Show Equipped CT Agent",
    "scenery.loadout": "View Agent in Loadout",
    "scenery.back": "Back",
    "volume.toggle": "Soundtrack volume",
    "reset.page": "RESET",
    "toast.capture": "Press a key or mouse button...",
    "toast.cancel": "ESC cancels",
    "tab.kbm.settings": "KEYBOARD & MOUSE SETTINGS",
    "tab.kbm.movement": "MOVEMENT KEYS",
    "tab.kbm.weapon": "WEAPON KEYS",
    "tab.kbm.ui": "UI KEYS",
    "tab.kbm.communication": "COMMUNICATION OPTIONS",
    "tab.kbm.chatwheel": "CHAT WHEEL KEYS",
    "tab.video.basic": "VIDEO",
    "tab.video.advanced": "ADVANCED VIDEO",
    "tab.video.hud_edges": "HUD EDGE POSITIONS",
    "tab.audio.main": "AUDIO",
    "tab.audio.voice": "VOICE",
    "tab.audio.music": "MUSIC",
    "tab.audio.eq": "GAME MODE EQ",
    "tab.game.main": "GAME",
    "tab.game.hud": "HUD",
    "tab.game.team": "TEAM",
    "tab.game.communication": "COMMUNICATION",
    "tab.game.spectator": "SPECTATOR / SCOREBOARD",
    "tab.game.item": "ITEM",
    "tab.game.radar": "RADAR",
    "tab.game.crosshair": "CROSSHAIR",
    "tab.game.sniper": "SNIPER SIGHTS",
    "tab.game.grenade": "GRENADE LINE-UP",
    "tab.game.damage": "DAMAGE PREDICTION",
    "tab.game.telemetry": "TELEMETRY",
    "tab.viewmodel.main": "VIEW MODEL",
    "group.kbm.settings": "Keyboard & Mouse Settings",
    "group.kbm.movement": "Movement Keys",
    "group.kbm.weapon": "Weapon Keys",
    "group.kbm.ui": "UI Keys",
    "group.kbm.communication": "Communication Options",
    "group.kbm.chatwheel": "Chat Wheel Keys",
    "group.video.basic": "Basic Video",
    "group.video.advanced": "Advanced Video",
    "group.video.frame_pacing": "Frame Pacing",
    "group.video.presets": "Presets",
    "group.video.magnification": "Magnification",
    "group.video.hud_edges": "HUD Edge Positions",
    "group.audio.main": "Audio",
    "group.audio.voice": "Voice",
    "group.audio.music": "Music",
    "group.audio.eq": "Game Mode EQ",
    "group.game.main": "Game",
    "group.game.hud": "HUD",
    "group.game.team": "Team",
    "group.game.communication": "Communication",
    "group.game.spectator": "Spectator / Scoreboard",
    "group.game.item": "Item",
    "group.game.radar": "Radar",
    "group.game.crosshair": "Crosshair",
    "group.game.sniper": "Sniper Sights",
    "group.game.grenade": "Grenade Line-Up",
    "group.game.damage": "Damage Prediction",
    "group.game.telemetry": "Telemetry",
    "group.viewmodel.main": "View Model",
    "group.viewmodel.weapon": "Weapon Preview",
    "row.mouse_inverty": "Reverse Mouse",
    "row.option_duck_method": "Duck Mode",
    "row.option_speed_method": "Walk Mode",
    "row.cl_debounce_zoom": "Zoom Button Hold",
    "row.sensitivity": "Mouse Sensitivity",
    "row.zoom_sensitivity_ratio": "Zoom Sensitivity Multiplier",
    "row.show_loadout_toggle": "Toggle Inventory Display",
    "row.move_forward": "Move Forward",
    "row.move_backward": "Move Backward",
    "row.move_left": "Move Left (strafe)",
    "row.move_right": "Move Right (strafe)",
    "row.walk": "Walk",
    "row.duck": "Duck",
    "row.jump": "Jump",
    "row.use": "Use",
    "row.fire": "Fire",
    "row.secondary_fire": "Secondary Fire",
    "row.drop": "Drop Weapon",
    "row.inspect": "Inspect Weapon",
    "row.switchhands": "Switch Viewmodel Left/Right Hand",
    "row.buymenu": "Buy Menu",
    "row.autobuy": "Autobuy",
    "row.rebuy": "Rebuy",
    "row.slot1": "Primary Weapon",
    "row.slot2": "Secondary Weapon",
    "row.slot3": "Melee Weapons",
    "row.slot4": "Cycle Grenades",
    "row.slot5": "Explosives & Traps",
    "row.slot6": "HE Grenade",
    "row.slot7": "Flashbang",
    "row.slot8": "Smoke Grenade",
    "row.slot9": "Decoy Grenade",
    "row.slot10": "Molotov Cocktail / Incendiary Grenade",
    "row.zeus": "Zeus x27",
    "row.healthshot": "Healthshot",
    "row.utility_items": "Utility Items",
    "row.reload": "Reload",
    "row.radial_weapon": "Radial Weapon Menu",
    "row.lastinv": "Last Weapon Used",
    "row.invprev": "Select Previous Weapon",
    "row.invnext": "Select Next Weapon",
    "row.scoreboard": "Scoreboard",
    "row.show_team_equipment": "Show Team Equipment",
    "row.toggle_radar_zoom": "Toggle Radar Zoom",
    "row.call_vote": "Call Vote",
    "row.console": "Toggle Console",
    "row.team_menu": "Choose Team",
    "row.chat_all": "Chat Message",
    "row.chat_team": "Team Message",
    "row.spray": "Spray Menu",
    "row.voice": "Use Mic",
    "row.voice_mode_toggle": "Toggle between Open-Mic and Push-To-Talk",
    "row.disable_chat": "Temporarily Disable Incoming Chat",
    "row.player_ping": "Player Ping",
    "row.radio1": "Radio Message",
    "row.radio2": "Command Radio Message",
    "row.radio3": "Standard Radio Message",
    "row.radio_report": "Report Radio Message",
    "row.chatwheel1": "Chat Wheel 1",
    "row.chatwheel2": "Chat Wheel 2",
    "row.chatwheel3": "Chat Wheel 3",
    "row.display_mode": "Display Mode",
    "row.brightness": "Brightness",
    "row.boost_player_contrast": "Boost Player Contrast",
    "row.vsync": "V-Sync",
    "row.fps_max": "Maximum FPS In Game",
    "row.fps_max_ui": "Maximum FPS In Menus",
    "row.video_values_preset": "Current Video Values Preset",
    "row.msaa": "Multisampling Anti-Aliasing",
    "row.texture_filtering": "Texture Filtering Mode",
    "row.shadow_quality": "Global Shadow Quality",
    "row.dynamic_shadows": "Dynamic Shadows",
    "row.texture_detail": "Model / Texture Detail",
    "row.shader_detail": "Shader Detail",
    "row.particle_detail": "Particle Detail",
    "row.ambient_occlusion": "Ambient Occlusion",
    "row.hdr": "High Dynamic Range",
    "row.fsr": "FidelityFX Super Resolution",
    "row.magnification_mode": "Magnification Mode",
    "row.magnification": "Magnification",
    "row.reflex": "NVIDIA Reflex Low Latency",
    "row.frame_telemetry": "Frame Time Telemetry",
    "row.ping_telemetry": "Ping Telemetry",
    "row.packet_telemetry": "Packet Loss / Misdelivery Telemetry",
    "row.master_volume": "Master Volume",
    "row.menu_ambience_volume": "Main Menu Ambience Volume",
    "row.eq_profile": "EQ Profile",
    "row.lr_isolation": "L/R Isolation",
    "row.perspective_correction": "Perspective Correction",
    "row.play_audio_background": "Play Audio When Game In Background",
    "row.mute_focus": "Mute When Game Is In Background",
    "row.voice_enable": "Enable Voice",
    "row.voice_volume": "Voice Volume",
    "row.other_player_voice_volume": "Other Player Voice Volume",
    "row.voice_mic_mode": "Voice/Microphone Mode",
    "row.hear_own_voice": "Hear My Own Voice",
    "row.streamlined_ptt": "Streamlined Push To Talk",
    "row.mic_threshold": "Microphone Trigger Threshold",
    "row.menu_music": "Main Menu Volume",
    "row.round_start_music": "Round Start Volume",
    "row.round_action_music": "Round Action Volume",
    "row.round_end_music": "Round End Volume",
    "row.objective_music": "Bomb / Hostage Volume",
    "row.ten_second_music": "Ten Second Warning Volume",
    "row.mvp_music": "MVP Volume",
    "row.deathcam_music": "Death Camera Volume",
    "row.mute_mvp_live": "Mute MVP Music when players on both teams are alive",
    "row.competitive_eq": "Competitive EQ",
    "row.casual_eq": "Casual EQ",
    "row.deathmatch_eq": "Deathmatch EQ",
    "row.armsrace_eq": "Arms Race EQ",
    "row.viewmodel_weapon": "Preview Weapon",
    "row.viewmodel_fov": "Viewmodel FOV",
    "row.viewmodel_offset_x": "Viewmodel Offset X",
    "row.viewmodel_offset_y": "Viewmodel Offset Y",
    "row.viewmodel_offset_z": "Viewmodel Offset Z",
    "row.viewmodel_handedness": "Weapon Handedness",
    "row.developer_console": "Enable Developer Console",
    "row.game_instructor": "Game Instructor Messages",
    "row.buy_menu_use": "Use Key Opens Buy Menu",
    "row.max_ping": "Max Acceptable Matchmaking Ping",
    "row.traffic_bandwidth": "Max Acceptable Game Traffic Bandwidth",
    "row.net_buffer": "Buffering to smooth over packet loss / jitter",
    "row.hud_scale": "HUD Scale",
    "row.hud_color": "HUD Color",
    "row.large_player_count": "Large Player Count",
    "row.community_location": "Community Notification Location",
    "row.community_horizontal": "Community Notification Horizontal Offset",
    "row.community_vertical": "Community Notification Vertical Offset",
    "row.glow_rarity": "Glow Weapon with Rarity Color",
    "row.spectator_hud_color": "Override Spectating HUD Color",
    "row.team_overhead": "Show Team Positions In HUD",
    "row.team_id_walls": "Show Team ID Through Walls",
    "row.teammate_colors": "Show Teammate Colors In Competitive",
    "row.team_id_colors": "Use Player Colors on Team ID",
    "row.join_advertise": "Looking To Play When CS2 Starts",
    "row.player_pings": "Player Pings",
    "row.voice_modenable": "Enable Voice",
    "row.voip_volume": "VOIP Volume",
    "row.mute_enemy_team": "Mute Enemy Team",
    "row.mute_all_but_friends": "Mute All But Friends",
    "row.allow_animated_avatars": "Allow Animated Avatars",
    "row.hide_avatar_images": "Hide Avatar Images",
    "row.sanitize_player_names": "Clean Player Names",
    "row.spec_number_keys": "Spectator / Map Vote Number Selection Method",
    "row.scoreboard_mouse": "Scoreboard Mouse Enable / End of Match Scoreboard Toggle",
    "row.survivors_always_on": "Survivors Always On",
    "row.smooth_spectator": "Smooth Spectator Camera",
    "row.smooth_spectator_speed": "Smooth Spectator Camera Speed",
    "row.silencer_detach": "Detach Silencer on M4A1-S and USP-S",
    "row.viewmodel_position": "Viewmodel Position",
    "row.preferred_hand": "Preferred Viewmodel Left/Right Handedness",
    "row.first_person_tracers": "First Person Tracers",
    "row.autowepswitch": "Switch Weapon On Pick Up",
    "row.buy_menu_number_keys": "Buy Menu Number Keys",
    "row.show_loadout": "Always Show Inventory",
    "row.safezonex": "Horizontal HUD Safe Zone",
    "row.safezoney": "Vertical HUD Safe Zone",
    "row.radar_center": "Radar Centers The Player",
    "row.radar_rotate": "Radar Rotates",
    "row.radar_map_blend": "Radar HUD Map Blends With Background",
    "row.radar_background_opacity": "Radar HUD Background Opacity",
    "row.radar_square_scoreboard": "Toggle Shape With Scoreboard",
    "row.radar_force_square": "Force Square Shape",
    "row.radar_dynamic_zoom": "Radar Is Zooming Dynamically",
    "row.radar_scale": "Radar Map Zoom",
    "row.radar_scale_alternate": "Radar Map Alternate Zoom",
    "row.hud_radar_scale": "Radar HUD Size",
    "row.radar_icon_scale": "Radar Icon Scale",
    "row.crosshair_preview": "Crosshair Preview",
    "row.crosshair_style": "Crosshair Style",
    "row.crosshair_friendly_warning": "Friendly Fire Reticle Warning",
    "row.crosshair_recoil": "Follow Recoil",
    "row.crosshair_dot": "Center Dot",
    "row.crosshair_t": "T Style",
    "row.crosshair_outline": "Draw Outline",
    "row.crosshair_outline_thickness": "Outline",
    "row.crosshair_color_mode": "Crosshair Color Mode",
    "row.crosshair_size": "Length",
    "row.crosshair_thickness": "Thickness",
    "row.crosshair_gap": "Gap",
    "row.crosshair_alpha": "Alpha",
    "row.crosshair_red": "Red",
    "row.crosshair_green": "Green",
    "row.crosshair_blue": "Blue",
    "row.crosshair_use_alpha": "Use Alpha",
    "row.crosshair_weapon_gap": "Deployed Weapon Gap",
    "row.crosshair_scope_color": "Use crosshair color for scope dot",
    "row.show_player_crosshairs": "Show Player Crosshairs",
    "row.bot_crosshair": "Show my crosshair when spectating bots",
    "row.sniper_delay_unscope": "Delay Sniper Rifle Un-Scope after Shot",
    "row.sniper_show_inaccuracy": "Show Scoped Sniper Rifle Inaccuracy",
    "row.sniper_auto_rezoom": "Auto Re-Zoom Sniper Rifle after Shot",
    "row.sniper_width": "Sniper Width",
    "row.scope_dot_scale": "Scope dot scale",
    "row.grenade_crosshair_keep": "Keep Regular Crosshair",
    "row.grenade_flash_enabled": "Flashbangs",
    "row.grenade_explosive_enabled": "HE Grenades",
    "row.grenade_fire_enabled": "Molotov cocktails / Incendiary grenades",
    "row.grenade_smoke_enabled": "Smoke grenades",
    "row.grenade_decoy_enabled": "Decoy grenades",
    "row.grenade_flash_delay": "Flashbang Crosshair Delay",
    "row.grenade_explosive_delay": "HE Grenade Crosshair Delay",
    "row.grenade_fire_delay": "Fire Grenade Crosshair Delay",
    "row.grenade_smoke_delay": "Smoke Crosshair Delay",
    "row.grenade_decoy_delay": "Decoy Crosshair Delay",
    "row.predict_body": "Predict Body Shot Effects",
    "row.predict_head": "Predict Head Shot Effects",
    "row.predict_kill": "Predict Kill Ragdolls",
    "row.frame_telemetry_threshold": "Frame Time Warning Threshold",
    "row.ping_telemetry_threshold": "Ping Warning Threshold",
    "row.packet_telemetry_threshold": "Packet Misdelivery Warning Threshold",
    "row.network_graph": "Show network jitter / misdelivery graph",
    "row.network_quality": "Use the detailed network quality display",
    "opt.no": "NO",
    "opt.yes": "YES",
    "opt.off": "OFF",
    "opt.on": "ON",
    "opt.hold": "HOLD",
    "opt.toggle": "TOGGLE",
    "opt.repeat_disabled": "REPEAT DISABLED",
    "opt.repeat_enabled": "REPEAT ENABLED",
    "opt.fullscreen": "FULLSCREEN",
    "opt.windowed": "WINDOWED",
    "opt.borderless": "FULLSCREEN WINDOWED",
    "opt.disabled": "DISABLED",
    "opt.enabled": "ENABLED",
    "opt.boost": "ENABLED + BOOST",
    "opt.none": "NONE",
    "opt.2x": "2X MSAA",
    "opt.4x": "4X MSAA",
    "opt.8x": "8X MSAA",
    "opt.bilinear": "BILINEAR",
    "opt.trilinear": "TRILINEAR",
    "opt.2x_aniso": "2X ANISOTROPIC",
    "opt.4x_aniso": "4X ANISOTROPIC",
    "opt.8x_aniso": "8X ANISOTROPIC",
    "opt.16x_aniso": "16X ANISOTROPIC",
    "opt.low": "LOW",
    "opt.medium": "MEDIUM",
    "opt.high": "HIGH",
    "opt.sun_only": "SUN ONLY",
    "opt.sun_and_static": "SUN AND STATIC",
    "opt.all": "ALL",
    "opt.performance": "PERFORMANCE",
    "opt.quality": "QUALITY",
    "opt.ultra_quality": "ULTRA QUALITY",
    "opt.balanced": "BALANCED",
    "opt.disabled_highest_quality": "DISABLED (HIGHEST QUALITY)",
    "opt.zoom": "ZOOM",
    "opt.split": "SPLIT",
    "opt.very_restricted": "EXTREMELY RESTRICTED",
    "opt.restricted": "RESTRICTED",
    "opt.moderate": "MODERATE",
    "opt.unrestricted": "UNRESTRICTED",
    "opt.one_packet": "1 PACKET",
    "opt.two_packets": "2 PACKETS",
    "opt.display_sound": "DISPLAY AND PLAY SOUND",
    "opt.display_only": "DISPLAY ONLY",
    "opt.show_all": "SHOW ALL",
    "opt.show_colors": "SHOW COLORS",
    "opt.bottom_left": "BOTTOM LEFT",
    "opt.bottom_right": "BOTTOM RIGHT",
    "opt.top_left": "TOP LEFT",
    "opt.top_right": "TOP RIGHT",
    "opt.friends": "FRIENDS",
    "opt.everyone": "EVERYONE",
    "opt.remember_last": "REMEMBER LAST STATE",
    "opt.secondary_fire": "SECONDARY FIRE",
    "opt.desktop": "DESKTOP",
    "opt.couch": "COUCH",
    "opt.classic": "CLASSIC",
    "opt.left": "LEFT",
    "opt.right": "RIGHT",
    "opt.number_keys_buy": "NUMBER KEYS BUY ITEMS",
    "opt.number_keys_select": "NUMBER KEYS SELECT ITEMS",
    "opt.colors_and_letters": "COLORS AND LETTERS",
    "opt.team_health_equipment": "PIPS, NAMES, HEALTH, AND EQUIPMENT",
    "opt.number_keys": "NUMBER KEYS",
    "opt.weapon_keys": "WEAPON KEYS",
    "opt.team_color": "TEAM COLOR",
    "opt.custom": "CUSTOM",
    "opt.default_static": "DEFAULT STATIC",
    "opt.classic_static": "CLASSIC STATIC",
    "opt.classic_dynamic": "CLASSIC DYNAMIC",
    "opt.never": "NEVER",
    "opt.if_poor": "IF POOR",
    "opt.always": "ALWAYS",
    "opt.default": "DEFAULT",
    "opt.natural": "NATURAL",
    "opt.crisp": "CRISP",
    "opt.smooth": "SMOOTH",
    "opt.push_to_talk": "PUSH TO TALK",
    "opt.open_microphone": "OPEN MICROPHONE",
    "opt.m4a1s": "M4A1-S",
    "opt.ak47": "AK-47",
    "opt.awp": "AWP",
    "opt.white": "WHITE",
    "opt.lightblue": "LIGHT BLUE",
    "opt.blue": "BLUE",
    "opt.purple": "PURPLE",
    "opt.red": "RED",
    "opt.orange": "ORANGE",
    "opt.yellow": "YELLOW",
    "opt.green": "GREEN",
    "opt.aqua": "AQUA",
    "opt.team_overhead_pips": "PIPS",
    "opt.team_overhead_names": "PIPS + NAMES"
  },
  es: {
    "app.title": "Generador de comandos de configuración para CS2",
    "aria.search": "Buscar",
    "aria.categories": "Categorías de configuración",
    "aria.sections": "Secciones de configuración",
    "aria.language": "Idioma",
    "category.video": "VIDEO",
    "category.audio": "AUDIO",
    "category.game": "JUEGO",
    "category.viewmodel": "VIEW MODEL",
    "category.keyboard": "TECLADO / MOUSE",
    "panel.title": "Línea de consola",
    "panel.help": "Pégala en la consola de desarrollador de CS2.",
    "panel.copy": "COPIAR",
    "panel.copied": "COPIADO",
    "panel.resetFirst": "Restablecer binds primero",
    "panel.resetUi": "REINICIAR UI",
    "panel.preset": "CARGAR TU PRESET DE PRUEBA",
    "panel.download": "DESCARGAR .CFG",
    "panel.aliasPlaceholder": "Alias del preset",
    "panel.saveConfig": "GUARDAR PRESET",
    "panel.savedConfig": "GUARDADO",
    "panel.recentConfigs": "CONFIGURACIONES RECIENTES",
    "panel.emptyConfigs": "Aun no hay configuraciones guardadas.",
    "panel.loadConfig": "CARGAR",
    "panel.editConfig": "EDITAR",
    "panel.deleteConfig": "BORRAR",
    "crosshair.share": "Compartir o importar",
    "crosshair.importPlaceholder": "Pega comandos de crosshair aqui",
    "crosshair.importApply": "Importar",
    "crosshair.importCopy": "Copiar",
    "crosshair.undo": "Deshacer cambios",
    "crosshair.reset": "Reiniciar",
    "hint.capture": "Modo captura: haz clic en un campo de tecla y presiona una tecla o botón del mouse.",
    "hint.refresh": "Refresco de CS2: después de pegar comandos, cambia a otra subsección y vuelve.",
    "hint.accuracy": "Nota de precision: esta herramienta replica la configuracion de CS2 lo mas cerca posible, pero algunas opciones son externas, de cuenta, requieren reinicio o no son configurables de forma segura por comandos de consola.",
    "scenery.toggle": "Abrir menú de escenario",
    "scenery.change": "Cambiar escenario del menú principal",
    "scenery.weapon": "Cambiar arma",
    "scenery.agent": "Mostrar agente CT equipado",
    "scenery.loadout": "Ver agente en equipamiento",
    "scenery.back": "Volver",
    "volume.toggle": "Volumen del soundtrack",
    "reset.page": "RESET",
    "toast.capture": "Presiona una tecla o botón del mouse...",
    "toast.cancel": "ESC cancela",
    "tab.kbm.settings": "CONFIGURACIÓN TECLADO / MOUSE",
    "tab.kbm.movement": "TECLAS DE MOVIMIENTO",
    "tab.kbm.weapon": "TECLAS DE ARMAS",
    "tab.kbm.ui": "TECLAS DE UI",
    "tab.kbm.communication": "COMUNICACIÓN",
    "tab.kbm.chatwheel": "RUEDA DE CHAT",
    "tab.video.basic": "VIDEO",
    "tab.video.advanced": "VIDEO AVANZADO",
    "tab.video.hud_edges": "POSICIONES DE BORDE HUD",
    "tab.audio.main": "AUDIO",
    "tab.audio.voice": "VOZ",
    "tab.audio.music": "MÚSICA",
    "tab.audio.eq": "EQ POR MODO",
    "tab.game.main": "JUEGO",
    "tab.game.hud": "HUD",
    "tab.game.team": "EQUIPO",
    "tab.game.communication": "COMUNICACION",
    "tab.game.spectator": "ESPECTADOR / MARCADOR",
    "tab.game.item": "OBJETO",
    "tab.game.radar": "RADAR",
    "tab.game.crosshair": "MIRA",
    "tab.game.sniper": "MIRAS DE SNIPER",
    "tab.game.grenade": "ALINEACION DE GRANADAS",
    "tab.game.damage": "PREDICCION DE DANO",
    "tab.game.telemetry": "TELEMETRIA",
    "tab.viewmodel.main": "VIEW MODEL",
    "group.kbm.settings": "Configuración de teclado y mouse",
    "group.kbm.movement": "Teclas de movimiento",
    "group.kbm.weapon": "Teclas de armas",
    "group.kbm.ui": "Teclas de UI",
    "group.kbm.communication": "Opciones de comunicación",
    "group.kbm.chatwheel": "Teclas de rueda de chat",
    "group.video.basic": "Video básico",
    "group.video.advanced": "Video avanzado",
    "group.video.frame_pacing": "Frame pacing",
    "group.video.presets": "Presets",
    "group.video.magnification": "Magnificacion",
    "group.video.hud_edges": "Posiciones de borde HUD",
    "group.audio.main": "Audio",
    "group.audio.voice": "Voz",
    "group.audio.music": "Música",
    "group.audio.eq": "EQ por modo de juego",
    "group.game.main": "Juego",
    "group.game.hud": "HUD",
    "group.game.team": "Equipo",
    "group.game.communication": "Comunicacion",
    "group.game.spectator": "Espectador / marcador",
    "group.game.item": "Objeto",
    "group.game.radar": "Radar",
    "group.game.crosshair": "Mira",
    "group.game.sniper": "Miras de sniper",
    "group.game.grenade": "Alineacion de granadas",
    "group.game.damage": "Prediccion de dano",
    "group.game.telemetry": "Telemetria",
    "group.viewmodel.main": "View Model",
    "group.viewmodel.weapon": "Vista previa del arma",
    "row.mouse_inverty": "Invertir mouse",
    "row.option_duck_method": "Modo agacharse",
    "row.option_speed_method": "Modo caminar",
    "row.cl_debounce_zoom": "Mantener zoom",
    "row.sensitivity": "Sensibilidad del mouse",
    "row.zoom_sensitivity_ratio": "Multiplicador de sensibilidad con zoom",
    "row.show_loadout_toggle": "Alternar inventario visible",
    "row.move_forward": "Avanzar",
    "row.move_backward": "Retroceder",
    "row.move_left": "Mover izquierda (strafe)",
    "row.move_right": "Mover derecha (strafe)",
    "row.walk": "Caminar",
    "row.duck": "Agacharse",
    "row.jump": "Saltar",
    "row.use": "Usar",
    "row.fire": "Disparar",
    "row.secondary_fire": "Disparo secundario",
    "row.drop": "Soltar arma",
    "row.inspect": "Inspeccionar arma",
    "row.switchhands": "Cambiar mano del viewmodel",
    "row.buymenu": "Menú de compra",
    "row.autobuy": "Compra automática",
    "row.rebuy": "Recomprar",
    "row.slot1": "Arma principal",
    "row.slot2": "Arma secundaria",
    "row.slot3": "Armas cuerpo a cuerpo",
    "row.slot4": "Cambiar granadas",
    "row.slot5": "Explosivos y trampas",
    "row.slot6": "Granada HE",
    "row.slot7": "Flashbang",
    "row.slot8": "Granada de humo",
    "row.slot9": "Granada señuelo",
    "row.slot10": "Cóctel molotov / granada incendiaria",
    "row.zeus": "Zeus x27",
    "row.healthshot": "Inyección de salud",
    "row.utility_items": "Objetos de utilidad",
    "row.reload": "Recargar",
    "row.radial_weapon": "Menú radial de armas",
    "row.lastinv": "Última arma usada",
    "row.invprev": "Seleccionar arma anterior",
    "row.invnext": "Seleccionar siguiente arma",
    "row.scoreboard": "Marcador",
    "row.show_team_equipment": "Mostrar equipamiento del equipo",
    "row.toggle_radar_zoom": "Alternar zoom del radar",
    "row.call_vote": "Iniciar votación",
    "row.console": "Abrir consola",
    "row.team_menu": "Elegir equipo",
    "row.chat_all": "Mensaje de chat",
    "row.chat_team": "Mensaje de equipo",
    "row.spray": "Menú de spray",
    "row.voice": "Usar micrófono",
    "row.voice_mode_toggle": "Alternar entre micrófono abierto y pulsar para hablar",
    "row.disable_chat": "Desactivar chat entrante temporalmente",
    "row.player_ping": "Ping de jugador",
    "row.radio1": "Mensaje de radio",
    "row.radio2": "Mensaje de radio de comandos",
    "row.radio3": "Mensaje de radio estándar",
    "row.radio_report": "Mensaje de radio para reportar",
    "row.chatwheel1": "Rueda de chat 1",
    "row.chatwheel2": "Rueda de chat 2",
    "row.chatwheel3": "Rueda de chat 3",
    "row.display_mode": "Modo de pantalla",
    "row.brightness": "Brillo",
    "row.boost_player_contrast": "Aumentar contraste de jugadores",
    "row.vsync": "V-Sync",
    "row.fps_max": "FPS máximos en partida",
    "row.fps_max_ui": "FPS máximos en menús",
    "row.video_values_preset": "Preset actual de valores de video",
    "row.msaa": "Antialiasing multisampling",
    "row.texture_filtering": "Filtrado de texturas",
    "row.shadow_quality": "Calidad global de sombras",
    "row.dynamic_shadows": "Sombras dinamicas",
    "row.texture_detail": "Detalle de modelos / texturas",
    "row.shader_detail": "Detalle de shaders",
    "row.particle_detail": "Detalle de partículas",
    "row.ambient_occlusion": "Oclusion ambiental",
    "row.hdr": "Alto rango dinamico",
    "row.fsr": "FidelityFX Super Resolution",
    "row.magnification_mode": "Modo de magnificacion",
    "row.magnification": "Magnificacion",
    "row.reflex": "Baja latencia NVIDIA Reflex",
    "row.frame_telemetry": "Telemetría de frame time",
    "row.ping_telemetry": "Telemetría de ping",
    "row.packet_telemetry": "Telemetría de pérdida / entrega",
    "row.master_volume": "Volumen maestro",
    "row.menu_ambience_volume": "Volumen de ambiente del menu principal",
    "row.eq_profile": "Perfil EQ",
    "row.lr_isolation": "Aislamiento I/D",
    "row.perspective_correction": "Correccion de perspectiva",
    "row.play_audio_background": "Reproducir audio con el juego en segundo plano",
    "row.mute_focus": "Silenciar en segundo plano",
    "row.voice_enable": "Activar voz",
    "row.voice_volume": "Volumen de voz",
    "row.other_player_voice_volume": "Volumen de voz de otros jugadores",
    "row.voice_mic_mode": "Modo de voz/microfono",
    "row.hear_own_voice": "Escuchar mi propia voz",
    "row.streamlined_ptt": "Pulsar para hablar simplificado",
    "row.mic_threshold": "Umbral de activacion del microfono",
    "row.menu_music": "Volumen menú principal",
    "row.round_start_music": "Volumen inicio de ronda",
    "row.round_action_music": "Volumen accion de ronda",
    "row.round_end_music": "Volumen fin de ronda",
    "row.objective_music": "Volumen bomba / rehenes",
    "row.ten_second_music": "Volumen aviso de 10 segundos",
    "row.mvp_music": "Volumen MVP",
    "row.deathcam_music": "Volumen camara de muerte",
    "row.mute_mvp_live": "Silenciar musica MVP cuando hay jugadores vivos en ambos equipos",
    "row.competitive_eq": "EQ competitivo",
    "row.casual_eq": "EQ casual",
    "row.deathmatch_eq": "EQ Deathmatch",
    "row.armsrace_eq": "EQ Carrera de armamentos",
    "row.viewmodel_weapon": "Arma de vista previa",
    "row.viewmodel_fov": "FOV del viewmodel",
    "row.viewmodel_offset_x": "Offset X del viewmodel",
    "row.viewmodel_offset_y": "Offset Y del viewmodel",
    "row.viewmodel_offset_z": "Offset Z del viewmodel",
    "row.viewmodel_handedness": "Mano del arma",
    "row.developer_console": "Activar consola de desarrollador",
    "row.traffic_bandwidth": "Ancho de banda maximo aceptable",
    "row.net_buffer": "Buffer para suavizar perdida de paquetes / jitter",
    "row.hud_scale": "Escala del HUD",
    "row.teammate_colors": "Mostrar colores de companeros en competitivo",
    "row.join_advertise": "Disponible para jugar al iniciar CS2",
    "row.voice_modenable": "Activar voz",
    "row.voip_volume": "Volumen de VOIP",
    "row.mute_enemy_team": "Silenciar equipo enemigo",
    "row.mute_all_but_friends": "Silenciar todos excepto amigos",
    "row.hide_avatar_images": "Ocultar imagenes de avatar",
    "row.sanitize_player_names": "Limpiar nombres de jugadores",
    "row.spec_number_keys": "Metodo de seleccion en espectador / votacion",
    "row.autowepswitch": "Cambiar arma al recoger",
    "row.radar_square_scoreboard": "Cambiar forma con marcador",
    "row.crosshair_style": "Estilo de mira",
    "row.crosshair_recoil": "Seguir retroceso",
    "row.crosshair_dot": "Punto central",
    "row.crosshair_t": "Estilo T",
    "row.crosshair_outline": "Dibujar contorno",
    "row.crosshair_size": "Longitud",
    "row.crosshair_thickness": "Grosor",
    "row.crosshair_gap": "Separacion",
    "row.crosshair_alpha": "Alpha",
    "row.crosshair_red": "Rojo",
    "row.crosshair_green": "Verde",
    "row.crosshair_blue": "Azul",
    "row.sniper_width": "Grosor de sniper",
    "row.grenade_crosshair_keep": "Mantener mira normal",
    "row.grenade_flash_delay": "Retraso mira flashbang",
    "row.grenade_explosive_delay": "Retraso mira HE",
    "row.grenade_fire_delay": "Retraso mira de fuego",
    "row.grenade_smoke_delay": "Retraso mira humo",
    "row.grenade_decoy_delay": "Retraso mira senuelo",
    "row.predict_body": "Predecir efectos de disparo al cuerpo",
    "row.predict_head": "Predecir efectos de disparo a la cabeza",
    "row.predict_kill": "Predecir ragdolls al matar",
    "row.frame_telemetry_threshold": "Umbral de aviso de frame time",
    "row.ping_telemetry_threshold": "Umbral de aviso de ping",
    "row.packet_telemetry_threshold": "Umbral de aviso de entrega de paquetes",
    "row.deathcam_music": "Volumen cámara de muerte",
    "row.game_instructor": "Mensajes del instructor",
    "row.buy_menu_use": "Usar abre menú de compra",
    "row.max_ping": "Ping máximo aceptable",
    "row.hud_color": "Color del HUD",
    "row.team_overhead": "Mostrar equipo en HUD",
    "row.show_loadout": "Mostrar inventario siempre",
    "row.safezonex": "Zona segura horizontal del HUD",
    "row.safezoney": "Zona segura vertical del HUD",
    "row.radar_center": "Radar centrado en jugador",
    "row.radar_rotate": "Radar rota",
    "row.radar_scale": "Zoom del mapa del radar",
    "row.hud_radar_scale": "Tamaño del radar en HUD",
    "row.radar_icon_scale": "Escala de iconos del radar",
    "opt.off": "NO",
    "opt.on": "SÍ",
    "opt.hold": "MANTENER",
    "opt.toggle": "ALTERNAR",
    "opt.repeat_disabled": "REPETICIÓN DESACTIVADA",
    "opt.repeat_enabled": "REPETICIÓN ACTIVADA",
    "opt.fullscreen": "PANTALLA COMPLETA",
    "opt.windowed": "VENTANA",
    "opt.borderless": "VENTANA SIN BORDES",
    "opt.disabled": "DESACTIVADO",
    "opt.enabled": "ACTIVADO",
    "opt.boost": "ACTIVADO + BOOST",
    "opt.none": "NINGUNO",
    "opt.2x": "2X MSAA",
    "opt.4x": "4X MSAA",
    "opt.8x": "8X MSAA",
    "opt.bilinear": "BILINEAL",
    "opt.trilinear": "TRILINEAL",
    "opt.2x_aniso": "ANISOTRÓPICO 2X",
    "opt.4x_aniso": "ANISOTRÓPICO 4X",
    "opt.8x_aniso": "ANISOTRÓPICO 8X",
    "opt.16x_aniso": "ANISOTRÓPICO 16X",
    "opt.low": "BAJO",
    "opt.medium": "MEDIO",
    "opt.high": "ALTO",
    "opt.sun_only": "SOLO SOL",
    "opt.sun_and_static": "SOL Y ESTATICAS",
    "opt.all": "TODO",
    "opt.performance": "RENDIMIENTO",
    "opt.quality": "CALIDAD",
    "opt.ultra_quality": "ULTRA CALIDAD",
    "opt.balanced": "BALANCEADO",
    "opt.disabled_highest_quality": "DESACTIVADO (MAXIMA CALIDAD)",
    "opt.zoom": "ZOOM",
    "opt.split": "DIVIDIDO",
    "opt.no": "NO",
    "opt.yes": "SI",
    "opt.very_restricted": "MUY RESTRINGIDO",
    "opt.restricted": "RESTRINGIDO",
    "opt.moderate": "MODERADO",
    "opt.unrestricted": "SIN RESTRICCION",
    "opt.one_packet": "1 PAQUETE",
    "opt.two_packets": "2 PAQUETES",
    "opt.friends": "AMIGOS",
    "opt.everyone": "TODOS",
    "opt.colors_and_letters": "COLORES Y LETRAS",
    "opt.number_keys": "TECLAS NUMERICAS",
    "opt.weapon_keys": "TECLAS DE ARMAS",
    "opt.team_color": "COLOR DE EQUIPO",
    "opt.default_static": "PREDET. ESTATICA",
    "opt.classic_static": "CLASICA ESTATICA",
    "opt.classic_dynamic": "CLASICA DINAMICA",
    "opt.never": "NUNCA",
    "opt.if_poor": "SI VA MAL",
    "opt.always": "SIEMPRE",
    "opt.default": "PREDETERMINADO",
    "opt.natural": "NATURAL",
    "opt.crisp": "NITIDO",
    "opt.smooth": "SUAVE",
    "opt.push_to_talk": "PULSAR PARA HABLAR",
    "opt.open_microphone": "MICROFONO ABIERTO",
    "opt.m4a1s": "M4A1-S",
    "opt.ak47": "AK-47",
    "opt.awp": "AWP",
    "opt.white": "BLANCO",
    "opt.lightblue": "AZUL CLARO",
    "opt.blue": "AZUL",
    "opt.purple": "MORADO",
    "opt.red": "ROJO",
    "opt.orange": "NARANJA",
    "opt.yellow": "AMARILLO",
    "opt.green": "VERDE",
    "opt.aqua": "AQUA",
    "opt.team_overhead_pips": "INDICADORES",
    "opt.team_overhead_names": "INDICADORES + NOMBRES"
  },
  ru: {
    "app.title": "Генератор команд настроек CS2",
    "aria.search": "Поиск",
    "aria.categories": "Категории настроек",
    "aria.sections": "Разделы настроек",
    "aria.language": "Язык",
    "category.video": "ВИДЕО",
    "category.audio": "АУДИО",
    "category.game": "ИГРА",
    "category.keyboard": "КЛАВИАТУРА / МЫШЬ",
    "panel.title": "Строка консоли",
    "panel.help": "Вставьте это в консоль разработчика CS2.",
    "panel.copy": "КОПИРОВАТЬ",
    "panel.copied": "СКОПИРОВАНО",
    "panel.resetFirst": "Сначала сбросить бинды",
    "panel.resetUi": "СБРОС UI",
    "panel.preset": "ЗАГРУЗИТЬ ТЕСТОВЫЙ ПРЕСЕТ",
    "panel.download": "СКАЧАТЬ .CFG",
    "panel.aliasPlaceholder": "Имя пресета",
    "panel.saveConfig": "СОХРАНИТЬ",
    "panel.savedConfig": "СОХРАНЕНО",
    "panel.recentConfigs": "НЕДАВНИЕ КОНФИГИ",
    "panel.emptyConfigs": "Сохраненных конфигов пока нет.",
    "panel.loadConfig": "ЗАГРУЗИТЬ",
    "panel.editConfig": "ИЗМЕНИТЬ",
    "panel.deleteConfig": "УДАЛИТЬ",
    "crosshair.share": "Поделиться / импорт",
    "crosshair.importPlaceholder": "Вставьте команды прицела",
    "crosshair.importApply": "Импорт",
    "crosshair.importCopy": "Копировать",
    "crosshair.undo": "Отменить изменения",
    "crosshair.reset": "Сброс",
    "hint.capture": "Режим захвата: нажмите поле клавиши, затем клавишу или кнопку мыши.",
    "hint.refresh": "Обновление CS2: после вставки команд перейдите в другой подраздел и обратно.",
    "hint.accuracy": "Примечание: инструмент максимально точно повторяет настройки CS2, но некоторые пункты внешние, привязаны к аккаунту, требуют перезапуска или небезопасны для консольных команд.",
    "scenery.toggle": "Открыть меню сцены",
    "scenery.change": "Сменить сцену главного меню",
    "scenery.weapon": "Сменить оружие",
    "scenery.agent": "Показать выбранного CT-агента",
    "scenery.loadout": "Открыть агента в снаряжении",
    "scenery.back": "Назад",
    "volume.toggle": "Громкость саундтрека",
    "reset.page": "СБРОС",
    "toast.capture": "Нажмите клавишу или кнопку мыши...",
    "toast.cancel": "ESC отменяет",
    "tab.kbm.settings": "НАСТРОЙКИ КЛАВИАТУРЫ / МЫШИ",
    "tab.kbm.movement": "КЛАВИШИ ДВИЖЕНИЯ",
    "tab.kbm.weapon": "КЛАВИШИ ОРУЖИЯ",
    "tab.kbm.ui": "КЛАВИШИ UI",
    "tab.kbm.communication": "КОММУНИКАЦИЯ",
    "tab.kbm.chatwheel": "РАДИАЛЬНОЕ МЕНЮ",
    "tab.video.basic": "ОСНОВНОЕ ВИДЕО",
    "tab.video.advanced": "РАСШИРЕННОЕ ВИДЕО",
    "tab.video.telemetry": "ТЕЛЕМЕТРИЯ",
    "tab.audio.main": "АУДИО",
    "tab.audio.voice": "ГОЛОС",
    "tab.audio.music": "МУЗЫКА",
    "tab.game.main": "ИГРА",
    "tab.game.hud": "HUD",
    "tab.game.radar": "РАДАР",
    "group.kbm.settings": "Настройки клавиатуры и мыши",
    "group.kbm.movement": "Клавиши движения",
    "group.kbm.weapon": "Клавиши оружия",
    "group.kbm.ui": "Клавиши UI",
    "group.kbm.communication": "Параметры коммуникации",
    "group.kbm.chatwheel": "Клавиши радиального меню",
    "group.video.basic": "Основное видео",
    "group.video.advanced": "Расширенное видео",
    "group.video.telemetry": "Телеметрия",
    "group.audio.main": "Аудио",
    "group.audio.voice": "Голос",
    "group.audio.music": "Музыка",
    "group.game.main": "Игра",
    "group.game.hud": "HUD",
    "group.game.radar": "Радар",
    "row.mouse_inverty": "Инвертировать мышь",
    "row.option_duck_method": "Режим приседания",
    "row.option_speed_method": "Режим ходьбы",
    "row.cl_debounce_zoom": "Удержание зума",
    "row.sensitivity": "Чувствительность мыши",
    "row.zoom_sensitivity_ratio": "Множитель чувствительности зума",
    "row.show_loadout_toggle": "Показать/скрыть инвентарь",
    "row.move_forward": "Вперед",
    "row.move_backward": "Назад",
    "row.move_left": "Влево (стрейф)",
    "row.move_right": "Вправо (стрейф)",
    "row.walk": "Ходьба",
    "row.duck": "Присесть",
    "row.jump": "Прыжок",
    "row.use": "Использовать",
    "row.fire": "Огонь",
    "row.secondary_fire": "Альтернативный огонь",
    "row.drop": "Выбросить оружие",
    "row.inspect": "Осмотреть оружие",
    "row.switchhands": "Сменить руку модели",
    "row.buymenu": "Меню покупки",
    "row.autobuy": "Автопокупка",
    "row.rebuy": "Повторить покупку",
    "row.slot1": "Основное оружие",
    "row.slot2": "Пистолет",
    "row.slot3": "Нож",
    "row.slot4": "Переключать гранаты",
    "row.slot5": "Взрывчатка и ловушки",
    "row.slot6": "HE-граната",
    "row.slot7": "Световая граната",
    "row.slot8": "Дымовая граната",
    "row.slot9": "Ложная граната",
    "row.slot10": "Молотов / зажигательная граната",
    "row.zeus": "Zeus x27",
    "row.healthshot": "Лечебный шприц",
    "row.utility_items": "Предметы снаряжения",
    "row.reload": "Перезарядка",
    "row.radial_weapon": "Радиальное меню оружия",
    "row.lastinv": "Последнее оружие",
    "row.invprev": "Выбрать предыдущее оружие",
    "row.invnext": "Выбрать следующее оружие",
    "row.scoreboard": "Таблица счета",
    "row.show_team_equipment": "Показать снаряжение команды",
    "row.toggle_radar_zoom": "Переключить масштаб радара",
    "row.call_vote": "Начать голосование",
    "row.console": "Открыть консоль",
    "row.team_menu": "Выбрать команду",
    "row.chat_all": "Сообщение в чат",
    "row.chat_team": "Сообщение команде",
    "row.spray": "Меню граффити",
    "row.voice": "Микрофон",
    "row.voice_mode_toggle": "Переключить открытый микрофон / push-to-talk",
    "row.disable_chat": "Временно отключить входящий чат",
    "row.player_ping": "Метка игрока",
    "row.radio1": "Радиосообщение",
    "row.radio2": "Командное радиосообщение",
    "row.radio3": "Стандартное радиосообщение",
    "row.radio_report": "Радиосообщение жалобы",
    "row.chatwheel1": "Радиальное меню 1",
    "row.chatwheel2": "Радиальное меню 2",
    "row.chatwheel3": "Радиальное меню 3",
    "row.display_mode": "Режим экрана",
    "row.brightness": "Яркость",
    "row.fps_max": "Максимум FPS в игре",
    "row.fps_max_ui": "Максимум FPS в меню",
    "row.msaa": "Мультисэмплинг сглаживания",
    "row.texture_filtering": "Фильтрация текстур",
    "row.shadow_quality": "Общее качество теней",
    "row.texture_detail": "Детализация моделей / текстур",
    "row.shader_detail": "Детализация шейдеров",
    "row.particle_detail": "Детализация частиц",
    "row.reflex": "Низкая задержка NVIDIA Reflex",
    "row.frame_telemetry": "Телеметрия времени кадра",
    "row.ping_telemetry": "Телеметрия пинга",
    "row.packet_telemetry": "Телеметрия потерь / доставки",
    "row.master_volume": "Общая громкость",
    "row.mute_focus": "Отключать звук в фоне",
    "row.voice_enable": "Включить голос",
    "row.voice_volume": "Громкость голоса",
    "row.menu_music": "Громкость главного меню",
    "row.round_start_music": "Громкость начала раунда",
    "row.round_end_music": "Громкость конца раунда",
    "row.objective_music": "Громкость бомбы / заложников",
    "row.ten_second_music": "Громкость предупреждения 10 сек.",
    "row.mvp_music": "Громкость MVP",
    "row.deathcam_music": "Громкость камеры смерти",
    "row.game_instructor": "Подсказки инструктора",
    "row.buy_menu_use": "Клавиша Use открывает покупку",
    "row.max_ping": "Максимальный пинг матчмейкинга",
    "row.hud_color": "Цвет HUD",
    "row.team_overhead": "Показывать команду в HUD",
    "row.show_loadout": "Всегда показывать инвентарь",
    "row.safezonex": "Горизонтальная безопасная зона HUD",
    "row.safezoney": "Вертикальная безопасная зона HUD",
    "row.radar_center": "Радар центрирует игрока",
    "row.radar_rotate": "Радар вращается",
    "row.radar_scale": "Масштаб карты радара",
    "row.hud_radar_scale": "Размер радара HUD",
    "row.radar_icon_scale": "Масштаб иконок радара",
    "opt.off": "ВЫКЛ",
    "opt.on": "ВКЛ",
    "opt.hold": "УДЕРЖИВАТЬ",
    "opt.toggle": "ПЕРЕКЛЮЧАТЬ",
    "opt.repeat_disabled": "ПОВТОР ВЫКЛ",
    "opt.repeat_enabled": "ПОВТОР ВКЛ",
    "opt.fullscreen": "ПОЛНЫЙ ЭКРАН",
    "opt.windowed": "ОКНО",
    "opt.borderless": "ОКНО БЕЗ РАМОК",
    "opt.disabled": "ОТКЛЮЧЕНО",
    "opt.enabled": "ВКЛЮЧЕНО",
    "opt.boost": "ВКЛЮЧЕНО + BOOST",
    "opt.none": "НЕТ",
    "opt.2x": "2X MSAA",
    "opt.4x": "4X MSAA",
    "opt.8x": "8X MSAA",
    "opt.bilinear": "БИЛИНЕЙНАЯ",
    "opt.trilinear": "ТРИЛИНЕЙНАЯ",
    "opt.2x_aniso": "АНИЗОТРОПНАЯ 2X",
    "opt.4x_aniso": "АНИЗОТРОПНАЯ 4X",
    "opt.8x_aniso": "АНИЗОТРОПНАЯ 8X",
    "opt.16x_aniso": "АНИЗОТРОПНАЯ 16X",
    "opt.low": "НИЗКОЕ",
    "opt.medium": "СРЕДНЕЕ",
    "opt.high": "ВЫСОКОЕ",
    "opt.never": "НИКОГДА",
    "opt.if_poor": "ПРИ ПРОБЛЕМАХ",
    "opt.always": "ВСЕГДА",
    "opt.default": "ПО УМОЛЧАНИЮ",
    "opt.white": "БЕЛЫЙ",
    "opt.lightblue": "ГОЛУБОЙ",
    "opt.blue": "СИНИЙ",
    "opt.purple": "ФИОЛЕТОВЫЙ",
    "opt.red": "КРАСНЫЙ",
    "opt.orange": "ОРАНЖЕВЫЙ",
    "opt.yellow": "ЖЕЛТЫЙ",
    "opt.green": "ЗЕЛЕНЫЙ",
    "opt.aqua": "БИРЮЗОВЫЙ",
    "opt.team_overhead_pips": "МЕТКИ",
    "opt.team_overhead_names": "МЕТКИ + ИМЕНА"
  }
};

const categoryOrder = ["video", "audio", "game", "viewmodel", "keyboard"];

const defaults = {
  video: {
    tabs: [
      { id: "basic", labelKey: "tab.video.basic" },
      { id: "advanced", labelKey: "tab.video.advanced" },
      { id: "hud_edges", labelKey: "tab.video.hud_edges" }
    ],
    sections: [
      section("basic", [
        group("group.video.basic", [
          select("display_mode", "row.display_mode", "setting.fullscreen", "1", [
            opt("1", "opt.fullscreen"), opt("0", "opt.windowed"), opt("2", "opt.borderless")
          ]),
          slider("brightness", "row.brightness", "r_fullscreen_gamma", "2.20", 1.6, 3, 0.01)
        ])
      ]),
      section("advanced", [
        group("group.video.advanced", [
          select("boost_player_contrast", "row.boost_player_contrast", "r_player_visibility_mode", "1", [opt("0", "opt.disabled"), opt("1", "opt.enabled")])
        ]),
        group("group.video.frame_pacing", [
          select("vsync", "row.vsync", "setting.vsync", "0", [opt("0", "opt.disabled"), opt("1", "opt.enabled")]),
          select("reflex", "row.reflex", "setting.reflex_low_latency", "1", [
            opt("0", "opt.disabled"), opt("1", "opt.enabled"), opt("2", "opt.boost")
          ]),
          slider("fps_max", "row.fps_max", "fps_max", "360", 60, 500, 1),
          slider("fps_max_ui", "row.fps_max_ui", "fps_max_ui", "360", 30, 500, 1)
        ]),
        group("group.video.presets", [
          select("video_values_preset", "row.video_values_preset", "setting.videocfg_preset", "custom", [
            opt("custom", "opt.custom"), opt("low", "opt.low"), opt("medium", "opt.medium"), opt("high", "opt.high")
          ]),
          select("msaa", "row.msaa", "setting.mat_antialias", "4", [
            opt("0", "opt.none"), opt("2", "opt.2x"), opt("4", "opt.4x"), opt("8", "opt.8x")
          ]),
          select("shadow_quality", "row.shadow_quality", "setting.csm_quality_level", "2", [
            opt("0", "opt.low"), opt("1", "opt.medium"), opt("2", "opt.high")
          ]),
          select("dynamic_shadows", "row.dynamic_shadows", "setting.csm_shadows", "2", [
            opt("0", "opt.sun_only"), opt("1", "opt.sun_and_static"), opt("2", "opt.all")
          ]),
          select("texture_detail", "row.texture_detail", "setting.videocfg_texture_detail", "2", [
            opt("0", "opt.low"), opt("1", "opt.medium"), opt("2", "opt.high")
          ]),
          select("texture_filtering", "row.texture_filtering", "setting.r_texturefilteringquality", "3", [
            opt("0", "opt.bilinear"), opt("1", "opt.trilinear"), opt("2", "opt.2x_aniso"), opt("3", "opt.4x_aniso"), opt("4", "opt.8x_aniso"), opt("5", "opt.16x_aniso")
          ]),
          select("shader_detail", "row.shader_detail", "setting.shaderquality", "1", [
            opt("0", "opt.low"), opt("1", "opt.high")
          ]),
          select("particle_detail", "row.particle_detail", "setting.particle_level", "1", [
            opt("0", "opt.low"), opt("1", "opt.medium"), opt("2", "opt.high")
          ]),
          select("ambient_occlusion", "row.ambient_occlusion", "setting.r_ssao", "1", [
            opt("0", "opt.disabled"), opt("1", "opt.medium"), opt("2", "opt.high")
          ]),
          select("hdr", "row.hdr", "setting.r_high_dynamic_range", "1", [
            opt("0", "opt.performance"), opt("1", "opt.quality")
          ]),
          select("fsr", "row.fsr", "setting.r_fidelityfx_fsr", "0", [
            opt("0", "opt.disabled_highest_quality"), opt("1", "opt.ultra_quality"), opt("2", "opt.quality"), opt("3", "opt.balanced"), opt("4", "opt.performance")
          ])
        ]),
        group("group.video.magnification", [
          select("magnification_mode", "row.magnification_mode", "setting.videocfg_magnification_mode", "zoom", [
            opt("zoom", "opt.zoom"), opt("split", "opt.split")
          ]),
          slider("magnification", "row.magnification", "setting.videocfg_magnification", "6", 1, 10, 1)
        ])
      ]),
      section("hud_edges", [
        group("group.video.hud_edges", [
          slider("safezonex_video", "row.safezonex", "safezonex", "1.00", 0.85, 1, 0.01),
          slider("safezoney_video", "row.safezoney", "safezoney", "1.00", 0.85, 1, 0.01)
        ])
      ])
    ]
  },
  audio: {
    tabs: [
      { id: "main", labelKey: "tab.audio.main" },
      { id: "voice", labelKey: "tab.audio.voice" },
      { id: "music", labelKey: "tab.audio.music" },
      { id: "eq", labelKey: "tab.audio.eq" }
    ],
    sections: [
      section("main", [
        group("group.audio.main", [
          slider("master_volume", "row.master_volume", "volume", "1.00", 0, 1, 0.01, "percent"),
          slider("menu_ambience_volume", "row.menu_ambience_volume", "snd_menumap_volume", "1.00", 0, 1, 0.01, "percent"),
          select("eq_profile", "row.eq_profile", "snd_headphone_eq", "0", [
            opt("0", "opt.natural"), opt("1", "opt.crisp"), opt("2", "opt.smooth")
          ]),
          slider("lr_isolation", "row.lr_isolation", "snd_spatialize_lerp", "0.00", 0, 1, 0.01, "percent"),
          select("perspective_correction", "row.perspective_correction", "snd_steamaudio_enable_perspective_correction", "1", [opt("0", "opt.no"), opt("1", "opt.yes")]),
          select("play_audio_background", "row.play_audio_background", "snd_mute_losefocus", "1", [opt("0", "opt.yes"), opt("1", "opt.no")])
        ])
      ]),
      section("voice", [
        group("group.audio.voice", [
          slider("voice_volume", "row.other_player_voice_volume", "snd_voipvolume", "1.00", 0, 1, 0.01, "percent"),
          select("voice_mic_mode", "row.voice_mic_mode", "voice_vox", "0", [opt("0", "opt.push_to_talk"), opt("1", "opt.open_microphone")]),
          select("hear_own_voice", "row.hear_own_voice", "voice_loopback", "0", [opt("0", "opt.off"), opt("1", "opt.on")]),
          select("streamlined_ptt", "row.streamlined_ptt", "voice_always_sample_mic", "0", [opt("0", "opt.no"), opt("1", "opt.yes")]),
          slider("mic_threshold", "row.mic_threshold", "voice_threshold", "-120", -120, 0, 1)
        ])
      ]),
      section("music", [
        group("group.audio.music", [
          slider("menu_music", "row.menu_music", "snd_menumusic_volume", "0.29", 0, 1, 0.01, "percent"),
          slider("round_start_music", "row.round_start_music", "snd_roundstart_volume", "0.00", 0, 1, 0.01, "percent"),
          slider("round_action_music", "row.round_action_music", "snd_roundaction_volume", "0.00", 0, 1, 0.01, "percent"),
          slider("round_end_music", "row.round_end_music", "snd_roundend_volume", "0.40", 0, 1, 0.01, "percent"),
          slider("mvp_music", "row.mvp_music", "snd_mvp_volume", "0.40", 0, 1, 0.01, "percent"),
          slider("objective_music", "row.objective_music", "snd_mapobjective_volume", "0.20", 0, 1, 0.01, "percent"),
          slider("ten_second_music", "row.ten_second_music", "snd_tensecondwarning_volume", "0.20", 0, 1, 0.01, "percent"),
          slider("deathcam_music", "row.deathcam_music", "snd_deathcamera_volume", "0.40", 0, 1, 0.01, "percent"),
          select("mute_mvp_live", "row.mute_mvp_live", "snd_mute_mvp_music_live_players", "0", [opt("0", "opt.no"), opt("1", "opt.yes")])
        ])
      ]),
      section("eq", [
        group("group.audio.eq", [
          select("competitive_eq", "row.competitive_eq", "snd_game_mode_eq_competitive", "0", [
            opt("0", "opt.default"), opt("1", "opt.natural"), opt("2", "opt.crisp"), opt("3", "opt.smooth")
          ]),
          select("casual_eq", "row.casual_eq", "snd_game_mode_eq_casual", "0", [
            opt("0", "opt.default"), opt("1", "opt.natural"), opt("2", "opt.crisp"), opt("3", "opt.smooth")
          ]),
          select("deathmatch_eq", "row.deathmatch_eq", "snd_game_mode_eq_deathmatch", "0", [
            opt("0", "opt.default"), opt("1", "opt.natural"), opt("2", "opt.crisp"), opt("3", "opt.smooth")
          ]),
          select("armsrace_eq", "row.armsrace_eq", "snd_game_mode_eq_armsrace", "0", [
            opt("0", "opt.default"), opt("1", "opt.natural"), opt("2", "opt.crisp"), opt("3", "opt.smooth")
          ])
        ])
      ])
    ]
  },
  game: {
    tabs: [
      { id: "main", labelKey: "tab.game.main" },
      { id: "hud", labelKey: "tab.game.hud" },
      { id: "team", labelKey: "tab.game.team" },
      { id: "communication", labelKey: "tab.game.communication" },
      { id: "spectator", labelKey: "tab.game.spectator" },
      { id: "item", labelKey: "tab.game.item" },
      { id: "radar", labelKey: "tab.game.radar" },
      { id: "crosshair", labelKey: "tab.game.crosshair" },
      { id: "sniper", labelKey: "tab.game.sniper" },
      { id: "grenade", labelKey: "tab.game.grenade" },
      { id: "damage", labelKey: "tab.game.damage" },
      { id: "telemetry", labelKey: "tab.game.telemetry" }
    ],
    sections: [
      section("main", [
        group("group.game.main", [
          select("developer_console", "row.developer_console", "con_enable", "1", [opt("0", "opt.no"), opt("1", "opt.yes")]),
          slider("max_ping", "row.max_ping", "mm_dedicated_search_maxping", "150", 25, 350, 1),
          select("traffic_bandwidth", "row.traffic_bandwidth", "rate", "786432", [
            opt("196608", "opt.very_restricted"), opt("262144", "opt.restricted"), opt("393216", "opt.moderate"), opt("786432", "opt.unrestricted")
          ]),
          select("net_buffer", "row.net_buffer", "cl_net_buffer_ticks", "0", [
            opt("0", "opt.none"), opt("1", "opt.one_packet"), opt("2", "opt.two_packets")
          ]),
          select("game_instructor", "row.game_instructor", "gameinstructor_enable", "1", [opt("0", "opt.off"), opt("1", "opt.on")]),
          select("buy_menu_use", "row.buy_menu_use", "cl_use_opens_buy_menu", "1", [opt("0", "opt.off"), opt("1", "opt.on")])
        ])
      ]),
      section("hud", [
        group("group.game.hud", [
          slider("hud_scale", "row.hud_scale", "hud_scaling", "1.00", 0.5, 1, 0.01),
          select("hud_color", "row.hud_color", "cl_hud_color", "0", [
            opt("0", "opt.team_color"), opt("1", "opt.white"), opt("2", "opt.lightblue"), opt("3", "opt.blue"), opt("4", "opt.purple"), opt("5", "opt.red"), opt("6", "opt.orange"), opt("7", "opt.yellow"), opt("8", "opt.green"), opt("9", "opt.aqua")
          ]),
          select("large_player_count", "row.large_player_count", "cl_hud_playercount_showcount", "0", [opt("0", "opt.no"), opt("1", "opt.yes")]),
          select("community_location", "row.community_location", "ui_steam_overlay_notification_position", "bottomleft", [
            opt("bottomleft", "opt.bottom_left"), opt("bottomright", "opt.bottom_right"), opt("topleft", "opt.top_left"), opt("topright", "opt.top_right")
          ]),
          slider("community_horizontal", "row.community_horizontal", "ui_steam_overlay_notification_position_horz", "0", 0, 100, 1),
          slider("community_vertical", "row.community_vertical", "ui_steam_overlay_notification_position_vert", "0", 0, 100, 1),
          select("glow_rarity", "row.glow_rarity", "cl_weapon_rarity_color", "0", [opt("0", "opt.no"), opt("1", "opt.yes")]),
          select("spectator_hud_color", "row.spectator_hud_color", "cl_observed_hudcolor_override", "1", [opt("0", "opt.no"), opt("1", "opt.yes")]),
          select("show_loadout", "row.show_loadout", "cl_showloadout", "1", [opt("0", "opt.off"), opt("1", "opt.on")]),
          slider("safezonex", "row.safezonex", "safezonex", "1.00", 0.85, 1, 0.01),
          slider("safezoney", "row.safezoney", "safezoney", "1.00", 0.85, 1, 0.01)
        ])
      ]),
      section("team", [
        group("group.game.team", [
          select("team_id_walls", "row.team_id_walls", "cl_teamid_overhead_mode", "3", [
            opt("0", "opt.off"), opt("1", "opt.team_overhead_pips"), opt("2", "opt.team_overhead_names"), opt("3", "opt.team_health_equipment")
          ]),
          select("teammate_colors", "row.teammate_colors", "cl_teammate_colors_show", "1", [
            opt("0", "opt.off"), opt("1", "opt.show_colors"), opt("2", "opt.colors_and_letters")
          ]),
          select("team_id_colors", "row.team_id_colors", "cl_teamid_overhead_colors_show", "1", [
            opt("0", "opt.no"), opt("1", "opt.yes")
          ]),
          select("join_advertise", "row.join_advertise", "cl_join_advertise", "1", [
            opt("0", "opt.off"), opt("1", "opt.remember_last"), opt("2", "opt.everyone")
          ])
        ])
      ]),
      section("communication", [
        group("group.game.communication", [
          select("player_pings", "row.player_pings", "cl_player_ping_mute", "0", [
            opt("0", "opt.display_sound"), opt("1", "opt.display_only"), opt("2", "opt.disabled")
          ]),
          select("voice_modenable", "row.voice_modenable", "voice_modenable", "1", [opt("0", "opt.off"), opt("1", "opt.on")]),
          slider("voip_volume", "row.voip_volume", "snd_voipvolume", "1.00", 0, 1, 0.01),
          select("mute_enemy_team", "row.mute_enemy_team", "cl_mute_enemy_team", "0", [opt("0", "opt.off"), opt("1", "opt.on")]),
          select("mute_all_but_friends", "row.mute_all_but_friends", "cl_mute_all_but_friends_and_party", "0", [opt("0", "opt.off"), opt("1", "opt.on")]),
          select("allow_animated_avatars", "row.allow_animated_avatars", "cl_allow_animated_avatars", "1", [opt("0", "opt.no"), opt("1", "opt.yes")]),
          select("hide_avatar_images", "row.hide_avatar_images", "cl_hide_avatar_images", "0", [
            opt("0", "opt.show_all"), opt("1", "opt.enabled")
          ]),
          select("sanitize_player_names", "row.sanitize_player_names", "cl_sanitize_player_names", "0", [opt("0", "opt.off"), opt("1", "opt.on")])
        ])
      ]),
      section("spectator", [
        group("group.game.spectator", [
          select("spec_number_keys", "row.spec_number_keys", "spec_usenumberkeys_nobinds", "1", [
            opt("1", "opt.number_keys"), opt("0", "opt.weapon_keys")
          ]),
          select("scoreboard_mouse", "row.scoreboard_mouse", "cl_scoreboard_mouse_enable_binding", "+attack2", [
            opt("+attack2", "opt.secondary_fire"), opt("0", "opt.disabled")
          ]),
          select("survivors_always_on", "row.survivors_always_on", "cl_scoreboard_survivors_always_on", "0", [opt("0", "opt.no"), opt("1", "opt.yes")]),
          select("smooth_spectator", "row.smooth_spectator", "cl_obs_interp_enable", "1", [opt("0", "opt.no"), opt("1", "opt.yes")]),
          slider("smooth_spectator_speed", "row.smooth_spectator_speed", "cl_obs_interp_pos_rate", "1.00", 0.1, 2, 0.01)
        ])
      ]),
      section("item", [
        group("group.game.item", [
          select("silencer_detach", "row.silencer_detach", "cl_silencer_mode", "0", [opt("0", "opt.disabled"), opt("1", "opt.enabled")]),
          select("viewmodel_position", "row.viewmodel_position", "viewmodel_presetpos", "1", [
            opt("1", "opt.desktop"), opt("2", "opt.couch"), opt("3", "opt.classic")
          ]),
          select("preferred_hand", "row.preferred_hand", "cl_prefer_lefthanded", "0", [opt("0", "opt.right"), opt("1", "opt.left")]),
          select("first_person_tracers", "row.first_person_tracers", "r_drawtracers_firstperson", "1", [opt("0", "opt.disabled"), opt("1", "opt.enabled")]),
          select("show_loadout", "row.show_loadout", "cl_showloadout", "1", [opt("0", "opt.off"), opt("1", "opt.on")]),
          select("buy_menu_use", "row.buy_menu_use", "cl_use_opens_buy_menu", "1", [opt("0", "opt.off"), opt("1", "opt.on")]),
          select("buy_menu_number_keys", "row.buy_menu_number_keys", "cl_buywheel_nonumberpurchasing", "0", [
            opt("0", "opt.number_keys_buy"), opt("1", "opt.number_keys_select")
          ]),
          select("autowepswitch", "row.autowepswitch", "cl_autowepswitch", "0", [opt("0", "opt.off"), opt("1", "opt.on")])
        ])
      ]),
      section("radar", [
        group("group.game.radar", [
          select("radar_center", "row.radar_center", "cl_radar_always_centered", "1", [opt("0", "opt.off"), opt("1", "opt.on")]),
          select("radar_rotate", "row.radar_rotate", "cl_radar_rotate", "1", [opt("0", "opt.off"), opt("1", "opt.on")]),
          select("radar_map_blend", "row.radar_map_blend", "cl_hud_radar_map_additive", "1", [opt("0", "opt.no"), opt("1", "opt.yes")]),
          slider("radar_background_opacity", "row.radar_background_opacity", "cl_hud_radar_background_alpha", "0.63", 0, 1, 0.01),
          select("radar_square_scoreboard", "row.radar_square_scoreboard", "cl_radar_square_with_scoreboard", "1", [opt("0", "opt.off"), opt("1", "opt.on")]),
          select("radar_force_square", "row.radar_force_square", "cl_radar_square_always", "0", [opt("0", "opt.no"), opt("1", "opt.yes")]),
          select("radar_dynamic_zoom", "row.radar_dynamic_zoom", "cl_radar_scale_dynamic", "0", [opt("0", "opt.no"), opt("1", "opt.yes")]),
          slider("radar_scale", "row.radar_scale", "cl_radar_scale", "0.70", 0.25, 1, 0.01),
          slider("radar_scale_alternate", "row.radar_scale_alternate", "cl_radar_scale_alternate", "1.00", 0.25, 1, 0.01),
          slider("hud_radar_scale", "row.hud_radar_scale", "cl_hud_radar_scale", "1.00", 0.8, 1.3, 0.01),
          slider("radar_icon_scale", "row.radar_icon_scale", "cl_radar_icon_scale_min", "0.60", 0.4, 1, 0.01)
        ])
      ]),
      section("crosshair", [
        group("group.game.crosshair", [
          select("crosshair_style", "row.crosshair_style", "cl_crosshairstyle", "4", [
            opt("2", "opt.default_static"), opt("4", "opt.classic_static"), opt("5", "opt.classic_dynamic")
          ]),
          select("crosshair_friendly_warning", "row.crosshair_friendly_warning", "cl_crosshair_friendly_warning", "1", [
            opt("0", "opt.off"), opt("1", "opt.always")
          ]),
          select("crosshair_recoil", "row.crosshair_recoil", "cl_crosshair_recoil", "0", [opt("0", "opt.off"), opt("1", "opt.on")]),
          select("crosshair_dot", "row.crosshair_dot", "cl_crosshairdot", "0", [opt("0", "opt.off"), opt("1", "opt.on")]),
          select("crosshair_t", "row.crosshair_t", "cl_crosshair_t", "0", [opt("0", "opt.off"), opt("1", "opt.on")]),
          select("crosshair_outline", "row.crosshair_outline", "cl_crosshair_drawoutline", "0", [opt("0", "opt.off"), opt("1", "opt.on")]),
          slider("crosshair_size", "row.crosshair_size", "cl_crosshairsize", "1.50", 0, 10, 0.1),
          slider("crosshair_thickness", "row.crosshair_thickness", "cl_crosshairthickness", "0.50", 0, 3, 0.1),
          slider("crosshair_gap", "row.crosshair_gap", "cl_crosshairgap", "-5.00", -10, 10, 0.1),
          slider("crosshair_outline_thickness", "row.crosshair_outline_thickness", "cl_crosshair_outlinethickness", "0.00", 0, 3, 0.1),
          select("crosshair_color_mode", "row.crosshair_color_mode", "cl_crosshaircolor", "5", [
            opt("0", "opt.red"), opt("1", "opt.green"), opt("2", "opt.yellow"), opt("3", "opt.blue"), opt("4", "opt.aqua"), opt("5", "opt.custom")
          ]),
          slider("crosshair_alpha", "row.crosshair_alpha", "cl_crosshairalpha", "255", 0, 255, 1),
          select("crosshair_use_alpha", "row.crosshair_use_alpha", "cl_crosshairusealpha", "0", [opt("0", "opt.no"), opt("1", "opt.yes")]),
          slider("crosshair_red", "row.crosshair_red", "cl_crosshaircolor_r", "255", 0, 255, 1),
          slider("crosshair_green", "row.crosshair_green", "cl_crosshaircolor_g", "0", 0, 255, 1),
          slider("crosshair_blue", "row.crosshair_blue", "cl_crosshaircolor_b", "0", 0, 255, 1),
          select("crosshair_weapon_gap", "row.crosshair_weapon_gap", "cl_crosshairgap_useweaponvalue", "0", [opt("0", "opt.no"), opt("1", "opt.yes")]),
          select("crosshair_scope_color", "row.crosshair_scope_color", "cl_crosshair_sniper_use_normal_crosshair_color", "0", [opt("0", "opt.no"), opt("1", "opt.yes")]),
          select("show_player_crosshairs", "row.show_player_crosshairs", "cl_show_observer_crosshair", "2", [
            opt("0", "opt.off"), opt("1", "opt.friends"), opt("2", "opt.everyone")
          ]),
          select("bot_crosshair", "row.bot_crosshair", "cl_observed_bot_crosshair", "0", [opt("0", "opt.never"), opt("1", "opt.always")])
        ])
      ]),
      section("sniper", [
        group("group.game.sniper", [
          select("sniper_delay_unscope", "row.sniper_delay_unscope", "cl_sniper_delay_unscope", "0", [opt("0", "opt.no"), opt("1", "opt.yes")]),
          select("sniper_show_inaccuracy", "row.sniper_show_inaccuracy", "cl_crosshair_sniper_show_normal_inaccuracy", "1", [opt("0", "opt.no"), opt("1", "opt.yes")]),
          select("sniper_auto_rezoom", "row.sniper_auto_rezoom", "cl_sniper_auto_rezoom", "1", [opt("0", "opt.no"), opt("1", "opt.yes")]),
          slider("sniper_width", "row.sniper_width", "cl_crosshair_sniper_width", "1", 1, 5, 1),
          slider("scope_dot_scale", "row.scope_dot_scale", "cl_sniper_scope_dot_scale", "1.00", 0.5, 2, 0.01)
        ])
      ]),
      section("grenade", [
        group("group.game.grenade", [
          select("grenade_crosshair_keep", "row.grenade_crosshair_keep", "cl_grenadecrosshair_keepusercrosshair", "1", [opt("0", "opt.off"), opt("1", "opt.on")]),
          select("grenade_flash_enabled", "row.grenade_flash_enabled", "cl_grenadecrosshair_flash", "1", [opt("0", "opt.off"), opt("1", "opt.on")]),
          slider("grenade_flash_delay", "row.grenade_flash_delay", "cl_grenadecrosshairdelay_flash", "2.00", 0, 5, 0.1),
          select("grenade_explosive_enabled", "row.grenade_explosive_enabled", "cl_grenadecrosshair_explosive", "1", [opt("0", "opt.off"), opt("1", "opt.on")]),
          slider("grenade_explosive_delay", "row.grenade_explosive_delay", "cl_grenadecrosshairdelay_explosive", "2.00", 0, 5, 0.1),
          select("grenade_fire_enabled", "row.grenade_fire_enabled", "cl_grenadecrosshair_fire", "1", [opt("0", "opt.off"), opt("1", "opt.on")]),
          slider("grenade_fire_delay", "row.grenade_fire_delay", "cl_grenadecrosshairdelay_fire", "2.00", 0, 5, 0.1),
          select("grenade_smoke_enabled", "row.grenade_smoke_enabled", "cl_grenadecrosshair_smoke", "1", [opt("0", "opt.off"), opt("1", "opt.on")]),
          slider("grenade_smoke_delay", "row.grenade_smoke_delay", "cl_grenadecrosshairdelay_smoke", "2.00", 0, 5, 0.1),
          select("grenade_decoy_enabled", "row.grenade_decoy_enabled", "cl_grenadecrosshair_decoy", "1", [opt("0", "opt.off"), opt("1", "opt.on")]),
          slider("grenade_decoy_delay", "row.grenade_decoy_delay", "cl_grenadecrosshairdelay_decoy", "2.00", 0, 5, 0.1)
        ])
      ]),
      section("damage", [
        group("group.game.damage", [
          select("predict_body", "row.predict_body", "cl_predict_body_shot_fx", "0", [opt("0", "opt.off"), opt("1", "opt.on")]),
          select("predict_head", "row.predict_head", "cl_predict_head_shot_fx", "0", [opt("0", "opt.off"), opt("1", "opt.on")]),
          select("predict_kill", "row.predict_kill", "cl_predict_kill_ragdolls", "1", [opt("0", "opt.off"), opt("1", "opt.on")])
        ])
      ]),
      section("telemetry", [
        group("group.game.telemetry", [
          select("frame_telemetry", "row.frame_telemetry", "cl_hud_telemetry_frametime_show", "1", [
            opt("0", "opt.never"), opt("1", "opt.if_poor"), opt("2", "opt.always")
          ]),
          select("ping_telemetry", "row.ping_telemetry", "cl_hud_telemetry_ping_show", "1", [
            opt("0", "opt.never"), opt("1", "opt.if_poor"), opt("2", "opt.always")
          ]),
          select("packet_telemetry", "row.packet_telemetry", "cl_hud_telemetry_net_misdelivery_show", "1", [
            opt("0", "opt.never"), opt("1", "opt.if_poor"), opt("2", "opt.always")
          ]),
          slider("frame_telemetry_threshold", "row.frame_telemetry_threshold", "cl_hud_telemetry_frametime_poor", "100.00", 1, 500, 1),
          slider("ping_telemetry_threshold", "row.ping_telemetry_threshold", "cl_hud_telemetry_ping_poor", "100", 1, 300, 1),
          slider("packet_telemetry_threshold", "row.packet_telemetry_threshold", "cl_hud_telemetry_net_misdelivery_poor", "2", 1, 100, 1),
          select("network_graph", "row.network_graph", "cl_hud_telemetry_net_misdelivery_graph_show", "0", [
            opt("0", "opt.never"), opt("1", "opt.if_poor"), opt("2", "opt.always")
          ]),
          select("network_quality", "row.network_quality", "cl_hud_telemetry_net_quality_graph_show", "0", [
            opt("0", "opt.never"), opt("1", "opt.if_poor"), opt("2", "opt.always")
          ])
        ])
      ])
    ]
  },
  viewmodel: {
    tabs: [
      { id: "main", labelKey: "tab.viewmodel.main" }
    ],
    sections: [
      section("main", [
        group("group.viewmodel.weapon", [
          select("viewmodel_weapon", "row.viewmodel_weapon", "__viewmodel_weapon", "m4a1s", [
            opt("m4a1s", "opt.m4a1s"), opt("awp", "opt.awp")
          ], false)
        ]),
        group("group.viewmodel.main", [
          select("viewmodel_presetpos_main", "row.viewmodel_position", "viewmodel_presetpos", "1", [
            opt("1", "opt.desktop"), opt("2", "opt.couch"), opt("3", "opt.classic")
          ]),
          slider("viewmodel_fov", "row.viewmodel_fov", "viewmodel_fov", "68", 54, 68, 1),
          slider("viewmodel_offset_x", "row.viewmodel_offset_x", "viewmodel_offset_x", "2.50", -2.5, 2.5, 0.1),
          slider("viewmodel_offset_y", "row.viewmodel_offset_y", "viewmodel_offset_y", "1.00", -2, 2, 0.1),
          slider("viewmodel_offset_z", "row.viewmodel_offset_z", "viewmodel_offset_z", "-1.50", -2, 2, 0.1),
          select("viewmodel_handedness", "row.viewmodel_handedness", "cl_righthand", "1", [
            opt("1", "opt.right"), opt("0", "opt.left")
          ])
        ])
      ])
    ]
  },
  keyboard: {
    tabs: [
      { id: "settings", labelKey: "tab.kbm.settings" },
      { id: "movement", labelKey: "tab.kbm.movement" },
      { id: "weapon", labelKey: "tab.kbm.weapon" },
      { id: "ui", labelKey: "tab.kbm.ui" },
      { id: "communication", labelKey: "tab.kbm.communication" },
      { id: "chatwheel", labelKey: "tab.kbm.chatwheel" }
    ],
    sections: [
      section("settings", [
        group("group.kbm.settings", [
          select("mouse_inverty", "row.mouse_inverty", "mouse_inverty", "false", [opt("false", "opt.off"), opt("true", "opt.on")]),
          select("option_duck_method", "row.option_duck_method", "option_duck_method", "false", [opt("false", "opt.hold"), opt("true", "opt.toggle")]),
          select("option_speed_method", "row.option_speed_method", "option_speed_method", "false", [opt("false", "opt.hold"), opt("true", "opt.toggle")]),
          select("cl_debounce_zoom", "row.cl_debounce_zoom", "cl_debounce_zoom", "true", [opt("true", "opt.repeat_disabled"), opt("false", "opt.repeat_enabled")]),
          slider("sensitivity", "row.sensitivity", "sensitivity", "1.25", 0.1, 8, 0.01),
          slider("zoom_sensitivity_ratio", "row.zoom_sensitivity_ratio", "zoom_sensitivity_ratio", "1.00", 0.1, 3, 0.01)
        ])
      ]),
      section("movement", [
        group("group.kbm.movement", [
          bind("show_loadout_toggle", "row.show_loadout_toggle", "show_loadout_toggle", "scancode12", "I"),
          bind("move_forward", "row.move_forward", "+forward", "scancode26", "W"),
          bind("move_backward", "row.move_backward", "+back", "scancode22", "S"),
          bind("move_left", "row.move_left", "+left", "scancode4", "A"),
          bind("move_right", "row.move_right", "+right", "scancode7", "D"),
          bind("walk", "row.walk", "+sprint", "scancode225", "Left Shift"),
          bind("duck", "row.duck", "+duck", "scancode224", "Left Ctrl"),
          bind("jump", "row.jump", "+jump", "scancode44", "Space")
        ])
      ]),
      section("weapon", [
        group("group.kbm.weapon", [
          bind("use", "row.use", "+use", "scancode8", "E"),
          bind("fire", "row.fire", "+attack", "mouse1", "MOUSE1"),
          bind("secondary_fire", "row.secondary_fire", "+attack2", "mouse2", "MOUSE2"),
          bind("reload", "row.reload", "+reload", "scancode21", "R"),
          bind("radial_weapon", "row.radial_weapon", "+quickinv", "", ""),
          bind("invprev", "row.invprev", "invprev", "mwheelup", "MWHEELUP"),
          bind("invnext", "row.invnext", "invnext", "mwheeldown", "MWHEELDOWN"),
          bind("lastinv", "row.lastinv", "lastinv", "scancode20", "Q"),
          bind("drop", "row.drop", "drop", "scancode10", "G"),
          bind("inspect", "row.inspect", "+lookatweapon", "scancode9", "F"),
          bind("switchhands", "row.switchhands", "switchhands", "scancode11", "H"),
          bind("buymenu", "row.buymenu", "buymenu", "scancode5", "B"),
          bind("autobuy", "row.autobuy", "autobuy", "scancode60", "F3"),
          bind("rebuy", "row.rebuy", "rebuy", "scancode61", "F4"),
          bind("slot1", "row.slot1", "slot1", "scancode30", "1"),
          bind("slot2", "row.slot2", "slot2", "scancode31", "2"),
          bind("slot3", "row.slot3", "slot3", "scancode32", "3"),
          bind("slot4", "row.slot4", "slot4", "scancode33", "4"),
          bind("slot5", "row.slot5", "slot5", "scancode34", "5"),
          bind("slot6", "row.slot6", "slot6", "scancode35", "6"),
          bind("slot7", "row.slot7", "slot7", "scancode36", "7"),
          bind("slot8", "row.slot8", "slot8", "scancode37", "8"),
          bind("slot9", "row.slot9", "slot9", "scancode38", "9"),
          bind("slot10", "row.slot10", "slot10", "scancode39", "0"),
          bind("zeus", "row.zeus", "slot11", "", ""),
          bind("healthshot", "row.healthshot", "slot12", "scancode27", "X"),
          bind("utility_items", "row.utility_items", "slot13", "", ""),
          bind("spray_weapon", "row.spray", "+spray_menu", "scancode23", "T")
        ])
      ]),
      section("ui", [
        group("group.kbm.ui", [
          bind("scoreboard", "row.scoreboard", "+showscores", "scancode43", "Tab"),
          bind("show_team_equipment", "row.show_team_equipment", "+cl_show_team_equipment", "", ""),
          bind("toggle_radar_zoom", "row.toggle_radar_zoom", "incrementvar cl_radar_scale 0.25 1.0 0.25", "", ""),
          bind("call_vote", "row.call_vote", "callvote", "", ""),
          bind("team_menu", "row.team_menu", "teammenu", "scancode16", "M"),
          bind("console", "row.console", "toggleconsole", "scancode53", "`")
        ])
      ]),
      section("communication", [
        group("group.kbm.communication", [
          bind("player_ping", "row.player_ping", "player_ping", "mouse3", "MOUSE3"),
          bind("radio1", "row.radio1", "radio", "scancode29", "Z"),
          bind("radio2", "row.radio2", "radio2", "", ""),
          bind("radio3", "row.radio3", "radio3", "", ""),
          bind("radio_report", "row.radio_report", "radio_report", "", ""),
          bind("chat_team", "row.chat_team", "messagemode2", "scancode24", "U"),
          bind("chat_all", "row.chat_all", "messagemode", "scancode28", "Y"),
          bind("voice", "row.voice", "+voicerecord", "mouse4", "MOUSE4"),
          bind("voice_mode_toggle", "row.voice_mode_toggle", "voice_vox_toggle", "", ""),
          bind("disable_chat", "row.disable_chat", "clutch_mode_toggle", "", "")
        ])
      ]),
      section("chatwheel", [
        group("group.kbm.chatwheel", [
          bind("chatwheel1", "row.chatwheel1", "+radialradio", "scancode6", "C"),
          bind("chatwheel2", "row.chatwheel2", "+radialradio2", "scancode25", "V"),
          bind("chatwheel3", "row.chatwheel3", "+radialradio3", "", "")
        ])
      ])
    ]
  }
};

function section(id, groups) {
  return { id, groups };
}

function group(titleKey, rows) {
  return { titleKey, rows };
}

function opt(value, labelKey) {
  return { value, labelKey };
}

function select(id, labelKey, command, defaultValue, options, shouldExport = true) {
  return { id, labelKey, type: "select", command, defaultValue, value: defaultValue, options, export: shouldExport };
}

function slider(id, labelKey, command, defaultValue, min, max, step, format = "number", shouldExport = true) {
  return { id, labelKey, type: "slider", command, defaultValue, value: defaultValue, min, max, step, format, export: shouldExport };
}

function bind(id, labelKey, command, key, display) {
  return { id, labelKey, type: "bind", command, key, defaultKey: key, display, defaultDisplay: display };
}

const state = JSON.parse(JSON.stringify(defaults));
let currentLang = "en";
let currentCategory = "keyboard";
let currentSectionByCategory = Object.fromEntries(categoryOrder.map(id => [id, state[id].tabs[0].id]));
let captureTarget = null;
let audioCtx = null;
let lastHoverTarget = null;
let sectionWheelLocked = false;
let sceneryMenuMode = "root";
let currentScenery = localStorage.getItem("cs2SceneryMap") || "dust";
const storedSoundtrackVolume = localStorage.getItem("cs2SoundtrackVolume");
let soundtrackVolume = Number(storedSoundtrackVolume && storedSoundtrackVolume !== "30" ? storedSoundtrackVolume : DEFAULT_SOUNDTRACK_VOLUME);
const soundtrackPlayer = new Audio();
soundtrackPlayer.loop = true;
soundtrackPlayer.preload = "auto";
const VIEWMODEL_THREE_URL = "https://esm.sh/three@0.160.0";
const VIEWMODEL_GLTF_LOADER_URL = "https://esm.sh/three@0.160.0/examples/jsm/loaders/GLTFLoader.js?deps=three@0.160.0";
const VIEWMODEL_ASSETS = {
  m4a1s: "assets/m4a1s_counter_strike_2.glb",
  awp: "assets/awp_counter_strike_2.glb",
  agent: "assets/sas__cs2_agent_model_blue.glb"
};
let viewmodelThree = null;

const mainTabs = document.querySelector("#mainTabs");
const subTabs = document.querySelector("#subTabs");
const pane = document.querySelector("#settingsPane");
const output = document.querySelector("#commandOutput");
const toast = document.querySelector("#captureToast");
const resetFirst = document.querySelector("#resetFirst");
const languageSwitcher = document.querySelector("#languageSwitcher");
const sceneryMenu = document.querySelector("#sceneryMenu");
const sceneryPanel = document.querySelector("#sceneryPanel");
const sceneryToggle = document.querySelector("#sceneryToggle");
const volumePanel = document.querySelector("#volumePanel");
const volumeToggle = document.querySelector("#volumeToggle");
const volumeInput = document.querySelector("#soundtrackVolume");
const volumeValue = document.querySelector("#soundtrackVolumeValue");
const pageReset = document.querySelector("#pageReset");
const configAlias = document.querySelector("#configAlias");
const saveConfig = document.querySelector("#saveConfig");
const recentConfigs = document.querySelector("#recentConfigs");

function init() {
  if (currentScenery) {
    soundtrackPlayer.src = `assets/soundtrack_${currentScenery}.mp3`;
  }
  applySoundtrackVolume(soundtrackVolume);
  applySceneryTheme(currentScenery);
  renderAll();
  window.addEventListener("keydown", onKeyDown, true);
  window.addEventListener("mousedown", onMouseDown, true);
  window.addEventListener("scroll", updateActiveSectionFromScroll, { passive: true });
  subTabs.addEventListener("wheel", onSubTabsWheel, { passive: false });
  window.addEventListener("contextmenu", (e) => captureTarget && e.preventDefault());
  document.addEventListener("pointerover", onInteractiveHover);
  document.addEventListener("pointerdown", onInteractivePress);
  document.addEventListener("click", onDocumentClick);
  resetFirst.addEventListener("change", updateCommand);
  document.querySelector("#copyCommand").addEventListener("click", copyCommand);
  document.querySelector("#resetApp").addEventListener("click", resetUi);
  document.querySelector("#presetTest").addEventListener("click", loadTestPreset);
  document.querySelector("#downloadCfg").addEventListener("click", downloadCfg);
  saveConfig.addEventListener("click", saveCurrentConfig);
  configAlias.addEventListener("keydown", onAliasKeyDown);
  pageReset.addEventListener("click", resetUi);
  sceneryToggle.addEventListener("click", toggleSceneryMenu);
  volumeToggle.addEventListener("click", toggleVolumePanel);
  volumeInput.addEventListener("input", onVolumeInput);
  soundtrackPlayer.addEventListener("error", onSoundtrackError);
}

function t(key) {
  return i18n[currentLang][key] || i18n.en[key] || key;
}

function currentSectionId() {
  return currentSectionByCategory[currentCategory];
}

function renderAll() {
  document.documentElement.lang = currentLang;
  document.title = t("app.title");
  renderStaticText();
  renderLanguageSwitcher();
  renderMainTabs();
  renderSubTabs();
  renderSceneryMenu();
  renderPane();
  renderSavedConfigs();
  updateCommand();
}

function renderStaticText() {
  document.querySelector(".settings-card").setAttribute("aria-label", t("app.title"));
  document.querySelector(".icon-search").setAttribute("aria-label", t("aria.search"));
  mainTabs.setAttribute("aria-label", t("aria.categories"));
  subTabs.setAttribute("aria-label", t("aria.sections"));
  languageSwitcher.setAttribute("aria-label", t("aria.language"));
  sceneryToggle.setAttribute("aria-label", t("scenery.toggle"));
  volumeToggle.setAttribute("aria-label", t("volume.toggle"));
  pageReset.setAttribute("aria-label", t("reset.page"));
  pageReset.lastChild.textContent = ` ${t("reset.page")}`;
  document.querySelector("[data-i18n='panel.title']").textContent = t("panel.title");
  document.querySelector("[data-i18n='panel.help']").textContent = t("panel.help");
  document.querySelector("#copyCommand").textContent = t("panel.copy");
  document.querySelector("[data-i18n='panel.resetFirst']").lastChild.textContent = ` ${t("panel.resetFirst")}`;
  document.querySelector("#resetApp").textContent = t("panel.resetUi");
  document.querySelector("#presetTest").textContent = t("panel.preset");
  document.querySelector("#downloadCfg").textContent = t("panel.download");
  configAlias.setAttribute("placeholder", t("panel.aliasPlaceholder"));
  saveConfig.textContent = t("panel.saveConfig");
  document.querySelector("[data-i18n='panel.recentConfigs']").textContent = t("panel.recentConfigs");
  document.querySelector("[data-i18n='hint.accuracy']").innerHTML = `<strong>${t("hint.accuracy").split(":")[0]}:</strong>${t("hint.accuracy").includes(":") ? t("hint.accuracy").slice(t("hint.accuracy").indexOf(":") + 1) : ""}`;
  document.querySelector("[data-i18n='hint.capture']").innerHTML = `<strong>${t("hint.capture").split(":")[0]}:</strong>${t("hint.capture").includes(":") ? t("hint.capture").slice(t("hint.capture").indexOf(":") + 1) : ""}`;
  document.querySelector("[data-i18n='hint.refresh']").innerHTML = `<strong>${t("hint.refresh").split(":")[0]}:</strong>${t("hint.refresh").includes(":") ? t("hint.refresh").slice(t("hint.refresh").indexOf(":") + 1) : ""}`;
  toast.innerHTML = `${t("toast.capture")}<span>${t("toast.cancel")}</span>`;
}

function renderLanguageSwitcher() {
  languageSwitcher.innerHTML = languages.map(lang => `
    <button class="${lang.id === currentLang ? "active" : ""}" data-lang="${lang.id}" aria-pressed="${lang.id === currentLang}">${lang.label}</button>
  `).join("");
  languageSwitcher.querySelectorAll("button").forEach(btn => btn.addEventListener("click", () => {
    currentLang = btn.dataset.lang;
    renderAll();
  }));
}

function renderSceneryMenu() {
  sceneryMenu.setAttribute("aria-hidden", sceneryMenu.classList.contains("open") ? "false" : "true");
  sceneryToggle.setAttribute("aria-expanded", sceneryMenu.classList.contains("open") ? "true" : "false");

  if (sceneryMenuMode === "maps") {
    sceneryPanel.innerHTML = `
      <button class="menu-back" type="button" data-menu-action="back" role="menuitem">${t("scenery.back")}</button>
      <div class="menu-separator"></div>
      ${sceneryMaps.map(map => `
        <button class="${map.id === currentScenery ? "active" : ""}" type="button" data-scenery-map="${map.id}" role="menuitem">${map.label}</button>
      `).join("")}
    `;
  } else {
    sceneryPanel.innerHTML = `
      <button type="button" data-menu-action="maps" role="menuitem">${t("scenery.change")}</button>
      <button type="button" data-menu-action="weapon" role="menuitem">${t("scenery.weapon")}</button>
      <button type="button" data-menu-action="agent" role="menuitem">${t("scenery.agent")}</button>
      <div class="menu-separator"></div>
      <button type="button" data-menu-action="loadout" role="menuitem">${t("scenery.loadout")}</button>
    `;
  }

  sceneryPanel.querySelectorAll("button").forEach(btn => btn.addEventListener("click", onSceneryMenuClick));
}

function toggleSceneryMenu(e) {
  e.stopPropagation();
  closeVolumePanel();
  sceneryMenu.classList.toggle("open");
  renderSceneryMenu();
}

function closeSceneryMenu() {
  sceneryMenu.classList.remove("open");
  sceneryMenuMode = "root";
  renderSceneryMenu();
}

function onDocumentClick(e) {
  if (!e.target.closest(".select-wrap")) closeCustomSelects();
  if (volumePanel.classList.contains("open") && !sceneryMenu.contains(e.target)) closeVolumePanel();
  if (!sceneryMenu.classList.contains("open")) return;
  if (!sceneryMenu.contains(e.target)) closeSceneryMenu();
}

function closeCustomSelects(exceptId = "") {
  pane.querySelectorAll(".select-wrap.open").forEach(select => {
    if (select.dataset.settingId !== exceptId) {
      select.classList.remove("open");
      select.querySelector("[data-select-toggle]")?.setAttribute("aria-expanded", "false");
    }
  });
}

function onCustomSelectToggle(e) {
  e.stopPropagation();
  const wrap = e.currentTarget.closest(".select-wrap");
  const isOpen = wrap.classList.contains("open");
  closeCustomSelects(wrap.dataset.settingId);
  wrap.classList.toggle("open", !isOpen);
  e.currentTarget.setAttribute("aria-expanded", !isOpen ? "true" : "false");
}

function onCustomSelectOption(e) {
  e.stopPropagation();
  const row = findRow(e.currentTarget.dataset.settingId);
  setSettingValue(row, e.currentTarget.dataset.selectOption);
  closeCustomSelects();
  renderPane();
  updateCommand();
  updateViewmodelPreview();
  flashChangedRows(row);
}

function toggleVolumePanel(e) {
  e.stopPropagation();
  closeSceneryMenu();
  volumePanel.classList.toggle("open");
  const isOpen = volumePanel.classList.contains("open");
  volumePanel.setAttribute("aria-hidden", isOpen ? "false" : "true");
  volumeToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
}

function closeVolumePanel() {
  volumePanel.classList.remove("open");
  volumePanel.setAttribute("aria-hidden", "true");
  volumeToggle.setAttribute("aria-expanded", "false");
}

function onVolumeInput(e) {
  applySoundtrackVolume(Number(e.target.value));
}

function applySoundtrackVolume(value) {
  const clamped = Math.min(100, Math.max(0, Number.isFinite(value) ? value : DEFAULT_SOUNDTRACK_VOLUME));
  soundtrackVolume = clamped;
  soundtrackPlayer.volume = clamped / 100;
  volumeInput.value = String(clamped);
  volumeValue.textContent = String(Math.round(clamped));
  localStorage.setItem("cs2SoundtrackVolume", String(clamped));
}

function onSceneryMenuClick(e) {
  e.stopPropagation();
  const action = e.currentTarget.dataset.menuAction;
  const map = e.currentTarget.dataset.sceneryMap;

  if (action === "maps") {
    sceneryMenuMode = "maps";
    renderSceneryMenu();
    return;
  }

  if (action === "back") {
    sceneryMenuMode = "root";
    renderSceneryMenu();
    return;
  }

  if (map) {
    changeScenery(map);
    closeSceneryMenu();
  }
}

async function changeScenery(mapId) {
  currentScenery = mapId;
  localStorage.setItem("cs2SceneryMap", mapId);
  applySceneryTheme(mapId);
  updatePreviewSceneMap(mapId);
  renderSceneryMenu();
  soundtrackPlayer.src = `assets/soundtrack_${mapId}.mp3`;
  soundtrackPlayer.currentTime = 0;

  try {
    await soundtrackPlayer.play();
  } catch {
    // Browsers can still block playback in edge cases; the next direct menu click will retry.
  }
}

function onSoundtrackError() {
  if (!currentScenery) return;
  console.warn(`Missing soundtrack: assets/soundtrack_${currentScenery}.mp3`);
}

function applySceneryTheme(mapId) {
  const theme = sceneryThemes[mapId] || sceneryThemes.dust;
  document.body.dataset.scenery = mapId || "dust";
  for (const [property, value] of Object.entries(theme)) {
    document.documentElement.style.setProperty(property, value);
  }
}

async function resumeSoundtrack() {
  if (!currentScenery || !soundtrackPlayer.src || !soundtrackPlayer.paused) return;
  try {
    await soundtrackPlayer.play();
  } catch {
    // Autoplay remains quiet until the browser accepts a direct user gesture.
  }
}

function renderMainTabs() {
  mainTabs.innerHTML = categoryOrder.map(id => `
    <button class="${tabClass(id === currentCategory, categoryHasChanges(id))}" data-category="${id}">${t(`category.${id}`)}</button>
  `).join("");
  mainTabs.querySelectorAll("button").forEach(btn => btn.addEventListener("click", () => {
    currentCategory = btn.dataset.category;
    stopCapture();
    renderAll();
    requestAnimationFrame(() => scrollToSection(currentSectionId()));
  }));
}

function renderSubTabs() {
  subTabs.innerHTML = state[currentCategory].tabs.map(tab => `
    <button class="${tabClass(tab.id === currentSectionId(), sectionHasChanges(currentCategory, tab.id))}" data-section="${tab.id}">${t(tab.labelKey)}</button>
  `).join("");
  subTabs.querySelectorAll("button").forEach(btn => btn.addEventListener("click", () => {
    currentSectionByCategory[currentCategory] = btn.dataset.section;
    stopCapture();
    renderSubTabs();
    scrollToSection(btn.dataset.section);
  }));
}

function onSubTabsWheel(e) {
  const delta = Math.abs(e.deltaY) >= Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
  if (Math.abs(delta) < 8) return;
  e.preventDefault();
  if (sectionWheelLocked) return;
  sectionWheelLocked = true;
  setTimeout(() => { sectionWheelLocked = false; }, 320);
  jumpToSiblingSection(delta > 0 ? 1 : -1);
}

function jumpToSiblingSection(direction) {
  const tabs = state[currentCategory].tabs;
  const currentIndex = Math.max(0, tabs.findIndex(tab => tab.id === currentSectionId()));
  const nextIndex = Math.max(0, Math.min(tabs.length - 1, currentIndex + direction));
  if (nextIndex === currentIndex) return;
  const nextSection = tabs[nextIndex].id;
  currentSectionByCategory[currentCategory] = nextSection;
  stopCapture();
  renderSubTabs();
  scrollToSection(nextSection);
  playUiSound("select");
}

function tabClass(isActive, isChanged) {
  return [isActive ? "active" : "", isChanged ? "changed" : ""].filter(Boolean).join(" ");
}

function renderPane() {
  pane.innerHTML = state[currentCategory].sections.map(sectionData => `
    <section class="settings-section" data-section-panel="${sectionData.id}">
      ${currentCategory === "video" && sectionData.id === "advanced" ? videoPreviewTemplate() : ""}
      ${currentCategory === "viewmodel" && sectionData.id === "main" ? viewmodelPreviewTemplate() : ""}
      ${sectionData.id === "crosshair" ? crosshairPreviewTemplate() : ""}
      ${sectionData.groups.map(group => `
        <h2 class="group-title">${t(group.titleKey)}</h2>
        ${group.rows.map(rowTemplate).join("")}
      `).join("")}
    </section>
  `).join("");

  pane.querySelectorAll("[data-bind-id]").forEach(cell => cell.addEventListener("click", () => startCapture(cell.dataset.bindId, cell)));
  pane.querySelectorAll("[data-select-toggle]").forEach(btn => btn.addEventListener("click", onCustomSelectToggle));
  pane.querySelectorAll("[data-select-option]").forEach(btn => btn.addEventListener("click", onCustomSelectOption));
  pane.querySelectorAll("[data-crosshair-action]").forEach(btn => btn.addEventListener("click", onCrosshairPreviewAction));
  pane.querySelectorAll("[data-crosshair-color]").forEach(btn => btn.addEventListener("click", onCrosshairColorClick));
  pane.querySelectorAll("[data-crosshair-preset]").forEach(btn => btn.addEventListener("click", onCrosshairPresetClick));
  pane.querySelector("#crosshairColorPicker")?.addEventListener("input", onCrosshairColorPicker);
  pane.querySelectorAll("input[type=range][data-setting-id]").forEach(range => range.addEventListener("input", e => {
    const row = findRow(e.target.dataset.settingId);
    const value = formatByStep(e.target.value, row.step);
    setSettingValue(row, value);
    const number = pane.querySelector(`input[type=number][data-setting-id="${row.id}"]`);
    const textNumber = pane.querySelector(`input[type=text][data-setting-id="${row.id}"]`);
    if (number) number.value = value;
    if (textNumber) textNumber.value = sliderDisplayValue(row);
    updateCommand();
    updateCrosshairPreview();
    updateVideoPreview();
    updateViewmodelPreview();
    flashChangedRows(row);
  }));
  pane.querySelectorAll(".num-box[data-setting-id]").forEach(number => number.addEventListener("change", e => {
    const row = findRow(e.target.dataset.settingId);
    const min = Number(row.min), max = Number(row.max);
    let val = sliderValueFromDisplay(row, e.target.value);
    val = Math.min(max, Math.max(min, val));
    const value = formatByStep(val, row.step);
    setSettingValue(row, value);
    e.target.value = sliderDisplayValue(row);
    const range = pane.querySelector(`input[type=range][data-setting-id="${row.id}"]`);
    if (range) range.value = value;
    updateCommand();
    updateCrosshairPreview();
    updateVideoPreview();
    updateViewmodelPreview();
    flashChangedRows(row);
  }));
  updateCrosshairPreview();
  updateVideoPreview();
  updateViewmodelPreview();
}

function scrollToSection(sectionId) {
  const target = pane.querySelector(`[data-section-panel="${sectionId}"]`);
  if (!target) return;
  const top = window.scrollY + target.getBoundingClientRect().top - stickyOffset();
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
}

function updateActiveSectionFromScroll() {
  const sections = [...pane.querySelectorAll(".settings-section")];
  if (!sections.length) return;

  let activeSection = sections[0].dataset.sectionPanel;
  const threshold = stickyOffset() + 12;
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= threshold) {
      activeSection = section.dataset.sectionPanel;
    }
  }

  if (currentSectionByCategory[currentCategory] !== activeSection) {
    currentSectionByCategory[currentCategory] = activeSection;
    renderSubTabs();
  }
}

function stickyOffset() {
  const topbarHeight = document.querySelector(".topbar")?.offsetHeight || 54;
  const subTabsHeight = subTabs?.offsetHeight || 50;
  return topbarHeight + subTabsHeight + 14;
}

function interactiveTarget(target) {
  return target.closest("button, .setting-row, .value-cell, .select-wrap, .checkbox-wrap, input[type='range'], input[type='number'], input[type='color']");
}

function onInteractiveHover(e) {
  const target = interactiveTarget(e.target);
  if (!target || target === lastHoverTarget) return;
  lastHoverTarget = target;
  playUiSound("hover");
}

function onInteractivePress(e) {
  const target = interactiveTarget(e.target);
  if (!target) return;
  unlockAudio();
  playUiSound("select");
  resumeSoundtrack();
}

function unlockAudio() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
}

function playUiSound(type) {
  if (!audioCtx || audioCtx.state !== "running") return;

  const now = audioCtx.currentTime;
  const isHover = type === "hover";
  const duration = isHover ? 0.038 : 0.085;
  const master = audioCtx.createGain();
  const noise = audioCtx.createBufferSource();
  const noiseFilter = audioCtx.createBiquadFilter();
  const noiseGain = audioCtx.createGain();
  const tone = audioCtx.createOscillator();
  const toneGain = audioCtx.createGain();

  noise.buffer = makeNoiseBuffer(duration);
  noiseFilter.type = "bandpass";
  noiseFilter.frequency.setValueAtTime(isHover ? 2600 : 1550, now);
  noiseFilter.Q.setValueAtTime(isHover ? 7 : 4.5, now);
  noiseGain.gain.setValueAtTime(0.0001, now);
  noiseGain.gain.exponentialRampToValueAtTime(isHover ? 0.012 : 0.026, now + 0.004);
  noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  tone.type = isHover ? "sine" : "triangle";
  tone.frequency.setValueAtTime(isHover ? 1040 : 430, now);
  tone.frequency.exponentialRampToValueAtTime(isHover ? 820 : 250, now + duration);
  toneGain.gain.setValueAtTime(0.0001, now);
  toneGain.gain.exponentialRampToValueAtTime(isHover ? 0.004 : 0.013, now + 0.006);
  toneGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

  master.gain.setValueAtTime(0.55, now);
  noise.connect(noiseFilter);
  noiseFilter.connect(noiseGain);
  noiseGain.connect(master);
  tone.connect(toneGain);
  toneGain.connect(master);
  master.connect(audioCtx.destination);
  noise.start(now);
  tone.start(now);
  noise.stop(now + duration);
  tone.stop(now + duration);
}

function makeNoiseBuffer(duration) {
  const length = Math.max(1, Math.floor(audioCtx.sampleRate * duration));
  const buffer = audioCtx.createBuffer(1, length, audioCtx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < length; i++) {
    const envelope = 1 - (i / length);
    data[i] = (Math.random() * 2 - 1) * envelope;
  }
  return buffer;
}

function viewmodelPreviewTemplate() {
  return `
    <div class="viewmodel-preview" aria-label="${t("tab.viewmodel.main")} preview">
      <div class="viewmodel-stage" id="viewmodelPreviewStage">
        <canvas class="viewmodel-canvas" id="viewmodelCanvas" aria-hidden="true"></canvas>
        <div class="vm-map">
          <div class="vm-corridor"></div>
          <div class="vm-target"></div>
        </div>
        <div class="vm-crosshair"></div>
        <div class="vm-rig">
          <div class="vm-arm vm-arm-left"><span></span></div>
          <div class="vm-arm vm-arm-right"><span></span></div>
          <div class="vm-weapon vm-ak">
            <i class="vm-stock"></i><i class="vm-body"></i><i class="vm-mag"></i><i class="vm-barrel"></i><i class="vm-sight"></i>
          </div>
          <div class="vm-weapon vm-awp">
            <i class="vm-stock"></i><i class="vm-body"></i><i class="vm-scope"></i><i class="vm-barrel"></i><i class="vm-bipod"></i>
          </div>
        </div>
      </div>
    </div>
  `;
}

function updateViewmodelPreview() {
  const stage = pane.querySelector("#viewmodelPreviewStage");
  if (!stage) return;

  const weapon = findRow("viewmodel_weapon")?.value || "m4a1s";
  const fov = Number(findRow("viewmodel_fov")?.value || 68);
  const offsetX = Number(findRow("viewmodel_offset_x")?.value || 2.5);
  const offsetY = Number(findRow("viewmodel_offset_y")?.value || 1);
  const offsetZ = Number(findRow("viewmodel_offset_z")?.value || -1.5);
  const preset = findRow("viewmodel_presetpos_main")?.value || "1";
  const rightHand = (findRow("viewmodel_handedness")?.value || "1") === "1";
  const presetOffsets = {
    "1": { x: 0, y: 0, z: 0 },
    "2": { x: -18, y: 10, z: 12 },
    "3": { x: -34, y: -4, z: -8 }
  }[preset] || { x: 0, y: 0, z: 0 };

  const fovScale = 1.18 - ((fov - 54) / 14) * 0.28;
  const x = offsetX * 42 + presetOffsets.x;
  const y = offsetY * -28 + presetOffsets.y;
  const z = offsetZ * -34 + presetOffsets.z;

  stage.dataset.weapon = weapon;
  stage.dataset.hand = rightHand ? "right" : "left";
  stage.style.setProperty("--vm-x", `${rightHand ? x : -x}px`);
  stage.style.setProperty("--vm-y", `${y}px`);
  stage.style.setProperty("--vm-z", `${z}px`);
  stage.style.setProperty("--vm-scale", fovScale.toFixed(3));
  stage.style.setProperty("--vm-depth", `${560 + offsetY * 70}px`);
  ensureViewmodelThree(stage);
  syncViewmodelThree();
}

async function ensureViewmodelThree(stage) {
  if (viewmodelThree?.stage === stage || stage.dataset.threeLoading === "true") return;
  if (viewmodelThree?.animationFrame) cancelAnimationFrame(viewmodelThree.animationFrame);
  stage.dataset.threeLoading = "true";

  try {
    const [THREE, { GLTFLoader }] = await Promise.all([
      import(VIEWMODEL_THREE_URL),
      import(VIEWMODEL_GLTF_LOADER_URL)
    ]);
    if (!document.body.contains(stage)) return;

    const canvas = stage.querySelector("#viewmodelCanvas");
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true, powerPreference: "high-performance" });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(58, 1, 0.01, 40);
    camera.position.set(0, 0.35, 2.2);
    camera.lookAt(0, -0.08, -1.1);

    const hemi = new THREE.HemisphereLight(0xbfe8ff, 0x3b3028, 1.4);
    const key = new THREE.DirectionalLight(0xffe1b1, 2.4);
    key.position.set(2.5, 3.2, 3.6);
    key.castShadow = true;
    scene.add(hemi, key);

    const loader = new GLTFLoader();
    const [agentGltf, m4Gltf, awpGltf] = await Promise.all([
      loader.loadAsync(VIEWMODEL_ASSETS.agent),
      loader.loadAsync(VIEWMODEL_ASSETS.m4a1s),
      loader.loadAsync(VIEWMODEL_ASSETS.awp)
    ]);

    const agent = normalizeGltfModel(THREE, agentGltf.scene, 1.75);
    const m4a1s = normalizeGltfModel(THREE, m4Gltf.scene, 1.05);
    const awp = normalizeGltfModel(THREE, awpGltf.scene, 1.42);
    const rig = new THREE.Group();
    const weaponGroup = new THREE.Group();

    agent.position.set(0, -1.22, -1.16);
    agent.rotation.set(-0.08, Math.PI, 0);
    agent.scale.multiplyScalar(1.08);

    m4a1s.name = "m4a1s";
    awp.name = "awp";
    weaponGroup.add(m4a1s, awp);
    rig.add(agent, weaponGroup);
    scene.add(rig);

    viewmodelThree = {
      THREE,
      stage,
      renderer,
      scene,
      camera,
      rig,
      weaponGroup,
      models: { m4a1s, awp },
      startedAt: performance.now(),
      animationFrame: null
    };

    stage.classList.add("three-ready");
    stage.dataset.threeLoading = "false";
    syncViewmodelThree();
    resizeViewmodelThree();
    animateViewmodelThree();
  } catch (error) {
    console.warn("Three.js viewmodel preview unavailable.", error);
    stage.dataset.threeLoading = "false";
    stage.classList.add("three-error");
  }
}

function normalizeGltfModel(THREE, object, targetSize) {
  const box = new THREE.Box3().setFromObject(object);
  const size = new THREE.Vector3();
  const center = new THREE.Vector3();
  box.getSize(size);
  box.getCenter(center);
  const maxAxis = Math.max(size.x, size.y, size.z) || 1;
  const scale = targetSize / maxAxis;
  object.scale.setScalar(scale);
  object.position.set(-center.x * scale, -center.y * scale, -center.z * scale);
  object.traverse(child => {
    if (!child.isMesh) return;
    child.castShadow = true;
    child.receiveShadow = true;
    const materials = Array.isArray(child.material) ? child.material : [child.material];
    materials.filter(Boolean).forEach(material => {
      material.roughness = Math.min(1, (material.roughness ?? 0.65) + 0.08);
      material.metalness = material.metalness ?? 0.25;
    });
  });
  return object;
}

function syncViewmodelThree() {
  if (!viewmodelThree) return;
  const weapon = findRow("viewmodel_weapon")?.value || "m4a1s";
  const fov = Number(findRow("viewmodel_fov")?.value || 68);
  const offsetX = Number(findRow("viewmodel_offset_x")?.value || 2.5);
  const offsetY = Number(findRow("viewmodel_offset_y")?.value || 1);
  const offsetZ = Number(findRow("viewmodel_offset_z")?.value || -1.5);
  const preset = findRow("viewmodel_presetpos_main")?.value || "1";
  const rightHand = (findRow("viewmodel_handedness")?.value || "1") === "1";
  const handSign = rightHand ? 1 : -1;
  const scale = 1.20 - ((fov - 54) / 14) * 0.30;
  const presetOffsets = {
    "1": { x: 0, y: 0, z: 0 },
    "2": { x: -0.10, y: 0.07, z: -0.08 },
    "3": { x: -0.18, y: -0.02, z: 0.08 }
  }[preset] || { x: 0, y: 0, z: 0 };

  Object.entries(viewmodelThree.models).forEach(([id, model]) => {
    model.visible = id === weapon;
  });
  viewmodelThree.camera.fov = 63 - ((fov - 54) / 14) * 10;
  viewmodelThree.camera.updateProjectionMatrix();
  viewmodelThree.rig.scale.set(handSign * scale, scale, scale);
  viewmodelThree.rig.position.set(
    handSign * (0.35 + offsetX * 0.045 + presetOffsets.x),
    -0.16 + offsetZ * 0.075 + presetOffsets.y,
    -0.12 - offsetY * 0.13 + presetOffsets.z
  );
  viewmodelThree.rig.rotation.set(-0.04, handSign * -0.16, handSign * -0.035);
  viewmodelThree.weaponGroup.position.set(handSign * 0.32, -0.28, -0.86);
  viewmodelThree.weaponGroup.rotation.set(-0.11, handSign * -0.36, handSign * -0.08);
}

function resizeViewmodelThree() {
  if (!viewmodelThree) return;
  const { stage, renderer, camera } = viewmodelThree;
  const rect = stage.getBoundingClientRect();
  const width = Math.max(1, Math.floor(rect.width));
  const height = Math.max(1, Math.floor(rect.height));
  const canvas = renderer.domElement;
  if (canvas.width !== Math.floor(width * renderer.getPixelRatio()) || canvas.height !== Math.floor(height * renderer.getPixelRatio())) {
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }
}

function animateViewmodelThree() {
  if (!viewmodelThree || !document.body.contains(viewmodelThree.stage)) return;
  const time = (performance.now() - viewmodelThree.startedAt) / 1000;
  resizeViewmodelThree();
  viewmodelThree.weaponGroup.rotation.x += Math.sin(time * 1.2) * 0.00035;
  viewmodelThree.weaponGroup.position.y += Math.sin(time * 1.7) * 0.00045;
  viewmodelThree.renderer.render(viewmodelThree.scene, viewmodelThree.camera);
  viewmodelThree.animationFrame = requestAnimationFrame(animateViewmodelThree);
}

function videoPreviewTemplate() {
  return `
    <div class="video-preview" aria-label="${t("tab.video.advanced")} preview">
      <div class="video-scene" id="videoRenderPreview">
        <div class="video-sky"></div>
        <div class="video-wall wall-left"></div>
        <div class="video-wall wall-center"></div>
        <div class="video-wall wall-right"></div>
        <div class="video-awning"></div>
        <div class="video-smoke"></div>
        <div class="video-fire"></div>
        <div class="video-soldier soldier-left"></div>
        <div class="video-soldier soldier-center"></div>
        <div class="video-weapon"></div>
        <div class="video-crosshair"></div>
        <div class="video-magnified"><span>Magnified</span></div>
      </div>
    </div>
  `;
}

function updateVideoPreview() {
  const preview = pane.querySelector("#videoRenderPreview");
  if (!preview) return;

  const brightness = Number(videoRowValue("brightness", "2.2"));
  const contrastBoost = videoRowValue("boost_player_contrast", "1") === "1" ? 1.16 : 1;
  const shadow = Number(videoRowValue("shadow_quality", "2"));
  const dynamicShadows = Number(videoRowValue("dynamic_shadows", "2"));
  const texture = Number(videoRowValue("texture_detail", "2"));
  const shader = Number(videoRowValue("shader_detail", "1"));
  const particle = Number(videoRowValue("particle_detail", "2"));
  const ao = Number(videoRowValue("ambient_occlusion", "1"));
  const hdr = videoRowValue("hdr", "1");
  const fsr = Number(videoRowValue("fsr", "0"));
  const msaa = Number(videoRowValue("msaa", "4"));
  const magnification = Number(videoRowValue("magnification", "6"));

  const brightnessFilter = 1.12 - ((brightness - 1.6) / 1.4) * 0.22;
  const aaBlur = msaa === 0 ? 0.85 : msaa === 2 ? 0.45 : msaa === 4 ? 0.18 : 0;
  const fsrBlur = [0, 0.15, 0.32, 0.55, 0.82][fsr] || 0;
  const textureBlur = texture === 0 ? 0.75 : texture === 1 ? 0.35 : 0;

  preview.style.setProperty("--vp-filter", `brightness(${brightnessFilter.toFixed(2)}) contrast(${contrastBoost}) saturate(${hdr === "1" ? 1.08 : 0.94}) blur(${Math.max(aaBlur, fsrBlur, textureBlur)}px)`);
  const shadowStrength = 0.20 + shadow * 0.14 + dynamicShadows * 0.08;
  const textureStrength = 0.12 + texture * 0.18;
  const particleStrength = 0.25 + particle * 0.25;
  const shaderEnabled = shader === 1;
  preview.style.setProperty("--vp-shadow", String(shadowStrength));
  preview.style.setProperty("--vp-wall-shadow", String(shadowStrength * 0.34));
  preview.style.setProperty("--vp-awning-shadow", String(shadowStrength * 0.35));
  preview.style.setProperty("--vp-soldier-shadow", String(shadowStrength * 0.7));
  preview.style.setProperty("--vp-weapon-shadow", String(shadowStrength * 0.8));
  preview.style.setProperty("--vp-ao", String(ao * 0.16));
  preview.style.setProperty("--vp-texture", String(textureStrength));
  preview.style.setProperty("--vp-texture-fine", String(textureStrength * 0.045));
  preview.style.setProperty("--vp-texture-strong", String(textureStrength * 0.08));
  preview.style.setProperty("--vp-particle", String(particleStrength));
  preview.style.setProperty("--vp-fire-opacity", String(0.45 + particleStrength * 0.45));
  preview.style.setProperty("--vp-shader", String(shaderEnabled ? 1 : 0));
  preview.style.setProperty("--vp-shader-contrast", String(shaderEnabled ? 1.12 : 1));
  preview.style.setProperty("--vp-shader-blur", shaderEnabled ? "0px" : "1px");
  preview.style.setProperty("--vp-hdr", String(hdr === "1" ? 0.26 : 0.08));
  preview.style.setProperty("--vp-mag", String(1 + magnification * 0.045));
}

function videoRowValue(id, fallback = "") {
  const row = findRow(id);
  return row ? row.value : fallback;
}

function crosshairPreviewTemplate() {
  return `
    <div class="crosshair-preview" aria-label="${t("row.crosshair_preview")}">
      <button class="preview-arrow preview-prev" type="button" aria-label="Previous preview" data-crosshair-action="prev"></button>
      <button class="preview-arrow preview-next" type="button" aria-label="Next preview" data-crosshair-action="next"></button>
      <div class="preview-scene" style="${escapeAttr(previewSceneStyle(currentScenery))}">
        <div class="preview-lane"></div>
        <div class="preview-wall"></div>
        <div class="preview-window"></div>
        <div class="crosshair-reticle" id="crosshairPreviewReticle" aria-hidden="true">
          <span class="xh-arm xh-top"></span>
          <span class="xh-arm xh-right"></span>
          <span class="xh-arm xh-bottom"></span>
          <span class="xh-arm xh-left"></span>
          <span class="xh-dot"></span>
          <span class="xh-recoil"></span>
        </div>
      </div>
      <div class="preview-actions">
        <button type="button" data-crosshair-action="share">${t("crosshair.share")}</button>
        <button type="button" data-crosshair-action="undo">${t("crosshair.undo")}</button>
        <button type="button" data-crosshair-action="reset">${t("crosshair.reset")}</button>
      </div>
      <div class="crosshair-import" id="crosshairImportPanel" hidden>
        <textarea id="crosshairImportInput" spellcheck="false" placeholder="${t("crosshair.importPlaceholder")}"></textarea>
        <div>
          <button type="button" data-crosshair-action="import">${t("crosshair.importApply")}</button>
          <button type="button" data-crosshair-action="copy">${t("crosshair.importCopy")}</button>
        </div>
      </div>
      <div class="crosshair-quick-tools">
        <div class="crosshair-colors" aria-label="Crosshair colors">
          ${[
            ["red", 255, 0, 0],
            ["green", 0, 255, 0],
            ["yellow", 255, 255, 0],
            ["blue", 0, 48, 255],
            ["cyan", 0, 255, 255]
          ].map(([name, r, g, b]) => `<button type="button" class="color-swatch ${name}" data-crosshair-color="${r},${g},${b}" aria-label="${name}"></button>`).join("")}
          <label class="custom-color">
            <input type="color" id="crosshairColorPicker" value="#ff0000">
            <span>Custom</span>
          </label>
        </div>
        <div class="crosshair-presets" aria-label="Crosshair presets">
          ${crosshairPresetButtons()}
        </div>
      </div>
    </div>
  `;
}

function previewSceneStyle(mapId) {
  const map = sceneryMaps.some(item => item.id === mapId) ? mapId : "dust";
  return [
    `--preview-map-webp: url("assets/crosshair_preview_${map}.webp")`,
    `--preview-map-jpg: url("assets/crosshair_preview_${map}.jpg")`,
    `--preview-map-png: url("assets/crosshair_preview_${map}.png")`
  ].join("; ");
}

function updatePreviewSceneMap(mapId) {
  const scene = pane.querySelector(".preview-scene");
  if (!scene) return;
  const map = sceneryMaps.some(item => item.id === mapId) ? mapId : "dust";
  scene.style.setProperty("--preview-map-webp", `url("assets/crosshair_preview_${map}.webp")`);
  scene.style.setProperty("--preview-map-jpg", `url("assets/crosshair_preview_${map}.jpg")`);
  scene.style.setProperty("--preview-map-png", `url("assets/crosshair_preview_${map}.png")`);
}

const CROSSHAIR_PRESETS = [
  ["donk", crosshairPresetCommand({ size: "1.5", thickness: "0.5", gap: "-3", red: "255", green: "255", blue: "255" })],
  ["red-small", crosshairPresetCommand({ size: "1.5", thickness: "0.5", gap: "-5", red: "255", green: "0", blue: "0" })],
  ["green-plus", crosshairPresetCommand({ size: "2.2", thickness: "0.5", gap: "-2", red: "0", green: "255", blue: "0" })],
  ["yellow-dot", crosshairPresetCommand({ size: "0", thickness: "1.6", gap: "-10", dot: "1", red: "255", green: "255", blue: "0" })],
  ["cyan-gap", crosshairPresetCommand({ size: "2.6", thickness: "0.7", gap: "1", red: "0", green: "255", blue: "255" })],
  ["blue-t", crosshairPresetCommand({ size: "2.0", thickness: "0.8", gap: "-3", tStyle: "1", red: "30", green: "70", blue: "255" })],
  ["outline-white", crosshairPresetCommand({ size: "1.8", thickness: "0.5", gap: "-4", outline: "1", outlineThickness: "1", red: "255", green: "255", blue: "255" })]
];

function crosshairPresetCommand({
  size,
  thickness,
  gap,
  dot = "0",
  tStyle = "0",
  outline = "0",
  outlineThickness = "0",
  red,
  green,
  blue
}) {
  return [
    "cl_crosshairstyle 4",
    `cl_crosshairsize ${size}`,
    `cl_crosshairthickness ${thickness}`,
    `cl_crosshairgap ${gap}`,
    `cl_crosshairdot ${dot}`,
    `cl_crosshair_t ${tStyle}`,
    `cl_crosshair_drawoutline ${outline}`,
    `cl_crosshair_outlinethickness ${outlineThickness}`,
    "cl_crosshairusealpha 0",
    "cl_crosshairalpha 255",
    "cl_crosshaircolor 5",
    `cl_crosshaircolor_r ${red}`,
    `cl_crosshaircolor_g ${green}`,
    `cl_crosshaircolor_b ${blue}`
  ].join(";");
}

function crosshairPresetButtons() {
  return CROSSHAIR_PRESETS.map(([name, commands]) => {
    const active = crosshairPresetMatches(commands);
    return `
    <button class="${active ? "active" : ""}" type="button" data-crosshair-preset="${escapeAttr(commands)}" aria-label="${name}" aria-pressed="${active}">
      <span class="preset-preview ${name}"></span>
    </button>
  `;
  }).join("");
}

function onCrosshairPreviewAction(e) {
  const action = e.currentTarget.dataset.crosshairAction;
  if (action === "prev" || action === "next") {
    changeCrosshairPreviewMap(action === "next" ? 1 : -1);
    return;
  }
  if (action === "share") {
    toggleCrosshairImport();
    return;
  }
  if (action === "copy") {
    copyCrosshairCommands(e.currentTarget);
    return;
  }
  if (action === "import") {
    importCrosshairCommands();
    return;
  }
  if (action === "undo" || action === "reset") {
    resetCrosshairSection();
  }
}

function changeCrosshairPreviewMap(direction) {
  const currentIndex = Math.max(0, sceneryMaps.findIndex(map => map.id === currentScenery));
  const nextIndex = (currentIndex + direction + sceneryMaps.length) % sceneryMaps.length;
  changeScenery(sceneryMaps[nextIndex].id);
}

function toggleCrosshairImport() {
  const panel = document.querySelector("#crosshairImportPanel");
  const input = document.querySelector("#crosshairImportInput");
  if (!panel || !input) return;
  panel.hidden = !panel.hidden;
  if (!panel.hidden) {
    input.value = currentCrosshairCommands();
    requestAnimationFrame(() => {
      input.focus();
      input.select();
    });
  }
}

function importCrosshairCommands() {
  const input = document.querySelector("#crosshairImportInput");
  if (!input) return;
  applyCrosshairCommandString(input.value);
}

function applyCrosshairCommandString(commands) {
  const parsed = parseCommandString(commands);
  for (const [command, value] of Object.entries(parsed)) {
    const row = allRows().find(item => item.command === command && (item.type === "select" || item.type === "slider"));
    if (!row) continue;
    row.value = normalizeImportedValue(row, value);
  }
  renderPane();
  updateCommand();
}

function onCrosshairPresetClick(e) {
  applyCrosshairCommandString(e.currentTarget.dataset.crosshairPreset);
}

function onCrosshairColorClick(e) {
  const [red, green, blue] = e.currentTarget.dataset.crosshairColor.split(",");
  applyCrosshairColor(red, green, blue);
}

function onCrosshairColorPicker(e) {
  const hex = e.target.value.replace("#", "");
  const red = parseInt(hex.slice(0, 2), 16);
  const green = parseInt(hex.slice(2, 4), 16);
  const blue = parseInt(hex.slice(4, 6), 16);
  applyCrosshairColor(red, green, blue);
}

function applyCrosshairColor(red, green, blue) {
  setCommandValue("cl_crosshaircolor_r", String(red));
  setCommandValue("cl_crosshaircolor_g", String(green));
  setCommandValue("cl_crosshaircolor_b", String(blue));
  setCommandValue("cl_crosshaircolor", "5");
  renderPane();
  updateCommand();
}

function setCommandValue(command, value) {
  allRows().forEach(row => {
    if (row.command === command && (row.type === "select" || row.type === "slider")) row.value = String(value);
  });
}

async function copyCrosshairCommands(button) {
  const commands = currentCrosshairCommands();
  try {
    await navigator.clipboard.writeText(commands);
    const previous = button.textContent;
    button.textContent = t("panel.copied");
    setTimeout(() => button.textContent = previous, 850);
  } catch {
    output.value = commands;
    output.select();
  }
}

function currentCrosshairCommands() {
  return uniqueRowsByCommand(crosshairRows())
    .filter(row => row.type === "select" || row.type === "slider")
    .map(row => `${row.command} ${valueLiteral(row.value)}`)
    .join("; ");
}

function parseCommandString(text) {
  return text.split(";").reduce((commands, segment) => {
    const match = segment.trim().match(/^([a-zA-Z0-9_+.:-]+)\s+(.+)$/);
    if (!match) return commands;
    commands[match[1]] = match[2].trim().replace(/^"|"$/g, "");
    return commands;
  }, {});
}

function normalizeImportedValue(row, value) {
  if (row.type === "select" && row.options.some(option => option.value === value)) return value;
  if (row.type === "slider") {
    const min = Number(row.min), max = Number(row.max);
    const numeric = Number(value);
    if (Number.isFinite(numeric)) return formatByStep(Math.min(max, Math.max(min, numeric)), row.step);
  }
  return value;
}

function crosshairPresetMatches(commands) {
  const parsed = parseCommandString(commands);
  return Object.entries(parsed).every(([command, value]) => {
    const row = allRows().find(item => item.command === command && (item.type === "select" || item.type === "slider"));
    if (!row) return true;
    if (row.type === "slider") {
      const current = Number(row.value);
      const expected = Number(value);
      return Number.isFinite(current) && Number.isFinite(expected) && Math.abs(current - expected) < 0.0001;
    }
    return String(row.value) === String(value);
  });
}

function updateCrosshairPresetSelection() {
  pane.querySelectorAll("[data-crosshair-preset]").forEach(btn => {
    const active = crosshairPresetMatches(btn.dataset.crosshairPreset);
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });
}

function resetCrosshairSection() {
  crosshairRows().forEach(row => {
    if (row.type === "select" || row.type === "slider") row.value = row.defaultValue;
  });
  renderPane();
  updateCommand();
}

function crosshairRows() {
  const sectionData = state.game.sections.find(section => section.id === "crosshair");
  return sectionData ? sectionData.groups.flatMap(group => group.rows) : [];
}

function updateCrosshairPreview() {
  const reticle = document.querySelector("#crosshairPreviewReticle");
  if (!reticle) return;

  const red = Number(commandValue("cl_crosshaircolor_r", 255));
  const green = Number(commandValue("cl_crosshaircolor_g", 0));
  const blue = Number(commandValue("cl_crosshaircolor_b", 0));
  const alpha = commandValue("cl_crosshairusealpha", "0") === "1" ? Number(commandValue("cl_crosshairalpha", 255)) / 255 : 1;
  const size = Number(commandValue("cl_crosshairsize", 1.5));
  const thickness = Number(commandValue("cl_crosshairthickness", 0.5));
  const gap = Number(commandValue("cl_crosshairgap", -5));
  const outline = commandValue("cl_crosshair_drawoutline", "0") === "1";
  const outlineThickness = Number(commandValue("cl_crosshair_outlinethickness", 0));

  reticle.style.setProperty("--xh-color", `rgba(${red}, ${green}, ${blue}, ${Math.max(0.08, Math.min(1, alpha))})`);
  reticle.style.setProperty("--xh-size", `${Math.max(5, size * 8)}px`);
  reticle.style.setProperty("--xh-thick", `${Math.max(1, thickness * 3)}px`);
  reticle.style.setProperty("--xh-dot", `${Math.max(1.2, thickness * 4)}px`);
  reticle.style.setProperty("--xh-gap", `${Math.max(2, 13 + gap * 2)}px`);
  reticle.style.setProperty("--xh-outline", outline ? `${Math.max(1, outlineThickness * 2)}px` : "0px");
  const hasDot = commandValue("cl_crosshairdot", "0") === "1";
  reticle.classList.toggle("has-dot", hasDot);
  reticle.classList.toggle("dot-only", hasDot && size <= 0.6);
  reticle.classList.toggle("t-style", commandValue("cl_crosshair_t", "0") === "1");
  reticle.classList.toggle("follow-recoil", commandValue("cl_crosshair_recoil", "0") === "1");
  updateCrosshairPresetSelection();
}

function commandValue(command, fallback = "") {
  const row = allRows().find(item => item.command === command && (item.type === "select" || item.type === "slider"));
  return row ? row.value : fallback;
}

function rowTemplate(row) {
  const changedClass = rowHasChanges(row) ? " changed" : "";
  const rowAttrs = `class="setting-row${changedClass}" data-row-type="${row.type}" data-row-command="${escapeAttr(row.command)}"`;
  if (row.type === "bind") {
    return `<div ${rowAttrs}><div class="row-label">${t(row.labelKey)}</div><div class="value-cell keybind${changedClass}" data-bind-id="${row.id}">${row.display}</div></div>`;
  }
  if (row.type === "select") {
    const selected = row.options.find(option => option.value === row.value) || row.options[0];
    return `<div ${rowAttrs}><div class="row-label">${t(row.labelKey)}</div><div class="select-wrap${changedClass}" data-setting-id="${row.id}">
      <button class="select-display" type="button" data-select-toggle data-setting-id="${row.id}" aria-expanded="false">
        <span>${t(selected.labelKey)}</span>
      </button>
      <div class="select-menu" role="listbox">
        ${row.options.map(option => `<button class="${option.value === row.value ? "active" : ""}" type="button" role="option" aria-selected="${option.value === row.value}" data-setting-id="${row.id}" data-select-option="${option.value}">${t(option.labelKey)}</button>`).join("")}
      </div>
    </div></div>`;
  }
  if (row.type === "slider") {
    const numberAttrs = row.format === "percent"
      ? `type="text" value="${sliderDisplayValue(row)}" inputmode="numeric"`
      : `type="number" min="${row.min}" max="${row.max}" step="${row.step}" value="${row.value}"`;
    return `<div ${rowAttrs}><div class="row-label">${t(row.labelKey)}</div><div class="value-cell slider-cell${changedClass}"><input type="range" min="${row.min}" max="${row.max}" step="${row.step}" value="${row.value}" data-setting-id="${row.id}"><input class="num-box" ${numberAttrs} data-setting-id="${row.id}"></div></div>`;
  }
  return "";
}

function escapeAttr(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function formatByStep(value, step) {
  const decimals = String(step).includes(".") ? String(step).split(".")[1].length : 0;
  return Number(value).toFixed(decimals);
}

function sliderDisplayValue(row) {
  if (row.format === "percent") return `${Math.round(Number(row.value) * 100)}%`;
  return row.value;
}

function sliderValueFromDisplay(row, value) {
  if (row.format !== "percent") return Number(value || row.defaultValue);
  const numeric = Number(String(value).replace("%", "").trim());
  return Number.isFinite(numeric) ? numeric / 100 : Number(row.defaultValue);
}

function findRow(id) {
  return allRows().find(row => row.id === id);
}

function allRows() {
  return Object.values(state).flatMap(category => category.sections.flatMap(section => section.groups.flatMap(group => group.rows)));
}

function rowHasChanges(row) {
  if (row.type === "bind") return row.key !== row.defaultKey;
  if (row.type === "select" || row.type === "slider") return String(row.value) !== String(row.defaultValue);
  return false;
}

function sectionHasChanges(categoryId, sectionId) {
  const sectionData = state[categoryId].sections.find(section => section.id === sectionId);
  return sectionData ? sectionData.groups.some(group => group.rows.some(rowHasChanges)) : false;
}

function categoryHasChanges(categoryId) {
  return state[categoryId].sections.some(section => section.groups.some(group => group.rows.some(rowHasChanges)));
}

function refreshChangedIndicators() {
  mainTabs.querySelectorAll("[data-category]").forEach(btn => {
    btn.classList.toggle("changed", categoryHasChanges(btn.dataset.category));
  });
  subTabs.querySelectorAll("[data-section]").forEach(btn => {
    btn.classList.toggle("changed", sectionHasChanges(currentCategory, btn.dataset.section));
  });
  pane.querySelectorAll("[data-row-command]").forEach(rowEl => {
    const changed = allRows().some(row => row.type === rowEl.dataset.rowType && row.command === rowEl.dataset.rowCommand && rowHasChanges(row));
    rowEl.classList.toggle("changed", changed);
    rowEl.querySelector(".value-cell, .select-wrap")?.classList.toggle("changed", changed);
  });
}

function flashChangedRows(row) {
  if (!rowHasChanges(row)) return;
  requestAnimationFrame(() => {
    pane.querySelectorAll("[data-row-command]").forEach(rowEl => {
      if (rowEl.dataset.rowType !== row.type || rowEl.dataset.rowCommand !== row.command) return;
      rowEl.classList.remove("changed-pulse");
      void rowEl.offsetWidth;
      rowEl.classList.add("changed-pulse");
      setTimeout(() => rowEl.classList.remove("changed-pulse"), 650);
    });
  });
}

function setSettingValue(row, value) {
  allRows().forEach(other => {
    if ((other.type === "select" || other.type === "slider") && other.command === row.command) {
      other.value = value;
    }
  });
}

function uniqueRowsByCommand(rows) {
  const seen = new Set();
  return rows.filter(row => {
    const key = `${row.type}:${row.command}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function startCapture(rowId, cell) {
  stopCapture();
  captureTarget = { rowId, cell };
  cell.classList.add("capturing");
  toast.classList.add("visible");
}

function stopCapture() {
  if (captureTarget?.cell) captureTarget.cell.classList.remove("capturing");
  captureTarget = null;
  toast.classList.remove("visible");
}

function onKeyDown(e) {
  if (!captureTarget && e.code === "Escape") {
    closeCustomSelects();
    closeVolumePanel();
    closeSceneryMenu();
    return;
  }
  if (!captureTarget) return;
  e.preventDefault();
  e.stopPropagation();
  if (e.code === "Escape") { stopCapture(); return; }
  const mapped = KEYMAP[e.code];
  if (!mapped) return;
  applyCapturedInput(mapped[0], mapped[1]);
}

function onMouseDown(e) {
  if (!captureTarget) return;
  e.preventDefault();
  e.stopPropagation();
  const mapped = mouseButtons[e.button];
  if (!mapped) return;
  applyCapturedInput(mapped[0], mapped[1]);
}

function applyCapturedInput(key, display) {
  const target = findRow(captureTarget.rowId);
  const matchingBinds = allRows().filter(row => row.type === "bind" && row.command === target.command);
  matchingBinds.forEach(row => {
    row.key = key;
    row.display = display;
  });
  stopCapture();
  renderPane();
  updateCommand();
  flashChangedRows(target);
}

function quoteCommand(command) {
  return `"${command.replaceAll('"', '\\"')}"`;
}

function valueLiteral(value) {
  if (value === "true" || value === "false") return value;
  if (/^-?\d+(\.\d+)?$/.test(String(value))) return String(value);
  return `"${String(value).replaceAll('"', '\\"')}"`;
}

function updateCommand() {
  const commands = [];
  const rows = uniqueRowsByCommand(allRows());
  const changedBinds = rows.filter(row => row.type === "bind" && row.key !== row.defaultKey);
  const changedSettings = rows.filter(row => (row.type === "select" || row.type === "slider") && row.export !== false && String(row.value) !== String(row.defaultValue));

  if (resetFirst.checked) commands.push("binddefaults");

  const unbinds = new Set();
  for (const row of changedBinds) {
    if (row.defaultKey) unbinds.add(row.defaultKey);
    if (row.key) unbinds.add(row.key);

    const occupiedBy = rows.filter(other => row.key && other.type === "bind" && other.defaultKey === row.key && other.id !== row.id);
    occupiedBy.forEach(other => unbinds.add(other.defaultKey));
  }
  unbinds.forEach(key => commands.push(`unbind ${key}`));
  changedBinds.filter(row => row.key).forEach(row => commands.push(`bind ${row.key} ${quoteCommand(row.command)}`));
  changedSettings.forEach(row => commands.push(`${row.command} ${valueLiteral(row.value)}`));
  commands.push("host_writeconfig");

  output.value = commands.join("; ");
  refreshChangedIndicators();
}

async function copyCommand() {
  try {
    await navigator.clipboard.writeText(output.value);
    const btn = document.querySelector("#copyCommand");
    btn.textContent = t("panel.copied");
    setTimeout(() => btn.textContent = t("panel.copy"), 900);
  } catch {
    output.select();
    document.execCommand("copy");
  }
}

function onAliasKeyDown(e) {
  if (e.key !== "Enter") return;
  e.preventDefault();
  saveCurrentConfig();
}

function saveCurrentConfig() {
  const alias = configAlias.value.trim() || `Preset ${new Date().toLocaleString()}`;
  const configs = readSavedConfigs().filter(config => config.alias.toLowerCase() !== alias.toLowerCase());
  configs.unshift({
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    alias,
    savedAt: new Date().toISOString(),
    snapshot: createConfigSnapshot()
  });
  writeSavedConfigs(configs.slice(0, MAX_SAVED_CONFIGS));
  configAlias.value = "";
  renderSavedConfigs();
  saveConfig.textContent = t("panel.savedConfig");
  setTimeout(() => saveConfig.textContent = t("panel.saveConfig"), 900);
}

function createConfigSnapshot() {
  return {
    resetFirst: resetFirst.checked,
    currentCategory,
    currentSectionByCategory: { ...currentSectionByCategory },
    rows: uniqueRowsByCommand(allRows()).map(row => {
      if (row.type === "bind") {
        return { type: row.type, command: row.command, key: row.key, display: row.display };
      }
      return { type: row.type, command: row.command, value: row.value };
    })
  };
}

function readSavedConfigs() {
  try {
    const parsed = JSON.parse(localStorage.getItem(SAVED_CONFIGS_KEY) || "[]");
    return Array.isArray(parsed) ? parsed.filter(config => config?.id && config?.snapshot) : [];
  } catch {
    return [];
  }
}

function writeSavedConfigs(configs) {
  localStorage.setItem(SAVED_CONFIGS_KEY, JSON.stringify(configs));
}

function renderSavedConfigs() {
  const configs = readSavedConfigs();
  if (!configs.length) {
    recentConfigs.innerHTML = `<p class="recent-empty">${t("panel.emptyConfigs")}</p>`;
    return;
  }

  recentConfigs.innerHTML = configs.map(config => `
    <div class="recent-config" data-config-id="${escapeAttr(config.id)}">
      <div class="recent-load" role="button" tabindex="0" data-config-action="load" aria-label="${t("panel.loadConfig")} ${escapeAttr(config.alias)}">
        <input type="text" value="${escapeAttr(config.alias)}" readonly data-config-alias aria-label="${t("panel.aliasPlaceholder")}">
        <small>${formatSavedDate(config.savedAt)}</small>
      </div>
      <div class="recent-tools">
        <button type="button" data-config-action="edit">${t("panel.editConfig")}</button>
        <button class="delete-config" type="button" data-config-action="delete" title="${t("panel.deleteConfig")}" aria-label="${t("panel.deleteConfig")}">&times;</button>
      </div>
    </div>
  `).join("");
  recentConfigs.querySelectorAll("[data-config-action]").forEach(btn => {
    btn.addEventListener("click", onSavedConfigAction);
    btn.addEventListener("keydown", onSavedConfigKeyDown);
  });
  recentConfigs.querySelectorAll("[data-config-alias]").forEach(input => {
    input.addEventListener("click", e => e.stopPropagation());
    input.addEventListener("keydown", onSavedAliasKeyDown);
    input.addEventListener("blur", onSavedAliasBlur);
  });
}

function onSavedConfigKeyDown(e) {
  if (e.key !== "Enter" && e.key !== " ") return;
  if (e.target.matches("[data-config-alias]") && !e.target.readOnly) return;
  e.preventDefault();
  onSavedConfigAction(e);
}

function onSavedConfigAction(e) {
  const action = e.currentTarget.dataset.configAction;
  const configId = e.currentTarget.closest("[data-config-id]")?.dataset.configId;
  const configs = readSavedConfigs();
  const config = configs.find(item => item.id === configId);
  if (!config) return;

  if (action === "load") {
    applyConfigSnapshot(config.snapshot);
    renderAll();
    return;
  }

  if (action === "edit") {
    const input = e.currentTarget.closest("[data-config-id]")?.querySelector("[data-config-alias]");
    if (!input) return;
    input.readOnly = false;
    input.focus();
    input.select();
    return;
  }

  if (action === "delete") {
    writeSavedConfigs(configs.filter(item => item.id !== configId));
    renderSavedConfigs();
  }
}

function onSavedAliasKeyDown(e) {
  if (e.key === "Enter") {
    e.preventDefault();
    e.currentTarget.blur();
  }
  if (e.key === "Escape") {
    e.preventDefault();
    renderSavedConfigs();
  }
}

function onSavedAliasBlur(e) {
  if (e.currentTarget.readOnly) return;
  const configId = e.currentTarget.closest("[data-config-id]")?.dataset.configId;
  const nextAlias = e.currentTarget.value.trim();
  const configs = readSavedConfigs();
  const config = configs.find(item => item.id === configId);
  if (!config) return;
  if (nextAlias) {
    config.alias = nextAlias;
    config.savedAt = new Date().toISOString();
    writeSavedConfigs(configs);
  }
  renderSavedConfigs();
}

function applyConfigSnapshot(snapshot) {
  resetState();
  resetFirst.checked = snapshot.resetFirst ?? true;
  for (const savedRow of snapshot.rows || []) {
    allRows().forEach(row => {
      if (row.type !== savedRow.type || row.command !== savedRow.command) return;
      if (row.type === "bind") {
        row.key = savedRow.key || "";
        row.display = savedRow.display || "";
      } else if (row.type === "select" || row.type === "slider") {
        row.value = String(savedRow.value);
      }
    });
  }
  if (snapshot.currentCategory && state[snapshot.currentCategory]) currentCategory = snapshot.currentCategory;
  currentSectionByCategory = Object.fromEntries(categoryOrder.map(id => [
    id,
    state[id].tabs.some(tab => tab.id === snapshot.currentSectionByCategory?.[id])
      ? snapshot.currentSectionByCategory[id]
      : state[id].tabs[0].id
  ]));
}

function formatSavedDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString(undefined, { month: "short", day: "numeric" });
}

function escapeHtml(value) {
  return escapeAttr(value).replaceAll("'", "&#39;");
}

function resetState() {
  const fresh = JSON.parse(JSON.stringify(defaults));
  for (const key of Object.keys(state)) delete state[key];
  Object.assign(state, fresh);
  currentSectionByCategory = Object.fromEntries(categoryOrder.map(id => [id, state[id].tabs[0].id]));
}

function resetUi() {
  resetState();
  resetFirst.checked = true;
  stopCapture();
  closeCustomSelects();
  renderAll();
}

function setBindByCommand(command, key, display) {
  allRows().forEach(row => {
    if (row.type === "bind" && row.command === command) {
      row.key = key;
      row.display = display;
    }
  });
}

function loadTestPreset() {
  resetState();
  setBindByCommand("slot1", "mouse5", "MOUSE5");
  setBindByCommand("slot2", "scancode20", "Q");
  setBindByCommand("+sprint", "scancode57", "CapsLock");
  setBindByCommand("+duck", "scancode225", "Left Shift");
  currentCategory = "keyboard";
  currentSectionByCategory.keyboard = "weapon";
  renderAll();
}

function downloadCfg() {
  const content = output.value.split("; ").join("\n") + "\n";
  const blob = new Blob([content], { type: "text/plain" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "cs2-custom-settings.cfg";
  a.click();
  URL.revokeObjectURL(a.href);
}

init();
