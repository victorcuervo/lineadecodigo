---
title: "Aplicar opacidad con jQuery"
description: "Aprende a aplicar opacidad con jQuery de forma sencilla y efectiva. Cambia la visibilidad de tus imágenes y mejora la interactividad de tus páginas web."
date: 2012-04-02
updatedDate: 2026-02-06
tags: ["css","opacity"]
slug: jquery/efectos/aplicar-opacidad-con-jquery
type: doc
topic: jquery
id: 86c7590f-3703-41b1-a625-6c8b29c21cbc
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_jquery/blob/master/efectos/cambiar-opacidad.html
---

jQuery nos permite modificar la opacidad de los elementos con una gran facilidad. Ya lo vimos haciendo un efecto de Fade.


Pero ahora vamos a algo más sencillo: simplemente vamos a aplicar un cambio de opacidad de una imagen con jQuery.


## Crear la Imagen y el Enlace


La idea será partir de una imagen y un enlace que nos permita aplicar la opacidad:


```html
<img src="contenido.png" alt="logo" id="logo"/>
<br>
<a href="#" id="opacidad">Opacidad</a>
```


## Capturar el Evento Click


Lo siguiente será capturar el evento click sobre ese enlace:


```javascript
$(document).ready(function(){
	$("#opacidad").click(function(e){				
		//Código de cambio de opacidad		
	});	
});
```


## Modificar la Propiedad CSS Opacity


Y es que será en el evento click donde aplicaremos el cambio de opacidad. El cambio de opacidad se consigue modificando la propiedad opacity de CSS. Para ello vamos a utilizar el método .css de jQuery:


```javascript
$("#logo").css("opacity", 0.2);
```


## Valores de Opacidad


Es importante saber que los valores de la opacidad varían entre 0.0 y 1.0.


Ahora, cuando pulsemos sobre el enlace, aplicaremos la opacidad sobre la imagen habiendo utilizado jQuery.

