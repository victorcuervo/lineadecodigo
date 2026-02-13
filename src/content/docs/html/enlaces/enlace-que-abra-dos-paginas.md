---
title: "Enlace que abra dos páginas"
description: "Esta página explica cómo crear un enlace que abra dos páginas simultáneamente para mejorar la navegación del usuario."
date: 2006-11-22
updatedDate: 2026-02-13
tags: ["a","enlaces","window","open","onclick"]
slug: html/enlaces/enlace-que-abra-dos-paginas
type: doc
topic: html
id: fff9f605-ac86-4456-bbde-16df1ae2f582
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo/blob/master/lineadecodigo_html/enlaces/enlace-que-abre-dos-paginas.html
---

Cuando estamos utilizando enlaces [HTML](http://www.manualweb.net/tutorial-html/) dentro de una página web, su comportamiento natural es abrir la página (o una parte concreta) en el contexto actual del navegador.


Mediante [HTML](https://lineadecodigo.com/html/) nos vemos limitados a este funcionamiento. Si queremos hacer otro tipo de cosas, debemos utilizar un lenguaje de _scripting_, como [JavaScript](https://lineadecodigo.com/javascript/).


Con JavaScript podemos modificar el comportamiento del navegador. Por ejemplo, podemos hacer que, al pulsar un enlace, se abran **dos URL de destino** en lugar de una.


## Limitaciones


Antes de empezar, conviene indicar que esta técnica tiene limitaciones.


En particular, reduce la accesibilidad y no funcionará en dispositivos o entornos que no interpreten [JavaScript](https://lineadecodigo.com/javascript/), como puede ser el caso de algunos móviles o navegadores con [JavaScript](https://lineadecodigo.com/javascript/) deshabilitado.


## Abrir una ventana con window.open


La idea inicial es abrir dos ventanas con dos URL. Para ello, lo primero que tenemos que saber es [cómo abrir una ventana vía JavaScript](https://lineadecodigo.com/javascript/abrir-una-ventana-con-javascript/).


Esto lo haremos mediante el objeto [`window`](https://www.w3api.com/DOM/Window/) del DOM del navegador y su método [`.open()`](https://www.w3api.com/DOM/Window/open/).


Veamos la línea de código:


```javascript
window.open(url, nombreVentana, caracteristicas);
```


## Crear una función que abra dos URL


Lo que haremos será crear una función que realice dos llamadas al método `open`. Dicha función recibirá como parámetro las dos URL que queramos abrir.


```javascript
function abrirEnlaces(url1, url2) {
	window.open(url1);
	window.open(url2);
}
```


## Llamar a la función desde un enlace


La función será llamada cuando pulsemos en un enlace. Para controlar esta pulsación, debemos basarnos en la gestión de eventos.


El evento a capturar será el evento [`onclick`](https://www.w3api.com/HTML/onclick/) del enlace.


```html
<a href="#" onclick="abrirEnlaces('https://www.ayudaenlaweb.com', 'https://lineadecodigo.com');">
	Enlace que abre dos ventanas
</a>
```


Antes de procesar el [JavaScript](https://lineadecodigo.com/javascript/), el navegador procesará el comportamiento por defecto del enlace HTML. Por ello, debemos deshabilitar la navegación normal del enlace indicando `href="#"`.


Esto significa que el enlace no navega a otra página y se queda en el mismo sitio donde se encuentra el usuario.

