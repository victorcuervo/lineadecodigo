---
title: "Letra capital"
description: "Código en CSS para poder configurar la letra capital en cada uno de los párrafos de tu página web."
date: 2007-01-19
updatedDate: 2026-01-07
tags: ["first-letter","color","float","font-size","class","letra-capital"]
slug: css/texto/letra-capital
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_css/blob/master/texto/letra-capital.html
topic: css
---

Cuando nos referimos a una letra capital hablamos del estilo que se le da a la primera letra de un párrafo. Mediante el lenguaje de hojas de estilo [CSS](http://www.manualweb.net/css/) podemos darle un formato a dicha letra, para que resalte del resto del contenido. Lo que [CSS](http://www.manualweb.net/css/) nos ofrece es un pseudo-elemento para poder ser aplicado tanto a clases como a selectores. El pseudo-elemento en concreto que nos ofrece para gestionar la letra capital es [`first-letter`](https://w3api.com/CSS/first-letter/). De esta manera, el uso de la clase con el pseudo-elemento [`first-letter`](https://w3api.com/CSS/first-letter/) quedará de la siguiente forma.


```css
.parrafo:first-letter {
  /* definición CSS */
}
```


Podremos aprovecharnos de todos los atributos de [CSS](http://www.manualweb.net/css/) para formatear la letra capital. Es decir, puedes aplicar [todo lo que hemos explicado dentro de los ejemplos de CSS.](https://lineadecodigo.com/categoria/css/) Por ejemplo podemos hacerla más grande mediante [`font-size`](https://w3api.com/CSS/font-size/), o cambiar el color con [`color`](https://w3api.com/CSS/color/), o bien modificar su alineación mediante [`float`](https://w3api.com/CSS/float/),... Así, nuestro código, para dar el formato a una letra capital, nos podría quedar de la siguiente forma, en la cual ponemos su tamaño al doble, lo alineamos a la izquierda y hacemos que el color de la letra sea rojo.


```css
.parrafo:first-letter {
  font-size: 200%;
  float: left;
  color: #f00;
}
```


Ahora que ya tenemos definido el código en [CSS](http://www.manualweb.net/css/), solo nos quedará aplicar la clase que acabamos de definir sobre nuestro texto en [HTML](http://www.manualweb.net/html/). Para aplicar la clase sobre algunos de los elementos [HTML](http://www.manualweb.net/html/) utilizaremos el atributo `class`. Este atributo lo vamos a asignar a un párrafo que hemos definido mediante un elemento [`p`](https://w3api.com/HTML/p/).


```html
<p class="parrafo">
  Este es nuestro párrafo, el cual tendrá su primera letra como una letra
  capital
</p>
```


Un código muy sencillo, pero a la vez muy útil para poder dar forma a las primeras letras de nuestros párrafos.

