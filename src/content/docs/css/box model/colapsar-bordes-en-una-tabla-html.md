---
title: "Colapsar bordes en una tabla HTML"
description: "Descubre cómo colapsar bordes en una tabla HTML para lograr un diseño más homogéneo y atractivo. Mejora la apariencia de tus tablas con CSS y sorprende a tus visitantes."
date: 2015-06-11
updatedDate: 2026-01-17
tags: ["border","table","border-collapse","separate","collapse"]
slug: css/box-model/colapsar-bordes-en-una-tabla-html
type: doc
topic: css
id: 805550fa-246d-44a4-8b77-47ab5943d635
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_css/blob/master/tablas/tabla-border-collapse.html
---

Cuando creamos una tabla [HTML](https://www.manualweb.net/html/) en una página web, estas, por defecto tienen un modelo de bordes independiente, es decir, podríamos modificar el contenido de los bordes de cada una de las celdas sin que las otras celdas se viesen afectadas. Si bien podemos colapsar bordes en una tabla [HTML](https://www.manualweb.net/html/) para que las celdas pasen a compartir los bordes.


Pero para explicar esto una imagen vale más que mil palabras. Si definimos una tabla [HTML](https://www.manualweb.net/html/) directamente, el aspecto en el navegador será el siguiente:


Como podemos apreciar hay una separación entre las diferentes celdas que hace que a la hora de darle un color a una fila quede un aspecto poco deseado. Esto sucede debido al modelo de bordes, el cual es separado.


## Colapsar bordes en una tabla HTML


Para conseguir que las celdas aparezcan agrupadas y así dar el color a una fila parezca más homogéneo lo que deberemos hacer es colapsar bordes en una tabla [HTML](https://www.manualweb.net/html/).


Si queremos conseguir colapsar bordes en una tabla [HTML](https://www.manualweb.net/html/) deberemos de jugar con el atributo [CSS](http://www.manualweb.net/css/) `border-collapse`. Este valor puede recibir dos valores, por defecto tiene asociado el valor `separate` que es el que indica que el modelo de bordes es separado.


El otro valor será `collapse`. Esto hará que los bordes de la tabla se colapsen y de esta forma consigamos el efecto comentado anteriormente.


## Aplicar border-collapse


Para poder fijar el atributo `border-collapse` deberemos de crear el siguiente estilo:


```css
table {
  border-collapse: collapse;
}
```


Como podemos ver el atributo `border-collapse` lo establecemos a nivel de la tabla.

