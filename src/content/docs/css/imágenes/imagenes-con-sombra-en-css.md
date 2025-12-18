---
title: "Imágenes con sombra en CSS"
description: "Ejemplo que nos enseña a como definir un estilo para poder tener imágenes con sombra en CSS utilizando una capa y una imagen."
lastUpdated: 2025-12-18
slug: css/imagenes-con-sombra-en-css
author: victor_cuervo
---

[CSS](https://www.manualweb.net/css/) nace con la idea de ayudarnos en el diseño de nuestras páginas web [tal y cómo podemos ver en los diferentes ejemplos de CSS de Línea de Código](https://lineadecodigo.com/categoria/css/). Con la finalidad de dar vida y colorido a las encorsetadas páginas [HTML](https://www.manualweb.net/html/). Este ejemplo nos explica cómo crear imágenes con sombra en CSS, de tal manera, que esta, nos quede más "resultona". La idea general para poder crear imágenes con sombra en [CSS](http://www.manualweb.net/css/) será la de poner una imagen dentro de una capa. Posteriormente mover la imagen hacia la izquierda y hacia arriba. De esta manera queda "como por encima" de la capa. De esta manera podremos utilizar la capa para crear la sombra. Lo primero que tenemos que hacer para tener imágenes con sombra en [CSS](http://www.manualweb.net/css/) es crear una capa con una imagen dentro.


```html
<div class="sombra">
  <img src="lineadecodigo.jpg" />
</div>
```


A dicha capa le asignaremos un estilo [CSS](http://www.manualweb.net/css/). En este caso lo hemos llamado sombra. Así que ahora deberemos de empezar a manipular dicho estilo y las imágenes contenidas dentro del mismo. Hemos dicho que la imagen hay que desplazarla a la izquierda y arriba. Para ello jugamos con la [propiedad ](http://w3api.com/CSS/margin/)[`.margin`](http://w3api.com/CSS/margin/) de [CSS](http://www.manualweb.net/css/). De esta manera sus márgenes izquierdo y superior serán negativos. Veamos el código:


```css
.sombra img {
  display: block;
  position: relative;
  margin: -6px 6px 6px -6px;
}
```


Además hemos añadido otros atributos como la [forma de visualización, ](http://w3api.com/CSS/display/)[`display`](http://w3api.com/CSS/display/). La cual hemos indicado que sea un bloque. El [tipo de posicionamiento, ](http://w3api.com/CSS/position/)[`position`](http://w3api.com/CSS/position/), el cual hemos indicado que sea relativo. Es decir, hace referencia al sitio donde está ubicada la imagen. Ahora que tenemos desplazada la imagen, lo que deberemos de hacer es definir el estilo de la capa. Esta, al quedar detrás de la imagen vendrá a tener la sombra. Para ello tenemos dos alternativas:

- Utilizar una imagen de fondo de la capa. Si queremos una sombra degradada
- Un fondo gris. Si queremos una sombra más compacta.

Quizás la segunda forma sea más rústica, pero es la más simple y la que hace que no requiramos de algún programa de manejo de gráficos para generar el difuminado. Es por ello que nuestro estilo sombra quedará de la siguiente forma:


```css
.sombra {
  float: left;
  background-color: #a7a7a7;
}
```


Utilizamos [el atributo ](http://w3api.com/CSS/background-color/)[`background-color`](http://w3api.com/CSS/background-color/) para indicar el color gris (**#A7A7A7**) como sombra. Solo nos queda un pequeño inconveniente. Y es que al desplazar los márgenes de la imagen, estos se comerán el contenido que pongamos fuera de la capa. Es por ello que deberemos de aumentar los márgenes de la clase sombra. Finalmente nuestra clase sombra queda como sigue:


```css
.sombra {
  float: left;
  background-color: #a7a7a7;
  margin: 10px 0 0 5px;
}
```


El efecto será el siguiente: <div style="float: left; background-color: #a7a7a7; margin: 10px 0 0 5px;"></div> La página [HTML](https://www.manualweb.net/html/) en la que tenemos imágenes con sombra en [CSS](http://www.manualweb.net/css/) sería:


![](../../../../assets/css/images/lineadecodigo.miniatura.jpg)


```html
<style>
 .sombra {
   float:left;
   background-color:#A7A7A7;
   margin:10px 0 0 5px
 }

 .sombra img {
   display:block;
   position:relative;
   background-color:#fff;
   margin:-6px 6px 6px -6px
 }
</style>

<div class="sombra">
  <img src="lineadecodigo.jpg" title="línea de código" width="100px" height="100px" />
</div>
```


Podéis leer más sobre el tema y ver como se utiliza el degradado de la sombra con imágenes en [CSS Drop Shadows](http://www.alistapart.com/articles/cssdropshadows/)

