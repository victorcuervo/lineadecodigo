---
title: "Contar checkbox activos con JavaScript"
description: "Explicación de una forma sencilla del código fuente que nos ayuda a contar checkbox activos con JavaScript."
date: 2008-02-08
updatedDate: 2026-01-11
tags: ["checkbox","form","getelementbyid","onclick","checked","array","formulario","eventos"]
slug: dom/formularios/contar-checkbox-activos-con-javascript
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/formularios/contar-checkbox-activos.html
topic: dom

---

Acceder a la información almacenada en [el DOM de nuestra página](https://www.w3api.com/DOM/) nos sirve para llevar a cabo ejemplos como este. En este caso, el ejemplo consiste en contar los **checkbox** que hay seleccionados dentro de un **formulario**. Un caso práctico será el controlar que el usuario ha marcado un número de opciones en concreto dentro de un formulario. Es decir, que si no ha seleccionado más de 3 opciones, no pueda enviar el formulario. En nuestro caso vamos a tener un formulario con 10 checkbox y un botón.


## Estructura HTML del formulario


```html
<form action="" id="form1" method="post">
  <input id="chk1" name="checkbox" type="checkbox"></input>
  <label for="chk1">CheckBox 1</label>
  
  <input id="chk2" name="checkbox" type="checkbox"></input>
  <label for="chk2">CheckBox 2</label>
  
  <input id="chk3" name="checkbox" type="checkbox"></input>
  <label for="chk3">CheckBox 3</label>
  
  <input id="chk4" name="checkbox" type="checkbox"></input>
  <label for="chk4">CheckBox 4</label>
  
  <input id="chk5" name="checkbox" type="checkbox"></input>
  <label for="chk5">CheckBox 5</label>
  
  <input id="chk6" name="checkbox" type="checkbox"></input>
  <label for="chk6">CheckBox 6</label>
  
  <input id="chk7" name="checkbox" type="checkbox"></input>
  <label for="chk7">CheckBox 7</label>
  
  <input id="chk8" name="checkbox" type="checkbox"></input>
  <label for="chk8">CheckBox 8</label>
  
  <input id="chk9" name="checkbox" type="checkbox"></input>
  <label for="chk9">CheckBox 9</label>
  
  <input id="chk10" name="checkbox" type="checkbox"></input>
  <label for="chk10">CheckBox 10</label>
  
  <input name="Submit" type="button" value="Contar"></input>
</form>
```


## Capturar el evento onClick


La idea es que cuando pulsemos el botón ejecutaremos una función que contabilice los checkbox pulsados. Para ello deberemos de capturar el [evento onClick](https://www.w3api.com/HTML/onclick/%20%22Evento%20HTML%20onClick%22).


```html
<input name="Submit" type="button" value="Contar" onclick="contar()"></input>
```


## Función para contar checkbox


En la función `contar()` recorreremos los checkbox del formulario. Es muy importante que pongamos el mismo **nombre** a todos los checkbox del formulario. En nuestro caso los hemos llamado `"checkbox"`:


```javascript
function contar() {
  var formulario = document.getElementById('form1');
  var checkboxes = formulario.checkbox;
```


Para obtener el **array de checkbox** utilizamos [la función getElementById](https://www.w3api.com/DOM/.getElementById()) para acceder al formulario y de este obtenemos la propiedad `checkbox`.


```javascript
var cont = 0;
for (var i = 0; i < checkboxes.length; i++) {
  if (checkboxes[i].checked) {
    cont++;
  }
}
```


Ahora solo nos queda recorrer el array e ir contabilizando aquellos checkbox cuya propiedad `checked` esté a `true`. Para ello nos apoyamos en una variable contador, la cual inicializaremos a cero.


```javascript
  alert('Tienes ' + cont + ' checkbox seleccionados');
}
```


Finalmente solo nos faltará sacar por pantalla la variable `cont`.

