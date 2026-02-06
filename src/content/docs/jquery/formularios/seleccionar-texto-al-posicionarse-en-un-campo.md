---
title: "Seleccionar texto al posicionarse en un campo"
description: "Aprende a seleccionar texto al posicionarse en un campo con jQuery y mejora la interacción en tus formularios. ¡Optimiza la experiencia del usuario ahora!"
date: 2011-09-23
updatedDate: 2026-02-06
tags: ["focus","input","select"]
slug: jquery/formularios/seleccionar-texto-al-posicionarse-en-un-campo
type: doc
topic: jquery
id: 3194f01c-2768-4b7c-aaa8-9925fd49473a
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_jquery/blob/master/formularios/seleccionar-texto-al-posicionar-en-campo.html
---

Si [el otro día vimos cómo seleccionar el texto de un campo (por defecto o mediante un click del usuario)](http://lineadecodigo.com/jquery/seleccionar-el-texto-de-un-campo/), hoy vamos a ver cómo **seleccionar texto al posicionarse en un campo** con [jQuery](http://www.manualweb.net/jquery/).


Es decir, al ir moviéndonos por los campos y llegar al determinado campo seleccionaremos el texto. Controlar el posicionarse en un campo lo podremos hacer mediante el método [.focus()](https://www.w3api.com/jQuery/focus) de jQuery.


## El Formulario


Pero lo primero, el formulario. Como siempre, algo simple:


```html
<form id="miform">
  <label for="texto">Inserta texto:</label>
  <input id="texto" size="100" type="text" value="Texto por defecto"></input>
  
  <label for="texto2">Inserta texto:</label>
  <input id="texto2" size="100" type="text" value="Texto por defecto 2"></input>
</form>
```


## Aplicar el Selector


Como la selección del texto al posicionarse en un campo lo vamos a aplicar a todos los [campos input](https://www.w3api.com/HTML/input/) (de tipo text) vamos a utilizar un selector.


```css
input[type=text]
```


Así que el método [.focus()](https://www.w3api.com/jQuery/focus) se quedará de la siguiente forma:


```javascript
$("input[type=text]").focus(function(){ ... });
```


## Seleccionar el Texto


Ya solo nos quedará realizar la selección del campo de texto mediante el método [.select()](https://www.w3api.com/jQuery/select) de [jQuery](http://www.manualweb.net/jquery/).


```javascript
$("input[type=text]").focus(function(){	   
  this.select();
});
```

