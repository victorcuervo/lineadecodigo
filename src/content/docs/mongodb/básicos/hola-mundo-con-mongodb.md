---
title: "Hola Mundo con MongoDB"
description: "Hola Mundo con MongoDB nos muestra como hacer nuestras primeras consultas sobre la base de datos NOSQL MongoDB."
date: 2013-03-23
updatedDate: 2026-01-28
tags: ["hola-mundo","find","db"]
slug: mongodb/basicos/hola-mundo-con-mongodb
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo/blob/master/lineadecodigo_mongodb/mongodb-basicos/holamundo-mongodb.js
topic: mongodb



---

Para empezar a utilizar una base de datos NOSQL como es [MongoDB](https://www.manualweb.net/mongodb/) no hay mejor manera de ver como hacer un Hola Mundo con [MongoDB](https://www.manualweb.net/mongodb/).


En el caso de las bases de datos el Hola Mundo es algo más complejo que los programas. Es por ello que nuestro Hola Mundo con [MongoDB](https://www.manualweb.net/mongodb/) lo que hace es insertar un saludo "Hola Mundo" en un idioma y recuperarlo por consola.


## Arrancar la consola de MongoDB


Lo primero que tendremos que hacer para empezar con nuestro Hola Mundo con [MongoDB](https://www.manualweb.net/mongodb/) es arrancar la consola de comandos de [MongoDB](https://www.manualweb.net/mongodb/).


```javascript
./mongo
```


## Crear la base de datos


Una vez conectados a la consola vamos a indicar qué base de datos queremos utilizar. No hace falta que la **base de datos** exista, así que la podemos poner un nombre. Por ejemplo "mensajes". Así pasamos a utilizar nuestra **base de datos** [**MongoDB**](https://www.manualweb.net/mongodb/) "mensajes" de la siguiente forma:


```javascript
use mensajes
```


## Insertar un documento en la colección


Dentro de las bases de datos [MongoDB](https://www.manualweb.net/mongodb/) existe otro concepto que son las **colecciones**. Algo parecido a las tablas en un modelo de datos entidad-relación. Así que insertaremos un mensaje dentro de la colección que queramos crear (tampoco tiene por qué existir la colección).


Para insertar un elemento utilizamos la sentencia insert de [MongoDB](https://www.manualweb.net/mongodb/):


```javascript
db.holamundo.insert({idioma:"es_ES",mensaje:"Hola Mundo"});
```


Es importante saber que [MongoDB](https://www.manualweb.net/mongodb/) utiliza JSON como elementos de mensaje almacenados. No hay tablas, no hay campos, no hay registros,.. solo mensajes JSON. Así que nuestro objeto JSON insertado ha sido el siguiente:


```javascript
{idioma:"es_ES",mensaje:"Hola Mundo"}
```


## Consultar la colección


Ahora solo nos queda mostrar el contenido de la colección. La cual contiene nuestro Hola Mundo con [MongoDB](https://www.manualweb.net/mongodb/). Las consultas se ejecutan mediante la sentencia `.find()`. De esta manera el código es el siguiente:


```javascript
db.holamundo.find()
```


La respuesta de [MongoDB](https://www.manualweb.net/mongodb/) será la siguiente:


```javascript
{ "_id" : ObjectId("514db54174ad901293bd844a"), "idioma" : "es_ES", "mensaje" : "Hola Mundo" }
```


De esta forma tenemos nuestros primeros pasos y el Hola Mundo con [MongoDB](https://www.manualweb.net/mongodb/). ¿Cómo mostrarias el mensaje Hola Mundo en inglés? :-D

