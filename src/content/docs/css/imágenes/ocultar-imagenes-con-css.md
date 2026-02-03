---
title: "Ocultar imágenes con CSS"
description: "Código que nos ayudará a recolocar y ocultar imágenes con CSS y Javascript manipulando las propiedades visibility y display."
date: 2007-10-18
updatedDate: 2026-01-08
tags: ["visibility","imagenes","display"]
slug: css/imagenes/ocultar-imagenes-con-css
author: victor_cuervo
type: doc
topic: css
id: ca21cf00-0941-44db-8eac-201110b1208f
download: https://github.com/victorcuervo/lineadecodigo/blob/master/lineadecodigo_css/imagenes/ocultar-imagenes.html
---

Gracias a [CSS](http://www.manualweb.net/css/) tenemos la posibilidad de ocultar/mostrar las imágenes de un documento. Las utilidades de este proceso de ocultar y mostrar pueden ser diversas. Por un lado podemos eliminar las imágenes del texto, dejándolo preparado como "texto limpio" a imprimir. Esto lo podemos hacer justo antes de enviar el documento a la cola de impresión. Por otro podemos utilizar para hacer que la carga en el navegador sea más rápida, al evitarnos tiempo de renderizado de la pantalla. Si bien esto sería útil en menos casos. Y seguro que hay más casos en los que se puede aplicar el proceso. Lo primero que tenemos que saber a la hora de ocultar las imágenes con [CSS](http://www.manualweb.net/css/) es que tenemos dos propiedades [CSS](http://www.manualweb.net/css/) que nos ayudan con este procesos. Estas dos propiedades son [`visibility`](https://w3api.com/CSS/visibility/) y [`display`](https://w3api.com/CSS/display/). Mediante [`visibility`](https://w3api.com/CSS/visibility/) lo que podemos modificar es la visibilidad de la imagen. Es decir, la imagen siempre ocupa espacio, aunque puede ser que no se muestre. Los valores posibles de este campo son _**hidden**_ y _**visible**_. Así podremos definirnos dos estilos con estos valores:


```css
.imagenNO {
  visibility: hidden;
}
.imagen {
  visibility: visible;
}
```


Por su parte, [`display`](https://w3api.com/CSS/display/), cuando se muestra u oculta una imagen reubica el resto de elementos del documento, cambiando su disposición. Los valores posibles son varios: _**none**_, _**list-item**_, _**block**_,...


```css
.imagenNO {
  display: none;
}
.imagen {
  display: block;
}
```


Para modificar estos valores on-line utilizamos el lenguaje [JavaScript](http://www.manualweb.net/javascript/). Para ello creamos dos funciones `ocultarImagenes()` y `mostrarImagenes()`. A ambas funciones les pasaremos un parámetro para indicar si se quiere recolocar o no las imágenes y así utilizar [`display`](https://w3api.com/CSS/display/) o [`visibility`](https://w3api.com/CSS/visibility/)Para [recorrer las imágenes del documento](https://lineadecodigo.com/javascript/calcular-el-numero-de-imagenes-con-javascript/) utilizamos el array `document.images` y su propiedad `document.images.length`, que nos da el número de imágenes del documento. Vamos a buscar todas las imágenes del documento marcadas con las clases imagen o imagenNO para cambiar su estado. El hacerlo mediante clases nos permite que si existe alguna imagen que no queramos ocultar nunca (puede suceder cuando presentamos textos a imprimir). Veamos como serían las funciones:


```javascript
function mostrarImagenes(recolocar) {
  /** recolocar indica que se recoloque el documento **/
  /** si no recolocamos, solo ocultamos las imágenes **/

  for (x = 0; x < document.images.length; x++) {
    if (recolocar) document.images[x].className = "imagen";
    else document.images[x].style.visibility = "visible";
  }
}

function ocultarImagenes(recolocar) {
  /** recolocar indica que se recoloque el documento **/
  /** si no recolocamos, solo ocultamos las imágenes **/

  for (x = 0; x < document.images.length; x++) {
    if (recolocar) document.images[x].className = "imagenNO";
    else document.images[x].style.visibility = "hidden";
  }
}
```


Hemos visto que se puede ocultar las imágenes con [CSS](http://www.manualweb.net/css/) y [JavaScript](http://www.manualweb.net/javascript/) de una forma muy sencilla.

