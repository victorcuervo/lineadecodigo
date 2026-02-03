---
title: "Crear elementos HTML con JavaScript"
description: "Artículo que nos enseña a cómo trabajar con el DOM (árbol de objetos) de una página web y poder crear elementos HTML con JavaScript."
date: 2007-09-09
updatedDate: 2026-01-11
tags: ["h1","div","form","input","appendchild","createelement","getelementbyid","innerhtml"]
slug: dom/elementos/crear-elementos-html-con-javascript
author: victor_cuervo
type: doc
topic: dom
id: 2bcce5c6-6938-4dd3-80b1-3082c3101418
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/dom/crear-elemento-html.html
---

Lo más normal es que el contenido de nuestra página lo hayamos definido en nuestro documento [HTML](https://www.manualweb.net/html/) antes de que la página sea cargada. Si bien, desde [JavaScript](http://www.manualweb.net/javascript/) tenemos un par de métodos muy potentes que nos permiten crear elementos [HTML](https://www.manualweb.net/html/) con [Javascript](http://www.manualweb.net/javascript/) una vez cargada la página. Los métodos en cuestión son:


```javascript
.createElement(elemento)
.appendChild(elemento)
```


## Añadir un elemento h1 a una capa


En nuestro ejemplo vamos a añadir una cabecera, un elemento `h1` a una capa que exista en nuestra página. Lo primero es diseñar nuestra página con la capa. Este código es sencillo y nos basta con incluir un elemento [`div`](https://www.w3api.com/HTML/div/) dentro de la página:


```html
<div id="capa"></div>
```


Ahora añadiremos un formulario, el cual tiene un campo de entrada donde podremos añadir el texto y un botón que invocará a la función [JavaScript](http://www.manualweb.net/javascript/) `addElemento(texto)`, la cual tendrá el código que añadirá el elemento a la capa.


```html
<form>
  <input type="text" id="texto" name="texto"/>
  <input type="button" value="Añadir Elemento" onclick="addElemento(document.getElementById('texto').value);"/>
</form>
```


## Obtener referencia a la capa


Si analizamos la función `.addElemento()`, lo primero que haremos será obtener una referencia a la capa, a la que posteriormente añadiremos un elemento. Esto lo haremos mediante el método [`.getElementById()`](https://www.w3api.com/DOM/.getElementById()). Como parámetro se pasa el nombre de la capa que queremos acceder, el valor que tenga su atributo [`id`](https://www.w3api.com/HTML/id/). En este caso es "capa".


```javascript
var capa = document.getElementById("capa");
```


## Crear el elemento


Ahora crearemos el elemento `h1` y le añadiremos texto. Usamos la función `.createElement()` y [el atributo `.innerHTML`](https://www.w3api.com/DOM/Element/innerHTML/) para adjuntarle texto al elemento. En el primer caso la función `.createElement()` recibe como parámetro el nombre del elemento que queremos crear. Como lo que vamos a crear es un elemento de cabecera `h1` tendrá este nombre como valor. En el caso del [atributo `.innerHTML`](https://www.w3api.com/DOM/Element/innerHTML/) lo que haremos será el indicar el texto que irá como contenido del elemento que acabamos de crear.


```javascript
var elemento = document.createElement("h1");
elemento.innerHTML = texto;
```


## Añadir el elemento a la capa


Por último solo nos quedará el añadir el elemento creado a la capa. Aquí nos apoyaremos en el método `.appendChild(elemento)`.


```javascript
capa.appendChild(elemento);
```


## Código completo


Así la función que nos permite crear elementos [HTML](https://www.manualweb.net/html/) con [Javascript](http://www.manualweb.net/javascript/) quedaría de la siguiente forma:


```javascript
function addElemento(texto){
  var capa = document.getElementById("capa");
  var elemento = document.createElement("h1");
  elemento.innerHTML = texto;
  capa.appendChild(elemento);
}
```


Con esto ya hemos visto lo sencillo que resulta [manipular el DOM (árbol de objetos de la página web)](http://lineadecodigo.com/tag/javascript-dom/) para poder crear un simple elemento.

