---
title: "Cabecera en tabla HTML"
description: "Ejemplo que nos enseña a utilizar los elementos th y thead para poder definir una cabecera en tabla html"
date: 2015-06-01
updatedDate: 2026-01-21
tags: ["thead","th","td","table"]
slug: html/tablas/cabecera-en-tabla-html
type: doc
topic: html
id: 1c848602-78ee-443c-80ee-7b247b0e0c19
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_html/blob/master/tablas/tabla-con-cabecera.html
---

A la hora de definir una cabecera en tabla [HTML](https://www.manualweb.net/html/) tenemos que conocer dos elementos del lenguaje HTML. 


El primer elemento es `thead`. El elemento `thead` es un elemento agrupador de celdas, estas celdas serán las que conformen una cabecera en tabla HTML. 


El segundo de los elementos será `th`. En este caso `th` representa a una celda independiente que es una cabecera en sí misma.


## Ejemplo de tabla con cabecera


Como ejemplo y para mostrar de una forma sencilla qué sería la cabecera en tabla [HTML](https://www.manualweb.net/html/) vamos a ver la siguiente tabla:


| Cabecera 1 | Cabecera 2 | Cabecera 3 |
| ---------- | ---------- | ---------- |
| Celda 2.1  | Celda 2.2  | Celda 2.3  |
| Celda 3.1  | Celda 3.2  | Celda 3.3  |

undefined
## El elemento thead


Lo que nos va a permitir el elemento `thead` es agrupar una serie de elementos, para indicar que estos elementos son la cabecera. Estos elementos no dejarán de ser una o varias líneas, dependiendo de lo compleja que sea nuestra cabecera. 


Utilizaremos el elemento `thead` de la siguiente forma:


```html
<table>
  <thead>
    <tr>
      <th>Cabecera 1</th>
      <th>Cabecera 2</th>
      <th>Cabecera 3</th>
    </tr>
  </thead>
</table>
```


| Cabecera 1 | Cabecera 2 | Cabecera 3 |
| ---------- | ---------- | ---------- |

undefined
## El elemento th


Importante destacar que los navegadores web suelen resaltar en negrita los elementos que se encuentran dentro de los elementos `th`. Si bien, recomendamos que utilices [CSS](http://www.manualweb.net/css/) para darle forma a las cabeceras.


## Combinando thead y th


Si ahora combinamos los elementos `thead` y `th` para crear una cabecera en tabla [HTML](https://www.manualweb.net/html/) nos quedaría el siguiente código:


```html
<table>
  <thead>
    <tr>
      <th>Cabecera 1</th>
      <th>Cabecera 2</th>
      <th>Cabecera 3</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Celda 1.1</td>
      <td>Celda 1.2</td>
      <td>Celda 1.3</td>
    </tr>
    <tr>
      <td>Celda 2.1</td>
      <td>Celda 2.2</td>
      <td>Celda 2.3</td>
    </tr>
    <tr>
      <td>Celda 3.1</td>
      <td>Celda 3.2</td>
      <td>Celda 3.3</td>
    </tr>
  </tbody>
</table>
```


| Cabecera 1 | Cabecera 2 | Cabecera 3 |
| ---------- | ---------- | ---------- |
| Celda 1.1  | Celda 1.2  | Celda 1.3  |
| Celda 2.1  | Celda 2.2  | Celda 2.3  |
| Celda 3.1  | Celda 3.2  | Celda 3.3  |

undefined