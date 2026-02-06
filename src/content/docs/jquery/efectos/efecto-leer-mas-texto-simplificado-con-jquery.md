---
title: "Efecto leer más texto simplificado con jQuery"
description: "Aprende a implementar el efecto leer más texto simplificado con jQuery y mejora la interactividad de tu sitio web de forma eficiente y atractiva."
date: 2012-01-06
updatedDate: 2026-02-06
tags: ["toogle","text","show","hide"]
slug: jquery/efectos/efecto-leer-mas-texto-simplificado-con-jquery
type: doc
topic: jquery
id: 2c8a9dfb-adca-8135-a6ba-f5d83804aa40
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_jquery/blob/master/efectos/mas-texto-2.html
---

El otro día veíamos como poder generar un efecto leer más texto con jQuery sobre un texto que no tenía estructura predefinida y que se encontraba dentro de un DIV. Hoy vamos a ver como simplificar este ejemplo si tenemos la estructura del texto predefinida. Con lo que nos quedará un efecto leer más texto simplificado.


## Estructurar el Texto con SPAN


Y es que si podemos estructurar el texto sobre el que queremos realizar el efecto sería bueno que lo insertásemos en capas **SPAN**. En concreto en tres capas SPAN:

- **summary**: con el texto de resumen
- **complete**: con el resto del texto
- **more**: con el texto "leer más"

Es importante que utilicemos elementos SPAN ya que estos son inline y se mostrarán todos seguidos, sin saltos y darán uniformidad al texto.


## Código HTML de la Estructura


La estructura quedará de la siguiente forma:


```html
<span class="summary">
	<p>Lorem ipsum dolor sit amet, vis alterum feugiat sanctus ea. Affert facete eu cum, ut dicta vitae quo. Cum id aeque option epicuri, nec oblique suscipit ad. Et sea odio adhuc altera. Verterem nominati an mel, his diam consetetur ei. Eligendi principes sed no, ubique patrioque vix cu, soluta veritus percipit vim ex.</p>
</span>
<span class="complete">
	<p>Pro populo dolorem eu. Justo conclusionemque sea ne. At dicat putent eum. Reprimique delicatissimi vel et.</p>
	<p>Posse constituam pro eu. Sit graecis appetere at, id his quas possit platonem, ius at nobis decore ullamcorper. Vix ne latine iudicabit constituto, justo fastidii eleifend et pro, ei sit solet dicant mediocrem. Te sit cibo percipit persecuti. Debet convenire suavitate ei vis. Pri utinam labitur temporibus ex.</p>
</span>			
<span class="more">Leer mas...</span>
```


## Código jQuery Simplificado


El código jQuery se quedará simplificado ya que solo tendremos que controlar el **.toggle()** sobre el elemento "more". Es decir, el cambio de estado de este elemento.


```javascript
$(document).ready(function(){		
	$(".more").toggle(function() {
	    $(this).text("Leer menos...").siblings(".complete").show();
	}, function() {
	    $(this).text("Leer mas...").siblings(".complete").hide();
	});	
});
```


## Métodos jQuery Utilizados


En cada uno de los cambios de texto realizamos las tres acciones apoyadas en los métodos:

- **.text()**: para cambiar el texto del elemento "more"
- **.siblings()**: para ir a por el elemento hermano "complete"
- **.show()** / **.hide()**: para ocultar o mostrar el texto

Vemos que con la estructuración predefinida de la página se nos simplifica mucho el código jQuery ya que nos evitamos la reestructuración del contenido "al vuelo" con jQuery.

