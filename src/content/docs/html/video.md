---
title: "Vídeo"
description: "Integra vídeo HTML con controles nativos, formatos compatibles y subtítulos. Comprende source, poster, preload y autoplay con un ejemplo accesible."
date: 2026-10-14
updatedDate: 2026-10-14
tags: ["video","source","controls"]
slug: html/video
type: category
topic: html
id: 3f9a9dfb-adca-80bc-940d-d393a11fa857
author: victor_cuervo
---

## ¿Qué es el Vídeo HTML?


El vídeo HTML es la incorporación de contenido audiovisual a una página web mediante el elemento `<video>`. El navegador reproduce el archivo y puede proporcionar controles nativos, sin instalar complementos ni utilizar bibliotecas externas.


La etiqueta `<video>` define el reproductor. El archivo se indica con su atributo `src` o mediante elementos `<source>` que ofrecen versiones alternativas de la misma grabación. [HTML](https://lineadecodigo.com/html/) describe cómo se integra el recurso, pero no graba, convierte ni comprime el vídeo: los archivos deben existir en las rutas indicadas.


Para comprender la compatibilidad conviene distinguir **contenedor** y **códec**. El contenedor, como MP4 o WebM, organiza las pistas de vídeo, audio y otros datos. El códec es el sistema que codifica y decodifica cada pista. Un archivo MP4 puede contener vídeo H.264 y audio AAC; reconocer la extensión no garantiza que el navegador admita cualquier combinación de códecs.


Un enlace a una página de una plataforma de vídeo no suele ser una fuente válida para `<video>`. Para incrustar su reproductor se utiliza normalmente el código de inserción que proporciona la plataforma, a menudo basado en `<iframe>`.


## Características de Vídeo HTML

- **Fuente única o formatos alternativos.** `src` en `<video>` permite indicar un archivo. Si necesitas alternativas, omite ese atributo y coloca varios `<source>` dentro del elemento. El navegador evalúa las fuentes en el orden indicado para elegir una que pueda reproducir; no forman una lista de reproducción. `<video>` necesita etiqueta de cierre.
- **Formatos de vídeo web.** MP4 con H.264 y AAC es una combinación de amplia compatibilidad. WebM suele utilizar VP8 o VP9 para vídeo y Vorbis u Opus para audio. Los tipos MIME `video/mp4` y `video/webm` identifican sus contenedores; el parámetro `codecs` permite precisar la codificación. El soporte efectivo depende del navegador y del sistema. Cambiar la extensión o el atributo `type` no convierte el archivo.
- **Controles de reproducción.** `controls` solicita la interfaz nativa para reproducir, pausar y desplazarse por el vídeo. Las opciones de volumen, pantalla completa y subtítulos pueden variar según el dispositivo. Sin este atributo no se muestran los controles nativos; no los omitas en un vídeo informativo si no proporcionas una alternativa operable.
- **Imagen de presentación y dimensiones.** `poster` señala una imagen que se muestra antes de disponer de las imágenes del vídeo. No sustituye una descripción accesible. `width` y `height` establecen las dimensiones de presentación en píxeles CSS, con valores numéricos sin unidades. No cambian la resolución del archivo ni hacen que el reproductor se adapte automáticamente a todas las pantallas.
- **Precarga.** `preload="none"` sugiere no descargar el vídeo anticipadamente; `metadata` solicita principalmente información como su duración; `auto` permite una precarga más amplia, incluso del archivo completo. Son indicaciones que el navegador puede ajustar. La precarga no inicia por sí sola la reproducción.
- **Reproducción automática y móvil.** `autoplay` solicita iniciar la reproducción cuando sea posible, pero el navegador puede bloquearla, especialmente si hay sonido. `muted` establece el silencio inicial y suele facilitar el inicio automático, sin garantizarlo. `playsinline` solicita reproducir dentro de la página en lugar de forzar una presentación a pantalla completa en dispositivos que distinguen ambos modos. Para una lección, es preferible dejar que el usuario decida cuándo empezar.
- **Atributos booleanos.** La presencia de `controls`, `autoplay`, `muted`, `loop` o `playsinline` activa la opción correspondiente. `loop` repite el vídeo al terminar. Para desactivar el inicio automático, elimina `autoplay`: escribir `autoplay="false"` no lo desactiva. Además, `autoplay` puede provocar descarga de datos aunque `preload` sugiera lo contrario.
- **Subtítulos y accesibilidad.** `<track>` asocia pistas de texto, habitualmente en formato WebVTT. `kind="captions"` identifica subtítulos que recogen el habla y los sonidos relevantes; `kind="subtitles"` se utiliza para subtítulos, por ejemplo traducciones. `srclang` declara el idioma y `label` el nombre visible. Ofrece también una transcripción consultable y, si las imágenes comunican información esencial no expresada en la narración, una alternativa descriptiva adecuada.
- **Contenido alternativo.** El texto dentro de `<video>` se ofrece a navegadores que no admiten el elemento. No funciona como mensaje universal ante errores de red o formatos incompatibles. Los enlaces al archivo y a la transcripción deben permanecer fuera del reproductor para seguir disponibles en esos casos.

## ¿Por qué aprender sobre el Vídeo HTML?


Permite incorporar demostraciones de producto, lecciones, entrevistas o instrucciones de uso con una interfaz que el navegador ya proporciona. Para reproducir un archivo y mostrar subtítulos no necesitas desarrollar un reproductor personalizado.


Conocer las fuentes y los códecs ayuda a distinguir un problema de compatibilidad de una ruta incorrecta o de una configuración del servidor. Elegir una precarga moderada también evita descargar de entrada vídeos largos que quizá no se reproduzcan.


La combinación de controles, subtítulos y transcripción permite consultar el contenido sin sonido y facilita su acceso a personas sordas o con dificultades auditivas. Una transcripción no sustituye por sí sola los subtítulos sincronizados: cumplen funciones complementarias durante la reproducción y la consulta del contenido.


## Ejemplo de Vídeo HTML


Este ejemplo muestra una lección con dos formatos alternativos, imagen de presentación y subtítulos en español. Guarda el documento como `video.html`. Junto a él, crea una carpeta `media` con estos recursos:

- `leccion.mp4`: la grabación codificada con vídeo H.264 y audio AAC.
- `leccion.webm`: la misma grabación en WebM, por ejemplo con VP9 y Opus. Si no dispones de ella, elimina su elemento `<source>`.
- `portada.jpg`: una imagen que identifique la lección.
- `leccion-es.vtt`: la pista de subtítulos que se incluye después del código HTML.

Los archivos de vídeo y la imagen deben aportarse por separado. Para seguir el ejemplo literalmente, prepara una grabación con las dos frases de la transcripción y ajusta después los tiempos de los subtítulos a la narración real.


```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Lección de vídeo sobre HTML</title>
</head>
<body>
  <h1>Estructura de una página HTML</h1>

  <figure>
    <figcaption id="titulo-video">Lección: encabezados y párrafos</figcaption>
    <video
      controls
      preload="metadata"
      playsinline
      width="640"
      height="360"
      poster="media/portada.jpg"
      aria-labelledby="titulo-video"
    >
      <source src="media/leccion.mp4" type="video/mp4">
      <source src="media/leccion.webm" type="video/webm">
      <track
        src="media/leccion-es.vtt"
        kind="captions"
        srclang="es"
        label="Español"
        default
      >
      Tu navegador no admite el elemento de vídeo HTML.
    </video>
  </figure>

  <p>
    <a href="media/leccion.mp4">Abrir el vídeo en formato MP4</a>
    o <a href="#transcripcion">leer la transcripción</a>.
  </p>

  <section id="transcripcion" aria-labelledby="titulo-transcripcion">
    <h2 id="titulo-transcripcion">Transcripción de la lección</h2>
    <p>HTML describe la estructura de una página web.</p>
    <p>Los encabezados organizan el contenido y los párrafos desarrollan las ideas.</p>
  </section>
</body>
</html>
```


Contenido de `media/leccion-es.vtt`, guardado como texto UTF-8. WebVTT utiliza marcas de tiempo para indicar cuándo aparece y desaparece cada fragmento:


```text
WEBVTT

00:00:00.000 --> 00:00:04.000
HTML describe la estructura de una página web.

00:00:04.000 --> 00:00:10.000
Los encabezados organizan el contenido
y los párrafos desarrollan las ideas.
```


Al cargar la página aparecen el reproductor y su portada. El vídeo no comienza automáticamente: el usuario activa la reproducción. La pista en español se marca como predeterminada, aunque su presentación efectiva puede depender de las preferencias del navegador; también puede seleccionarse desde los controles disponibles.

- El atributo `aria-labelledby` relaciona el reproductor con el título visible de la lección.
- Los dos elementos `<source>` representan el mismo contenido en formatos distintos. El navegador selecciona una fuente, no reproduce ambas consecutivamente.
- El elemento `<track>` incorpora los subtítulos sincronizados. Deben coincidir con lo que realmente se escucha, incluidos los sonidos significativos cuando existan.
- El enlace MP4 y la transcripción permanecen visibles aunque falle la reproducción. El enlace abre el recurso; no garantiza su descarga en todos los navegadores.

Prueba el conjunto desde un servidor local o tu alojamiento web, no solo abriendo el archivo mediante una URL `file:`. Mantén los subtítulos en el mismo origen para este ejemplo y sirve los recursos con tipos MIME adecuados, especialmente `text/vtt` para WebVTT. En una página HTTPS, utiliza también HTTPS para los recursos multimedia.


Si el reproductor aparece pero el vídeo no funciona, comprueba las rutas, las respuestas del servidor y la codificación real de las pistas. Si solo fallan los subtítulos, revisa su URL, el tipo MIME, la sintaxis WebVTT y la coincidencia de los tiempos con la grabación.

