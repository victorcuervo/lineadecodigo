---
layout: post
title: Pasar datos a un listener
excerpt: "Cómo podemos utilizar el método bind sobre nuestro registro de eventos addEventListener para poder pasar datos a un listener."
categories: DOM
tags: [dom eventtarget,dom eventtarget addeventlistener]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Seguro que si has manejado eventos dentro de una página web mediante un método [`.addEventListener()`](https://www.w3api.com/DOM/EventTarget/addEventListener/) te has preguntado cómo puedes pasar datos a un listener. Es decir, que registrar un evento es sencillo y acceder al objeto que lo ha lanzado es fácil si accedemos a la propiedad [`Event.target`](https://www.w3api.com/DOM/Event/target/). Pero, qué hacer si queremos pasarle más información del contexto.


Lo que vamos a realizar en este código es el crear un botón, que al pulsarlo, nos emita un saludo en algún campo de la página web. Pero este saludo tendrá un nombre el cual pasaremos como dato adicional a nuestro gestor de eventos.


Lo primero, como no, crear nuestro botón para el saludo mediante el elemento [`button`](https://w3api.com/HTML/button/) y un área de texto para poner el saludo que conseguiremos mediante un elemento [`span`](https://w3api.com/HTML/span/).


```javascript
<button id="saludar">Saludar</button>
<span id="mensaje"></span>
```


> Recuerda siempre utilizar el atributo [`id`](https://w3api.com/HTML/id/) de los elementos [HTML](https://www.manualweb.net/html/) para poder acceder de forma sencilla en nuestro código [Javascript](https://www.manualweb.net/javascript/) mediante el método [`.getElementById()`](https://www.w3api.com/DOM/Document/getElementById/)


Ahora pasamos a registrar el evento `click` mediante el método [`.addEventListener()`](https://www.w3api.com/DOM/EventTarget/addEventListener/). Lo que hacemos el utilizar la propiedad [`innerHTML`](https://www.w3api.com/DOM/Element/innerHTML/) para poder volcar un texto sobre el elemento [`span`](https://w3api.com/HTML/span/).


```javascript
const boton = document.getElementById("saludar");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
    mensaje.innerHTML = "Hola";
});
```


El siguiente paso será definir una variable que contendrá el valor externo el cual queremos pasar a nuestro método [`.addEventListener()`](https://www.w3api.com/DOM/EventTarget/addEventListener/). Para conseguir pasarle esta variable externa recurrimos al método [`.bind()`](https://w3api.com/Javascript/Function/bind/) que llevan asociado todas las funciones.


La idea del método [`.bind()`](https://w3api.com/Javascript/Function/bind/) es que el valor que pasemos como primer parámetro será el valor de `this` dentro de la función. Así que pasaremos la variable como parámetro del método [`.bind()`](https://w3api.com/Javascript/Function/bind/)


```javascript
let nombre = "Víctor";
const boton = document.getElementById("saludar");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {...}.bind(nombre)
);
```


En este caso solo hemos pasado un primer parámetro que funciona como valor this dentro de la función. Si bien, al método [`.bind()`](https://w3api.com/Javascript/Function/bind/) le podemos pasar más parámetros, [como podemos consultar en la explicación de su sintaxis](https://w3api.com/Javascript/Function/bind/).


Ahora lo que tenemos que hacer es utilizar es el valor this dentro del método [`.addEventListener()`](https://www.w3api.com/DOM/EventTarget/addEventListener/) para poder componer el mensaje de saludo.


```javascript
let nombre = "Víctor";
const boton = document.getElementById("saludar");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function () {
    console.log(this);
    mensaje.innerHTML = "Hola " + this;
}.bind(nombre)
);
```


Con todo esto ya habremos conseguido pasar datos a un listener mediante el método [`.bind()`](https://w3api.com/Javascript/Function/bind/) a nuestro registro de eventos definido en el [`.addEventListener()`](https://www.w3api.com/DOM/EventTarget/addEventListener/).

