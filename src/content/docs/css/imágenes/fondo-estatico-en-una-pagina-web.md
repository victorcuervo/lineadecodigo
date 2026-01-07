---
title: "Fondo estático en una página web"
description: "Diseñar tu hoja de estilo CSS para tener un fondo estático en tu página web con las propiedades background-repeat y background-attachment."
date: 2007-03-11
updatedDate: 2026-01-07
tags: ["url","background","background-image","background-attachment","background-repeat"]
slug: css/imagenes/fondo-estatico-en-una-pagina-web
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_css/blob/master/imagenes/fondo-con-imagen-fija.html
topic: css
---

A la hora de realizar diseños mediante [HTML](https://www.manualweb.net/html) y [CSS](https://www.manualweb.net/css) podemos conseguir tener un fondo estático en una página web, independientemente del scroll que el usuario realice sobre dicha página. Conseguir este efecto dentro una página web nos será útil en muchos casos, por ejemplo cuando queramos tener de fondo un escudo, un logo,... Hay que tener en cuenta que [si ponemos una imagen de fondo](https://lineadecodigo.com/css/poner-un-fondo-en-mi-pagina-web/), por defecto, el fondo, se repetirá tantas veces como extensa sea la página web. Para tener un fondo estático en una página web nos basaremos en el atributo [CSS](http://www.manualweb.net/css/) [`background`](http://w3api.com/CSS/background/). El primer atributo que debemos conocer es [`background-image`](http://w3api.com/CSS/background-image/). Este atributo nos permite especificar la imagen que se va a poner en el fondo de la página web. De esta forma el código a utilizar será el siguiente:


```css
body {
  background-image: url("http://lineadecodigo.com/wp-content/uploads/2006/12/w3c.jpg");
}
```


Utilizaremos la función `url()` para hacer referencia al archivo a utilizar. Una vez que tenemos puesta la imagen en el fondo veamos cómo fijarla. Para ello utilizamos otros dos atributos:

- [`background-repeat`](http://w3api.com/CSS/background-repeat/), el cual indica cómo se va a repetir la imagen en el fondo, si verticalmente, horizontalmente, en ambos sentidos o directamente no se va a repetir (valor **no-repeat**). Este último, será nuestro caso.
- [`background-attachment`](http://w3api.com/CSS/background-attachment/), mediante este atributo indicaremos si la imagen se va a quedar fija (fixed) o hará scroll con el resto de la página (scroll).

Finalmente el código para tener un fondo estático en una página web quedará de la siguiente forma:


```css
body {
  background-image: url("http://lineadecodigo.com/wp-content/uploads/2006/12/w3c.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
}
```


Simplemente tendremos que poner esta clase [CSS](http://www.manualweb.net/css/) en el elemento [`style`](https://w3api.com/HTML/style/) de nuestra página web y ya tendremos el efecto perseguido:


```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Titulo Documento</title>
    <style>
      body {
        background-image: url('https://lineadecodigo.com/wp-content/uploads/2006/12/w3c.jpg');
        background-repeat: no-repeat;
        background-attachment: fixed;
      }
    </style>
  </head>
  <body>
    <!-- Documento HTML5 -->
  </body>
</html>
```


Cómo podéis comprobar es algo sencillo y de mucha utilidad.

