---
title: "Buscar en la lista"
description: "Crear una lista de elementos en HTML y poder buscar en la lista utilizando lenguaje Javascript."
date: 2008-02-04
updatedDate: 2026-01-11
tags: ["form","select","array","regexp"]
slug: javascript/arrays/buscar-en-la-lista
author: victor_cuervo
type: doc
id: 05ba0bb1-4035-4d85-9b4b-37331fb3aa42
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/formularios/buscar-en-lista.html
---

La idea de este ejemplo es realizar una búsqueda sobre un listado de datos (presente en una lista de un formulario) partiendo de una entrada que va el usuario tecleando paulatinamente. 


Por ejemplo, si partimos del siguiente listado de deportes:


```html
Atletismo
Baloncesto
Fútbol
Natación
Tenis
```


Si el usuario teclea una **A** o **a** debería filtrar por todos aquellos deportes que empiecen por dicha letra, quedándonos:


```html
Atletismo
```


Si posteriormente el usuario teclea una **E** o **e**, se filtraría por aquellos deportes que empezasen por **AE**, quedándonos:


```html
Aerobic
```


## Estructura HTML


Por un lado, en la parte gráfica, utilizaremos un simple formulario [HTML](https://www.manualweb.net/html/) con un campo [input](https://www.w3api.com/HTML/input/) y una [lista select](https://www.w3api.com/HTML/select/).


```html
<form id="formulario" name="formulario">
  <label for="busca">Buscar:</label>
  <input id="busca" name="busca" onkeyup="buscar();" type="text"></input>
  
  <label for="miCombo">Listado:</label>
  <select id="miCombo" name="miCombo" size="8"></select>
</form>
```


## Almacenamiento de Datos


Por otro lado, los datos van a ir en la lista y los almacenaremos en un [array](https://www.w3api.com/Javascript/Array/) para su fácil manejo:


```javascript
var aDatos = new Array("Atletismo", "Balonmano", "Baloncesto", "Fútbol", "Natación", "Tenis", "Voleibol");
```


## Carga Inicial del Combo


Para cargar los datos del array en el combo del formulario utilizaremos el evento **onLoad** de arranque de la página, el cual recorrerá el array creando objetos del tipo **OPTION** que son válidos para ser introducidos en la lista del formulario.


El [onLoad](https://www.w3api.com/HTML/tag/evento-html/):


```html
<body onload="cargar();">
```


Y la carga del combo vía Javascript:


```javascript
function cargar() {
  combo = document.getElementById("miCombo");
  for (x=0;x<aDatos.length;x++) {
    opcion = document.createElement("OPTION");
    opcion.value = aDatos[x];
    opcion.text = aDatos[x];
    combo.options.add(opcion);
  }
}
```


## Filtrado de Datos


La verdadera "chicha" del ejemplo está en realizar el filtrado de datos. Para ello nos valdremos de las **expresiones regulares** que permiten buscar cadenas que empiecen por un conjunto de letras. En este caso, el conjunto de letras que componen la cadena a buscar es el texto introducido en el formulario:


```javascript
var cadena = document.formulario.busca.value;
var expReg = new RegExp("^" + cadena,"i");
```


En este caso estamos buscando expresiones regulares que empiecen por las letras de la cadena a buscar. Para indicar el principio de una cadena en una expresión regular nos servimos del carácter **^**.


Una vez que hemos conformado la expresión regular, deberemos recorrer el array en busca de las opciones que cumplan dicho criterio. Para validar la expresión regular utilizaremos su método **test**. Aquellas opciones que sean válidas serán introducidas en el combo (partiendo de la premisa de que en cada búsqueda limpiamos por completo los datos del combo).


```javascript
function buscar() {
  var cadena = document.formulario.busca.value;
  var expReg = new RegExp("^" + cadena,"i");
  
  combo = document.getElementById("miCombo");
  combo.options.length = 0;
  
  for (x=0;x<aDatos.length;x++) {
    if (aDatos[x].match(expReg)) {
      opcion = document.createElement("OPTION");
      opcion.value = aDatos[x];
      opcion.text = aDatos[x];
      combo.options.add(opcion);
    }
  }
}
```


Todo este proceso será lanzado cada vez que el usuario pulse una tecla, evento que detectamos con [onKeyUp](https://www.w3api.com/HTML/input/) sobre el [campo input del formulario](https://www.w3api.com/HTML/input/).


```html
<input id="busca" name="busca" onkeyup="buscar();" type="text">
```

