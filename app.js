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
    "category.keyboard": "KEYBOARD / MOUSE",
    "panel.title": "Console Line",
    "panel.help": "Paste this into the CS2 developer console.",
    "panel.copy": "COPY",
    "panel.copied": "COPIED",
    "panel.resetFirst": "Reset bind defaults first",
    "panel.resetUi": "RESET UI",
    "panel.preset": "LOAD YOUR TEST PRESET",
    "panel.download": "DOWNLOAD .CFG",
    "hint.capture": "Capture mode: click any key field, then press a keyboard key or mouse button.",
    "hint.refresh": "CS2 refresh: after pasting commands, switch to another settings sub-section and back.",
    "toast.capture": "Press a key or mouse button...",
    "toast.cancel": "ESC cancels",
    "tab.kbm.settings": "KEYBOARD & MOUSE SETTINGS",
    "tab.kbm.movement": "MOVEMENT KEYS",
    "tab.kbm.weapon": "WEAPON KEYS",
    "tab.kbm.ui": "UI KEYS",
    "tab.kbm.communication": "COMMUNICATION OPTIONS",
    "tab.kbm.chatwheel": "CHAT WHEEL KEYS",
    "tab.video.basic": "BASIC VIDEO",
    "tab.video.advanced": "ADVANCED VIDEO",
    "tab.video.telemetry": "TELEMETRY",
    "tab.audio.main": "AUDIO",
    "tab.audio.voice": "VOICE",
    "tab.audio.music": "MUSIC",
    "tab.game.main": "GAME",
    "tab.game.hud": "HUD",
    "tab.game.radar": "RADAR",
    "group.kbm.settings": "Keyboard & Mouse Settings",
    "group.kbm.movement": "Movement Keys",
    "group.kbm.weapon": "Weapon Keys",
    "group.kbm.ui": "UI Keys",
    "group.kbm.communication": "Communication Options",
    "group.kbm.chatwheel": "Chat Wheel Keys",
    "group.video.basic": "Basic Video",
    "group.video.advanced": "Advanced Video",
    "group.video.telemetry": "Telemetry",
    "group.audio.main": "Audio",
    "group.audio.voice": "Voice",
    "group.audio.music": "Music",
    "group.game.main": "Game",
    "group.game.hud": "HUD",
    "group.game.radar": "Radar",
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
    "row.slot10": "Molotov / Incendiary",
    "row.reload": "Reload",
    "row.lastinv": "Last Weapon Used",
    "row.invprev": "Previous Weapon",
    "row.invnext": "Next Weapon",
    "row.scoreboard": "Scoreboard",
    "row.console": "Toggle Console",
    "row.team_menu": "Choose Team",
    "row.chat_all": "Chat Message",
    "row.chat_team": "Team Message",
    "row.spray": "Spray Menu",
    "row.voice": "Use Mic",
    "row.player_ping": "Player Ping",
    "row.radio1": "Radio Message",
    "row.radio2": "Radio Message 2",
    "row.radio3": "Radio Message 3",
    "row.chatwheel1": "Chat Wheel 1",
    "row.chatwheel2": "Chat Wheel 2",
    "row.chatwheel3": "Chat Wheel 3",
    "row.display_mode": "Display Mode",
    "row.brightness": "Brightness",
    "row.fps_max": "Maximum FPS In Game",
    "row.fps_max_ui": "Maximum FPS In Menus",
    "row.msaa": "Multisampling Anti-Aliasing",
    "row.texture_filtering": "Texture Filtering Mode",
    "row.shadow_quality": "Global Shadow Quality",
    "row.texture_detail": "Model / Texture Detail",
    "row.shader_detail": "Shader Detail",
    "row.particle_detail": "Particle Detail",
    "row.reflex": "NVIDIA Reflex Low Latency",
    "row.frame_telemetry": "Frame Time Telemetry",
    "row.ping_telemetry": "Ping Telemetry",
    "row.packet_telemetry": "Packet Loss / Misdelivery Telemetry",
    "row.master_volume": "Master Volume",
    "row.mute_focus": "Mute When Game Is In Background",
    "row.voice_enable": "Enable Voice",
    "row.voice_volume": "Voice Volume",
    "row.menu_music": "Main Menu Volume",
    "row.round_start_music": "Round Start Volume",
    "row.round_end_music": "Round End Volume",
    "row.objective_music": "Bomb / Hostage Volume",
    "row.ten_second_music": "Ten Second Warning Volume",
    "row.mvp_music": "MVP Volume",
    "row.deathcam_music": "Death Camera Volume",
    "row.game_instructor": "Game Instructor Messages",
    "row.buy_menu_use": "Use Key Opens Buy Menu",
    "row.max_ping": "Max Acceptable Matchmaking Ping",
    "row.hud_color": "HUD Color",
    "row.team_overhead": "Show Team Positions In HUD",
    "row.show_loadout": "Always Show Inventory",
    "row.safezonex": "Horizontal HUD Safe Zone",
    "row.safezoney": "Vertical HUD Safe Zone",
    "row.radar_center": "Radar Centers The Player",
    "row.radar_rotate": "Radar Rotates",
    "row.radar_scale": "Radar Map Zoom",
    "row.hud_radar_scale": "Radar HUD Size",
    "row.radar_icon_scale": "Radar Icon Scale",
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
    "opt.never": "NEVER",
    "opt.if_poor": "IF POOR",
    "opt.always": "ALWAYS",
    "opt.default": "DEFAULT",
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
    "category.keyboard": "TECLADO / MOUSE",
    "panel.title": "Línea de consola",
    "panel.help": "Pégala en la consola de desarrollador de CS2.",
    "panel.copy": "COPIAR",
    "panel.copied": "COPIADO",
    "panel.resetFirst": "Restablecer binds primero",
    "panel.resetUi": "REINICIAR UI",
    "panel.preset": "CARGAR TU PRESET DE PRUEBA",
    "panel.download": "DESCARGAR .CFG",
    "hint.capture": "Modo captura: haz clic en un campo de tecla y presiona una tecla o botón del mouse.",
    "hint.refresh": "Refresco de CS2: después de pegar comandos, cambia a otra subsección y vuelve.",
    "toast.capture": "Presiona una tecla o botón del mouse...",
    "toast.cancel": "ESC cancela",
    "tab.kbm.settings": "CONFIGURACIÓN TECLADO / MOUSE",
    "tab.kbm.movement": "TECLAS DE MOVIMIENTO",
    "tab.kbm.weapon": "TECLAS DE ARMAS",
    "tab.kbm.ui": "TECLAS DE UI",
    "tab.kbm.communication": "COMUNICACIÓN",
    "tab.kbm.chatwheel": "RUEDA DE CHAT",
    "tab.video.basic": "VIDEO BÁSICO",
    "tab.video.advanced": "VIDEO AVANZADO",
    "tab.video.telemetry": "TELEMETRÍA",
    "tab.audio.main": "AUDIO",
    "tab.audio.voice": "VOZ",
    "tab.audio.music": "MÚSICA",
    "tab.game.main": "JUEGO",
    "tab.game.hud": "HUD",
    "tab.game.radar": "RADAR",
    "group.kbm.settings": "Configuración de teclado y mouse",
    "group.kbm.movement": "Teclas de movimiento",
    "group.kbm.weapon": "Teclas de armas",
    "group.kbm.ui": "Teclas de UI",
    "group.kbm.communication": "Opciones de comunicación",
    "group.kbm.chatwheel": "Teclas de rueda de chat",
    "group.video.basic": "Video básico",
    "group.video.advanced": "Video avanzado",
    "group.video.telemetry": "Telemetría",
    "group.audio.main": "Audio",
    "group.audio.voice": "Voz",
    "group.audio.music": "Música",
    "group.game.main": "Juego",
    "group.game.hud": "HUD",
    "group.game.radar": "Radar",
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
    "row.slot10": "Molotov / incendiaria",
    "row.reload": "Recargar",
    "row.lastinv": "Última arma usada",
    "row.invprev": "Arma anterior",
    "row.invnext": "Siguiente arma",
    "row.scoreboard": "Marcador",
    "row.console": "Abrir consola",
    "row.team_menu": "Elegir equipo",
    "row.chat_all": "Mensaje de chat",
    "row.chat_team": "Mensaje de equipo",
    "row.spray": "Menú de spray",
    "row.voice": "Usar micrófono",
    "row.player_ping": "Ping de jugador",
    "row.radio1": "Mensaje de radio",
    "row.radio2": "Mensaje de radio 2",
    "row.radio3": "Mensaje de radio 3",
    "row.chatwheel1": "Rueda de chat 1",
    "row.chatwheel2": "Rueda de chat 2",
    "row.chatwheel3": "Rueda de chat 3",
    "row.display_mode": "Modo de pantalla",
    "row.brightness": "Brillo",
    "row.fps_max": "FPS máximos en partida",
    "row.fps_max_ui": "FPS máximos en menús",
    "row.msaa": "Antialiasing multisampling",
    "row.texture_filtering": "Filtrado de texturas",
    "row.shadow_quality": "Calidad global de sombras",
    "row.texture_detail": "Detalle de modelos / texturas",
    "row.shader_detail": "Detalle de shaders",
    "row.particle_detail": "Detalle de partículas",
    "row.reflex": "Baja latencia NVIDIA Reflex",
    "row.frame_telemetry": "Telemetría de frame time",
    "row.ping_telemetry": "Telemetría de ping",
    "row.packet_telemetry": "Telemetría de pérdida / entrega",
    "row.master_volume": "Volumen maestro",
    "row.mute_focus": "Silenciar en segundo plano",
    "row.voice_enable": "Activar voz",
    "row.voice_volume": "Volumen de voz",
    "row.menu_music": "Volumen menú principal",
    "row.round_start_music": "Volumen inicio de ronda",
    "row.round_end_music": "Volumen fin de ronda",
    "row.objective_music": "Volumen bomba / rehenes",
    "row.ten_second_music": "Volumen aviso de 10 segundos",
    "row.mvp_music": "Volumen MVP",
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
    "opt.never": "NUNCA",
    "opt.if_poor": "SI VA MAL",
    "opt.always": "SIEMPRE",
    "opt.default": "PREDETERMINADO",
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
    "hint.capture": "Режим захвата: нажмите поле клавиши, затем клавишу или кнопку мыши.",
    "hint.refresh": "Обновление CS2: после вставки команд перейдите в другой подраздел и обратно.",
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
    "row.slot10": "Молотов / зажигательная",
    "row.reload": "Перезарядка",
    "row.lastinv": "Последнее оружие",
    "row.invprev": "Предыдущее оружие",
    "row.invnext": "Следующее оружие",
    "row.scoreboard": "Таблица счета",
    "row.console": "Открыть консоль",
    "row.team_menu": "Выбрать команду",
    "row.chat_all": "Сообщение в чат",
    "row.chat_team": "Сообщение команде",
    "row.spray": "Меню граффити",
    "row.voice": "Микрофон",
    "row.player_ping": "Метка игрока",
    "row.radio1": "Радиосообщение",
    "row.radio2": "Радиосообщение 2",
    "row.radio3": "Радиосообщение 3",
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

