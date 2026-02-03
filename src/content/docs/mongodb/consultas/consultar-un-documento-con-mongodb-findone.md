---
title: "Consultar un documento con MongoDB findOne"
description: "Descubre cómo consultar un documento en MongoDB usando findOne y obtén resultados precisos de manera sencilla y rápida en tu base de datos."
date: 2013-11-04
updatedDate: 2026-01-28
tags: ["db","findone"]
slug: mongodb/consultas/consultar-un-documento-con-mongodb-findone
author: victor_cuervo
type: doc
id: 03aa5e5e-ed93-4eae-9223-355c6313230f
download: https://github.com/victorcuervo/lineadecodigo/blob/master/lineadecodigo_mongodb/mongodb-crud/findOne.js
---

Ya hemos visto [como podemos hacer una consulta general con MongoDB find](http://lineadecodigo.com/mongodb/consultas-con-mongodb-find/). Pero hay una forma todavía más sencilla que es consultar un único documento mediante MongoDB findOne.


El método MongoDB `findOne` nos devolverá un solo método de la colección, el primer documento que tenga guardado en la colección.


## Sintaxis de findOne


La sintaxis de MongoDB `findOne` es:


```javascript
db.coleccion.findOne()
```


> El método MongoDB `findOne` devuelve un solo documento, si bien puede recibir un documento como parámetro para ejecutar un filtro.


## Conexión a la base de datos


Como en el resto de programas del Shell de [MongoDB](https://www.manualweb.net/mongodb/) lo primero que haremos será conectarnos a [MongoDB](https://www.manualweb.net/mongodb/) y luego indicar cual es la base de datos que queremos utilizar.


```javascript
conn = new Mongo();
db = conn.getDB("demografia");
```


## Ejecutar la consulta


Lo siguiente será ejecutar la consulta MongoDB `findOne`:


```javascript
documento = db.ciudades.findOne();
```


El retorno de la consulta no es un cursor de documentos, si no que es un único documento, así que simplemente utilizaremos el método `printjson` para volcar el contenido del documento.


```javascript
printjson(documento);
```


## Resultado de la consulta


Lo que obtendremos por consola al ejecutar MongoDB `findOne` será la siguiente:


```javascript
{
	"_id" : ObjectId("525ab02733b01a66a9dcbc60"),
	"ciudad" : "Malaga",
	"habitantes" : 567433
}
```


En este caso este es el primer documento que guardamos en la colección ciudades.

