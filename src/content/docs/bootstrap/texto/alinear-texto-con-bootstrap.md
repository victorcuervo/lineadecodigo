---
title: "Alinear texto con Bootstrap"
description: "Artículo que nos muestra las diferentes formas que tenemos de alinear texto con Bootstrap mediante text-left, text-center y text-right."
date: 2013-10-13
updatedDate: 2026-01-10
tags: ["texto","text-left","text-center","text-right"]
slug: bootstrap/texto/alinear-texto-con-bootstrap
type: doc
topic: bootstrap
id: db4337ad-2641-4b51-9fa1-8ac048dc4d0a
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_bootstrap/blob/master/texto/alinear-texto.html
---

Alinear texto con [Bootstrap](https://www.manualweb.net/bootstrap/) es una tarea muy sencilla y que nos hace olvidarnos de todas las "complicaciones" que podríamos tener haciéndolo con [CSS](https://www.manualweb.net/css/).


De esta forma, cuando queramos trabajar con la forma de situar nuestro texto con [Bootstrap](http://www.manualweb.net/bootstrap/) tenemos tres posibilidades que se explican por sí mismas: alinearse a la izquierda, alinearse a la derecha y alinearse al centro.


Y para posibilitarnos estas formas de alinear texto con [Bootstrap](https://www.manualweb.net/bootstrap/) tenemos tres clases relacionadas: `text-left`**,** `text-right` y `text-center`. Solo tenemos que utilizar la clase que necesitemos dentro del atributo [`class`](https://www.w3api.com/HTML/class/) del elemento que albergue el texto.


Así que lo primero será crear un contenido de texto que será el que pasaremos a alinear. Para ello hemos creado un párrafo mediante un elemento [`p`](https://www.w3api.com/HTML/p/) en el que hemos insertado el texto:


```html
<p>Texto que queremos alinear</p>
```


Ahora pasaremos a proceder para alinear el texto. De esta forma tendremos las siguientes codificaciones:


En primer lugar lo que vamos a hacer es tener un texto alineado a la izquierda utilizando `text-left`. En este caso el texto empieza desde la izquierda del párrafo y si queda espacio libre siempre será a la derecha.


```html
<p class="text-left">Texto alineado a la izquierda.</p>
```


En segundo lugar vamos a tener un texto centrado utilizando `text-center`. En este caso el texto aparece en el centro del párrafo y los espacios libres se distribuyen a la izquierda y derecha del texto.


```html
<p class="text-center">Texto centrado</p>
```


Por último tenemos el  texto alineado a la derecha utilizando `text-right`. En este caso el texto no tiene ningún espacio en su lado derecho y todo espacio libre por fila queda situado en la izquierda del párrafo.


```html
<p class="text-right">Texto alineado a la derecha.</p>
```


Como podemos apreciar, es muy sencillo el proceso para poder situar el contenido de texto de nuestra web a la izquierda, derecha o el el centro con [Bootstrap](http://www.manualweb.net/bootstrap/), dependiendo de lo que nos convenga.

