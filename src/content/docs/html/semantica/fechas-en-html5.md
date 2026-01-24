---
title: "Fechas en HTML5"
description: "Aprende a usar el elemento time en HTML5 para añadir fechas a tus páginas web. Mejora la semántica y la accesibilidad de tu contenido con este sencillo método."
date: 2012-10-09
updatedDate: 2026-01-24
tags: ["time","datetime","iso8601","gtm","utc"]
slug: html/semantica/fechas-en-html5
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Basicos/fechas-html5.html
topic: html

---

Hay múltiples motivos por los que tenemos que añadir fechas a nuestras páginas web, desde el típico de indicar cuándo fue creada o modificada la página, para reseñar la fecha de publicación de un artículo, para poner la fecha de un comentario, reseñar un acontecimiento,...


Es por ello que, después de muchas discusiones, [eliminar las fechas de la especificación HTML5 y volverlas a aceptar](http://www.webmonkey.com/2012/02/the-html5-time-element-is-back-and-better-than-ever/) _(en inglés)_, tenemos el elemento time para poder especificar fechas en [HTML5](https://www.manualweb.net/html5/).


## Estructura del elemento time


El elemento [time](https://www.w3api.com/HTML/time/) en [HTML5](https://www.manualweb.net/html5/) tiene la siguiente estructura:


```html
<time datetime="fechaISO">fecha a mostrar</time>
```


Así una fecha en [HTML5](https://www.manualweb.net/html5/) se podría definir de la siguiente forma:


```html
<time>8 de octubre de 2012</time>
```


## El atributo datetime


Ya que el atributo datetime no es estrictamente necesario, pero muy aconsejable si queremos tener un formato entendible por máquinas. Y es que el atributo datetime nos permite especificar la fecha en un [formato ISO 8601](http://www.w3.org/TR/NOTE-datetime).


Así, si insertamos la fecha con el atributo [datetime](https://www.w3api.com/HTML/time/.datetime) tendríamos lo siguiente:


```html
<time datetime="2012-10-08">8 de octubre de 2012</time>
```


## Formatos de fecha soportados


Pero la fecha no se tiene que restringir al formato año mes día. Por ejemplo, podemos tener fechas más cortas, en las que solo especifiquemos el año:


```html
<time datetime="2012">Año 2012</time>
```


En las que especifiquemos la hora:


```html
<time datetime="12:00">Las 12 horas</time>
```


En las que especifiquemos la fecha y la hora (en este caso la fecha y hora se separa mediante una T o con un espacio en blanco):


```html
<time datetime="2012-10-08T12:00">12h del 8 de octubre de 2012</time>
```


## Zonas horarias


En las que demos incluso la zona horaria GTM (o UTC para ser exactos). En este caso entre la hora y la franja horaria hay que añadir el desplazamiento positivo (con un más) o negativo (con un menos) que tenga esa zona:


```html
<time datetime="2012-10-08T12:00-07:00">12h del 8 de octubre de 2012 en UTC -07</time>(San Francisco)
```


Como hemos podido comprobar, el manejo del elemento [time](https://www.w3api.com/HTML/time/) y de su atributo [datetime](https://www.w3api.com/HTML/time/.datetime) es realmente sencillo para poder fechas en [HTML5](https://www.manualweb.net/html5/).

