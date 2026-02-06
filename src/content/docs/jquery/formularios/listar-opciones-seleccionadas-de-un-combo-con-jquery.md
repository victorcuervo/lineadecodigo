---
title: "Listar opciones seleccionadas de un combo con jQuery"
description: "Descubre cómo listar opciones seleccionadas de un combo con jQuery de forma sencilla y efectiva para mejorar la interacción en tus formularios y atraer a los usuarios."
date: 2011-09-24
updatedDate: 2026-02-06
tags: ["select","change","selected"]
slug: jquery/formularios/listar-opciones-seleccionadas-de-un-combo-con-jquery
type: doc
topic: jquery
id: e530742a-3dc6-4ae8-a37d-2451d1b8c3f3
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_jquery/blob/master/formularios/listar-opciones-seleccionadas.html
---

jQuery nos permite manejar de forma muy sencilla los formularios con un amplio conjunto de métodos. En este caso vamos a ver cómo podemos acceder a la lista de opciones seleccionadas de un combo y mostrarlas por pantalla utilizando la librería [jQuery](http://www.manualweb.net/jquery/).


## Crear el Combo


En primer lugar vamos a pintar el combo (esta vez va de fútbol):


```html
<form id="myform">
  <select id="equipos" multiple="multiple">
    <option selected="selected" value="barça">Barça</option>
    <option value="real madrid">Real Madrid</option>
    <option value="atletico madrid">Atlético Madrid</option>
    <option value="valencia">Valencia CF</option>
    <option selected="selected" value="betis">Real Betis</option>
    <option value="deportivo">Deportivo de la Coruña</option>
  </select>
</form>
```


Si queremos que puedan existir varias opciones seleccionadas dentro del combo deberemos de utilizar el atributo **multiple="multiple"** dentro del select. De igual manera, si queremos prefijar una de las opciones deberemos de utilizar el atributo [selected="selected"](https://www.w3api.com/HTML/option/selected/).


## Manejar el Evento Change


Listaremos las opciones seleccionadas del combo cada vez que haya un cambio en dicho combo. Para ello vamos a manejar el método .change() de [jQuery](http://www.manualweb.net/jquery/). En cada cambio ejecutaremos la función que le digamos al método .change().


```javascript
$(document).ready(function(){
  $("#equipos").change(function(){
    // Código para listar opciones
  });
});
```


## Recorrer las Opciones Seleccionadas


Y ¿qué va a hacer nuestra función? Pues recorrer el elemento select. Pero no todo el elemento select, si no aquellas opciones que estén seleccionadas. Así que vamos a utilizar un selector. El selector será:


```javascript
#equipos option:selected
```


Es decir, del combo o select 'equipos' elige aquellas opciones, u [option](https://www.w3api.com/HTML/option/selected/), que estén seleccionadas, es decir ['selected'](https://www.w3api.com/HTML/option/selected/).


Ahora, de cada opción obtendremos su valor mediante el método .text()


```javascript
$("#equipos option:selected").each(function() {
  texto += $(this).text() + " - ";
});
```


## Mostrar el Resultado


Ya solo nos quedará volcar el contenido en alguna capa de nuestra página. Para ello creamos un elemento [DIV](https://www.w3api.com/HTML/div/) al que llamaremos 'resultado' y al que volcaremos los datos mediante:


```javascript
$("#resultado").text(texto);
```


## Ejecutar al Cargar la Página


Solo nos queda un pequeño detalle. Y es que si hemos puesto campos seleccionados de antemano, si queremos que se ejecute nuestro método .change(), podemos simular el ejecutarlo mediante el método .trigger()


```javascript
$("#equipos").trigger('change');
```


De esta manera tendremos la primera ejecución del .change().


## Código Completo


El código entero nos quedará de la siguiente forma:


```javascript
$(document).ready(function(){
  $("#equipos").change(function(){
    
    var texto = "Opciones Seleccionadas: ";
    $("#equipos option:selected").each(function() {
      texto += $(this).text() + " - ";
    });
    
    $("#resultado").text(texto);
    
  }).trigger('change');
});
```

