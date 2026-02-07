---
title: "Incluir imágenes en Google Maps"
description: "Aprende a añadir imágenes personalizadas en Google Maps usando GIcon, GMarker y GLatLng para crear marcadores con iconos customizados."
date: 2007-06-06
updatedDate: 2026-02-07
tags: ["gmarker","gicon","glatlng"]
slug: google/maps/incluir-imagenes-en-google-maps
type: doc
topic: google
id: 2c8a9dfb-adca-81fa-9243-dfa2df378e14
author: victor_cuervo
---

Si ya hemos aprendido a "Cargar Google Maps" en nuestra página web. Veremos que nos empiezan a aparecer nuevas necesidades para crear nuestros Mashup.


Una de las posibilidades que tenemos con [Google Maps](http://lineadecodigo.com/tag/google-maps/) es la de incluir imágenes en una determinada posición.


## Crear un icono con GIcon


Para poder añadir una imagen lo primero que tenemos que hacer es crear una instancia de la clase `GIcon`. Veamos la línea de código:


```javascript
icono = new GIcon();
```


Al icono podemos configurarle múltiples propiedades: URL del icono, el tamaño del icono, el icono que hace de sombra, el tamaño de la sombra, si vamos a desplazar el icono dentro de la posición de ubicación del mapa,...


Al menos deberemos de indicarle la URL del icono (`.image`) y si vamos a desplazarle dentro de su posición dentro del mapa (`.iconAnchor`).


De esta manera el código podría quedar de la siguiente forma:


```javascript
icono.image="http://labs.google.com/ridefinder/images/mm_20_red.png";
icono.iconSize = new GSize(12, 20);
icono.iconAnchor = new GPoint(2, 2);
```


Hay que indicar que el tamaño del icono se tiene que indicar mediante la clase `GSize` y la posición del desplazamiento mediante una clase `GPoint`.


## Crear la ubicación con GLatLng


Una vez que tenemos creado el icono, deberemos de crear una localización en el mapa. Hay que recordar que las localizaciones se montan mediante la clase `GLatLng`. Que es la misma clase que se utiliza para cargar el mapa.


```javascript
// Creamos la ubicación
punto = new GLatLng(40.656192,-4.688158);
```


Los valores que se utilizan son los de longitud y latitud.


## Añadir el icono al mapa con GMarker


Solo nos quedará el incluir al icono en la ubicación especificada. Esto se hace mediante la clase `GMarker`, la cual recibe como parámetros la localización y el icono. `GMarker` lo posiciona en el mapa.


```javascript
// Añadimos el icono en la ubicación
map.addOverlay(new GMarker(punto,icono));
```

