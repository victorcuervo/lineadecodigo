---
title: "Enlace que abra dos páginas"
description: "Esta página explica cómo crear un enlace que abra dos páginas simultáneamente para mejorar la navegación del usuario."
date: 2006-11-22
updatedDate: 2026-01-06
tags: ["a","enlaces","window","open","onclick"]
slug: html/enlaces/enlace-que-abra-dos-paginas
type: doc
topic: html
id: fff9f605-ac86-4456-bbde-16df1ae2f582
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo/blob/master/lineadecodigo_html/enlaces/enlace-que-abre-dos-paginas.html
---

Cuando estamos utilizando los enlaces [HTML](http://www.manualweb.net/tutorial-html/) dentro de una página web vemos que su comportamiento natural es el de abrir la página o parte en concreto de la página sobre alguno de los marcos del navegador (misma venta, ventana padre, algún frame,…). Mediante el lenguaje [HTML](http://www.manualweb.net/tutorial-html/) nos veremos limitados a este funcionamiento. Si queremos hacer otro tipo de cosas deberemos de utilizar el lenguaje de [Scripting](http://www.manualweb.net/tutorial-javascript/), [JavaScript](http://www.manualweb.net/tutorial-javascript/). Mediante este lenguaje podremos modificar las propiedades del navegador y modificar su comportamiento. Así, podremos llevar a cabo que cuando pinchemos en un enlace, este, abra dos URL de destino, en vez de una. Antes de empezar a explicar como hacer esto, cabe indicar que esta potencia tiene ciertas limitaciones. Ya que esto limitará la creación de páginas accesibles o destinadas a dispositivos que no interpreten el [JavaScript](http://www.manualweb.net/tutorial-javascript/). Como podría ser el caso de los móviles. Pongamonos manos a la obra. La idea inicial es abrir dos ventanas con dos URLs. Para ello lo primero que tenemos que saber es como se abre vía [JavaScript](http://www.manualweb.net/tutorial-javascript/) una ventana. Esto lo haremos mediante el objeto [window](http://w3api.com/wiki/DOM:Window) del DOM de los navegadores y su propiedad [.open()](http://w3api.com/wiki/DOM:Window.open()). Veamos la [línea de código](/):


```javascript
window.open (url:string,nombreVentana:string,caracteristicas :string);
```


A si que lo que haremos será crear una función que realice dos llamadas al método open. Dicha función recibirá como parámetro las dos URL que queramos abrir.


```javascript
function abrirEnlaces(url1,url2){
  window.open(url1);
  window.open(url2);
}
```


La función será llamada cuando pulsemos en un enlace. Para controlar esta pulsación deberemos de basarnos en la gestión de eventos. El evento a capturar será el [evento onClick](http://w3api.com/wiki/HTML:Onclick) que reciba el enlace.


```html
<a onclick="abrirEnlaces('https://www.ayudaenlaweb.com','https://lineadecodigo.com');">
Enlace que abre dos ventanas</a>
```


Lo que sucede es que antes de procesar el evento JavaScript, el navegador va a procesar el propio evento [HTML](http://www.manualweb.net/tutorial-html/) de la página. Es por ello que deberemos de deshabilitar este mecanismo indicando que la navegación del enlace [HTML](http://www.manualweb.net/tutorial-html/) es “#”. Esto significa que la navegación es el mismo sitio donde te encuentras.


Quedándonos la [línea de código](/) de la siguiente forma:


```html
<a href="#" onclick="abrirEnlaces('https://www.ayudaenlaweb.com','https://lineadecodigo.com')">;
Enlace que abre dos ventanas</a>
```

