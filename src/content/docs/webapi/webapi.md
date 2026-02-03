---
title: "WebApi"
description: "Descubre cómo las WebAPI transforman la interacción con el navegador, permitiendo aplicaciones más dinámicas y eficientes. ¡No te lo pierdas!"
date: 2026-01-24
updatedDate: 2026-01-24
tags: []
slug: webapi
author: victor_cuervo
type: category
topic: webapi
id: 2f2a9dfb-adca-800d-a7e2-c502f0eb5a94
---

## ¿Qué son las WebAPI?


Las Web APIs del navegador son conjuntos de interfaces que permiten a JavaScript interactuar con el entorno del usuario: red, almacenamiento, dispositivos, interfaz, etc. A diferencia de una API HTTP clásica, estas APIs están expuestas directamente por el navegador y se usan desde el propio frontend.


Este documento ofrece una vista global de las principales Web APIs actuales, agrupadas por bloques temáticos, y sirve como índice hacia artículos más detallados.


## ¿Qué tipo de WebAPI existen?

- [Almacenamiento en el cliente](https://www.notion.so/victorcuervo/1192805dea104ef29883d285110db8e7?v=1c1a9dfbadca8032ba98000c9a8b3a93&p=2f2a9dfbadca800da7e2c502f0eb5a94&pm=s#almacenamiento-en-el-cliente)
- [Comunicación y red](https://www.notion.so/victorcuervo/1192805dea104ef29883d285110db8e7?v=1c1a9dfbadca8032ba98000c9a8b3a93&p=2f2a9dfbadca800da7e2c502f0eb5a94&pm=s#comunicaci%C3%B3n-y-red)
- [Dispositivo y sensores](https://www.notion.so/victorcuervo/1192805dea104ef29883d285110db8e7?v=1c1a9dfbadca8032ba98000c9a8b3a93&p=2f2a9dfbadca800da7e2c502f0eb5a94&pm=s#dispositivo-y-sensores)
- [Interfaz de usuario y eventos](https://www.notion.so/victorcuervo/1192805dea104ef29883d285110db8e7?v=1c1a9dfbadca8032ba98000c9a8b3a93&p=2f2a9dfbadca800da7e2c502f0eb5a94&pm=s#interfaz-de-usuario-y-eventos)
- [Gráficos, multimedia y presentación](https://www.notion.so/victorcuervo/1192805dea104ef29883d285110db8e7?v=1c1a9dfbadca8032ba98000c9a8b3a93&p=2f2a9dfbadca800da7e2c502f0eb5a94&pm=s#gr%C3%A1ficos-multimedia-y-presentaci%C3%B3n)
- [Rendimiento, sistema y seguridad](https://www.notion.so/victorcuervo/1192805dea104ef29883d285110db8e7?v=1c1a9dfbadca8032ba98000c9a8b3a93&p=2f2a9dfbadca800da7e2c502f0eb5a94&pm=s#rendimiento-sistema-y-seguridad)

---


## Almacenamiento en el cliente


En este bloque agrupamos las APIs que permiten guardar información en el navegador, ya sea de forma sencilla (pares clave/valor) o mediante bases de datos más complejas.


### Web Storage API (localStorage y sessionStorage)


La Web Storage API ofrece dos almacenes sencillos de pares clave/valor:

- `localStorage`: datos persistentes que permanecen tras cerrar el navegador.
- `sessionStorage`: datos asociados a la pestaña/sesión actual.

Son ideales para guardar preferencias de usuario, flags sencillos o pequeños estados de la aplicación. Su uso es muy simple y está soportado en todos los navegadores modernos.


### IndexedDB API


IndexedDB es una base de datos NoSQL en el navegador, orientada a almacenar grandes volúmenes de datos estructurados. Permite:

- Guardar objetos complejos.
- Crear índices.
- Realizar búsquedas por campos.

Es la opción recomendada cuando necesitamos almacenamiento offline serio (por ejemplo, una app que funcione sin conexión con muchos datos).


### Cache API


La Cache API permite a las aplicaciones web (normalmente a través de un Service Worker) almacenar respuestas HTTP en cache. Es clave en aplicaciones web progresivas (PWA) para:

- Servir recursos estáticos sin ir a la red.
- Implementar modos offline.
- Mejorar tiempos de carga.

### Storage API y Storage Access API


Estas APIs se centran en:

- Consultar cuánto almacenamiento está usando un origen.
- Gestionar permisos de acceso al almacenamiento (especialmente relevante en contextos de cookies de terceros y restricciones de privacidad).

### File API


La File API permite a una página leer archivos locales seleccionados por el usuario (por ejemplo, a través de un `<input type="file">`). Suele usarse con `FileReader` para:

- Previsualizar imágenes.
- Importar datos desde CSV, JSON, etc.

### File System Access API


Proporciona un acceso más directo a archivos y directorios del sistema con permisos explícitos del usuario. Es muy útil para aplicaciones web tipo editor de código, gestores de fotos, etc., que necesitan trabajar con ficheros reales y no solo con copias en memoria.


---


## Comunicación y red


Aquí se agrupan las APIs relacionadas con la comunicación con servidores u otros clientes.


### Fetch API


Fetch es la forma moderna de realizar peticiones HTTP desde el navegador. Sustituye a `XMLHttpRequest` con una interfaz basada en promesas:

- Soporta peticiones GET, POST, etc.
- Permite trabajar con respuestas streaming.
- Encaja bien con `async/await`.

Es la base para consumir APIs REST desde el frontend.


### WebSocket API


La WebSocket API permite abrir una conexión bidireccional persistente entre el navegador y el servidor. Es ideal para:

- Chats en tiempo real.
- Tableros de colaboración.
- Aplicaciones que necesitan recibir actualizaciones constantes sin refrescar.

### WebRTC API


WebRTC proporciona comunicación P2P entre navegadores:

- Audio y vídeo en tiempo real (videollamadas).
- Canales de datos para enviar información directamente entre clientes.

Suele combinarse con un servidor de señalización para establecer las conexiones.


### WebTransport API


WebTransport es una API de transporte basada en QUIC, pensada para comunicaciones de baja latencia y configuración fina de fiabilidad. Se orienta a:

- Juegos online.
- Streaming interactivo.
- Casos donde WebSocket o HTTP/2 no son suficientes.

### Beacon API


La Beacon API permite enviar pequeños paquetes de datos al servidor de forma fiable cuando la página se está descargando o cambiando de estado, por ejemplo:

- Enviar eventos de analítica al cerrar la pestaña.
- Persistir logs de errores de último momento.

### Background Sync y Periodic Background Sync


Estas capacidades, usadas junto con Service Workers, permiten:

- Reintentar envíos fallidos cuando vuelve la conexión.
- Programar sincronizaciones periódicas de datos.

Son muy útiles para apps que deben soportar entornos con conectividad inestable.


### Broadcast Channel API y Channel Messaging API


Permiten la comunicación entre contextos de la misma aplicación:

- Pestañas abiertas del mismo origen.
- Iframes que comparten origen.

Sirven para sincronizar estado, compartir datos o coordinar acciones entre varias ventanas.


---


## Dispositivo y sensores


En este bloque se encuentran APIs que exponen capacidades físicas del dispositivo.


### Geolocation API


La Geolocation API ofrece la posición aproximada del usuario, siempre bajo permiso explícito. Casos de uso:

- Mostrar la localización en un mapa.
- Ofrecer contenidos o servicios basados en ubicación.
- Calcular rutas o distancias.

### Device Orientation y Sensor APIs


Exponen datos de sensores como:

- Acelerómetro.
- Giroscopio.
- Orientación del dispositivo.

Son muy usados en juegos móviles, experiencias de realidad aumentada o interfaces que reaccionan al movimiento físico.


### Battery Status API


Proporciona información del nivel y estado de la batería del dispositivo. Aunque su uso se ha restringido por motivos de privacidad, sigue siendo relevante para ciertos escenarios de optimización de consumo.


### Gamepad API


Permite detectar y leer mandos de juego conectados al dispositivo. Es ideal para:

- Juegos web con soporte de mando.
- Simuladores o herramientas interactivas que aprovechan gamepads.

### Vibration API


Ofrece control sobre la vibración en dispositivos que lo soportan (principalmente móviles). Se usa para dar feedback háptico en acciones concretas de la interfaz o en juegos.


### Notifications API y Push API


Las notificaciones permiten mostrar mensajes nativos al usuario, incluso cuando la pestaña no está activa. Combinadas con:

- Push API.
- Service Workers.

son la base de las notificaciones push en las PWAs.


### Web Share API


Permite abrir el diálogo nativo de compartir del sistema (especialmente útil en móviles), para enviar:

- Enlaces.
- Texto.
- Archivos.

a otras aplicaciones instaladas.


### WebUSB, WebHID y WebBluetooth


Estas APIs permiten interactuar con dispositivos externos:

- WebUSB: dispositivos USB.
- WebHID: dispositivos de interfaz humana (teclados especiales, mandos, etc.).
- WebBluetooth: dispositivos Bluetooth de baja energía.

Todas requieren permisos explícitos y suelen considerarse capacidades avanzadas.


---


## Interfaz de usuario y eventos


Agrupa APIs cuyo objetivo es mejorar la interacción con la página y la gestión de eventos.


### DOM y UI Events


Son la base del modelo de eventos en la web:

- Clics.
- Teclado.
- Foco.
- Eventos de formularios.

Todas las demás APIs de interfaz se construyen sobre este modelo.


### Pointer Events


Unifican en un único modelo:

- Ratón.
- Pantalla táctil.
- Lápiz digital.

Facilitan la escritura de código que funcione bien tanto en escritorio como en dispositivos táctiles.


### Drag & Drop API


Permite implementar arrastrar y soltar:

- Dentro de la página.
- Entre aplicaciones (por ejemplo, arrastrar un archivo desde el escritorio al navegador).

Es muy útil en interfaces de gestión de archivos, tableros tipo Kanban, etc.


### Selection API


Permite controlar la selección de texto o nodos en el documento. Con ella se pueden construir:

- Editores enriquecidos.
- Funciones de “citar texto”.
- Comportamientos personalizados sobre selecciones.

### Clipboard API


Ofrece lectura y escritura en el portapapeles con permisos controlados. Mejora la experiencia de:

- Botones “copiar código”.
- Pegar contenido desde otras aplicaciones.

### Fullscreen API


Permite poner un elemento en pantalla completa, muy usado en:

- Reproductores de vídeo.
- Juegos.
- Visualizaciones complejas.

### Dialog API y Popover API


Proporcionan componentes nativos para:

- Diálogos modales (`<dialog>`).
- Popovers contextuales (menús, tooltips avanzados).

Ayudan a crear interfaces más accesibles y coherentes sin depender totalmente de librerías externas.


---


## Gráficos, multimedia y presentación


En este bloque se encuentran APIs orientadas a dibujo, animación y gestión de medios.


### Canvas API y WebGL / WebGPU

- Canvas: proporciona un lienzo 2D para dibujar píxel a píxel.
- WebGL: acceso a gráficos 3D acelerados por GPU.
- WebGPU: la nueva generación de API gráfica de bajo nivel.

Se usan mucho en juegos, visualizaciones de datos y herramientas de edición gráfica.


### Web Animations API


Permite definir y controlar animaciones mediante JavaScript, integrándose con CSS. Ofrece:

- Mayor control sobre tiempos, estados y reproducción.
- Sin necesidad de usar únicamente transiciones o animaciones CSS.

### Media Capture and Streams (getUserMedia)


Permite acceder a:

- Cámara.
- Micrófono.

Es la base para aplicaciones de videollamadas, grabación de audio/vídeo y filtros en tiempo real.


### Media Source Extensions (MSE) y Encrypted Media Extensions (EME)

- MSE: permite que JavaScript alimente un elemento `<video>` con datos de streaming adaptativo.
- EME: integra sistemas de DRM para contenido protegido.

Son fundamentales en plataformas de vídeo bajo demanda.


### Picture-in-Picture API


Permite sacar un vídeo a una ventana flotante superpuesta, útil para:

- Seguir viendo un vídeo mientras el usuario navega.
- Experiencias multitarea.

### Web Audio API


Ofrece un sistema de procesamiento de audio muy flexible:

- Síntesis.
- Efectos.
- Visualización de espectros.

Se usa en editores de audio, juegos y aplicaciones musicales.


### Screen Orientation API


Permite leer y controlar la orientación de la pantalla. Es útil en aplicaciones que dependen del modo horizontal o vertical, como juegos o vídeo.


---


## Rendimiento, sistema y seguridad


Este bloque recoge APIs que afectan al comportamiento global de la aplicación en términos de rendimiento, ejecución en segundo plano y seguridad.


### Performance API


Incluye varias interfaces (Navigation Timing, Resource Timing, etc.) para medir:

- Tiempos de carga de la página.
- Rendimiento de recursos individuales.
- Métricas que ayudan a optimizar la experiencia del usuario.

Es clave en procesos de performance tuning.


### Web Workers y Shared Workers


Permiten ejecutar código en hilos separados:

- Web Workers: por página o contexto.
- Shared Workers: compartidos entre varias pestañas del mismo origen.

Son esenciales para tareas pesadas (procesamiento de datos, cálculos) que no deben bloquear la interfaz.


### Service Workers


Los Service Workers actúan como un proxy programable entre la página y la red. Permiten:

- Cachear recursos (junto con Cache API).
- Hacer funcionar la app offline.
- Gestionar notificaciones push y sincronización en segundo plano.

Son el corazón de las aplicaciones web progresivas (PWAs).


### Page Visibility API


Permite saber si una pestaña está visible o en segundo plano. Se usa para:

- Pausar animaciones o actualizaciones cuando la página no está a la vista.
- Ahorrar batería y recursos.

### Web Locks API, Prioritized Task Scheduling, Compute Pressure API


Son APIs más avanzadas para:

- Coordinar el acceso a recursos compartidos (Web Locks).
- Programar tareas según prioridades.
- Ajustar el trabajo según la carga del sistema (Compute Pressure).

Resultan útiles en aplicaciones complejas que compiten por recursos.


### Credential Management API y Web Authentication API (WebAuthn)

- Credential Management simplifica el manejo de credenciales guardadas por el navegador.
- WebAuthn permite autenticación sin contraseña usando llaves de seguridad, biometría o dispositivos externos.

Son claves en la construcción de sistemas de autenticación modernos y seguros.


### Permissions API


Ofrece una forma unificada de consultar y gestionar el estado de permisos (geolocalización, notificaciones, cámara, etc.). Ayuda a:

- Mostrar UX coherente para solicitar permisos.
- Saber si una funcionalidad estará disponible antes de intentar usarla.

---


## Tabla resumen de bloques y APIs


| Bloque                 | APIs destacadas                                 | Uso típico                                               |
| ---------------------- | ----------------------------------------------- | -------------------------------------------------------- |
| Almacenamiento         | Web Storage, IndexedDB, Cache API               | Preferencias, datos offline, cache de recursos.          |
| Comunicación y red     | Fetch, WebSocket, WebRTC, WebTransport          | Peticiones HTTP, tiempo real, P2P, baja latencia.        |
| Dispositivo y sensores | Geolocation, Notifications, Sensors, WebUSB…    | Mapas, avisos nativos, integración con hardware externo. |
| Interfaz y eventos     | Pointer Events, Clipboard, Drag & Drop, Dialog  | Interacción táctil, copiar/pegar, diálogos y popovers.   |
| Gráficos y multimedia  | Canvas, WebGL/WebGPU, Web Audio, Media APIs     | Juegos, visualizaciones, edición de audio/vídeo.         |
| Rendimiento y sistema  | Service Workers, Performance, Workers, WebAuthn | PWAs, métricas, concurrencia y autenticación segura.     |

undefined