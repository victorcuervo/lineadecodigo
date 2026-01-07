---
title: "Tachar texto con CSS"
description: "Uso de la propiedad text-decoration y su valor line-through para crear un código que nos permita tachar texto con CSS en nuestras páginas."
date: 2007-10-27
updatedDate: 2026-01-07
tags: ["strike","text-decoration","line-through","class"]
slug: css/texto/tachar-texto-con-css
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_css/blob/master/texto/tachar-texto.html
topic: css
---

En las [primeras versiones del lenguaje HTML](http://www.manualweb.net/html/historia-html-inicios/) existían las etiquetas [`strike`](https://w3api.com/HTML/strike/) y [`s`](https://w3api.com/HTML/s/), las cuales nos permitían tachar texto dentro de nuestra página web, ya que en estas versiones estaba mezclado la estructura con la forma en la que se representaba. A partir de [HTML 4.01](http://www.manualweb.net/html/historia-html-estandar/) se establece la separación del contenido y la representación del mismo con la creación de [CSS](http://www.manualweb.net/css/), y es este el que nos permite tachar texto con CSS. Para tachar texto con [CSS](http://www.manualweb.net/css/) nos tenemos que basar en la propiedad [`text-decoration`](http://w3api.com/CSS/text-decoration/) y en el valor "**line-through"**. En primer lugar definiremos el estilo que va a representar el texto tachado. Para ello utilizamos el elemento [`style`](http://w3api.com/HTML/style/) de [HTML](http://www.manualweb.net/html/) dentro de la cabecera de la página [HTML](http://www.manualweb.net/html/). Dentro insertaremos el código [CSS](http://www.manualweb.net/css/).


```css
.tachado {
  text-decoration: line-through;
}
```


Es importante que este código [CSS](http://www.manualweb.net/css/)lo pongamos dentro de una hoja de estilos que importemos en la página o directamente en la página mediante el elemento [`style`](http://w3api.com/HTML/style/). Ahora solo nos quedará el aplicar el estilo **"tachado"** a un elemento de la página [HTML](http://www.manualweb.net/html/). En nuestro caso vamos a hacerlo sobre un párrafo de texto. El [párrafo de texto en HTML](https://lineadecodigo.com/tag/html-texto/) se representa mediante el elemento [`p`](https://w3api.com/HTML/p/). Para ello nos basamos en el atributo [`class`](https://w3api.com/HTML/class/), indicando el valor del estilo. Este es un párrafo de texto al que le hemos aplicado el texto tachado mediante la clase "tachado" y el atributo [`class`](https://w3api.com/HTML/class/), y que por lo tanto va a aparecer tachado.


```html
<p class="tachado">
  Este es un texto al que le hemos aplicado el texto tachado, y que por lo tanto
  va a aparecer tachado.
</p>
```


Por pantalla veremos algo parecido a lo siguiente: 


```shell
~~Este es un texto al que le hemos aplicado el texto tachado, y que por lo tanto
va a aparecer tachado.~~
```


Y de esta sencilla forma hemos conseguido tachar texto con [CSS](http://www.manualweb.net/css/).


¿Lo has utilizado o lo vas a utilizar cuando creas tus diseños web? Cuéntanos tu experiencia y cómo y dónde has utilizado esta forma de manejar el texto o dónde piensas utilizarlo en los comentarios.

