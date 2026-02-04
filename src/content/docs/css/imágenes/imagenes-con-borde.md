---
title: "Imágenes con borde"
description: "Cómo usar hojas de estilo CSS para tener imágenes con borde dentro de nuestras páginas web con los atributos border-style y border-width."
date: 2007-06-04
updatedDate: 2026-01-07
tags: ["imagenes","border","border-width","border-style"]
slug: css/imagenes/imagenes-con-borde
type: doc
topic: css
id: cd31c48e-aaf8-44bb-aae9-799a64fbc6c7
author: Víctor Cuervo
download: https://github.com/victorcuervo/lineadecodigo_css/blob/master/imagenes/imagenes-con-borde.html
---

Cuando se empezó a definir el lenguaje [HTML](http://www.manualweb.net/html/), el elemento [`img`](https://w3api.com/HTML/img/) (que nos sirve para poner imágenes) llevaba asociado un atributo llamador `border` para poder tener imágenes con borde. Aplicando un valor en pixels a dicho atributo conseguíamos que la imagen asociada al elemento apareciese con un borde. Hay que indicar que por compatibilidad, dicho atributo sigue siendo soportado. Si bien, es recomendable no utilizarlo. La [línea de código](http://lineadecodigo.com/) sería como la que sigue:


```html
<img src="mi_imagen.jpg" border="3" />
```


Pero con la aparición de las hojas de estilo [CSS](http://www.manualweb.net/css/), dicho atributo quedo obsoleto. A partir de ese momento tendríamos que asignar un estilo a la imagen, para que esta tuviese un borde. El atributo [CSS](http://www.manualweb.net/css/) que nos permite asociar un borde a un elemento (en este caso a una imagen) es [`border-width`](http://w3api.com/CSS/border-width/). A dicho atributo podremos asociarle un valor que representará el ancho del borde. La sintaxis del atributo [`border-width`](http://w3api.com/CSS/border-width/) es la siguiente:


```css
border-width : <line-width>{1,4}
```


De esta manera, para asociar un borde a una imagen tendremos que asociar un estilo a la imagen, mediante el atributo [`style`](https://w3api.com/HTML/style/). Quedándonos la siguiente [línea de código](http://lineadecodigo.com/):


```html
<img src="mi_imagen.jpg" style="border-width:1px;" />
```


Lo bueno que tienen los estilos es que se han ido añadiendo nuevas propiedades, las cuales nos permiten personalizar el borde. Una de estas propiedades es [`border-style`](http://w3api.com/CSS/border-style/), la cual nos permite indicar el estilo del borde que queremos (solido, con líneas discontinuas,...). Siendo su sintaxis la siguiente:


```css
border-style : <line-style>{1,4}
```


Algunos de los valores para el estilo de línea de [`border-style`](http://w3api.com/CSS/border-style/) son: _dotted, dashed, solid,.._ Ahora, la línea de código nos quedaría de la siguiente forma:


```html
<img src="mi_imagen.jpg" style="border-style:dotted;border-width:1px;" />
```


Espero que os haya sido de utilidad este artículo en el que hemos visto cómo poder tener imágenes con borde.

