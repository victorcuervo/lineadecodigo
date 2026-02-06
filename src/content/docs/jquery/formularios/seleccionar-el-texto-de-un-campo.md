---
title: "Seleccionar el texto de un campo"
description: "Aprende a seleccionar el texto de un campo con jQuery y mejora la experiencia del usuario en tus formularios de manera sencilla y efectiva."
date: 2011-09-21
updatedDate: 2026-02-06
tags: ["select","textarea"]
slug: jquery/formularios/seleccionar-el-texto-de-un-campo
type: doc
topic: jquery
id: eede8e46-9438-4617-8805-f302c321c2cb
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_jquery/blob/master/formularios/seleccionar-campo-formulario.html
---

Seleccionar el texto de un campo nos posibilita guiar al usuario de nuestra web en la edición de textos. La idea es dejarle un campo marcado dentro del formulario. Para ello nos vamos a apoyar en [jQuery](http://www.manualweb.net/jquery/).


## El Formulario


Lo primero es poner el formulario. Nada complicado si sabes [HTML](https://www.manualweb.net/html/):


```html
<form id="miform">
  <label for="texto">Inserta texto:</label>
  <input id="texto" size="100" type="text" value="Texto por defecto"></input>
  
  <textarea id="areatexto">Texto por defecto</textarea>
  
  <button id="selectall">Seleccionar todo el texto</button>
</form>
```


## Cargar jQuery


Ahora, y tras haber cargado nuestra librería [jQuery](http://www.manualweb.net/jquery/):


```html
<script src="jquery.js" type="text/javascript"></script>
```


## Seleccionar el Texto de un Campo


Nos apoyamos en el método [.select()](https://www.w3api.com/jQuery/select) para aplicarlo a un campo. Por ejemplo, si queremos seleccionar el texto del campo con [id](https://www.w3api.com/HTML/id/) 'texto' tendremos que codificar lo siguiente:


```javascript
$("#texto").select();
```


## Seleccionar Todo al Hacer Click


Otra opción es hacerlo bajo demanda. Lo que viene a ser el típico botón de "Seleccionar Todo". Que en nuestro caso hemos representado con un [elemento button](https://www.w3api.com/HTML/button/).


En [jQuery](http://www.manualweb.net/jquery/) conseguiremos capturar el click sobre el botón con el método [.click()](https://www.w3api.com/jQuery/click). Así el código quedará de la siguiente forma:


```javascript
$("#selectall").click( function(){
  $("#areatexto").select();
  return false;
});
```


Hay que tener en cuenta dos cosas:

- Para acceder a los id de los elementos utilizamos una almohadilla (#) delante del nombre.
- Al final del [.click()](https://www.w3api.com/jQuery/click) hemos utilizado un `return false` para parar el evento generado por el botón.

Ya hemos visto dos formas muy sencillas de seleccionar el texto de un campo. ¿Se te ocurre otra forma?

