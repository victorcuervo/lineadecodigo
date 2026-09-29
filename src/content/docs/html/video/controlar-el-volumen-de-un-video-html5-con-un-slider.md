---
title: "Controlar el volumen de un vídeo HTML5 con un slider"
description: "Controlar el volumen de un vídeo HTML5 con un slider: conecta input range con volume y muted y mantén sincronizados todos los controles."
date: 2012-02-03
updatedDate: 2026-09-29
tags: ["video","volume","range","addeventlistener","getelementbyid"]
slug: html/video/controlar-el-volumen-de-un-video-html5-con-un-slider
type: doc
topic: html
id: eefd8e8d-01e5-49b6-b141-b5b448b9cd7a
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Video/control-sonido-video.html
---

En este ejemplo combinaremos dos funciones de [HTML5](https://lineadecodigo.com/html/): la reproducción mediante `<video>` y la selección de un valor numérico mediante `<input type="range">`. Con ambos elementos y unas pocas líneas de [JavaScript](https://lineadecodigo.com/javascript/) podemos controlar el volumen de un vídeo con un slider y añadir una opción para silenciarlo.


El ejemplo mantiene los controles nativos del reproductor como alternativa y sincroniza su estado con los controles personalizados.


## Añadir el vídeo HTML5


Primero incorporamos el elemento `<video>`. El atributo `controls` muestra los controles integrados del navegador, mientras que `<source>` indica el archivo y su formato:


```html
<video id="mivideo" controls width="640">
  <source src="/media/video-ejemplo.mp4" type="video/mp4">
  Tu navegador no admite el elemento video.
</video>
```


La ruta del atributo `src` debe apuntar a un archivo existente. Si el vídeo se ofrece en varios formatos, pueden añadirse varios elementos `<source>` para que el navegador utilice el primero que sea compatible.


## Crear el slider de volumen


El volumen del elemento multimedia se representa mediante un número comprendido entre `0` y `1`: `0` equivale al silencio y `1` al volumen máximo disponible.


Podemos trasladar ese intervalo a un control de tipo `range`:


```html
<div>
  <label for="volumen">
    Volumen: <output id="valor-volumen">100%</output>
  </label>
  <input
    id="volumen"
    type="range"
    min="0"
    max="1"
    step="0.05"
    value="1"
    aria-controls="mivideo"
  >
</div>

<div>
  <input id="silencio" type="checkbox">
  <label for="silencio">Silenciar</label>
</div>
```


Los atributos `min` y `max` reproducen el intervalo de la propiedad `volume`. El valor de `step` determina la precisión del slider; `0.05` permite cambios del 5 %, pero podría utilizarse otro incremento válido.


El elemento `<output>` muestra el porcentaje seleccionado y `aria-controls` indica que el slider controla el reproductor identificado mediante `mivideo`.


## Obtener las referencias a los elementos


Desde [JavaScript](https://lineadecodigo.com/javascript/) recuperamos el vídeo, el slider, la casilla de silencio y la salida que mostrará el porcentaje:


```javascript
const video = document.getElementById("mivideo");
const volumen = document.getElementById("volumen");
const silencio = document.getElementById("silencio");
const valorVolumen = document.getElementById("valor-volumen");
```


El elemento `<video>` implementa la interfaz `HTMLMediaElement`. Esta interfaz proporciona, entre otras, las propiedades `volume` y `muted`.


## Cambiar el volumen mientras se mueve el slider


Para que el cambio se perciba inmediatamente utilizamos el evento `input`. A diferencia de `change`, que normalmente se procesa al confirmar el valor, `input` se dispara mientras el usuario mueve el control.


```javascript
volumen.addEventListener("input", (event) => {
  const nuevoVolumen = Number(event.currentTarget.value);

  video.volume = nuevoVolumen;
  video.muted = nuevoVolumen === 0;
});
```


El valor de un `<input>` se obtiene como una cadena de texto, por lo que lo convertimos mediante `Number()` antes de asignarlo a `video.volume`.


La propiedad `volume` acepta valores entre `0` y `1`. No está limitada a incrementos de `0.1`; el salto depende del valor elegido para `step`.


## Silenciar el vídeo con muted


Para silenciar el reproductor es preferible utilizar la propiedad booleana `muted` en lugar de cambiar `volume` a `0`. De este modo se conserva el volumen anterior y puede recuperarse al desmarcar la casilla.


```javascript
silencio.addEventListener("change", (event) => {
  video.muted = event.currentTarget.checked;
});
```


Cuando `muted` vale `true`, el sonido se desactiva. Al volver a establecerlo como `false`, el reproductor utiliza de nuevo el valor almacenado en `volume`. Por ello ya no necesitamos mantener manualmente una variable como `oldvolume`.


## Sincronizar los controles de volumen


El usuario también puede cambiar el volumen mediante los controles nativos del vídeo. El evento `volumechange` se dispara cuando se modifica `volume` o `muted`, por lo que podemos utilizarlo para mantener sincronizados el slider, la casilla y el porcentaje visible:


```javascript
function actualizarControles() {
  const volumenVisible = video.muted ? 0 : video.volume;

  volumen.value = String(volumenVisible);
  silencio.checked = video.muted;
  valorVolumen.value = `${Math.round(volumenVisible * 100)}%`;
}

video.addEventListener("volumechange", actualizarControles);
actualizarControles();
```


Al mover el slider hasta `0`, el vídeo se silencia. Si se vuelve a mover hacia un valor mayor, conviene retirar el silencio automáticamente:


```javascript
volumen.addEventListener("input", (event) => {
  const nuevoVolumen = Number(event.currentTarget.value);

  video.volume = nuevoVolumen;
  video.muted = nuevoVolumen === 0;
});
```


## Código completo para controlar el volumen


El ejemplo completo queda de la siguiente forma:


```html
<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Controlar el volumen de un vídeo HTML5</title>
</head>
<body>
  <video id="mivideo" controls width="640">
    <source src="/media/video-ejemplo.mp4" type="video/mp4">
    Tu navegador no admite el elemento video.
  </video>

  <div>
    <label for="volumen">
      Volumen: <output id="valor-volumen">100%</output>
    </label>
    <input
      id="volumen"
      type="range"
      min="0"
      max="1"
      step="0.05"
      value="1"
      aria-controls="mivideo"
    >
  </div>

  <div>
    <input id="silencio" type="checkbox">
    <label for="silencio">Silenciar</label>
  </div>

  <script>
    const video = document.getElementById("mivideo");
    const volumen = document.getElementById("volumen");
    const silencio = document.getElementById("silencio");
    const valorVolumen = document.getElementById("valor-volumen");

    function actualizarControles() {
      const volumenVisible = video.muted ? 0 : video.volume;

      volumen.value = String(volumenVisible);
      silencio.checked = video.muted;
      valorVolumen.value = `${Math.round(volumenVisible * 100)}%`;
    }

    volumen.addEventListener("input", (event) => {
      const nuevoVolumen = Number(event.currentTarget.value);

      video.volume = nuevoVolumen;
      video.muted = nuevoVolumen === 0;
    });

    silencio.addEventListener("change", (event) => {
      video.muted = event.currentTarget.checked;
    });

    video.addEventListener("volumechange", actualizarControles);
    actualizarControles();
  </script>
</body>
</html>
```


## Consideraciones de compatibilidad y accesibilidad

- Conserva el atributo `controls` para que el usuario disponga de los controles nativos si el código personalizado no se ejecuta.
- Utiliza elementos `<label>` asociados a cada control y muestra el valor actual del volumen.
- La modificación programática de `volume` puede estar limitada en algunos navegadores o dispositivos. En esos casos, el usuario deberá controlar el volumen desde el sistema o los controles nativos.
- No inicies automáticamente un vídeo con sonido: los navegadores pueden bloquear la reproducción y una reproducción inesperada perjudica la experiencia de uso.
- El evento `volumechange` permite reflejar cambios efectuados tanto desde el slider como desde el reproductor.

Con esta estructura podemos controlar el volumen de un vídeo HTML5 con un slider, ofrecer una opción de silencio y mantener todos los controles sincronizados.

