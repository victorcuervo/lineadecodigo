---
title: "Documento a pantalla completa con HTML5"
description: "Aprende a utilizar el API Fullscreen en HTML5 para mostrar documentos a pantalla completa y mejorar la experiencia del usuario con funcionalidades prácticas."
date: 2019-01-13
updatedDate: 2026-01-21
tags: ["fullscreen","requestfullscreen","promise"]
slug: webapi/integracion/documento-a-pantalla-completa-con-html5
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Fullscreen%20API/documento-pantalla-completa.html
topic: webapi

---

## Introducción al API Fullscreen


Gracias al **API Fullscreen** vamos a poder poner un documento a pantalla completa con [HTML5](http://www.manualweb.net/html5/) y aprovechar, de esta manera, todo el área de visualización de nuestra pantalla.


Para ello, en el API Fullscreen, contamos con el método `.requestFullscreen()`. Este método se puede aplicar bien sobre un documento [HTML](http://www.manualweb.net/html/) o bien sobre cualquier elemento del documento, sea este una imagen, un vídeo,... que serán los elementos más típicos a poner en pantalla completa u otros elementos como un botón,... que no sé yo quién querría poner un botón a pantalla completa (a gustos, colores).


## Uso básico de requestFullscreen


Así podremos ejecutar el método de la siguiente forma:


```javascript
elemento.requestFullscreen();
```


El método `.requestFullscreen()` nos devuelve una promesa o `promise`. Esta promesa será la que nos indique si podemos o no poner el documento a pantalla completa con [HTML5](http://www.manualweb.net/html5/).


## Compatibilidad con diferentes navegadores


Una cosa que tenemos que tener en cuenta es que el método `requestFullscreen()` puede estar implementado o no en el navegador que utilizamos, por lo cual es bueno utilizar los hacks de los diferentes navegadores.


```javascript
elemento.requestFullscreen ||
elemento.webkitRequestFullscreen ||
elemento.mozRequestFullScreen ||
elemento.msRequestFullscreen
```


De esta manera podemos construir una función estándar para poner un elemento a pantalla completa con el siguiente código:


```javascript
function irPantallaCompleta(elemento) {
  if (elemento.requestFullscreen) {
    elemento.requestFullscreen();
  } else if (elemento.webkitRequestFullscreen) {
    elemento.webkitRequestFullscreen();
  } else if (elemento.mozRequestFullScreen) {
    elemento.mozRequestFullScreen();
  } else if (elemento.msRequestFullscreen) {
    elemento.msRequestFullscreen();
  }
}
```


## Poner el documento a pantalla completa


Ahora lo que tenemos que hacer es llamar a dicha función para que nos ayude a poner el documento a pantalla completa con [HTML5](http://www.manualweb.net/html5/). Pero lo que recibe es un elemento [HTML](http://www.manualweb.net/html/). Entonces ¿qué elemento representa al documento? El elemento que representa al documento es `document.documentElement`.


Así que simplemente llamamos a la función con este elemento:


```html
<button onclick="irPantallaCompleta(document.documentElement)">
  Pantalla Completa
</button>
```


```javascript
irPantallaCompleta(document.documentElement);
```


## Salir de la pantalla completa


Hemos añadido un botón para que nos ayude a lanzar el poner el documento a pantalla completa. Y ¿ahora? Bueno, qué menos que le demos al usuario la posibilidad de salir de la pantalla completa. Que también puede dar a la tecla **Esc.** Pero vamos a ayudarle mediante el método `.exitFullscreen()`


La sintaxis del método `.exitFullscreen()` es la siguiente:


```javascript
document.exitFullscreen();
```


Al igual que sucedía con `requestFullscreen()` recibimos una promesa que nos indica si podrá salir del modo pantalla completa. Además también sucede la falta de implementación estándar, así que tendremos varios métodos relacionados con sus hacks.


```javascript
document.exitFullscreen ||
document.webkitExitFullscreen ||
document.mozCancelFullScreen ||
document.msExitFullscreen
```


Y nos haremos una función para salir de la pantalla completa:


```javascript
function salirPantallaCompleta() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}
```


Ya solo nos quedará añadirla a nuestro documento.


```html
<button onclick="salirPantallaCompleta()">
  Salir de Pantalla Completa
</button>
```


## Conclusión


Con esto tenemos completa nuestra página que nos ayude a poner el documento a pantalla completa con [HTML5](http://www.manualweb.net/html5/) y lógicamente salir de ella.

