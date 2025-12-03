---
title: Hacer foco en un elemento sin scroll
description: "Uso del método focus y la propiedad preventScroll para poder hacer foco en un elemento sin scroll mediante Javascript y los métodos del DOM."
lastupdates: 2023-01-31
author: victor_cuervo
---

Cuando [hacemos un foco sobre un elemento de la página](https://lineadecodigo.com/javascript/hacer-foco-en-un-campo-de-la-pagina-usando-javascript/), el navegador, busca el elemento del foco y se posiciona sobre él realizando un scroll sobre el documento si el elemento no está dentro del área actual. Pero, cómo podemos diseñar nuestra web si queremos  hacer foco en un elemento sin scroll, es decir, posicionarnos en el elemento sin que el navegador mueva el scroll. La idea es no generar una sensación de cambio al usuario por el mero hecho de hacer foco sobre un elemento. Para ello vamos a utilizar algo de [Javascript](https://www.manualweb.net/javascript/) y métodos del [DOM](https://www.manualweb.net/dom/).


Lo primero será construir una página web que tenga muchos elementos. El primero será un botón que nos ayude a simular el foco sobre un elemento y que crearemos mediante un elemento [`button`](https://w3api.com/HTML/button/), luego crearemos muchos saltos de línea mediante un elemento [`br`](https://w3api.com/HTML/br/) y por último crearemos, mediante un elemento [`form`](https://w3api.com/HTML/form/), un formulario con los elementos sobre los que haremos foco.


Veamos el código que representa esto:


```html
<h1>Foco sin Scroll</h1>
  
<button id="hacerFoco">Hacer Foco Sin Scroll</button>

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

<form id="myform">
	<label for="nombre">Nombre: </label>
	<input type="text" id="nombre"/>
</form>
```


Ahora vamos a generar el foco sobre el campo del formulario. Para ello tenemos que registrar un evento sobre el botón utilizando un método [`.addEventListener()`](https://www.w3api.com/DOM/EventTarget/addEventListener/)


```javascript
let boton = document.getElementById("hacerFoco");
boton.addEventListener("click", function() { ... });
```


Este evento disparará el lanzar un foco sobre el campo de texto. Para poder hacer foco sobre dicho elemento simplemente tendremos que ejecutar el método [`.focus()`](https://www.w3api.com/HTMLDOM/HTMLElement/focus/). Así que utilizamos el método [`.getDocumentById()`](https://www.w3api.com/DOM/Document/getElementById/) para obtener acceso al campo y ya sobre él ejecutamos el método [`.focus()`](https://www.w3api.com/HTMLDOM/HTMLElement/focus/).


```javascript
let boton = document.getElementById("hacerFoco");
boton.addEventListener("click", function() {
  let campo = document.getElementById("nombre");
  campo.focus();
});
```


Si bien, el método [`.focus()`](https://www.w3api.com/HTMLDOM/HTMLElement/focus/), si no le decimos nada, hace el scroll sobre la página. Así que tenemos que echar un ojo a su sintaxis:


```javascript
Element.focus(options)
```


En estas opciones tenemos dos valores, por un lado **`preventScroll`** que nos permite evitar ejecutar el scroll y que será lo que utilicemos para nuestro ejemplo y **`focusVisible`** para decidir si se muestra o no la marca visible sobre el elemento al que hacemos foco.


Por lo tanto el código con la propiedad **`preventScroll`** con un valor `true` quedará de la siguiente forma:


```javascript
let boton = document.getElementById("hacerFoco");
boton.addEventListener("click", function() {
  let campo = document.getElementById("nombre");
  campo.focus({preventScroll: true});
});
```


Así ya podremos posicionarnos en el elemento sin que el navegador mueva el scroll con este sencillo código [Javascript](https://www.manualweb.net/javascript/)  que manipula los métodos del [DOM](https://www.manualweb.net/dom/).

