---
title: "Cargar una imagen AVIF"
description: "Cómo utilizar los elementos picture y source de HTML5 para poder cargar una imagen AVIF y tener un fallback más tradicional."
date: 2023-10-10
updatedDate: 2026-01-06
tags: ["picture","source","avif"]
slug: html5/imagenes/cargar-una-imagen-avif
author: victor_cuervo
type: doc
id: a26c698b-5d0a-493a-bc96-28b9b06cd709
download: https://github.com/victorcuervo/lineadecodigo_html5/blob/master/Imagenes/imagen-avif.html
---

El [formato AVIF nos permite mostrar imágenes con un alto valor de resolución con un peso de fichero reducido](https://arquitectoit.com/front/formato-avif/). AVIF viene a mejorar las imágenes JPEG comprimiendo una imagen 10 veces más y sin perder resolución. Todo esto mediante codecs de código abierto. En este artículo vamos a ver cómo podemos cargar una imagen AVIF en nuestra página web mediante [HTML5](https://www.manualweb.net/html5/).


Lo primero que tenemos que saber es que el soporte de AVIF todavía no está extendido por todos los navegadores. Y aunque está extendido ya en casi todos los navegadores, por ejemplo, el navegador Edge, no lo soporta. Es por ello que el código [HTML5](https://www.manualweb.net/html5/) de nuestra página deberemos de tener preparado un “fallback” por si acaso el navegador no es capaz de cargar la imagen AVIF.


> Puedes utilizar [herramientas como Squoosh](https://squoosh.app/) para poder convertir tu imagen a formato AVIF.


Cuando nos ponemos a codificar la página tenemos que utiliza el elemento [`picture`](https://www.w3api.com/HTML/picture/). Ya que el elemento [`picture`](https://www.w3api.com/HTML/picture/) nos permite cargar diferentes orígenes de la imagen, estableciendo una cadena de “fallback” por si el navegador no puede cargar el contenido.


La estructura del elemento [`picture`](https://www.w3api.com/HTML/picture/) es la siguiente:


```html
<picture>
	<source/>
</picture>
```


Los diferentes orígenes de las imágenes se van a establecer mediante el elemento [`source`](https://www.w3api.com/HTML/source/). En el caso del elemento [`source`](https://www.w3api.com/HTML/source/) tenemos que conocer dos atributos, por un lado el atributo [`srcset`](https://www.w3api.com/HTML/source/srcset/) que es el atributo que identifica el origen de la imagen y por otro lado el atributo [`type`](https://www.w3api.com/HTML/source/type/) que nos permite indicar el tipo de la imagen.


Las sintaxis será la siguiente:


```html
<picture>
	<source src="origenimagen" type="tipoimagen" />
</picture>
```


Por lo que, si queremos cargar una imagen AVIF, lo que tendremos que codificar será lo siguiente:


```html
<picture>
    <source srcset="imagen.avif" type="image/avif">
</picture>
```


Vemos que el tipo de la imagen de formato AVIF indicado mediante el parámetro [`type`](https://www.w3api.com/HTML/source/type/) es **“image/avif”.**


Por si nuestro navegador no soporta el formato AVIF lo que haremos será poner otro origen. En este caso vamos a utilizar una imagen webp.


```html
<picture>
    <source srcset="imagen.avif" type="image/avif">
    <source srcset="imagen.webp" type="image/webp">
</picture>
```


Y ya, si vemos que nuestro navegador no va a cargar tampoco este tipo de formato, nos apoyaremos en el elemento [`img`](https://www.w3api.com/HTML/img/) para cargar directamente una imagen en formato png.


```html
<picture>
    <source srcset="imagen.avif" type="image/avif">
    <source srcset="imagen.webp" type="image/webp">
    <img src="imagen.png" >
</picture>
```


Así ya habremos conseguido cargar una imagen AVIF en nuestra página web mediante [HTML5](https://www.manualweb.net/html5/). Además te recomendamos que te leas el [artículo sobre el Formato AVIF en Arquitecto IT](https://arquitectoit.com/front/formato-avif/) para conocer algo más de este formato de imagen tan novedosa.

