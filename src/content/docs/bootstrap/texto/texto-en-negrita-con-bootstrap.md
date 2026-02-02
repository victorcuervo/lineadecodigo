---
title: "Texto en negrita con Bootstrap"
description: "Utilización de elementos de estructura para poner texto en negrita con Bootstrap"
date: 2013-10-09
updatedDate: 2026-02-02
tags: ["strong","b"]
slug: bootstrap/texto/texto-en-negrita-con-bootstrap
author: victor_cuervo
type: doc
id: 40db2034-8609-4814-bea7-b2ab4fd7ec25
download: https://github.com/victorcuervo/lineadecodigo_bootstrap/blob/master/texto/texto-negrita.html
---

Seguimos con [artículos sobre Bootstrap](http://lineadecodigo.com/categoria/bootstrap/) y en este caso vamos a ver como podemos poner un texto en negrita con [Bootstrap](http://www.manualweb.net/bootstrap/).


## El elemento B y su evolución


Cuando se trabaja con las primeras versiones de [HTML](https://www.manualweb.net/html/) existía el [elemento B](https://www.w3api.com/HTML/b/), la cual nos permitía poner cualquier texto en negrita de una forma sencilla para el usuario. Si bien es verdad que en estas primeras versiones del lenguaje [HTML](https://www.manualweb.net/html/) se mezclaba la estructura del documento con el estilo del documento, cosa que resolvió [CSS](http://www.manualweb.net/css/).


En el momento que apareció [CSS](http://www.manualweb.net/css/) el [elemento B](https://www.w3api.com/HTML/b/) cayó en el olvido (marcándose obsoleta), pero en cierto sentido complicando la vida al desarrollador con sus primero pasos en el lenguaje.


## Uso de strong en Bootstrap


Bootstrap es un framework que al ocultar la "complejidad" del estilo de los elementos nos permite poner un texto en negrita con un elemento del lenguaje de estructura. En este caso si queremos poner texto en negrita con [Bootstrap](http://www.manualweb.net/bootstrap/) tendremos que utilizar el [elemento strong](https://www.w3api.com/HTML/strong/) de la siguiente forma:


```html
<strong>Esto es un texto en negrita</strong>
```


Automáticamente veremos el texto en negrita, aunque realmente lo que [Bootstrap](http://www.manualweb.net/bootstrap/) está haciendo por detrás es aumentar el peso de la fuente (su grosor) mediante la manipulación del `font-weight`.


Si bien, es cierto, que el uso de `strong` para poner texto en negrita con [Bootstrap](http://www.manualweb.net/bootstrap/) simplifica mucho las cosas a los desarrolladores.


## El retorno del elemento B en HTML5


Por cierto, el [elemento B](https://www.w3api.com/HTML/b/) ha vuelto a reaparecer en [HTML5](https://www.manualweb.net/html5/), en este caso es para diferenciar texto dentro de un párrafo pero sin darle énfasis o importancia y que además se representará en negrita. ¿Quizás no sea lo mismo pero indicándolo de forma más rimbombante?

