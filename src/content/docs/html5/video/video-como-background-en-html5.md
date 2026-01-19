---
title: "Vídeo como background en HTML5"
description: "Descubre cómo usar un vídeo como background en HTML5 y transforma tu página web en una experiencia visual impactante y envolvente que cautivará a tus visitantes."
date: 2016-03-22
updatedDate: 2026-01-19
tags: ["video","background-size","z-index","transform"]
slug: html5/video/video-como-background-en-html5
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Video/video-fondo-pagina.html
topic: html5

---

Una de las cosas que podemos hacer con el elemento vídeo es poner un vídeo como background en [HTML5](https://www.manualweb.net/html5/). Es decir, que el fondo de nuestra página web sea un vídeo en vez de un color o una imagen de fondo. Veamos cómo podemos hacerlo.


## Crear el elemento vídeo


Lo primero será poner el vídeo dentro de nuestra página. Para ello utilizaremos el elemento video:


```html
<video id="mivideo" width="300" height="150">
  <source src="tecla.ogv" type="video/ogg">
</video>
```


El elemento [source](https://www.w3api.com/HTML/source/) nos va a ayudar a indicar el origen y tipo del vídeo. En este caso podemos utilizar cualquier formato que esté soportado por los navegadores.


## Arranque automático del vídeo


Como lo que queremos es que el usuario no interactue con el vídeo para arrancarlo o pararlo, lo que vamos a hacer es arrancarlo automáticamente mediante la propiedad [autoplay](https://www.w3api.com/HTML/video/autoplay/)


```html
<video id="mivideo" autoplay="autoplay" width="300" height="150">
  <source src="tecla.ogv" type="video/ogg">
</video>
```


## Ajustar el tamaño del vídeo


Hasta ahora lo que hemos conseguido es poner el vídeo dentro de nuestra página. Ahora vamos a pasar a ponerlo de fondo. Para ello vamos a manipular el [estilo CSS](http://www.manualweb.net/css/) del elemento vídeo.


```css
video { ... }
```


En cuanto a las propiedades lo que haremos será indicar que el mínimo ancho y mínimo alto sean el 100% de la página. Y que a la vez el alto y ancho sean automáticos.


```css
video { 
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
}
```


## Posicionar el vídeo


De momento hemos conseguido hacerlo más grande, pero solo en la parte de la página que no tiene contenido, y a nosotros nos interesa que ocupe todo. Así que lo que vamos a hacer es desplazar al vídeo hasta el centro de la página.


Para ello utilizo las propiedades [top](https://www.w3api.com/CSS/margin-top/), left y transform:


```css
video { 
  position: fixed;    
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
```


## Ajustar el z-index


Vaya, ahora no veo el texto, el vídeo tapa toda la página. Lo que nos quedará es poner el vídeo en el eje de coordenadas Z lo más alejado posible. Así que manipulamos el valor z-index y le damos un valor negativo alto.


```css
video {     
  z-index: -100;
}
```


También es bueno trabajar con la propiedad `background-size` y darle el valor de "cover" para que el vídeo ocupe todo el background.


## Código CSS final


Finalmente, nuestro código de estilo del vídeo quedaría así:


```css
video { 
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;

  position: fixed;    
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);       
  z-index: -100;
    
  background-size: cover;
}
```


Ya habremos conseguido tener un vídeo como background en [HTML5](https://www.manualweb.net/html5/).

