---
title: "Imágenes como hitos de listas con CSS"
description: "Cómo escribir un código para poder crear imágenes como hitos de listas con CSS utilizando las propiedades list-style-image y list-style-type."
date: 2007-10-08
updatedDate: 2026-01-07
tags: ["list-style-image","lista","ul","ol","list-style-type","url"]
slug: css/imagenes/imagenes-como-hitos-de-listas-con-css
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo/blob/master/lineadecodigo_css/imagenes/imagenes-como-hitos-de-listas.html
topic: css
---

Cuando creamos una lista en [HTML](http://www.manualweb.net/html/), por cada elemento de la lista, podemos detectar dos partes: la **marca o hito** que inicia el elemento y el **texto del item** de la lista. Gracias a [CSS](http://www.manualweb.net/css/) podemos conseguir que los hitos de las listas sean imágenes, incrementando así el número de iconografías ofrecidas por la especificación de [HTML](http://www.manualweb.net/html/), que por defecto son circulo, cuadrado y elipse. Para tener imágenes como hitos de listas con [CSS](http://www.manualweb.net/css/) lo primero que tenemos que hacer es [crear una lista](http://www.manualweb.net/html/listas-html/). Para ello creamos una [lista desordenada](https://www.manualweb.net/html/listas-html/#listas-desordenadas), mediante el elemento [`ul`](https://w3api.com/HTML/ul/). El código [HTML](http://www.manualweb.net/html/) será el siguiente:


```html
<ul>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  <li>Elemento 3</li>
  <li>Elemento 4</li>
  <li>Elemento 5</li>
  <li>Elemento 6</li>
  <li>Elemento 7</li>
</ul>
```


Vemos que cada uno de los elementos de la lista es especificado utilizando el elemento [`li`](https://w3api.com/HTML/li/), que nos sirve de igual forma para [listas ordenadas o desordenadas](https://www.manualweb.net/html/listas-html/). Lo siguiente será el pasar a modificar el hito de cada uno de los elementos. Para poner una imagen en el hito del item de la lista utilizaremos la propiedad [CSS](http://www.manualweb.net/css/) [`list-style-image`](https://w3api.com/CSS/list-style-image/). La estructura de la propiedad [`list-style-image`](https://w3api.com/CSS/list-style-image/) es la siguiente:


```css
list-style-image: <uri> | none | inherit;
```


De esta manera nuestro código quedará de la siguiente forma:


```css
ol {
  list-style-image: url("documento.gif");
}
```


El nombre del fichero que contiene la imagen deberá de especificarse mediante una URI. Para ello nos apoyamos en la función `url()`, la cual recibe como parámetro la url en la que se encuentra el fichero. La URL podrá ser relativa (../imagenes/documento.gif)) o absoluta (http://lineadecodigo.com/imagenes/documento.gif). Si utilizamos imágenes como hitos podemos tomar la precaución de especificar un estilo sobre los items por si acaso el navegador no encuentra el fichero con la imagen. Los estilos [CSS](http://lineadecodigo.com/tag/markup/css/) los especificamos mediante la propiedad [`list-style-type`](https://w3api.com/CSS/list-style-type/). De esta manera aumentaremos la definición de nuestro elemento que quedará de la siguiente forma:


```css
ol {
  list-style-image: url("documento.gif");
  list-style-type: square;
}
```


Y este código tan sencillo nos sirve para tener imágenes como hitos de listas con [CSS](http://www.manualweb.net/css/). ¿Habéis utilizado o tenéis pensando utilizar alguna vez imágenes como hitos de listas? Si es así, cuéntanos tu experiencia en los comentarios de la página. Estaremos ilusionados de conocer vuestras experiencias.

