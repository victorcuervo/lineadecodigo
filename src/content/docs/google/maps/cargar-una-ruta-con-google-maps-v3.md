---
title: "Cargar una ruta con Google Maps v3"
description: "Aprende a cargar una ruta con Google Maps v3 y mejora tu aplicación web con direcciones visuales y textuales que cautivarán a tus usuarios."
date: 2012-08-30
updatedDate: 2026-02-07
tags: ["map","mapoptions","route","directionsservice","directionsrenderer"]
slug: google/maps/cargar-una-ruta-con-google-maps-v3
type: doc
topic: google
id: 2c8a9dfb-adca-815c-ad12-e25ee2716b45
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_google/blob/master/GoogleMaps/rutas-google-maps-v3.html
---

El otro día vimos la nueva forma de [cargar Google Maps en su versión 3](http://lineadecodigo.com/google/cargar-google-maps-v3/). Y también veíamos que había cambiado su **API**. Así que nuestro ejemplo que [Comunica dos direcciones en Google Maps](http://lineadecodigo.com/google/comunicando-dos-direcciones-en-google-maps/) se nos ha quedado un poco obsoleto (aunque sigue funcionando).


Ahora vamos a ver cómo cargar una **ruta** con [Google Maps v3](http://www.manualweb.net/google-maps/).


## Cargar el API de Google Maps v3


Lo primero que haremos será cargar el **API** de [Google Maps v3](http://www.manualweb.net/google-maps/).


```html
<script src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>
```


## Instanciar el mapa


E instanciamos nuestro **Mapa** mediante la **clase** [**google.maps.Map**](http://google.maps.map/):


```javascript
var mapOptions = {
  zoom: 12,
  center: new google.maps.LatLng(40.674389,-4.700432),
  mapTypeId: google.maps.MapTypeId.ROADMAP
};
	
map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
```


Vemos que en el **objeto mapOptions** pasamos toda la **parametrización** del **mapa**.


## Definir la ruta


Ahora vamos a definir la **Ruta**. Para la **Ruta** tenemos que saber que [Google Maps v3](http://www.manualweb.net/google-maps/) nos ofrece un par de objetos.


El primero y más importante es **google.maps.DirectionsService**. Este **objeto** será el encargado de calcularnos una **ruta** y devolvernos un **objeto DirectionsResult** con toda la información de la **ruta**.


Para que el **objeto DirectionsService** nos calcule la **ruta** le tenemos que pasar un **objeto DirectionsRequest** indicándole la información de la **ruta**: **origen**, **destino**, **forma de desplazamiento**,...


```javascript
var request = {
  origin:"Madrid",
  destination:"Avila",
  travelMode: google.maps.TravelMode.DRIVING
};
```


## Calcular la ruta


Este **objeto DirectionsRequest** se lo pasamos al **DirectionsService** para que calcule la **ruta**. Para ello ejecutamos el **método .route()**


```javascript
directionsService.route(request, function(result, status) {} });
```


El resultado del **método .route()** devuelve el **DirectionsResult** dentro del **atributo result**.


## Renderizar la ruta


Una vez que tenemos el **Resultado** podemos hacer dos cosas. La primera será explotarlo para acceder a toda la información que contiene de las **rutas** y la segunda será representarlo visualmente.


Para este segundo caso contamos con el **objeto google.maps.DirectionsRenderer**. Dicho **objeto** es capaz de renderizar un **mapa** o un **texto** con un **DirectionsResult**.


```javascript
var directionsDisplay = new google.maps.DirectionsRenderer();

directionsDisplay.setMap(map);
directionsDisplay.setPanel(document.getElementById("directionsPanel"));
```


## Configurar el DirectionsRenderer


Para configurar el **DirectionsRender** utilizamos **.setMap()** para indicarle cual es el **mapa** -objeto Map- y **.setPanel()** para saber cual es la **capa** del documento HTML en la que volcar la **ruta**.


Solo nos quedará pasarle el **DirectionsResult** en la ejecución del **método .route()**


```javascript
directionsService.route(request, function(result, status) {
  if (status == google.maps.DirectionsStatus.OK) {
    directionsDisplay.setDirections(result);
  }
});
```


Ya tenemos cargada nuestra **ruta** de forma visual y textual con [Google Maps v3](http://www.manualweb.net/google-maps/).

