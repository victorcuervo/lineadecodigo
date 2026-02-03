---
title: "Abrir una ventana con Javascript"
description: "Código fuente que nos explica cómo podemos abrir una ventana con Javascript."
date: 2009-01-03
updatedDate: 2026-01-12
tags: ["window","open","eventos","enlaces"]
slug: javascript/navegador/abrir-una-ventana-con-javascript
author: victor_cuervo
type: doc
topic: javascript
id: 51cf1020-21d8-4a15-9aac-98a347a1c344
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/ventanas/abrir-ventana.html
---

La idea de este ejemplo es ver qué código [JavaScript](https://www.manualweb.net/javascript/) se necesita para abrir una ventana nueva cuando pinchemos sobre un enlace. De esta manera conseguiremos más funcionalidades que [abriendo una nueva ventana con HTML](http://lineadecodigo.com/2006/12/22/abrir-enlace-en-una-nueva-ventana/).


## Crear el enlace


Lo primero que haremos será insertar un enlace dentro de nuestra página mediante el elemento [anchor A](https://www.w3api.com/HTML/a/). La característica principal de este enlace será que se enlaza sobre la misma página, para ello utilizamos la almohadilla (#).


```html
<a href="#" onclick="abrirVentana('[http://www.lineadecodigo.com')">Abrir](http://www.lineadecodigo.com/%27)%22%3EAbrir) Ventana</a>
```


## Capturar el evento onClick


Para sustituir la apertura tradicional de los enlaces capturamos el evento onClick. Dicho evento llamará a una función, pasándola la URL a abrir, que se encargará de abrir una ventana con [JavaScript](https://www.manualweb.net/javascript/).


## Método window.open


Dentro de nuestra función y para poder abrir una ventana con [JavaScript](https://www.manualweb.net/javascript/) utilizaremos el método [.open](https://www.w3api.com/DOM/Window/open/) del objeto [Window](https://www.w3api.com/HTML/body/onbeforeunload/). Este método tiene la siguiente signatura:


```javascript
[window.open](http://window.open/)(url, nombreVentana, caracteristicas);
```


## Parámetros del método


Dónde sus parámetros serían:

- **url: string** - Indicamos cual es la URL de la ventana que se va a abrir.
- **nombreVentana: string** - Nombre que se le va a asignar a la ventana. Este nombre es especialmente interesante cuando usamos esta ventana como frame.
- **caracteristicas: string** - Proporcionamos una cadena con las características que debe de tener la ventana. Dichas características son:
	- _directories_ - en el caso de que este activada nos mostrara la barra de vínculos.
	- _height_ - indicaremos la altura que debe de tener la página.
	- _location_ - nos servirá para desactivar la barra de navegación.
	- _menubar_ - representa a la barra de menús superior.
	- _scrollbars_ - sirve para indicar si aparecerán o no las barras de scroll.
	- _status_ - representa a la barra de estado.
	- _titlebar_ - representa a la barra del titulo.

A la mayoría de las características se les asignaran un "yes" o un "no" dependiendo de si queremos que aparezcan o no. Por defecto las características están a "yes".


## La función JavaScript


Nuestra función [JavaScript](https://www.manualweb.net/javascript/) abrirVentana quedaría de la siguiente forma:


```javascript
function abrirVentana(url) {
  [window.open](http://window.open/)(url, 'ventana', 'width=600,height=400,scrollbars=yes,status=yes,menubar=no,location=no');
}
```

