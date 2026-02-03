---
title: "Extraer partes de una URL en Javascript"
description: ""
date: 2017-09-21
updatedDate: 2026-01-11
tags: ["url","regexp","array"]
slug: javascript/expresiones-regulares/extraer-partes-de-una-url-en-javascript
author: victor_cuervo
type: doc
id: 6e38ee0d-95ce-4060-813d-42e42beea3fc
download: https://github.com/victorcuervo/lineadecodigo_javascript/blob/master/regexp/extraer-url.js
---

Vamos a utilizar expresiones regulares y [la desestructuración de arrays](http://lineadecodigo.com/javascript/desestructurar-arrays-javascript/) para poder extraer partes de una URL en Javascript de una forma sencilla.


## Definir la URL


Lo primero será tener una cadena que contenga la URL:


```javascript
var url = '[https://www.manualweb.net/java/tipos-datos-primitivos/](https://www.manualweb.net/java/tipos-datos-primitivos/)';
```


## Expresión Regular para analizar la URL


De esta URL vamos a extraer [3 partes](http://www.manualweb.net/html/introduccion-world-wide-web/): la primera será el protocolo de la URL, segunda será el nombre del servidor y la tercera el path dentro del servidor. La expresión regular que nos va a ayudar a analizar la URL será la siguiente:


```javascript
var regexp = /(\w+):\/\/([^\/]+)\/([^]+)/;
```


Los grupos que queramos extraer serán aquellos que van entre paréntesis. Para ello indicamos que nos extraiga cualquier palabra antes del :// para obtener el protocolo, esto lo haremos mediante el código `(\w+)`, todo lo que vaya hasta la primera barra `/` será el nombre del servidor, como el nombre del servidor puede tener números, letras, guiones, puntos,... indicaremos que será cualquier carácter hasta la barra: `([^\/]+)`. La parte final, que podrá tener cualquier carácter será la que nos deje el path: `([^]+)`.


## Ejecutar la expresión regular


Tras ejecutar esta expresión regular mediante el comando `.exec()`:


```javascript
var partes = regexp.exec(url);
```


Veremos que la salida es un array de la siguiente forma:


```javascript
[ '[https://www.manualweb.net/java/tipos-datos-primitivos/](https://www.manualweb.net/java/tipos-datos-primitivos/)', 
  'https', 
  '[www.manualweb.net](http://www.manualweb.net/)', 
  '/java/tipos-datos-primitivos/', 
  index: 0, 
  input: '[https://www.manualweb.net/java/tipos-datos-primitivos/](https://www.manualweb.net/java/tipos-datos-primitivos/)' ]
```


## Desestructurar el array


Veremos que obviando la primera posición, en las siguientes tenemos los datos que vamos buscando. Es por ello que mediante la desestructuración del array en [Javascript](https://www.manualweb.net/javascript/) vamos a obtener estas variables:


```javascript
var [,protocolo, servidor, path] = partes;
```


## Utilizar las variables


Estas variables las podemos analizar y utilizar de forma separada dentro de nuestro código fuente:


```javascript
console.log("Protocolo: " + protocolo);
console.log("Servidor: " + servidor);
console.log("Path: " + path);
```


De esta forma tan sencilla hemos conseguido extraer partes de una URL en [Javascript](https://www.manualweb.net/javascript/).

