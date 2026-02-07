---
title: "Generando lineas geodésicas en Google Maps"
description: "Aprende a crear líneas geodésicas en Google Maps usando GPolyline y la propiedad geodesic para visualizar la distancia más corta entre dos puntos."
date: 2007-12-12
updatedDate: 2026-02-07
tags: ["glatlng","gpolyline"]
slug: google/maps/generando-lineas-geodesicas-en-google-maps
type: doc
topic: google
id: 2c8a9dfb-adca-81ed-b7ab-e375b9b68caa
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_google/blob/master/GoogleMaps/linea-geodesica.html
---

Una línea de geodésica es la línea de menor longitud entre dos puntos dados. Podríamos hablar de la distancia menor entre dos puntos terrestres.


Y es que si vemos un mapa del mundo aplanado, la distancia más corta entre dos puntos no es una línea recta, sino que será la línea geodésica.


En el [artículo base](http://programa-con-google.blogspot.com/2007/12/lneas-geodsicas-con-el-api-de-google.html) de este original, el autor habla de un viaje Londres-San Francisco, en el cual la ruta que se sigue no es la línea recta que atravesaría todo Estados Unidos, sino que el avión sube hasta Groelandia y entra por la frontera de Canada, siguiendo la línea geodésica.


Si alguna vez voláis desde Europa a la costa oeste de los Estados Unidos (San Francisco, Seattle,...) podréis comprobar esta ruta y si tenéis suerte, disfrutar de unos bellos paisajes. Pero volvamos al código, que nos desviamos.


## Crear una línea geodésica con GPolyline


[Google Maps](http://lineadecodigo.com/tag/google-maps/) nos permite el trazar una línea geodésica entre dos puntos dados. Para ello nos apoyaremos en la clase `GPolyline`. La misma que nos sirve para crear un polígono definiendo sus vértices mediante longitudes-latitudes.


La estructura general de `GPolyline` es la siguiente:


```javascript
GPolyline(latlngs, color?, weight?, opacity?, opts?)
```


## Parámetros de GPolyline


Los parámetros son los siguientes:

- **latlngs**, es un array de longitudes-latitudes. Las cuales representamos ayudándonos de la clase `GLatLng`.
- **color?**, es el color de la línea que dibujará el polígono. La interrogación demarca su opcionalidad.
- **weight?**, el ancho de la línea en píxeles.
- **opacity?**, opacidad de la línea. Que se indicará con un valor entre 0 y 1.
- **opts?**, las opciones del polígono. Para nuestro ejemplo el campo más importante.

Decimos que el parámetro `opts` es el más importante, ya que dentro de las opciones que se le pueden pasar a la clase `GPolyline`, una de ellas es `geodesic`. Esta propiedad indicará si la línea a pintar es una línea geodésica, valor `true` o línea normal, valor `false`.


Así que lo primero definimos esta propiedad:


```javascript
var lineageodesica={geodesic:true};
var linearecta={geodesic:false};
```


## Inicializar GPolyline


Ahora inicializamos la clase `GPolyline`:


```javascript
var geodesica = new GPolyline([
      new GLatLng(51.5002, -0.1262),  // Londres
      new GLatLng(47.6801, -122.3300)  // Seattle
], "#ff0000", 5, 0.7, lineageodesica);
```


Y solo nos quedará añadirla al mapa que hayamos cargado:


```javascript
map.addOverlay(geodesica);
```


Ya tendremos cargada la línea geodésica en el mapa.


## Calcular la distancia


Una cosa interesante es que la clase `GPolyline`, nos devuelve la distancia entre los dos puntos con el método `.getLength()`. Así podremos saber la distancia entre los dos puntos marcados.


Vía: [Programa con Google](http://programa-con-google.blogspot.com/2007/12/lneas-geodsicas-con-el-api-de-google.html).

