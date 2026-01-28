---
title: "Consultas MongoDB con límite de documentos"
description: "Optimiza tus consultas MongoDB con límite de documentos para mejorar el tiempo de respuesta. Aprende a limitar resultados y mejora el rendimiento de tus consultas."
date: 2014-02-01
updatedDate: 2026-01-28
tags: ["find","limit","cursor","hasnext"]
slug: mongodb/consultas/consultas-mongodb-con-limite-de-documentos
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo/blob/master/lineadecodigo_mongodb/mongodb-crud/find-limit.js
topic: mongodb



---

Cuando estamos realizando consultas en [MongoDB](https://www.manualweb.net/mongodb/) podemos tener la necesidad de establecer un límite en el número de documentos a devolver. En este artículo vamos a ver como podemos realizar consultas [MongoDB](https://www.manualweb.net/mongodb/) con límite de documentos.


## Consulta básica con find()


Lo primero que repasaremos será la forma de [realizar una consulta mediante el método .find()](http://lineadecodigo.com/mongodb/consultas-con-mongodb-find/):


```javascript
cursor = db.ciudades.find();

while (cursor.hasNext()) {
 printjson(cursor.next());
}
```


El método `find()` se lanza sobre la colección que queremos consultar. En el caso del ejemplo sobre la colección ciudades. [Dentro del método .find podemos establecer los filtros que necesitemos para realizar la consulta.](http://lineadecodigo.com/mongodb/filtrar-datos-en-mongodb/)


Cuando el cursor recorra todos los datos de la colección devolverá todos aquellos que contemplen el filtro. Si no ponemos nada, nos devuelve todos.


## Estructura de la colección


Así, si tenemos la colección ciudades como:


```javascript
{
	"_id" : ObjectId("525ab02733b01a66a9dcbc5b"),
	"ciudad" : "Madrid",
	"habitantes" : 3233527
}
{
	"_id" : ObjectId("525ab02733b01a66a9dcbc5c"),
	"ciudad" : "Barcelona",
	"habitantes" : 1620943
}
{
	"_id" : ObjectId("525ab02733b01a66a9dcbc5d"),
	"ciudad" : "Valencia",
	"habitantes" : 797028
}
{
	"_id" : ObjectId("525ab02733b01a66a9dcbc5e"),
	"ciudad" : "Sevilla",
	"habitantes" : 702355
}
{
	"_id" : ObjectId("525ab02733b01a66a9dcbc5f"),
	"ciudad" : "Zaragoza",
	"habitantes" : 679624
}
```


Nos devolverá todos esos documentos.


## Uso del método limit()


Para realizar consultas [MongoDB](https://www.manualweb.net/mongodb/) con límite de documentos utilizaremos el método `limit()`. El método `limit()` tiene como parámetro el número de documentos a los que queremos limitar la respuesta.


Es decir, que aunque haya más documentos que cumplen la condición, solo se devolverán tantos como indique el parámetro de `limit()`.


El código será el siguiente:


```javascript
cursor = db.ciudades.find().limit(2);

while (cursor.hasNext()) {
 printjson(cursor.next());
}
```


En este caso el código limita a dos resultados como respuesta.


## Resultado de la consulta con límite


Así, si partimos de la anterior colección, el resultado será el siguiente:


```javascript
{
	"_id" : ObjectId("525ab02733b01a66a9dcbc5b"),
	"ciudad" : "Madrid",
	"habitantes" : 3233527
}
{
	"_id" : ObjectId("525ab02733b01a66a9dcbc5c"),
	"ciudad" : "Barcelona",
	"habitantes" : 1620943
}
```


## Optimización del rendimiento


Lógicamente el uso del método `limit()` a la hora de realizar consultas [MongoDB](https://www.manualweb.net/mongodb/) con límite de documentos permite una optimización en el tiempo de respuesta de las consultas. Ya que la base de datos [MongoDB](https://www.manualweb.net/mongodb/) solo recorrerá los documentos a los que nos hemos limitado y no todos.

