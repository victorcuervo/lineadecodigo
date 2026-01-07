---
title: "Deshabilitar formulario con Prototype"
description: "La página explica cómo deshabilitar un formulario utilizando el framework Prototype en JavaScript."
date: 2007-02-04
updatedDate: 2026-01-07
tags: ["form","input","script","type","disable"]
slug: prototype/formularios/deshabilitar-formulario-con-prototype
author: victor_cuervo
type: doc

topic: prototype
---

[Prototype](http://lineadecodigo.com/categoria/prototype/) es un FrameWork JavaScript que nos permite crear aplicaciones que usen JavaScript y el DOM de las páginas web de una forma muy sencilla. Una de las utilidades que nos ofrece es el objeto Form, mediante el cual podemos manipular el comportamiento de los formularios. Por ejemplo dehabilitar y habilitar el formulario.


Lo primero que deberemos de hacer es crear una página [HTML](http://www.manualweb.net/html/) con un formulario. No vamos a entrar muy en detalle, ya que asumo que no debería de ser muy complejo el crear un formulario en [HTML](http://www.manualweb.net/html/). Si aún así te ves en dificultades de codificar un formulario [HTML](http://www.manualweb.net/html/), puedes leerte los [artículos sobre Formularios en HTML](http://lineadecodigo.com/tag/html-form/).


Pero veamos el código del formulario:


```html
<form id="peticion">
  Nombre:<input type="text" id="nombre" /><br />
  Apellido: <input type="text" id="apellido" /><br />
  <input type="radio" name="genero" value="Hombre" />Hombre
  <input type="radio" name="genero" value="Mujer" />Mujer
</form>
```


Una cosa muy importante sobre este formulario, y que necesitaremos posteriormente, es el ID del formulario, su nombre. En este caso hemos llamado al formulario "peticion".


Para poder usar [Prototype](http://lineadecodigo.com/categoria/prototype/) simplemente tenemos que hacer dos cosas:

- [Descargarnos el software de Prototype](http://www.prototypejs.org/download), es un archivo .js
- Instanciarle dentro de nuestra página [HTML](http://www.manualweb.net/html/)

Para instanciar el framework de [Prototype](http://lineadecodigo.com/categoria/prototype/), simplemente deberemos de incluir la librería prototype.js dentro de nuestra página HTML. En concreto, deberá ir dentro de la cabecera de la página, es decir dentro de las etiquetas <HEAD>. La línea de código será la siguiente:


```html
<script type="text/JavaScript" src="prototype.js"></script>
```


Una vez instanciado el framework de [Prototype](http://lineadecodigo.com/categoria/prototype/) pasaremos a utilizar el objeto Form. Este objeto se utiliza en [Prototype](http://lineadecodigo.com/categoria/prototype/) para manejar los formularios.


Los métodos para habilitar y deshabilitar el formulario son .enable(IDFormulario) y .disable(IDFormulario). Es por ello que solo deberemos de codificar esto dentro de un código script.


En nuestro caso crearemos un segundo formulario con dos botones, cuyo código será el que deshabilite y habilite el primer formulario. Veamos como sería el código:


```html
<form id="control">
  <input
    type="button"
    value="Deshabilitar"
    onClick="Form.disable('peticion');"
  />
  <input type="button" value="Habilitar" onClick="Form.enable('peticion');" />
</form>
```


Como veis en el código, el ID de formulario que se pasa es el nombre del primer formulario, "peticion".

