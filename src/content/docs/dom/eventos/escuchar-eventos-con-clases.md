---
title: "Escuchar Eventos con Clases"
description: "Ejemplo que nos enseña cómo desarrollar un código para poder escuchar eventos con clases en Javascript de una forma sencilla y fácil."
date: 2023-06-02
updatedDate: 2026-01-13
tags: ["eventtarget","addeventlistener","handleevent","clase","eventmanager","click","mousedown"]
slug: dom/eventos/escuchar-eventos-con-clases
type: doc
topic: dom
id: 95bb034f-34e7-4d30-b711-2a6fc3793496
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_dom/blob/main/eventos/escuchar-evento-clase.html
---

Normalmente cuando codificamos el “listener” de un evento en el [DOM](https://www.manualweb.net/dom/) utilizamos una función anónima. En este caso vamos a ver cómo podemos escuchar eventos con clases en [Javascript](https://www.manualweb.net/javascript/). Es decir, la idea es poder crear una clase que podamos instanciar y utilizar como listener de eventos.


Lo primero que vamos a hacer es definir el modelo de eventos que queremos gestionar en la página. En este caso lo que vamos a hacer es crear un botón, el cual gestione dos eventos, por un lado querremos saber si estamos pasando por encima del botón y por otro querremos saber si se ha pulsado el botón.


Así que manos a la obra y creemos nuestro botón. Es importante que indiquemos claramente el atributo [`id`](https://www.w3api.com/HTML/id/) del botón para poder referenciarlo a posteriori.


```html
<button id="miboton">Púlsame!!!</button>
<div id="saludo"></div>
```


Además hemos añadido un elemento [`div`](https://www.w3api.com/HTML/div/) para poder generar información en el momento que se produzcan los eventos.


Ahora, de forma natural, en [Javascript](https://www.manualweb.net/javascript/), recuperamos la referencia al elemento botón mediante el método [`getElementById()`](https://www.w3api.com/DOM/Document/getElementById/) y le asociamos la gestión del evento mediante el método [`addEventListener()`](https://www.w3api.com/DOM/EventTarget/addEventListener/).


```javascript
const boton = document.getElementById("miboton");
boton.addEventListener("click",eventManager);
boton.addEventListener("mouseover",eventManager);
```


Vemos que al “listener” o manejador del evento lo hemos asociado a los eventos `click` y `mouseover`. Y que le hemos asociado un objeto que se llama `eventManager`. Este objeto `eventManager` no deja de ser una instancia de una clase [Javascript](https://www.manualweb.net/javascript/), consiguiendo así el efecto de poder escuchar eventos con clases en [Javascript](https://www.manualweb.net/javascript/).


Por lo que vamos a crear una clase `EventManager`:


```javascript
class EventManager { }
```


Sobre esta clase vamos a realizar dos cosas, por un lado vamos a instanciarla pasándola el objeto sobre el cual queremos dejar los mensajes. Es decir, una referencia a nuestro elemento [`div`](https://www.w3api.com/HTML/div/). Esta referencia la guardaremos internamente en una variable mensaje.


```javascript
class EventManager {    
            
  mensaje;

  constructor(mensaje){
      this.mensaje = mensaje;
  }
}
```


Lo siguiente será crear el evento `handleEvent` el cual recibirá un evento como parámetro. La clase deberá de tener obligatoriamente este método para poder ser utilizada como manejador de eventos en los “listener”.


```javascript
class EventManager {                
  handleEvent (ev) { }
}
```


La codificación del método va evaluar el tipo de evento que le llega. Ya que la idea, al contrario que las funciones anónimas, será el poder reutilizarlo como manejador en el mayor número posible de eventos.


Es por ello que evaluaremos el tipo de evento a manejar que viene definido en el atributo [`type`](https://www.w3api.com/DOM/Event/type/) del evento. Así el código completo de nuestra clase para escuchar eventos en [Javascript](https://www.manualweb.net/javascript/) queda de la siguiente forma:


```javascript
class EventManager {    
            
  mensaje;

  constructor(mensaje){
      this.mensaje = mensaje;
  }

  handleEvent (ev) {
      console.log(ev.type);
      if (ev.type=="click")
          this.mensaje.innerHTML = "Me has pulsado";
      if (ev.type=="mouseover")
          this.mensaje.innerHTML = "Has pasado sobre mí";
  }
}
```


Ahora solo nos quedará el instanciarla pasando la referencia a la zona del mensaje. De esta manera, volviendo al código inicial nos faltaría lo siguiente:


```javascript
const saludo = document.getElementById("saludo");
const eventManager = new EventManager(saludo);
boton.addEventListener("click",eventManager);
boton.addEventListener("mouseover",eventManager);
```


Podemos apreciar que hemos instanciado la clase. De esta manera ya tendríamos nuestro código para poder escuchar eventos con clases en [Javascript](https://www.manualweb.net/javascript/).

