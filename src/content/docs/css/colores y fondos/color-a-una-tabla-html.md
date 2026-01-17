---
title: "Color a una tabla HTML"
description: "Descubre cómo dar color a una tabla HTML de forma sencilla y efectiva utilizando CSS. Mejora la apariencia de tus tablas y destaca tu contenido."
date: 2015-07-28
updatedDate: 2026-01-17
tags: ["table","td","background-color","color"]
slug: css/colores-y-fondos/color-a-una-tabla-html
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_css/blob/master/tablas/tabla-color.html
topic: css

---

En este ejemplo vamos a ver como podemos dar color a una tabla [HTML](https://www.manualweb.net/html/). Lo que haremos es que la tabla tenga un color homogéneo en toda la tabla.


## Crear la tabla HTML


Lo primero será crear una tabla con los elementos [HTML](http://www.manualweb.net/html) [table](https://www.w3api.com/HTML/table/), [tr](https://www.w3api.com/HTML/tr/) y [td](https://www.w3api.com/HTML/td/colspan/).


```html
<table>
  <tr>
    <td>Celda 1</td>
    <td>Celda 2</td>
  </tr>
  <tr>
    <td>Celda 3</td>
    <td>Celda 4</td>
  </tr>
</table>
```


Esta será la tabla sobre la que demos el color.


## Aplicar color con CSS


Para dar color a una tabla [HTML](https://www.manualweb.net/html/) vamos a apoyarnos en [CSS](http://www.manualweb.net/css/). En concreto vamos a dar estilo a lo que sería [el elemento table](https://www.w3api.com/HTML/table/). Es decir, al mismo elemento que representa toda la tabla.


```css
table {
  background-color: blue;
}
```


El atributo que nos permite dar color a una tabla es [background-color](https://www.w3api.com/CSS/background-color/).


## Formas de definir el color


Al atributo [background-color](https://www.w3api.com/CSS/background-color/) podemos indicarle el color mediante un nombre en inglés que represente el color:


```css
table {
  background-color: blue;
}
```


O bien podemos utilizar el color en hexadecimal. En este caso deberemos de utilizar una almohadilla delante del color hexadecimal.


```css
table {
  background-color: #0000FF;
}
```


De esta forma tan sencilla habremos conseguido poner un color a una tabla con [HTML](https://www.manualweb.net/html/) y [CSS](http://www.manualweb.net/css/).

