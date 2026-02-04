---
title: "Cambiar el tamaño de la imagen de forma dinámica"
description: "Ejemplo que nos explica a cómo utilizar Javascript para cambiar el tamaño de la imagen de forma dinámica."
date: 2007-01-12
updatedDate: 2026-01-12
tags: ["img","height","width","onclick","getelementbyid"]
slug: dom/manipulacion/cambiar-el-tamano-de-la-imagen-de-forma-dinamica
type: doc
topic: dom
id: c92fe123-6bcb-4831-85c2-ae88931a735f
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_javascript/tree/master/dom/cambiar-tamanio-imagen
---

Lo bueno del **DOM** de una página es que puedes acceder a los diferentes elementos de la página de una forma normalizada y modificar sus propiedades. Esto nos permite hacer cosas como **modificar el tamaño de una imagen de forma dinámica**.


Para empezar hay que crear una imagen dentro de un documento [HTML](https://www.manualweb.net/html/). Para ello utilizaremos la etiqueta `img`. Veamos como quedaría la [línea de código](http://lineadecodigo.com/):


```html
<img id="miImagen" src="imagen.jpg" alt="Mi imagen">
```


Aunque lo realmente importante es el código [JavaScript](https://www.manualweb.net/javascript/) que modifique las propiedades de la imagen. Para ello crearemos una función [JavaScript](https://www.manualweb.net/javascript/) a la que llamaremos **cambiaTamanio**, la cual pondremos dentro de las etiquetas `script` dentro de la cabecera de la página. Veamos como quedaría esto en nuestra página [HTML](https://www.manualweb.net/html/):


```html
<script>
function cambiaTamanio() {
  // código de la función
}
</script>
```


## Acceder al elemento de la imagen


Dentro de esta función, lo primero será acceder al objeto que tiene la imagen. Para ello necesitamos conocer su identificador, que será el nombre que hayamos puesto [al atributo ID](https://www.w3api.com/HTML/id/). Y utilizar el [método getElementById](https://www.w3api.com/DOM/.getElementById()), pasándole como parámetro dicho [ID](https://www.w3api.com/HTML/id/).


Una vez que tengamos el elemento de la página podremos acceder a las propiedades del mismo y modificarlas. En este caso nos interesan el alto (`height`) y ancho (`width`) de la imagen. A las cuales daremos un tamaño diferente al que tienen.


```javascript
function cambiaTamanio() {
  var imagen = document.getElementById('miImagen');
  imagen.height = 300;
  imagen.width = 400;
}
```


## Compatibilidad con diferentes navegadores


Uno de los inconvenientes es que ciertos navegadores no soportan el modificar los datos de una imagen obteniéndola mediante `.getElementById()`.


En otros navegadores como el Internet Explorer tienen arrays que reflejan las imágenes del documento que se ha cargado. A este array se accede mediante `document.images` y en concreto a una imagen mediante la siguiente [línea de código](http://lineadecodigo.com/):


```javascript
document.images[0]
```


Así que nuestra función [JavaScript](https://www.manualweb.net/javascript/) validará si tiene dicho array, sino lo tiene accederá directamente al elemento. Es por ello que nuestro código de función queda de la siguiente forma:


```javascript
function cambiaTamanio() {
  if (document.images) {
    document.images[0].height = 300;
    document.images[0].width = 400;
  } else {
    var imagen = document.getElementById('miImagen');
    imagen.height = 300;
    imagen.width = 400;
  }
}
```


## Ejecutar la función


Ahora solo falta lanzar esta función. Esto lo podemos hacer, por ejemplo, mediante un botón y su evento `onClick`. Veamos la línea de código:


```html
<input type="button" value="Cambiar Tamaño" onClick="cambiaTamanio();">
```

