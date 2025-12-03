---
title: Alto y ancho de una tabla en HTML
description: "Uso de las propiedades width y height de css sobre un elemento table para poder definir el alto y ancho de una tabla en html."
lastUpdated: 2023-05-18
author: victor_cuervo
---

Mediante [el lenguaje CSS](https://www.manualweb.net/css/) podemos definir el alto y ancho de una tabla en [HTML](https://www.manualweb.net/html/) de una forma muy sencilla. Lo primero que tenemos que saber es cómo [crear una tabla en HTML](http://lineadecodigo.com/html/crear-una-tabla-en-html/).


Al [crear una tabla en HTML](http://lineadecodigo.com/html/crear-una-tabla-en-html/) vemos que el elemento principal [HTML](https://www.manualweb.net/html/) es el elemento [`table`](https://w3api.com/HTML/table/). Así que a la hora de definir el alto y ancho de una tabla en [HTML](https://www.manualweb.net/html/) lo que tenemos que hacer es modificar las propiedades de este elemento [`table`](https://w3api.com/HTML/table/).


La tabla que podemos manejar es una parecida a la siguiente:


```html
<table>
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
</table>
```


Hemos utilizado el elemento [`tr`](https://w3api.com/HTML/tr/) para generar las filas, el elemento [`th`](https://w3api.com/HTML/th/) para generar celdas de cabecera y el elemento [`td`](https://w3api.com/HTML/td/) para generar las celdas de contenido.


Ahora creamos en la parte superior de nuestra página web un código [CSS](http://www.manualweb.net/css/) donde daremos estilo a nuestra tabla. Para ello deberemos de utilizar el elemento [`style`](https://w3api.com/HTML/style/).


```html
<head>
  <style>
  // Estilos CSS
  </style>
</head>
```


Para indicar las propiedades de la tabla utilizamos `table` como **selector**:


```css
table {
  ...
}
```


Ahora para definir el alto y ancho de una tabla en [HTML](https://www.manualweb.net/html/) vamos a utilizar las propiedades [`width`](https://w3api.com/CSS/width/) y [`height`](https://w3api.com/CSS/height/). Podemos definir el alto y el ancho mediante unidades fijas o mediante porcentajes. Por ejemplo podríamos definir lo siguiente:


```css
table {
	width: 50%;
	height: 300px;
}
```


En este caso hemos indicado que **el ancho de la tabla es el 50%** del ancho de la página y que **el alto es de 300px**.


Podríamos utilizar otras unidades, además del porcentaje y los pixels (px), para definir el alto y el ancho de una tabla en HTML como son las relativas al tamaño de la fuente (em).


Es importante saber que al utilizar el selector `table` el ancho y alto de la tabla se aplicará a todas las tablas que existan dentro de la página. Si por el contrario queremos aplicarlo a una tabla en concreto o a un conjunto de tablas podemos apoyarnos en **clases** o **indicadores.**


Por ejemplo, si queremos hacerlo a una tabla en concreto utilizaremos el identificador. Para ello lo primero será crear un atributo [`id`](https://w3api.com/HTML/id/) dentro de la tabla.


```html
<table id="mitabla">
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
</table>
```


Y en este caso el estilo lo asignaremos al nombre del identificador “mitabla” de la siguiente manera:


```css
#mitabla {
	width: 50%;
	height: 300px;
}
```


¿Sabrías cómo dar el estilo al ancho y alto de la tabla mediante una clase? Déjanoslo en los comentarios.

