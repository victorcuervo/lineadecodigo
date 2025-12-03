---
title: Web Messaging en HTML5
description: "Web Messaging en HTML5 es un API que nos permite establecer un mecanismo de comunicación entre diferentes contextos dentro del navegador."
lastUpdated: 2023-03-19
author: victor_cuervo
---

Web Messaging en [HTML5](https://www.manualweb.net/html5/) es un API que nos permite establecer un mecanismo de comunicación entre diferentes contextos dentro del navegador. De esta manera no tendremos que utilizar el DOM para enviar mensajes, si no que utilizaremos el propio navegador para poder intercambiar los mensajes.


El uso de Web Messaging en [HTML5](https://www.manualweb.net/html5/) puede ser muy útil a la hora de comunicar información entre diferentes [iframes dentro de una página](https://lineadecodigo.com/html/crear-un-iframe/).


Pero lo primero que vamos a ver es cómo crear un sencillo ejemplo en el que enviemos un mensaje al navegador y nos suscribamos al mismo mensajes dentro de la página.


Para esto lo primero que vamos a hacer es crear un botón mediante un elemento [`button`](https://w3api.com/HTML/button/) que nos permita enviar el mensaje. Sobre este botón [controlamos la pulsación mediante una gestión del evento click](https://lineadecodigo.com/tag/javascript-eventos-addeventlistener/), siempre utilizando el método [`addEventListener()`](https://www.w3api.com/DOM/EventTarget/addEventListener/).


```javascript
<button id="boton">Enviar Mensaje</button>

<script>
  boton = document.getElementById("boton");
  boton.addEventListener("click",function(){
    window.postMessage("Mensaje para la ventana");
  })
</script>
```


Cómo podemos ver dentro de la gestión del evento hemos enviado el mensaje al navegador. Para ello, con el objeto [`window`](https://www.w3api.com/DOM/Window/), invocamos al método [`.postMessage()`](https://www.w3api.com/DOM/Window/postMessage/) el cual lleva incluido el mensaje que le queremos pasar a la ventana.


Para poder escuchar los mensajes en las ventanas que queramos preparar para gestionar mensajes podremos hacerlo registrando el evento [`message`](https://w3api.com/HTML/body/onmessage/).


Así podremos registrar un manejador para cuando se reciba un mensaje, bien en [Javascript](https://www.manualweb.net/javascript/), bien mediante un atributo del elemento [body](https://w3api.com/HTML/body/) de nuestra página [HTML5](https://www.manualweb.net/html5/). Este será el atributo [`onmessage`](https://w3api.com/HTML/body/onmessage/). De esta manera nuestro código quedará de la siguiente forma:


```html
<body onmessage="mensajeRecibido(event);">
```


Lo que nos quedará ahora es codificar el manejador en la función `mensajeRecibido`.


```javascript
<p id="texto"></p>

<script>
  function mensajeRecibido(e) {
    texto = document.getElementById("texto");
    texto.innerHTML = "Mensaje Recibido: "  + e.data;            
  }
</script>
```


Como podemos ver lo que hacemos simplemente es volcar el contenido del mensaje que viene en el atributo [`.data`](https://www.w3api.com/HTMLDOM/MessageEvent/data/) a un elemento [`p`](https://w3api.com/HTML/p/) para que se pueda visualizar en la página.


De esta forma tan sencilla habremos conseguido enviar un mensaje a la ventana del navegador y habremos preparado un documento HTML para poder recibir mensajes de otros contextos.


Esto es un ejemplo muy sencillo que nos permite conocer los elementos básicos del manejo de Web Messaging en [HTML5](https://www.manualweb.net/html5/). A partir de aquí ya podremos realizar ejemplos como poder pasar datos desde una página a un [iframe](https://w3api.com/HTML/iframe/) o el poder crear canales bidireccionales de comunicación.

