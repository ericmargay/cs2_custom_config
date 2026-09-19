# Vista de arma y radar

Esta implementación es un simulador de ajustes, todavía **no una reproducción
1:1 de CS2**. No necesita ejecutar el juego para manipular el arma o el radar.
La comprobación de fidelidad final sí necesita referencias tomadas en CS2.

## Disponible

- Categoría **VIEW SETUP**, con pestañas **MINIMAPA** (`/#viewsetup`) y
  **VIEW MODEL** (`/#viewsetup/viewmodel`). Los enlaces y presets anteriores
  migran a esta categoría. Ambas pestañas conservan el mismo visualizador,
  cámara y recursos cargados; solamente cambian los ajustes laterales.
- Radar pequeño en la esquina superior izquierda sobre la escena 3D. El
  jugador del radar comparte posición y dirección con la cámara del escenario.
- Selector de escenario: **Mirage · CS2 3D (sin texturas)** por defecto,
  y **Dust II clásico · 3D** como alternativa.
  **Dust II · CS2 (fondo estático)** queda como referencia opcional con
  capturas originales de Mid/A/B.
  Las capturas usan cámaras elevadas: no equivalen a la cámara del jugador;
  el control de dirección afecta únicamente al radar en este modo.
- Mirage y Dust II clásico permiten elegir cuatro posiciones (Mid/A/B/T),
  cámara inicial a 64 unidades sobre el suelo y giro con arrastre o flechas.
  Con foco en el visor, WASD navega, Q/E baja/sube y Shift acelera. Es vuelo
  libre sin colisiones ni gravedad; Esc o perder el foco detiene el movimiento.
  **Volver al lugar** restaura la posición elegida. El radar sigue la cámara. Los controles del escenario no alteran los comandos.
- M4A1-S y AWP con las geometrías, UVs y materiales de los GLB existentes.
- Brazos Miami extraídos del agente facilitado por el usuario, con esqueleto,
  pesos y texturas originales. Poses aproximadas de agarre para ambas armas.
  Los brazos geométricos anteriores sirven como respaldo durante la carga.
- Cámara del arma en el origen mirando hacia −Z, renderizada sobre el escenario
  con profundidad independiente. El FOV del viewmodel cambia su proyección,
  sin alterar la escala física del arma ni el FOV de la cámara del mapa.
- X → desplazamiento lateral; Y → profundidad; Z → altura. La mano izquierda
  refleja el conjunto una sola vez.
- Formatos 16:9, 4:3 con bandas laterales y 4:3 estirado. Son controles de
  visualización, no comandos de resolución.
- Radar de Mirage o Dust II según el escenario: tamaño, escala de mapa e iconos, opacidad, composición
  aditiva, centrado, rotación, formas circular/cuadrada y pruebas del marcador
  y del zoom alternativo. Posición y orientación de jugadores de ejemplo.
- Comparación con valores iniciales sin modificar los ajustes guardados. Editar
  cualquier ajuste vuelve automáticamente a la vista de tus valores. Los campos
  numéricos de radar/viewmodel actualizan la vista mientras se escribe un valor válido.
- Editar el zoom alternativo activa su vista de prueba; editar el zoom normal
  regresa al normal. Editar la forma con marcador muestra el modo marcador.
  Una indicación explica cuándo el plano completo o el zoom dinámico limitan
  el efecto de otros controles.
- Exportación completa del grupo afectado desde la consola y de ambos grupos
  desde **Copiar View Setup**. El preset precede al FOV y los offsets para que
  los valores explícitos prevalezcan.
- Transición provisional de equipamiento al cambiar de arma o pulsar
  **Repetir equipamiento**, con AnimationMixer y registro de futuros clips.
- Consola flotante inferior común a todas las categorías, con opciones de
  guardado, descarga y reinicio desplegables. Se reserva espacio para que los
  últimos ajustes sigan siendo accesibles al desplazarse.
- Carga diferida al entrar en la vista, reutilización de modelos al cambiar
  controles, liberación de recursos al salir y mensajes de carga/error.
- Dependencias 3D locales. No requiere un CDN para cargar Three.js.

## Qué todavía es aproximado

Los dos GLB de armas son **armas aisladas**, sin rig ni clips de primera
persona. Los brazos proceden de un agente de tercera persona: se extrajeron
guantes y mangas y se adaptó su esqueleto de 74 huesos mediante IK de dos
segmentos. Los puntos de agarre están en `preview/assets.mjs`. Los originales
del usuario no se modifican. La postura de dedos, el encuadre y las longitudes
necesitan calibración con CS2. La extracción pesa 27 MB porque conserva las
texturas originales; se descarga al abrir el visualizador, no en otras categorías.

