---
title: "Consultas con MongoDB find"
description: "Descubre cómo realizar consultas con MongoDB find para recuperar información de manera sencilla y efectiva en tus bases de datos. ¡Optimiza tu manejo de datos!"
date: 2013-11-02
updatedDate: 2026-01-28
tags: ["cursor","find","db","printjson"]
slug: mongodb/crud/consultas-con-mongodb-find
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo/blob/master/lineadecodigo_mongodb/mongodb-crud/find.js
topic: mongodb


---

Una vez que tengamos creada nuestra base de datos [MongoDB](https://www.manualweb.net/mongodb/) lo primero que empezaremos a realizar será consultas con MongoDB find.


El método `find` es el método que nos permite recuperar información de la base de datos, lo mismo que haría un SELECT en una base de datos relacional.


## Estructura del método find


La estructura del método MongoDB `find` es:


```javascript
db.coleccion.find(consulta)
```


Es decir que deberemos de indicar la colección sobre la que queremos realizar la consulta, luego indicar el método `find` y como parámetro el documento JSON que represente la consulta.


Si no indicamos un documento JSON como consulta, se recuperarán todos los documentos de la colección.


## Conexión a la base de datos


Pero lo primero será conectarnos a la base de datos.


```javascript
conn = new Mongo();
db = conn.getDB("demografia");
```


## Estructura de la colección


Vamos a utilizar la **base de datos demografía** que tiene una **colección llamada ciudades**, la cual tiene la siguiente estructura:


```javascript
{
	"_id" : ObjectId("525ab02733b01a66a9dcbc60"),
	"ciudad" : "Malaga",
	"habitantes" : 567433
}
{
	"_id" : ObjectId("525ab02733b01a66a9dcbc61"),
	"ciudad" : "Murcia",
	"habitantes" : 441354
}
{
	"_id" : ObjectId("525ab02733b01a66a9dcbc62"),
	"ciudad" : "Palma de Mallorca",
	"habitantes" : 407648
}
{
	"_id" : ObjectId("525ab02733b01a66a9dcbc63"),
	"ciudad" : "Las Palmas de Gran Canaria",
	"habitantes" : 382296
}
```


Vemos que los documentos tienen el nombre de la ciudad y el número de habitantes.


## Realizar la consulta


Como la colección se llama ciudades realizaremos la consulta mediante la siguiente sintaxis de MongoDB `find`:


```javascript
cursor = db.ciudades.find();
```


En cursor habremos dejado el listado de todos los documentos de la colección ciudades.


## Visualizar los resultados


Utilizando el método `printjson` volcaremos el contenido de un documento sobre la consola.


```javascript
printjson(cursor.next());
```


Con esto hemos visto lo sencillo que es realizar una consulta mediante MongoDB `find`.

