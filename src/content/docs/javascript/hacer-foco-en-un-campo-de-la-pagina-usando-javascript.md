---
title: "Hacer foco en un campo de la página usando Javascript"
description: "Código fuente para que podamos hacer foco en un campo de la página usando Javascript."
date: 2007-06-13
updatedDate: 2026-01-11
tags: ["HTML Form","Javascript DOM","Javascript DOM Element","Javascript DOM Element Focus","Javascript DOM getElementById"]
slug: javascript/hacer-foco-en-un-campo-de-la-pagina-usando-javascript
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/dom/hacer-foco-en-un-elemento-de-la-pagina.html
topic: javascript

---

Vía [JavaScript](https://www.manualweb.net/javascript/) tenemos mecanismos para poder posicionarnos en un elemento de la página. Esto, por ejemplo, nos puede ser muy útil para posicionarnos en un campo concreto de un formulario, ya sea al principio del formulario o por validaciones que vayamos haciendo y que nos hagan ir a otro campo del formulario.


Pero no solo nos sirve para hacer foco en campos de formulario. También podemos hacer foco en otros elementos selecionables de una página como podría ser el caso de un enlace.


## El método .focus()


El método que nos sirve para hacer foco es [.focus()](https://www.w3api.com/HTMLDOM/HTMLElement/focus/). Este método se aplicará sobre uno de los elementos indicados anteriormente.


## Crear una función genérica


En nuestro caso vamos a intentar que sea algo genérico el hacer el foco sobre un elemento. Es por ello que vamos a codificar una función que nos ayude a poner el foco en un elemento, pasándose el id del elemento como parámetro. De esta manera, la función quedará de la siguiente forma:


```javascript
function focus(idElemento) {
  document.getElementById(idElemento).focus();
}
```


Utilizamos el método [getElementById](https://www.w3api.com/DOM/.getElementById()) para obtener la referencia al objeto mediante el ID recibido como parámetro. Sobre dicho objeto ejecutaremos el método [.focus()](https://www.w3api.com/HTMLDOM/HTMLElement/focus/).


> Ojo con las mayúsculas del método [getElementById](https://www.w3api.com/DOM/.getElementById()). [JavaScript](https://www.manualweb.net/javascript/) es un lenguaje sensible a mayúsculas y si no respetas la codificación puedes perder mucho tiempo buscando los errores


## Aplicar el foco en una página HTML


Es por ello, que si diseñamos una página web con formulario o enlaces, simplemente tendremos que utilizar el método `.focus(idElemento)` para posicionarnos sobre un elemento. De esta forma, si partimos de la siguiente página web [HTML](https://www.manualweb.net/html/):


```html
<form action="" method="POST">
  Nombre: <input id="nombre" type="text"></input>
  Apellido1: <input id="apellido1" type="text"></input>
  Apellido2: <input id="apellido2" type="text"></input>
  Direccion: <input id="direccion" type="text"></input>
</form>

<a href="#" id="enlace">Enlace que no enlaza con nada</a>
```


Podemos utilizar el método `.focus(idElemento)` para posicionarnos en los diferentes elementos. Así, podemos crear botones que invoquen a la función [JavaScript](https://www.manualweb.net/javascript/). Veamos el código:


```html
<button onclick="focus('nombre')">Foco en Nombre</button>
<button onclick="focus('apellido1')">Foco en Apellido1</button>
<button onclick="focus('apellido2')">Foco en Apellido2</button>
<button onclick="focus('direccion')">Foco en Dirección</button>
<button onclick="focus('enlace')">Foco en Enlace</button>
```

