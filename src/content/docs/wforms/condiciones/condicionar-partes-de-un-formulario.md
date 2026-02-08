---
title: "Condicionar partes de un formulario"
description: "Aprende a condicionar partes de un formulario con wForms usando checkboxes. Muestra u oculta campos según la interacción del usuario."
date: 2008-01-04
updatedDate: 2026-02-08
tags: ["switch-id","onstate-id","offstate-id"]
slug: wforms/condiciones/condicionar-partes-de-un-formulario
type: doc
topic: wforms
id: 2c8a9dfb-adca-813c-b2af-c7fbc102beac
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_wforms/blob/master/condicionar-secciones.html
---

Con wForms además de poder hacer un sin fin de validaciones de una forma sencilla, también podemos condicionar partes el formulario, de tal manera que dependiendo de un valor de un campo, tengamos acceso a otra parte o directamente que no nos la muestre.


En nuestro caso, para demostrar su utilidad, vamos a crear un formulario con un checkbox, el cual al activarlo permita seguir insertando datos del formulario. En primer lugar pondremos los datos del usuario y en la parte condicionada los datos de la tarjeta. Que solo se ofrecerán al usuario si este los requiere.


## Cargar la librería wForms


Lo primero será cargar la librería wForms. Para ello, en la cabecera de la página insertaremos el siguiente código:


```html
<script type="text/javascript" src="wforms.js"></script>
```


## Construir el formulario


Empecemos a construir nuestro formulario. Esto es muy sencillo, ya que es un conjunto de campos input y además, para no complicarnos la vida los pondremos de tipo text. Y el checkbox, el cual controlará la condición de mostrar o no.


```html
<form action="#" method="post">
<fieldset>
<legend>Información del usuario</legend>

<label for="nombre">Nombre: </label>
<input type="text" id="nombre"/><br>
<label for="apellido">Apellido: </label>
<input type="text" id="apellido"/><br>

<input id="activar" type="checkbox"/>
<label for="activar">Quiere dejarnos sus datos de la tarjeta</label><br>

<div>
  <label for="tarjeta">Tarjeta: </label>
  <input type="text" id="tarjeta"/><br>
  <label for="fecha-exp">Fecha Expiración: </label>
  <input type="text" id="fecha-exp"/>
</div>

<input type="submit" value="Enviar los datos"/>
</fieldset>
</form>
```


En este caso hay que hacer notar que hemos puesto los datos de la tarjeta dentro de una capa. Ya que este será el elemento que condicionemos. Aunque lo podríamos hacer sobre un elemento en particular del formulario.


## Clases para condicionar


Como casi todo en wForms, condicionar partes de un formulario, funciona mediante clases. Para ello hay que conocer dos:

- **switch-id**, es la clase que se le asigna al elemento controlador. Este elemento tiene que ser un checkbox, radio o un option.
- **onstate-id y offstate-id**, es la clase que se le asigna a los elementos condicionados. Es decir, los que se tienen que mostrar u ocultar. Utilizaremos off u on dependiendo del comportamiento que queramos. Si queremos que al activar el lanzador se oculten usamos off y si queremos que al activar el lanzador se muestren, utilizamos on.

El ID puede ser cualquier identificador que queramos, siempre y cuando coincidan el del switch y el del on/offstate.


De esta forma utilizaremos la clase switch-datos en el checkbox y el offstate-datos sobre la capa. Quedándonos el siguiente código:


```html
<form action="#" method="post">
<fieldset>
<legend>Información del usuario</legend>

<label for="nombre">Nombre: </label>
<input type="text" id="nombre"/><br>
<label for="apellido">Apellido: </label>
<input type="text" id="apellido"/><br>

<input id="activar" type="checkbox" class="switch-datos"/>
<label for="activar">Quiere dejarnos sus datos de la tarjeta</label><br>

<div class="offstate-datos">
  <label for="tarjeta">Tarjeta: </label>
  <input type="text" id="tarjeta"/><br>
  <label for="fecha-exp">Fecha Expiración: </label>
  <input type="text" id="fecha-exp"/>
</div>

<input type="submit" value="Enviar los datos"/>
</fieldset>
</form>
```


## Añadir estilos CSS


Como último paso hay que añadir unos estilos para que se produzca el efecto de ocultar y mostrar. Estos los añadiremos en la cabecera de la página.


```html
<style type="text/css">
.onstate-datos { display: block; }
.offstate-datos { display: none; }
</style>
```


Quizás, el mayor inconveniente que tenemos en el uso de este código es que no es muy accesible, ya que, con un javascript deshabilitado no podríamos tener acceso a los datos ocultados. A las malas podemos ofrecer siempre los campos de la tarjeta y que el checkbox lo que haga sea ocultarlos en vez de mostrarlos.

