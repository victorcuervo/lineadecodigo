---
title: "Ventanas de información con imágenes en Google Maps"
description: "Aprende a crear ventanas de información con imágenes en Google Maps usando InfoWindow, HTML y marcadores avanzados con un ejemplo actualizado y accesible."
date: 2009-09-23
updatedDate: 2026-09-24
tags: ["google maps","gmap2","glatlng","openinfowindow"]
slug: google/maps/ventanas-de-informacion-con-imagenes-en-google-maps
type: doc
topic: google
id: 2c8a9dfb-adca-81a2-9d71-fd666a4edb61
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_google/blob/master/GoogleMaps/ventana-informacion-imagen/ventana-informacion-imagen.html
---

Las ventanas de información con imágenes en Google Maps permiten mostrar contenido visual y contextual al seleccionar un marcador. Además de texto, una ventana puede incluir una imagen, encabezados, listas y enlaces mediante contenido [`HTML`](https://lineadecodigo.com/html/).


## Preparar el mapa y su contenedor


El primer paso consiste en crear un elemento que actúe como contenedor del mapa. Es importante asignarle una altura mediante [`CSS`](https://lineadecodigo.com/css/); de lo contrario, el mapa no será visible aunque se haya cargado correctamente.


```html
<div id="mapa" aria-label="Mapa con la ubicación de Casa Rural Los Tejos"></div>

<script
  async
  src="https://maps.googleapis.com/maps/api/js?key=TU_CLAVE_API&loading=async&callback=initMap">
</script>
```


```css
#mapa {
  width: 100%;
  height: 600px;
}
```


Sustituye `TU_CLAVE_API` por una clave válida de [Google Maps](https://lineadecodigo.com/google/maps/) Platform. En un proyecto real conviene restringir la clave por dominio y habilitar únicamente las `API` necesarias.


## Crear una ventana de información con una imagen


La clase `InfoWindow` representa la ventana emergente. Su propiedad `content` admite un nodo del `DOM` o una cadena con marcado [`HTML`](https://lineadecodigo.com/html/). En este ejemplo se crea un marcador mediante `AdvancedMarkerElement` y se abre la ventana cuando el usuario lo selecciona.


```javascript
async function initMap() {
  const { Map, InfoWindow } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  const posicion = { lat: 40.381351, lng: -5.764591 };

  const mapa = new Map(document.getElementById("mapa"), {
    center: posicion,
    zoom: 15,
    mapId: "mapa",
  });

  const marcador = new AdvancedMarkerElement({
    map: mapa,
    position: posicion,
    title: "Casa Rural Los Tejos",
    gmpClickable: true,
  });

  const contenido = document.createElement("article");
  contenido.className = "ventana-informacion";
  contenido.innerHTML = `
    <h3>Casa Rural Los Tejos</h3>
    <img
      src="casarural.jpg"
      alt="Fachada de Casa Rural Los Tejos"
      width="180"
      height="120">
    <p>Distribución:</p>
    <ul>
      <li>1 habitación de matrimonio</li>
      <li>2 habitaciones dobles</li>
      <li>2 cuartos de baño completos</li>
      <li>1 aseo</li>
      <li>Cocina</li>
    </ul>
  `;

  const ventana = new InfoWindow({
    content: contenido,
    ariaLabel: "Información de Casa Rural Los Tejos",
  });

  marcador.addEventListener("gmp-click", () => {
    ventana.open({
      map: mapa,
      anchor: marcador,
    });
  });
}
```


La posición se define con un objeto que contiene `lat` y `lng`. El marcador utiliza esas coordenadas y actúa como ancla de `InfoWindow`, por lo que la ventana queda colocada sobre él.


La propiedad `ariaLabel` proporciona un nombre accesible para la ventana. La imagen también incluye el atributo `alt`, así como `width` y `height`, que ayudan a reservar su espacio antes de que termine de cargarse.


### Dar formato al contenido


El contenido puede organizarse con [`CSS`](https://lineadecodigo.com/css/) para evitar que la imagen y el texto aparezcan desordenados dentro de la ventana:


```css
.ventana-informacion {
  max-width: 360px;
}

.ventana-informacion img {
  float: left;
  margin: 0 1rem 0.75rem 0;
  object-fit: cover;
}

.ventana-informacion h3 {
  margin-top: 0;
}
```


En este caso, la imagen se alinea a la izquierda y la lista fluye a su alrededor. Para diseños más complejos se puede utilizar `display: grid` o `display: flex` en lugar de `float`.


## Consideraciones prácticas

- Utiliza imágenes optimizadas para reducir el tiempo de carga de la ventana.
- Incluye siempre un atributo `alt` descriptivo cuando la imagen aporte información.
- Evita introducir demasiado contenido; una ventana debe complementar el mapa, no sustituir una página completa.
- Reutiliza una única instancia de `InfoWindow` si el mapa contiene muchos marcadores.
- Restringe la clave de la `API` y supervisa su uso desde Google Cloud Console.
- Valida cualquier contenido dinámico antes de incorporarlo al `DOM`.

Con esta actualización, la ventana de información mantiene el objetivo del ejemplo original —mostrar una imagen y contenido estructurado sobre un mapa—, pero utiliza las clases y patrones actuales de [Google Maps](https://lineadecodigo.com/google/maps/) JavaScript API.