**Mirage CS2** usa `assets/de_mirage_cs2.glb`, suministrado por el usuario.
Sus 3.553 mallas incluyen arquitectura y props, pero el archivo declara cero
imágenes y cero texturas. Se utilizan un material neutro, cielo y sombras
provisionales; no reproduce el acabado del juego. Se congelan los rigs
decorativos, se omiten helpers, bloqueadores de luz y overlays sin sus
texturas alfa, y se agrupa la geometría por zonas para reducir draw calls.
El original de aproximadamente 88 MB no se modifica. El radar usa el
overview de Mirage con origen (−3230, 1713) y escala 5 unidades/píxel.

**Dust II clásico**, anterior a CS2, conserva sus texturas completas; su
geometría difiere en detalles del overview de CS2. Ambos escenarios permiten
vuelo libre desde posiciones iniciales; no simulan caminar ni colisiones.
El HUD y la mira son contextuales. No hay disparo ni física de movimiento.

El archivo Miami **no contiene animaciones**. El equipamiento actual mueve el
conjunto de arma y brazos con una transición creada para este proyecto; no es
la animación original de CS2. No hay todavía modelos/selector de granadas,
inspección animada, retroceso ni reproducción del renderizador Source 2.

La transformación mundo → overview usa los metadatos del mapa. El factor
que convierte `cl_radar_scale` en píxeles, el tamaño del HUD, el comportamiento
de los iconos en el borde y el encuadre del zoom dinámico son aproximados. La
selección de forma cuadrada usa un overview completo. El zoom dinámico usa
las posiciones de ejemplo, sin la lógica de detección de jugadores de CS2.

## Estructura

| Archivo | Responsabilidad |
| --- | --- |
| `preview/settings.mjs` | Rangos, presets, exportación, proyección y transformaciones puras. |
| `preview/assets.mjs` | Modelos, postura base, slots de materiales y metadatos del mapa. |
| `preview/weapon.mjs` | Renderizador Three.js, carga de GLB y ciclo de vida de recursos GPU. |
| `preview/agent.mjs` | Esqueleto Miami, IK y poses de manos por arma. |
| `preview/navigation.mjs` | Movimiento de cámara en vuelo libre, independiente de reglas de juego. |
| `preview/world.mjs` | Escenario, coordenadas de mapa y cámara a altura del jugador. |
| `preview/map-geometry.mjs` | Adaptación de coordenadas de Mirage, congelación de rigs y agrupación de geometría. |
| `preview/animation.mjs` | AnimationMixer para acciones de primera persona. |
| `preview/arms.mjs` | Brazos geométricos de respaldo durante carga/error del agente. |
| `preview/studio.mjs` | Vista común de arma/radar, controles de escenario y dibujo del HUD. |
| `scripts/extract-miami-arms.py` | Extracción reproducible del agente original a un GLB de brazos. |
| `app.js` | Estado compartido con los ajustes existentes y compatibilidad de presets guardados. |

Los comandos de mano izquierda de Game y View Model comparten
`cl_prefer_lefthanded`. Los presets antiguos con `cl_righthand` se convierten
al cargar. Los offsets antiguos fuera de rango se limitan; los presets de la
versión anterior se muestran como personalizados para preservar sus valores.
Los nuevos snapshots incluyen `previewVersion`.

## Próxima integración de mapa y animaciones

`WeaponRenderer.registerAnimation(action, clip)` admite clips Three.js para
`equip`, `holster`, `inspect` y `select_grenade`; `playAnimation(action)` los
reproduce. Los clips deben apuntar a los nombres de huesos/objetos del rig.
Se mantienen los nombres y pesos Miami, pero no hay retargeting automático
desde otro esqueleto. Los clips que animen piezas del arma necesitarán un arma
articulada compatible. Añadir granadas requerirá su modelo, pose y selección.
Las animaciones se detienen al ocultar/salir del visor y no dejan un bucle
continuo activo cuando el personaje está en reposo.

