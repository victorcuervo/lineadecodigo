---
title: "Subrayar texto en CSS"
description: "Como subrayar texto en la web utilizando CSS mediante la propiedad text-decoration y su valor underline, así como su aplicación en HTML."
date: 2007-06-26
updatedDate: 2026-01-07
tags: ["text-decoration","underline"]
slug: css/texto/subrayar-texto-en-css
author: victor_cuervo
type: doc
id: 5280d15b-575a-4c39-af82-365f256cab56
download: https://github.com/victorcuervo/lineadecodigo_css/blob/master/texto/subrayando-texto.html
---

En las primeras versiones del [HTML](http://www.manualweb.net/html/) apareció el elemento [`u`](https://w3api.com/HTML/u/) la cual nos permitía subrayar texto en la web de forma muy sencilla. Pero en posteriores versiones del [HTML](http://www.manualweb.net/html/) dicha etiqueta ha quedado obsoleta, pasándose ahora a realizar el subrayado de texto mediante [CSS](http://www.manualweb.net/css/).


En este artículo vamos a ver cómo podemos **subrayar texto en CSS**. Ojo, que el elemento [`u`](https://w3api.com/HTML/u/) haya quedado obsoleto no significa que no vaya a funcionar en nuestros navegadores, ya que la compatibilidad hacia atrás está asegurada. Simplemente que no es muy recomendable utilizarlo. Y es mejor pasar a realizarlo con [CSS](http://www.manualweb.net/css/).


Para poder subrayar texto en la web con [CSS](http://www.manualweb.net/css/) lo primero que deberemos hacer es crearnos una clase. Dicha clase se la asignaremos, posteriormente, a la parte o partes de nuestra página que queramos subrayar. En este caso hemos creado la clase `subrayado`. No es que hayamos sido muy originales. :-D


```css
.subrayado {
  ...;
}
```


Lo siguiente que tenemos que saber es que el atributo que nos permite personalizar el texto es [`text-decoration`](http://w3api.com/CSS/text-decoration/). La sintaxis de [`text-decoration`](http://w3api.com/CSS/text-decoration/) es la siguiente:


```css
text-decoration: < "text-decoration-line" > || < "text-decoration-style" > || <
  "text-decoration-color" >;
```


En este caso el valor que se le asigna al _text-decoration-line_ al subrayado es el de **"underline"**. De esta forma nuestra clase [CSS](http://www.manualweb.net/css/) quedaría de la siguiente forma:


```css
.subrayado {
  text-decoration: underline;
}
```


Ahora solo nos quedará el aplicar el estilo [CSS](http://www.manualweb.net/css/) a una parte de nuestra página web. Para ello deberemos de utilizar el atributo `class` de algún elemento [HTML](http://www.manualweb.net/html/). En nuestro caso lo haremos mediante el bloque en linea [`span`](https://w3api.com/HTML/span/). Veamos como quedaría la [línea de código](http://lineadecodigo.com/):


```html
<span class="subrayado">Texto subrayado con CSS</span>
```


Espero que os haya gustado y sobre todo que os sea útil este ejemplo sobre **cómo subrayar texto en CSS**.

