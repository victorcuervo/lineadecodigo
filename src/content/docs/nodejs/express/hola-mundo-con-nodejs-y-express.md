---
title: "Hola Mundo con Node.js y Express"
description: "Crea tu primer servidor web con Node.js y Express. Aprende a manejar peticiones GET, responder con texto y arrancar el servidor en el puerto 3000."
date: 2015-07-09
updatedDate: 2026-02-09
tags: ["get","send","express","hola-mundo"]
slug: nodejs/express/hola-mundo-con-nodejs-y-express
type: doc
topic: nodejs
id: 9459003f-f7bd-446c-84bf-d3ad1f275b56
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_nodejs/blob/master/express/helloworld-express.js
---

Express es un framework para [Node.js](http://www.manualweb.net/nodejs/) que nos facilita tanto la creación de aplicaciones web tradicionales como de aplicaciones que expongan un API REST, todo de una forma sencilla.


En este ejemplo vamos a ver como podemos crear un programa Hola Mundo con [Node.js](http://www.manualweb.net/nodejs/) y Express.


## Instalando Express


Lo primero que tenemos que hacer para crear el programa Hola Mundo con [Node.js](http://www.manualweb.net/nodejs/) y Express es descargarnos el framework de Express. Para ello nos vamos a apoyar en el gestor de módulos npm que viene con [Node.js](http://www.manualweb.net/nodejs/).


```bash
npm init
npm install express --save
```


## Cargando Express


Una vez que nos hemos descargado el paquete Express pasamos a codificar nuestro programa [Node.js](http://www.manualweb.net/nodejs/). Lo primero que haremos será cargar el paquete mediante el método require.


```javascript
var express = require('express');
```


Y crear un objeto de tipo express:


```javascript
var app = express();
```


Este objeto app será el que nos permita ir creando una aplicación que conteste a peticiones http y a la postre crear un programa Hola Mundo con [Node.js](http://www.manualweb.net/nodejs/) y Express.


## Atendiendo peticiones GET


El framework Express nos proporciona un método .get el cual interceptará las peticiones http de tipo GET que se hagan sobre el servidor. Sobre el método .get hay que indicar qué ruta vamos a escuchar.


```javascript
app.get('/', function () {});
app.get('/saludo', function () {});
app.get('/peticion/saludo', function () {});
```


En este código hemos visto como podemos escuchar las peticiones desde la raíz del servidor hasta cualquier ruta (o directorio).


El segundo parámetro del método .get es la función de callback que atenderá la petición. Esta función de callback recibe dos objetos req y res que contienen la información de la request (o petición) y el response (o respuesta). Es decir si queremos obtener información sobre los datos que vayan en la petición accederemos a la request y para devolver una información al clientes utilizaremos el response.


```javascript
app.get('/', function (req, res) {
  // Código
});
```


## Respondiendo con Hola Mundo


En nuestro programa de Hola Mundo con [Node.js](http://www.manualweb.net/nodejs/) y Express vamos a responder un texto con "Hola Mundo". Para ello utilizamos el método .send al cual le pasaremos dicho texto.


```javascript
app.get('/', function (req, res) {
  res.send('Hola Mundo');
});
```


## Arrancando el servidor


Una vez configurado el método que acepta peticiones y devuelve la información (nuestro saludo de "Hola Mundo") ahora vamos a arrancar el servidor. Para arrancar el servidor lo que vamos a utilizar es el método .listen, el cual recibe como parámetro el puerto sobre el que queremos escuchar y la función de callback.


```javascript
var server = app.listen(3000, function () {
  console.log('Servidor ejecutandose en localhost:3000');
});
```


## Ejecutando la aplicación


Todo este código lo guardaremos en un fichero .js, que en este caso hemos llamado "hellowordl-express.js". Así que solo nos quedará ejecutarlo mediante [Node.js](http://www.manualweb.net/nodejs/).


```bash
node helloworld-express.js
```


De esta forma ya tendremos un servidor levantado, escuchando en el puerto 3000 y que implementa un programa Hola Mundo con [Node.js](http://www.manualweb.net/nodejs/) y Express. Así que podremos poner en un navegador:


```javascript
http://localhost:3000/
```

