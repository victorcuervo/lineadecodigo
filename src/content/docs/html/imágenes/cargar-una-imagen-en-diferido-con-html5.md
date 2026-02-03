---
title: "Cargar una imagen en diferido con HTML5"
description: "Aprende a cargar una imagen en diferido con HTML5 utilizando el atributo loading. Optimiza la velocidad de tu página y mejora la experiencia del usuario."
date: 2022-05-09
updatedDate: 2026-01-21
tags: ["img","loading","lazy"]
slug: html/imagenes/cargar-una-imagen-en-diferido-con-html5
author: victor_cuervo
type: doc
topic: html
id: d68d29c2-5c31-43ff-9f20-931bbd7cc4f3
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Imagenes/carga-imagenes-diferida.html
---

Un alto porcentaje de usuarios abandonan las páginas web si estas no han cargado en los primeros segundos. Cargar una imagen en diferido con [HTML5](https://www.manualweb.net/html5) permitirá que el usuario reciba el texto antes que las imágenes y por lo tanto tenga una rápida respuesta de la página web y no abandone nuestro sitio.


Vamos a ver que es muy sencillo cargar una imagen en diferido con [HTML5](https://www.manualweb.net/html5).


## Carga básica de imágenes en HTML5


Lo primero que tienes que saber es cómo se [carga una imagen mediante el lenguaje de etiquetas HTML5](https://lineadecodigo.com/tag/html-imagenes/). Para ello vamos a utilizar el elemento [`img`](http://w3api.com/HTML/img/). Este elemento [`img`](http://w3api.com/HTML/img/) tiene un atributo [`src`](http://w3api.com/HTML/img/src/) que nos permite indicar dónde se encuentra el fichero que contiene la imagen.


```html
<img src="imagen.png">
```


Cuando el navegador se encuentre con este elemento [`img`](http://w3api.com/HTML/img/) va a solicitar la imagen a la URI en la que se encuentre y va a empezar a renderizar la página cuando la imagen se haya descargado. Es por ello que el resto de la página no se va a renderizar.


Si tenemos muchas imágenes en la página, más tardará esta en rederizarse, por consiguiente más tiempo tardará el usuario en poder ver el contenido y se aumentarán las posibilidades de que este abandone.


## Definir el tamaño de la imagen


Para poder evitar esta situación e indicar al navegador que renderize la imagen a posteriori lo que se solía hacer [a principios de la definición del lenguaje HTML](https://www.manualweb.net/html/historia-html-inicios/) era [definir el tamaño de la imagen](https://lineadecodigo.com/html/alto-y-ancho-de-una-imagen-con-html/) mediante los atributos [`width`](http://w3api.com/HTML/img/width/) y [`height`](http://w3api.com/HTML/img/height/). Con esto se conseguía (y se consigue) que el navegador sepa el tamaño que tiene que dejar para la imagen en el renderizado y por lo tanto optimiza ese proceso y la carga.


```html
<img src="imagen.png" width="200" height="200">
```


## El atributo loading


Si bien, desde la versión [HTML5](https://www.manualweb.net/html5) contamos con un nuevo atributo llamado [`loading`](http://w3api.com/HTML/img/loading/). El atributo [`loading`](http://w3api.com/HTML/img/loading/) puede tener dos valores. Por un lado **lazy** y por otro **eager**.


En el caso de que utilicemos el valor de **lazy** estaremos indicando al navegador que no hace falta cargar la imagen de forma síncrona, mientras que si utilizamos el valor de **eager** estaremos indicando al navegador que tiene que cargar la imagen en ese mismo momento.


Es por ello que si queremos cargar una imagen en diferido con [HTML5](https://www.manualweb.net/html5) deberemos de utilizar el valor de **lazy**.


```html
<img src="imagen.png" loading="lazy">
```


Hay que ver bien cuáles de las imágenes que tenemos en nuestra página se pueden cargar de forma asíncrona, seguro que son unas cuantas, pero seguro que utilizando este pequeño truco optimizareis la carga del contenido de vuestras páginas web.

