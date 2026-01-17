---
title: "Título tabla HTML inferior"
description: "Cómo conseguir tener un título tabla html inferior para que este salga después de los datos."
date: 2015-06-03
updatedDate: 2026-01-17
tags: ["table","caption","caption-side"]
slug: css/texto/titulo-tabla-html-inferior
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_css/blob/master/tablas/titulo-tabla-inferior.html
topic: css

---

El otro día veíamos cómo podía [poner un título en tabla HTML](http://lineadecodigo.com/html/titulo-en-tabla-html/) mediante el elemento `caption`. En este ejemplo vamos a ver cómo tener un **título tabla HTML inferior**, es decir, que el título se vea después de la tabla.


## Añadiendo el título a la tabla


Lo primero será poner el título tabla HTML mediante el elemento `caption`:


```html
<table>
  <caption>Datos Demográficos</caption>
  <tbody>
    <tr>
      <th>País</th>
      <th>Capital</th>
      <th>Superficie</th>
      <th>Habitantes</th>
    </tr>
  </tbody>
</table>
```


> Hay que recordar que el elemento `caption` debe ir justamente después del elemento `table` y que el texto corresponderá al título de la tabla.


## Posicionando el título debajo de la tabla


Ahora vamos a ver cómo poner el título tabla HTML inferior y ello lo haremos mediante un estilo CSS y en concreto mediante el atributo `caption-side`.


Al atributo `caption-side` podemos darle los valores `bottom` o `top`, dependiendo de si lo queremos tener sobre la tabla o debajo de la tabla.


Así, si queremos el título tabla HTML inferior deberemos configurar las CSS de la siguiente forma:


```css
caption {
  caption-side: bottom;
}
```

