---
title: "Tablas HTML con imágenes"
description: "Descubre cómo crear tablas HTML con imágenes de manera sencilla y efectiva, mejorando la presentación de tus datos y cautivando a tus visitantes."
date: 2015-06-18
updatedDate: 2026-01-18
tags: ["table","tr","td","img"]
slug: html/tablas/tablas-html-con-imagenes
author: victor_cuervo
type: doc
id: e5da0fe2-2895-443a-8211-078665f84985
download: https://github.com/victorcuervo/lineadecodigo_html/blob/master/tablas/imagen-en-tabla.html
---

Cuando estamos viendo [ejemplos en HTML](http://lineadecodigo.com/categoria/html/) sobre manejo de tablas siempre suelen aparecer datos ya sea texto o números. Si bien una de las cosas que podemos es crear tablas [HTML](http://www.manualweb.net/tutorial-html/) con imágenes. Es decir, que el contenido de las celdas de la tabla sean imágenes.


## Crear una tabla en HTML


La creación básica de una tabla en HTML se realiza principalmente a través de tres elementos fundamentales. El primer elemento es el [`table`](https://www.w3api.com/HTML/table/), que se utiliza para representar la estructura general de la tabla. En su interior, se utilizan elementos [`tr`](https://www.w3api.com/HTML/tr/), que representan cada una de las filas de la tabla. Dentro de estas filas, finalmente, encontramos los elementos [`td`](https://www.w3api.com/HTML/td/), que corresponden a las celdas individuales de la tabla. Cada uno de estos elementos juega un papel crucial en la definición de la estructura y la presentación de la información contenida en la tabla.


Así podemos tener una tabla de dos columnas de la siguiente forma:


```html
<table>
  <thead>
    <tr>
      <th>Texto</th>
      <th>Imagen</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td></td>
      <td></td>
    </tr>
  </tbody>
</table>
```


## Insertar una imagen mediante un elemento img


Lo que esta tabla nos va a permitir es la capacidad de insertar imágenes en la segunda columna, lo que es una función útil y versátil.


En el momento en que necesites manipular [imágenes en HTML](https://manualweb.net/html/imagenes-html/), te encontrarás recurriendo al elemento `img`, que es un elemento esencial en el diseño y la estructura de las páginas web. 


```html
<img src="url_imagen" alt="texto alternativo" width="ancho" height="alto">
```


Dónde [`src`](https://www.w3api.com/HTML/img/src/) nos sirve para indicar el nombre de la imagen, [`alt`](https://www.w3api.com/HTML/img/alt/) para agregar un texto alternativo en caso de que la imagen no se pueda cargar, y [`width`](https://www.w3api.com/HTML/img/width/) y [`height`](https://www.w3api.com/HTML/img/height/) para ajustar el tamaño de la imagen.


Por ejemplo un código para cargar una imagen podría ser el siguiente:


```html
<img src="descargar.png" alt="Elemento de Descarga" width="50px" height="50px">
```


Puedes ver [ejemplos sobre uso de imágenes en páginas web](http://lineadecodigo.com/tag/html-imagenes/).


## Crear tablas HTML con imágenes


Así que para tener [tablas HTML](https://manualweb.net/html/tablas-html/) con imágenes solo tienes que utilizar el [elemento ](http://www.w3api.com/HTML/img/)[`img`](http://www.w3api.com/HTML/img/) dentro de las celdas de la tabla.


```html
<td>Test</td>
<td><img src="test.png"></td>
```


Como se puede observar, hemos insertado la imagen en la segunda celda delimitada por los elementos [`td`](https://www.w3api.com/HTML/td/).


Así podríamos tener [tablas HTML](https://manualweb.net/html/tablas-html/) con imágenes de la siguiente forma:


```html
<table>
<thead>
<tr>
  <th>Texto</th>
  <th>Imagen</th>
</tr>
</thead>
<tbody><tr>
  <td>Test</td>
  <td><img src="test.png"></td>
</tr>
<tr>
  <td>Descargar</td>
  <td><img src="download.png"></td>
</tr>
<tr>
  <td>Curso</td>
  <td><img src="curso.png"></td>
</tr>
</tbody>
</table>
```


Con esto hemos visto lo sencillo y útil que es crear tablas [HTML](https://www.manualweb.net/html/) con imágenes.

