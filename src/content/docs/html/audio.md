---
title: "Audio"
description: "Integra audio HTML con controles nativos y formatos compatibles. Comprende source, preload y autoplay con un ejemplo práctico y transcripción accesible."
date: 2026-10-14
updatedDate: 2026-10-14
tags: ["audio","source","autoplay","accesibilidad"]
slug: html/audio
type: category
topic: html
id: 3f9a9dfb-adca-8010-8258-ca63c97d74a0
author: victor_cuervo
---

## ¿Qué es el Audio HTML?


El audio HTML es la incorporación de contenido sonoro a una página web mediante el elemento `<audio>`. Permite reproducir grabaciones, música, entrevistas o explicaciones de voz utilizando las capacidades multimedia del navegador, sin instalar complementos externos.


La etiqueta `<audio>` define el reproductor y sus opciones de comportamiento. El archivo se indica con el atributo `src` o mediante elementos `<source>` dentro del reproductor. El atributo `controls` solicita al navegador una interfaz para que el usuario pueda iniciar, pausar y controlar la reproducción.


Para reproducir un archivo no basta con reconocer su extensión: el navegador debe admitir el formato y el códec utilizados. El **formato contenedor** organiza los datos del archivo; el **códec** es el sistema empleado para codificar y decodificar la señal sonora. Por ejemplo, un archivo Ogg puede contener audio codificado con Vorbis u Opus.


