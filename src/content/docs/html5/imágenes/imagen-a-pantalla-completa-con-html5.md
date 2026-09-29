---
title: "Imagen a pantalla completa con HTML5"
description: "Imagen a pantalla completa con HTML5: utiliza requestFullscreen, controla la salida y gestiona eventos para crear galerías accesibles y modernas."
date: 2019-01-17
updatedDate: 2026-09-29
tags: ["fullscreen","requestfullscreen","fullscreenchange","img","image"]
slug: html5/imagenes/imagen-a-pantalla-completa-con-html5
type: doc
topic: html5
id: 805d54fb-8133-4699-b1c5-e6009084f5ee
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Fullscreen%20API/imagen-pantalla-completa.html
---

**Mostrar una imagen a pantalla completa con HTML5** es útil en galerías, visores de productos, portfolios y cualquier interfaz en la que el usuario necesite observar una fotografía con más detalle. Para conseguirlo utilizaremos la `Fullscreen API`, que permite presentar un elemento y sus descendientes ocupando toda la pantalla.


El método principal es `requestFullscreen()`. La solicitud es asíncrona, devuelve una `Promise` y debe iniciarse como consecuencia de una interacción del usuario, como un clic, un toque o un doble clic. El navegador puede rechazarla, por lo que conviene controlar los errores.


## Crear la imagen en HTML5


Primero añadimos la imagen al documento. Conservamos un atributo `id` para poder localizarla desde el `DOM` y utilizamos un texto `alt` descriptivo:


```html
<img
  src="imagen.png"
  id="miimagen"
  alt="Paisaje de montaña al atardecer"
/>
```


El atributo `alt` mejora la accesibilidad y ofrece una alternativa cuando el recurso no puede mostrarse. El `id` debe ser único dentro de la página.


## Activar la imagen a pantalla completa


En navegadores actuales basta con llamar a `requestFullscreen()` sobre el elemento. Los antiguos prefijos `mozRequestFullScreen`, `webkitRequestFullscreen` y `msRequestFullscreen` ya no son necesarios en un desarrollo moderno.


La siguiente función comprueba si el modo de pantalla completa está habilitado y captura un posible rechazo de la `Promise`:


```javascript
async function mostrarPantallaCompleta(elemento) {
  if (!document.fullscreenEnabled) {
    console.warn("El modo de pantalla completa no está disponible.");
    return;
  }

  try {
    await elemento.requestFullscreen();
  } catch (error) {
    console.error("No se pudo activar la pantalla completa:", error);
  }
}
```


Para recuperar la imagen utilizamos `document.getElementById()`:


```javascript
const imagen = document.getElementById("miimagen");
```


### Activación mediante doble clic


El ejemplo original activa la imagen cuando el usuario realiza un doble clic. Para ello registramos el evento `dblclick` con `addEventListener()`:


```javascript
imagen.addEventListener("dblclick", () => {
  mostrarPantallaCompleta(imagen);
});
```


Esta llamada se ejecuta dentro de una interacción del usuario, requisito habitual de la `Fullscreen API`. No es recomendable intentar entrar automáticamente en pantalla completa al cargar la página.


### Añadir un botón accesible


El doble clic puede no resultar evidente y no es la interacción más cómoda en dispositivos táctiles o para quienes utilizan el teclado. Un botón visible ofrece una alternativa accesible:


```html
<button type="button" id="ampliar-imagen">
  Ver imagen a pantalla completa
</button>
```


```javascript
const botonAmpliar = document.getElementById("ampliar-imagen");

botonAmpliar.addEventListener("click", () => {
  mostrarPantallaCompleta(imagen);
});
```


De este modo se conserva el doble clic del ejemplo inicial, pero también se proporciona un control comprensible y accesible mediante teclado.


## Salir del modo de pantalla completa


El usuario puede salir normalmente con la tecla `Esc`. Si la interfaz necesita un control propio, se utiliza `document.exitFullscreen()`, que también devuelve una `Promise`:


```html
<button type="button" id="salir-pantalla-completa">
  Salir de pantalla completa
</button>
```


```javascript
const botonSalir = document.getElementById("salir-pantalla-completa");

botonSalir.addEventListener("click", async () => {
  if (!document.fullscreenElement) {
    return;
  }

  try {
    await document.exitFullscreen();
  } catch (error) {
    console.error("No se pudo salir de pantalla completa:", error);
  }
});
```


