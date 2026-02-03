---
title: "Crear una base de datos en MongoDB"
description: "Aprende a crear una base de datos en MongoDB de forma sencilla. Inserta datos y consulta colecciones para dominar esta potente herramienta de manera efectiva."
date: 2013-06-15
updatedDate: 2026-01-28
tags: ["db","save"]
slug: mongodb/basicos/crear-una-base-de-datos-en-mongodb
author: victor_cuervo
type: doc
topic: mongodb
id: 4271698b-8284-473b-8762-9c4a3b627550
download: https://github.com/victorcuervo/lineadecodigo/blob/master/lineadecodigo_mongodb/mongodb-basicos/crear-db.js
---

Si ya has leido el primer artículo con el [Hola Mundo en MongoDB](http://lineadecodigo.com/mongodb/hola-mundo-con-mongodb/) estarás ansioso de crear tu primeros códigos con MongoDB 😉


Lo primero que vamos a realizar es crear una base de datos en [MongoDB](https://www.manualweb.net/mongodb/).


## No existe un método createDB


Lo mas normal es que pensásemos que para crear una base de datos en [MongoDB](https://www.manualweb.net/mongodb/) existiría un método del estilo createDB o createDataBase o... algo por el estilo. Pues la cuestión es que en [MongoDB](https://www.manualweb.net/mongodb/) no existe esta función.


[MongoDB](https://www.manualweb.net/mongodb/) no permite crear una base de datos por comandos, si no que la crea en el preciso momento en el cual insertamos un elemento dentro de una colección.


## Seleccionar la base de datos con use


Asi, lo primero que haremos será seleccionar la base de datos que queremos crear en [MongoDB](https://www.manualweb.net/mongodb/). Para ello utilizamos la sentencia `use`. Vamos a crear una base de datos con datos demográficos de España.


```javascript
use demografia
```


## Insertar un elemento en la colección


Lo siguiente será insertar un elemento dentro de la colección de Comunidades Autonomas (si no conoces España podríamos identificarlo como regiones u estados):


```javascript
db.comunidades.save({comunidad:'Madrid'})
```


En este momento hemos creado una colección comunidades con un registo y por consiguiente la base de datos 'demografia'.


## Consultar el contenido


Si examinamos el contenido de comunidades:


```javascript
db.comunidades.find()
```


Obtendremos o siguiente:


```javascript
{ "_id" : ObjectId("51bcc8986fba2c81d4e8a1d6"), "comunidad" : "Madrid" }
```


Vemos que los pasos para crear una base de datos en [MongoDB](https://www.manualweb.net/mongodb/) son sencillos, aunque no directos 😄

