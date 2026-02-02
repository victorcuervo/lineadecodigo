---
title: "Tablas responsive con Bootstrap"
description: "Cómo construir páginas web en las que insertemos tablas responsive con Bootstrap. Manejo de la clase table-responsive."
date: 2015-08-16
updatedDate: 2026-02-02
tags: ["table","class","table-responsive"]
slug: bootstrap/tablas/tablas-responsive-con-bootstrap
author: victor_cuervo
type: doc
id: ea4a46c0-18eb-4eef-992a-5e0640c8e647
download: https://github.com/victorcuervo/lineadecodigo_bootstrap/blob/master/tablas/tabla-responsive.html
---

Una de las capacidades que tiene el framework [Bootstrap](http://www.manualweb.net/bootstrap/) es la gestión de los diseños responsive. Es decir, [la capacidad de poder adaptar nuestra página web a cualquier dispositivo](http://www.arquitectoit.com/front/layout-adaptable-en-disenos-sensibles/). En este artículo vamos a ver como podemos crear tablas responsive con [Bootstrap](http://www.manualweb.net/bootstrap/).


## Crear una tabla básica


Lo primero que haremos será crear nuestra tabla:


```html
<table class="table">
  <tr>
    <th>País</th>
    <th>Capital</th>
    <th>Superficie</th>
    <th>Habitantes</th>
    <th>Descripción</th>
  </tr>
  <tr>
    <td>España</td>
    <td>Madrid</td>
    <td>504.645 km<sup>2</sup></td>
    <td>46,6 M</td>
    <td>España es un país situado en el suroeste de Europa.</td>
  </tr>
  <tr>
    <td>Francia</td>
    <td>París</td>
    <td>643.801 km<sup>2</sup></td>
    <td>67 M</td>
    <td>Francia es un país de Europa Occidental.</td>
  </tr>
</table>
```


Para poder crear la tabla deberemos de tener conocimiento del [lenguaje HTML](https://www.manualweb.net/html/) y deberemos de manejar los elementos `table`, `tr` y `td`.


De igual manera deberemos de saber que las tablas en [Bootstrap](http://www.manualweb.net/bootstrap/) se manejan con la clase `table`. Dicha clase la asignaremos al atributo `class`.


## Hacer la tabla responsive


Ahora pasaremos a manejar el soporte para el responsive. Para tener tablas responsive con Bootstrap debemos de recubrir la tabla con una [capa div](https://www.w3api.com/HTML/div/). A dicha capa le asignaremos la clase `table-responsive`.


```html
<div class="table-responsive">
  <table class="table">
    <tr>
      <th>País</th>
      <th>Capital</th>
      <th>Superficie</th>
      <th>Habitantes</th>
      <th>Descripción</th>
    </tr>
    <tr>
      <td>España</td>
      <td>Madrid</td>
      <td>504.645 km<sup>2</sup></td>
      <td>46,6 M</td>
      <td>España es un país situado en el suroeste de Europa.</td>
    </tr>
    <tr>
      <td>Francia</td>
      <td>París</td>
      <td>643.801 km<sup>2</sup></td>
      <td>67 M</td>
      <td>Francia es un país de Europa Occidental.</td>
    </tr>
  </table>
</div>
```


## Comportamiento en dispositivos móviles


> ℹ️ Las tablas responsive con [Bootstrap](http://www.manualweb.net/bootstrap/) ejecutan su cambio de comportamiento con dispositivos móviles. Es decir, con dispositivos cuyo **área de visualización sea menor a 768px**.


Cuando veamos tablas responsive con [Bootstrap](http://www.manualweb.net/bootstrap/) desde nuestros dispositivos móviles veremos que, **al no poder mostrar todo el contenido de la tabla, lo que hará** [**Bootstrap**](http://www.manualweb.net/bootstrap/) **es generar una tabla que ocupe todo el ancho y una barra de scroll horizontal** que nos irá mostrando el contenido de toda la tabla.


Para el resto de dispositivos la visualización será la misma.

