---
title: "Insertar código HTML en una página web - insertAdjacentHTML"
description: "Ejemplo de cómo podemos insertar código HTML en una página web: insertAdjacentHTML."
date: 2012-09-08
updatedDate: 2026-01-12
tags: ["getelementbyid","innerhtml","insertadjacenthtml"]
slug: dom/nodos/insertar-codigo-html-en-una-pagina-web-insertadjacenthtml
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/dom/inyectar-html.html
topic: dom

---

Existen varias formas de insertar código [HTML](https://www.manualweb.net/html/) en una página web utilizando [Javascript](https://www.manualweb.net/javascript/). La primera y más rudimentaria es utilizando el método [write](https://www.w3api.com/DOM/.write()) del [document](https://www.w3api.com/DOM/).


```javascript
document.write("<p>Contenido HTML</p>");
```


## Limitaciones de document.write


El principal problema del [document.write](https://www.w3api.com/DOM/.write()) es que insertamos el código [HTML](https://www.manualweb.net/html/) en línea directamente en el momento que lo estamos ejecutando. Esto implica que si el documento [HTML](https://www.manualweb.net/html/) ya está completo no nos será de gran utilidad.


## Usando innerHTML


Otra opción que tenemos es utilizar la propiedad [.innerHTML](https://www.w3api.com/DOM/Element/innerHTML/) sobre un elemento. Mediante la propiedad [.innerHTML](https://www.w3api.com/DOM/Element/innerHTML/) accedemos al contenido de texto de un elemento. Así, si tenemos una capa:


```html
<div id="micapa"></div>
```


Accederemos al elemento y modificaremos su contenido:


```javascript
document.getElementById("micapa").innerHTML = "<p>Nuevo contenido</p>";
```


El principal inconveniente que tiene el atributo [.innerHTML](https://www.w3api.com/DOM/Element/innerHTML/) es que si necesitamos manipular un elemento [HTML](https://www.manualweb.net/html/), este, al volver a ser insertado será nuevamente parseado.


Imaginemos que tenemos una lista:


```html
<ul id="lista">
 <li>Elemento</li>
 <li>Elemento</li>
</ul>
```


Y modificamos el contenido de la lista para añadir un nuevo elemento:


```javascript
var lista = document.getElementById("lista");
lista.innerHTML = lista.innerHTML + "<li>Elemento</li>";
```


Cada vez que añadimos un elemento se parsearán todos los elementos [LI](https://www.w3api.com/HTML/li/). Ya que son borrados y nuevamente creados.


## insertAdjacentHTML: La solución eficiente


[En la especificación HTML5 aparece el método insertAdjacentHTML()](http://www.w3.org/TR/html5/apis-in-html-documents.html#insertadjacenthtml). Este método ya estaba siendo utilizado por Internet Explorer, y posteriormente enviado a estandarizar.


El método [insertAdjacentHTML()](https://www.w3api.com/DOM/Element/insertAdjacentHTML/) nos permite insertar contenido HTML teniendo en cuenta los elementos HTML que existan. Así podremos utilizar:

- **beforebegin**: antes del elemento
- **afterbegin**: al inicio del elemento
- **beforeend**: al final del elemento
- **afterend**: después del elemento

Así, en la lista podremos utilizar **beforeend** para insertar un nuevo elemento con [insertAdjacentHTML()](https://www.w3api.com/DOM/Element/insertAdjacentHTML/):


```javascript
var lista = document.getElementById("lista");
lista.insertAdjacentHTML("beforeend","<li>Elemento</li>");
```


De esta forma tenemos un mecanismo de insertar el [HTML](https://www.manualweb.net/html/) con [insertAdjacentHTML()](https://www.w3api.com/DOM/Element/insertAdjacentHTML/) en nuestra página web de una forma más sencilla, ágil y rápida.

