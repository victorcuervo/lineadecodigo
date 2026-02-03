---
title: "Formulario en línea con Bootstrap"
description: "Descubre cómo crear un formulario en línea con Bootstrap de manera sencilla y efectiva, optimizando la presentación y funcionalidad de tus proyectos web."
date: 2015-10-03
updatedDate: 2026-02-02
tags: ["form","form-group","form-inline","class"]
slug: bootstrap/formularios/formulario-en-linea-con-bootstrap
author: victor_cuervo
type: doc
topic: bootstrap
id: 2c8a9dfb-adca-81fa-8f8e-ed2a8b7c31a9
download: https://github.com/victorcuervo/lineadecodigo_bootstrap/blob/master/formularios/formulario-en-linea.html
---

Un formulario en línea es aquel que nos permite poner los componentes en una sola línea. Por ejemplo, si tenemos dos cajas de entrada de texto, con sus correspondientes etiquetas de texto y un botón de envío (el típico formulario de login) aparecerían todas en una línea.


En el ejemplo de hoy vamos a ver cómo podemos construir un formulario en línea con [Bootstrap](http://www.manualweb.net/bootstrap/).


## Crear el formulario básico


Lo primero que vamos a hacer es definir el formulario con sus elementos `form`, [`input`](https://www.w3api.com/HTML/input/), `label` y [`button`](https://www.w3api.com/HTML/button/):


```html
<form>
  <label for="nombre">Nombre:</label>
  <input id="nombre" name="nombre" type="text"></input>
  <label for="email">Email:</label>
  <input id="email" name="email" type="text"></input>
  <button type="submit">Enviar</button>
</form>
```


## Aplicar clases de Bootstrap


Lo siguiente será empezar a utilizar estructuras de [Bootstrap](http://www.manualweb.net/bootstrap/). Por ejemplo, los elementos de tipo input son definidos mediante la clase `form-control`:


```html
<form>
  <label for="nombre">Nombre:</label>
  <input class="form-control" id="nombre" name="nombre" type="text"></input>
  <label for="email">Email:</label>
  <input class="form-control" id="email" name="email" type="text"></input>
  <button type="submit">Enviar</button>
</form>
```


## Agrupar campos con form-group


De igual manera se pueden agrupar los campos de etiquetas y entrada en grupos mediante la clase `form-group`:


```html
<form>
  <div class="form-group">
    <label for="nombre">Nombre:</label>
    <input class="form-control" id="nombre" name="nombre" type="text"></input>
  </div>
  <div class="form-group">
    <label for="email">Email:</label>
    <input class="form-control" id="email" name="email" type="text"></input>
  </div>
  <button class="btn btn-default" type="submit">Enviar</button>
</form>
```


## Aplicar la clase form-inline


Ya solo nos quedará utilizar la clase principal para el formulario y que es aquella que nos permite tener el formulario en línea con [Bootstrap](http://www.manualweb.net/bootstrap/). Esta es la clase `form-inline` la cual aplicaremos directamente al elemento [`form`](https://www.w3api.com/HTML/form/):


```html
<form class="form-inline">
  <div class="form-group">
    <label for="nombre">Nombre:</label>
    <input class="form-control" id="nombre" name="nombre" type="text"></input>
  </div>
  <div class="form-group">
    <label for="email">Email:</label>
    <input class="form-control" id="email" name="email" type="text"></input>
  </div>
  <button class="btn btn-default" type="submit">Enviar</button>
</form>
```


Y de esta forma tan sencilla hemos construido un formulario en línea con [Bootstrap](http://www.manualweb.net/bootstrap/).

