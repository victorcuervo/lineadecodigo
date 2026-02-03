---
title: "Formatos Audio HTML5"
description: "Conoce los formatos audio HTML5 y aprende a insertarlos en tu web para asegurar compatibilidad. Mejora tu contenido y ofrece una mejor experiencia a tus usuarios."
date: 2016-10-04
updatedDate: 2026-01-24
tags: ["source","audio","type"]
slug: html5/audio/formatos-audio-html5
author: victor_cuervo
type: doc
id: 66ae8035-d433-474c-9a7f-38785784fdda
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Audio/formatos-audio-html5.html
---

En el artículo [Cargar un vídeo de diferentes formatos con HTML5](http://lineadecodigo.com/html5/cargar-un-video-de-diferentes-formatos-con-html5/) vimos como podíamos utilizar varios formatos para cargar nuestros vídeos, en este caso vamos a ver cómo manejar los formatos audio [HTML5](https://www.manualweb.net/html5/).


Lo primero que tenemos que saber es que tipos de formatos audio [HTML5](https://www.manualweb.net/html5/) existen y están soportados por los principales navegadores web.


## Formatos Audio HTML5


Dentro de los formatos encontramos los siguientes:

- **WAV**, o WAVE. Es un formato de audio digital sin compresión de datos. Desarrollado por Microsoft e IBM.
- **MP3**, formato de compresión de audio digital. Desarrollado por el Moving Picture Experts Group (MPEG)
- **AAC**, o Advanced Audio Coding. Es un codec digital con perdida que se corresponde al estándar internacional "ISO/IEC 13818-7" como una extensión de MPEG-2. Es muy utilizado en dispositivos Apple.
- **Vorbis**, codec digital con perdida, conseguida mediante la compresión de datos, y de formato abierto. El contenedor utilizado es Ogg. Desarrollador por [Xiph.org](http://xiph.org/)
- **Opus**, codec digital con pérdida, de formato abierto. El contenedor utilizado es Ogg. Está estandarizado por el Internet Engineering Task Force (IETF).

Podéis consultar una [información más actualizada de los formatos audio HTLM5 en la página de Mozilla Dev](https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats).


## Insertando el audio


Para insertar el audio dentro de nuestra página web vamos a utilizar el elemento `audio`:


```html
<audio controls="controls">
</audio>
```


En este caso vemos que no hemos añadido el atributo `src` con el cual podríamos haber indicado el origen del sonido que queríamos cargar. Esto lo hacemos ya que al querer manejar diferentes formatos audio [HTML5](https://www.manualweb.net/html5/) necesitaremos del elemento `source`.


Por cada uno de los diferentes tipos de formatos audio [HTML5](https://www.manualweb.net/html5/) vamos a insertar un elemento `source`:


```html
<audio controls="controls"> 
  <source src="mimusica.ogg" type="audio/ogg">
  <source src="mimusica.mp3" type="audio/mpeg">
  Tu navegador no soporta el elemento <code>audio</code>.  
</audio>
```


Vemos que por cada elemento `source` hemos indicado el origen del sonido mediante el atributo [src](https://www.w3api.com/HTML/source/src/) y por otro lado hemos indicado el tipo de formato de audio: "audio/ogg", "audio/mpeg",... utilizando el atributo `type`.


El funcionamiento para el navegador web cuando se encuentre esta estructura será la de empezar a ver si es capaz de cargar un codec para el primero de los sonidos, en el caso de que no sea capaz pasará al siguiente y así sucesivamente hasta que encuentre un sonido para el cual tenga un codec y pueda reproducirlo.


En el caso de que no sea capaz de reproducir ninguno de los sonidos mostrará el mensaje que hayamos puesto por defecto.


Esta forma de cargar los formatos audio [HTML5](https://www.manualweb.net/html5/) se utiliza para poder asegurar que alguno de los sonidos se va a poder cargar.


Ya hemos visto que tipos de formatos audio [HTML5](https://www.manualweb.net/html5/) existen y como podemos cargarlos mediante el elemento [audio](https://www.w3api.com/HTML/audio/).

