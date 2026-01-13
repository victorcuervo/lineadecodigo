---
title: "Calcular el numero de imágenes con JavaScript"
description: "Manejo del DOM de una página web para poder calcular el numero de imágenes con JavaScript."
date: 2007-07-04
updatedDate: 2026-01-13
tags: ["length","img","images"]
slug: dom/elementos/calcular-el-numero-de-imagenes-con-javascript
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/pagina/numero-imagenes-de-un-documento.html
topic: dom

---

Otra de las cosas que podemos hacer manipulando el **DOM** de una página web y apoyándonos en [JavaScript](https://www.manualweb.net/javascript/) es poder calcular el número de imágenes que tenemos cargadas en la página.


## Incluir imágenes en la página


Lo primero que vamos a hacer es poner unas cuantas imágenes en nuestra página [HTML](https://www.manualweb.net/html/). Para ello nos apoyamos en la etiqueta `img`. Veamos como sería el código:


```html
<img src="imagen1.jpg" alt="Imagen 1">
<img src="imagen2.jpg" alt="Imagen 2">
<img src="imagen3.jpg" alt="Imagen 3">
```


En [el atributo src](https://www.w3api.com/HTML/source/src/) indicamos la URL que contiene la imagen y mediante el atributo `alt` indicamos el texto alternativo asociado a la imagen.


## Calcular el número de imágenes


El [DOM](https://www.w3api.com/DOM/) nos ofrece el objeto `document.images`. Dicho objeto hace referencia a las imágenes que hay dentro del documento [HTML](https://www.manualweb.net/html/). Y si utilizamos el atributo `length`, este nos indicará el número de imágenes del documento.


Solo nos quedará el volcar el contenido a la página mediante [document.write](https://www.w3api.com/DOM/.write()) de [JavaScript](https://www.manualweb.net/javascript/).


```javascript
document.write("El documento tiene " + document.images.length + " imágenes.");
```

