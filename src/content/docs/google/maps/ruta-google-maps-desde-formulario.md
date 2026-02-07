---
title: "Ruta Google Maps desde formulario"
description: "Aprende a calcular rutas en Google Maps desde un formulario HTML usando DirectionsService y DirectionsRenderer para mostrar origen, destino y ruta."
date: 2015-10-17
updatedDate: 2026-02-07
tags: ["directionsservice","directionsrenderer","map","travelmode"]
slug: google/maps/ruta-google-maps-desde-formulario
type: doc
topic: google
id: 0a9e0e63-2ccc-42ca-b0dc-a254915da09b
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_google/blob/master/GoogleMaps/rutas-google-maps-formulario.html
---

En este ejemplo vamos a ver como podemos crear una Ruta [Google Maps](http://www.manualweb.net/google-maps/) desde formulario. Es decir vamos a presentar al usuario un formulario dónde podrá elegir el origen y el destino y mediante esos datos le vamos a pintar la ruta en un mapa de [Google Maps](http://www.manualweb.net/google-maps/) mediante su API.


Lo primero que te recomendaría que le echases un ojo a [los artículos sobre uso del API de Google Maps](http://lineadecodigo.com/tag/google-maps/) y si vas a empezar que realizases el ejemplo de [Cargar un Mapa de Google Maps](http://lineadecodigo.com/google/cargar-google-maps-v3/).


## Definir el área del mapa y la ruta


Lo primero que vamos a hacer es poner el área del mapa y de la ruta en una página web.


```html
<div id="map_canvas" style="width: 50%; float:left;"></div>
<div id="directionsPanel" style="width: 50%;float:left;"></div>
```


Como podéis observar hemos dividido la pantalla en dos partes, a la izquierda irá el mapa y a la derecha la explicación de la ruta.


## Cargar Google Maps


Ahora vamos a cargar [Google Maps](http://www.manualweb.net/google-maps/). Y además posicionaremos un mapa por defecto. Lo primero será cargar la librería de [Google Maps](http://www.manualweb.net/google-maps/).


```html
<script src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>
```


Y luego inicializar el mapa.


```javascript
var map;

function initialize(){  	
  var mapOptions = {
    zoom: 12,
    center: new google.maps.LatLng(40.674389,-4.700432),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
				
  map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions); 
}

google.maps.event.addDomListener(window, 'load', initialize);
```


Vemos como utilizando el objeto `Map` hemos cargado el mapa sobre la capa que habíamos definido como `map_canvas`. En este caso no nos hemos complicado mucho la vida y hemos puesto un punto concreto del mapa. Pero si quieres hacerlo más cercano al usuario puedes ponerle su ubicación actual, para ello revisa el ejemplo [Geolocalizando a un usuario con Google Maps y HTML5](http://lineadecodigo.com/html5/geolocalizando-un-usuario-con-html5-en-google-maps/).


## Crear el formulario


Ahora vamos a crear un formulario con dos campos, origen y destino, y un botón para calcular la ruta.


```html
<form id="ruta">
  <label>Origen:</label>
  <input id="origen" name="origen" type="text"></input>
  <label>Destino:</label>
  <input id="destino" name="destino" type="text"></input>
  <button id="calcularRuta">Calcular Ruta</button>
</form>
```


## Escuchar el evento del botón


Sobre el botón vamos a crear un escuchador de eventos mediante el método `.addEventListener()`. Básicamente para que se lance el cálculo de la ruta ante un click del botón.


```javascript
var boton = document.getElementById("calcularRuta");

boton.addEventListener("click", function(ev){
	
	var origen = document.getElementById("origen").value;
	var destino = document.getElementById("destino").value;
	
	cargarRuta(origen,destino);
	
	ev.preventDefault();	
	
},false);
```


Vemos que utilizamos el método [`.preventDefault()`](https://www.w3api.com/DOM/Event/preventDefault/) para evitar que se siga ejecutando el comportamiento normal del click y únicamente haga lo que determinemos en la función `cargarRuta()`. A esta función `cargarRuta()` se le pasan los valores de los campos del formulario a los que hemos accedido mediante el método [`.getElementById()`](https://www.w3api.com/DOM/.getElementById()). 


## Calcular la ruta con DirectionsService


Pasemos a ver como cargar la ruta. Lo primero será construir un objeto request que indique el origen, destino y el modo de ruta a utilizar. En nuestro caso vamos a utilizar el modo conducción o `google.maps.TravelMode.DRIVING`.


```javascript
var request = {
  origin:origen,
  destination:destino,
  travelMode: google.maps.TravelMode.DRIVING
};
```


Ahora necesitamos crear un objeto `DirectionsService` que será el calcule la ruta y un objeto `DirectionsRenderer` que será el que la pinte.


```javascript
var directionsService = new google.maps.DirectionsService();
var directionsDisplay = new google.maps.DirectionsRenderer();

directionsDisplay.setMap(map);
var panel = document.getElementById("directionsPanel");
panel.innerHTML = ""; // Vacío el panel, por si buscamos varias veces
directionsDisplay.setPanel(panel);
	
directionsService.route(request, function(result, status) {
  if (status == google.maps.DirectionsStatus.OK) {
    directionsDisplay.setDirections(result);
  }
});
```


Al objeto encargado de la visualización `DirectionsRenderer` hay que indicarle dónde esta el mapa y dónde esta la ruta. Es importante que en el caso de la ruta borremos el contenido de lo que haya ya calculado (si se están calculando diferentes rutas) ya que si no añadirá siempre el contenido al final. 


De esta forma tan sencilla hemos creado una página que permita calcular una ruta [Google Maps](http://www.manualweb.net/google-maps/) desde formulario.

