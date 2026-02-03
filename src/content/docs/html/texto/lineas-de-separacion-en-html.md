---
title: "Lineas de separación en HTML"
description: "Se explica cómo crear líneas de separación en HTML utilizando la etiqueta HR y la importancia de CSS para su estilo."
date: 2007-01-14
updatedDate: 2026-01-23
tags: ["hr"]
slug: html/texto/lineas-de-separacion-en-html
author: victor_cuervo
type: doc
id: 18349f24-b5d5-4212-acf7-24ee20dc577b
download: https://github.com/victorcuervo/lineadecodigo/blob/master/lineadecodigo_html/basicos/lineas-de-separacion.html
---

Seguro que muchas veces has entrado en una web y has visto que se utilizan líneas para separar los párrafos de texto. Algunas veces no dejan de ser simples líneas de un color uniforme, normalmente gris, pero otras veces llegan a ser verdaderas obras de arte.


Para poder ponerlas en nuestra web no hace falta que utilicemos imágenes pre-diseñadas por algún software gráfico. Tenemos una forma más sencilla para llevarlo a cabo.


## La etiqueta HR


Para poder hacer esto el lenguaje [HTML](https://www.manualweb.net/html/) nos proporciona la etiqueta [HR](https://www.manualweb.net/html/). El mero hecho de poner esta etiqueta en una página hace que ya nos aparezca una línea de separación entre párrafos.


Veamos como sería una página [HTML](https://www.manualweb.net/html/) utilizando esto:


```html
<html>
<body>

Texto del párrafo uno
<hr></hr>
Texto del párrafo dos

</body>
</html>
```


Si lo cargamos en nuestro navegador veremos que aparece una línea entre los dos párrafos. Esta línea ocupa, normalmente, de un lado a otro de la página.


## Personalizar con CSS


Si queremos modificar las propiedades de la línea de separación HR el lenguaje [HTML](https://www.manualweb.net/html/) nos daba (y digo daba) un conjunto de atributos: `width`, `noshade`, `size`... Pero todos ellos han quedado obsoletos dentro de la especificación.


Ahora, para modificar su visualización, deberemos de utilizar las hojas de estilo [CSS](http://www.manualweb.net/css/). Pero esto lo dejaremos para otro día...

