---
title: "Crear una colección en MongoDB"
description: "Aprende a crear una colección en MongoDB fácilmente con el comando createCollection y optimiza la gestión de tus datos de manera eficiente."
date: 2013-06-25
updatedDate: 2026-01-28
tags: ["createcollection","db"]
slug: mongodb/basicos/crear-una-coleccion-en-mongodb
author: victor_cuervo
type: doc
topic: mongodb
id: 82728374-3ee5-4f58-b431-279a5b508bfd
download: https://github.com/victorcuervo/lineadecodigo/blob/master/lineadecodigo_mongodb/mongodb-basicos/crear-coleccion.js
---

Ya vimos en nuestro ejemplo de [crear una base de datos en MongoDB](http://lineadecodigo.com/mongodb/crear-una-base-de-datos-en-mongodb/) que al crear una colección en [MongoDB](https://www.manualweb.net/mongodb/) de manera indirecta estábamos creando una base de datos.


Pero existe otra forma de crear una colección en [MongoDB](https://www.manualweb.net/mongodb/) y esta es mediante el comando `createCollection`.


## Uso del comando createCollection


El uso del comando `createCollection` es muy sencillo ya que simplemente tendremos que dar el nombre de la colección a crear. Pero vamos por pasos.


## Conexión a la base de datos


Lo primero será conectarnos a la base de datos de [MongoDB](https://www.manualweb.net/mongodb/).


```javascript
conn = new Mongo();
db = conn.getDB("foo");
```


En concreto nos conectamos a una base de datos mediante `getDB`. En este caso nos hemos conectado a una base de datos que se llama "foo".


## Crear la colección


Ahora es cuándo tenemos que crear la colección. El método `createCollection` que nos ayuda a crear una colección en [MongoDB](https://www.manualweb.net/mongodb/) se ejecutará sobre el objeto `db`.


```javascript
db.createCollection('test');
```


Vemos que el nombre de la colección "test" se lo hemos pasado como parámetro.


## Opciones del método createCollection


El método `createColeccion` nos permite indicar características a la hora de crear una colección en MongoDB, así podremos indicar si queremos que la colección preserve el orden de las inserciones mediante una Capped Collection y su tamaño máximo.


Así podríamos utilizar el método `createCollection` de la siguiente manera:


```javascript
db.createCollection("log", { capped : true, size : 5242880, max : 5000 });
```


Espero que os haya sido de utilizar el conocer como crear una colección en [MongoDB](https://www.manualweb.net/mongodb/).

