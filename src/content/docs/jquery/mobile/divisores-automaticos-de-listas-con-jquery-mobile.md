---
title: "Divisores automáticos de listas con jQuery Mobile"
description: "Descubre cómo implementar divisores automáticos de listas con jQuery Mobile para organizar tus elementos de manera eficiente y atractiva. ¡Mejora tu interfaz ya!"
date: 2012-05-17
updatedDate: 2026-02-06
tags: ["data-autodivider","listdivider","listview","data-role"]
slug: jquery/mobile/divisores-automaticos-de-listas-con-jquery-mobile
type: doc
topic: jquery
id: 2c8a9dfb-adca-8146-a10f-dd673acd2f96
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_jquerymobile/blob/master/listas/divisores-automaticos.html
---

En el artículo [Divisores de listas con jQuery Mobile](http://lineadecodigo.com/desarrollo-movil/divisores-de-listas-con-jquery-mobile/) veíamos como organizar una lista de elementos para que saliese organizada por divisores. Así utilizando el atributo `data-role="listdivider"` podíamos añadir elementos divisores en la lista.


## Divisores Manuales con data-role


Con el atributo `data-role="listdivider"` debemos crear manualmente los elementos divisores:


```html
<ul data-role="listview" data-inset="true" data-filter="true">
  <li data-role="list-divider">C</li>
  <li>Casablanca</li>
  <li>Charada</li>
  <li data-role="list-divider">D</li>
  <li>Dos Hombres y Un Destino</li>
  <li data-role="list-divider">E</li>
  <li>Espartaco</li>
  <li data-role="list-divider">G</li>
  <li>El Golpe</li>
  <li>La Guerra de las Galaxias</li>
  <li>Granujas a todo ritmo</li>
</ul>
```


Uno de los inconvenientes que tiene la utilización de `data-role="listdivider"` es que nos tenemos que asegurar de generar los elementos divisores.


## Divisores Automáticos con data-autodividers


Tenemos otra opción en [jQuery Mobile](https://www.manualweb.net/jquery/) que es la de generar divisores automáticos en las listas. Para generar divisores automáticos en [jQuery Mobile](https://www.manualweb.net/jquery/) deberemos de utilizar el atributo `data-autodividers="true"` asignado a una lista. Es decir, asignado a una lista `data-role="listview"`.


```html
<ul data-role="listview" data-inset="true" data-autodividers="true">
  <li>Casablanca</li>
  <li>Charada</li>
  <li>Dos Hombres y Un Destino</li>
  <li>Espartaco</li>
  <li>El Golpe</li>
  <li>El Silencio de los Corderos</li>
  <li>El Padrino</li>
  <li>Granujas a todo ritmo</li>
  <li>La Naranja Mecánica</li>
  <li>La Guerra de las Galaxias</li>
  <li>Pulp Fiction</li>
</ul>
```


## Consideraciones sobre el Orden


Hay que tener cuidado con el orden en el que generamos los items, ya que la organización de los divisores es en función del primer carácter. De esta manera ante un cambio de carácter genera automáticamente un divisor. Aunque en siguientes items vuelva a repetirse dicho carácter.


> El atributo `data-autodividers="true"` solo está disponible a partir de jQuery Mobile 2.0. Es decir, que de momento solo podemos utilizarlo con las versiones en desarrollo. Así que puedes [descargarte la última versión de jQuery Mobile generada por Github](http://code.jquery.com/mobile/latest/jquery.mobile.js).


## Personalizar el Selector de Divisores


Para cambiar la ordenación por defecto de las listas en [jQuery Mobile](https://www.manualweb.net/jquery/) con divisores automáticos se puede utilizar el método `.listview()`.


```javascript
$(document).ready(function(){
  $("#milista").listview({
    autodividers: true,
    autodividersSelector: function ( li ) {
      /* Generar una cadena basada en el contenido de li
         Tiene que retornar el divisor asociado a ese li */
    }
  });
});
```


Yo no lo he conseguido hacer funcionar. Si alguien lo consigue. Qué avise. :-D

