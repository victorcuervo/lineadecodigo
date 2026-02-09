---
title: "Parámetros POST con Node.js y Express"
description: "Aprende a enviar parámetros POST con Node.js y Express. Descubre cómo usar body-parser para capturar datos de formularios en el cuerpo de peticiones."
date: 2015-08-15
updatedDate: 2026-02-09
tags: ["body-parser","express","get","post"]
slug: nodejs/basicos/parametros-post-con-nodejs-y-express
type: doc
topic: nodejs
id: 4ec42521-acc5-4cd1-8d1f-c5cc99cd320c
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_nodejs/blob/master/express/parametro-post.js
---

Los parámetros POST son aquellos que se envían desde la página web al servidor sin que sean visibles en la URL. En el ejemplo de hoy vamos a ver como podemos pasar parámetros POST con [Node.js](http://www.manualweb.net/nodejs/) y Express.


Lo primero que deberemos de conocer es que los parámetros POST no se envían en la URL si no que se envían en el cuerpo de la petición. Siendo el tipo de petición recibida por los servidores como `application/x-www-form-urlencoded`. Si bien el formato de los parámetros es el mismo que el utilizado por los parámetros GET.


```javascript
parametro1=valor1&parametro2=valor2
```


En el caso de Express se cuenta con **un middleware llamado body-parser el cual nos ayudará a acceder al contenido del cuerpo de los mensajes**.


## Instalar body-parser


Para instalar el **middleware body-parser** en nuestra aplicación lo hacemos mediante npm.


```bash
$ npm install body-parser
```


## Cargar los middleware


Es por ello que lo primero que haremos será cargar los **middleware express y body-parser**.


```javascript
var express = require('express');
var body_parser = require('body-parser');
```


Definimos la aplicación Express:


```javascript
var app = express();
```


Y hacemos uso del middleware body-parser:


```javascript
app.use(body_parser.urlencoded({extended:true}));
```


Esto será la inicialización de los middleware que vamos a utilizar.


## Crear las rutas


Pero luego deberemos de crear el código. Para ello vamos a utilizar la ruta "/saludo" para manejar las peticiones. Dentro de esta ruta vamos a utilizar las peticiones GET para pintar el formulario que nos haga la petición POST y la petición POST para recuperar los parámetros.


Mediante el método `.get` vamos a atender a las peticiones GET:


```javascript
var formulario = '<form action="/saludo" method="post">'
    + '<label for="nombre">¿Cómo te llamas?</label>'
    + '<input id="nombre" name="nombre" type="text"></input>'
    + '<input type="submit" value="Enviar"></input>'
    + '</form>';

var cabecera = '<h1>Saludo</h1>';

app.get('/saludo', function (req, res) {
    res.send(''
        + cabecera
        + formulario
        + ''
    );
});
```


Vemos que el método get recibe dos parámetros con la request y la response. Sobre el elemento response devolvemos el contenido de la respuesta, en este caso el formulario. Formulario que envía los parámetros (en este caso el parámetro nombre) mediante el método POST.


## Capturar los parámetros POST


Para conformar la petición POST vamos a utilizar el método `.post`


```javascript
app.post('/saludo', function (req, res) {
	
	var nombre = req.body.nombre || '';
	var saludo = '';
	
	if (nombre != '')
		saludo = "Hola " + nombre;
	
	res.send(''
			+ cabecera
			+ '<p>' + saludo + '</p>'
			+ formulario
			+ ''
	);

});
```


Lo que vemos en el método post es que utilizamos el **middleware body-parser** para recuperar el valor del parámetro enviado por POST. La estructura para acceder a las variables será:


```javascript
req.body.nombrevariable
```


En este caso como queremos acceder a la variable nombre utilizamos:


```javascript
var nombre = req.body.nombre || '';
```


El operador OR nos servirá para asignar un valor vacío en el caso de que no llegue el parámetro.


Al igual que sucedía en el método `.get` vamos a utilizar el elemento response para devolver el contenido. En el cual ponemos el saludo y volvemos a incluir el formulario.


## Arrancar el servidor


Ya solo nos quedará arrancar el servidor para poder ejecutar la prueba de enviar parámetros POST con [Node.js](http://www.manualweb.net/nodejs/) y Express


```javascript
var server = app.listen(8000, function () {
	  console.log('Servidor ejecutandose en localhost:8000');
});
```


De esta manera vemos lo sencillo que es enviar parámetros POST con [Node.js](http://www.manualweb.net/nodejs/) y Express.

