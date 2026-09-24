---
title: "Poner control de escala con Google Maps"
description: "Aprende a poner el control de escala con Google Maps usando scaleControl, un ejemplo completo y las opciones actuales de Maps JavaScript API."
date: 2007-04-11
updatedDate: 2026-09-24
tags: ["google maps","api","scaleControl"]
slug: google/maps/poner-control-de-escala-con-google-maps
type: doc
topic: google
id: 2c8a9dfb-adca-816b-9e03-d59a35c05889
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_google/blob/master/GoogleMaps/escala-en-google-maps.html
---

Poner el control de escala con [Google Maps](https://lineadecodigo.com/google/maps/) permite mostrar una referencia visual de las distancias representadas en el mapa. La escala cambia automáticamente al modificar el nivel de `zoom`, por lo que ayuda al usuario a interpretar el tamaño real del área visible.


## Qué es el control de escala


El control de escala es un elemento de la interfaz del mapa que muestra una referencia de distancia. No calcula la longitud de una ruta ni mide la separación exacta entre dos puntos; su función es indicar la proporción aproximada entre una distancia representada en pantalla y la distancia real.


En la versión actual de la `API`, este control está desactivado de forma predeterminada. Para mostrarlo, hay que establecer la opción `scaleControl` con el valor `true` al crear el mapa.


## Crear el contenedor del mapa


Primero necesitamos un elemento [`HTML`](https://lineadecodigo.com/html/) en el que se renderizará el mapa:


```html
<div id="mapa" aria-label="Mapa con control de escala"></div>
```


El contenedor debe tener una altura definida. Podemos asignársela mediante [CSS](https://lineadecodigo.com/css/):


```css
#mapa {
  width: 100%;
  height: 500px;
}
```


Sin una altura explícita, el elemento puede ocupar cero píxeles y el mapa no será visible.


## Activar el control de escala


La opción `scaleControl: true` activa el control al construir la instancia de `Map`. El siguiente código centra el mapa en Ávila y utiliza un nivel de `zoom` de `12`:


```javascript
async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  const mapa = new Map(document.getElementById("mapa"), {
    center: {
      lat: 40.674389,
      lng: -4.700432,
    },
    zoom: 12,
    scaleControl: true,
  });
}
```


La propiedad `center` recibe un objeto `LatLngLiteral` con `lat` para la latitud y `lng` para la longitud. La propiedad `zoom` determina el área visible, mientras que `scaleControl` controla la visibilidad de la escala.


A diferencia de la implementación antigua, no es necesario crear una instancia de `GScaleControl` ni añadirla mediante `addControl()`. La configuración se realiza directamente a través de las opciones de `Map`.


## Cargar Google Maps JavaScript API


Incluye el siguiente `script` al final del documento. Sustituye `TU_CLAVE_API` por una clave válida de [Google Maps](https://lineadecodigo.com/google/maps/) Platform:


```html
<script
  async
  src="https://maps.googleapis.com/maps/api/js?key=TU_CLAVE_API&loading=async&callback=initMap">
</script>
```


El parámetro `callback=initMap` indica qué función debe ejecutarse cuando la biblioteca esté disponible. El parámetro `loading=async` permite aplicar el patrón de carga asíncrona recomendado.


En un entorno de producción, restringe la clave por dominio y habilita únicamente las `API` necesarias para reducir el riesgo de usos no autorizados.


## Ejemplo completo


El siguiente documento reúne el contenedor, los estilos, la inicialización del mapa y la carga de la `API`:


```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Control de escala con Google Maps</title>
  <style>
    #mapa {
      width: 100%;
      height: 500px;
    }
  </style>
</head>
<body>
  <div id="mapa" aria-label="Mapa con control de escala"></div>

  <script>
    async function initMap() {
      const { Map } = await google.maps.importLibrary("maps");

      new Map(document.getElementById("mapa"), {
        center: {
          lat: 40.674389,
          lng: -4.700432,
        },
        zoom: 12,
        scaleControl: true,
      });
    }
  </script>

  <script
    async
    src="https://maps.googleapis.com/maps/api/js?key=TU_CLAVE_API&loading=async&callback=initMap">
  </script>
</body>
</html>
```


Cuando se cargue el mapa, el control de escala aparecerá en su interfaz. Al acercar o alejar la vista, la referencia se actualizará para adaptarse al nuevo nivel de `zoom`.


## Mostrar solo los controles necesarios


Maps JavaScript API incluye varios controles predeterminados. Si quieres simplificar la interfaz, puedes desactivarlos todos mediante `disableDefaultUI` y habilitar únicamente la escala:


```javascript
const mapa = new Map(document.getElementById("mapa"), {
  center: {
    lat: 40.674389,
    lng: -4.700432,
  },
  zoom: 12,
  disableDefaultUI: true,
  scaleControl: true,
});
```


La opción `disableDefaultUI: true` oculta los controles predeterminados, pero `scaleControl: true` vuelve a activar específicamente el control de escala. También se pueden habilitar otros controles de forma individual, como `zoomControl`, `mapTypeControl`, `streetViewControl` o `fullscreenControl`.

