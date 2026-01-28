---
title: "MongoDB Projection - Seleccionar campos de un documento"
description: "Descubre cómo realizar MongoDB Projection y selecciona solo los campos necesarios en tus consultas, optimizando tus resultados de manera eficiente."
date: 2014-02-08
updatedDate: 2026-01-28
tags: ["find","projection","id"]
slug: mongodb/crud/mongodb-projection-seleccionar-campos-de-un-documento
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo/blob/master/lineadecodigo_mongodb/mongodb-crud/projection.js
topic: mongodb


---

Si realizamos una [consulta MongoDB Find](http://lineadecodigo.com/mongodb/consultas-con-mongodb-find/) lo que retornara dicha consulta es el conjunto de documentos que correspondan a dicha consulta. Se devolverán los documentos completos con todos sus campos. Si bien podemos realizar **MongoDB Projection**, que es seleccionar los campos de un documento que queremos devuelva la consulta.


## Sintaxis del MongoDB Projection


Para especificar el [MongoDB](https://www.manualweb.net/mongodb/) Projection dentro del método `.find()` deberemos de hacerlo como último parámetro del método. La sintaxis para el [MongoDB](https://www.manualweb.net/mongodb/) Projection será la siguiente:


```javascript
db.coleccion.find({filtros},{projection});
```


Asumiento que ya sabes realizar filtros... o [échale un ojo a nuestros ejemplos del método MongoDB Find](http://lineadecodigo.com/tag/mongodb-find).


## Cómo seleccionar campos


Vamos a revisar como se haría el [MongoDB](https://www.manualweb.net/mongodb/) Projection. Si queremos seleccionar varios campos simplemente tenemos que indicar el nombre del campo seguido de un 1. O bien utilizar un 0 para eliminar los campos a mostrar.


```javascript
db.coleccion.find({filtros},{campo1:0|1,campo2:0|1,...,campoN:0|1});
```


## Ejemplo con colección de ciudades


De esta forma en nuestra colección de ciudades:


```javascript
{ "_id" : ObjectId("525ab02733b01a66a9dcbc5b"), "ciudad" : "Madrid", "habitantes" : 3233527 }
{ "_id" : ObjectId("525ab02733b01a66a9dcbc5c"), "ciudad" : "Barcelona", "habitantes" : 1620943 }
{ "_id" : ObjectId("525ab02733b01a66a9dcbc5d"), "ciudad" : "Valencia", "habitantes" : 797028 }
{ "_id" : ObjectId("525ab02733b01a66a9dcbc5e"), "ciudad" : "Sevilla", "habitantes" : 702355 }
{ "_id" : ObjectId("525ab02733b01a66a9dcbc5f"), "ciudad" : "Zaragoza", "habitantes" : 679624 }
```


Si queremos mostrar solo el nombre de la ciudad, ejecutaremos la siguiente consulta:


```javascript
cursor = db.ciudades.find({habitantes:{$gt:1000000}},{ciudad:1});
```


Curiosamente el resultado será el siguiente:


```javascript
{ "_id" : ObjectId("525ab02733b01a66a9dcbc5b"), "ciudad" : "Madrid" }
{ "_id" : ObjectId("525ab02733b01a66a9dcbc5c"), "ciudad" : "Barcelona" }
```


Vaya, queríamos mostrar solo la ciudad y resulta que nos muestra también el ObjectID.


> En MongoDB Projection el campo ObjectID se mostrará siempre a no ser que indiquemos que no se tiene que mostrar.


## Eliminar el campo _id


Así que para eliminar el ObjectID tendremos que ejecutar la siguiente consulta:


```javascript
cursor = db.ciudades.find({habitantes:{$gt:1000000}},{ciudad:1,_id:0});
```


Podemos conseguir el mismo efecto de devolver solo el nombre de la ciudad si eliminamos la aparición del campo habitantes, es decir, asignándole un 0 en el [MongoDB](https://www.manualweb.net/mongodb/) Projection.


```javascript
cursor = db.ciudades.find({habitantes:{$gt:1000000}},{habitantes:0,_id:0});
```


Ya hemos visto como manipular de forma sencilla los campos a mostrar en la consulta mediante el [MongoDB](https://www.manualweb.net/mongodb/) Projection.