La propiedad `document.fullscreenElement` contiene el elemento que ocupa la pantalla completa. Cuando su valor es `null`, el documento se encuentra en el modo normal.


## Detectar cambios y errores


El evento `fullscreenchange` se dispara tanto al entrar como al salir. Podemos consultar `document.fullscreenElement` para distinguir ambos estados:


```javascript
document.addEventListener("fullscreenchange", () => {
  if (document.fullscreenElement) {
    console.log("La imagen está a pantalla completa.");
  } else {
    console.log("Se ha cerrado la pantalla completa.");
  }
});
```


También es posible escuchar `fullscreenerror` para registrar solicitudes fallidas:


```javascript
document.addEventListener("fullscreenerror", (evento) => {
  console.error("Error al cambiar el modo de pantalla completa", evento);
});
```


Aunque el bloque `try...catch` suele ser suficiente para controlar la operación concreta, estos eventos son útiles cuando varios elementos pueden activar el modo de pantalla completa.


## Ajustar la imagen en pantalla completa


El pseudoselector `:fullscreen` permite aplicar estilos únicamente mientras la imagen ocupa la pantalla. `object-fit: contain` evita deformarla y mantiene toda la fotografía visible:


```css
#miimagen:fullscreen {
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-color: #000;
}
```


La imagen no gana resolución al ampliarse. Para evitar pixelación, conviene servir un archivo con dimensiones suficientes y optimizar su peso para no perjudicar el tiempo de carga.


## Aplicarlo a una galería de imágenes


Si la galería contiene varias imágenes, no debemos repetir el mismo `id`. Podemos asignar una clase y registrar el manejador en cada elemento:


```html
<div class="galeria">
  <img class="imagen-ampliable" src="paisaje-1.jpg" alt="Lago entre montañas" />
  <img class="imagen-ampliable" src="paisaje-2.jpg" alt="Bosque cubierto de niebla" />
  <img class="imagen-ampliable" src="paisaje-3.jpg" alt="Costa rocosa al amanecer" />
</div>
```


```javascript
const imagenes = document.querySelectorAll(".imagen-ampliable");

imagenes.forEach((imagenGaleria) => {
  imagenGaleria.addEventListener("dblclick", () => {
    mostrarPantallaCompleta(imagenGaleria);
  });
});
```


`document.querySelectorAll()` devuelve una colección de elementos y `forEach()` permite asociar el evento a cada imagen. En una interfaz real, es recomendable acompañar cada miniatura con un botón de ampliación o hacerla activable mediante teclado.


## Ejemplo completo


Este ejemplo reúne la imagen, el botón de entrada y la lógica necesaria en [JavaScript](https://lineadecodigo.com/javascript/):


```html
<img
  src="imagen.png"
  id="miimagen"
  alt="Paisaje de montaña al atardecer"
/>

<button type="button" id="ampliar-imagen">
  Ver imagen a pantalla completa
</button>

<script>
  const imagen = document.getElementById("miimagen");
  const botonAmpliar = document.getElementById("ampliar-imagen");

  async function mostrarPantallaCompleta(elemento) {
    if (!document.fullscreenEnabled) {
      console.warn("El modo de pantalla completa no está disponible.");
      return;
    }

    try {
      await elemento.requestFullscreen();
    } catch (error) {
      console.error("No se pudo activar la pantalla completa:", error);
    }
  }

  imagen.addEventListener("dblclick", () => {
    mostrarPantallaCompleta(imagen);
  });

  botonAmpliar.addEventListener("click", () => {
    mostrarPantallaCompleta(imagen);
  });
</script>
```


## Consideraciones de compatibilidad y seguridad


La solicitud de pantalla completa no está garantizada: el navegador o el usuario pueden rechazarla. Si el contenido se ejecuta dentro de un `iframe`, este debe permitir la función mediante `allowfullscreen` o una política equivalente, y la directiva `Permissions-Policy` no debe bloquear `fullscreen`.


Por tanto, una implementación robusta debe:

- iniciar la solicitud desde una acción del usuario;
- gestionar el rechazo de `requestFullscreen()`;
- comprobar el estado con `document.fullscreenElement`;
- ofrecer una alternativa visible al doble clic;
- conservar textos `alt` útiles en las imágenes;
- probar el comportamiento en los navegadores y dispositivos compatibles con el proyecto.

Con esta estructura podemos **poner una imagen a pantalla completa con HTML5** de forma moderna, controlada y reutilizable en una galería completa.

