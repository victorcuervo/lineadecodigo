---
title: "Formulario Básico con Bootstrap"
description: "Crea un formulario básico con Bootstrap y mejora la experiencia del usuario. Aprende a utilizar clases como form-control y btn para un diseño atractivo."
date: 2015-11-01
updatedDate: 2026-02-02
tags: ["form","form-group","class"]
slug: bootstrap/formularios/formulario-basico-con-bootstrap
author: victor_cuervo
type: doc
topic: bootstrap
id: 0f7aea01-c798-4c42-8677-1f7636ce5063
download: https://github.com/victorcuervo/lineadecodigo_bootstrap/blob/master/formularios/formulario-basico.html
---

Bootstrap, al igual que con otros elementos del [lenguaje HTML](https://www.manualweb.net/html/), nos proporciona un conjunto de funcionalidades para extender las capacidades de los formularios. En este ejemplo vamos a ver como podemos crear un formulario básico con [Bootstrap](http://www.manualweb.net/bootstrap/).


## Crear el formulario HTML


Lo primero será crear un formulario básico directamente con [HTML](https://www.manualweb.net/html/):


```html
<form>
  <label for="nombre">Nombre:</label>
  <input id="nombre" name="nombre" type="text"></input>
  <label for="email">Email:</label>
  <input id="email" name="email" type="text"></input>
  <label>
    <input type="checkbox"></input> Recordar datos
  </label>
  <button type="submit">Enviar</button>
</form>
```


En este formulario lo que nos podemos encontrar son elementos `label` para especificar las etiquetas, elementos [`input`](https://www.w3api.com/HTML/input/) para crear las cajas de texto o checkboxes y [`button`](https://www.w3api.com/HTML/button/) para crear los botones.


## Aplicar la clase form-control


El primer elemento que nos proporciona Bootstrap es la clase `form-control` la cual sirve para identificar un campo de entrada, ya sea un [`input`](https://www.w3api.com/HTML/input/), `select` o un [`textarea`](https://www.w3api.com/HTML/textarea/). Mediante la clase `form-control` vamos a conseguir que el elemento de entrada ocupe un 100% del contenedor en el cual está definido.


```html
<label for="nombre">Nombre:</label>
<input class="form-control" id="nombre" name="nombre" type="text"></input>
```


## Agrupar elementos con form-group


Esta clase nos sirve para agrupar elementos dentro del formulario. Por ejemplo si tenemos una etiqueta y un campo de entrada podemos agruparlos en un solo elemento mediante la clase `form-group`:


```html
<div class="form-group">
  <label for="email">Email:</label>
  <input class="form-control" id="email" name="email" type="text"></input>
</div>
```


## Estilizar botones con btn


Si tenemos un botón podemos adecuarle, aunque no esté en un formulario. Para ello vamos a apoyarnos en la clase `btn` dentro del elemento [`button`](https://www.w3api.com/HTML/button/). La cual hará que la apariencia del botón sea más relevante.


```html
<button class="btn btn-default" type="submit">Enviar</button>
```


Además contamos con clases como `btn-default`, `btn-primary`, `btn-success`, que nos permiten asociar diferentes visualizaciones al botón.


## Formulario básico completo


Con los conceptos `form-control`, `btn` y `form-group` podemos construir un formulario sencillo mediante Bootstrap. Finalmente nuestro formulario básico con Bootstrap quedaría de la siguiente forma:


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
  <div class="form-group">
    <div class="checkbox">
      <label>
        <input type="checkbox"></input> Recordar datos
      </label>
    </div>
  </div>
  <button class="btn btn-default" type="submit">Enviar</button>
</form>
```

