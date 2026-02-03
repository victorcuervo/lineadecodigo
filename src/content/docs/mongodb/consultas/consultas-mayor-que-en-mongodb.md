---
title: "Consultas mayor que en MongoDB"
description: "Aprende a realizar consultas mayor que en MongoDB usando los operadores $gt y $gte para filtrar datos eficazmente y optimizar tu búsqueda."
date: 2013-11-16
updatedDate: 2026-01-28
tags: ["cursor","find","db","gt","gte"]
slug: mongodb/consultas/consultas-mayor-que-en-mongodb
author: victor_cuervo
type: doc
id: e92fe328-b001-44d9-9e40-cbd1a91b371c
download: https://github.com/victorcuervo/lineadecodigo/blob/master/lineadecodigo_mongodb/mongodb-crud/mayorque.js
---

Siguiendo con las consultas en [MongoDB](https://www.manualweb.net/mongodb/) ahora vamos a ver como podemos realizar consultas mayor que en [MongoDB](https://www.manualweb.net/mongodb/).


Todas las consultas se articulan mediante el método `find()` de [MongoDB](https://www.manualweb.net/mongodb/), es por ello que solamente variarán los filtros y documentos JSON que le pasemos como parámetro.


## Operadores $gt y $gte


En este caso las consultas mayor que en [MongoDB](https://www.manualweb.net/mongodb/) se apoyan sobre **el operador** **`$gt`** y **`$gte`** para las consultas mayor o igual que.


## Colección de ejemplo


Vamos a partir de nuestra colección de ciudades para explicar como realizar consultas mayor que en [MongoDB](https://www.manualweb.net/mongodb/):


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


## Construir el filtro


Vamos a buscar ciudades que tengan más de un millón de habitantes. Es por ello que el campo que manejaremos será habitantes.


Los **operadores** **`$gt`** y **`$gte`** funcionan sobre el valor (al igual que lo hacía [el operador ](http://lineadecodigo.com/mongodb/mongodb-not-equal/)[`$ne`](http://lineadecodigo.com/mongodb/mongodb-not-equal/)). Así el documento que compongamos será:


```javascript
{$gt:1000000}
```


Que se anidará al documento con el campo sobre habitantes:


```javascript
{habitantes:{$gt:1000000}}
```


## Ejecutar la consulta


Solo nos quedará poner las consultas mayor que en [MongoDB](https://www.manualweb.net/mongodb/) dentro del método `find()`.


```javascript
cursor = db.ciudades.find({habitantes:{$gt:1000000}});
```


Como todas las consultas `find()` nos devolverá un cursor que tenemos que recorrer.


## Código completo


El código completo para realizar consultas mayor que en [MongoDB](https://www.manualweb.net/mongodb/) será:


```javascript
conn = new Mongo();
db = conn.getDB("demografia");

cursor = db.ciudades.find({habitantes:{$gt:1000000}});

while (cursor.hasNext()) {
  printjson(cursor.next());
}
```

