---
title: "Fecha de publicación de un documento con HTML5"
description: "Aprende a insertar fechas en documentos HTML5 utilizando el elemento time y el atributo pubdate para señalar la fecha de publicación de manera efectiva."
date: 2012-10-16
updatedDate: 2026-01-24
tags: ["time","pubdate","datetime"]
slug: html/semantica/fecha-de-publicacion-de-un-documento-con-html5
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Basicos/fecha-publicacion-documento.html
topic: html

---

El otro día veíamos [como podemos dar de alta fechas en documentos HTML5](http://lineadecodigo.com/html5/fechas-en-html5/). Estas fechas las podemos utilizar para proporcionar información dentro del documento sobre el contenido del mismo. Por ejemplo, si estamos hablando de un evento, utilizaremos las fechas para indicar los días en los cuales se produce el evento.


Pero las fechas en [HTML5](https://www.manualweb.net/html5/) las podemos utilizar para indicar información relativa al documento. Por ejemplo podemos identificar la fecha de publicación (o modificación) de un documento.


## El elemento time


Recordamos que para insertar una fecha en [HTML5](https://www.manualweb.net/html5/) utilizamos el elemento [time](https://www.w3api.com/HTML/time/).


```html
<time datetime="2012-10-15T12:00">15 de octubre de 2012 a las 12h</time>
```


## El atributo pubdate


Para identificar que la fecha sea relativa a la publicación del documento tenemos que utilizar el [atributo pubdate](https://www.w3api.com/HTML/time/.pubdate). El [atributo pubdate](https://www.w3api.com/HTML/time/.pubdate) es un atributo booleano. Con lo cual su mero uso dentro del elemento time hará que el valor sea true. Si estamos trabajando con documentos XHTML utilizaremos el formato pubdate="pubdate".


Así, el código que insertaremos para identificar la fecha de publicación de un documento con [HTML5](https://www.manualweb.net/html5/) será:


```html
Este documento fue publicado el <time datetime="2012-10-15T12:00" pubdate>15 de octubre de 2012 a las 12h</time>
```

