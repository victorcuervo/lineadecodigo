---
title: "Cargar un vídeo AVI, ASF o WMV en mi página web"
description: "Aprende a cargar un vídeo AVI, ASF o WMV en tu página web con simples ejemplos de código HTML y mejora la presentación de tus contenidos multimedia."
date: 2007-08-29
updatedDate: 2026-01-21
tags: ["embed","object"]
slug: html/video/cargar-un-video-avi-asf-o-wmv-en-mi-pagina-web
author: victor_cuervo
type: doc
id: 9376562d-61bc-4450-8a1d-c689258a99d6
download: https://github.com/victorcuervo/lineadecodigo_html/tree/master/video-y-sonido/cargar-video
---

## Formatos de vídeo de Microsoft


Si tuviésemos que catalogar los formatos de vídeo propietarios de Microsoft podríamos hablar de los tres siguientes: AVI, ASF y WMA.

- **AVI "Audio Video Interleave"** el primero de los formatos. Muy expandido en todas las plataformas Microsoft. Está siendo superado por las nuevas tecnologías.
- **ASF "Advanced Streaming Format"** utilizado para web streaming.
- **WMV "Windows Media Video"** que es el formato asociado para ser utilizado con el reproductor Windows Media Player de Microsoft. Este software está disponible en varias plataformas, incluido SUN Solaris y Macintosh.

## Insertar vídeos en páginas web


La idea de este ejemplo es ver como poner uno de estos vídeos dentro de una página web. El principal problema a la hora de manipular los vídeos dentro de las páginas web es la disparidad de formatos, de software necesario para visualizarlo y la poca estandarización en las etiquetas HTML.


Es por ello, que posiblemente, lo mejor sea poner un enlace sobre el vídeo para que cada usuario se lo descargue y lo visualice con el software de su plataforma cliente. Si utilizamos esta opción es recomendable que se indique el nombre de fichero, tamaño y tipo.


Por ejemplo:


```html
<a href="mivideo.wmv">Mi Vídeo (mivideo.wmv - 2.5Mb - WMV)</a>
```


El código para hacer esto es muy sencillo ya que tendremos que utilizar [el elemento a](http://www.w3api.com/HTML/a).


```html
<a href="mivideo.wmv">Mi Vídeo</a>
```


## Visualizar vídeos con Windows Media Player


Si nos centramos en visualizar algún vídeo de los formatos AVI, ASF y WMV lo que tendremos que aprender es el cómo cargar el Windows Media Player y cómo este puede ser parametrizado.


Según la [W3C](http://www.w3c.org/) el método correcto de visualización sería con la etiqueta `<OBJECT>`, aunque los navegadores siguen soportando la etiqueta `<EMBED>`.


Los atributos más importantes de la [etiqueta object](https://www.w3api.com/HTML/object/) son **data**, donde se indicará el nombre del fichero de vídeo a ser cargado y **type** donde se indicará el mime-type del fichero.


Opcionalmente podremos indicar el alto y ancho del vídeo mediante los atributos width y height.


## MIME types para vídeos de Microsoft


Si hablamos de los mime-type de los ficheros de video de Microsoft podemos tomar como referencia la siguiente tabla:


| MIME type      | Extensión |
| -------------- | --------- |
| video/x-ms-asf | asf, asx  |
| video/x-ms-wm  | wm        |
| video/x-ms-wmv | wmv       |
| video/x-ms-wvx | wvx       |

undefined
## Ejemplo básico con object


El código nos quedará de la siguiente forma:


```html
<object data="mivideo.wmv" type="video/x-ms-wmv" width="320" height="240">
</object>
```


## Parámetros del Windows Media Player


Pero podemos ir algo más allá. Y es con el Window Media Player. En estos momentos representado como un objeto puede recibir parámetros para su configuración, los cuales podemos pasar a la [etiqueta object](https://www.w3api.com/HTML/object/) mediante la etiqueta param.


Algunos de esos parámetros son:

- **src**, nombre del fichero con el video.
- **autostart**, el valor 1 hará que se empiece a reproducir nada más ser cargado. El valor 0 hará el efecto contrario.
- **volumen**, número entero con el valor del volumen.
- **showControls**, con el valor 0 no se mostrará los controles del video (play, stop, pause,...). El valor 1 hará que se vean estos controles
- **showDisplay**, muestra información del fichero (valor 1). Por defecto deshabilitado (valor 0)
- **showStatusBar**, muestra la barra de avance del video. Por defecto habilitado (valor 1).
- **playcount**, número de veces que se repetirá el video.

## Ejemplo completo con parámetros


El código nos quedaría finalmente de la siguiente guisa:


```html
<object data="mivideo.wmv" type="video/x-ms-wmv" width="320" height="240">
  <param name="src" value="mivideo.wmv">
  <param name="autostart" value="1">
  <param name="showControls" value="1">
  <param name="showDisplay" value="0">
  <param name="showStatusBar" value="1">
  <param name="playcount" value="2">
</object>
```


## Compatibilidad con navegadores


El soporte de este objeto está disponible en Internet Explorer, FireFox, Opera,...


Si te encuentras problemas con el FireFox (o algún otro de la familia Mozilla) te recomendaría que te leyeses este artículo (lamentablemente solo en ingles) [http://forums.mozillazine.org/viewtopic.php?t=206213](http://forums.mozillazine.org/viewtopic.php?t=206213) sobre cómo validar si está bien instalado tu plug-in del FireFox.

