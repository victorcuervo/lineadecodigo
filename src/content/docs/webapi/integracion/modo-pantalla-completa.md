---
title: "Modo Pantalla Completa"
description: "Uso del evento fullscreenchange, y de sus variantes atendiendo al navegador, para saber si el usuario ha entrado en modo pantalla completa con un documento."
date: 2019-01-19
updatedDate: 2026-01-23
tags: ["fullscreenchange","addeventlistener","fullscreen"]
slug: webapi/integracion/modo-pantalla-completa
author: victor_cuervo
type: doc
id: c43055fd-98af-4b8c-a400-1e2aaddad149
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Fullscreen%20API/saber-si-pantalla-completa.html
---

Ya hemos visto en algunos ejemplos el como [poner un vídeo a pantalla completa](http://lineadecodigo.com/html5/video-a-pantalla-completa/), un [documento a pantalla completa](http://lineadecodigo.com/html5/documento-a-pantalla-completa-con-html5/) o [una imagen a pantalla completa](http://lineadecodigo.com/html5/imagen-a-pantalla-completa-con-html5/). Pero en ambos casos guiábamos al usuario para poner a pantalla completa el elemento. Pero, qué sucede si el usuario pone por su cuenta el modo pantalla completa, ¿podemos saber de alguna manera que nuestra página se está visualizando a pantalla completa en [HTML5](http://www.manualweb.net/html5/) y con el **API Fullscreen**? Y por lo tanto aprovecharnos de dicha capacidad. Ahora vemos cómo podemos hacer esto.


## Gestionar el evento fullscreenchange


Gestionar el saber si estamos en modo pantalla completa pasa por controlar el evento `fullscreenchange`. Este evento [HTML5](http://www.manualweb.net/html5/) y del **API Fullscreen** es el que nos permite saber si el usuario ha puesto algún elemento a pantalla completa. Es por ello que lo que tendremos que hacer será manejar dicho evento en nuestro código.


Para poder manejar el evento `fullscreenchange` nos apoyamos en el método `.addEventListener()` que nos permite asociar a un evento una función que lo gestione.


```javascript
window.addEventListener("fullscreenchange",cambioPantalla,false);
```


Lo que hacemos a la hora de controlar el evento es llamar al método `.cambioPantalla()`. Este método simplemente nos va a sacar por consola que se ha producido un cambio en el modo de pantalla y un timestamp con el momento en el que se ha producido.


```javascript
function cambioPantalla(event){
  console.log("Cambio en Pantalla Completa " + Date.now());
}
```


Vemos que para gestionar el timestamp utilizamos el método [`Date.now`](http://date.now/)`()`.


## Eventos específicos de navegadores


Este código nos podría bastar para controlar el cambio de modo de pantalla, si bien las implementaciones de los navegadores pueden cambiar y es por ello por lo que aparecen un conjunto de eventos hack que simulan el comportamiento del evento `fullscreenchange`. Estos son:

- `webkitfullscreenchange`
- `mozfullscreenchange`
- `MSFullscreenchange`

Es por ello que tendremos que controlar todos los eventos, si bien los mandaremos todos a la misma función de control `.cambioPantalla()`.


```javascript
window.addEventListener("webkitfullscreenchange",cambioPantalla,false);
window.addEventListener("mozfullscreenchange",cambioPantalla,false);
window.addEventListener("MSFullscreenchange",cambioPantalla,false);
```


Con esto ya tendríamos el control de cada vez que hay un cambio a un modo pantalla completa en [HTML5](http://www.manualweb.net/html5/) y con el **API Fullscreen.**

