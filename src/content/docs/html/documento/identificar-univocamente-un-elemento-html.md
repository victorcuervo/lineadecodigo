---
title: "Identificar unívocamente un elemento HTML"
description: "Explicación de cómo utilizar Ids para poder identificar unívocamente un elemento HTML."
date: 2008-12-29
updatedDate: 2026-01-24
tags: ["div","img","id"]
slug: html/documento/identificar-univocamente-un-elemento-html
author: victor_cuervo
type: doc
topic: html
id: 608898b1-cf78-40f4-b929-914059435999
download: https://github.com/victorcuervo/lineadecodigo_html/blob/master/basicos/identificar-univocamente.html
---

Cuando conformamos nuestra página [HTML](https://www.manualweb.net/html/), esta se conforma de un conjunto de elementos [HTML](https://www.manualweb.net/html/) los cuales consiguen la representación gráfica de la página.


## Ejemplo de elementos HTML


Por ejemplo, podemos insertar una imagen y una capa mediante el siguiente código:


```html
<div>
  <img src="imagen.gif" width="100" height="200" alt="imagen"/>
</div>
```


## Identificación con el atributo id


Si, a posteriori, queremos utilizar algún lenguaje de script, como [JavaScript](https://www.manualweb.net/javascript/) y necesitamos modificar alguno de los elementos de la página, como la capa y la imagen de antes, debemos identificarlos unívocamente.


Para identificar unívocamente un elemento [HTML](https://www.manualweb.net/html/) deberemos utilizar el atributo [id](https://www.w3api.com/HTML/id/). El valor a asignar al atributo id tiene que ser un valor único.


Así nuestro código de antes nos quedaría de la siguiente forma:


```html
<div id="micapa">
  <img id="imagen1" src="imagen.gif" width="100" height="200" alt="imagen" />
</div>
```


Como se puede ver en el código, el atributo [id](https://www.w3api.com/HTML/id/) se ha asignado a los elementos [DIV](https://www.w3api.com/HTML/div/) e IMG.

