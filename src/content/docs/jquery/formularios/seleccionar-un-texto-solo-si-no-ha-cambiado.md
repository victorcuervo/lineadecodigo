---
title: "Seleccionar un texto solo si no ha cambiado"
description: "Aprende a seleccionar un texto solo si no ha cambiado con jQuery y mejora la interacción del usuario en tus formularios de manera efectiva y visual."
date: 2011-10-11
updatedDate: 2026-02-06
tags: ["defaultvalue","value","focus"]
slug: jquery/formularios/seleccionar-un-texto-solo-si-no-ha-cambiado
type: doc
topic: jquery
id: 2c8a9dfb-adca-8185-88f0-e248a318834f
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_jquery/blob/master/formularios/seleccionar-si-no-cambio-el-texto.html
---

Unos cuantos han sido los artículos que le hemos dedicado a la selección de texto con jQuery: [Seleccionar el texto de un campo](http://lineadecodigo.com/jquery/seleccionar-el-texto-de-un-campo/), [Seleccionar texto al posicionarse en un campo](http://lineadecodigo.com/jquery/seleccionar-texto-al-posicionarse-en-un-campo/) y [Detectar el texto seleccionado con jQuery](http://lineadecodigo.com/jquery/detectar-texto-seleccionado-con-jquery/).


Pero no quería dejar de escribir uno que nos va a dar un buen efecto visual y este consiste en **seleccionar un texto solo si este no ha cambiado** con [jQuery](http://www.manualweb.net/jquery/). Es decir, seleccionaremos el texto del campo si sigue siendo el mismo que al cargar la página. Si el usuario ha cambiado el contenido, ya no lo seleccionaremos.


## El Formulario


Manos a la obra... Lo primero el formulario al uso (casi que ya lo imaginas).


```html
<form id="miform">
  <label for="texto">Inserta texto:</label>
  <input id="texto" size="100" type="text" value="Texto por defecto"></input>
  
  <label for="areatexto">Cada vez que pinches en el área de texto se seleccionará. Esto sucederá mientras no cambies el contenido original del mismo.</label>
  <textarea cols="25" id="areatexto" rows="8">Texto por defecto</textarea>
</form>
```


Hay que fijarse bien que hemos puesto los campos [input](https://www.w3api.com/HTML/input/) y [textarea](https://www.w3api.com/HTML/textarea/) con textos por defecto. Será cuando el usuario acceda al campo cuando comprobaremos si ha cambiado el texto.


## Detectar el Focus


Para detectar cuando el usuario accede al campo utilizamos el método [.focus()](https://www.w3api.com/jQuery/focus) de [jQuery](http://www.manualweb.net/jquery/). En este caso vamos a ver cómo sería para el [textarea](https://www.w3api.com/HTML/textarea/).


```javascript
$(document).ready(function(){	
	$("textarea").focus(function(){...});
});
```


## Comparar Valor Actual con Valor por Defecto


Ahora tenemos que diferenciar cómo conseguir el texto que tiene actualmente y el texto que estaba por defecto. El texto actual lo conseguiremos con `.value` y el texto por defecto con `.defaultValue`. 


Así que seleccionaremos el texto, es decir, llamaremos al método [.select()](https://www.w3api.com/jQuery/select) si son iguales.


```javascript
$(document).ready(function(){	
  $("textarea").focus(function(){	    
    if(this.value == this.defaultValue){
      this.select();
    }
  });
});
```


Así ya hemos seleccionado el texto solo si este no ha cambiado.