const categoryOrder = ["video", "audio", "game", "keyboard"];

const defaults = {
  video: {
    tabs: [
      { id: "basic", labelKey: "tab.video.basic" },
      { id: "advanced", labelKey: "tab.video.advanced" },
      { id: "telemetry", labelKey: "tab.video.telemetry" }
    ],
    sections: [
      section("basic", [
        group("group.video.basic", [
          select("display_mode", "row.display_mode", "setting.fullscreen", "1", [
            opt("1", "opt.fullscreen"), opt("0", "opt.windowed"), opt("2", "opt.borderless")
          ]),
          slider("brightness", "row.brightness", "r_fullscreen_gamma", "2.20", 1.6, 3, 0.01),
          slider("fps_max", "row.fps_max", "fps_max", "400", 60, 500, 1),
          slider("fps_max_ui", "row.fps_max_ui", "fps_max_ui", "120", 30, 240, 1)
        ])
      ]),
      section("advanced", [
        group("group.video.advanced", [
          select("msaa", "row.msaa", "setting.mat_antialias", "4", [
            opt("0", "opt.none"), opt("2", "opt.2x"), opt("4", "opt.4x"), opt("8", "opt.8x")
          ]),
          select("texture_filtering", "row.texture_filtering", "setting.r_texturefilteringquality", "4", [
            opt("0", "opt.bilinear"), opt("1", "opt.trilinear"), opt("2", "opt.2x_aniso"), opt("3", "opt.4x_aniso"), opt("4", "opt.8x_aniso"), opt("5", "opt.16x_aniso")
          ]),
          select("shadow_quality", "row.shadow_quality", "setting.csm_quality_level", "2", [
            opt("0", "opt.low"), opt("1", "opt.medium"), opt("2", "opt.high")
          ]),
          select("texture_detail", "row.texture_detail", "setting.videocfg_texture_detail", "2", [
            opt("0", "opt.low"), opt("1", "opt.medium"), opt("2", "opt.high")
          ]),
          select("shader_detail", "row.shader_detail", "setting.shaderquality", "1", [
            opt("0", "opt.low"), opt("1", "opt.high")
          ]),
          select("particle_detail", "row.particle_detail", "setting.particle_level", "1", [
            opt("0", "opt.low"), opt("1", "opt.medium"), opt("2", "opt.high")
          ]),
          select("reflex", "row.reflex", "setting.reflex_low_latency", "1", [
            opt("0", "opt.disabled"), opt("1", "opt.enabled"), opt("2", "opt.boost")
          ])
        ])
      ]),
      section("telemetry", [
        group("group.video.telemetry", [
          select("frame_telemetry", "row.frame_telemetry", "cl_hud_telemetry_frametime_show", "1", [
            opt("0", "opt.never"), opt("1", "opt.if_poor"), opt("2", "opt.always")
          ]),
          select("ping_telemetry", "row.ping_telemetry", "cl_hud_telemetry_ping_show", "1", [
            opt("0", "opt.never"), opt("1", "opt.if_poor"), opt("2", "opt.always")
          ]),
          select("packet_telemetry", "row.packet_telemetry", "cl_hud_telemetry_net_misdelivery_show", "1", [
            opt("0", "opt.never"), opt("1", "opt.if_poor"), opt("2", "opt.always")
          ])
        ])
      ])
    ]
  },
  audio: {
    tabs: [
      { id: "main", labelKey: "tab.audio.main" },
      { id: "voice", labelKey: "tab.audio.voice" },
      { id: "music", labelKey: "tab.audio.music" }
    ],
    sections: [
      section("main", [
        group("group.audio.main", [
          slider("master_volume", "row.master_volume", "volume", "1.00", 0, 1, 0.01),
          select("mute_focus", "row.mute_focus", "snd_mute_losefocus", "0", [opt("0", "opt.off"), opt("1", "opt.on")])
        ])
      ]),
      section("voice", [
        group("group.audio.voice", [
          select("voice_enable", "row.voice_enable", "voice_modenable", "1", [opt("0", "opt.off"), opt("1", "opt.on")]),
          slider("voice_volume", "row.voice_volume", "snd_voipvolume", "1.00", 0, 1, 0.01)
        ])
      ]),
      section("music", [
        group("group.audio.music", [
          slider("menu_music", "row.menu_music", "snd_menumusic_volume", "0.04", 0, 1, 0.01),
          slider("round_start_music", "row.round_start_music", "snd_roundstart_volume", "0.00", 0, 1, 0.01),
          slider("round_end_music", "row.round_end_music", "snd_roundend_volume", "0.00", 0, 1, 0.01),
          slider("objective_music", "row.objective_music", "snd_mapobjective_volume", "0.00", 0, 1, 0.01),
          slider("ten_second_music", "row.ten_second_music", "snd_tensecondwarning_volume", "0.04", 0, 1, 0.01),
          slider("mvp_music", "row.mvp_music", "snd_mvp_volume", "0.00", 0, 1, 0.01),
          slider("deathcam_music", "row.deathcam_music", "snd_deathcamera_volume", "0.00", 0, 1, 0.01)
        ])
      ])
    ]
  },
  game: {
    tabs: [
      { id: "main", labelKey: "tab.game.main" },
      { id: "hud", labelKey: "tab.game.hud" },
      { id: "radar", labelKey: "tab.game.radar" }
    ],
    sections: [
      section("main", [
        group("group.game.main", [
          select("game_instructor", "row.game_instructor", "gameinstructor_enable", "1", [opt("0", "opt.off"), opt("1", "opt.on")]),
          select("buy_menu_use", "row.buy_menu_use", "cl_use_opens_buy_menu", "1", [opt("0", "opt.off"), opt("1", "opt.on")]),
          slider("max_ping", "row.max_ping", "mm_dedicated_search_maxping", "150", 25, 350, 1)
        ])
      ]),
      section("hud", [
        group("group.game.hud", [
          select("hud_color", "row.hud_color", "cl_hud_color", "0", [
            opt("0", "opt.default"), opt("1", "opt.white"), opt("2", "opt.lightblue"), opt("3", "opt.blue"), opt("4", "opt.purple"), opt("5", "opt.red"), opt("6", "opt.orange"), opt("7", "opt.yellow"), opt("8", "opt.green"), opt("9", "opt.aqua")
          ]),
          select("team_overhead", "row.team_overhead", "cl_teamid_overhead_mode", "2", [
            opt("0", "opt.off"), opt("1", "opt.team_overhead_pips"), opt("2", "opt.team_overhead_names")
          ]),
          select("show_loadout", "row.show_loadout", "cl_showloadout", "1", [opt("0", "opt.off"), opt("1", "opt.on")]),
          slider("safezonex", "row.safezonex", "safezonex", "1.00", 0.85, 1, 0.01),
          slider("safezoney", "row.safezoney", "safezoney", "1.00", 0.85, 1, 0.01)
        ])
      ]),
      section("radar", [
        group("group.game.radar", [
          select("radar_center", "row.radar_center", "cl_radar_always_centered", "1", [opt("0", "opt.off"), opt("1", "opt.on")]),
          select("radar_rotate", "row.radar_rotate", "cl_radar_rotate", "1", [opt("0", "opt.off"), opt("1", "opt.on")]),
          slider("radar_scale", "row.radar_scale", "cl_radar_scale", "0.70", 0.25, 1, 0.01),
          slider("hud_radar_scale", "row.hud_radar_scale", "cl_hud_radar_scale", "1.00", 0.8, 1.3, 0.01),
          slider("radar_icon_scale", "row.radar_icon_scale", "cl_radar_icon_scale_min", "0.60", 0.4, 1, 0.01)
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
        ]),
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
      section("movement", [
        group("group.kbm.movement", [
          bind("show_loadout_toggle_2", "row.show_loadout_toggle", "show_loadout_toggle", "scancode12", "I"),
          bind("move_forward_2", "row.move_forward", "+forward", "scancode26", "W"),
          bind("move_backward_2", "row.move_backward", "+back", "scancode22", "S"),
          bind("move_left_2", "row.move_left", "+left", "scancode4", "A"),
          bind("move_right_2", "row.move_right", "+right", "scancode7", "D"),
          bind("walk_2", "row.walk", "+sprint", "scancode225", "Left Shift"),
          bind("duck_2", "row.duck", "+duck", "scancode224", "Left Ctrl"),
          bind("jump_2", "row.jump", "+jump", "scancode44", "Space")
        ]),
        group("group.kbm.weapon", [
          bind("use", "row.use", "+use", "scancode8", "E"),
          bind("fire", "row.fire", "+attack", "mouse1", "MOUSE1"),
          bind("secondary_fire", "row.secondary_fire", "+attack2", "mouse2", "MOUSE2")
        ])
      ]),
      section("weapon", [
        group("group.kbm.weapon", [
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
          bind("reload", "row.reload", "+reload", "scancode21", "R"),
          bind("lastinv", "row.lastinv", "lastinv", "scancode20", "Q"),
          bind("invprev", "row.invprev", "invprev", "mwheelup", "MWHEELUP"),
          bind("invnext", "row.invnext", "invnext", "mwheeldown", "MWHEELDOWN")
        ])
      ]),
      section("ui", [
        group("group.kbm.ui", [
          bind("scoreboard", "row.scoreboard", "+showscores", "scancode43", "Tab"),
          bind("console", "row.console", "toggleconsole", "scancode53", "`"),
          bind("team_menu", "row.team_menu", "teammenu", "scancode16", "M"),
          bind("chat_all", "row.chat_all", "messagemode", "scancode28", "Y"),
          bind("chat_team", "row.chat_team", "messagemode2", "scancode24", "U"),
          bind("spray", "row.spray", "+spray_menu", "scancode23", "T")
        ])
      ]),
      section("communication", [
        group("group.kbm.communication", [
          bind("voice", "row.voice", "+voicerecord", "scancode14", "K"),
          bind("player_ping", "row.player_ping", "player_ping", "mouse3", "MOUSE3"),
          bind("radio1", "row.radio1", "radio", "scancode29", "Z"),
          bind("radio2", "row.radio2", "radio2", "scancode27", "X"),
          bind("radio3", "row.radio3", "radio3", "scancode6", "C")
        ])
      ]),
      section("chatwheel", [
        group("group.kbm.chatwheel", [
          bind("chatwheel1", "row.chatwheel1", "+radialradio", "scancode29", "Z"),
          bind("chatwheel2", "row.chatwheel2", "+radialradio2", "scancode27", "X"),
          bind("chatwheel3", "row.chatwheel3", "+radialradio3", "scancode6", "C")
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

function select(id, labelKey, command, defaultValue, options) {
  return { id, labelKey, type: "select", command, defaultValue, value: defaultValue, options };
}

function slider(id, labelKey, command, defaultValue, min, max, step) {
  return { id, labelKey, type: "slider", command, defaultValue, value: defaultValue, min, max, step };
}

function bind(id, labelKey, command, key, display) {
  return { id, labelKey, type: "bind", command, key, defaultKey: key, display, defaultDisplay: display };
}

const state = JSON.parse(JSON.stringify(defaults));
let currentLang = "en";
let currentCategory = "keyboard";
let currentSectionByCategory = Object.fromEntries(categoryOrder.map(id => [id, state[id].tabs[0].id]));
let captureTarget = null;

const mainTabs = document.querySelector("#mainTabs");
const subTabs = document.querySelector("#subTabs");
const pane = document.querySelector("#settingsPane");
const output = document.querySelector("#commandOutput");
const toast = document.querySelector("#captureToast");
const resetFirst = document.querySelector("#resetFirst");
const languageSwitcher = document.querySelector("#languageSwitcher");

function init() {
  renderAll();
  window.addEventListener("keydown", onKeyDown, true);
  window.addEventListener("mousedown", onMouseDown, true);
  window.addEventListener("contextmenu", (e) => captureTarget && e.preventDefault());
  resetFirst.addEventListener("change", updateCommand);
  document.querySelector("#copyCommand").addEventListener("click", copyCommand);
  document.querySelector("#resetApp").addEventListener("click", () => {
    resetState();
    stopCapture();
    renderAll();
  });
  document.querySelector("#presetTest").addEventListener("click", loadTestPreset);
  document.querySelector("#downloadCfg").addEventListener("click", downloadCfg);
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
  renderPane();
  updateCommand();
}

function renderStaticText() {
  document.querySelector(".settings-card").setAttribute("aria-label", t("app.title"));
  document.querySelector(".icon-search").setAttribute("aria-label", t("aria.search"));
  mainTabs.setAttribute("aria-label", t("aria.categories"));
  subTabs.setAttribute("aria-label", t("aria.sections"));
  languageSwitcher.setAttribute("aria-label", t("aria.language"));
  document.querySelector("[data-i18n='panel.title']").textContent = t("panel.title");
  document.querySelector("[data-i18n='panel.help']").textContent = t("panel.help");
  document.querySelector("#copyCommand").textContent = t("panel.copy");
  document.querySelector("[data-i18n='panel.resetFirst']").lastChild.textContent = ` ${t("panel.resetFirst")}`;
  document.querySelector("#resetApp").textContent = t("panel.resetUi");
  document.querySelector("#presetTest").textContent = t("panel.preset");
  document.querySelector("#downloadCfg").textContent = t("panel.download");
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

function renderMainTabs() {
  mainTabs.innerHTML = categoryOrder.map(id => `
    <button class="${id === currentCategory ? "active" : ""}" data-category="${id}">${t(`category.${id}`)}</button>
  `).join("");
  mainTabs.querySelectorAll("button").forEach(btn => btn.addEventListener("click", () => {
    currentCategory = btn.dataset.category;
    stopCapture();
    renderAll();
  }));
}

function renderSubTabs() {
  subTabs.innerHTML = state[currentCategory].tabs.map(tab => `
    <button class="${tab.id === currentSectionId() ? "active" : ""}" data-section="${tab.id}">${t(tab.labelKey)}</button>
  `).join("");
  subTabs.querySelectorAll("button").forEach(btn => btn.addEventListener("click", () => {
    currentSectionByCategory[currentCategory] = btn.dataset.section;
    stopCapture();
    renderSubTabs();
    renderPane();
  }));
}

function renderPane() {
  const sectionData = state[currentCategory].sections.find(section => section.id === currentSectionId());
  pane.innerHTML = sectionData.groups.map(group => `
    <h2 class="group-title">${t(group.titleKey)}</h2>
    ${group.rows.map(rowTemplate).join("")}
  `).join("");

  pane.querySelectorAll("[data-bind-id]").forEach(cell => cell.addEventListener("click", () => startCapture(cell.dataset.bindId, cell)));
  pane.querySelectorAll("select[data-setting-id]").forEach(sel => sel.addEventListener("change", e => {
    const row = findRow(e.target.dataset.settingId);
    row.value = e.target.value;
    updateCommand();
  }));
  pane.querySelectorAll("input[type=range][data-setting-id]").forEach(range => range.addEventListener("input", e => {
    const row = findRow(e.target.dataset.settingId);
    row.value = formatByStep(e.target.value, row.step);
    const number = pane.querySelector(`input[type=number][data-setting-id="${row.id}"]`);
    if (number) number.value = row.value;
    updateCommand();
  }));
  pane.querySelectorAll("input[type=number][data-setting-id]").forEach(number => number.addEventListener("change", e => {
    const row = findRow(e.target.dataset.settingId);
    const min = Number(row.min), max = Number(row.max);
    let val = Number(e.target.value || row.defaultValue);
    val = Math.min(max, Math.max(min, val));
    row.value = formatByStep(val, row.step);
    e.target.value = row.value;
    const range = pane.querySelector(`input[type=range][data-setting-id="${row.id}"]`);
    if (range) range.value = row.value;
    updateCommand();
  }));
}

function rowTemplate(row) {
  if (row.type === "bind") {
    return `<div class="setting-row"><div class="row-label">${t(row.labelKey)}</div><div class="value-cell keybind" data-bind-id="${row.id}">${row.display}</div></div>`;
  }
  if (row.type === "select") {
    return `<div class="setting-row"><div class="row-label">${t(row.labelKey)}</div><div class="select-wrap"><select data-setting-id="${row.id}">${row.options.map(option => `<option value="${option.value}" ${option.value === row.value ? "selected" : ""}>${t(option.labelKey)}</option>`).join("")}</select></div></div>`;
  }
  if (row.type === "slider") {
    return `<div class="setting-row"><div class="row-label">${t(row.labelKey)}</div><div class="value-cell slider-cell"><input type="range" min="${row.min}" max="${row.max}" step="${row.step}" value="${row.value}" data-setting-id="${row.id}"><input class="num-box" type="number" min="${row.min}" max="${row.max}" step="${row.step}" value="${row.value}" data-setting-id="${row.id}"></div></div>`;
  }
  return "";
}

function formatByStep(value, step) {
  const decimals = String(step).includes(".") ? String(step).split(".")[1].length : 0;
  return Number(value).toFixed(decimals);
}

function findRow(id) {
  return allRows().find(row => row.id === id);
}

function allRows() {
  return Object.values(state).flatMap(category => category.sections.flatMap(section => section.groups.flatMap(group => group.rows)));
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
  const changedSettings = rows.filter(row => (row.type === "select" || row.type === "slider") && String(row.value) !== String(row.defaultValue));

  if (resetFirst.checked) commands.push("binddefaults");

  const unbinds = new Set();
  for (const row of changedBinds) {
    unbinds.add(row.defaultKey);
    unbinds.add(row.key);

    const occupiedBy = rows.filter(other => other.type === "bind" && other.defaultKey === row.key && other.id !== row.id);
    occupiedBy.forEach(other => unbinds.add(other.defaultKey));
  }
  unbinds.forEach(key => commands.push(`unbind ${key}`));
  changedBinds.forEach(row => commands.push(`bind ${row.key} ${quoteCommand(row.command)}`));
  changedSettings.forEach(row => commands.push(`${row.command} ${valueLiteral(row.value)}`));
  commands.push("host_writeconfig");

  output.value = commands.join("; ");
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

function resetState() {
  const fresh = JSON.parse(JSON.stringify(defaults));
  for (const key of Object.keys(state)) delete state[key];
  Object.assign(state, fresh);
  currentSectionByCategory = Object.fromEntries(categoryOrder.map(id => [id, state[id].tabs[0].id]));
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
