---
title: "Alinear texto al centro con CSS"
description: "Ejemplo que nos explica cómo podemos utilizar la propiedad text-align y su valor center para alinear texto al centro con CSS en una caja."
date: 2007-03-29
updatedDate: 2026-01-07
tags: ["text-align"]
slug: css/texto/alinear-texto-al-centro-con-css
author: Víctor Cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_css/blob/master/texto/alinear-texto-centro.html
topic: css
---

En las [primeras versiones del HTML](http://www.manualweb.net/html/historia-html-inicios/) existía el atributo `align`, el cual, mediante diferentes valores nos permitía alinear el texto a la _izquierda_, _centro_ o _derecha_. Con la llegada de las hojas de estilo [CSS](http://www.manualweb.net/css/) este atributo se convierte en obsoleto y la alineación pasa a ser controlada por atributos [CSS](http://www.manualweb.net/css/). En este ejemplo vamos a ver cómo podemos alinear texto al centro con [CSS](http://www.manualweb.net/css/). La propiedad [CSS](http://www.manualweb.net/css/) que nos permite alinear el texto es [`text-align`](http://w3api.com/CSS/text-align/). Dicha propiedad la podemos aplicar a los diferentes elementos [HTML](http://www.manualweb.net/html/) que gestionen bloques: cabeceras, párrafos, [capas](https://lineadecodigo.com/tag/css-capas/),... La sintaxis de la propiedad [`text-align`](http://w3api.com/CSS/text-align/) es la siguiente:


```text
text-align : start | end | left | right | center | justify | match-parent | justify-all
```


Así, los valores que puede tomar [`text-align`](http://w3api.com/CSS/text-align/) son: 

- **justify**, Justifica el contenido dentro de la caja de todas las líneas excepto de la última.
- **justify-all**, Justifica el contenido dentro de la caja de todas las líneas incluida la última.
- **match-parent**, Acepta la alineación que tenga el elemento padre.
- **end**, Atiende a la dirección del texto. Si es un texto izquierda-derecha lo alinea a la derecha y si es un texto derecha-izquierda lo alinea a la izquierda.
- **center**, Centra el texto dentro de la caja.
- **left**, Alinea el texto a la izquierda de la caja.
- **start**, Atiende a la dirección del texto. Si es un texto izquierda-derecha lo alinea a la izquierda y si es un texto derecha-izquierda lo alinea a la derecha.
- **right**, Alinea el texto a la derecha de la caja.

En el caso de querer alinear texto al centro con [CSS](http://www.manualweb.net/css/) deberemos de utilizar el valor _**center**_. Así, por ejemplo, lo podemos aplicar a una cabecera. Lo primero que tendremos que hacer es definir una hoja de estilo en la cabecera de la página


```css
h2.center {
  text-align: center;
}
```


Luego simplemente deberemos de utilizar la clase center dentro de un elemento [`h2`](http://w3api.com/HTML/h2/). Para ello utilizamos el atributo `class`.


```html
<h2 class="center">Cabecera centrada</h2>
```


Espero que os haya servido de ayuda este sencillo ejemplo para alinear texto al centro con [CSS](http://www.manualweb.net/css/).

