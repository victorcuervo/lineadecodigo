---
title: "Modificar el estilo con jQuery"
description: "Descubre cómo modificar el estilo con jQuery y transforma fácilmente los atributos CSS de tus elementos web para lograr un diseño más dinámico y atractivo."
date: 2009-01-24
updatedDate: 2026-02-06
tags: ["click","css"]
slug: jquery/selectores/modificar-el-estilo-con-jquery
type: doc
topic: jquery
id: 94551e47-b5a3-4c7f-b7f7-1904a70b0ee2
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_jquery/blob/master/css/modificando-el-estilo-con-jQuery.html
---

Como ya sabemos, [jQuery](http://www.manualweb.net/jquery/) nos permite modificar el DOM de una página web de una forma sencilla. Una de las cosas que nos deja modificar de forma sencilla son los estilos [CSS](http://www.manualweb.net/css/) de los elementos.


## Crear el Párrafo


Lo primero que vamos a hacer es crear un párrafo con texto. A posteriorí, dinámicamente, cambiaremos el color del texto, su tamaño, el color de fondo,... vamos, modificar el estilo con [jQuery](http://www.manualweb.net/jquery/).


Pongamos el párrafo en [HTML](https://www.manualweb.net/html/):


```html
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper sem a justo. Aenean metus. Quisque eu purus at leo vehicula laoreet. Aenean et libero. Curabitur rhoncus erat non quam. Sed sodales fringilla diam. Nulla velit sapien, fringilla elementum, ultrices nec, fringilla id, erat. Morbi at nibh eget justo molestie mattis. Ut eleifend dapibus ante. Sed vitae risus in est suscipit congue. Mauris suscipit ligula at lectus.</p>
```


## Añadir el Botón


Además añadiremos un botón, que será el que nos permita modificar el estilo con [jQuery](http://www.manualweb.net/jquery/). Es importante darle al botón un id, ya que [jQuery](http://www.manualweb.net/jquery/) utilizará el id para asignarle la funcionalidad.


```html
<button id="cambiar">Cambiar estilo</button>
```


## Cargar la Librería jQuery


Ahora cargaremos la librería [jQuery](http://www.manualweb.net/jquery/).


```html
<script src="jquery-1.3.1.js" type="text/javascript"></script>
```


## Función Ready


El código [jQuery](http://www.manualweb.net/jquery/) lo vamos a poner dentro de su función ready. Hay que recordar que la función ready es la que se empieza a ejecutar cuando tenemos cargada toda la página.


```javascript
$(document).ready(function(){
 ...
});
```


## Asignar el Evento Click


Mediante la función `$()` accedemos al botón de la página. Para ello pasamos como parámetro el id del botón precedido de una almohadilla (#). El evento que disparará el resto del código será click.


```javascript
$("#cambiar").click(function() {...}
```


## Modificar el Estilo con .css()


Ya solo nos queda poner el código que nos permite modificar el estilo con [jQuery](http://www.manualweb.net/jquery/). Esto lo conseguimos con la función `.css()`. Esta función nos permite pasarle por parámetro los atributos [CSS](http://www.manualweb.net/css/) que queremos modificar.


```javascript
$("p").css({'color':'red','font-size':'1.3em','background':'yellow'});
```


Hay que ver tanto los atributos [CSS](http://www.manualweb.net/css/) como los valores asignados van entre comillas.


## Código Completo


El código para modificar el estilo con [jQuery](http://www.manualweb.net/jquery/) completo sería:


```javascript
<script type="text/javascript">
$(document).ready(function(){
 $("#cambiar").click(function() {
	 $("p").css({'color':'red','font-size':'1.3em','background':'yellow'});
   });

});
</script>
```

