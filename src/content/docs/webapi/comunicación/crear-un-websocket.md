---
title: "Crear un Websocket"
description: "Aprende a crear un Websocket para comunicación bidireccional en tiempo real y mejora tus proyectos web con esta tecnología innovadora y eficiente."
date: 2010-12-20
updatedDate: 2026-01-21
tags: ["websocket","ws","open","send","close"]
slug: webapi/comunicacion/crear-un-websocket
author: victor_cuervo
type: doc
topic: webapi
id: ade5b03a-b549-49e6-a827-591beedad121
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/WebSocket/crear-websocket/crear-websocket.html
---

## Introducción a los Websockets


Un websocket es una tecnología [HTML5](https://www.manualweb.net/html5/) que nos permite abrir sockets para una comunicación bidirecional, full-duplex, con baja latencia y que se basa en el protocolo TCP. Los Websockets están siendo estandarizado por la [W3C](http://www.w3.org/) mediante el [Websocket API](http://dev.w3.org/html5/websockets/).


La versión del protocolo de Websockets más soportada en la actualidad es la versión 76.


## Definir el Websocket


Lo primero que tenemos que hacer es definir el Websocket. Para ello utilizamos la clase WebSocket, la cual recibe como parámetro la URI del Websocket.


```javascript
var websocket = new WebSocket("ws://[echo.websocket.org/](http://echo.websocket.org/)");
```


Lo primero que vemos es que la URI del Websocket se caracteriza por el protocolo ws:// o wss:// si fuese una conexión segura.


En nuestro caso utilizamos la URI `ws://`[`echo.websocket.org/`](http://echo.websocket.org/) que es un Websocket que responde con un eco de cada información enviada al servidor.


## Funciones de callback


Una vez que hemos creado el Websocket lo siguiente que tenemos que hacer es definir las funciones de callback que controlarán el intercambio de información con el Websocket.


Las funciones de callback que hay que implementar son:

- **onopen** - cuándo se abre el Websocket.
- **onmessage** - para cuando recibimos un mensaje por el Websocket.
- **onclose** - cuándo se cierra el Websocket.
- **onerror** - si se produce un error en el Websocket.

Todas las funciones de callback del Websocket tienen la siguiente estructura:


```javascript
websocket.onopen = function(evt) {
  // código del callback
};
```


Así, codificaremos las siguientes funciones de callback:


```javascript
websocket.onopen = function(evt) {
  escribir("Conectado al Websocket");
};

websocket.onmessage = function(evt) {
  escribir("Mensaje recibido: " + [evt.data](http://evt.data/));
};

websocket.onerror = function(evt) {
  escribir("Error: " + [evt.data](http://evt.data/));
};

websocket.onclose = function(evt) {
  escribir("Desconectado del Websocket");
};
```


Vemos que en todos los casos utilizamos la función escribir, la cual vuelca el contenido en una capa. De la siguiente forma:


```javascript
function escribir(mensaje) {
  document.getElementById("output").innerHTML += mensaje + "<br/>";
}
```


## Enviar mensajes


Una vez que tenemos el Websocket abierto y con sus funciones de callback definidas empezamos a enviar mensajes. Para enviar mensajes al Websocket utilizamos el método .send()


```javascript
function enviar() {
  var mensaje = document.getElementById("mensaje").value;
  websocket.send(mensaje);
  escribir("Mensaje enviado: " + mensaje);
}
```


## Cerrar el Websocket


Para finalizar nuestro cambio de mensajes con el Websocket utilizaremos el método .close() para cerrar el Websocket.


```javascript
function desconectar() {
  websocket.close();
}
```


## Layout HTML


Solo nos quedará tener un pequeño layout que nos permita ejecutar las funciones enviar() y desconectar(). Así como tener una capa en la cual se vuelque el contenido.


```html
<input type="text" id="mensaje" />
<button onclick="enviar()">Enviar</button>
<button onclick="desconectar()">Desconectar</button>
<div id="output"></div>
```


## Soporte de navegadores


Por último que nos queda por saber es el soporte de los navegadores para los Websockets. En la actualidad los navegadores que soportan los Websockets son:

- Firefox 4
- Google Chrome 4
- Opera 11
- Safari 5
