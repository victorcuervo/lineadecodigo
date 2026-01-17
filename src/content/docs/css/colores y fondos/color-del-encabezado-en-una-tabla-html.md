---
title: "Color del encabezado en una tabla HTML"
description: "Aprende a definir el color del encabezado en una tabla HTML y transforma tus tablas con estilo. ¡Haz que tu contenido destaque y sea más atractivo!"
date: 2015-07-13
updatedDate: 2026-01-17
tags: ["table","td","color","background-color","first-child","thead"]
slug: css/colores-y-fondos/color-del-encabezado-en-una-tabla-html
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_css/blob/master/tablas/tabla-color-cabecera.html
topic: css

---

Los encabezados de las tablas suelen contener la información semántica relativa al contenido de las tabla. Es por ello que muchas veces nos interese tener un color del encabezado en una tabla HTML, el cual sea diferente al resto de la tabla.


## Definir el encabezado de la tabla


Para definir el color del encabezado en una tabla HTML lo primero que tenemos es que definir una tabla y entender qué es el encabezado dentro de una tabla. Echemos un vistazo a esta tabla:


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


Como puedes ver la cabecera se puede identificar de dos formas. Por un lado mediante las celdas `th`. Estas celdas son diferentes a las celdas normales `td` y se utilizan en el encabezado de la tabla. Por otro tenemos el agrupador `thead`. Este permite agrupar a varias filas que puedan representar al encabezado de la tabla. Recuerda que el encabezado no tiene por qué ser una única fila.


## Dar color al elemento thead


Es por ello que al definir el color del encabezado en una tabla HTML lo mejor será dar estilos al elemento `thead`:


```css
thead {
  background-color: #333;
  color: #fff;
}
```


El atributo `background-color` nos permite dar el color al fondo de la celda y el atributo `color` nos permite dar color al texto.


## Dar color al elemento th


De igual forma será válido para dar color del encabezado en una tabla HTML el código que de estilo al elemento `th`:


```css
th {
  background-color: #333;
  color: #fff;
}
```


## Usar el pseudoelemento first-child


Y si la persona que ha codificado la tabla no ha utilizado ni el elemento `thead` ni el elemento `th` siempre podremos recurrir al pseudoelemento de CSS `first-child`. Este pseudoelemento selecciona el primer elemento de una lista de elementos. De esta forma si seleccionamos todas las filas o `tr` y luego `first-child`, obtendremos la primera fila de la tabla:


```css
tr:first-child {
  background-color: #333;
  color: #fff;
}
```

