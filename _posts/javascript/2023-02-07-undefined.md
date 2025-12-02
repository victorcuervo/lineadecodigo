---
layout: post
title: Mostrar avisos en Javascript
excerpt: ""
categories: Javascript
tags: [dom window,dom window alert,javascript básicos]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Si estamos pensando el mostrar avisos en [Javascript](https://www.manualweb.net/javascript/) caeremos en la cuenta de que dentro de un formulario de datos en una página [HTML](https://www.manualweb.net/html/) se nos va a dar el caso en el que avisemos al usuario del resultado de la validación del mismo. Una de las soluciones, veremos que quizás no la mejor según el caso, será el sacar un aviso en una ventana o cuadro emergente, utilizando técnicas [JavaScript](https://www.manualweb.net/javascript/).


Y es que en este caso, el modelo DOM Level 0 nos ofrece sobre el objeto [`Window`](http://www.w3api.com/DOM/Window/) con un método denominado [`alert`](https://www.w3api.com/DOM/Window/alert/). Dicho método nos servirá para mostrar un mensaje de aviso en la pantalla.


```javascript
window.alert("mensaje")
```


En los navegadores el objeto [`Window`](http://www.w3api.com/DOM/Window/) se suele dar por supuesto y nos valdría poner también el [`alert`](https://www.w3api.com/DOM/Window/alert/) sin hacer referencia al objeto [`Window`](http://www.w3api.com/DOM/Window/).


Quedándonos la siguiente [línea de código](http://lineadecodigo.com/):


```javascript
alert("mensaje");
```


Es curioso el que **DOM Level 0** no es parte de ninguna especificación ni estándar. Sino que viene a reflejar un conjunto de funcionalidades que se pueden encontrar en _NetScape Navigator 3_ e I_nternet Explorer 3._ Y que sus sucesivas versiones han ido manteniendo.


La anterior [línea de código](https://lineadecodigo.com/) viene a generar una pantalla emergente y modal (no podremos ir a ninguna otra ventana hasta que pulsemos el botón) con el texto que se ha pasado como parámetro.


De esta forma, el siguiente código:


```javascript
window.alert("Esto es un mensaje de texto");
```


Producirá la siguiente salida por pantalla:


En Internet Explorer lo veremos de esta forma…


![](http://lineadecodigo.com/wp-content/uploads/2006/12/alert_ie.jpg)


Y en FireFox lo veremos de esta otra…


![](http://lineadecodigo.com/wp-content/uploads/2006/12/alert_firefox.jpg)


Como podemos ver el titulo de la ventana varía dependiendo del navegador que estemos utilizando. Y, por desgracia, no podemos cambiarle. Por lo menos a día de hoy.


De esta forma hemos visto lo sencillo que es utilizar el método [`alert`](https://www.w3api.com/DOM/Window/alert/) para poder mostrar avisos en [Javascript](https://www.manualweb.net/javascript/) dentro de nuestras páginas web.

