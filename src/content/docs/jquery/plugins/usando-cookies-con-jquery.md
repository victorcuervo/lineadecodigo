---
title: "Usando cookies con jQuery"
description: "Descubre cómo usar cookies con jQuery para guardar el estado de visualización de un texto oculto y mejorar la experiencia del usuario en tu web."
date: 2009-12-28
updatedDate: 2026-02-06
tags: ["cookies","cookie"]
slug: jquery/plugins/usando-cookies-con-jquery
type: doc
topic: jquery
id: 2c8a9dfb-adca-818c-899a-c38a7fa51d00
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_jquery/blob/master/cookies/utilizar-cookies-con-jquery.html
---

En este ejemplo vamos a ver cómo crear cookies con [jQuery](http://www.manualweb.net/jquery/). Para ello almacenaremos información sobre una acción del usuario, que será si le gusta el texto oculto o no. De esta manera, cuando vuelva a visitarnos ya sabremos cómo le tenemos que mostrar el texto.


Lo primero que tenemos que saber es que [jQuery](http://www.manualweb.net/jquery/) no nos ofrece un API directo para el manejo de cookies. Es por ello que nos tendremos que apoyar en un plugin. En este caso será el [plugin Cookie](http://plugins.jquery.com/project/Cookie).


Nos podemos descargar el [plugin Cookie](http://plugins.jquery.com/project/Cookie) desde [http://plugins.jquery.com/files/jquery.cookie.js.txt](http://plugins.jquery.com/files/jquery.cookie.js.txt)


## Cargar jQuery y el Plugin


En la parte inicial de nuestra página tenemos que cargar [jQuery](http://www.manualweb.net/jquery/) como el plugin. Para ello utilizaremos las siguientes líneas de código:


```html
<script src="jquery-1.2.6.js" type="text/javascript"></script>
<script src="jquery.cookie.js" type="text/javascript"></script>
```


## Ocultar y Mostrar Elementos


Como hemos comentado que la actividad que trazaremos a la cookie va a ser la ocultación o no de texto, crearemos el código necesario para esta actividad. Puedes ver la explicación de este código en [Ocultar y mostrar elementos con jQuery](http://lineadecodigo.com/jquery/ocultar-y-mostrar-elementos-con-jquery/). Pero básicamente consistirá en el manejo de las funciones de [jQuery](http://www.manualweb.net/jquery/): `.hide()` y `.show()`.


El texto:


```html
<div id="msgid1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a nunc. Ut ac purus. Mauris tempor, arcu aliquam pulvinar</div>
```


El código para mostrar y ocultar:


```javascript
$("#ocultar").click(function(){$("#msgid1").hide("slow")});
$("#mostrar").click(function(){$("#msgid1").show("slow")});
```


## Recuperar el Valor de la Cookie


Ahora nos ponemos con la cookie. La variable de la cookie en la que guardaremos la información se llamará "texto" y le asignaremos los valores show o hide. Así, lo primero que haremos es cargar la cookie y ver el valor de la misma. Ya que si el usuario ya ha visitado la página dejaremos el contenido de la misma tal cual lo dejó la última vez.


```javascript
<script type="text/javascript">
// Recuperamos el valor de la cookie
var texto = $.cookie('texto');
if (texto=='hide')
	$("#msgid1").hide();
</script>
```


Esta parte del código habrá que ponerla al final de la página, ya que lo que hace es recuperar el valor de la cookie y en el caso de que el valor sea "hide" ocultar el contenido del texto. Y es por ello por lo que necesita que el texto ya se haya cargado en la página.


Vemos que el acceso a la cookie es muy sencillo. Simplemente utilizamos la estructura:


```javascript
var texto = $.cookie('nombre_cookie');
```


## Asignar un Valor a la Cookie


Para asignar un valor a la cookie simplemente tendremos que utilizar un segundo parámetro con el valor a asignar a la cookie.


```javascript
$.cookie('nombre_cookie','valor');
```


La modificación del contenido de la cookie lo haremos cada vez que el usuario modifique la visualización u ocultación del texto. Así ese código quedará de la siguiente forma:


```javascript
<script type="text/javascript">
$(document).ready(function(){
 $("#ocultar").click(function(){
  $("#msgid1").hide("slow");
  $.cookie('texto','hide');
 });
 
$("#mostrar").click(function(){
  $("#msgid1").show("slow");
  $.cookie('texto','show');
 });
}); 
</script>
```


Vemos que a la cookie 'texto' le asignamos los valores 'hide' o 'show'.

