---
title: "Ancho de columnas en tabla"
description: "Aprende a definir el ancho de columnas en tabla de manera sencilla y personaliza tus tablas en HTML con CSS para mejorar su apariencia y funcionalidad."
date: 2015-06-22
updatedDate: 2026-01-18
tags: ["table","td","tr","nth-child","first-child","width"]
slug: css/layout/ancho-de-columnas-en-tabla
type: doc
topic: css
id: 9875394d-8ea8-4c7d-9077-b3f4c87ea0fb
author: victor_cuervo
download: https://lineadecodigo.com/wp-content/uploads/2025/01/ancho-columnas-tabla.webp
---

En este ejemplo vamos a ver cómo podemos definir el ancho de columnas en tabla [HTML](https://www.manualweb.net/html/) para que dicho ancho sea diferente en cada una de las columnas que tengamos.


### Crear una tabla en HTML


Lo primero para definir el ancho de columnas en tabla [HTML](https://www.manualweb.net/html/) es que vamos a necesitar [crear una tabla](https://lineadecodigo.com/html/crear-una-tabla-en-html/). Los elementos de tabla en [HTML](https://www.manualweb.net/html/) que vamos a utilizar son [`table`](https://www.w3api.com/HTML/table/) para definir la tabla, [`tr`](https://www.w3api.com/HTML/tr/) para definir la fila y [`td`](https://www.w3api.com/HTML/td/) para definir la celda.


De esta manera vamos a crear nuestra tabla:


```html
<table>
  <tbody>
    <tr>
  <th>País</th>
  <th>Capital</th>
  <th>Superficie</th>
  <th>Habitantes</th>
    </tr>
    <tr>
  <td>España</td>
  <td>Madrid</td>
  <td>504.645 km<sup>2</sup></td>
  <td>46,6 M</td>
    </tr>
  </tbody>
</table>
```


### Ancho de columnas en tabla mediante CSS


Para poder definir el ancho de columnas en tabla, tenemos que recurrir al [lenguaje CSS](https://www.manualweb.net/css/). En concreto, el [lenguaje CSS](https://www.manualweb.net/css/) va a definir el ancho de las columnas mediante los elementos, [`td`](https://www.w3api.com/HTML/td/) que son los que representan a las celdas.


Así, dentro de nuestra página, habrá una parte que pondremos con todo el [código CSS](https://lineadecodigo.com/categoria/css/). Este código irá dentro de los elementos [`style`](https://www.w3api.com/HTML/style-elemento/).


```html
<style>
  <!-- Código CSS -->
</style>
```


Para poder acceder al elemento [`td`](https://www.w3api.com/HTML/td/) utilizaremos el selector:


```css
table td { ... }
```


Si queremos acceder a todas las celdas de la primera columna, utilizaremos el pseudoelemento [`nth-child`](https://www.w3api.com/CSS/nth-child/), al cual pasaremos el valor 1.


```css
table td:nth-child(1) {
 ...
}
```


Si queremos darle el ancho a otras columnas, podemos hacerlo cambiando el valor que pasamos como parámetro: 2, 3, 4,...


Si solo queremos dar el ancho a la primera columna, también podríamos utilizar el pseudolemento [`first-child`](https://www.w3api.com/CSS/first-child/).


```css
table td:first-child {
 ...
}
```


Solo nos queda utilizar la propiedad [`width`](https://www.w3api.com/CSS/width/) para indicar el tamaño que queramos darle a la columna.


De esta forma podríamos definir el ancho de cada una de las columnas de la tabla de la siguiente forma:


```css
table td:first-child {
  width: 100px;
}

table td:nth-child(2) {
  width: 100px;
}

table td:nth-child(3) {
  width: 200px;
}

table td:last-child {
  width: 150px;
}
```


Ya hemos visto lo sencillo que es poder darle un ancho a cada una de las columnas atendiendo a la posición que estas ocupen dentro de la tabla.

