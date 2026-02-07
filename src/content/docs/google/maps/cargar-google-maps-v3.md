---
title: "Cargar Google Maps v3"
description: "Descubre cómo cargar Google Maps v3 en tu página web con un código simple y efectivo que mejora la experiencia del usuario y optimiza la funcionalidad."
date: 2012-08-28
updatedDate: 2026-02-07
tags: ["map","mapoptions"]
slug: google/maps/cargar-google-maps-v3
type: doc
topic: google
id: 2c8a9dfb-adca-81b0-9644-fcafb908cf9e
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_google/blob/master/GoogleMaps/cargando-google-maps-v3.html
---

Hace ya tiempo que vimos como [cargar Google Maps en nuestra página web](http://lineadecodigo.com/google/cargando-google-maps/), si bien este ejemplo estaba basado en Google Maps v2. Versión a la cual Google ha dejado de dar soporte, siendo ahora oficial [Google Maps v3](https://developers.google.com/maps/documentation/javascript/tutorial?hl=es).


Es por ello que en las siguientes líneas veremos como podemos cargar [Google Maps v3](https://developers.google.com/maps/documentation/javascript/tutorial?hl=es) en nuestra página web.


## Características de Google Maps v3


Antes de empezar mencionar que entre las características de [Google Maps v3](https://developers.google.com/maps/documentation/javascript/tutorial?hl=es) encontramos:

- Adecuación al HTML5
- Soporte para dispositivos móviles
- Nueva redefinición del API
- Nuevas funcionalidades para la gestión de mapas
- Soportes multidioma

## Cargar la librería de Google Maps


Manos a la obra... lo primero que tenemos que hacer es cargar la librería:


```html
<script src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>
```


Como podemos ver ya no se necesita el uso de la clave para cargar [Google Maps](http://www.manualweb.net/google-maps/).


## Crear el contenedor del mapa


La estructura de la página será muy similar a anteriores versiones, ya que lo que tendremos que disponer será de una capa [DIV](https://www.w3api.com/HTML/div/) para la carga del mapa.


```html
<div id="map_canvas" style="width: 50%; height: 50%"></div>
```


## Configurar las opciones del mapa


Ahora pasaremos a crear nuestro código [Javascript](https://www.manualweb.net/javascript/). Lo que vamos a hacer es crear un objeto de tipo [google.maps.Map](http://google.maps.map/). A este constructor le vamos a pasar una referencia de la capa sobre la que se va a cargar y las opciones del mapa.


```javascript
map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
```


Como podemos apreciar en el código le hemos pasado un campo mapOptions. Dicho campo reune las propiedades relativas al mapa, como el punto central del mapa, el tipo de mapa a cargar, el zoom a aplicar... el código nos queda de la siguiente forma:


```javascript
var mapOptions = {
  zoom: 12,
  center: new google.maps.LatLng(40.674389,-4.700432),
  mapTypeId: google.maps.MapTypeId.ROADMAP
};
```


## Crear el método initialize


Todo este código lo vamos a poner en un método initialize.


```javascript
function initialize(){
  var mapOptions = {
    zoom: 12,
    center: new google.maps.LatLng(40.674389,-4.700432),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions); 
}
```


## Asociar el evento de carga


Y es que este método initialize lo vamos a ejecutar nada más cargar la página. Es por ello, que a la ejecución del evento onLoad de la página le asociamos este método.


```javascript
google.maps.event.addDomListener(window, 'load', initialize);
```


## Estilos CSS necesarios


Por último tenemos que tener unas consideraciones para el funcionamiento de [Google Maps v3](https://developers.google.com/maps/documentation/javascript/tutorial?hl=es) y es que tanto el [BODY](https://www.w3api.com/HTML/body/) como el [HTML](https://www.w3api.com/HTML/html/) del documento dónde carguemos el mapa tienen que tener una altura de 100%. Es por ello que vamos a añadir el siguiente estilo:


```css
html, body, #map_canvas {
  height: 100%;
}
```


Ya tenemos cargado nuestro mapa con [Google Maps v3](https://developers.google.com/maps/documentation/javascript/tutorial?hl=es).

