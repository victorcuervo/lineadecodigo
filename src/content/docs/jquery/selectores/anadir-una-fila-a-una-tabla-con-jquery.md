---
title: "Añadir una fila a una tabla con jQuery"
description: "Aprende a añadir una fila a una tabla con jQuery de manera sencilla y efectiva. Mejora la interacción en tu página web y sorprende a tus usuarios."
date: 2009-05-18
updatedDate: 2026-02-06
tags: ["table","tr","td","click","append"]
slug: jquery/selectores/anadir-una-fila-a-una-tabla-con-jquery
type: doc
topic: jquery
id: cc51b858-2187-4423-9da9-091a31f66f96
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_jquery/blob/master/dom/add-fila-tabla.html
---

La idea de este ejemplo es posibilitar el añadir filas a una tabla mediante un botón.


## Cargar jQuery


Para ello lo primero que hacemos es cargar el framework jQuery:


```html
<script src="jquery.js" type="text/javascript"></script>
```


## Crear la Tabla HTML


Asumiendo que tenemos una tabla en nuestro documento web:


```html
<table id="mitabla">
  <tr>
    <td>Dato 1.1</td>
    <td>Dato 1.2</td>
    <td>Dato 1.3</td>
  </tr>
  <tr>
    <td>Dato 2.1</td>
    <td>Dato 2.2</td>
    <td>Dato 2.3</td>
  </tr>
  <tr>
    <td>Dato 3.1</td>
    <td>Dato 3.2</td>
    <td>Dato 3.3</td>
  </tr>
</table>
```


## Añadir el Botón


Y el botón, claro está:


```html
<button id="add">Añadir Fila</button>
```


Es importante el ID que le demos al botón ya que será a este ID al que le asignemos la función de añadir la fila a la tabla.


## Gestionar el Evento Click


Para poder añadirle la funcionalidad de añadir una fila al botón "add" solamente tenemos que gestionar el evento click:


```javascript
$("#add").click(function() {
  // Código para añadir la fila
});
```


## Obtener el Número de Celdas


Lo primero que vamos a recuperar es el número de celdas de la tabla, ya que añadiremos una fila con el número de celdas que tenga la tabla. Utilizaremos un selector que nos posicione en la última fila de la tabla (tr:last) y en el elemento td, el cual representa la celda. Sobre estos elementos aplicamos el método length para saber el número de celdas:


```javascript
var n = $('tr:last td', $("#mitabla")).length;
```


## Crear la Nueva Fila


Ahora que sabemos el número de celdas, creamos una fila de una tabla. Puro HTML:


```javascript
var tds = '<tr>';
for(var i = 0; i < n; i++){
  tds += '<td>nuevo</td>';
}
tds += '</tr>';
```


## Añadir la Fila a la Tabla


Solo nos quedará añadir la fila que hemos creado al final de la tabla. Para ello utilizamos el método append(), sobre la tabla:


```javascript
$("#mitabla").append(tds);
```


Vía: [jQuery HowTo](http://jquery-howto.blogspot.com/2009/02/add-table-row-using-jquery-and.html)

