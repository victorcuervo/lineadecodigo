---
title: "¿Qué elemento fue pulsado?"
description: "Código Javascript para saber qué elemento fue pulsado dentro de una página web."
date: 2007-08-02
updatedDate: 2026-01-12
tags: ["event","target","onmousedown","tagname"]
slug: dom/eventos/que-elemento-fue-pulsado
type: doc
topic: dom
id: 942a83c0-d349-4084-a9b7-5707266ca50c
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/eventos/detectar-que-elemento-fue-selecionado.html
---

## El DOM de una página web


Una página web se compone de un árbol de elementos, llamado DOM. La representación visual de estos elementos, ya sean solos o combinados, forma la página web que vemos en nuestro navegador.


El lenguaje [JavaScript](https://www.manualweb.net/javascript/) combinado con el modelo de elementos, DOM, nos permite acceder a las propiedades de cada uno de los elementos que forman nuestra página [HTML](https://www.manualweb.net/html/), leer sus valores, modificarlos...


Esta codificación se puede hacer directamente indicando el ID del elemento en cuestión. Si bien, también existe la posibilidad de manipular un elemento que haya seleccionado el usuario con el ratón.


## Capturar el evento del ratón


Para ello vamos a ver como podemos conocer que elemento, de los que forma nuestra página [HTML](https://www.manualweb.net/html/), ha sido seleccionado por el usuario.


Lo primero que tenemos que controlar es que el usuario pinche con el ratón en algún lado de la página. Esto lo haremos mediante el evento **onmousedown**, el cual aplicaremos al elemento BODY de la página.


Este evento lanzará una función, la cual reciba como parámetro el objeto **event**. Dicho objeto es el que guarda toda la información sobre el evento que se ha producido. La función solo tendrá que destripar la información de dicho objeto para ver que elemento fue pulsado.


La línea de código para capturar el evento del ratón es la siguiente:


```html
<body onmousedown="elemento(event);">
```


## Identificar el elemento pulsado


Vemos que la función que se lanza es **"elemento"**. Con respecto a la propiedad que contiene la información del elemento pulsado, tenemos discrepancias entre los navegadores (no nos extraña a estas alturas).


Algunos utilizan la propiedad **srcElement** y otros la propiedad **target**. Es por ello que tendremos que hacer una bifurcación en nuestro código.


Lo que si es igual para todos los navegadores, es la propiedad, incluida sobre la anterior, que contiene el nombre de la etiqueta. Esta propiedad es **tagName**.


Nuestro código quedará de la siguiente forma:


```javascript
function elemento(evento) {
  var tag;
  if (evento.srcElement) {
    tag = evento.srcElement.tagName;
  } else {
    tag = [evento.target](http://evento.target/).tagName;
  }
  alert("Has pulsado sobre el elemento: " + tag);
}
```

