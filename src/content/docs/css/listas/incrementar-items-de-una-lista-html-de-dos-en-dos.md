---
title: "Incrementar items de una lista HTML de dos en dos"
description: "Utilización de atributos CSS para incrementar items de una lista HTML de dos en dos."
date: 2008-01-03
updatedDate: 2026-01-24
tags: ["counter-increment","counter-reset"]
slug: css/listas/incrementar-items-de-una-lista-html-de-dos-en-dos
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo/blob/master/lineadecodigo_css/listas/incrementar-item-dos-en-dos.html
topic: css

---

Como pudisteis leer en el artículo [Número de inicio de una lista con CSS](http://lineadecodigo.com/css/numero-de-inicio-de-una-lista-con-css/), la gestión de contadores en [CSS](http://www.manualweb.net/css/) nos permite alterar el comportamiento estándar de las listas ordenadas en [HTML](https://www.manualweb.net/html/). En este caso vamos a ver como podemos incrementar items de una lista HTML de dos en dos.


## Funcionamiento de las listas ordenadas


Por defecto las listas ordenadas empiezan con el valor 1 y se van incrementando de uno en uno. Nos apoyaremos en la propiedad `counter-increment` para alterar este comportamiento.


## Sintaxis de counter-increment


La sintaxis de la propiedad `counter-increment` es la siguiente:


```css
counter-increment: idcontador incremento
```


Por defecto, el valor de incremento es 1. Es decir, que si queremos que se incrementen de dos en dos tendremos que asignarle el valor de 2.


## Aplicar el incremento


Quedándonos la definición del estilo sobre el elemento LI de la siguiente forma:


```css
li:before {
	content: counter(item) ". ";
	counter-increment: item 2;
}
```


## Definir el valor inicial


Si bien, tendremos que haber definido con anterioridad el valor de inicio del contador. Esto nos lo proporciona la propiedad `counter-reset`. Es por ello, que sobre el elemento OL definiremos el siguiente estilo:


```css
ol {
  counter-reset: item -1;
}
```


El valor de -1 es para que la lista empiece realmente por 1. Ya que el incremento se aplicará a todos los elemento, incluido el primero de ellos. Entonces, al incrementar 2 al -1, tendremos que el primer elemento es el 1.

