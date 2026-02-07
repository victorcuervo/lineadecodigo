---
title: "Incluir una marca en Google Maps"
description: "Aprende a añadir marcadores en Google Maps usando el objeto Marker con coordenadas LatLng, mapa y etiqueta para ubicaciones específicas."
date: 2012-09-29
updatedDate: 2026-02-07
tags: ["marker","latlng","map","position"]
slug: google/maps/incluir-una-marca-en-google-maps
type: doc
topic: google
id: 2c8a9dfb-adca-81ad-b466-d51d3b84cccf
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_google/blob/master/GoogleMaps/incluir-marca-en-mapa.html
---

Cuando trabajemos con los mapas de [Google Maps](http://www.manualweb.net/google-maps/), una vez que hayamos ubicado un sitio una de las primeras cosas que querremos hacer es añadir una marca dentro del mapa. Vamos a ver qué pasos hay que seguir.


## Cargar Google Maps


Lo primero como en todo ejemplo de [Google Maps](http://www.manualweb.net/google-maps/) será el cargar el mapa. Recuerda la forma en la que cargamos la librería de Google Maps para la versión 3.


```html
<script src="https://maps.googleapis.com/maps/api/js?sensor=false"></script>
```


Y acto seguido inicializar el mapa sobre una capa:


```javascript
var myLatlng = new google.maps.LatLng(40.65599461,-4.69373720);
var mapOptions = {
  zoom: 12,
  center: myLatlng,
  mapTypeId: google.maps.MapTypeId.ROADMAP
};
					
map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
```


Vemos que el primer parámetro del objeto `Map` es el ID de la capa en la que cargaremos el mapa y el segundo son las opciones de configuración del mapa.


## Crear la marca con Marker


Ahora vamos a incluir nuestra marca. Lo primero que tenemos que saber es que la marca se representa mediante el objeto `Marker`. Y que en el objeto de inicialización especificaremos, al menos:

- Las **coordenadas de la marca** que estarán representadas por un objeto `LatLng`. Como ya habíamos definido uno para el centro del mapa, vamos a reutilizarlo.
- El **mapa** sobre el cual queremos añadir la marca.
- La **etiqueta** que queremos que aparezca al pasar sobre la marca.

```javascript
var marker = new google.maps.Marker({
  position: myLatlng,
  map: map,
  title:"Avila de los Caballeros"
});
```


Hay otras opciones que podemos indicar al crear el objeto `Marker`, como pueden ser: si queremos que se pueda hacer drag&drop de la marca, si queremos que la marca haga sombra,...


Así, simplemente creando la marca tenemos incluida nuestra marca dentro de un mapa de [Google Maps](http://www.manualweb.net/google-maps/).

