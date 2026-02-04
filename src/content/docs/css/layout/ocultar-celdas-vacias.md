---
title: "Ocultar celdas vacías"
description: "Este ejemplo nos explica como podemos ocultar celdas vacías en una tabla HTML mediante el atributo empty-cells."
date: 2015-06-12
updatedDate: 2026-01-18
tags: ["tabla","background-color","empty-cells","hide"]
slug: css/layout/ocultar-celdas-vacias
type: doc
topic: css
id: c031c8f7-f4cb-43e7-ae2c-c2d3f8f0a393
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_css/blob/master/tablas/ocultar-celdas-vacias.html
---

Cuando estamos manipulando datos en una tabla [HTML](https://www.manualweb.net/html/) puede darse el caso que no nos interesen que se muestren ciertas celdas carentes de contenido y queramos ocultar celdas vacías. Posiblemente esto mejore la estética a la hora de presentar nuestros datos.


De igual manera podría darse el caso de que estemos utilizando la tabla para otros menesteres como el presentar cierto contenido. Y no nos referimos a dar el formato a la página, ya que esto deberíamos de estar haciéndolo con [capas DIV](https://www.w3api.com/HTML/div/). En este caso vamos a ocultar celdas vacías para representar elementos seleccionados dentro de una tabla.


## Ejemplo con celdas seleccionadas


Con la característica que cada elemento seleccionado se nos va a poner de un color. Para poder hacer esto tendríamos que ir contemplando cuál es el elemento seleccionado y asignándole un nuevo estilo cuando lo selecciones.


Lo que hemos hecho en este caso es **darle un color rojo a todas las celdas de la tabla** mediante el atributo [background-color](https://www.w3api.com/CSS/background-color/).


```css
table {
  background-color: red;
}
```


Además podemos ver que hay algunas celdas seleccionadas con una X y otras celdas que se encuentran vacías.


## Ocultar celdas vacías con empty-cells


Lo siguiente será poner en blanco todas aquellas celdas vacías. Para ello, en vez de ir a cada celda lo que vamos a hacer es ocultar celdas vacías, de esta forma, al estar vacías, no se les asignará ningún estilo.


Para ocultar celdas vacías deberemos de manipular el atributo **empty-cells** y en concreto, para ocultarlas, le asignaremos el valor **hide**. De esta forma el [código CSS](http://www.manualweb.net/css/) que nos quedará será el siguiente:


```css
table {
  background-color: red;
  empty-cells: hide;
}
```


Vemos que el atributo **empty-cells** se lo hemos dado a toda la tabla. Así el resultado que nos quedará en nuestra tabla será el siguiente:

