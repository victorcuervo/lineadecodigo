---
title: "Copiar elementos entre listas con jQuery"
description: "Aprende a copiar elementos entre listas con jQuery y mejora la interacción en tus proyectos. ¡Descubre cómo hacerlo de manera sencilla y efectiva!"
date: 2015-08-06
updatedDate: 2026-02-06
tags: ["mouseout","appendto","on","off","one"]
slug: jquery/selectores/copiar-elementos-entre-listas-con-jquery
type: doc
topic: jquery
id: aaba47ad-28eb-49f8-a778-8cf416b955e5
author: carmen_rodrigo
download: https://github.com/victorcuervo/lineadecodigo_jquery/blob/master/listas/copiar-elementos-lista.html
---

Hoy vamos a ejercitar de nuevo el manejo de listas con jQuery. Para ello vamos a ver cómo podemos **copiar elementos entre listas con jQuery**. El objetivo es conseguir mover elementos de una lista _Origen_ a otra lista _Destino_.


Esta vez moveremos el elemento sobre el que hagamos click en la lista origen y añadiremos ese elemento a la lista destino.


Seguramente todos vamos intuyendo que haremos lo siguiente:

1. **Definir una lista origen** y sobre cada uno de sus elementos de forma individual les vincularemos el evento click para que reaccionen ante él.
2. **Pasarle una función que tome el elemento seleccionado** y lo mueva a otra lista con jQuery appendTo.

## Crear las Listas HTML


Nuestro código HTML que represente a las listas será así:


```html
<h3>Lista origen</h3>
<ol id="listaOrigen">
	<li>Elemento 1</li>
	<li>Elemento 2</li>
	<li>Elemento 3</li>
	<li>Elemento 4</li>
</ol>
<h3>Lista destino</h3>
<ol id="listaDestino"></ol>
```


Vemos que utilizamos el elemento `ol` para representar las listas ordenadas, el cual contiene elementos `li` para representar cada uno de los items de la lista. Además hemos utilizados dos identificadores `listaOrigen` y `listaDestino` los cuales vamos a emplear desde el código jQuery.


## Vincular el Evento Click


En el código jQuery asignaremos el evento click a cada elemento `li` de `#listaOrigen`:


```javascript
$('#listaOrigen li')
```


Con el selector `'#listaOrigen li'` seleccionamos todos los `li` de `#listaOrigen` y les vinculamos el evento:


```javascript
$('#listaOrigen li').on('click', function (){
  ...
});
```


## Usar la Palabra Clave this


Fijémonos en que cuando se produce el evento queremos actuar sobre el elemento _li_ seleccionado y no sobre todos. Para eso usamos `this`. `this` es la palabra clave reservada de JavaScript que hace referencia al objeto que provoca la ejecución; es el objeto en donde el método está siendo invocado.


```javascript
$('#listaOrigen li').on('click', function (){
  $(this).appendTo('#listaDestino');
});
```


El método `.appendTo()` será el que nos permita copiar elementos entre listas con jQuery ya que realiza el movimiento de la `listaOrigen` a la `listaDestino`.


## Resaltar el Elemento Seleccionado


Con ese código sería suficiente pero para estar seguros de qué elemento estamos seleccionando con el ratón y que recibirá el evento click resaltaremos en naranja el elemento. Así mismo con jQuery `onmouseout` haremos que recupere su estilo original en fondo blanco y así deje de estar resaltado.


```javascript
$('#listaOrigen li').on('mouseover', function (){
  $(this).css('background', 'orange');
});

$('#listaOrigen li').on('mouseout', function (){
  $(this).css('background', 'white');
});
```


## El Resultado no Parece el Esperado


Si ejecutamos el código tal cual está observaremos varias cosas. Cuando hacemos click el elemento está resaltado y su estilo está en color de fondo naranja. El elemento se mueve en el DOM pero su CSS permanece. Es decir, no nos ha dado tiempo a ejecutar el `mouseout` pues en cuanto hagamos click el elemento se mueve a lista Destino y cuando quitemos el ratón de su posición (que es cuando se lanza el evento `mouseout`) ya tendremos debajo de nosotros a otro elemento de la lista Origen o ninguno si la lista ya se ha quedado sin elementos.


Tendremos que pasar de nuevo encima de él en la lista Destino para volver a ejecutar `mouseover` y `mouseout` y recuperar su color blanco. Este comportamiento puede resultar más o menos obvio a algunos. ¿Te lo parece?


## Por Qué se Ejecutan los Eventos


Aquí es donde debemos darnos cuenta de una cosa. Nosotros habíamos asignado un comportamiento a todos los elementos `li` de `listaOrigen` que consistía en ponerse naranja al posicionar el ratón sobre él y recuperar el blanco al irnos. Pero ahora el elemento está en `listaDestino`. ¿Por qué se ejecuta?


Muy sencillo. Los eventos se vinculan sobre los elementos últimos del DOM no sobre la jerarquía completa. Es decir, para vincular inicialmente seleccionamos todos los `li` de `ListaOrigen` pero son solo esos `li` los que tienen el evento. Si se mueven en el DOM y ocupan otras posiciones siguen poseyendo sus comportamientos, textos y estilos y todas sus propiedades.


Además, si hacemos click sobre los elementos en `listaDestino` se vuelve a ejecutar su función asignada a click y la lista se comporta algo así como la lista circular que definimos en el ejercicio anterior. En realidad, el elemento seleccionado (`this`) se mueve al final de la lista.


## Solución al Problema


Para solucionar este comportamiento debemos:

1. Antes de ejecutar el movimiento del elemento a la lista destino volveremos a ponerle fondo blanco.
2. Queremos que el `appendTo` que mueve el elemento al final de la `listaDestino` se ejecute una única vez. Para ello tenemos dos opciones:
	- Una vez usado desvincular el evento llamando a jQuery `.off()`
	- Vincular el evento con jQuery `.one()` en lugar de jQuery `.on()` que vincula el evento pero permite que se ejecute una sola vez y sólo una

Una vez en la lista destino `li` ya no tendrá ese comportamiento.


## Código con jQuery off


El código llamando a jQuery `.off()` sería el siguiente:


```javascript
$(document).on('ready', function(){
  $('#listaOrigen li').on('click', function (){
    $(this).css('background', 'white');
    $(this).appendTo('#listaDestino');
    $(this).off('click');
  });

  $('#listaOrigen li').on('mouseover', function (){
    $(this).css('background', 'orange');
  });

  $('#listaOrigen li').on('mouseout', function (){
    $(this).css('background', 'white');
  });
});
```


## Código con jQuery one


Y si queremos ejecutar el jQuery `.one()` sería:


```javascript
$(document).on('ready', function(){
  $('#listaOrigen li').one('click', function (){
    $(this).css('background', 'white');
    $(this).appendTo('#listaDestino');
  });

  $('#listaOrigen li').on('mouseover', function (){
    $(this).css('background', 'orange');
  });

  $('#listaOrigen li').on('mouseout', function (){
    $(this).css('background', 'white');
  });
});
```


En este ejercicio hemos repasado y explicado la vinculación de eventos, a usar el método `.one()`, cambiar el estilo de los elementos con la función jQuery `.css()` y el uso de eventos click, mouseover y mouseout para explicar cómo copiar elementos entre listas con jQuery.

