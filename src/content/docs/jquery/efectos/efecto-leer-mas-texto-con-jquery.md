---
title: "Efecto leer más texto con jQuery"
description: "Descubre cómo implementar el efecto leer más texto con jQuery y mejora la interacción de tu sitio web con un código sencillo y efectivo."
date: 2012-01-04
updatedDate: 2026-02-06
tags: ["toogle","siblings","text","show","hide"]
slug: jquery/efectos/efecto-leer-mas-texto-con-jquery
type: doc
topic: jquery
id: 8b8657d8-b0f1-4581-88ab-e6281088d354
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_jquery/blob/master/efectos/mas-texto.html
---

En el ejemplo de hoy vamos a ver como podemos codificar el **efecto leer más texto** con [jQuery](http://www.manualweb.net/jquery/). La idea es tener un texto del cual solo mostraremos su contenido inicial y un enlace que indique "leer más". Al pulsar sobre el enlace "leer más" se mostrará el contenido completo del texto.


Seguro que habéis visto el efecto leer más texto en muchas web, como por ejemplo en los comentarios de [YouTube](http://www.youtube.com/).


## Estructura HTML del Texto


Lo primero será poner el texto en nuestra página. El texto será completo y se encontrará dentro de una capa [DIV](https://www.w3api.com/HTML/div/).


```html
<div class="comentario">
	Lorem ipsum dolor sit amet, vis alterum feugiat sanctus ea. Affert facete eu cum, ut dicta vitae quo. Cum id aeque option epicuri, nec oblique suscipit ad. Et sea odio adhuc altera. Verterem nominati an mel, his diam consetetur ei. Eligendi principes sed no, ubique patrioque vix cu, soluta veritus percipit vim ex.<br>
	Pro populo dolorem eu. Justo conclusionemque sea ne. At dicat putent eum. Reprimique delicatissimi vel et.<br>
	Posse constituam pro eu. Sit graecis appetere at, id his quas possit platonem, ius at nobis decore ullamcorper. Vix ne latine iudicabit constituto, justo fastidii eleifend et pro, ei sit solet dicant mediocrem. Te sit cibo percipit persecuti. Debet convenire suavitate ei vis. Pri utinam labitur temporibus ex.
</div>
```


Siempre que utilicemos [jQuery](http://www.manualweb.net/jquery/) es bueno el utilizar clases o indicadores para acceder a los elementos. En este caso hemos utilizado la clase "comentario" para identificar claramente nuestro texto.


## Definir los Caracteres a Mostrar


Ahora ya vamos con nuestro código [jQuery](http://www.manualweb.net/jquery/), el cual colocaremos en la cabecera de nuestra página dentro del método `.ready()`.


> El método `.ready()` se ejecuta una vez que se ha cargado toda la página, asegurando así la consistencia de nuestro código a la hora de acceder a los elementos.


Lo primero que hacemos es establecer el número de caracteres que se previsualizarán y extraeremos la subcadena que representan del contenido del texto. El contenido nos lo dará el método `.html()` sobre la capa "comentario" y la subcadena la conseguimos mediante el método [Javascript](https://www.manualweb.net/javascript/) `.substr()`.


```javascript
var caracteresAMostrar = 300;
var contenido = $(".comentario").html();
		
if (contenido.length > caracteresAMostrar) {
  var resumen = contenido.substr(0, caracteresAMostrar);
  var todo = contenido.substr(caracteresAMostrar, contenido.length - caracteresAMostrar);				
}
```


En la variable **resumen** dejamos el resumen de texto a mostrar, mientras que en la variable **todo** dejamos el resto del contenido.


## Reestructurar el Contenido


Ahora, con estos textos vamos a modificar la estructura de la página. En la nueva estructuración crearemos dentro del [DIV](https://www.w3api.com/HTML/div/) el texto, un [SPAN](https://www.w3api.com/HTML/span/) donde tendremos el resto del texto y otro [SPAN](https://www.w3api.com/HTML/span/) con la frase "Leer Más".


```javascript
var nuevocontenido = resumen + '<span class="complete">' + todo + '</span><br><span class="more">Leer mas...</span>';
$(".comentario").html(nuevocontenido);
```


El código [jQuery](http://www.manualweb.net/jquery/) de esta parte queda de la siguiente forma:


```javascript
var caracteresAMostrar = 300;
var contenido = $(".comentario").html();
		
if (contenido.length > caracteresAMostrar) {
  var resumen = contenido.substr(0, caracteresAMostrar);
  var todo = contenido.substr(caracteresAMostrar, contenido.length - caracteresAMostrar);

  var nuevocontenido = resumen + '<span class="complete">' + todo + '</span><br><span class="more">Leer mas...</span>';
  $(".comentario").html(nuevocontenido);				
}
```


## Implementar el Efecto Toggle


Ahora tenemos que codificar el efecto leer más texto en [jQuery](http://www.manualweb.net/jquery/). Si pinchamos sobre "leer más" habrá que hacer visible la parte definida como "complete" y poner un texto "leer menos". Y si pulsamos sobre "leer menos" realizaremos el efecto contrario: esconder "complete" y poner el texto "leer más".


Como estamos hablando de un cambio de estado de un elemento, nos apoyaremos en el método `.toggle()`, el cual efectúa una acción u otra cada vez que pulsemos sobre el elemento.


```javascript
$(".more").toggle(function() {
    $(this).text("Leer menos...").siblings(".complete").show();
}, function() {
    $(this).text("Leer mas...").siblings(".complete").hide();
});
```


## Métodos jQuery Utilizados


Vemos que utilizamos varios métodos de [jQuery](http://www.manualweb.net/jquery/):

- `.text()` - nos permite cambiar el texto del elemento por "leer menos" o "leer más"
- **`.`**`siblings()` - nos permite acceder a los elementos que están en nuestra misma estructura del DOM
- `.show()` - muestra el contenido del elemento
- `.hide()` - oculta el contenido del elemento

Con esto ya tenemos todo nuestro código [jQuery](http://www.manualweb.net/jquery/) y el efecto leer más texto conseguido.

