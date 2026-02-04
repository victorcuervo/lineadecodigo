---
title: "Agrupar columnas en una tabla HTML"
description: "Utilización del atributo colspan para agrupar columnas en una tabla HTML de una forma sencilla y contado paso a paso."
date: 2015-06-06
updatedDate: 2026-01-18
tags: ["colspan","table","tr","td","th"]
slug: html/tablas/agrupar-columnas-en-una-tabla-html
type: doc
topic: html
id: ff16a2ca-76a3-41f8-b227-5caa77391d20
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_html/blob/master/tablas/agrupar-columnas.html
---

Ya hemos visto [como agrupar filas en una tabla HTML](http://lineadecodigo.com/html/agrupar-filas-en-una-tabla-html/), así que en el día de hoy vamos a ver como podemos agrupar columnas en una tabla [HTML](https://www.manualweb.net/html/).


El agrupar columnas en una tabla [HTML](https://www.manualweb.net/html/) nos va a suceder cuando queramos desglosar el contenido de una columna en dos conceptos. Por ejemplo imaginemos tener los datos de un cliente, la primera fila nos diría que se representan los datos del cliente.


| Datos del Cliente |                  |
| ----------------- | ---------------- |
| Nombre            | Teléfono         |
| Víctor Martín     | +34 695 68 78 90 |

undefined
## Uso del atributo colspan


Lo que tenemos que hacer para conseguir esto es agrupar la primera columna en dos columnas. Para poder agrupar columnas en una tabla [HTML](https://www.manualweb.net/html/) vamos a utilizar el atributo **colspan**.


El [atributo colspan](https://www.w3api.com/HTML/th/colspan/) se establece sobre el [elemento td](https://www.w3api.com/HTML/td/colspan/) o sobre el [elemento th](https://www.w3api.com/HTML/th/). El valor que se le da al [atributo colspan](https://www.w3api.com/HTML/th/colspan/) será el número de columnas que queremos que abarque la celda sobre la que se lo aplicamos.


De esta forma si especificamos:


```html
<th colspan="2">Datos del Cliente</th>
```


Lo que estamos diciendo es que la celda que contiene este atributo valdrá por dos columnas. De esta forma en la siguiente fila podemos poner dos celdas. En este caso son [elementos th](https://www.w3api.com/HTML/th/) ya que lo estamos realizando sobre celdas de cabecera.


## Ejemplo completo


```html
<table>
	<tr>
		<th colspan="2">Datos del Cliente</th>
	</tr>
	<tr>
		<th>Nombre</th>
		<th>Teléfono</th>
	</tr>
	<tr>
		<td>Víctor Martín</td>
		<td>+34 695 68 78 90</td>
	</tr>
</table>
```


Vemos que en la primera fila hay una celda, la cual decimos que vale por 2 mediante el [atributo colspan](https://www.w3api.com/HTML/th/colspan/) y en la segunda fila ya tenemos dos celdas. De esta forma hemos visto lo sencillo que es agrupar columnas en una tabla [HTML](https://www.manualweb.net/html/).

