---
title: "Listas Ordenadas con jQuery Mobile"
description: "Crea listas ordenadas con jQuery Mobile de forma sencilla y efectiva. Mejora la presentación de tu contenido y optimiza la experiencia de usuario."
date: 2012-05-28
updatedDate: 2026-02-06
tags: ["data-role","data-inset","data-filter","listview","ol"]
slug: jquery/mobile/listas-ordenadas-con-jquery-mobile
type: doc
topic: jquery
id: 2c8a9dfb-adca-81d4-b63b-e0189cd3d725
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_jquerymobile/blob/master/listas/lista-ordenada-jquerymobile.html
---

Aunque en los ejemplos que hemos visto hasta ahora con [jQuery Mobile](https://www.manualweb.net/jquery/) ([lista de elementos](http://lineadecodigo.com/desarrollo-movil/listas-de-elementos-en-jquery-mobile/), [filtrar elementos](http://lineadecodigo.com/desarrollo-movil/filtrar-elementos-con-jquery-mobile/), [listas anidadas](http://lineadecodigo.com/desarrollo-movil/listas-anidadas-con-jquery-mobile/),...) las listas utilizadas no tenían ningún orden, con [jQuery Mobile](https://www.manualweb.net/jquery/) podemos crear listas ordenadas para presentar el contenido.


## Estructura de Lista Desordenada


Para poder crear listas ordenadas con [jQuery Mobile](https://www.manualweb.net/jquery/) simplemente tenemos que recurrir a la estructura [HTML](https://www.manualweb.net/html/) de las listas ordenadas. Es decir, al elemento OL. 


De esta forma, si una lista desordenada con [jQuery Mobile](https://www.manualweb.net/jquery/) era:


```html
<ul data-role="listview" data-inset="true">
  ...
</ul>
```


## Estructura de Lista Ordenada


Una lista ordenada con [jQuery Mobile](https://www.manualweb.net/jquery/) será:


```html
<ol data-role="listview" data-inset="true">
  ...
</ol>
```


> Recuerda que las listas en [jQuery Mobile](https://www.manualweb.net/jquery/) se demarcan con el atributo `data-role` al cual le asignamos el valor "listview".


## Ejemplo Completo


Quedándonos el código fuente de una lista ordenada con [jQuery Mobile](https://www.manualweb.net/jquery/) de la siguiente forma:


```html
<ol data-role="listview" data-inset="true" data-filter="true">
  <li><a href="#">Espartaco</a></li>
  <li><a href="#">La Naranja Mecánica</a></li>
  <li><a href="#">El Padrino</a></li>
  <li><a href="#">Sin Perdón</a></li>
  <li><a href="#">Dos Hombres y Un Destino</a></li>
</ol>
```


De esta forma tan sencilla hemos conseguido crear listas ordenadas con [jQuery Mobile](https://www.manualweb.net/jquery/).

