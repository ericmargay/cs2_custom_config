import { NAVIGATION_KEYS, advanceExplorer } from './navigation.mjs?v=20260919-mirage3';
import { DUST2, WEAPONS, AGENT, WORLD, ENVIRONMENTS, DEFAULT_ENVIRONMENT } from './assets.mjs?v=20260919-mirage3';
import { VIEWMODEL, RADAR, normalizeSettings, previewEditState, radarTransform, projectRadar, clampMarker, clamp, viewmodelCommands, radarCommands } from './settings.mjs?v=20260919-mirage3';

const COPY = {
  es: {
    mirageNote: 'Mirage de CS2 en 3D · Geometría original del archivo suministrado, sin texturas. Material neutro e iluminación provisional para explorar el mapa. Vuelo libre sin colisiones. Arma y brazos aproximados.',
    environment: 'Escenario', staticLook: 'Fondo estático de CS2 · Arma y radar interactivos', staticAngle: 'Dirección del radar',
    staticNote: 'Capturas reales de Dust II de CS2, con cámaras elevadas. Fondo provisional: no representa la cámara del jugador ni gira con el radar. Arma y brazos en 3D con postura aproximada. El mapa 3D de CS2 con materiales completos sigue pendiente.',
    staticCredits: 'Fondo CS2: Valve / MurkyYT', backdropError: 'No se pudo cargar el fondo. Cambia de vista para reintentar.',
    radarStatic: 'Usa Dirección del radar para probar su rotación. Los jugadores son ejemplos; no están vinculados a la cámara de la captura.',
    title: 'Vista de partida', viewmodel: 'Escenario y arma en primera persona', aspect: 'Pantalla', weapon: 'Arma',
    stretched: '4:3 estirado', expand: 'Ampliar', close: 'Salir de pantalla completa', arms: 'Brazos Miami',
    compare: 'Ver ajustes iniciales', comparing: 'Ajustes iniciales', current: 'Tus ajustes',
    returnToCurrent: 'Volver a tus ajustes', comparingHint: 'Comparando valores iniciales. Al editar vuelves a tus ajustes.',
    copy: 'Copiar View Setup', copied: 'Copiado', copyError: 'No se pudo copiar. Usa la línea de consola.',
    loading: 'Cargando escenario, arma y brazos…', error: 'Algún recurso 3D no se pudo cargar. Puedes reintentar.', retry: 'Reintentar',
    look: 'Clic en la escena · WASD mover · Q/E bajar/subir · Shift acelerar · Arrastra para mirar · Esc salir', resetCamera: 'Volver al lugar', equip: 'Repetir equipamiento',
    note: 'Escenario: Dust II clásico, anterior a CS2. Navegación en vuelo libre, sin colisiones. Brazos Miami adaptados; postura y transición de equipamiento aproximadas. El radar conserva el plano de CS2: algunos detalles del mapa no coinciden.',
    player: 'Lugar del mapa', angle: 'Dirección', alternate: 'Zoom alternativo', scoreboard: 'Marcador',
    mapError: 'No se pudo cargar el plano del radar.', radarLabel: 'Radar con jugadores de ejemplo.',
    credits: 'Armas: blazitt', agentCredits: 'Brazos: gettan', worldCredits: 'Mapa: vrchris', mirageCredits: 'Mapa: Kyrsia',
    openVm: 'Ajustar arma', openRadar: 'Ajustar radar',
    radarFull: 'Radar cuadrado: plano completo. Desactiva Marcador o Forzar forma cuadrada para probar zoom, centrado y rotación.',
    radarDynamic: 'Zoom dinámico: el encuadre depende de los jugadores de ejemplo; el zoom manual funciona como límite.',
    radarLive: 'Radar en vivo. Arrastra la escena para probar la rotación. La escala de iconos establece su tamaño mínimo.'
  },
  en: {
    mirageNote: 'CS2 Mirage in 3D · Original geometry from the supplied file, without textures. Neutral material and provisional lighting for map exploration. Free flight without collision. Approximate weapon and arms.',
    environment: 'Environment', staticLook: 'Static CS2 backdrop · Interactive weapon and radar', staticAngle: 'Radar heading',
    staticNote: 'Real CS2 Dust II screenshots from elevated cameras. Temporary backdrop: it is not the player camera and does not rotate with the radar. 3D weapon and arms use an approximate pose. A textured CS2 3D map is still pending.',
    staticCredits: 'CS2 backdrop: Valve / MurkyYT', backdropError: 'Could not load the backdrop. Switch views to retry.',
    radarStatic: 'Use Radar heading to test rotation. Players are samples, independent of the screenshot camera.',
    title: 'In-game preview', viewmodel: 'First-person world and weapon', aspect: 'Screen', weapon: 'Weapon',
    stretched: '4:3 stretched', expand: 'Expand', close: 'Exit fullscreen', arms: 'Miami arms',
    compare: 'Show defaults', comparing: 'Default settings', current: 'Your settings',
    returnToCurrent: 'Back to your settings', comparingHint: 'Comparing defaults. Editing returns to your settings.',
    copy: 'Copy View Setup', copied: 'Copied', copyError: 'Could not copy. Use the console line.',
    loading: 'Loading world, weapon and arms…', error: 'A 3D asset could not load. You can retry.', retry: 'Retry',
    look: 'Click scene · WASD move · Q/E down/up · Shift faster · Drag to look · Esc exit', resetCamera: 'Reset position', equip: 'Replay equip',
    note: 'Scene: classic Dust II, predating CS2. Free-flight navigation without collision. Adapted Miami arms; approximate pose and equip transition. The radar uses the CS2 overview: some map details differ.',
    player: 'Map location', angle: 'Heading', alternate: 'Alternate zoom', scoreboard: 'Scoreboard',
    mapError: 'Could not load the radar overview.', radarLabel: 'Radar with sample players.',
    credits: 'Weapons: blazitt', agentCredits: 'Arms: gettan', worldCredits: 'Map: vrchris', mirageCredits: 'Map: Kyrsia',
    openVm: 'Adjust weapon', openRadar: 'Adjust radar',
    radarFull: 'Square radar: full overview. Turn off Scoreboard or Force Square Shape to test zoom, centering and rotation.',
    radarDynamic: 'Dynamic zoom: framing follows the sample players; manual zoom acts as a limit.',
    radarLive: 'Live radar. Drag the scene to test rotation. Icon scale sets the minimum icon size.'
  }
};

