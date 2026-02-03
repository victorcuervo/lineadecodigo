---
title: "Color de una fila HTML"
description: "Descubre cómo dar color de una fila HTML en tus tablas usando CSS y el pseudoelemento nth-child para resaltar información clave de manera efectiva."
date: 2015-06-10
updatedDate: 2026-01-18
tags: ["nth-child","tr","table","background-color","color"]
slug: css/colores-y-fondos/color-de-una-fila-html
author: victor_cuervo
type: doc
topic: css
id: c8078847-3129-4281-ba39-ed824134d72a
download: https://github.com/victorcuervo/lineadecodigo_css/blob/master/tablas/tabla-color-fila.html
---

En el ejemplo de hoy vamos a ver como podemos poner color de una fila [HTML](https://www.manualweb.net/html/) utilizando [hojas de estilo CSS](http://www.manualweb.net/css/). Lo que haremos será poner color de una fila HTML atendiendo a la posición que ocupa dentro de la tabla.


## Crear una tabla HTML


Para ello lo primero que vamos a crear será una tabla [HTML](https://www.manualweb.net/html/). Hay que recordar que para crear una tabla [HTML](https://www.manualweb.net/html/) nos basamos en elementos `tr`, `th` y `td`. En concreto las filas son representadas por el elemento `tr`.


Veamos como sería un ejemplo de tabla:


```html
<table>
  <thead>
    <tr>
      <th>País</th>
      <th>Capital</th>
      <th>Superficie</th>
      <th>Habitantes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>España</td>
      <td>Madrid</td>
      <td>504.645 km<sup>2</sup></td>
      <td>46,6 M</td>
    </tr>
  </tbody>
</table>
```


## Añadir estilos CSS


Ahora lo que vamos es añadir una [hoja de estilo CSS](http://www.manualweb.net/css/). La hoja de estilo va a manipular el elemento `tr` para poder dar el color a la fila [HTML](https://www.manualweb.net/html/).


```css
tr {
  background-color: black;
  color: white;
}
```


El color de fondo se puede manipular mediante el atributo `background-color` y el color del texto mediante el atributo `color`. De esta forma si queremos poner una fila de color de fondo negro y de color de texto blanco utilizaremos la siguiente combinación.


## Dar color a una fila específica


Si bien, este código [CSS](http://www.manualweb.net/css/) **va a dar color a todas las filas de la tabla**. Si lo que queremos es dar color a una fila en concreto vamos a utilizar el pseudoelemento `nth-child` el cual recibe como parámetro el número de fila a la que queremos dar color.


Por ejemplo, si queremos dar color a la tercera fila utilizaremos el siguiente código:


```css
tr:nth-child(3) {
  background-color: black;
  color: white;
}
```


Como hemos podido ver, controlando este código [CSS](http://www.manualweb.net/css/) hemos podido dar, de forma sencilla, color de una fila [HTML](https://www.manualweb.net/html/).

