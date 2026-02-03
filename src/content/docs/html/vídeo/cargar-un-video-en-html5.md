---
title: "Cargar un vídeo en HTML5"
description: "Aprende a cargar un vídeo en HTML5 de manera sencilla y estandarizada, garantizando compatibilidad y funcionalidad para tus proyectos web. ¡Descubre cómo ahora!"
date: 2012-01-10
updatedDate: 2026-01-21
tags: ["video","source","type"]
slug: html/video/cargar-un-video-en-html5
author: victor_cuervo
type: doc
id: 2c8a9dfb-adca-8196-9e99-f93488763d86
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Video/video-html5.html
---

[Cargar un vídeo en HTML 4.01 era una misión quizás un poco compleja](http://lineadecodigo.com/html/cargar-un-video-avi-asf-o-wmv-en-mi-pagina-web/). Esto era por varias cosas, por un lado no existía código estándar para cargar vídeos, si no que se utilizaba un código para cargar cualquier tipo de objeto. Por otro lado existía diferentes formatos de vídeos a cargar que se soportaban dependiendo del navegador y plugin que tuvieses: RealTime, QuickTime, Windows Media Player,...


Resultado de esa situación fue resultado el tomar a Flash como el formato más estable de la red (sitios como [Youtube](http://www.youtube.com/) ofrecian, y ofrecen, el contenido en formato Flash), lo que hizo posible su expansión.


## HTML5 y la estandarización


Con la llegada de [HTML 5](https://www.manualweb.net/html5/) se ha empezado a trabajar en la estandarización a la hora de cargar un vídeo y de los formatos que se van a soportar. Bueno, en este segundo punto quizás haya más discusión y tiranteces en la estandarización y sigue sin existir un consenso.


## La etiqueta VIDEO


Pero vamos manos a la obra... Si queremos cargar un vídeo en [HTML 5](https://www.manualweb.net/html5/) tenemos que utilizar la etiqueta [VIDEO](https://www.w3api.com/HTML/video/), la cual tiene el siguiente formato.


```html
<video src="URL_VIDEO" controls>
</video>
```


Como podemos comprobar el elemento [VIDEO](https://www.w3api.com/HTML/video/) en [HTML 5](https://www.manualweb.net/html5/) es un elemento sencillo de utilizar.


Así, si queremos cargar un vídeo que se llame "tecla.ogv", simplemente tenemos que utilizar el siguiente código:


```html
<video src="tecla.ogv" controls>
</video>
```


## Formatos de vídeo soportados


Una de la cosas básicas que debemos de saber a la hora de cargar un vídeo es el tipo de formatos que soportan en [HTML 5](https://www.manualweb.net/html5/). Veamos por encima los que existen y sus extensiones:

- **MPEG-4,** es el formato basado en el contenedor QuickTime. Suelen ser extensiones .mp4 o .m4v
- **Flash,** son los vídeos de Adobe Flash que suelen tener la extensión .flv
- **Ogg,** es un estándar opensource independiente de la plataforma. Suelen tener la extensión .ogv
- **WebM,** es otro contenedor de vídeo desarrollado por Google. Suele tener la extensión .webm

> Más que formatos deberíamos de referirnos a ellos como **contenedores multimedia**, ya que dentro albergan pistas de vídeo, pistas de audio, metainformación,...


## Proporcionar información alternativa


Siguiendo con nuestro ejemplo, podemos dotar de información al navegador, si este no es capaz interpretar la etiqueta [VIDEO](https://www.w3api.com/HTML/video/). Para ello introducimos dicha información dentro de la etiqueta [VIDEO](https://www.w3api.com/HTML/video/).


```html
<video src="tecla.ogv" controls>
  Tu navegador no soporta el elemento de vídeo HTML5.
</video>
```


## Agregar controles al vídeo


En esta pequeña introducción a cómo cargar un vídeo con [HTML 5](https://www.manualweb.net/html5/) tenemos que aprender a poner los controles de manejo de vídeo y estos serán un atributo de la etiqueta vídeo llamado controls.


Así, finalmente, nuestro código queda de la siguiente forma:


```html
<video src="tecla.ogv" controls>
  Tu navegador no soporta el elemento de vídeo HTML5.
</video>
```

