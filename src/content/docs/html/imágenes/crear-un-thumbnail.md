---
title: "Crear un thumbnail"
description: "Un thumbnail reduce el tamaño de la imagen para mejorar la carga y visualización en páginas web."
date: 2006-11-24
updatedDate: 2026-01-06
tags: ["imagenes","css","height","width","margin"]
slug: html/imagenes/crear-un-thumbnail
author: victor_cuervo
type: doc
topic: html
id: 8005cbb2-afc6-4ec2-9f34-0c97ff4b544f
download: https://github.com/victorcuervo/lineadecodigo/blob/master/lineadecodigo_html/imagenes/crear-un-thumbnail.html
---

Un thumbnail es una versión reducida de una imágen, para que sea más fácil su carga, renderizado e identificación. Esta suele ser una técnica muy utilizada cuando queremos cargar una gran cantidad de imágenes dentro de una página.


Existen dos formas de crear un thumbnail a partir de una imágen real. La primera es redimensionar la imagen mediante [HTML](http://www.manualweb.net/tutorial-html/) o [CSS](http://www.manualweb.net/css/).


Suele hacerse, en [HTML](http://www.manualweb.net/tutorial-html/), mediante la siguiente [línea de código](/):


```html
<img src="lineadecodigo.jpg" width="10%" height="10%">
```


o en [CSS](http://www.manualweb.net/css/) mediante este código:


```html
<style type="text/css">
  .thumbnail {width:10%;height:10%;margin:5px;}
</style>

<img class="thumbnail" src="lineadecodigo.jpg">
```


Esta opción tiene dos inconvenientes:

1. La imágen que se está descargando el browser es la imágen original, con su peso original. Por lo tanto no obtendremos ninguna mejora en el tiempo de procesado de la página. Aunque, en ciertos casos, nos interese ya bajarnos la imagen final.
2. El redimensionado de la imagen es muy relativo. Ya que dependiendo del tamaño que reduzcamos puede que la imagen se vea mejor o peor. Depende mucho del renderizado del navegador. Además no podemos tener un tamaño de reducción estándar si las imágenes a tratar son de diferentes tamaños.

Veámos como quedaría este código con nuestra imagen:


![](../../../../assets/html/images/lineadecodigo.jpg)


La seguna opción, y más recomendable, es utilizar algún software de manejo de imágenes para reducirlas. De esta forma la imágen que se visualiza ocupará menos y por consiguiente se tardará menos en cargar.


La idea en este caso es poner la imágen reducida (o thumbnail) en pantalla y acompañarla de un enlace a la imágen original. Para que se pueda ver tal cual es.


Veamos como quedaría nuestra [línea de código](/):


```html
<a href="lineadecodigo.jpg">
  <img src="lineadecodigo.miniatura.jpg" alt="Foto de Línea de Código">
</a>
```


WordPress nos permite el aplicar una redución a la imágen que estamos subiendo a nuestro blog. Este es un claro ejemplo de utilización de un software para reduccir la imágen. Veamos como quedaría:


![](../../../../assets/html/images/lineadecodigo.miniatura.jpg)


La imagen que se está cargando en esta página es lineadecodigo.miniatura.jpg, mientras que si pulsamos sobre el thumbnail veremos la imágen original lineadecodigo.jpg


Puedes [buscar software para crear thumbnails en Google](http://www.google.es/search?q=thumbnail%20software).

