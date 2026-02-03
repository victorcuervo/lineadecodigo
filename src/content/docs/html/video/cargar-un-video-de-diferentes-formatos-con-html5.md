---
title: "Cargar un vídeo de diferentes formatos con HTML5"
description: "Aprende a cargar un vídeo de diferentes formatos con HTML5 y mejora la compatibilidad de tus proyectos. ¡Optimiza tu contenido multimedia ahora mismo!"
date: 2012-01-12
updatedDate: 2026-01-21
tags: ["video","source","type"]
slug: html/video/cargar-un-video-de-diferentes-formatos-con-html5
author: victor_cuervo
type: doc
id: 2c8a9dfb-adca-816c-8899-d6569d6717a4
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Video/video-html5-varios-formatos.html
---

## Introducción


En el ejemplo [cargar un vídeo con HTML5](http://lineadecodigo.com/html5/cargar-un-video-en-html5/) veíamos una forma sencilla de cargar un vídeo del formato Ogg con código [HTML5](https://www.manualweb.net/html5/). En este caso vamos a ver cómo cargar un vídeo desde diferentes orígenes con diferentes formatos.


Es decir, vamos a indicarle a nuestro navegador dónde puede encontrar diferentes formatos. Esto se hace así debido a que el navegador puede no reconocer y cargar alguno de los formatos. En ese caso, al indicarle una lista, cargará el primero de los formatos que consiga interpretar.


## Formatos de vídeo en HTML5


Recordamos los formatos con los que se trabaja en [HTML5](https://www.manualweb.net/html5/):

- **MPEG-4,** extensiones .mp4 o .m4v
- **Flash,** la extensión .flv
- **Ogg,** la extensión .ogv
- **WebM,** extensión .webm

## Cargar vídeo con un solo formato


Si el formato es único nos vale con indicar el origen en el atributo src del elemento [VIDEO](https://www.w3api.com/HTML/video/).


```html
<video src="mivideo.ogv" controls>
</video>
```


## Usar el elemento SOURCE


Pero para cargar un vídeo de diferentes formatos con [HTML5](https://www.manualweb.net/html5/) tenemos que apoyarnos en el elemento [SOURCE](https://www.w3api.com/HTML/source/).


El elemento [SOURCE](https://www.w3api.com/HTML/source/) contendrá un [atributo src](https://www.w3api.com/HTML/source/src/) que indique el origen del vídeo y otro atributo type dónde indicaremos el tipo del elemento multimedia que vamos a cargar.


El elemento [SOURCE](https://www.w3api.com/HTML/source/) será un elemento anidado dentro del elemento [VIDEO](https://www.w3api.com/HTML/video/).


## Ejemplo con múltiples formatos


Así, nuestro código para que el vídeo pueda ser cargado de diferentes formatos es el siguiente:


```html
<video controls>
  <source src="[mivideo.mp](http://mivideo.mp/)4" type="video/mp4">
  <source src="mivideo.ogv" type="video/ogg">
  <source src="mivideo.webm" type="video/webm">
</video>
```

