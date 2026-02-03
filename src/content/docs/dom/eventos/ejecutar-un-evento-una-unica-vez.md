---
title: "Ejecutar un evento una única vez"
description: "Uso de la propiedad once en el método addEventListener para poder ejecutar un evento una única vez dentro de nuestra página web."
date: 2023-10-31
updatedDate: 2026-01-13
tags: ["eventtarget","addeventlistener","event","handleevent","target","click"]
slug: dom/eventos/ejecutar-un-evento-una-unica-vez
author: victor_cuervo
type: doc
topic: dom
id: ff80284e-eb9c-4b52-9370-c3fe6e828e3c
download: https://github.com/victorcuervo/lineadecodigo_dom/blob/main/eventos/evento-una-sola-vez.html
---

Cuando registramos un eventos tenemos múltiples opciones gestionar ese registro. Por ejemplo hemos visto [cómo podemos abortar la ejecución de un evento enviando una señal](https://lineadecodigo.com/dom/abortar-eventos-con-senales/). En este caso vamos a ver cómo podemos ejecutar un evento una única vez.


La idea es sencilla, lo que haremos será registrar un evento, por ejemplo el click sobre un botón y vamos a configurar para que cuando volvamos a pulsarlo el evento ya no esté disponible, ya que solo se ejecutará una vez.


En el ejemplo lo que vamos a hacer es poner 3 botones y registrar el mismo evento. De esta forma solo dejaremos que se pulse en uno de los botones y sabremos cual es el que se ha pulsado. A modo de opciones para el usuario.


Así que manos a la obra. Lo primero será poner los botones en nuestra página mediante un elemento [`button`](https://w3api.com/HTML/button/).


```html
<button id="uno">Uno</button>
<button id="dos">Dos</button>
<button id="tres">Tres</button>
```


Ahora vamos a registrar el evento que asociaremos a los tres botones. Para ello crearemos un objeto que tenga un método `.handleEvent()`.


```javascript
const controlador = {
  handleEvent: function(ev) {
    elegido.value = ev.target.id;
  }
}
```


El método `.handleEvent()` recibe la información del evento, es por ello que en el atributo [`Event.target`](https://www.w3api.com/DOM/Event/target/) podremos acceder al objeto que inicio el lanzamiento del evento y podremos recuperar, como podemos ver el código, el identificador del elemento mediante su atributo [`id`](https://w3api.com/HTML/id/).


Con el controlador diseñado lo que haremos, mediante el método [`.addEventListener()`](https://www.w3api.com/DOM/EventTarget/addEventListener/) es asociar dicho controlador a los tres botones.


```javascript
const b1 = document.getElementById("uno");
const b2 = document.getElementById("dos");
const b3 = document.getElementById("tres");

const controlador = {
    handleEvent: function(ev) {
        elegido.value = ev.target.id;
    }
}

b1.addEventListener("click",controlador);
b2.addEventListener("click",controlador);
b3.addEventListener("click",controlador);
```


Lo siguiente será hacer que solo pueda lanzar una vez el evento. Para ello [podríamos gestionar una señal que eliminase el lanzamiento del evento](https://lineadecodigo.com/dom/abortar-eventos-con-senales/), pero hay una forma más sencilla y es que si miramos la sintaxis del método [`.addEventListener()`](https://www.w3api.com/DOM/EventTarget/addEventListener/) vemos que hay una propiedad de opciones que nos permite gestionar que el evento solo se lance una única vez.


Esta propiedad es el valor `once`, lo cual podemos pasar como opciones dentro del método [`.addEventListener()`](https://www.w3api.com/DOM/EventTarget/addEventListener/).


```javascript
addEventListener(type, listener, options)
```


Simplemente tendremos que asociar el valor de `true` a dicha opción `once`. De esta manera nuestros gestores de eventos quedaría con el método [`.addEventListener()`](https://www.w3api.com/DOM/EventTarget/addEventListener/) de la siguiente manera:


```javascript
b1.addEventListener("click",controlador, { once: true });
b2.addEventListener("click",controlador, { once: true });
b3.addEventListener("click",controlador, { once: true });
```


Así ya tendremos nuestro código fuente para que tengamos el control para ejecutar un evento una única vez. ¿Te has dado cuenta que con el código sabremos qué botón fue pulsado?

