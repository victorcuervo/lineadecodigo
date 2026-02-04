---
title: "Enlaces subrayados arriba y abajo"
description: "Cómo configurar tus css para poder obtener enlaces subrayados arriba y abajo utilizando el selector hover y la propiedad text-decoration."
date: 2007-01-15
updatedDate: 2026-01-07
tags: ["enlaces","text-decoration","overline","underline","style"]
slug: css/texto/enlaces-subrayados-arriba-y-abajo
type: doc
topic: css
id: dfaad443-5ff3-4663-93d3-dab9b8a16415
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo/blob/master/lineadecodigo_css/enlaces/enlaces-subarayados-arriba-y-abajo.html
---

Los [enlaces](https://lineadecodigo.com/tag/html-enlaces/) por definición no tienen una representación tal cual. Si es verdad que por convención parece que el subrayado se ha hecho con esos méritos. Si bien, a partir de la llegada de las hojas de estilo [CSS](http://www.manualweb.net/css/), la visualización de los enlaces pasa a ser muy variopinta: mostrando color de fondo, eliminado el subrayado, cambiando el icono al pasar sobre ellos,... En este caso vamos a ver cómo crear enlaces subrayados arriba y abajo. En este caso no vamos a definir una clase que pueda ser utilizada. Sino que directamente vamos a redefinir el comportamiento de los enlaces [HTML](http://www.manualweb.net/html/). Es decir, vamos a redefinir el comportamiento del elemento [`a`](https://w3api.com/HTML/a/). Para ello simplemente bastará con definir una hoja de estilo con el elemento [`a`](https://w3api.com/HTML/a/).Veamos como quedaría:


```css
a {
  /*Definición de A*/
}
```


Esta definición de estilo del elemento [`a`](https://w3api.com/HTML/a/) la colocaremos dentro del elemento [`style`](https://w3api.com/HTML/style/) de nuestra página web.


```html
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Titulo Documento</title>
    <style>
      a {
        /*Definición de A*/
      }
    </style>
  </head>
  <body>
    <!-- Documento HTML5 -->
  </body>
</html>
```


En concreto vamos a redefinir el comportamiento de cuando pasemos el puntero por encima del enlace. Es decir, el selector [`hover`](https://w3api.com/CSS/hover/). El código quedaría de la siguiente forma:


```css
a:hover {
  /*Definición de A*/
}
```


El atributo [CSS](http://www.manualweb.net/css/) que modifican el subrayado inferior y superior es el [`text-decoration`](https://w3api.com/CSS/text-decoration/). Y los valores con los que podemos jugar son **overline**, si queremos un subrayado por encima del texto y **underline** si queremos el subrayado por debajo del texto. En nuestro caso vamos a utilizar ambos. El código para tener enlaces subrayados arriba y abajo quedaría de la siguiente forma:


```css
a:hover {
  text-decoration: overline underline;
}
```


Ahora solo nos queda poner enlaces en la página donde tengamos definida esta hoja de estilo para poder tener **enlaces subrayados arriba y abajo**.

