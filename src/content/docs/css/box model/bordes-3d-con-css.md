---
title: "Bordes 3D con CSS"
description: "Ejemplo que nos explica cómo crear bordes 3D con CSS utilizando el atributo border-style con sus valores groove, ridge, inset u outset."
date: 2007-07-17
updatedDate: 2026-01-08
tags: ["border","border-style","groove","border-color","border-width","img"]
slug: css/box-model/bordes-3d-con-css
author: Víctor Cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_css/blob/master/bordes/borde-3d.html
topic: css

---

Mediante [CSS](http://www.manualweb.net/css/) podemos llegar a [configurar los bordes de múltiples maneras](https://lineadecodigo.com/tag/css-border/). Una de ellas es hacer que los bordes tengan un efecto 3D. Así que hoy vamos a ver cómo podemos definir bordes 3D con [CSS](http://www.manualweb.net/css/). Lo primero que hay que recordar que el borde es un atributo [CSS](http://www.manualweb.net/css/) que puede ser aplicado a varios elementos de una página [HTML](http://www.manualweb.net/html/): [tablas](http://www.manualweb.net/html/tablas-html/), [imágenes](http://www.manualweb.net/html/imagenes-html/), [capas](http://www.manualweb.net/html/agrupaciones-html/),... El atributo que nos permite modificar la apariencia del borde es [`border-style`](http://w3api.com/CSS/border-style/). Para poder utilizarlo simplemente tendremos que definir una clase [CSS](http://www.manualweb.net/css/). El código para bordes 3D con [CSS](http://www.manualweb.net/css/) sería similar al siguiente:


```css
.miborde {
  border-style: valor;
}
```


> Recordar que los estilos se pueden definir dentro de un fichero asociado de [CSS](http://www.manualweb.net/css/), en un elemento [`style`](https://w3api.com/HTML/style/) dentro de la página o directamente sobre un elemento [HTML](http://www.manualweb.net/html/) con el atributo [`style`](https://w3api.com/HTML/style/).


Los valores para los **efectos de borde 3D** son los siguientes:

- **groove**, con forma de surco.
- **ridge**, con forma de canto.
- **inset**, con un efecto hacía dentro.
- **outset**, con un efecto hacía afuera.

Así, por ejemplo, bordes 3D con [CSS](http://www.manualweb.net/css/) y con forma de surco se definirían de la siguiente forma:


```css
.groove {
  border-style: groove;
}
```


Solo quedará aplicarlo al elemento [HTML](http://www.manualweb.net/html/) mediante el atributo [`class`](https://w3api.com/HTML/class/). En el caso de hacerlo sobre una imagen tendríamos la siguiente [línea de código](http://lineadecodigo.com/):


```html
<img src="imagen.jpg" class="groove" />
```


Para poder ver el efecto 3D es recomendable utilizar bordes anchos. Para ello tenemos el atributo [CSS](http://www.manualweb.net/css/) [`border-width`](https://w3api.com/CSS/border-width/). De igual manera, si utilizamos colores, con el atributo [`border-color`](https://w3api.com/CSS/border-color/), veremos los efectos 3D en su máximo esplendor. Podemos asociar estos atributos directamente sobre una imagen manipulando el elemento [`img`](http://www.w3api.com/HTML/img):


```css
img {
  border-color: #f00;
  border-width: 10px;
}
```


Espero que os haya quedado más claro cómo utilizar los bordes 3D. ¿Los has utilizado o piensas utilizar en alguno de tus diseños? Cuéntanoslo en los comentarios para conocer y compartir las experiencias.

