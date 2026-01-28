---
title: "Cursor forEach en MongoDB"
description: "Descubre cómo utilizar el cursor forEach en MongoDB para recorrer documentos de manera eficiente y sencilla, optimizando tus consultas y resultados."
date: 2013-11-08
updatedDate: 2026-01-28
tags: ["find","foreach"]
slug: mongodb/cursores/cursor-foreach-en-mongodb
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo/blob/master/lineadecodigo_mongodb/mongodb-crud/cursorForEach.js
topic: mongodb


---

Ya hemos visto [como recorrer un cursor en MongoDB](http://lineadecodigo.com/mongodb/recorrer-un-cursor-en-mongodb/). Si bien tenemos un cursor forEach en [MongoDB](https://www.manualweb.net/mongodb/) que nos permite recorrer los documentos de una consulta de una forma sencilla y sin tener que realizar un bucle.


## Sintaxis del cursor forEach


La sintaxis de un cursor forEach en [MongoDB](https://www.manualweb.net/mongodb/) es la siguiente:


```javascript
db.coleccion.find(filtro).forEach(funcion)
```


El filtro corresponde con un documento JSON que filtre la consulta realizada por el método `find()`. Luego, el método `forEach` recibe como parámetro una función que debe de tener como parámetro un documento. Es decir, cada vez que tengamos un documento a procesar de la consulta se ejecutará la función indicada dentro de forEach.


## Conexión a la base de datos


Pero lo primero que haremos en nuestro ejemplo será conectarnos a la base de datos [MongoDB](https://www.manualweb.net/mongodb/):


```javascript
conn = new Mongo();
db = conn.getDB("demografia");
```


## Definir la función


Luego definiremos la función que tratará cada uno de los documentos, recordemos que esta función debe tener como parámetro un documento.


```javascript
function cursor(doc) {
  print("En " + doc.ciudad + " hay " + doc.habitantes + " habitantes.");
}
```


Vemos que accedemos a los campos del documento. En este caso utilizamos documentos de la colección ciudades, la cual tiene campos ciudad y habitantes.


```javascript
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


## Uso del cursor forEach


Ahora indicaremos la función en el parámetro forEach:


```javascript
db.ciudades.find().forEach(cursor);
```


## Función anónima


Si queremos nos podemos evitar la definición de la función y definir la función anónima directamente sobre el método forEach. En este caso lo haremos de la siguiente forma:


```javascript
db.ciudades.find().forEach( function(doc) {
	print("En " + doc.ciudad + " hay " + doc.habitantes + " habitantes.");
} );
```

