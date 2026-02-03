---
title: "Enviar mensaje a un iFrame"
description: "Aprende a enviar mensajes a un iFrame utilizando la API Web Messaging de HTML5 y mejora la interacción entre tus páginas web de forma sencilla y efectiva."
date: 2023-09-28
updatedDate: 2026-01-21
tags: ["iframe","addeventlistener","postmessage","webmessaging"]
slug: webapi/comunicacion/enviar-mensaje-a-un-iframe
author: victor_cuervo
type: doc
topic: webapi
id: d2f63111-bdfc-4c59-89f8-4aa0bb51bee3
download: https://github.com/victorcuervo/lineadecodigo_html5/tree/master/Web%20Messaging/Envio%20Mensajes
---

En este ejemplo vamos a ver cómo podemos enviar un mensaje a un iframe desde la página que lo contiene utilizando el API Web Messaging definido en [HTML5](https://www.manualweb.net/html5/). Es interesante que le eches un ojo al artículo que explica las bases del envío de mensajes [Web Messaging en HTML5](https://lineadecodigo.com/html5/web-messaging-en-html5/).


## Crear la página padre


Lo primero que vamos a construir será la página padre. Esta página lo que hará será llamar a un elemento [`iframe`](https://w3api.com/HTML/iframe/) al cual luego vamos a pasar la información.


```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Web Messaging</title>
</head>
<body>

  <h1>Web Messaging</h1>
  <iframe id="myiframe" src="detectar-evento.html" width="1000px" height="500px"></iframe>

</body>
</html>
```


Es importante que le des un valor al atributo [`id`](https://w3api.com/HTML/id/) del [`iframe`](https://w3api.com/HTML/iframe/), ya que luego lo vamos a utilizar.


## Añadir botón y manejador de eventos


Ahora vamos a crear un botón el cual será el encargado de enviar el mensaje. Tendremos que crear un manejador mediante un método [`.addEventListener()`](https://www.w3api.com/DOM/EventTarget/addEventListener/) que nos permita actuar cuando se haga click sobre dicho botón.


```javascript
<button id="boton">Enviar Mensaje</button>

<script>
    boton = document.getElementById("boton");
    boton.addEventListener("click",function() {...});
</script>
```


## Enviar el mensaje con postMessage


Lo que vamos hacer ahora es coger la referencia del [`iframe`](https://w3api.com/HTML/iframe/) y sobre su atributo [`contentWindow`](https://www.w3api.com/HTMLDOM/HTMLIFrameElement/contentWindow/) invocaremos al método [`.postMessage()`](https://www.w3api.com/DOM/Window/postMessage/). Será en este método dónde insertemos el mensaje que tenemos que enviar al [`iframe`](https://w3api.com/HTML/iframe/). Como segundo parámetro del método [`.postMessage()`](https://www.w3api.com/DOM/Window/postMessage/) podemos indicar el origen del mensaje o indicar un asterisco "*", tal y como hemos hecho, para no reflejar la procedencia. El código quedaría de la siguiente manera:


```javascript
<button id="boton">Enviar Mensaje</button>

<script>
    boton = document.getElementById("boton");
    boton.addEventListener("click",function() {
        myiframe = document.getElementById("myiframe");
        myiframe.contentWindow.postMessage("Hola",'*');
    });
</script>
```


## Preparar la página anidada para recibir mensajes


Una vez que hemos montado nuestra página que carga el [`iframe`](https://w3api.com/HTML/iframe/) y que se encarga de enviar un mensaje a dicho [`iframe`](https://w3api.com/HTML/iframe/) vamos a generar el código de la página anidada.


Básicamente, lo que tenemos que hacer en la página anidada, es prepararla para poder recibir mensajes. Es decir, prepararla para que pueda manejar el evento [`message`](https://www.w3api.com/HTML/body/onmessage/). Esto lo podremos hacer mediante código Javascript o mediante el atributo [`onmessage`](https://www.w3api.com/HTML/body/onmessage/) del elemento [`body`](https://www.w3api.com/HTML/body/). De esta segunda forma quedaría codificado así:


```html
<body onmessage="mensajeRecibido(event);">
```


## Crear el manejador del mensaje


Ahora pasamos a codificar el manejador que lo que hará será mostrar el contenido del mensaje recibido en el [`iframe`](https://w3api.com/HTML/iframe/) accediendo a su propiedad [`.data`](https://www.w3api.com/HTMLDOM/MessageEvent/data/) y volcando su contenido a un elemento [`p`](https://w3api.com/HTML/p/) de nuestra página web.


```javascript
<p id="texto"></p>

<script>
	function mensajeRecibido(e) {                       
	  texto = document.getElementById("texto");
	  texto.innerHTML = "Mensaje Recibido: " + e.data;
	}
</script>
```


Y de esta forma tan sencilla y codificando las dos páginas [HTML5](https://www.manualweb.net/html5/) habremos conseguido enviar un mensaje a un iframe mediante la API Web Messaging del estándar [HTML5](https://www.manualweb.net/html5/).

