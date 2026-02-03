---
title: "Borde con líneas discontinuas"
description: "Cómo utilizar la propiedad border-style y su valor dashed para crear una hoja de estilo CSS que nos genere un borde con líneas discontinuas."
date: 2007-07-08
updatedDate: 2026-01-07
tags: ["border","border-style","dashed","style"]
slug: css/box-model/borde-con-lineas-discontinuas
author: victor_cuervo
type: doc
topic: css
id: 347ec9cf-55fe-4b70-844f-9d61d230cdea
download: https://github.com/victorcuervo/lineadecodigo_css/blob/master/bordes/borde-con-lineas-discontinuas.html
---

Mediante [CSS](https://www.manualweb.net/css) podemos manipular los bordes de los elementos [HTML](http://www.manualweb.net/html/), que sean de formato caja, de una forma muy sencilla. La propiedad [CSS](http://www.manualweb.net/css/) que nos permite indicar qué tipo de borde queremos es [`border-style`](http://w3api.com/CSS/border-style/). En este caso vamos a ver cómo podemos crear un borde con líneas discontinuas en [CSS](https://www.manualweb.net/css). Y en concreto para nuestro objetivo y así poder tener un borde con líneas discontinuas, el valor a aplicar a la propiedad [`border-style`](http://w3api.com/CSS/border-style/) es **"dashed"**. Pero vamos por partes, lo primero que tenemos que hacer es definir el estilo. Para ello, podemos crearnos un estilo propio, o bien aplicárselo directamente a uno de los elementos. En el caso que queramos definir un estilo propio lo haremos de la siguiente forma:


```css
.borde_discontinuo {
  border-style: dashed;
}
```


Y en el caso de querer aplicarlo sobre un elemento, en nuestro caso una tabla, que es representada mediante el elemento [`table`](https://w3api.com/HTML/table/), lo haremos de la siguiente forma:


```css
table {
  border-style: dashed;
}
```


> 


	Hay que recordar que los estilos que definamos debemos de ponerlos dentro del elemento [`style`](https://w3api.com/HTML/style/) de [HTML](http://www.manualweb.net/html/). Ya sea en la propia página o asociando un fichero [CSS](https://www.manualweb.net/css). con dichos estilos.


Para aplicar estos estilos deberemos de utilizar el atributo [`class`](http://w3api.com/HTML/class/) sobre el elemento que queramos aplicar el estilo. Por ejemplo, si queremos utilizar sobre una imagen, tendríamos la siguiente [línea de código](http://lineadecodigo.com/):


```html
<img class="borde_discontinuo" src="lineadecodigo.miniatura.jpg" />
```


Hay que recordar que el elemento que en [HTML](http://www.manualweb.net/html/) nos permite insertar una imagen es el elemento [`img`](https://w3api.com/HTML/img/). En el caso de que hayamos definido el estilo sobre un elemento, simplemente tendremos que utilizar el elemento [HTML](http://www.manualweb.net/html/) en nuestra página web. Con estos pasos tan sencillos habremos conseguido crear un borde con líneas discontinuas. Y tú, ¿en qué elementos utilizas este tipo de bordes? Déjanos tus experiencias dentro de los comentarios.

