---
title: "Pie de tabla HTML"
description: "Aprende a crear un pie de tabla HTML con el elemento tfoot para resumir información de manera efectiva y organizada en tus tablas. ¡Hazlo ahora!"
date: 2015-06-04
updatedDate: 2026-01-19
tags: ["tfoot","table","thead","html","tr","td"]
slug: html/tablas/pie-de-tabla-html
author: victor_cuervo
type: doc
id: 83711615-0207-4a46-983e-4001b676dcc3
download: https://github.com/victorcuervo/lineadecodigo_html/blob/master/tablas/pie-de-tabla.html
---

Ya hemos visto cómo podemos poner una cabecera a una tabla [HTML](http://www.manualweb.net/tutorial-html/), ahora vamos a poner un pie de tabla [HTML](http://www.manualweb.net/tutorial-html/). Los pie de tabla [HTML](http://www.manualweb.net/tutorial-html/) se suelen utilizar para poner resúmenes, totalizadores,…


## Elemento tfoot para el pie de tabla


Para poder crear un pie de tabla [HTML](http://www.manualweb.net/tutorial-html/) vamos a recurrir al agrupador `tfoot`. El [elemento tfoot](http://www.w3api.com/wiki/HTML:TFOOT) será el que agrupe a las filas que representen el pie de tabla [HTML](http://www.manualweb.net/tutorial-html/).


Lo primero será echar un vistazo a la tabla que queremos representar y ver como hacer el pie de tabla [HTML](http://www.manualweb.net/tutorial-html/).


| Cabecera 1  | Cabecera 2  | Cabecera 3  |
| ----------- | ----------- | ----------- |
| Celda 1.1   | Celda 1.2   | Celda 1.3   |
| Celda 2.1   | Celda 2.2   | Celda 2.3   |
| Celda 3.1   | Celda 3.2   | Celda 3.3   |
| Sumatorio 1 | Sumatorio 2 | Sumatorio 3 |

undefined
En este ejemplo el pie de página [HTML](http://www.manualweb.net/tutorial-html/) a implementar sería el que tiene los sumatorios.


El código [HTML](http://www.manualweb.net/tutorial-html/) que necesitamos es el siguiente:


```html
<tfoot>
<tr>
	<td>Sumatorio 1</td>
	<td>Sumatorio 2</td>
	<td>Sumatorio 3</td>
</tr>
</tfoot>
```


Como podemos ver el [elemento tfoot](http://www.w3api.com/wiki/HTML:TFOOT) agrupa una fila definida por el [elemento tr](http://www.w3api.com/wiki/HTML:TR) y las [celdas td](http://www.w3api.com/wiki/HTML:TD). Con lo cual vemos que es sencillo modificar una tabla tipo.


Pero hay que tener una cosa en cuenta. Y es que el elemento `tfoot` deberá de ir justo detrás del elemento `thead`. Es decir, la fila de sumatorios NO será la última de nuestro código, si no la segunda.


Así para tener un pie de tabla [HTML](http://www.manualweb.net/tutorial-html/) deberemos de codificar de la siguiente forma:


```html
<table>
<thead>
<tr>
	<th>Cabecera 1</th>
	<th>Cabecera 2</th>
	<th>Cabecera 3</th>
</tr>
</thead>
<tfoot>
<tr>
	<td>Sumatorio 1</td>
	<td>Sumatorio 2</td>
	<td>Sumatorio 3</td>
</tr>
</tfoot>
<tr>
	<td>Celda 1.1</td>
	<td>Celda 1.2</td>
	<td>Celda 1.3</td>
</tr>
...
</table>
```

