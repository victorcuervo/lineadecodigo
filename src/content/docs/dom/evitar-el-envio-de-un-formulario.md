---
title: Evitar el envío de un formulario
description: "Cómo utilizar el método preventDefault() para poder evitar el envío de un formulario dentro de la ejecución de nuestra página web."
lastupdates: 2023-03-19
author: victor_cuervo
---

Si estamos controlando datos en un [formulario HTML](https://manualweb.net/html/formularios-html/) se puede dar el caso de que si incluimos un botón se produzca el envío de la información a la hora de pulsarlo. Cuando quizás solo queramos realizar algún cálculo en el formulario antes de enviarlo. Es, en este caso, cuando tendremos que evitar el envío de un formulario al pulsar el botón.


Lo primero será crear el [formulario HTML](https://manualweb.net/html/formularios-html/) mediante el elemento [`form`](https://w3api.com/HTML/form/):


```html
<form>
  <label for="mensaje">Valor: </label>
  <input id="mensaje" type="text" value="0"/>
  <button id="inc">+1</button>
</form>
```


En este formulario hemos incluido un campo de texto mediante el elemento [`input`](https://w3api.com/HTML/input/) dónde podemos incluir un número de texto. Y un botón, mediante el elemento [`button`](https://w3api.com/HTML/button/) el cual nos permitirá ir incrementando el valor del campo de texto en el que pusimos el número.


Ahora pasaremos a codificar la parte en [Javascript](https://www.manualweb.net/javascript/) para poder dar el comportamiento de incremento de valores del formulario.


Para ello tendremos que obtener una referencia tanto al botón como al campo de texto mediante su [`id`](https://w3api.com/HTML/id/). Este [`id`](https://w3api.com/HTML/id/) lo utilizaremos para recuperar la referencia con el método [`.getElementById()`](https://www.w3api.com/DOM/Document/getElementById/). Una vez tenemos la referencia lo que haremos será asociar un evento `click` al botón mediante un método [`.addEventListener()`](https://www.w3api.com/DOM/EventTarget/addEventListener/).


```javascript
const boton = document.getElementById("inc");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function (ev) {...});
```


Dentro de la codificación del método [`.addEventListener()`](https://www.w3api.com/DOM/EventTarget/addEventListener/) vamos a hacer el proceso sencillo de incrementar el valor del campo de texto. Para ello recuperamos el valor que tiene el elemento [`input`](https://w3api.com/HTML/input/) y lo incrementamos en una unidad. Esto lo hacemos accediendo a su atributo [`value`](https://www.w3api.com/HTML/input/value/).


```javascript
const boton = document.getElementById("inc");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function (ev) {
	let valor = parseInt(mensaje.value) + 1;
	mensaje.value = valor;
});
```


Como el campo del elemento [`input`](https://w3api.com/HTML/input/) es texto, tendremos que apoyarnos en la función [Javascript](https://www.manualweb.net/javascript/) que convierte un texto en número, esta es la función [`.parseInt()`](https://www.w3api.com/Javascript/parseInt/).


Con este código tendremos el comportamiento que al pulsar el botón se ejecutará el código, pero automáticamente se enviará el formulario, por lo cual no podremos tener el efecto esperado y es dónde tenemos que saber cómo evitar el envío de un formulario al pulsar el botón.


Para ello hay que apoyarnos en el método [`.preventDefault()`](https://www.w3api.com/DOM/Event/preventDefault/) el cual va asociado al evento definido por el interface [`Event`](https://www.w3api.com/DOM/Event/) y que se obtiene como parámetro a la hora de registrar el evento.


El código quedaría de la siguiente forma al invocar al método [`.preventDefault()`](https://www.w3api.com/DOM/Event/preventDefault/)


```javascript
const boton = document.getElementById("inc");
const mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function (ev) {
	let valor = parseInt(mensaje.value) + 1;
	mensaje.value = valor;
  ev.preventDefault();
});
```


De esta forma ya habremos conseguido evitar el envío de un formulario al pulsar el botón manipulando los eventos de nuestro árbol [DOM](https://www.manualweb.net/dom/).

