---
title: "Lista circular con jQuery appendTo"
description: "Descubre cómo crear una lista circular con jQuery appendTo y mejora tus habilidades en DOM. Un ejemplo sencillo que transforma tu lista en un ciclo infinito."
date: 2013-03-05
updatedDate: 2026-02-06
tags: ["ol","click","appendto"]
slug: jquery/selectores/lista-circular-con-jquery-appendto
type: doc
topic: jquery
id: 2c8a9dfb-adca-81ec-8c7b-d4eb29f66049
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_jquery/blob/master/formularios/rotar-lista.html
---

Hoy vamos a hacer otro ejemplo sencillísimo con listas en [jQuery](http://www.manualweb.net/jquery/). Esta vez practicaremos la función de utilidad jQuery appendTo. Si seleccionamos el primer elemento de una lista con first y lo añadimos a los elementos de dicha lista con jQuery appendTo haremos que funcione de forma circular.


## Crear la Lista HTML


Nuestro [HTML](https://www.manualweb.net/html/) contiene únicamente una lista y un botón.


```html
Lista origen: <br>
<ol id="listaOrigen">
  <li> Elemento ordenado 1</li>
  <li> Elemento ordenado 2</li>
  <li> Elemento ordenado 3</li>
  <li> Elemento ordenado 4</li>
</ol>
<button id="miBoton">Ejecutar</button>
```


## Vincular el Evento Click


Primero vincularemos un evento al botón para que cada vez que se haga click en él se ejecute la función deseada. Podemos usar la función [jQuery](http://www.manualweb.net/jquery/) on que recibe como argumento el nombre del evento ante el cual reaccionará, en este caso 'click,' o usar la función reducida jQuery click. 


Hay que decir que la función 'on' vincula eventos y reemplaza a la antigua función [jQuery](http://www.manualweb.net/jquery/) 'bind' que se utilizaba antes de la versión 1.7 de [jQuery](http://www.manualweb.net/jquery/).


```javascript
$(document).on('ready', function(){
  $('#miBoton').on('click', function() {
    // Código sobre el click
  });
});
```


O bien en formato reducido:


```javascript
$(document).on('ready', function(){
  $('#miBoton').click(function() {
    // Código sobre el click
  });
});
```


## Usar jQuery appendTo


Cuando se produzca ese evento ejecutaremos nuestro sencillo código. Veremos que es tan simple que se programa con una sola línea gracias a jQuery appendTo que permite mover elementos en el DOM. 


El método jQuery appendTo se aplica sobre un elemento a otro elemento como parámetro. Es decir, añade el elemento seleccionado al elemento argumento de la función. En nuestro caso:


```javascript
$(document).on('ready', function(){
  $('#miBoton').on('click', function() { 
    $('ol li:first').appendTo('ol');  
  });
});
```


Lo que hacemos es obtener la referencia al primer elemento de la lista "ol li:first" y moverlo con el jQuery appendTo al final de la lista. 


## Código Alternativo


Otra forma de codificar este movimiento, ajustando al nombre de la lista, sería:


```javascript
$('#listaOrigen li:first').appendTo('#listaOrigen');
```


Y con este sencillo ejemplo hemos practicado selecciones básicas de [jQuery](http://www.manualweb.net/jquery/), vinculación de eventos y práctica de la función de utilidad jQuery appendTo.

