---
title: "Online y offline en HTML5"
description: "Descubre cómo gestionar el estado online y offline en HTML5 para optimizar tus aplicaciones web móviles y ofrecer una mejor experiencia al usuario."
date: 2022-05-20
updatedDate: 2026-01-21
tags: ["navigator","online","offline"]
slug: webapi/navegador/online-y-offline-en-html5
author: victor_cuervo
type: doc
topic: webapi
id: bbdcf763-2ee3-4eab-961d-22c25af9e8ff
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Device/Offline/detectar-offline.html
---

Muchas de las aplicaciones web que desarrollamos son para móviles. En este sentido es bueno saber, de cara a poder ofrecer más o menos funcionalidades, si el dispositivo que carga la página tiene conexión a internet o está desconectado. Es por ello que vamos a revisar y conocer un poco más cómo funciona el modo online y offline en [HTML5](https://www.manualweb.net/html5/).


## Propiedad window.navigator.onLine


La propiedad [Javascript](https://www.manualweb.net/javascript/) que nos va a permitir consultar el estado de conexión del dispositivo es [`window.navigator.onLine`](http://window.navigator.online/). Así que de una forma sencilla podemos consultar cual es el estado de conexión del dispositivo mediante la siguiente línea de código:


```javascript
[window.navigator.onLine](http://window.navigator.online/)
```


Incluso lo podemos insertar en la pantalla incluyendo el contenido en algún [elemento HTML](http://www.w3api.com/HTML/tag/elemento-html/) como podría ser un [elemento `span`](http://www.w3api.com/HTML/span/).


```html
<span id="estado"></span>
<script>
  document.getElementById("estado").innerHTML = [window.navigator.onLine](http://window.navigator.online/);
</script>
```


## Eventos online y offline


Hasta aquí es muy sencillo. Pero hay una cosa que tenemos que tener en cuenta. Esta cosa es que el estado del dispositivo puede cambiar de Online a Offline y viceversa muchas veces. Ya sea porque el dispositivo no tenga cobertura, porque el usuario decida desconectar la conexión a red,.... Es por ello que deberemos de controlar estos cambios de estado para conocer siempre en qué modo nos encontramos, y por lo tanto poder obrar en consecuencia.


Para poder conseguir esto vamos a controlar dos eventos: [`offline`](https://w3api.com/HTML/body/onoffline/) y [`online`](https://w3api.com/HTML/body/ononline/). Estos eventos se disparan en la ventana del navegador cada vez que hay un cambio de estado en la conexión del dispositivo. Es por ello que nos vamos a apoyar en el método `.addEventListener()` para poder controlar dichos eventos.


```javascript
window.addEventListener('online', function() {
  document.getElementById("estado").innerHTML = "Online";
});

window.addEventListener('offline', function() {
  document.getElementById("estado").innerHTML = "Offline";
});
```


Vemos que asociamos una función a estos eventos en la que simplemente cambiamos el valor de nuestro [elemento `span`](http://www.w3api.com/HTML/span/) para indicar el nuevo estado del dispositivo. De esta forma sabremos constantemente el estado de conexión en el que se encuentra el dispositivo, algo que hemos conseguido controlando el modo online y offline en [HTML5](https://www.manualweb.net/html5/).

