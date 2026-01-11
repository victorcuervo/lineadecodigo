---
title: "Campos obligatorios en JavaScript"
description: "Como conseguir realizar un código fuente que fuerze a tener campos obligatorios en JavaScript."
date: 2008-04-17
updatedDate: 2026-01-11
tags: ["Javascript DOM","Javascript DOM getElementById","Javascript DOM getElementsByName"]
slug: javascript/campos-obligatorios-en-javascript
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/formularios/campos-obligatorios.html
topic: javascript

---

La obligatoriedad de los campos del formulario dependerá del tipo de campo que estemos utilizando. Así, la obligatoriedad de un campo de texto puede ser desde que tenga algún valor, hasta que su formato sea uno específico. Si hablamos de campos de selección o en un combo puede ser que esté alguna de las opciones marcada. Así con todos los tipos de elementos del formulario.


## Crear el formulario HTML


Lo primero que vamos a hacer para explicar el ejemplo va a ser construir un simple formulario:


```html
<form id="formulario">
  <label for="nombre">Nombre:</label>
  <input id="nombre" type="text">

<label for="email">E-Mail:</label><input id="email" type="text"></input>

Deporte favorito: <input id="futbol" name="deporte" type="checkbox" value="futbol"></input><label for="futbol">Futbol</label> <input id="baloncesto" name="deporte" type="checkbox" value="baloncesto"></input><label for="baloncesto">Baloncesto</label> <input id="atletismo" name="deporte" type="checkbox" value="atletismo"></input><label for="atletismo">Atletismo</label>

<button onclick="validar();">Validar</button></form>
```


```text
<form id="formulario"><label for="nombre">Nombre:</label><input id="nombre" type="text"></input>

  <label for="email">E-Mail:</label>
  <input id="email" type="text">

  Deporte favorito:
  <input id="futbol" name="deporte" type="checkbox" value="futbol">
  <label for="futbol">Futbol</label>
  <input id="baloncesto" name="deporte" type="checkbox" value="baloncesto">
  <label for="baloncesto">Baloncesto</label>
  <input id="atletismo" name="deporte" type="checkbox" value="atletismo">
  <label for="atletismo">Atletismo</label>

  <button onclick="validar();">Validar</button>
</form>
```


## Validar campos de texto


Vemos que el botón de validación llama a la función `validar()`. Dentro de esta función dispondremos todos los controles de obligatoriedad de los campos. El primer control de obligatoriedad es el de los campos de texto. Para ello accedemos directamente a la colección de los elementos del formulario mediante `.elements`.


```javascript
var elementos = document.getElementById('formulario').elements;
```


Hay que tener en cuenta que esto nos devuelve todos los elementos. Es decir, en nuestro caso 6 elementos. Los dos campos de texto, las 3 opciones y el botón. Como solo nos interesan los campos de texto, lo que vamos a hacer es filtrar por aquellos elementos que sean del tipo `"text"`.


```javascript
for (var i = 0; i < elementos.length; i++) {
  if (elementos[i].type == "text") {
    // Validar campo de texto
  }
}
```


Si el campo es de texto y está vacío le sacamos un error avisándole y terminamos la ejecución del método mediante un `return false`.


```javascript
if (elementos[i].value == "") {
  alert("El campo " + elementos[i].id + " no puede estar vacío");
  return false;
}
```


## Validar campos de opciones


Lo siguiente que vamos a validar son los campos de opciones. En este caso vamos a acceder por nombre mediante el método `getElementsByName`. Ya que todos los elementos tienen el name `"deporte"`.


```javascript
var deportes = document.getElementsByName('deporte');
```


Lo que nos interesa es encontrar alguno que esté seleccionado. Es por ello que haremos un bucle cuya condición de salida sea el haber recorrido todos los elementos o haber encontrado alguno marcado.


```javascript
var marcado = false;
for (var i = 0; i < deportes.length && !marcado; i++) {
  if (deportes[i].checked) {
    marcado = true;
  }
}

```


```text

if (!marcado) {
  alert("Debe seleccionar al menos un deporte");
  return false;
}
```

