---
title: "Tablas estilo cebra con Bootstrap"
description: "Crea tablas estilo cebra con Bootstrap de forma sencilla y mejora la presentación de tus datos sin complicarte con CSS. ¡Descubre cómo hacerlo ya!"
date: 2015-06-08
updatedDate: 2026-02-02
tags: ["table","class","table-striped"]
slug: bootstrap/tablas/tablas-estilo-cebra-con-bootstrap
type: doc
topic: bootstrap
id: a8c9005d-9f62-43ab-9383-ddc2acbf20e6
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_bootstrap/blob/master/tablas/striped-table.html
video: U9ZLGohhcdY
videoDate: 2015-09-17
---

Si no eres de los que se quiere entretener con el [CSS](http://www.manualweb.net/css/) o buscas una forma sencilla de dar formato a los elementos de tu página, [Bootstrap](http://www.manualweb.net/bootstrap/) es tu solución y una gran ayuda para tus diseños.


Por ejemplo, si estamos trabajando con tablas puede ser que queramos tener tablas estilo cebra mediante [CSS](http://www.manualweb.net/css/). Esas que tienen las líneas pares de un color y las líneas impares de otro. Aquí vamos a ver lo sencillo que es tener tablas estilo cebra con [Bootstrap](http://www.manualweb.net/bootstrap/).


## Cargar Bootstrap


Lo primero a la hora de trabajar con [Bootstrap](http://www.manualweb.net/bootstrap/) es cargar el viewport y la hoja de estilo de [Bootstrap](http://www.manualweb.net/bootstrap/) en la cabecera:


```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="/css/bootstrap.min.css">
```


Y lo segundo será cargar el framework [Bootstrap](http://www.manualweb.net/bootstrap/) al final de la página.


```html
<script src="/js/bootstrap.min.js"></script>
```


> Es recomendable que la carga del script de [Bootstrap](http://www.manualweb.net/bootstrap/) sea la última línea de tu página, antes del [elemento de cierre de body](https://www.w3api.com/HTML/body/) para evitar tener problemas.


## Crear una tabla básica


Ahora insertamos la tabla. Para el manejo de las tablas [Bootstrap](http://www.manualweb.net/bootstrap/) nos proporciona _la clase "table"_. Así que definiremos la tabla de la siguiente forma:


```html
<table class="table">
  <tr>
    <td>País</td>
    <td>Capital</td>
    <td>Superficie</td>
    <td>Habitantes</td>
  </tr>
  <tr>
    <td>España</td>
    <td>Madrid</td>
    <td>504.645 km<sup>2</sup></td>
    <td>46,6 M</td>
  </tr>
</table>
```


## Aplicar el estilo cebra


Si queremos tener tablas estilo cebra con [Bootstrap](http://www.manualweb.net/bootstrap/) deberemos de añadir, además de la _clase table_, la _clase table-striped_. Así el código a escribir es el siguiente:


```html
<table class="table table-striped">
  <tr>
    <td>País</td>
    <td>Capital</td>
    <td>Superficie</td>
    <td>Habitantes</td>
  </tr>
  <tr>
    <td>España</td>
    <td>Madrid</td>
    <td>504.645 km<sup>2</sup></td>
    <td>46,6 M</td>
  </tr>
</table>
```


## Uso con thead y tbody


Una cosa importante que tenemos que saber a la hora de crear tablas estilo cebra con [Bootstrap](http://www.manualweb.net/bootstrap/) es que si utilizamos las agrupaciones `thead`, `tbody`... **el estilo de tipo cebra solo se aplicará a los elementos que estén dentro de la agrupación** **`tbody`**, dejando de lado la cabecera.

