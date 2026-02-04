---
title: "Convertir una cadena a fecha en Javascript"
description: "Explicación del proceso que nos permite convertir una cadena a fecha en Javascript."
date: 2012-01-29
updatedDate: 2026-01-11
tags: ["date","eventos","addeventlistener","preventdefault"]
slug: javascript/fechas/convertir-una-cadena-a-fecha-en-javascript
type: doc
topic: javascript
id: e32925cd-1768-4aaf-a977-3c24907e9802
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/basicos/convertir-cadena-texto-a-date.html
---

En este ejemplo vamos a ver cómo podemos convertir una cadena a una fecha, es decir un elemento `Date`, en [Javascript](https://www.manualweb.net/javascript/). A primeras parece que es algo tan trivial como pasárselo en la inicialización. Pero veremos que tenemos ciertas restricciones. 


Y es que en el fondo, sí, podemos escribir la siguiente línea de código:


```javascript
var fecha = new Date("cadena_de_texto");
```


Pero, ¿qué podemos utilizar como cadena de texto? Lo que podemos utilizar es todo aquello que podamos analizar mediante el método `.parse()` del objeto `Date`.


```javascript
Date.parse("cadena_de_texto");
```


## Formatos de fecha soportados


Y si miramos qué soporta el método `.parse()` veremos que el texto que le pasemos tiene que estar en formato [RFC822](http://tools.ietf.org/html/rfc822) o [ISO 8601](http://www.w3.org/TR/NOTE-datetime). Así el método nos devolverá los milisegundos desde el 1 de enero de 1970. 


Si no te apetece leerte que dicen los estándares [RFC822](http://tools.ietf.org/html/rfc822) y [ISO 8601](http://www.w3.org/TR/NOTE-datetime) te lo resumiremos en que tienen que ser fechas en formato:


```javascript
YYYY-MM-DD
MM/DD/YYYY
Mon DD YYYY
```


Y formatos similares. Así el 4 de febrero del 2012 podría declararse como:


```javascript
var fecha = new Date("2012-02-04");
var fecha = new Date("02/04/2012");
var fecha = new Date("Feb 04 2012");
```


## Crear el formulario


Nosotros, para evitar formateos adicionales vamos a montar la fecha por nuestra cuenta, así que utilizaremos un formulario para pedirle al usuario los datos. El formulario será el siguiente:


```html
<form>
  <label for="dia">
    <input id="dia" size="2" type="text" value="01"></input>
  </label>/
  <label for="mes">
    <input id="mes" size="2" type="text" value="02"></input>
  </label>/
  <label for="annio">
    <input id="annio" size="4" type="text" value="2012"></input>
  </label>
  <button id="calcular">Calcular Fecha</button>
</form>
```


## Controlar el evento del botón


Y ahora, controlando el evento de pulsar sobre el botón, es decir, utilizando un `addEventListener()`:


```javascript
document.getElementById("calcular").addEventListener("click", function(event) {
  // código del manejador
});
```


Vamos a componer nuestra fecha. Obtenemos los valores del formulario y componemos la fecha en formato `yyyy-mm-dd`:


```javascript
var dia = document.getElementById("dia").value;
var mes = document.getElementById("mes").value;
var annio = document.getElementById("annio").value;

var cadenaFecha = annio + "-" + mes + "-" + dia;
```


Lo siguiente será parsearla y crear una fecha (aunque podríamos haber hecho solo lo segundo):


```javascript
var milisegundos = Date.parse(cadenaFecha);
var fecha = new Date(cadenaFecha);
```


Por último volcamos el contenido del `Date` a un campo y bloqueamos que se lance el evento del botón con `.preventDefault()` para poder ver el resultado y no enviar el formulario.


```javascript
document.getElementById("resultado").innerHTML = "La fecha es: " + fecha;
event.preventDefault();
```


## Código completo


El código entero del manejador quedaría de la siguiente forma:


```javascript
document.getElementById("calcular").addEventListener("click", function(event) {
  var dia = document.getElementById("dia").value;
  var mes = document.getElementById("mes").value;
  var annio = document.getElementById("annio").value;
  
  var cadenaFecha = annio + "-" + mes + "-" + dia;
  
  var milisegundos = Date.parse(cadenaFecha);
  var fecha = new Date(cadenaFecha);
  
  document.getElementById("resultado").innerHTML = "La fecha es: " + fecha;
  event.preventDefault();
});
```

