---
title: "Listas sin estilo en Bootstrap"
description: "Descubre cómo crear listas sin estilo en Bootstrap con la clase list-unstyled y mejora la presentación de tu contenido de forma sencilla y efectiva."
date: 2015-07-27
updatedDate: 2026-02-03
tags: ["ul","li","list-unstyled"]
slug: bootstrap/listas/listas-sin-estilo-en-bootstrap
author: victor_cuervo
type: doc
id: 347251fa-ea2f-4676-9922-dbc923cfbae1
download: https://github.com/victorcuervo/lineadecodigo_bootstrap/blob/master/listas/listas-sin-estilo.html
---

Dentro de las opciones que nos proporciona [Bootstrap](http://www.manualweb.net/bootstrap/) para el manejo de listas encontramos la de poder crear listas sin estilo. Para poder crear listas sin estilo en Bootstrap deberemos de conocer como [crear una lista en HTML](http://lineadecodigo.com/html/listas-desordenadas-en-html/) y la clase que nos permite gestionar la visualización de la misma.


Las listas sin estilo en [Bootstrap](http://www.manualweb.net/bootstrap/) acaban mostrando una lista de elementos los cuales no tienen ningún hito o icono inicial que preceda cada uno de los elementos.


## Crear una lista básica


Lo primero que hay que hacer para poder crear listas sin estilo en [Bootstrap](http://www.manualweb.net/bootstrap/) es definir una lista sin orden. Para ello vamos a utilizar [el elemento ul](https://www.w3api.com/HTML/ul/).


```html
<ul>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  <li>Elemento 3</li>
  <li>...</li>
  <li>Elemento N</li>
</ul>
```


Cada elemento de la lista está rodeado mediante [el elemento li](https://www.w3api.com/HTML/li/).


Al crear este código veremos en nuestra página web una lista donde cada elemento está precedido por un bullet (o punto negro).


## Aplicar la clase list-unstyled


Si queremos tener una lista sin estilo con [Bootstrap](http://www.manualweb.net/bootstrap/) lo que tenemos que hacer es marcar a la lista mediante la clase `list-unstyled`. Lo cual codificaremos de la siguiente manera:


```html
<ul class="list-unstyled">
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  <li>Elemento 3</li>
  <li>...</li>
  <li>Elemento N</li>
</ul>
```


El efecto que habremos conseguido será que ya no hay ninguna marca delante de cada uno de los elementos de la lista. Así habremos conseguido tener una lista sin estilo con [Bootstrap](http://www.manualweb.net/bootstrap/).

