---
title: "Modificar longitud y latitud en Google Maps"
description: "Aprende a modificar longitud y latitud en Google Maps con un formulario, validación de coordenadas y los métodos panTo y setCenter de la API actual."
date: 2009-01-16
updatedDate: 2026-09-24
tags: ["latitud","longitud","panTo","setCenter","api","LatLngLiteral"]
slug: google/maps/modificar-longitud-y-latitud-en-google-maps
type: doc
topic: google
id: 2c8a9dfb-adca-81cb-8fa3-fd4a94f8c2ca
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_google/blob/master/GoogleMaps/mover-centro-mapa.html
---

Modificar longitud y latitud en Google Maps permite cambiar dinámicamente el centro de un mapa a partir de unas coordenadas introducidas por el usuario. En este ejemplo crearemos un formulario para escribir la latitud y la longitud, validaremos ambos valores y desplazaremos el mapa sin recargar la página.


## Crear el contenedor del mapa


El mapa necesita un elemento contenedor con una altura definida. También añadimos el formulario con dos campos numéricos y los botones para cambiar las coordenadas o regresar al punto inicial.


```html
<div id="mapa" aria-label="Mapa interactivo"></div>

<form id="formulario-coordenadas">
  <label for="latitud">Latitud:</label>
  <input
    id="latitud"
    name="latitud"
    type="number"
    step="any"
    min="-90"
    max="90"
    value="40.655997"
    required>

  <label for="longitud">Longitud:</label>
  <input
    id="longitud"
    name="longitud"
    type="number"
    step="any"
    min="-180"
    max="180"
    value="-4.700518"
    required>

  <button type="submit">Cambiar posición</button>
  <button id="restablecer" type="button">Punto de origen</button>
</form>

<p id="mensaje" role="status" aria-live="polite"></p>
```


