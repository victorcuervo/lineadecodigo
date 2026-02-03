---
title: "Formulario horizontal con Bootstrap"
description: "Aprende a crear un formulario horizontal con Bootstrap optimizando la distribución de campos y etiquetas para mejorar la experiencia del usuario en tu sitio web."
date: 2015-10-29
updatedDate: 2026-02-02
tags: ["form","form-group","form-horizontal"]
slug: bootstrap/formularios/formulario-horizontal-con-bootstrap
author: victor_cuervo
type: doc
topic: bootstrap
id: 777df9f9-6ff3-444d-a77f-78fd1821f463
download: https://github.com/victorcuervo/lineadecodigo_bootstrap/blob/master/formularios/formulario-horizontal.html
---

Ya vimos en otro ejemplo cómo podíamos [crear un formulario en línea con Bootstrap](http://lineadecodigo.com/bootstrap/formulario-en-linea-con-bootstrap/), en este caso vamos a ver cómo podemos crear un formulario horizontal con [Bootstrap](http://www.manualweb.net/bootstrap/).


Un formulario horizontal será aquél que distribuya de forma homogénea los campos del formulario en líneas estructurales de tal manera que las etiquetas de los campos se queden alineadas a la izquierda de los campos de texto.


Veremos que [Bootstrap](http://www.manualweb.net/bootstrap/) **trata a los formularios horizontales de la misma que utiliza los grid para realizar el diseño responsive de elementos**.


> Recuerda que siempre que utilices Bootstrap necesitarás importar la librería Javascript **bootstrap.js** y la hoja de estilos **bootstrap.css**.


## Crear el formulario básico


Lo primero será crear nuestro formulario, el cual tendrá dos campos de texto para un usuario y password, un checkbox para marcar un recordatorio y un botón de envío.


Para añadir los controles hay que recordar que en [Bootstrap](http://www.manualweb.net/bootstrap/) se maneja el `form-group`, el cual agrupa un `label` y un `input`. Y que los elementos de entrada se codifican como `form-control`:


```html
<div class="form-group">
  <label for="nombre">Nombre:</label>
  <input class="form-control" id="nombre" name="nombre" type="text"></input>
</div>
<div class="form-group">
  <label for="email">Email:</label>
  <input class="form-control" id="email" name="email" type="text"></input>
</div>
```


## Añadir checkbox y botón


Ahora vamos a añadir el checkbox como otro `form-group`:


```html
<div class="form-group">
  <div class="checkbox">
    <label>
      <input type="checkbox"></input> Recordar datos
    </label>
  </div>
</div>
```


Y por último añadimos el botón:


```html
<div class="form-group">
  <button class="btn btn-default" type="submit">Enviar</button>
</div>
```


## Definir el formulario como grid


Ahora vamos a definir que el formulario es un grid. Para ello asignamos la clase `form-horizontal` al formulario:


```html
<form class="form-horizontal">
  ...
</form>
```


En este momento los elementos del formulario se sitúan en un grid de tamaño 12. Es por ello que mediante los elementos `col-xs-x` (dispositivos <768px), `col-sm-x` (dispositivos >=768px), `col-md-x` (dispositivos >= 992px) y `col-lg-x` (dispositivos >= 1200px) podemos colocar nuestros elementos del formulario.


## Aplicar clases de grid


En nuestro caso vamos a utilizar `col-sm-x` para colocar los elementos. Ahora el tema es dónde utilizar esta clase dentro de los elementos que tenemos ya en el formulario.


Por ejemplo, para los campos de texto vamos a hacer que la etiqueta ocupe 2 posiciones y el campo de texto 10. Recuerda que el máximo es 12. Para ello vamos a apoyarnos en la clase del elemento label, pero el input deberemos de recubrirlo con una capa:


```html
<div class="form-group">
  <label class="col-sm-2 control-label" for="email">Email</label>
  <div class="col-sm-10">
    <input class="form-control" id="email" name="email" type="text"></input>	
  </div>
</div>
	
<div class="form-group">
  <label class="col-sm-2 control-label" for="password">Password</label>
  <div class="col-sm-10">
    <input class="form-control" id="password" name="password" type="password"></input>
  </div>
</div>
```


Para el caso del botón y del checkbox pasa lo mismo, que tenemos que recubrirlo con una capa para poder aplicar el estilo:


```html
<div class="form-group">
  <div class="col-sm-offset-2 col-sm-10">
    <div class="checkbox">
      <label>
        <input type="checkbox"></input> Recordar datos
      </label>
    </div>
  </div>
</div>
```


En este caso hemos utilizado también la clase `col-sm-offset-2` la cual indica que ese elemento evite dos posiciones, por lo cual conseguiremos que se represente debajo de los campos de entrada.


De esta forma hemos visto que con las mismas técnicas de un grid podemos montar un formulario horizontal con [Bootstrap](http://www.manualweb.net/bootstrap/).

