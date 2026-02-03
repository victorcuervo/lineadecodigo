---
title: "Alinear texto en una tabla"
description: "Aprende a alinear texto en una tabla HTML de manera efectiva usando CSS. Descubre cómo mejorar la presentación de tus tablas y destaca tu contenido."
date: 2015-06-14
updatedDate: 2026-01-18
tags: ["text-align","th","tr","nth-child"]
slug: css/texto/alinear-texto-en-una-tabla
author: victor_cuervo
type: doc
id: b3c8e345-ea7a-4500-bd74-e0eb65cd3139
download: https://github.com/victorcuervo/lineadecodigo_css/blob/master/tablas/tabla-alinear-texto.html
---

Cuando creamos [una tabla en HTML](https://www.manualweb.net/html/tablas-html/) e insertamos texto dentro de ella, este texto siempre quedará alineado a la izquierda. Es decir, sucede lo mismo que cuando insertamos texto en cualquier otra parte de una página [HTML](https://www.manualweb.net/html/). En el ejemplo de hoy vamos a ver como podemos alinear texto en una tabla.


## Elementos de una tabla HTML


A la hora de alinear texto en una tabla lo primero que tenemos que tener en cuenta es sobre que elemento manipulamos el texto y lo alineamos. Y es que debemos de recordar las partes de las que normalmente consta [una tabla en HTML](https://www.manualweb.net/html/tablas-html/).


Si vemos un [ejemplo de tabla](https://lineadecodigo.com/tag/html-tabla/):


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


Veremos que hay algunos elementos principales en [HTML](http://www.manualweb.net/tutorial-html/) como son [`table`](https://w3api.com/HTML/table/), el cual representa a toda la tabla, [`tr`](https://w3api.com/HTML/tr/) que representa las filas, [`th`](https://w3api.com/HTML/th/) que representa las cabeceras y [`td`](https://w3api.com/HTML/td/) que representa las celdas. Así que dependiendo del elemento sobre el que queramos alinear el texto deberemos de utilizar uno u otro.


## Atributo text-align de CSS


Lo siguiente que vamos a aprender es qué atributo [HTML](https://www.manualweb.net/html/) nos sirve para alinear el texto. En este caso el atributo [CSS](https://www.manualweb.net/css/) que vamos a utilizar el [`text-align`](https://w3api.com/CSS/text-align/).


Algunos de los valores que admite [`text-align`](https://w3api.com/CSS/text-align/) como valores son:

- **left**, para alinear el texto a la izquierda.
- **rigth**, para alinear el texto a la derecha.
- **center**, para centrar el texto.
- **justify**, para que sea un texto justificado.

## Ejemplos de alineación de texto en tablas


Ahora ya solo nos queda combinar el atributo [`text-align`](https://w3api.com/CSS/text-align/) con los elementos [HTML](https://www.manualweb.net/html/) para conseguir alinear texto en una tabla.


Por ejemplo podríamos hacer las siguientes cosas... Centrar los títulos, manipulando el elemento [`th`](https://w3api.com/HTML/th/).


```css
table th {
  text-align: center;
}
```


Alinear todo el texto de las filas a la derecha, para ello aplicamos el atributo [`text-align`](https://w3api.com/CSS/text-align/) sobre el elemento de la fila [`tr`](https://w3api.com/HTML/tr/):


```css
table tr {
  text-align: right;
}
```


Centrar solo el contenido de la cuarta fila de la tabla:


```css
table tr:nth-child(4) {
  text-align: center;
}
```


En este caso nos apoyamos en el selector [`nth-child`](https://www.w3api.com/CSS/nth-child/) que puede seleccionar un elemento en función de su orden entre los hijos de su elemento padre. Combina el poder de [`text-align`](https://w3api.com/CSS/text-align/) con los selectores adecuados para lograr la alineación deseada en tu tabla.


Y así todos los ejemplos que se te ocurran para alinear texto en una tabla utilizando las propiedades de [CSS](https://www.manualweb.net/css/).

