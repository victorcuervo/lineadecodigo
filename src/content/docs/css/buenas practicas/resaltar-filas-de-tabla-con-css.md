---
title: "Resaltar filas de tabla con CSS"
description: "Como utilizar el selector hover para conseguir el efecto de resaltar filas de tabla con CSS."
date: 2015-06-13
updatedDate: 2026-01-18
tags: ["table","tr","background-color","cursor","pointer","css","hover"]
slug: css/buenas-practicas/resaltar-filas-de-tabla-con-css
author: victor_cuervo
type: doc
topic: css
id: d9452210-ab96-4c0e-97c8-04254bf917a0
download: https://github.com/victorcuervo/lineadecodigo_css/blob/master/tablas/tabla-resaltar-filas.html
---

En este ejemplo vamos a ver cómo al mover el cursor sobre una tabla hagamos el efecto de resaltar filas de tabla con [CSS](http://www.manualweb.net/css/). Es decir, que se ilumine la fila sobre la que esté el cursor, o que cambie de color.


## Crear la tabla HTML


Lo primero será generar una tabla en [HTML](https://www.manualweb.net/html/). Así que veamos cómo sería esta tabla:


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


Como siempre hay que ver los elementos [HTML](https://www.manualweb.net/html/) que forman la tabla. Esto es importante ya que daremos estilo a estos elementos. Los importantes son [table](https://www.w3api.com/HTML/table/), [tr](https://www.w3api.com/HTML/tr/), [td](https://www.w3api.com/HTML/td/colspan/), [th](https://www.w3api.com/HTML/th/)... En este caso nos vamos a quedar con [tr](https://www.w3api.com/HTML/tr/) que es el que representa a la fila y nos servirá para el efecto que queremos hacer.


## Aplicar estilos CSS


Ya hemos dicho que el efecto de resaltar filas de tabla con [CSS](http://www.manualweb.net/css/) lo vamos a ejecutar sobre el elemento [tr](https://www.w3api.com/HTML/tr/), así que nuestra hoja de estilos [CSS](http://www.manualweb.net/css/) se tendrá que montar de la siguiente forma:


```css
tr {
  
}
```


Lo que vamos a hacer es cambiar de color a la fila, así que manipularemos el atributo [background-color](https://www.w3api.com/CSS/background-color/), asignando un valor diferente al que tengan.


```css
tr {
  background-color: red;
}
```


Pero hasta ahora este código [CSS](http://www.manualweb.net/css/) lo que hace es poner todas las filas de rojo. Y nosotros solo queremos que sea cuando pasemos con el cursor.


## Usar el selector hover


En este caso, al estilo hay que decirle que será en el caso de que se ejecute el selector [hover](https://www.w3api.com/CSS/hover/). Este es el que representa que el ratón pase por el elemento. Modificamos de nuevo nuestro código para añadir este efecto.


```css
tr:hover {
  background-color: red;
}
```


Con esto ya tendríamos conseguido el efecto de resaltar filas de tabla con [CSS](http://www.manualweb.net/css/).


## Cambiar el cursor


Pero vamos a añadirle un plus más, que será el que cuando pasemos por la fila el cursor se nos transforme en puntero. En este caso deberemos de modificar la propiedad [cursor](https://www.w3api.com/CSS/cursor/) y darle el valor de _pointer_ para conseguir dicho efecto.


De esta manera nuestro código [CSS](http://www.manualweb.net/css/) final que consigue el efecto de resaltar filas de tabla con [CSS](http://www.manualweb.net/css/) quedaría de la siguiente forma:


```css
tr:hover {
  background-color: red;
  cursor: pointer;
}
```

