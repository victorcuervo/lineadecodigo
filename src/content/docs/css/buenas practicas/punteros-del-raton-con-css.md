---
title: "Punteros del ratón con CSS"
description: "Cómo manejar los valores de la propiedad cursor para establecer los diferentes punteros del ratón con CSS que existen."
date: 2007-10-25
updatedDate: 2026-01-17
tags: ["cursor","style","enlaces","pointer"]
slug: css/buenas-practicas/punteros-del-raton-con-css
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo/blob/master/lineadecodigo_css/raton/punteros-del-raton.html
topic: css

---

Gracias a la especificación [CSS](http://www.manualweb.net/css/) vamos a poder modificar las propiedades referentes al puntero del ratón. Y, de esta forma, tener múltiples formas de ver los punteros del ratón con [CSS](http://www.manualweb.net/css/). Estas formas las podremos ir modificando atendiendo al elemento sobre el que estemos. Es decir, no es lo mismo que queramos modificarlo para ofrecer una ayuda, para poder indicarle que el objeto se puede mover por la página o que podemos seleccionar un contenido. Las posibilidades son muchas.


## Sintaxis de la propiedad cursor


Lo que tenemos que saber para modificar el puntero del ratón es que deberemos de utilizar la propiedad [`cursor`](http://w3api.com/CSS/cursor/) que tiene la siguiente sintaxis:


```css
cursor: valor;
```


## Valores de cursor


Dentro de los valores que se le asignan encontramos algunos como:

- **crosshair,** con un estilo de cruz para poder seleccionar un punto en una imagen.
- **pointer,** es el cursor que se suele utilizar sobre los enlaces y que tiene forma de mano.
- **move,** cursor que se mostraría cuándo un elemento puede ser movido dentro de la página.
- **text,** cursor que muestra una barra para que el texto pueda ser seleccionado.
- **wait,** cursor que indica que el se están haciendo cálculos en el programa y este está ocupado.
- **help,** cursor que nos sirve para indicar que hay ayuda asociada al elemento sobre el que estamos posicionados.
- **e-resize, ne-resize, nw-resize, n-resize, se-resize, sw-resize, s-resize, w-resize,** cursores para hacer redimensionado de elementos hacía diferentes posiciones.
- **default,** cursor por defecto, normalmente es una flecha.

## Ejemplo de aplicación


Para aplicárselo a un elemento [HTML](http://www.manualweb.net/html/), utilizaremos el elemento [`style`](http://w3api.com/HTML/style/). Por ejemplo, vamos a aplicárselo a [un enlace](https://lineadecodigo.com/tag/html-enlaces/), es decir, a un elemento del tipo [`a`](http://w3api.com/HTML/a/):


```html
<a href="#" style="cursor:help;">Enlace con cursor de ayuda</a>
```


De esta forma tan sencilla hemos podido configurar los punteros del ratón con [CSS](http://www.manualweb.net/css/). ¿Cuál de los punteros del ratón has utilizado o tienes planteado utilizar en los diseños de tus páginas web?

