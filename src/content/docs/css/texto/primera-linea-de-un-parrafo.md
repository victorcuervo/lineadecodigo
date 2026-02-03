---
title: "Primera línea de un párrafo"
description: "Utilizar el pseudo-elemento first-line para poder asignarles propiedades y dar estilo a la primera línea de un párrafo con CSS."
date: 2007-11-27
updatedDate: 2026-01-07
tags: ["first-line","pseudo-elemento"]
slug: css/texto/primera-linea-de-un-parrafo
author: victor_cuervo
type: doc
id: 2c8a9dfb-adca-81bb-b358-e690e42b5562
download: https://github.com/victorcuervo/lineadecodigo/blob/master/lineadecodigo_css/texto/pseudoelemento-primera-linea.html
---

Dentro de las [propiedades de CSS que nos permiten manipular elementos de texto](https://lineadecodigo.com/tag/css-texto/) encontramos el pseudo-elemento [`first-line`](http://w3api.com/CSS/first-line/) del lenguaje [CSS](http://www.manualweb.net/css/). Con el pseudo-elemento [`first-line`](http://w3api.com/CSS/first-line/) podemos modificar las propiedades de la primera línea de un párrafo. Entendemos como primera línea, donde el navegador corta el párrafo por coincidir con el final del navegador.


Las propiedades que podemos modificar en el pseudo-elemento [`first-line`](http://w3api.com/CSS/first-line/) del lenguaje [CSS](http://www.manualweb.net/css/) son las siguientes: 

- **propiedades font,** para poder establecer una fuente, mayor o menor tamaño,...
- **propiedades color**, para cambiar el color de la línea.
- **propiedades background**, para poder tener un color o una imagen de fondo de la primera línea.
- **word-spacing**, para controlar el espaciado entre palabras.
- **letter-spacing**, para controlar el espaciado entre letras.
- **text-decoration,** para añadir elementos como subrayados o similares.
- **vertical-align,** para alinear verticalmente el texto.
- **text-transform,** para transformar el contenido del texto y, por ejemplo, ponerlo en mayúsculas.
- **line-height,** para cambiar el tamaño de la primera línea.
- **clear,** para indicar como situar a la primer línea respecto al elemento anterior.

Así, por ejemplo podemos especificar el siguiente código para definir nuestra primera línea de un párrafo. El párrafo en HTML se gestiona mediante el elemento [`p`](http://w3api.com/HTML/body/). Es por ello que el pseudo-elemento [`first-line`](http://w3api.com/CSS/first-line/) lo aplicamos a dicho elemento.


```css
p:first-line {
  color: #0000ff;
  text-transform: uppercase;
}
```


En este caso hemos conseguido que la primera línea sea en color azul y que su contenido esté en mayúsculas. Ahora solo nos queda poner un párrafo mediante el elemento [`p`](http://w3api.com/HTML/body/) en nuestra página [HTML](https://www.manualweb.net/html/). Como el siguiente:


```html
<p>
  En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho
  tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua,
  rocín flaco y galgo corredor. Una olla de algo más vaca que carnero, salpicón
  las más noches, duelos y quebrantos los sábados, lentejas los viernes, algún
  palomino de añadidura los domingos, consumían las tres partes de su hacienda.
  El resto della concluían sayo de velarte, calzas de velludo para las fiestas
  con sus pantuflos de lo mismo, los días de entre semana se honraba con su
  vellori de lo más fino.
</p>
```


Así ya tendremos dados estilos a la primera línea de un párrafo con [CSS](http://www.manualweb.net/css/).

