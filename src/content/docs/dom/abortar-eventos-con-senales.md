---
title: Abortar Eventos con Señales
description: "Uso del método addEventListener y de un controlador AbortController para poder abortar eventos con señales y parar su ejecución."
lastupdates: 2023-01-31
author: victor_cuervo
---

Las páginas web que construimos a día de hoy funcionan en base a eventos que se van produciendo y sobre los que vamos reaccionando. Si no hacemos nada, mientras estemos en la página, los eventos se seguirán produciendo, o bien existirán eventos de larga duración como podría ser la descarga de un elemento. Es por ello que es bueno el saber cómo podemos abortar eventos con señales para que estos eventos dejen de producirse.


Para poder explicar cómo podemos abortar eventos con señales en nuestra web manipulando los elementos [DOM](https://www.manualweb.net/dom/) vamos a realizar un ejemplo sencillo que nos ayude a entenderlo. La idea es tener una página web en la que capturemos un sencillo evento de pulsación de un botón o elemento [`button`](https://www.w3api.com/HTML/button/) registrando el evento [`onclick`](https://www.w3api.com/HTML/onclick/). Y dicho evento [`onclick`](https://www.w3api.com/HTML/onclick/) lo pararemos mediante una señal cuando se produzcan 3 clicks sobre el botón.


Así que lo primero será crear un botón mediante el elemento [`button`](https://www.w3api.com/HTML/button/):


```html
<button id="inc">Incrementar valor</button>
```


Y ahora registramos el evento [`onclick`](https://www.w3api.com/HTML/onclick/) ayudándonos del método [`.getElementById()`](https://www.w3api.com/DOM/Document/getElementById/) para acceder a él:


```javascript
const boton = document.getElementById("inc");

boton.addEventListener("click", ()=>{
  console.log("Capturo Evento") 
});
```


Lo que tiene el método [`.addEventListener()`](https://www.w3api.com/DOM/EventTarget/addEventListener/) es que a parte del controlador podemos indicarle una serie de opciones adicionales que nos permitan, por ejemplo, controlar que solo se llame al evento una vez, o que no se invoque al método [`.preventDefault()`](https://www.w3api.com/DOM/Event/preventDefault/). Una de estas opciones es poder asignarle una señal que nos permita abortar el evento y que no se vuelva a ejecutar dicho evento.


Para ello lo primero que tenemos que hacer es crear un controlador de señal. En este caso un [`AbortController`](https://www.w3api.com/DOM/AbortController/).


```javascript
const controller = new AbortController();
```


Y ese controlador, asignárselo como señal al método [`.addEventListener()`](https://www.w3api.com/DOM/EventTarget/addEventListener/) mediante el atributo [`AbortController.signal`](https://www.w3api.com/DOM/AbortController/signal/).


```javascript
boton.addEventListener("click", ()=>{
  console.log("Capturo Evento")
}, {
  signal: controller.signal
});
```


Ahora ya tenemos asignado el controlador mediante la señal al evento. Pero lo que nos quedará será decidir en qué momento mandamos una señal para que se aborte el evento.


Lo que vamos a hacer es controlar el número de veces que se pulsa el botón. Para ello creamos una variable valor que contiene dicho contador. En el caso de que el contador llegue a 3 lanzaremos la señal que aborte el evento mediante el método [`AbortController.abort()`](https://www.w3api.com/DOM/AbortController/abort/).


```javascript
boton.addEventListener("click", ()=>{

  console.log("Capturo Evento")
  let valor = parseInt(mensaje.value) + 1;
  mensaje.value = valor;

  // La tercera vez que hayamos capturado el evento lo eliminamos
  if (valor == 3)
    controller.abort();
}, {
  signal: controller.signal
});
```


De esta manera el evento click ya no volverá a ser lanzado y se dejará de contar. Así ya hemos aprendido cómo podemos abortar eventos con señales utilizando nuestro método [`.addEventListener()`](https://www.w3api.com/DOM/EventTarget/addEventListener/) y mediante un controlador [`AbortController`](https://www.w3api.com/DOM/AbortController/). Todo ello manipulando el árbol [DOM](https://www.manualweb.net/dom/) y con un poquito de [Javascript](https://www.manualweb.net/javascript/).

