---
title: "Parámetros GET con Node.js y Express"
description: "Aprende a capturar parámetros GET con Node.js y Express. Descubre cómo usar req.query para obtener valores de formularios y URLs en tu aplicación."
date: 2015-08-01
updatedDate: 2026-02-09
tags: ["express","get","send"]
slug: nodejs/express/parametros-get-con-nodejs-y-express
type: doc
topic: nodejs
id: ad0b09e0-2577-42bd-87e1-46bbadb22535
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_nodejs/blob/master/express/parametro-get.js
---

En este ejemplo vamos a ver como podemos recuperar parámetros GET con [Node.js](http://www.manualweb.net/nodejs/) y Express. Hay que recordar que los parámetros GET son aquellos que se envían mediante la url en un formato de pares clave/valor y después de la URL. Lo que vendría a ser:


```javascript
http://miurl.com?p1=A&p2=B
```


Para ello vamos a construir un programa con [Node.js](http://www.manualweb.net/nodejs/) y Express que nos cree un servidor. Este servidor atenderá a una ruta la cual nos mostrará un formulario que nos pedirá nuestro nombre. Este formulario volverá a llamar a la misma ruta enviando el parámetro mediante GET. Será de esta forma como podamos ver que hay que hacer para capturar parámetros GET con [Node.js](http://www.manualweb.net/nodejs/) y Express.


## Instalar Express


Lo primero será instalar Express si no lo tienes ya instalado. Para ello vamos a utilizar npm.


```bash
npm install express
```


Esto permitirá que podamos tener los módulos de Express y construir apoyándonos sobre este framework.


## Incluir Express


En nuestro programa [Node.js](http://www.manualweb.net/nodejs/) que llamaremos parametros-get.js lo primero que haremos será incluir el framework Express mediante el método require e instanciarlo:


```javascript
var express = require('express');
var app = express();
```


## Crear la ruta


Lo siguiente será crear una ruta en la que vamos a poner nuestro formulario y nuestra obtención de parámetros por GET.


```javascript
app.get('/saludo', function (req, res) {
});
```


Por defecto **la ruta /saludo** nos mostrará un formulario el cual nos pida el nombre. La ruta la construimos mediante el método app.get().


```javascript
app.get('/saludo', function (req, res) {
	
	res.send(''
		      + '<h1>Saludo</h1>'
		      + '<form action="/saludo" method="get">'
		      + '<label for="nombre">¿Cómo te llamas?</label>'
		      + '<input id="nombre" name="nombre" type="text"></input>'
		      + '<input type="submit" value="Enviar"></input>'
		      + '</form>'
		      + '');
});
```


Vemos que el formulario lo estamos montando dinámicamente enviando el texto al navegador mediante el método .send(). De igual manera podemos observar el destino del formulario es la misma ruta. Por lo cual al principio del método es dónde comprobaremos si se envía el parámetro por GET.


## Capturar el parámetro GET


A la hora de acceder al parámetro GET utilizamos el objeto req.query seguido del nombre que tenía el parámetro en el formulario (el nombre definido mediante el atributo name).


```javascript
req.query.atributo;
```


Así nuestro método app.get empezaría de la siguiente forma:


```javascript
app.get('/saludo', function (req, res) {

	var nombre = req.query.nombre || '';	

});
```


Utilizamos el operador lógico || para asignarle un valor por defecto. Es decir, en el caso de que no llegue el parámetro nombre vía GET asignamos a la variable nombre un valor vacío.


## Código completo


Si insertamos este código dentro del método nos quedará entero de la siguiente forma:


```javascript
app.get('/saludo', function (req, res) {

	var nombre = req.query.nombre || '';
	var saludo = '';
	
	if (nombre != '')
		saludo = "Hola " + nombre;
	
	res.send(''
		      + '<h1>Saludo</h1>'
		      + '<p>' + saludo + '</p>'
		      + '<form action="/saludo" method="get">'
		      + '<label for="nombre">¿Cómo te llamas?</label>'
		      + '<input id="nombre" name="nombre" type="text"></input>'
		      + '<input type="submit" value="Enviar"></input>'
		      + '</form>'
		      + '');
});
```


De esta forma podemos capturar parámetros GET con [Node.js](http://www.manualweb.net/nodejs/) y Express. ¿Cómo harías para capturar un segundo parámetro? ¿Te atreves a probarlo y contárnoslo en los comentarios?

