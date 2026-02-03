---
title: "Centrar texto con CSS en tu página web"
description: "Aprende a centrar texto con CSS de manera sencilla y efectiva. Mejora el diseño de tu página web y sorprende a tus visitantes con un formato atractivo."
date: 2007-06-27
updatedDate: 2026-01-17
tags: ["center","text-align"]
slug: css/texto/centrar-texto-con-css-en-tu-pagina-web
author: victor_cuervo
type: doc
id: 404ca26a-f7fd-422d-8b1e-b5864cda225f
download: https://github.com/victorcuervo/lineadecodigo/blob/master/lineadecodigo_css/texto/centrar-texto.html
---

Una de las cosas más sencillas cuando queramos dar formato al texto será la de centrar el texto. Esto era más o menos sencillo en [HTML](http://www.manualweb.net/html/) mediante la etiqueta `center`. Si bien, esta etiqueta quedo obsoleta con la llegada de las hojas de estilo [CSS](http://www.manualweb.net/css/).


Así que vamos a ver cómo podemos centrar texto con CSS en tu página web.


## La propiedad text-align


Dentro de las [propiedades de CSS que nos permiten modificar el texto](https://lineadecodigo.com/tag/css-texto/) aparece una propiedad que se denomina [`text-align`](http://w3api.com/CSS/text-align/), la cual nos permitirá alinear el texto en la posición que necesitemos.


En el caso que queramos tenerlo centrado el valor a asociar es **"center"**.


## Definir una clase CSS


Lo que tendremos es que definir una clase con esta propiedad. Por ejemplo, en este caso hemos definido una clase que hemos llamado `centrado`:


```css
.centrado {
  text-align: center;
}
```


## Aplicar la clase al elemento HTML


Ahora solo nos quedará aplicar esta clase al texto que tengamos dentro de nuestra página web. Para aplicar un estilo hay que utilizar el atributo `class` de un elemento [HTML](http://www.manualweb.net/html/).


Para nuestro ejemplo hemos utilizado un elemento [`p`](https://w3api.com/HTML/p/), el cual representa a un párrafo y lo hemos aplicado de la siguiente forma:


```html
<p class="centrado">Texto Centrado</p>
```


El texto aparecerá de la siguiente forma:


![Resultado de centrar texto con CSS en tu página web](../../../../assets/css/images/texto-centrado.png)


## Conclusión


Como has podido comprobar es muy sencillo el código para poder centrar texto con CSS en tu página web y aplicarlo a las partes de tu código HTML dónde lo necesites, reutilizando la misma clase.


De igual manera puedes investigar el resto de valores que tiene la propiedad [`text-align`](http://w3api.com/CSS/text-align/) ya que estos nos permiten manejar el texto de muchas formas y así podemos alinearlo a la derecha, justificarlo en todas las líneas o justificarlo en todas las líneas menos la últimas...


¿Nos cuentas en los comentarios qué has podido hacer con la propiedad [`text-align`](http://w3api.com/CSS/text-align/)? o ¿Qué te gustaría saber a la hora de justificar la alineación del texto?

