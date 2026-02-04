---
title: "Función con parámetros variables en Javascript"
description: "Cómo crear una función con parámetros variables en Javascript."
date: 2010-09-06
updatedDate: 2026-01-13
tags: ["function","arguments"]
slug: javascript/funciones/funcion-con-parametros-variables-en-javascript
type: doc
topic: javascript
id: 5246ead5-284a-49cd-8f5f-fd992837dcd0
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/basicos/funcion-argumentos-variables.html
---

Una función, en toda su definición básica tiene varias partes: nombre, parámetros y el cuerpo.


```javascript
function nombre(parametro1, parametro2, parametro3) {
  // cuerpo de la función
}
```


Como podemos ver, todo y cada uno de los parámetros que le pasamos están bien definidos como argumentos. Pero en [Javascript](https://www.manualweb.net/javascript/) tenemos la posibilidad de que los parámetros de la función sean variables, es decir, que podamos invocarla con más o menos parámetros, con unos u otros parámetros, dependiendo de la situación.


## Invocaciones con diferentes parámetros


La idea sería poder tener las siguientes invocaciones de la función:


```javascript
suma(1, 2);
suma(1, 2, 3);
suma(1, 2, 3, 4);
```


Como vemos, la cantidad de números varía en cada invocación. Incluso podríamos realizar la siguiente invocación:


```javascript
suma(1, "cadena", true);
```


En este caso estamos invocando con parámetros de diferente tipo: entero, cadena y booleano.


## Casos de uso


Un caso de uso es cuando queramos realizar validaciones sobre una estructura de datos sobre la cual el usuario puede añadir mas o menos registros. Por ejemplo, un formulario al cual vamos añadiendo más campos de forma dinámica.


## El objeto arguments


Pero vamos a ver como codificar la función. Para poder tener parámetros variables nos apoyamos en el elemento **arguments**. Toda función tiene un objeto **arguments** el cual representa un array com los valores de los argumentos los cuales fueron pasados en la invocación.


Así, una función que simplemente listase los parámetros que se le han pasado como argumentos sería la siguiente:


```javascript
function listarArgumentos() {
  for (var i = 0; i < arguments.length; i++) {
    document.write(arguments[i] + "<br>");
  }
}
```


Una vez controlado el objeto **arguments**, las posibilidades son infinitas. ¿Qué caso de uso se te ocurre para codificar una función con parámetros variables?

