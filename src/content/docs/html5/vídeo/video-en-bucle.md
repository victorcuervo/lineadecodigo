---
title: "Vídeo en bucle"
description: "Ejemplo que explica cómo crear un vídeo en bucle utilizando código HTML5 y el atributo loop dentro del elemento video."
date: 2025-04-23
updatedDate: 2026-01-05
tags: ["video","loop"]
slug: html5/video/video-en-bucle
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Video/video-en-bucle.html

---

Un vídeo en bucle es aquel que cuando llega al final del vídeo vuelve al principio y se continua reproduciendo de forma infinita, o hasta que el usuario lo pare o se salga de la página web


Vamos a utilizar [código HTML5](https://lineadecodigo.com/categoria/html5/) para poder incrustar un vídeo dentro de nuestra página web y que este vídeo en bucle se reproduzca de forma infinita.


## Incluir un vídeo HTML5.


Lo primero que tenemos que hacer es insertar un vídeo [HTML5](https://www.manualweb.net/html5/), para ello vamos a utilizar el elemento [`video`](https://w3api.com/HTML/video/) que nos permite insertar los vídeos dentro de las páginas web


```html
<video>
  <!-- Aquí va un vídeo -->
</video>
```


Para indicar dónde se encuentra el vídeo y el formato que tiene podríamos utilizar, junto con el elemento [`video`](https://w3api.com/HTML/video/), el elemento [`source`](https://w3api.com/HTML/source/). Además, el elemento [`source`](https://w3api.com/HTML/source/), nos permite indicar diferentes formatos de vídeos para conseguir [el navegador web](https://www.ayudaenlaweb.com/navegadores/que-es-un-navegador/) reproduzca uno u otro.


Pero, en este caso, vamos a utilizar una forma más sencilla y nos apoyaremos en el atributo [`src`](https://www.w3api.com/HTML/video/src/) para indicar la [URL](https://www.ayudaenlaweb.com/internet-basico/que-es-la-url/) que contenga que contenga el vídeo.


```html
<video src="url-con-el-video">
  <!-- Aquí va un vídeo -->
</video>
```


### Atributo loop para bucles.


La parte más importante de este ejemplo para poder poner un vídeo en bucle es el manejo del atributo [`loop`](https://www.w3api.com/HTML/video/loop/), ya que el manejo de este atributo es el que nos va a proporcionar la capacidad de poder ver el vídeo en bucle. 


El atributo [`loop`](https://www.w3api.com/HTML/video/loop/) es un atributo booleano, del elemento [`video`](https://w3api.com/HTML/video/), dentro de [HTML5](https://www.manualweb.net/html5/) por lo que si el atributo no está presente se le asignaría un valor de `false` y si está presente sería un valor de `true`.


Por lo que si queremos reproducir un vídeo en bucle simplemente tendremos que añadir el atributo [`loop`](https://www.w3api.com/HTML/video/loop/) en el elemento [`video`](https://w3api.com/HTML/video/).


```html
<video src="url-con-el-video" loop>
  <!-- Aquí va un vídeo -->
</video>
```


### Código HTML5 para poner un vídeo en bucle.


Así que simplemente tendremos que poner la [URL](https://www.ayudaenlaweb.com/internet-basico/que-es-la-url/) de un vídeo, en este caso en formato mp4. El código en HTML para poder poner un vídeo en bucle sería el siguiente:


```html
<video id="video" src="tecla.mp4" controls loop>
	<!-- El atributo loop hace que el vídeo se repita en bucle -->  
  Tu navegador no soporta el elemento <code>video</code>.  
</video> 
```


En este caso hemos añadido un atributo adicional que es [`controls`](https://www.w3api.com/HTML/video/controls/) para poder ver los controles del vídeo.