[HTML](https://lineadecodigo.com/html/) proporciona la estructura del reproductor, pero no crea ni convierte la grabación. El archivo de audio debe existir y estar disponible en la ruta indicada.


## Características de Audio HTML

- **Fuente única con** **`src`****.** Para una grabación disponible en un solo formato, puede utilizarse `<audio src="audio/leccion.mp3" controls></audio>`. La URL puede ser relativa al documento o absoluta. `<audio>` necesita una etiqueta de cierre: no es un elemento vacío.
- **Alternativas con** **`source`****.** Varios elementos `<source>` permiten ofrecer la misma grabación en formatos diferentes. El navegador evalúa las fuentes en el orden del documento para seleccionar una que pueda reproducir. Cada fuente tiene su propio `src` y puede declarar `type`, el tipo MIME que identifica el formato. Si se usan estas alternativas, omite `src` en `<audio>` para no dar prioridad a una fuente única.
- **Formatos de audio web.** MP3 suele ser una opción de amplia compatibilidad y utiliza `audio/mpeg`. Ogg utiliza `audio/ogg` y puede incluir distintos códecs. AAC se distribuye a menudo en un contenedor MP4, con extensión `.m4a` y tipo `audio/mp4`. La compatibilidad depende del navegador, el sistema y la codificación real; cambiar la extensión o el atributo `type` no convierte un archivo.
- **Controles de reproducción nativos.** `controls` muestra la interfaz que ofrece el navegador. Normalmente incluye reproducción, pausa, posición y duración; la disponibilidad de volumen u otras funciones varía según el dispositivo. Sin `controls`, no aparece ese reproductor nativo, por lo que no debes ocultarlo si no proporcionas una alternativa operable.
- **Precarga con** **`preload`****.** `none` sugiere no precargar el audio; `metadata` solicita principalmente información como la duración; `auto` permite descargar más contenido, incluso el archivo completo. Son indicaciones, no garantías: el navegador puede adaptarlas a la conexión y sus políticas. `preload` no inicia por sí mismo la reproducción.
- **Reproducción automática con** **`autoplay`****.** Solicita que la reproducción comience cuando sea posible, pero los navegadores suelen bloquear el audio automático con sonido hasta que exista interacción o permiso suficiente. No debe dependerse de este atributo para transmitir información. Para una lección o entrevista, es preferible que el usuario pulse Reproducir. Además, `autoplay` puede hacer que el navegador descargue contenido aunque `preload` sugiera no hacerlo.
- **Repetición y silencio.** `loop` reinicia la reproducción al terminar. `muted` establece el silencio inicial, sin eliminar la pista sonora del archivo. `controls`, `autoplay`, `loop` y `muted` son atributos booleanos: su presencia los activa. Para desactivar la reproducción automática, omite `autoplay`; asignarle una cadena que parezca falsa no la desactiva.
- **Accesibilidad del contenido.** Identifica qué se va a escuchar y proporciona una transcripción para las grabaciones informativas. Debe recoger las palabras y los sonidos relevantes, no solo resumir el tema. Los controles nativos facilitan la operación con teclado, pero no hacen que la información sonora sea accesible por sí sola.
- **Texto alternativo y errores de carga.** El contenido escrito entre las etiquetas de `<audio>` sirve como alternativa para navegadores que no admiten el elemento. No es un mensaje universal para cualquier fallo de red o formato. Coloca fuera del reproductor los enlaces al archivo y a la transcripción para que sigan disponibles aunque el navegador admita `<audio>` pero no pueda reproducir la grabación.

Al publicar, comprueba que el servidor entregue el archivo con un tipo MIME adecuado y que la ruta sea accesible. En una página HTTPS, utiliza también HTTPS para los recursos de audio y evita depender de contenido HTTP que el navegador pueda actualizar o bloquear. La compatibilidad del formato no resuelve una URL inexistente ni un acceso denegado.


## ¿Por qué aprender sobre el Audio HTML?


Permite añadir pronunciaciones a un curso de idiomas, muestras a un catálogo musical o entrevistas a una publicación con un reproductor que ya conoce el navegador. Para una reproducción básica no hace falta crear botones personalizados ni incorporar una biblioteca.


Entender los formatos y `<source>` ayuda a diagnosticar por qué una grabación funciona en un dispositivo y no en otro. También permite distinguir un problema de codificación de un error de ruta o de configuración del servidor.


Elegir una precarga apropiada evita descargar innecesariamente grabaciones largas que quizá no se escuchen. Dejar el inicio en manos del usuario previene sonidos inesperados y respeta su contexto de navegación.


La relación entre reproductor, descripción y transcripción permite ofrecer el mismo contenido a personas que no pueden o no desean escucharlo. También hace posible consultar una frase concreta sin recorrer toda la grabación.


## Ejemplo de Audio HTML


Este ejemplo presenta una breve lección con controles nativos, dos formatos alternativos y una transcripción visible. Guarda el documento como `audio.html` y crea una carpeta `audio` junto a él.


Para reproducirlo, coloca en esa carpeta `introduccion.ogg`, codificado con Vorbis, e `introduccion.mp3`, codificado como MP3. Ambos deben contener la misma grabación. Puedes grabar las dos frases de la transcripción y exportarlas a esos formatos; cambiar el nombre de un archivo no equivale a convertirlo. Si solo tienes MP3, elimina la primera fuente Ogg.


```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <title>Lección de audio sobre HTML</title>
</head>
<body>
  <h1>Introducción a HTML</h1>
  <p>Escucha la explicación o consulta su transcripción.</p>

  <figure>
    <figcaption id="titulo-audio">Lección: estructura de una página</figcaption>

    <audio controls preload="metadata" aria-labelledby="titulo-audio">
      <source
        src="audio/introduccion.ogg"
        type='audio/ogg; codecs="vorbis"'
      >
      <source src="audio/introduccion.mp3" type="audio/mpeg">
      Tu navegador no admite el elemento de audio HTML.
    </audio>
  </figure>

  <p>
    <a href="audio/introduccion.mp3">Abrir el audio en formato MP3</a>
    o <a href="#transcripcion">leer la transcripción</a>.
  </p>

  <section id="transcripcion" aria-labelledby="titulo-transcripcion">
    <h2 id="titulo-transcripcion">Transcripción de la lección</h2>
    <p>
      HTML describe la estructura y el significado del contenido de una
      página web. Sus elementos permiten definir encabezados, párrafos,
      enlaces y otros componentes del documento.
    </p>
  </section>
</body>
</html>
```


Al abrir la página, el navegador muestra el reproductor, el título de la lección y la transcripción. No comienza a sonar automáticamente: la reproducción se inicia cuando el usuario activa el control correspondiente. Para comprobar también la entrega de los archivos y sus cabeceras, prueba el documento desde un servidor local o desde tu alojamiento web.

- El atributo `controls` proporciona la interfaz de reproducción sin scripts. `aria-labelledby` vincula el reproductor con el texto visible que identifica la lección.
- La primera fuente ofrece Ogg con Vorbis y declara su códec. La segunda ofrece MP3 como alternativa. El navegador no mezcla las fuentes ni las reproduce consecutivamente: representan opciones para el mismo contenido.
- El atributo `preload="metadata"` solicita información inicial, como la duración, sin exigir que se descargue de inmediato toda la grabación. El comportamiento efectivo puede variar.
- El enlace MP3 está fuera de `<audio>` y permanece visible si hay un problema de reproducción. Abre el recurso directamente; no garantiza que todos los navegadores lo descarguen como archivo.
- La transcripción está en el documento y se alcanza mediante un enlace a su `id`. Debe coincidir con la grabación publicada y actualizarse cuando esta cambie.

Si aparecen los controles pero no se escucha nada, comprueba la ruta, el volumen del reproductor y del dispositivo, y la compatibilidad real de la codificación. Si modificas las fuentes, mantén coherentes el tipo MIME declarado, el contenido del archivo y el enlace alternativo.

