---
title: "Comunicando dos direcciones en Google Maps"
description: "Aprende a comunicar direcciones en Google Maps utilizando la API y GDirections para trazar rutas precisas entre dos puntos de forma efectiva."
date: 2007-06-09
updatedDate: 2026-02-07
tags: ["gdirections","load","route"]
slug: google/maps/comunicando-dos-direcciones-en-google-maps
type: doc
topic: google
id: 2c8a9dfb-adca-81c2-b829-df5ce2b6c837
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_google/blob/master/GoogleMaps/comunicando-direcciones-con-google-maps.html
---

Hace unos días podíamos leer en [aNieto2K](http://www.anieto2k.com/2007/06/07/google-maps-actualiza-su-api-e-integra-directions/) y _Tu Función_ que [Google Maps](http://www.manualweb.net/google-maps/) había ampliado su API con Directions. Directions nos permite mostrar la ruta que hay dentro de un mapa entre dos puntos.


Con [Google Maps](http://www.manualweb.net/google-maps/) se suele utilizar una capa para posicionar el mapa. Con Directions, además del mapa, tendremos una segunda capa donde se mostrará el contenido de la ruta. Es por ello que el código del cuerpo de la página será similar a este:


```html
<table>
  <tr>
    <td>Itinerario</td>
    <td>Mapa</td>
  </tr>
  <tr>
    <td><div id="direcciones" style="width: 275px"></div></td>
    <td><div id="mapa" style="width: 310px; height: 400px"></div></td>
  </tr>
</table>
```


Hay que indicar que la capa donde cargaremos las rutas solo le damos el ancho, ya que dependiendo de la ruta que carguemos, su largo podrá ser uno u otro.


## Instanciando la clase GDirections


Con lo que respecta al código [JavaScript](https://www.manualweb.net/javascript/) lo que tenemos que hacer es instanciar la clase GDirections. Esta clase recibe dos parámetros. El primero es la variable en la que hemos instanciado el mapa y el elemento de la página donde hay que cargar la ruta.


```javascript
panel_ruta = document.getElementById("direcciones");
ruta = new GDirections(map, panel_ruta);
```


## Cargando la ruta


Una vez que hemos instanciado la clase GDirections tendremos que cargar la ruta. Para ello utilizaremos el método .load(). Este método recibe dos parámetros, el primero es una cadena con la ruta que queremos trazar y el segundo el idioma en el que queremos que se nos presente la ruta.


Con respecto a la cadena de la ruta, esta deberá de seguir el siguiente patrón:


```javascript
"from: ciudad_origen to: ciudad_destino"
```


El código que cargaría la ruta será el siguiente:


```javascript
ruta.load("from: Madrid to: Avila", {locale: 'es_ES'});
```


Con esto ya tendríamos cargada nuestra ruta en el mapa y el texto de la ruta en la capa de la ruta.


## Versión del API


Una cosa muy importante es que la clase Directions es incluida en la versión 2.x del API de [Google Maps](http://www.manualweb.net/google-maps/). Es por ello que cuando realicemos la carga del API deberemos de comprobar que la versión que estamos utilizando es la 2.x y no la 2


```html
<script src="http://maps.google.com/maps?file=api&v=2.x&key=tu_clave" type="text/javascript"></script>
```

