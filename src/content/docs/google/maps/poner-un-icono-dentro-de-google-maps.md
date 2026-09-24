---
title: "Poner un icono dentro de Google Maps"
description: "Aprende a poner un icono dentro de Google Maps con AdvancedMarkerElement, una imagen personalizada y un ejemplo completo de la API web actual."
date: 2009-06-21
updatedDate: 2026-09-24
tags: ["icono","marker","advancedmarkerelement","pinelement","glyphsrc"]
slug: google/maps/poner-un-icono-dentro-de-google-maps
type: doc
topic: google
id: d6d07f1c-d635-489a-93b5-952c6bdf37ce
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_google/blob/master/GoogleMaps/icono-en-mapa/poner-icono-en-mapa.html
---

Poner un icono dentro de Google Maps permite identificar una ubicación concreta y diferenciarla visualmente del resto del mapa. En la versión actual de Maps JavaScript API, la forma recomendada de hacerlo es crear un marcador avanzado con `AdvancedMarkerElement` y añadirle una imagen personalizada.


## Preparar el contenedor del mapa


Primero necesitamos un elemento [`HTML`](https://lineadecodigo.com/html/) en el que se renderizará el mapa:


```html
<div id="mapa" aria-label="Mapa con una ubicación señalada"></div>
```


También debemos asignar una altura al contenedor mediante [CSS](https://lineadecodigo.com/css/):


```css
#mapa {
  width: 100%;
  height: 500px;
}
```


Si el elemento no tiene altura, el mapa puede cargarse correctamente pero no será visible.


## Crear el mapa


La función `initMap()` carga las bibliotecas `maps` y `marker`. Después crea una instancia de `Map` centrada en las coordenadas indicadas:


```javascript
async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  const posicion = {
    lat: 40.655997,
    lng: -4.700518,
  };

  const mapa = new Map(document.getElementById("mapa"), {
    center: posicion,
    zoom: 15,
    mapId: "mapa",
  });
}
```


La propiedad `center` recibe un objeto `LatLngLiteral` con `lat` para la latitud y `lng` para la longitud. Los marcadores avanzados necesitan un `mapId`; durante las pruebas se puede utilizar “mapa”, pero en producción conviene emplear uno configurado en Google Cloud Console.


## Poner un icono personalizado


Para sustituir el marcador predeterminado por una imagen, creamos un elemento `img`, indicamos la ruta del archivo y lo añadimos a `AdvancedMarkerElement`:


```javascript
const imagen = document.createElement("img");
imagen.src = "icono.png";
imagen.alt = "";
imagen.width = 48;
imagen.height = 48;

const marcador = new AdvancedMarkerElement({
  map: mapa,
  position: posicion,
  title: "Ubicación seleccionada",
  anchorLeft: "-50%",
  anchorTop: "-100%",
});

marcador.append(imagen);
```


La propiedad `position` determina dónde aparece el icono y `map` especifica el mapa al que pertenece. El atributo `title` proporciona un texto descriptivo para la ubicación.


Las propiedades `anchorLeft` y `anchorTop` ajustan el punto de anclaje de la imagen. Con los valores del ejemplo, el centro del borde inferior del icono queda alineado con las coordenadas. Si la imagen tiene otra forma, puede ser necesario modificar esos porcentajes.


## Cargar Google Maps JavaScript API


Incluye el siguiente `script` al final del documento y sustituye `TU_CLAVE_API` por una clave válida de [Google Maps](https://lineadecodigo.com/google/maps/) Platform:


```html
<script
  async
  src="https://maps.googleapis.com/maps/api/js?key=TU_CLAVE_API&loading=async&callback=initMap">
</script>
```


El parámetro `callback=initMap` ejecuta la función cuando la biblioteca está disponible. `loading=async` aplica el patrón de carga asíncrona recomendado.


Antes de publicar el mapa, restringe la clave por dominio y habilita únicamente las `API` necesarias.


## Ejemplo completo


El siguiente documento reúne el mapa, el icono personalizado y la carga de la `API`:


```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Poner un icono dentro de Google Maps</title>
  <style>
    #mapa {
      width: 100%;
      height: 500px;
    }
  </style>
</head>
<body>
  <div id="mapa" aria-label="Mapa con una ubicación señalada"></div>

  <script>
    async function initMap() {
      const { Map } = await google.maps.importLibrary("maps");
      const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

      const posicion = {
        lat: 40.655997,
        lng: -4.700518,
      };

      const mapa = new Map(document.getElementById("mapa"), {
        center: posicion,
        zoom: 15,
        mapId: "DEMO_MAP_ID",
      });

      const imagen = document.createElement("img");
      imagen.src = "icono.png";
      imagen.alt = "";
      imagen.width = 48;
      imagen.height = 48;

      const marcador = new AdvancedMarkerElement({
        map: mapa,
        position: posicion,
        title: "Ubicación seleccionada",
        anchorLeft: "-50%",
        anchorTop: "-100%",
      });

      marcador.append(imagen);
    }
  </script>

  <script
    async
    src="https://maps.googleapis.com/maps/api/js?key=TU_CLAVE_API&loading=async&callback=initMap">
  </script>
</body>
</html>
```


Guarda `icono.png` en la misma carpeta que el documento o modifica `imagen.src` para que apunte a su ubicación real. La imagen puede estar en formatos habituales como `PNG`, `JPEG`, `GIF` o `SVG`.


## Utilizar el marcador predeterminado


Si no necesitas una imagen personalizada, puedes crear un marcador avanzado sin añadir ningún elemento gráfico:


```javascript
const marcador = new AdvancedMarkerElement({
  map: mapa,
  position: posicion,
  title: "Ubicación seleccionada",
});
```


En este caso, la `API` mostrará el marcador predeterminado. Esta alternativa resulta útil cuando solo se necesita señalar una posición sin aplicar un diseño específico.


## Personalizar el glifo del marcador


Otra posibilidad consiste en mantener la forma de marcador y cambiar únicamente su símbolo interior mediante `PinElement` y `glyphSrc`:


```javascript
const { AdvancedMarkerElement, PinElement } =
  await google.maps.importLibrary("marker");

const pin = new PinElement({
  background: "#1967d2",
  borderColor: "#0d47a1",
  glyphSrc: "icono.svg",
});

const marcador = new AdvancedMarkerElement({
  map: mapa,
  position: posicion,
  title: "Ubicación seleccionada",
});

marcador.append(pin);
```


`PinElement` permite personalizar el fondo, el borde, el color y el glifo del marcador sin reemplazar toda su forma.

