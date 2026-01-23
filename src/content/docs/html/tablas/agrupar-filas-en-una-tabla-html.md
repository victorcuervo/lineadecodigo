---
title: "Agrupar filas en una tabla html"
description: "Aprende a agrupar filas en una tabla HTML utilizando el atributo rowspan para crear estructuras más organizadas y complejas que mejoren la presentación de tus datos."
date: 2015-06-05
updatedDate: 2026-01-23
tags: ["table","tr","td","colspan"]
slug: html/tablas/agrupar-filas-en-una-tabla-html
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_html/blob/master/tablas/agrupar-filas.html
topic: html

---

Cuando estemos diseñando una tabla puede darse el caso de que queramos que una celda agrupe al contenido de dos o más celdas en las filas siguientes. Es por ello que vamos a ver cómo podemos agrupar filas en una tabla [HTML](https://www.manualweb.net/html/).


## El atributo rowspan


Para agrupar filas en una tabla HTML vamos a utilizar el atributo `rowspan` de las celdas. El atributo `rowspan` indica el número de filas a las cual se expande su contenido.


> El valor del atributo `rowspan` equivaldrá al número de filas sobre las que queramos expandir dicha celda.


## Ejemplo visual


Para entender mejor de lo que hablamos vamos a ver cómo quedaría visualmente una tabla con filas agrupadas:


| País                     | Datos      | T1  | T2  | T3  | T4  |
| ------------------------ | ---------- | --- | --- | --- | --- |
| España (expande 2 filas) | Cantidad   | 10  | 15  | 8   | 9   |
|                          | Porcentaje | 40% | 25% | 32% | 38% |
| Italia (expande 2 filas) | Cantidad   | 12  | 8   | 15  | 20  |
|                          | Porcentaje | 10% | 9%  | 45% | 80% |

undefined
Podemos ver que el contenido del **País** agrupa el contenido que tiene **la cantidad** y **el porcentaje**. Es decir, se agrupa la primera celda con las dos filas siguientes.


## Código HTML


De esta forma la primera fila de datos de la tabla quedaría de la siguiente forma:


```html
<tr>
  <td rowspan="2">España</td>
  <td>Cantidad</td>
  <td>10</td>
  <td>15</td>
  <td>8</td>
  <td>9</td>
</tr>
```


Vemos que hemos indicado que la primera celda se expanderá a dos filas mediante `rowspan="2"`.


## La segunda fila


De esta forma, a la hora de crear **la segunda fila, esta tendrá una celda menos que la primera** (en vez de 6 celdas se tendrán 5 celdas), ya que hemos dicho que la primera celda equivale a dos.


```html
<tr>
  <td>Porcentaje</td>
  <td>40%</td>
  <td>25%</td>
  <td>32%</td>
  <td>38%</td>
</tr>
```


## Código completo


El código HTML completo de la tabla sería:


```html
<table>
  <tr>
    <th>País</th>
    <th>Datos</th>
    <th>T1</th>
    <th>T2</th>
    <th>T3</th>
    <th>T4</th>
  </tr>
  <tr>
    <td rowspan="2">España</td>
    <td>Cantidad</td>
    <td>10</td>
    <td>15</td>
    <td>8</td>
    <td>9</td>
  </tr>
  <tr>
    <td>Porcentaje</td>
    <td>40%</td>
    <td>25%</td>
    <td>32%</td>
    <td>38%</td>
  </tr>
  <tr>
    <td rowspan="2">Italia</td>
    <td>Cantidad</td>
    <td>12</td>
    <td>8</td>
    <td>15</td>
    <td>20</td>
  </tr>
  <tr>
    <td>Porcentaje</td>
    <td>10%</td>
    <td>9%</td>
    <td>45%</td>
    <td>80%</td>
  </tr>
</table>
```


De esta forma hemos visto cómo el atributo `rowspan` nos ayuda a agrupar filas en una tabla [HTML](https://www.manualweb.net/html/), permitiéndonos crear estructuras de datos más complejas y organizadas.

