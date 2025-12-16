---
title: Márgenes de una página web
description: "Cómo podemos utilizar la propiedad margin de diferentes formas en nuestro código CSS para poder establecer los márgenes de una página web."
lastUpdated: 2025-12-16
slug: css/margenes-de-una-pagina-web
author: victor_cuervo
---

Mediante las hojas de estilo [CSS](https://www.manualweb.net/css/) podemos modificar los márgenes de una página web. Esto hará que nuestro contenido se posicione en un lugar u otro de la página. Lo podremos pegar al borde superior, separarlo de la izquierda,... [Todo aquello que necesitemos para darle estilo a la página web](https://lineadecodigo.com/categoria/css/).


### Conceptos básicos sobre márgenes de una página web


Si queremos modificar los márgenes de una página web deberemos de utilizar cuatro propiedades [CSS](https://www.manualweb.net/css/):

- [`margin-bottom`](https://w3api.com/CSS/margin-bottom/), para establecer el margen inferior.
- [`margin-left`](https://w3api.com/CSS/margin-left/), para establecer el margen izquierdo.
- [`margin-right`](https://w3api.com/CSS/margin-right/), para establecer el margen derecho.
- [`margin-top`](https://w3api.com/CSS/margin-top/), para establecer el margen superior.

Los valores que pueden recibir estas propiedades se pueden establecer mediante un valor absoluto de longitud ya sea en _pixels_, _em_, _rem_,... o bien en porcentajes. Siguiendo la siguiente estructura:


```css
margin-top: <margin-width> | inherit;
```


Estas propiedades [CSS](https://www.manualweb.net/css/) se las podemos asignar a cualquier elemento [HTML](https://www.manualweb.net/html/). Si bien, para nuestro caso se lo asignaremos al cuerpo de la página. Es decir, al [elemento ](https://w3api.com/HTML/body/)[`body`](https://w3api.com/HTML/body/). De esta manera, el código [CSS](https://www.manualweb.net/css/) quedaría de la siguiente forma:


```css
body {
  margin-left: 0px;
  margin-right: 10px;
  margin-top: 0px;
  margin-bottom: 10px;
}
```


### Atributo margin para gestionar los márgenes de una página web


En el caso de que queramos asignar el mismo valor a todos los márgenes podemos utilizar directamente [el atributo ](https://w3api.com/CSS/margin/)[`margin`](https://w3api.com/CSS/margin/), asignándole un valor. En este punto el código dándole valor a la propiedad [`margin`](https://w3api.com/CSS/margin/) quedaría de la siguiente forma:


```css
body {
  margin: 10px;
}
```


Esta forma resumida se puede aplicar también definiendo la propiedad [`margin`](https://w3api.com/CSS/margin/) con 2 valores, de esta manera el primero se referiría a [`margin-top`](https://w3api.com/CSS/margin-top/) y [`margin-bottom`](https://w3api.com/CSS/margin-bottom/), y el segundo valor se referiría a [`margin-left`](https://w3api.com/CSS/margin-left/) y [`margin-right`](https://w3api.com/CSS/margin-right/).


En este caso tendíamos la siguiente definición de la propiedad en [CSS](http://www.manualweb.net/css/):


```css
body {
  margin: 0px 10px;
}
```


Otra opción es que existan 3 valores. Donde el primero sería para [`margin-top`](https://w3api.com/CSS/margin-top/), el segundo para [`margin-left`](https://w3api.com/CSS/margin-left/) e [`margin-right`](https://w3api.com/CSS/margin-right/), y el tercero para [`margin-bottom`](https://w3api.com/CSS/margin-bottom/).


```css
body {
  margin: 0px 10px;
}
```


O, finalmente, dar los 4 valores directamente en la propiedad [`margin`](https://w3api.com/CSS/margin/):


```css
body {
  margin: 2px 5px 8px 10px;
}
```


Que se asignarían siguiendo las agujas del reloj, empezando por [`margin-top`](https://w3api.com/CSS/margin-top/). Por lo que serían [`margin-top`](https://w3api.com/CSS/margin-top/), [`margin-left`](https://w3api.com/CSS/margin-left/) , [`margin-bottom`](https://w3api.com/CSS/margin-bottom/) y [`margin-right`](https://w3api.com/CSS/margin-right/).


Espero que, a partir de este momento, puedas establecer los márgenes de tu página web de una forma sencilla mediante código [CSS](http://www.manualweb.net/css/).

