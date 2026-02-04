---
title: "Obtener elemento de un formulario con Prototype"
description: "La página explica cómo obtener el elemento de un formulario utilizando Prototype y su función $F para recuperar valores."
date: 2007-02-10
updatedDate: 2026-01-07
tags: ["$F","formulario","id","form"]
slug: prototype/formularios/obtener-elemento-de-un-formulario-con-prototype
type: doc
topic: prototype
id: 2c8a9dfb-adca-8162-a632-f73d775167cb
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_prototype/blob/master/formularios/obtener-elemento-formulario.html
---

Muchas de nuestras páginas van a tener un formulario. Ya que esta es la forma estándar de obtener datos del usuario en un entorno web. A la hora de recuperar la información de dicho formulario nos tenemos que apoyar en el código [JavaScript](https://www.manualweb.net/javascript/).


Si utilizamos código [JavaScript](https://www.manualweb.net/javascript/) estándar, deberemos considerar múltiples escenarios dependiendo del navegador y su versión correspondiente. Esto puede hacer que el código a escribir sea complejo en su edición y en su mantenimiento.


Para ello, el framework de [Prototype](http://lineadecodigo.com/categoria/prototype/) nos proporciona la sencilla función `$F`. Dicha función recibe como parámetro el ID de uno de los elementos del formulario y nos devuelve el valor que se haya introducido en el campo del formulario.


```javascript
$F("IDElementoFormulario");
```


Lo primero que haremos será construir una página [HTML](https://www.manualweb.net/html/) con un formulario dentro. Usaremos un formulario tipo con el que ya hemos trabajado en anteriores ocasiones.


Veamos cómo sería su código:


```html
<form id="peticion">
  Nombre:<input id="nombre" type="text" /><br />
  Apellido: <input id="apellido" type="text" /><br />
  <input name="genero" type="radio" value="Hombre" />Hombre
  <input name="genero" type="radio" value="Mujer" />Mujer
</form>
```


Es un formulario [HTML](http://www.manualweb.net/html/) muy simple con dos campos de texto para el nombre y apellido y otro de tipo "radio" para obtener el género de la persona.


Para utilizar [Prototype](http://lineadecodigo.com/categoria/prototype/) hay que instanciar su librería prototype.js. Para hacerlo utilizaremos la siguiente línea de código en la cabecera de la página web:


```html
<script type="text/javascript" src="prototype/prototype.js"></script>
```


En nuestro ejemplo vamos a recuperar el valor que haya insertado dentro del campo "nombre" del formulario. Entonces, el código de [Prototype](http://lineadecodigo.com/categoria/prototype/) que necesitamos será el siguiente:


```javascript
$F("nombre");
```


> Importante que el identificador utilizado dentro de la función $F tiene que coincidir con el identificador del atributo ID del campo del formulario.


Este valor lo vamos a mostrar en un mensaje emergente cuando pulsemos un botón de validación. Es por ello que el código que se necesita es el siguiente:


```html
<input type="button" value="Obtener nombre" />
```

