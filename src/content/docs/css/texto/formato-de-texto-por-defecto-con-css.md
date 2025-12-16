---
title: Formato de texto por defecto con CSS
description: "Ejemplo que nos explica como podemos definir el formato de texto por defecto con CSS en nuestra página web."
lastUpdated: 2025-12-16
slug: css/formato-de-texto-por-defecto-con-css
author: victor_cuervo
---

Cuando carguemos una página web en nuestro navegador, el formato de texto que se utilizará por defecto será el que indique las propiedades del navegador. Esto sucederá siempre y cuando la página web no indique nada al respecto. 


Es por ello que vamos a ver cómo podemos definir el formato de texto por defecto con [CSS](https://www.manualweb.net/css). De esta forma lo normal será establecer algún [formato de texto](https://lineadecodigo.com/tag/css-texto/) por defecto en nuestra página.


Para ello nos apoyaremos en las [hojas de estilo CSS](https://www.manualweb.net/css/). Para definir el formato de texto por defecto con [CSS](http://www.manualweb.net/css/) lo primero que tenemos que conocer son las propiedades [CSS](http://www.manualweb.net/css/) que afectan al formato. Estas serán las relativas al texto y la fuente. Entre ellas tenemos las siguientes: 

- [`color`](http://www.w3api.com/CSS/color/), para indicar el color del texto.
- [`text-align`](http://www.w3api.com/CSS/text-align/), para alinear el texto (left, right, center o justify).
- [`text-decoration`](http://www.w3api.com/CSS/text-decoration/), añade decoraciones al texto, como subrayado, tachado,...
- [`font-family`](http://www.w3api.com/CSS/font-family/), nombre de la fuente a utilizar (Arial, Courier,...).
- [`font-size`](http://www.w3api.com/CSS/font-size/), tamaño de la fuente
- [`font-style`](http://www.w3api.com/CSS/font-style/), estilo de la fuente (negrilla, itálica u oblicua).

Ahora solo nos quedará el aplicarlas al [elemento ](http://www.w3api.com/HTML/body/)[`body`](http://www.w3api.com/HTML/body/) de la página. De esta forma se convertirá en el formato de texto por defecto de nuestra página. Para ello insertamos el estilo [CSS](http://www.manualweb.net/css/) en la cabecera de la página de la siguiente forma:


```css
body {
  font-family: Arial, sans-serif;
  font-size: 10pt;
  color: #f00;
}
```


Vemos que hemos utilizado directamente como selector el nombre del elemento [HTML](https://www.manualweb.net/html/) en cuestión, es decir, [`body`](http://www.w3api.com/HTML/body/). Lo que tenemos que hacer es dar valores a las diferentes propiedades. Ahora solo nos quedará insertar texto en la página, de tal manera que todo el texto aparecerá con el formato especificado en la cabecera. Y ya tenemos nuestro formato de texto por defecto con [CSS](http://www.manualweb.net/css/) .

