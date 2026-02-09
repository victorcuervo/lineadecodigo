---
title: "Hola Mundo en Node.js"
description: "Aprende a crear tu primer servidor web con Node.js. Descubre cómo usar el módulo HTTP para ejecutar JavaScript en el servidor y mostrar Hola Mundo."
date: 2013-03-24
updatedDate: 2026-02-09
tags: ["http","createserver","hola-mundo"]
slug: nodejs/basicos/hola-mundo-en-nodejs
type: doc
topic: nodejs
id: 5557ba61-25a0-4b87-a6e7-930c01866f05
author: carmen_rodrigo
download: https://github.com/victorcuervo/lineadecodigo_nodejs/blob/master/basicos/holamundo-nodejs.js
---

## ¿Qué es Node.js?


Todos conocemos a [Javascript](https://www.manualweb.net/javascript/) como un lenguaje que se ejecuta "en cliente". Aprendimos [Javascript](https://www.manualweb.net/javascript/) para programar y dar dinamismo a nuestras primeras páginas [HTML](https://www.manualweb.net/html/) y se ha convertido en un lenguaje potentísimo orientado a eventos que ha ido evolucionando con colaboraciones de usuarios de librerías como [Modernizr](http://lineadecodigo.com/tag/javascript-modernizr/) o varios frameworks como [jQuery](http://www.manualweb.net/jquery/).


Ahora veremos como utilizar [Javascript](https://www.manualweb.net/javascript/) para hacer un Hola Mundo en [Node.js](http://www.manualweb.net/nodejs/). Y es [Node.js](http://www.manualweb.net/nodejs/) el que nos cambia el concepto. [Node.js](http://www.manualweb.net/nodejs/) es un intérprete de [Javascript](https://www.manualweb.net/javascript/) en el lado servidor, de hecho ejecuta el engine V8 [Javascript](https://www.manualweb.net/javascript/). Ahora podemos ejecutar [Javascript](https://www.manualweb.net/javascript/) fuera del navegador.


REPL es el entorno de depuración interactivo que proporciona Node.js. Lo primero que tenemos que hacer es [descargarnos e instalarnos Node.js](http://nodejs.org/download/).


## Creando el archivo


Ahora veamos cómo escribir fácilmente el código de bienvenida Hola Mundo en [Node.js](http://www.manualweb.net/nodejs/). Para ello lo que haremos sera crear un fichero que se llame HolaMundo.js. Es decir, nuestro Hola Mundo en [Node.js](http://www.manualweb.net/nodejs/) es un fichero Javascript.


Lo que va a hacer el Hola Mundo en [Node.js](http://www.manualweb.net/nodejs/) es crear un servidor web sobre el que ejecutemos el código Javascript.


## Cargando el módulo HTTP


Lo primero será indicar que necesitamos el módulo "http". Para ello lo cargamos mediante el método require.


```javascript
var http = require('http');
```


La variable http es la que nos permite crear el servidor mediante el método .createServer()


```javascript
http.createServer(function (request, response) {
  ...
}).listen(8081);
```


De igual manera el método .listen() nos ayudará a indicar el puerto sobre el que se ejecute el servidor.


## Creando el servidor


El contenido del método .createServer() es una función la cual suelta el contenido a la página web. Es importante indicar una cabecera con un código de retorno 200 de OK. El texto de Hola Mundo lo hacemos mediante el objeto response.


```javascript
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('¡Hola Mundo!\n');
}).listen(8081);
```


## Código completo


El código completo de Hola Mundo en [Node.js](http://www.manualweb.net/nodejs/) será el siguiente:


```javascript
var http = require('http');
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('¡Hola Mundo!\n');
}).listen(8081);

console.log('Servidor ejecutándose en http://127.0.0.1:8081/');
```


## Ejecutando el servidor


Para ejecutar nuestro Hola Mundo en [Node.js](http://www.manualweb.net/nodejs/) utilizaremos el interprete:


```bash
node holamundo.js
```


Ahora se puede ir al navegador web y escribir:


```javascript
http://127.0.0.1:8081/
```


Veremos ¡Hola Mundo! en pantalla. Este mismo ejemplo podría devolver [HTML](https://www.manualweb.net/html/) y el ¡Hola Mundo! en un encabezado <h1> con el estilo que más nos guste. ¿Te atreves?

