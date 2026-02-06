---
title: "Animar elementos con jQuery"
description: "Aprende a animar elementos con jQuery de manera sencilla. Descubre cómo hacer que tus imágenes cobren vida al interactuar con ellas. ¡No te lo pierdas!"
date: 2012-05-03
updatedDate: 2026-02-06
tags: ["animate","mouseover","mouseout"]
slug: jquery/efectos/animar-elementos-con-jquery
type: doc
topic: jquery
id: e39ea96b-77a8-4fd0-bf7a-c202372f6f76
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_jquery/blob/master/efectos/animacion-jquery.html
---

Una cosa que podemos hacer de forma muy sencilla con [jQuery](http://www.manualweb.net/jquery/) es ejecutar animaciones de elementos. Y es que [jQuery](http://www.manualweb.net/jquery/) nos proporciona una función para animar elementos. Esta función es `.animate()`.


## Crear la Imagen


Lo primero será insertar el elemento que queremos animar. Por ejemplo, una imagen. Así que colocamos la imagen en la página.


```html
<img id="logo" src="contenido.png" alt="logo" height="50px">
```


## Gestionar los Eventos del Ratón


Lo siguiente será decidir en qué momento queremos realizar la animación. En nuestro caso, la secuencia será la siguiente: cuando pasemos el ratón sobre la imagen, agrandaremos dicha imagen. Y cuando salgamos de la imagen con el ratón, devolveremos la imagen al tamaño original.


Así que vamos a utilizar la gestión de eventos que nos proporcionan los métodos `.mouseover()` y `.mouseout()`. Será desde estos eventos donde lancemos la animación.


```javascript
$(document).ready(function(){
  $("#logo").mouseover(function(){...});
  $("#logo").mouseout(function(){...}); 
});
```


Vemos que los métodos se lanzan sobre el elemento al que hemos dado el id "logo".


## Usar el Método animate


Ahora ya pasamos a realizar la animación de la imagen. Y como habíamos comentado al principio del artículo utilizaremos el método `.animate()`.


El método `.animate()` recibe como parámetros diferentes cosas. Pero el primer parámetro, que es el más importante, recoge las propiedades que queremos modificar en el elemento para la animación.


## Parámetros del Método animate


La sintaxis completa del método es:


```javascript
.animate( properties [, duration] [, easing] [, complete] )
```


Vemos que además de los parámetros [CSS](http://www.manualweb.net/css/) a modificar podemos establecer:

- **duration**: indica en milisegundos cuánto tiempo durará la animación
- **easing**: la función que podemos ejecutar durante la animación
- **complete**: indica qué función queremos ejecutar al finalizar la animación

## Modificar el Tamaño de la Imagen


Volviendo a nuestro ejemplo, lo haremos de la forma más sencilla: solo modificando las propiedades de la imagen. Como indicamos que al entrar con el ratón sobre la imagen la haríamos más grande, lo que vamos a realizar es incrementar su tamaño, es decir, su atributo height. Y justamente lo contrario cuando salgamos de la imagen.


Así nuestro código [jQuery](http://www.manualweb.net/jquery/) quedará de la siguiente forma:


```javascript
$(document).ready(function(){
  $("#logo").mouseover(function(){
     $(this).animate({height:'150px'});
  });
  $("#logo").mouseout(function(){
     $(this).animate({height:'50px'});
  }); 
});
```


## Ajustar la Velocidad de la Animación


Puedes probar el resto de propiedades del método animate. Por ejemplo, si queremos hacer más lento cuando la imagen se haga grande:


```javascript
$("#logo").mouseover(function(){
  $(this).animate({height:'150px'},2000);
});
```


¿Qué se te ocurre hacer con la función `.animate()` de [jQuery](http://www.manualweb.net/jquery/)?