export function previewTemplate() { return '<div id="previewStudioMount"></div>'; }

export class PreviewStudio {
  constructor(mount, { controlGroup, lang, onNavigate, onCopy, onWeaponChange, preferences }) {
    this.mode = 'viewsetup';
    this.controlGroup = controlGroup;
    this.lang = lang;
    this.copy = COPY[lang] || COPY.en;
    this.preferences = preferences;
    this.values = {};
    this.navigationKeys = new Set();
    this.map = ENVIRONMENTS[preferences.environment || DEFAULT_ENVIRONMENT]?.map || DUST2;
    this.player = { ...this.map.positions.find(p => p.id === preferences.position) || this.map.positions[0] };
    this.player.yaw = preferences.yaw ?? this.player.yaw;
    this.player.pitch = preferences.pitch ?? 0;
    this.disposed = false;
    this.isVisible = false;
    this.element = document.createElement('div');
    this.element.id = 'previewStudio';
    this.element.className = 'preview-studio';
    this.element.dataset.mode = 'viewsetup';
    const c = this.copy;
    this.element.innerHTML = `
      <div class="studio-header">
        <div><span class="studio-eyebrow">VIEW SETUP / DUST II</span><h2>${c.title}</h2></div>
        <button type="button" class="studio-link" data-studio="navigate"></button>
      </div>
      <div class="studio-toolbar">
        <label>${c.environment}<select data-studio="environment">${Object.entries(ENVIRONMENTS).map(([id, scene]) => `<option value="${id}">${scene.name[lang] || scene.name.en}</option>`).join('')}</select></label>
        <label>${c.weapon}<select data-studio="weapon">${Object.entries(WEAPONS).map(([id, weapon]) => `<option value="${id}">${weapon.name}</option>`).join('')}</select></label>
        <label>${c.aspect}<select data-studio="aspect"><option value="16:9">16:9</option><option value="4:3">4:3</option><option value="stretched">${c.stretched}</option></select></label>
        <button type="button" data-studio="arms" aria-pressed="true">${c.arms}</button>
        <button type="button" data-studio="compare" aria-pressed="false">${c.compare}</button>
        <button type="button" data-studio="fullscreen">${c.expand} ⛶</button>
      </div>
      <div class="studio-screen">
        <div class="studio-viewport" data-aspect="16:9" tabindex="0" aria-label="${c.look}">
          <img class="studio-backdrop" alt="" draggable="false">
          <canvas class="studio-weapon" aria-label="${c.viewmodel}"></canvas>
          <div class="studio-radar-wrap"><span class="studio-location">Dust II</span><canvas class="studio-radar" aria-label="${c.radarLabel}" role="img"></canvas></div>
          <div class="studio-time" aria-hidden="true"><span>5</span><b>1:55</b><span>5</span></div>
          <canvas class="studio-reticle" aria-hidden="true"></canvas>
          <div class="studio-hud" aria-hidden="true"><span>100 <small>HP</small></span><span class="studio-ammo"></span></div>
          <span class="studio-state">${c.current}</span>
          <div class="studio-load" role="status"><span>${c.loading}</span><button type="button" data-studio="retry" hidden>${c.retry}</button></div>
        </div>
      </div>
      <div class="studio-simulation">
        <label>${c.player}<select data-studio="position">${this.map.positions.map(p => `<option value="${p.id}">${p.name}</option>`).join('')}</select></label>
        <label class="studio-heading"><span data-studio="angle-label">${c.angle}</span> <output aria-hidden="true">90°</output><input aria-label="${c.angle}" data-studio="yaw" type="range" min="0" max="360" step="1" value="90"></label>
        <button type="button" data-studio="alternate" aria-pressed="false">${c.alternate}</button>
        <button type="button" data-studio="scoreboard" aria-pressed="false">${c.scoreboard}</button>
        <button type="button" data-studio="reset-camera">${c.resetCamera}</button>
        <button type="button" data-studio="equip">${c.equip}</button>
      </div>
      <p class="studio-note studio-radar-hint" role="status"></p>
      <div class="studio-footer"><span class="studio-fidelity">${c.look}</span><button type="button" data-studio="copy">${c.copy}</button></div>
      <p class="studio-note studio-scene-note">${c.note}</p>
      <div class="studio-credits"><a data-credit="weapon" href="${WEAPONS.m4a1s.source}" target="_blank" rel="noopener noreferrer">${c.credits}</a><a href="${AGENT.source}" target="_blank" rel="noopener noreferrer">${c.agentCredits}</a><a data-credit="world" href="${WORLD.source}" target="_blank" rel="noopener noreferrer">${c.worldCredits}</a><span>3D: CC BY 4.0 · Counter-Strike © Valve</span></div>`;
    mount.replaceWith(this.element);
    this.viewport = this.element.querySelector('.studio-viewport');
    this.radar = this.element.querySelector('.studio-radar');
    this.status = this.element.querySelector('.studio-load');
    this.backdrop = this.element.querySelector('.studio-backdrop');
    this.backdrop.onload = () => { if (!this.disposed) this.element.querySelector('.studio-fidelity').textContent = this.environment === 'cs2' ? c.staticLook : c.look; };
    this.backdrop.onerror = () => { if (!this.disposed) this.element.querySelector('.studio-fidelity').textContent = c.backdropError; };
    this.button('environment').onchange = event => this.setEnvironment(event.target.value);
    this.setEnvironment(preferences.environment || DEFAULT_ENVIRONMENT);
    this.button('aspect').value = preferences.aspect || '16:9';
    this.button('position').value = this.player.id;
    this.syncHeading();
    this.setControlGroup(controlGroup);
    this.button('navigate').onclick = () => onNavigate(this.controlGroup === 'viewmodel' ? 'radar' : 'viewmodel');
    this.button('weapon').onchange = event => onWeaponChange(event.target.value);
    this.button('aspect').onchange = event => { preferences.aspect = event.target.value; this.update(this.values); };
    this.button('arms').setAttribute('aria-pressed', String(preferences.arms !== false));
    this.button('arms').onclick = () => {
      preferences.arms = preferences.arms === false;
      this.button('arms').setAttribute('aria-pressed', String(preferences.arms));
      this.weapon?.setArmsVisible(preferences.arms);
    };
    this.button('equip').onclick = () => this.weapon?.playAnimation('equip');
    this.button('compare').onclick = () => {
      this.comparing = !this.comparing;
      this.update(this.values);
    };
    this.button('fullscreen').onclick = async () => {
      try {
        if (this.element.classList.contains('studio-expanded')) this.element.classList.remove('studio-expanded');
        else if (document.fullscreenElement) await document.exitFullscreen();
        else await this.element.requestFullscreen();
      } catch { this.element.classList.toggle('studio-expanded'); }
      this.onFullscreen();
    };
    this.onFullscreen = () => {
      this.button('fullscreen').textContent = document.fullscreenElement === this.element || this.element.classList.contains('studio-expanded') ? c.close : `${c.expand} ⛶`;
      this.resize();
    };
    document.addEventListener('fullscreenchange', this.onFullscreen);
    this.onEscape = event => {
      if (event.key === 'Escape' && this.element.classList.contains('studio-expanded')) {
        this.element.classList.remove('studio-expanded'); this.onFullscreen();
      }
    };
    document.addEventListener('keydown', this.onEscape);
    this.button('reset-camera').onclick = () => {
      this.stopNavigation();
      this.player = { ...this.map.positions.find(p => p.id === this.player.id) || this.map.positions[0], pitch: 0 };
      this.updatePlayer();
    };
    this.button('position').onchange = event => {
      this.stopNavigation();
      this.player = { ...this.map.positions.find(p => p.id === event.target.value), pitch: 0 };
      preferences.position = this.player.id;
      this.updatePlayer();
    };
    this.button('yaw').oninput = event => { this.player.yaw = Number(event.target.value); this.updatePlayer(); };
    this.viewport.onpointerdown = event => {
      if (ENVIRONMENTS[this.environment].kind !== 'world' || event.button !== 0 || event.target.closest('button')) return;
      this.drag = { id: event.pointerId, x: event.clientX, y: event.clientY };
      this.viewport.setPointerCapture(event.pointerId);
      this.viewport.focus({ preventScroll: true });
    };
    this.viewport.onpointermove = event => {
      if (this.drag?.id !== event.pointerId) return;
      this.player.yaw = (this.player.yaw - (event.clientX - this.drag.x) * 0.18 + 360) % 360;
      this.player.pitch = clamp(this.player.pitch - (event.clientY - this.drag.y) * 0.18, -70, 70);
      this.drag = { id: event.pointerId, x: event.clientX, y: event.clientY };
      this.updatePlayer();
    };
    this.viewport.onpointerup = this.viewport.onpointercancel = this.viewport.onlostpointercapture = () => { this.drag = null; };
    this.viewport.onkeyup = event => { this.navigationKeys.delete(event.code); };
    this.viewport.onblur = () => this.stopNavigation();
    this.onWindowBlur = () => this.stopNavigation();
    window.addEventListener('blur', this.onWindowBlur);
    this.viewport.onkeydown = event => {
      if (event.target === this.viewport && event.key === 'Escape') { this.stopNavigation(); this.viewport.blur(); return; }
      if (ENVIRONMENTS[this.environment].kind === 'world' && event.target === this.viewport && NAVIGATION_KEYS.has(event.code)) {
        event.preventDefault();
        this.navigationKeys.add(event.code);
        this.startNavigation();
        return;
      }
      if (ENVIRONMENTS[this.environment].kind !== 'world' || event.target !== this.viewport || !['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) return;
      event.preventDefault();
      this.player.yaw = (this.player.yaw + (event.key === 'ArrowLeft' ? 3 : event.key === 'ArrowRight' ? -3 : 0) + 360) % 360;
      this.player.pitch = clamp(this.player.pitch + (event.key === 'ArrowUp' ? 3 : event.key === 'ArrowDown' ? -3 : 0), -70, 70);
      this.updatePlayer();
    };
    for (const key of ['alternate', 'scoreboard']) this.button(key).onclick = () => {
      this[key] = !this[key]; this.button(key).setAttribute('aria-pressed', String(this[key])); this.drawRadar();
    };
    this.button('copy').onclick = async () => {
      const commands = [...viewmodelCommands(this.values), ...radarCommands(this.values)];
      const ok = await onCopy(commands.join('; '));
      if (this.disposed) return;
      this.button('copy').textContent = ok ? c.copied : c.copyError;
      clearTimeout(this.copyTimer);
      this.copyTimer = setTimeout(() => { if (!this.disposed) this.button('copy').textContent = c.copy; }, 2400);
    };
    this.button('retry').onclick = () => {
      this.weapon?.dispose();
      // A disposed renderer loses its WebGL context; retry on a fresh canvas.
      const canvas = this.element.querySelector('.studio-weapon');
      canvas.replaceWith(canvas.cloneNode(false));
      this.weapon = null; this.weaponFailed = false; this.ensureWeapon();
    };
    this.mapImage = new Image();
    this.mapImage.onload = () => { if (!this.disposed) this.drawRadar(); };
    this.mapImage.onerror = () => { if (!this.disposed) this.element.querySelector('.studio-fidelity').textContent = c.mapError; };
    this.mapImage.src = this.map.image;
    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(this.viewport);
    this.intersectionObserver = new IntersectionObserver(entries => {
      this.isVisible = entries[0].isIntersecting;
      if (!this.isVisible) this.stopNavigation();
      this.weapon?.setActive(this.isVisible && !document.hidden);
      if (this.isVisible) { this.ensureWeapon(); this.resize(); }
    }, { rootMargin: '100px' });
    this.intersectionObserver.observe(this.element);
    this.onVisibility = () => {
      if (document.hidden) this.stopNavigation();
      this.weapon?.setActive(this.isVisible && !document.hidden);
    };
    document.addEventListener('visibilitychange', this.onVisibility);
  }

  startNavigation() {
    if (this.navigationFrame || !this.weapon?.getCameraPosition() || this.disposed) return;
    this.player = advanceExplorer({ ...this.player, ...this.weapon.getCameraPosition() }, this.navigationKeys, 1 / 60);
    this.updatePlayer();
    let previous = performance.now();
    const tick = now => {
      this.navigationFrame = null;
      if (this.disposed || !this.isVisible || document.hidden || document.activeElement !== this.viewport || ENVIRONMENTS[this.environment].kind !== 'world') { this.stopNavigation(); return; }
      const position = this.weapon.getCameraPosition();
      if (!position || !this.navigationKeys.size) return;
      this.player = advanceExplorer({ ...this.player, ...position }, this.navigationKeys, previous == null ? 0 : (now - previous) / 1000);
      previous = now;
      this.updatePlayer();
      this.navigationFrame = requestAnimationFrame(tick);
    };
    this.navigationFrame = requestAnimationFrame(tick);
  }
  stopNavigation() {
    this.navigationKeys.clear();
    cancelAnimationFrame(this.navigationFrame);
    this.navigationFrame = null;
  }
  setEnvironment(id) {
    this.stopNavigation();
    this.environment = Object.hasOwn(ENVIRONMENTS, id) ? id : DEFAULT_ENVIRONMENT;
    this.preferences.environment = this.environment;
    const previousMap = this.map;
    this.map = ENVIRONMENTS[this.environment].map;
    if (previousMap !== this.map) this.player = { ...this.map.positions.find(p => p.id === this.player.id) || this.map.positions[0], pitch: 0 };
    if (this.mapImage && this.mapImage.getAttribute('src') !== this.map.image) this.mapImage.src = this.map.image;
    this.element.querySelector('.studio-eyebrow').textContent = `VIEW SETUP / ${this.map.name.toUpperCase()}`;
    this.element.querySelector('.studio-location').textContent = this.map.name;
    this.radar.setAttribute('aria-label', `${this.map.name} · ${this.copy.radarLabel}`);
    const scene = ENVIRONMENTS[this.environment], staticScene = scene.kind === 'image';
    this.viewport.dataset.environment = this.environment;
    this.viewport.setAttribute('aria-label', staticScene ? this.copy.staticLook : this.copy.look);
    this.button('environment').value = this.environment;
    this.button('reset-camera').hidden = staticScene;
    if (staticScene) delete this.player.elevation;
    this.button('angle-label').textContent = staticScene ? this.copy.staticAngle : this.copy.angle;
    this.button('yaw').setAttribute('aria-label', staticScene ? this.copy.staticAngle : this.copy.angle);
    this.button('position').innerHTML = this.map.positions.filter(p => !staticScene || scene.backgrounds[p.id]).map(p => `<option value="${p.id}">${p.name}</option>`).join('');
    if (staticScene && !scene.backgrounds[this.player.id]) this.player = { ...this.map.positions[0], pitch: 0 };
    this.button('position').value = this.player.id;
    this.preferences.position = this.player.id;
    this.element.querySelector('.studio-fidelity').textContent = staticScene ? this.copy.staticLook : this.copy.look;
    this.element.querySelector('.studio-scene-note').textContent = staticScene ? this.copy.staticNote : this.environment === 'mirage' ? this.copy.mirageNote : this.copy.note;
    const credit = this.element.querySelector('[data-credit="world"]');
    credit.href = scene.source;
    credit.textContent = staticScene ? this.copy.staticCredits : this.environment === 'mirage' ? this.copy.mirageCredits : this.copy.worldCredits;
    this.drag = null;
    this.weapon?.setEnvironment(this.environment);
    this.updatePlayer();
  }
  updateBackdrop() {
    const scene = ENVIRONMENTS[this.environment];
    const src = scene.kind === 'image' ? scene.backgrounds[this.player.id] : this.map.background;
    this.backdrop.hidden = !src;
    if (src && this.backdrop.getAttribute('src') !== src) this.backdrop.src = src;
  }
  button(name) { return this.element.querySelector(`[data-studio="${name}"]`); }
  setControlGroup(group) {
    this.controlGroup = group;
    this.button('navigate').textContent = `${group === 'viewmodel' ? this.copy.openRadar : this.copy.openVm} ↗`;
  }
  syncHeading() {
    this.button('yaw').value = Math.round(this.player.yaw);
    this.element.querySelector('output').value = `${Math.round(this.player.yaw)}°`;
  }
  updatePlayer() {
    this.updateBackdrop();
    this.preferences.yaw = this.player.yaw;
    this.preferences.pitch = this.player.pitch;
    this.syncHeading();
    this.weapon?.setPlayer(this.player);
    this.drawRadar();
  }
  update(values) {
    if (this.settings) Object.assign(this, previewEditState(this.values, values, this));
    this.values = values;
    this.button('compare').setAttribute('aria-pressed', String(!!this.comparing));
    this.button('compare').textContent = this.comparing ? this.copy.returnToCurrent : this.copy.compare;
    this.button('compare').title = this.comparing ? this.copy.comparingHint : '';
    this.button('copy').disabled = !!this.comparing;
    this.element.querySelector('.studio-state').textContent = this.comparing ? this.copy.comparing : this.copy.current;
    for (const key of ['alternate', 'scoreboard']) this.button(key).setAttribute('aria-pressed', String(!!this[key]));
    this.settings = this.comparing ? { ...values, ...Object.fromEntries(Object.entries({ ...VIEWMODEL, ...RADAR }).map(([k, s]) => [k, s.value])) } : values;
    this.aspectMode = this.preferences.aspect || '16:9';
    this.viewport.dataset.aspect = this.aspectMode;
    this.viewport.style.aspectRatio = this.aspectMode === '4:3' ? '4 / 3' : '16 / 9';
    this.weaponId = values.__viewmodel_weapon in WEAPONS ? values.__viewmodel_weapon : 'm4a1s';
    this.button('weapon').value = this.weaponId;
    this.element.querySelector('[data-credit="weapon"]').href = WEAPONS[this.weaponId].source;
    this.element.querySelector('.studio-ammo').textContent = `${WEAPONS[this.weaponId].name}   ${WEAPONS[this.weaponId].ammo}`;
    if (this.weapon && this.weapon.selected !== this.weaponId) this.weapon.select(this.weaponId);
    if (this.isVisible) this.ensureWeapon();
    this.resize();
  }
  setStatus(status) {
    if (this.disposed) return;
    this.status.hidden = status === 'ready';
    this.status.querySelector('span').textContent = this.copy[status] || '';
    this.button('retry').hidden = status !== 'error';
  }
  async ensureWeapon() {
    if (!this.isVisible || this.disposed || this.weapon || this.weaponLoading || this.weaponFailed) return;
    this.weaponLoading = true;
    this.setStatus('loading');
    try {
      const { WeaponRenderer } = await import('./weapon.mjs?v=20260919-mirage3');
      if (this.disposed) return;
      this.weapon = new WeaponRenderer(this.element.querySelector('.studio-weapon'), state => this.setStatus(state), { environment: this.environment });
      this.weapon.setActive(this.isVisible && !document.hidden);
      this.weapon.setArmsVisible(this.preferences.arms !== false);
      this.weapon.setPlayer(this.player);
      this.resize();
      await this.weapon.select(this.weaponId || 'm4a1s');
    } catch (error) {
      this.weaponFailed = true; this.setStatus('error'); console.warn('Scene preview unavailable', error);
    } finally { this.weaponLoading = false; }
  }
  resize() {
    if (this.disposed || !this.settings) return;
    const width = this.viewport.clientWidth, height = this.viewport.clientHeight;
    if (!width || !height) return;
    const aspect = this.aspectMode === '16:9' ? 16 / 9 : 4 / 3;
    this.weapon?.update(this.settings, width, height, aspect);
    const s = normalizeSettings(this.settings, RADAR);
    const diameter = height * 0.255 * s.cl_hud_radar_scale * s.hud_scaling;
    this.radar.style.width = `${diameter * (this.aspectMode === 'stretched' ? 4 / 3 : 1)}px`;
    this.radar.style.height = `${diameter}px`;
    this.drawRadar(); this.drawCrosshair();
  }
  drawRadar() {
    if (this.disposed || !this.settings) return;
    const ctx = this.radar.getContext('2d');
    if (!ctx) return;
    const size = Math.max(1, Math.round(this.radar.clientHeight * Math.min(devicePixelRatio || 1, 2)));
    this.radar.width = this.radar.height = size;
    ctx.setTransform(size, 0, 0, size, 0, 0);
    const s = normalizeSettings(this.settings, RADAR);
    const transform = radarTransform(s, this.map, this.player, this.map.markers, this);
    this.transform = transform;
    const hint = this.element.querySelector('.studio-radar-hint');
    const hintText = this.copy[transform.square ? 'radarFull' : s.cl_radar_scale_dynamic ? 'radarDynamic' : this.environment === 'cs2' ? 'radarStatic' : 'radarLive'];
    if (hint.textContent !== hintText) hint.textContent = hintText;
    ctx.save();
    ctx.beginPath();
    if (transform.square) ctx.rect(0, 0, 1, 1); else ctx.arc(0.5, 0.5, 0.494, 0, Math.PI * 2);
    ctx.clip();
    ctx.fillStyle = `rgba(10,14,17,${s.cl_hud_radar_background_alpha})`;
    ctx.fillRect(0, 0, 1, 1);
    if (this.mapImage.complete && this.mapImage.naturalWidth) {
      ctx.save();
      ctx.translate(0.5, 0.5);
      ctx.rotate(transform.rotation);
      ctx.scale(transform.scale, transform.scale);
      ctx.globalCompositeOperation = s.cl_hud_radar_map_additive ? 'lighter' : 'source-over';
      ctx.drawImage(this.mapImage, -transform.center.x, -transform.center.y, this.map.size, this.map.size);
      ctx.restore();
    }
    const icon = 0.025 * Math.max(s.cl_radar_icon_scale_min, transform.zoom);
    for (const site of this.map.sites) {
      const p = projectRadar(site, this.map, transform);
      ctx.font = 'bold 0.065px Arial';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillStyle = '#ffc45e';
      ctx.fillText(site.label, p.x, p.y);
    }
    for (const marker of this.map.markers) {
      const original = projectRadar(marker, this.map, transform);
      const p = clampMarker(original, transform.square, icon + 0.012);
      const clipped = Math.hypot(original.x - p.x, original.y - p.y) > 0.001;
      ctx.fillStyle = marker.color;
      ctx.strokeStyle = '#182029'; ctx.lineWidth = 0.008;
      ctx.beginPath(); ctx.arc(p.x, p.y, icon, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
      if (clipped) {
        const angle = Math.atan2(original.y - p.y, original.x - p.x);
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p.x + Math.cos(angle) * icon * 1.5, p.y + Math.sin(angle) * icon * 1.5);
        ctx.strokeStyle = marker.color; ctx.lineWidth = 0.012; ctx.stroke();
      }
    }
    const p = clampMarker(projectRadar(this.player, this.map, transform), transform.square, 0.03);
    const heading = -this.player.yaw * Math.PI / 180 + transform.rotation;
    ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(heading);
    ctx.fillStyle = 'rgba(255,255,255,.12)';
    ctx.beginPath(); ctx.moveTo(0, 0); ctx.arc(0, 0, 0.17, -Math.PI / 4, Math.PI / 4); ctx.closePath(); ctx.fill();
    ctx.fillStyle = '#fff'; ctx.strokeStyle = '#14202a'; ctx.lineWidth = 0.008;
    ctx.beginPath(); ctx.moveTo(icon * 1.6, 0); ctx.lineTo(-icon, -icon); ctx.lineTo(-icon * 0.5, 0); ctx.lineTo(-icon, icon); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.restore(); ctx.restore();
    ctx.strokeStyle = 'rgba(255,255,255,.45)'; ctx.lineWidth = 0.009;
    ctx.beginPath();
    if (transform.square) ctx.rect(0.005, 0.005, 0.99, 0.99); else ctx.arc(0.5, 0.5, 0.494, 0, Math.PI * 2);
    ctx.stroke();
  }

  drawCrosshair() {
    const canvas = this.element.querySelector('.studio-reticle'), ctx = canvas.getContext('2d');
    if (!ctx) return;
    const scale = this.viewport.clientHeight / 480;
    const dpr = Math.min(devicePixelRatio || 1, 2);
    canvas.width = canvas.height = Math.ceil(80 * dpr);
    canvas.style.width = canvas.style.height = '80px';
    ctx.setTransform(dpr, 0, 0, dpr, 40 * dpr, 40 * dpr);
    const number = (key, fallback) => Number.isFinite(Number(this.settings[key])) ? Number(this.settings[key]) : fallback;
    const s = this.settings;
    const colors = ['#ff4444', '#00ff00', '#ffff00', '#3066ff', '#00ffff'];
    ctx.fillStyle = colors[number('cl_crosshaircolor', 5)] || `rgb(${number('cl_crosshaircolor_r', 255)},${number('cl_crosshaircolor_g', 0)},${number('cl_crosshaircolor_b', 0)})`;
    ctx.globalAlpha = Number(s.cl_crosshairusealpha) ? number('cl_crosshairalpha', 255) / 255 : 1;
    const length = Math.max(0, number('cl_crosshairsize', 1.5) * 2 * scale);
    const thickness = Math.max(scale, number('cl_crosshairthickness', 0.5) * 2 * scale);
    const gap = Math.max(0, (4 + number('cl_crosshairgap', -5)) * scale);
    const rect = (x, y, w, h) => {
      if (Number(s.cl_crosshair_drawoutline)) {
        ctx.strokeStyle = '#000'; ctx.lineWidth = Math.max(1, number('cl_crosshair_outlinethickness', 1) * 2 * scale);
        ctx.strokeRect(x, y, w, h);
      }
      ctx.fillRect(x, y, w, h);
    };
    rect(gap, -thickness / 2, length, thickness); rect(-gap - length, -thickness / 2, length, thickness);
    rect(-thickness / 2, gap, thickness, length);
    if (!Number(s.cl_crosshair_t)) rect(-thickness / 2, -gap - length, thickness, length);
    if (Number(s.cl_crosshairdot)) rect(-thickness / 2, -thickness / 2, thickness, thickness);
  }

  dispose() {
    this.disposed = true;
    this.stopNavigation();
    window.removeEventListener('blur', this.onWindowBlur);
    this.backdrop.onload = this.backdrop.onerror = null;
    this.resizeObserver.disconnect();
    this.intersectionObserver.disconnect();
    document.removeEventListener('fullscreenchange', this.onFullscreen);
    document.removeEventListener('keydown', this.onEscape);
    document.removeEventListener('visibilitychange', this.onVisibility);
    clearTimeout(this.copyTimer);
    this.mapImage.onload = this.mapImage.onerror = null;
    this.weapon?.dispose();
  }
}
