---
title: "Hola Mundo con jQuery"
description: "Aprende a crear tu primer Hola Mundo con jQuery de manera sencilla. Descubre cómo gestionar eventos y modificar HTML fácilmente. ¡Empieza ahora!"
date: 2009-01-23
updatedDate: 2026-02-06
tags: ["hola-mundo","ready","click","function"]
slug: jquery/basicos/hola-mundo-con-jquery
type: doc
topic: jquery
id: 83d8a982-d417-4a9d-84e9-5c0f92c537d8
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_jquery/blob/master/basicos/hola-mundo-jQuery.html
---

jQuery es una librería JavaScript que nos permite modificar los documentos HTML, gestionar eventos, animación y gestión AJAX de una forma sencilla.


## Descargar jQuery


Lo primero que tenemos que hacer para utilizar jQuery es descargarnos la librería. Todas las versiones de jQuery las podemos encontrar en [http://code.google.com/p/jqueryjs/downloads/list](http://code.google.com/p/jqueryjs/downloads/list). Actualmente la versión a descargar es jQuery-1.3.1 ([versión desarrollo](https://code.jquery.com/jquery-3.6.0.js) o [versión producción](https://code.jquery.com/jquery-3.6.0.min.js)). 


## Instanciar la librería


Una vez que tengamos la librería, lo primero que tenemos que hacer es instanciarla. Para ello simplemente cargamos la clase JavaScript.


```html
<script src="jquery-1.3.1.js" type="text/javascript"></script>
```


## Evento ready()


El código jQuery se pondrá dentro del evento ready(). Este evento de jQuery es el que controla que el documento HTML esté cargado. Una vez cargado el documento es cuando se empezarán a ejecutar las diferentes sentencias.


```javascript
$(document).ready(function(){
 ...
});
```


## Crear el Hola Mundo


En lo que consistirá nuestro Hola Mundo con jQuery será en hacer que cualquier enlace de la página nos muestre una ventana de alerta diciendo "Hola Mundo". Para acceder a un elemento del tipo anchor - A utilizamos la función $(), a la cual pasaremos el tipo de elemento HTML. 


Sobre este elemento vamos a gestionar el evento onClick, el cual en jQuery se maneja mediante el evento click.


```javascript
$("A").click(function(){...})
```


En el evento click mostraremos la ventana de alerta. Así que el código final quedará de la siguiente forma:


```javascript
$(document).ready(function(){
 $("a").click(function() {
     alert("Hola Mundo con jQuery!");
   }); 
});
```


Solo nos quedará incluir un [elemento anchor - A](https://www.w3api.com/HTML/a/) dentro de la página web.

