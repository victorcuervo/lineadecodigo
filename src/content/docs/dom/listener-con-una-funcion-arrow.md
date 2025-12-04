---
title: Listener con una función Arrow
description: "Artículo que explica los pasos que hay que seguir para poder definir un listener con una función Arrow de una forma sencilla y poco código."
lastUpdated: 2023-01-31
slug: /dom/listener-con-una-funcion-arrow/
author: victor_cuervo
---

Hemos creado [manejadores de eventos de diferentes formas](https://lineadecodigo.com/tag/javascript-eventos-addeventlistener/) en [Javascript](https://www.manualweb.net/javascript/). Normalmente recurrimos a una función anónima para crear el manejador del evento, en este caso vamos a crear un listener con una función arrow. Veremos que el código que creamos para gestionar el manejador [Javascript](https://www.manualweb.net/javascript/) es muy sencillo.


Pero lo primero será preguntarnos, [¿qué es una función arrow? o función flecha](https://manualweb.net/javascript/funcion-flecha/). Las funciones flecha aparecen en **ECMAScript 6** y son aquellas que nos permiten definir una función de forma sencilla siguiendo la siguiente estructura:


```javascript
let nombre = (argumentos) => {
  sentencias;
  return valor_retorno;
}
```


De esta manera podríamos definir una función flecha para que gestionase un evento de la siguiente forma:


```javascript
(ev) => {
  // Código del Manejador
}
```


Para poder verlo en un ejemplo vamos a imaginar que queremos codificar una página con un botón el cual, cada vez que se pulse, incremente un contador en el valor de uno.


Lo primero será crear los elementos [HTML](https://www.manualweb.net/html/), tanto el botón con un elemento [`button`](https://w3api.com/HTML/button/) como un campo [`input`](https://w3api.com/HTML/input/) en el que mostraremos el valor del contador:


```html
<form>
    <label for="mensaje">Valor: </label>
    <input id="mensaje" type="text" value="0"/>
    <button id="inc">+1</button>
</form>
```


Ahora crearemos un listener con una función arrow sobre el botón. Así que utilizaremos el método [`.addEvenListener()`](https://w3api.com/DOM/EventTarget/addEventListener/) para poder asociar el manejador.


```javascript
const boton = document.getElementById("inc");
const mensaje = document.getElementById("mensaje");

boton.addEventListener();
```


Ahora pasamos a definir el manejador mediante la función arrow dentro del método [`.addEvenListener()`](https://w3api.com/DOM/EventTarget/addEventListener/)


```javascript
boton.addEventListener("click", (ev)=>{
    let valor = parseInt(mensaje.value) + 1;
    mensaje.value = valor;
    ev.preventDefault();
});
```


Vemos que el manejador incrementa en uno el valor del campo [`input`](https://w3api.com/HTML/input/). Es importante que utilizamos la función [`.parseInt()`](https://w3api.com/Javascript/Number/parseInt/) que nos ayuda a convertir una cadena de texto a un número entero.


De esta forma tan sencilla hemos visto cómo crear un listener con una función arrow en [Javascript](https://www.manualweb.net/javascript/).

