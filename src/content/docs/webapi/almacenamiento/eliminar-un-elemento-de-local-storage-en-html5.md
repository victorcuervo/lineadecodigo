---
title: "Eliminar un elemento de Local Storage en HTML5"
description: "Descubre cómo eliminar un elemento de Local Storage en HTML5 de forma sencilla y rápida con el método removeItem. Optimiza tu almacenamiento web hoy mismo."
date: 2010-11-01
updatedDate: 2026-01-24
tags: ["localstorage","removeitem"]
slug: webapi/almacenamiento/eliminar-un-elemento-de-local-storage-en-html5
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/WebStorage/eliminar-elemento/eliminar-elemento-web-storage.html
topic: webapi


---

Hemos [accedido al Local Storage](http://lineadecodigo.com/html5/acceder-a-la-cache-local-del-navegador-con-html5/), [listado todo el contenido](http://lineadecodigo.com/html5/listar-el-contenido-de-local-storage-en-html5/) y [borrado por completo la Local Storage](http://lineadecodigo.com/html5/vaciar-la-local-storage-en-html5/) en [HTML5](https://www.manualweb.net/html5/). Pero ¿cómo podemos eliminar un elemento de Local Storage?


El procedimiento es sencillo... pero vamos por pasos. Lo primero es insertar un elemento dentro de Local Storage. Eso sí. siempre comprobando primero que nuestro navegador utiliza la Local Storage.


```javascript
if (localStorage)  {
  localStorage["n1"] = "Victor";
  localStorage["n2"] = "Juan";
}
```


## Eliminar un elemento de Local Storage


Para eliminar un elemento de Local Storage lo que tenemos que hacer es utilizar el método `.removeItem()`. Este método recibirá como parámetro la clave utilizada en la inserción. En este caso, si queremos eliminar lo dos elementos insertados anteriormente lo haremos de la siguiente forma:


```javascript
if (localStorage)  {
  localStorage.removeItem("n1");
  localStorage.removeItem("n2");
}
```


Un procedimiento muy sencillo.

