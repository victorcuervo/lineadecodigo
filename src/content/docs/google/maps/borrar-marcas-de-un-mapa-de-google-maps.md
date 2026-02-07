---
title: "Borrar marcas de un mapa de Google Maps"
description: "Aprende a borrar marcas de un mapa de Google Maps con un simple botón y código efectivo para mantener tu mapa limpio y organizado. ¡Descubre cómo hacerlo!"
date: 2012-10-14
updatedDate: 2026-02-07
tags: ["marker","push","setMap"]
slug: google/maps/borrar-marcas-de-un-mapa-de-google-maps
type: doc
topic: google
id: 6f4d6641-d733-4274-bdd9-d6e7ba7d46ad
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_google/blob/master/GoogleMaps/borrar-marca-del-mapa.html
---

En otros artículos hemos visto como podemos [crear marcas](http://lineadecodigo.com/google/incluir-una-marca-en-google-maps/), [como añadir marcas a los mapas de Google Maps](http://lineadecodigo.com/google/anadir-marcas-dinamicamente-a-un-mapa-de-google-maps/), [como podemos personalizarlas](http://lineadecodigo.com/google/personalizar-icono-de-una-marca-de-google-maps/),... en este caso vamos a ver cómo podemos hacer para **eliminarlas** de un **mapa** de [Google Maps](http://www.manualweb.net/google-maps/).


## Recordar cómo insertar una marca


Lo primero que vamos a hacer es recordar como insertábamos una **marca** dentro de un **mapa** de [Google Maps](http://www.manualweb.net/google-maps/). Para ello nos habíamos creado una **función addMark()**.


```javascript
function addMark(location){
  marker = new google.maps.Marker({
    position: location,
    map: map
  });				  
}
```


## Usar un array para almacenar las marcas


Y es que cuando estemos insertando una **marca**, además de añadirla a [Google Maps](http://www.manualweb.net/google-maps/), lo que vamos a hacer es añadirla en un **array**. Así que lo primero que hará nuestro programa para **borrar marcas** del **mapa** será definir el **array**:


```javascript
var puntos = [];
```


Y ahora, cada vez que insertemos una **marca**, la insertamos en el **array** mediante el **método .push()**:


```javascript
function addMark(location){
  marker = new google.maps.Marker({
    position: location,
    map: map
  });	
  puntos.push(marker);			  
}
```


Así, en nuestro **array puntos** tenemos todas las **marcas**.


## Añadir un botón para borrar marcas


Ahora añadiremos un **botón borrar marcas** en nuestra **página web** y a su **evento onclick** le vamos a adjuntar el **borrado de las marcas**.


```javascript
var b = document.getElementById("borrar");
b.addEventListener("click",function(){...});
```


## Borrar las marcas del mapa


Para realizar el **borrado de una marca** en concreto lo que hacemos es desasignarla del **mapa**. Para ello ponemos el valor del **mapa** asociado a **null**.


```javascript
var b = document.getElementById("borrar");
b.addEventListener("click",function(){		
  // Recorremos el array de puntos y los borramos		
  for (p in puntos) {
    puntos[p].setMap(null);
  }		
});
```


Como vemos en el **código**, hemos recorrido el **array** y por cada uno de los **objetos Marker** hemos ejecutado el **método .setMap(null)**. Así tenemos borrados todos los puntos que hubiésemos añadido al **mapa** de [Google Maps](http://www.manualweb.net/google-maps/).

