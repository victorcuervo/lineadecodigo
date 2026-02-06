---
title: "Cargar un fichero con jQuery"
description: "Descubre cómo cargar un fichero con jQuery de forma dinámica y mejora la interactividad de tu sitio web con técnicas AJAX innovadoras y efectivas."
date: 2009-01-25
updatedDate: 2026-02-06
tags: ["load","click"]
slug: jquery/ajax/cargar-un-fichero-con-jquery
type: doc
topic: jquery
id: 5fe810c9-1df2-4592-b37d-7766a2e058d5
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_jquery/tree/master/ajax/cargar-fichero-dinamicamente
---

Ya están lejos los tiempos donde un sitio de Internet estaba compuesto solo por páginas estáticas HTML. Ahora la mayoría se componen en los servidores, mezclando información, ficheros, datos almacenados. Si bien podemos tener la necesidad de tener dinamismo en la carga de datos de la parte cliente. Para ello, jQuery nos dará la capacidad de cargar un fichero de forma dinámica.


## Crear el Fichero HTML de Test


Lo primero que tenemos que hacer es crear un fichero HTML de test. Este lo llamaremos `test.html`.


## Cargar la Librería jQuery


Ahora pasamos a crear la página que nos permite cargar un fichero con jQuery. En esta, lo primero que vamos a hacer es cargar la librería jQuery:


```html
<script src="jquery.js" type="text/javascript"></script>
```


## Utilizar la Función Ready


Como en la mayoría de las ocasiones utilizamos la función `ready` para esperar que se cargue la página. Dentro de la función `ready` será donde insertemos nuestro código jQuery:


```javascript
$(document).ready(function(){
  $("#carga").click(function() {
    // Código
  });
});
```


## Asociar al Evento Click


Vemos que el código que nos va a permitir cargar un fichero con jQuery se lo asociaremos al evento `click` de un elemento que llevará el ID `carga`. Por ejemplo, pondremos un botón:


```html
<button id="carga">Cargar fichero</button>
```


## Crear la Capa de Destino


Además añadiremos una capa, a la cual daremos el ID `texto`, sobre la cual cargaremos el fichero HTML:


```html
<div id="texto"></div>
```


## Usar el Método .load()


Ya solo nos quedará cargar el fichero. Para ello utilizamos la función `.load()`, a la cual pasamos el nombre del fichero a cargar. En nuestro caso el fichero `test.html`:


```javascript
$("#carga").click(function() {
  $("div#texto").load("test.html");
});
```

