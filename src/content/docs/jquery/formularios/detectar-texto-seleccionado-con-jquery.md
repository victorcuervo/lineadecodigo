---
title: "Detectar texto seleccionado con jQuery"
description: "Aprende a detectar texto seleccionado con jQuery y mejora la interactividad de tus formularios. Implementa fácilmente esta función en tu sitio web."
date: 2011-09-20
updatedDate: 2026-02-06
tags: ["select","html"]
slug: jquery/formularios/detectar-texto-seleccionado-con-jquery
type: doc
topic: jquery
id: ccc9b41e-e8c4-42d2-97c5-1f7e36c334a8
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_jquery/blob/master/formularios/obtener-texto-seleccionado.html
---

## Campos de entrada con textarea


Cuando ponemos campos de entrada en nuestras páginas web, el usuario podrá seleccionar parte del texto que haya en dichos campos. Vamos a ver como detectar el texto seleccionado utilizando [jQuery](http://www.manualweb.net/jquery/). Lo primero será poner un [textarea](https://www.w3api.com/HTML/textarea/) con un texto de ejemplo:


```html
<form id="miform">
  <textarea cols="100" id="texto" rows="20">Lorem ipsum dolor sit amet...</textarea>
</form>
```


## Cargar la librería jQuery


Para utilizar [jQuery](http://www.manualweb.net/jquery/) tendremos que cargar la librería de [jQuery](http://www.manualweb.net/jquery/):


```html
<script src="jquery.js" type="text/javascript"></script>
```


## Método .select() de jQuery


El método de [jQuery](http://www.manualweb.net/jquery/) que nos ayudará a detectar el texto seleccionado es [.select()](https://www.w3api.com/jQuery/.select/%20%22método%20jQuery%20select()"). Este método habrá que asignarlo al elemento de la página sobre el que queremos detectar el texto seleccionado. En nuestro código el [textarea](https://www.w3api.com/HTML/textarea/) 'texto'.


```javascript
$("#texto").select(function(){
  ...
});
```


## Recuperar el texto seleccionado


El contenido que ha sido seleccionado se puede recuperar mediante el método [.getSelection()](https://www.w3api.com/DOM/.getSelection()) de [Javascript](https://www.manualweb.net/javascript/). Así que solo tendremos que ejecutar este método y volcarlo sobre la pantalla.


```javascript
$("#texto").select(function(){
  selectedText = document.getSelection();
  $("#resultado").html("Se ha seleccionado el texto " + selectedText);
});
```


Para volcarlo en pantalla utilizamos el método [.html()](https://www.w3api.com/jQuery/.html/%20%22método%20jquery%20html%22) sobre una capa.