Para un escenario actual, [Source 2 Viewer documenta la exportación de mapas
CS2 a glTF/GLB](https://s2v.app/ValveResourceFormat/guides/exporting-maps.html).
Para completar los materiales de Mirage se necesita un export con sus
texturas. Cada mapa declara su transformación y overview en el manifiesto;
Mirage ya tiene una adaptación independiente del mapa clásico. Antes de habilitar caminar hacen falta colisiones, suelo y
límites de navegación; disponer de la malla completa no implementa esos sistemas.

## Camino a una coincidencia verificable

1. Elegir una versión concreta de CS2 y conservar su `ClientVersion`, resolución,
   relación de aspecto, configuración gráfica y comandos de cada captura.
2. Sustituir o calibrar los brazos adaptados con assets de primera persona:
   arma, esqueleto, pose de reposo, attachments y materiales. Conservar ejes,
   origen, unidades, UVs y nombres de los slots al exportar a glTF.
3. Registrar capturas sin movimiento en una posición/cámara conocida, para cada
   arma, ambos lados, ambos presets y extremos de FOV/X/Y/Z. Usar un fondo de
   primera persona de esa misma cámara o una escena 3D correspondiente.
4. Comparar silueta, punta del cañón, miras y manos mediante superposición;
   medir el error en píxeles antes de etiquetar un perfil como calibrado.
5. Repetir con overview/radar: coordenadas conocidas, jugador mirando a los
   cuatro puntos cardinales, extremos de cada control, marcador y zoom
   alternativo. Medir también el algoritmo de encuadre dinámico.
6. Conservar las referencias y tolerancias acordadas como fixtures versionados.
   Las pruebas matemáticas actuales no reemplazan esta comparación visual.

## Skins más adelante

La geometría y las UVs originales se conservan. `WeaponRenderer.setMaterial`
permite sustituir un slot declarado en el manifiesto por un material PBR, y
restaurarlo pasando `null`. El llamador conserva la propiedad de las texturas
de la variante; el renderizador clona y libera el material. Esto es un punto
de integración, **no un sistema de skins implementado**.

La siguiente fase necesita assets/materiales compatibles y un catálogo por
arma. La equivalencia con CS2 puede requerir shaders específicos para paint
kits, semillas, desgaste, máscaras y stickers; un simple cambio de color no
es suficiente. Primero se debe calibrar la geometría y la cámara.

## Verificación

```bash
npm test
npm run check
```

Las pruebas cubren límites, orden y exhaustividad de los comandos, estado
compartido, migración/guardado de configuraciones, relación entre FOV y
escala, signos de los offsets, reflejo de mano, proyección/inversa del radar,
modos alternativos, liberación de cargas tardías y selección concurrente de
armas. También cargan geometría, índices, esqueleto y pesos de los GLB reales
para comprobar orientación/escala, agarres de ambas armas, independencia de
la pose respecto al reflejo y offsets, altura sobre el suelo, orientación del
mapa frente al radar, FOV independiente y finalización/cancelación de clips.
Mirage se comprueba con el GLB real: altura en los cuatro lugares, conservación
de más de un millón de triángulos, agrupación a menos de cien mallas y
selección concurrente de escenarios sin que una carga tardía cambie el mapa.
No incluyen comparación de imágenes con CS2 ni una prueba visual automatizada
del navegador. La revisión manual comprueba radar, navegación entre pestañas,
giro del escenario, marcador, controles del arma y carga de ambos modelos.

## Fuentes de comandos

Verificado el 17 de septiembre de 2026 en los dumps públicos de
[GameTracking-CS2, revisión d8e2c7a](https://github.com/SteamDatabase/GameTracking-CS2/tree/d8e2c7a4f9b86e60d5a1b584a83ee0e15f59cc54):

- `DumpSource2/convars.txt`: FOV 60–68; X −2–2.5; Y/Z −2–2;
  `cl_prefer_lefthanded`; presets 1=Desktop y 2=Classic; iconos del radar
  0.4–1.25, zoom 0.25–1, tamaño de radar 0.8–1.3.
- `DumpSource2/commands.txt`: `toggleradarscale`.
- `game/csgo/pak01_dir/resource/overviews/de_dust2.txt`: origen (−2476, 3239),
  escala 4.4 unidades por píxel, overview 1024×1024.

El dump confirma nombres, rangos y etiquetas. No demuestra por sí solo una
coincidencia visual ni documenta todos los detalles internos del motor.

## Estado de los assets CS2

Se incorporó el archivo de [De_mirage Cs2, Kyrsia](https://sketchfab.com/3d-models/de-mirage-cs2-42091af5b78941e68b01396d0c955aac)
que facilitó el usuario. La ausencia de texturas se verificó en su estructura
GLB; no es un error de descarga de imágenes del visualizador.

Cada entorno carga bajo demanda y se conserva mientras el visualizador esté
abierto. Cambiar entre Mirage, el clásico y el fondo estático conserva los
ajustes de arma y radar, y selecciona el overview y los lugares del mapa.
Una carga tardía se almacena sin reemplazar la selección actual.

El objetivo sigue siendo explorar escenarios auténticos en 3D sin recrear el
motor ni convertir el proyecto en un juego. Para alcanzar el acabado visual
de CS2 hacen falta materiales/texturas completos y calibración de iluminación;
las capturas opcionales no sustituyen la navegación 3D.
