---
title: "Borrar contenido de capa en Javascript"
description: ""
date: 2016-03-18
updatedDate: 2026-01-12
tags: ["Javascript DOM","Javascript DOM innerHTML","Javascript Eventos","Javascript Eventos addEventListener","Javascript DOM getElementById","div","capa","getelementbyid","innerhtml","addeventlistener"]
slug: javascript/borrar-contenido-de-capa-en-javascript
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/pagina/eliminar-contenido-capa.html
topic: javascript

---

Si estás trabajando con aplicaciones del tipo **SPA (Single Page Application)** es fácil que se te de la situación en la cual tengas que borrar el contenido de una capa para cargar otro nuevo contenido. En este ejemplo vamos a ver cómo podemos **borrar contenido de capa en Javascript**.


## Crear la capa con contenido


Lo primero que vamos a realizar es crear una capa que tenga contenido.


```html
<div id="micapa">
  <p>Contenido de mi capa</p>
  <img src="imagen.jpg" alt="Mi imagen">
</div>
```


En este caso hemos insertado contenido de tipo texto e imágenes. Pero podríamos tener dentro de la capa cualquier tipo de información: tablas, formularios,... Es importante ver que la capa tiene un identificador único y que todo lo que hagamos para manipularla será a través de dicho ID.


## Crear el botón para borrar


Lo siguiente que vamos a hacer es crear un botón, el cual nos va a servir para simular la acción que nos permita borrar contenido de capa en Javascript.


```html
<button id="eliminar">Eliminar contenido</button>
```


## Controlar el evento click


Ahora vamos a controlar que cuando el usuario pulse sobre el botón se ejecute el efecto. Para ello vamos a utilizar el método `.addEventListener()`, con el que controlaremos el "click"


```javascript
var boton = document.getElementById("eliminar");
boton.addEventListener("click", function() {...},false);
```


## Borrar el contenido de la capa


Cuando pulsemos sobre el botón vamos a borrar contenido de capa en Javascript. El borrado de la capa se consigue simplemente asignando al atributo `.innerHTML` un contenido vacío:


```javascript
document.getElementById("micapa").innerHTML = '';
```


## Código completo


Así el código final es muy sencillo y nos queda de la siguiente forma:


```javascript
var boton = document.getElementById("eliminar");
boton.addEventListener("click", function() {
  document.getElementById("micapa").innerHTML = '';
},false);
```


Y así habremos conseguido borrar contenido de capa en Javascript.

