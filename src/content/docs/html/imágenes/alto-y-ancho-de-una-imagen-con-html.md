---
title: "Alto y ancho de una imagen con HTML"
description: "Manejo de los atributos width y height para poder configurar el alto y ancho de una imagen con HTML dentro de nuestra página web."
date: 2007-12-03
updatedDate: 2026-01-05
tags: ["imagenes","img","width","height"]
slug: html/imagenes/alto-y-ancho-de-una-imagen-con-html
author: victor_cuervo
type: doc
id: f3a0ed41-fe08-4004-a1fd-db4da5417ff9
download: https://github.com/victorcuervo/lineadecodigo_html/blob/master/imagenes/alto-ancho-imagen.html
---

Cuando aprendemos a escribir lenguaje [HTML](https://www.manualweb.net/html/) para crear nuestras páginas web aguantaremos poco creando páginas web con solo texto y estaremos deseosos de insertarle alguna imagen para darlas colorido.


El elemento [HTML](https://www.manualweb.net/html/) que nos permite poner imágenes en nuestra página web es [`img`](https://w3api.com/HTML/img/). La línea de código que necesitaríamos sería la siguiente:


```html
<img src="mifoto.jpg" />
```


Vemos que el atributo [`src`](https://w3api.com/HTML/img/src/) permite indicar el nombre de la imagen que queramos cargar. Este nombre puede ser directamente el de la imagen o bien una ruta relativa o absoluta más el nombre de la imagen.


Por defecto, el tamaño de la imagen que carga es su tamaño original.


Si queremos modificar el tamaño deberemos de utilizar los atributos [HTML](https://www.manualweb.net/html/) [`width`](https://w3api.com/HTML/img/width/) y [`height`](https://w3api.com/HTML/img/height/), los cuales nos permiten modificar el ancho y el alto de la imagen respectivamente. A estos atributos les tendremos que dar unos valores numéricos que indiquen el valor en pixels que queremos reflejar.


Así, si queremos poner la imagen a 100x100 pixels, la línea de código quedaría de la siguiente forma:


```html
<img src="mifoto.jpg" width="100" height="100" />
```


De esta forma tan sencilla hemos podido definir el alto y ancho de una imagen con [HTML](https://www.manualweb.net/html/) utilizando los atributos del elemento [`img`](https://w3api.com/HTML/img/). Ahora un reto, ¿sabrías como puedes conseguir lo mismo pero haciendo uso del lenguaje CSS? ¿Son válidas las dos alternativas cuando queremos manejar el alto y el ancho o solo una es la correcta? Te lo contamos en el artículo [Definir el tamaño de una imagen con CSS](https://lineadecodigo.com/css/definir-el-tamano-de-una-imagen-con-css/).