Los atributos `min`, `max` y `step="any"` ayudan a introducir coordenadas válidas. Aun así, también comprobaremos los valores con [JavaScript](https://lineadecodigo.com/javascript/) antes de utilizarlos.


## Dar tamaño al mapa con CSS


Sin una altura explícita, el contenedor puede ocupar cero píxeles y el mapa no será visible. Podemos definir su tamaño con [CSS](https://lineadecodigo.com/css/):


```css
#mapa {
  width: 100%;
  height: 500px;
  margin-bottom: 1rem;
}

#formulario-coordenadas {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;
}

#formulario-coordenadas input {
  width: 11rem;
}
```


## Cargar Google Maps JavaScript API


Para cargar la `API`, incluye el siguiente `script` al final del documento. Sustituye `TU_CLAVE_API` por una clave válida de [Google Maps](https://lineadecodigo.com/google/maps/) Platform:


```html
<script
  async
  src="https://maps.googleapis.com/maps/api/js?key=TU_CLAVE_API&loading=async&callback=initMap">
</script>
```


El parámetro `callback=initMap` ejecuta `initMap()` cuando la biblioteca está disponible. En producción, restringe la clave por dominio y habilita solo las `API` que necesite el proyecto.


## Inicializar el mapa


La función `initMap()` crea una instancia de `Map` y establece Ávila como punto de origen. La variable `mapa` se declara fuera de la función para que los controladores del formulario puedan reutilizarla.


```javascript
let mapa;

const origen = {
  lat: 40.655997,
  lng: -4.700518,
};

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  mapa = new Map(document.getElementById("mapa"), {
    center: origen,
    zoom: 15,
  });
}
```


La versión actual acepta un objeto `LatLngLiteral` con las propiedades `lat` y `lng`, por lo que no es necesario crear la antigua instancia de `GLatLng`.


## Modificar la longitud y la latitud


El formulario entrega los valores como texto. Antes de mover el mapa, los convertimos con `Number.parseFloat()` y verificamos que sean números finitos dentro de los rangos permitidos:

- La latitud debe estar entre `-90` y `90`.
- La longitud debe estar entre `-180` y `180`.

```javascript
const formulario = document.getElementById("formulario-coordenadas");
const campoLatitud = document.getElementById("latitud");
const campoLongitud = document.getElementById("longitud");
const botonRestablecer = document.getElementById("restablecer");
const mensaje = document.getElementById("mensaje");

function leerCoordenadas() {
  const lat = Number.parseFloat(campoLatitud.value);
  const lng = Number.parseFloat(campoLongitud.value);

  const latitudValida = Number.isFinite(lat) && lat >= -90 && lat <= 90;
  const longitudValida = Number.isFinite(lng) && lng >= -180 && lng <= 180;

  if (!latitudValida || !longitudValida) {
    return null;
  }

  return { lat, lng };
}

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const coordenadas = leerCoordenadas();

  if (!coordenadas) {
    mensaje.textContent = "Introduce una latitud entre -90 y 90 y una longitud entre -180 y 180.";
    return;
  }

  mapa.panTo(coordenadas);
  mensaje.textContent = `Centro actualizado: ${coordenadas.lat}, ${coordenadas.lng}`;
});

botonRestablecer.addEventListener("click", () => {
  campoLatitud.value = origen.lat;
  campoLongitud.value = origen.lng;
  mapa.setCenter(origen);
  mensaje.textContent = "El mapa ha vuelto al punto de origen.";
});
```


El método `panTo()` cambia el centro y normalmente muestra un desplazamiento animado cuando la distancia lo permite. Por su parte, `setCenter()` establece directamente las nuevas coordenadas. Ambos aceptan una instancia de `LatLng` o un objeto `LatLngLiteral`.


## Código completo


El siguiente documento reúne el formulario, los estilos y la lógica en un único ejemplo ejecutable:


```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Modificar longitud y latitud en Google Maps</title>
  <style>
    #mapa {
      width: 100%;
      height: 500px;
      margin-bottom: 1rem;
    }

    #formulario-coordenadas {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      align-items: center;
    }

    #formulario-coordenadas input {
      width: 11rem;
    }
  </style>
</head>
<body>
  <div id="mapa" aria-label="Mapa interactivo"></div>

  <form id="formulario-coordenadas">
    <label for="latitud">Latitud:</label>
    <input id="latitud" type="number" step="any" min="-90" max="90" value="40.655997" required>

    <label for="longitud">Longitud:</label>
    <input id="longitud" type="number" step="any" min="-180" max="180" value="-4.700518" required>

    <button type="submit">Cambiar posición</button>
    <button id="restablecer" type="button">Punto de origen</button>
  </form>

  <p id="mensaje" role="status" aria-live="polite"></p>

  <script>
    let mapa;
    const origen = { lat: 40.655997, lng: -4.700518 };

    async function initMap() {
      const { Map } = await google.maps.importLibrary("maps");

      mapa = new Map(document.getElementById("mapa"), {
        center: origen,
        zoom: 15,
      });
    }

    const formulario = document.getElementById("formulario-coordenadas");
    const campoLatitud = document.getElementById("latitud");
    const campoLongitud = document.getElementById("longitud");
    const botonRestablecer = document.getElementById("restablecer");
    const mensaje = document.getElementById("mensaje");

    function leerCoordenadas() {
      const lat = Number.parseFloat(campoLatitud.value);
      const lng = Number.parseFloat(campoLongitud.value);

      if (
        !Number.isFinite(lat) || lat < -90 || lat > 90 ||
        !Number.isFinite(lng) || lng < -180 || lng > 180
      ) {
        return null;
      }

      return { lat, lng };
    }

    formulario.addEventListener("submit", (evento) => {
      evento.preventDefault();
      const coordenadas = leerCoordenadas();

      if (!coordenadas) {
        mensaje.textContent = "Introduce unas coordenadas válidas.";
        return;
      }

      mapa.panTo(coordenadas);
      mensaje.textContent = `Centro actualizado: ${coordenadas.lat}, ${coordenadas.lng}`;
    });

    botonRestablecer.addEventListener("click", () => {
      campoLatitud.value = origen.lat;
      campoLongitud.value = origen.lng;
      mapa.setCenter(origen);
      mensaje.textContent = "El mapa ha vuelto al punto de origen.";
    });
  </script>

  <script
    async
    src="https://maps.googleapis.com/maps/api/js?key=TU_CLAVE_API&loading=async&callback=initMap">
  </script>
</body>
</html>
```

