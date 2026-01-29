---
title: "Filtrar datos en MongoDB
description: "Aprende a filtrar datos en MongoDB utilizando el método find para obtener información específica de tu colección de documentos. ¡Optimiza tus consultas!
date: 2013-11-12
updatedDate: 2026-01-29
tags: ["db","find"]
slug: mongodb/consultas/filtrar-datos-en-mongodb
author: victor_cuervo
type: doc
id: e7d344cc-7a02-43c3-8c3d-874665391420
download: https://github.com/victorcuervo/lineadecodigo/blob/master/lineadecodigo_mongodb/mongodb-crud/filtrarDatos.js
video: https://www.youtube.com/embed/jMxAMRRI0Ww
---

Una vez que hemos visto [el uso del método .find() en MongoDB](http://lineadecodigo.com/mongodb/consultas-con-mongodb-find/) ahora vamos a ver como podemos filtrar datos en [MongoDB](https://www.manualweb.net/mongodb/).


## Uso básico del método find()


El uso básico del método `.find()` hemos visto que es el siguiente:


```javascript
db.coleccion.find()
```


Mediante esta consulta hemos conseguido recuperar todos los documentos de una colección.


## Sintaxis para filtrar datos


Pero si queremos filtrar datos en [MongoDB](https://www.manualweb.net/mongodb/) deberemos de hacer uso de los parámetros del método `.find()`. El método `.find()` recibe un documento JSON como parámetro que puede filtrar el contenido de los documentos que queramos recuperar. La sintaxis es:


```javascript
db.coleccion.find(documentofiltro)
```


Es importante denotar que el parámetro del método `.find()` es un documento JSON.


## Ejemplo con colección de ciudades


De esta manera si partimos de nuestra lista de documentos de ciudades:


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


## Crear el filtro


Podemos querer filtrar los datos relativos a la ciudad de Madrid. Para ello deberemos de construir un documento que indique que la ciudad es Madrid. El documento que lo representará será:


```javascript
{ciudad:'Madrid'}
```


Ahora solo tenemos que pasar este documento al método `.find()` para poder filtrar datos en [MongoDB](https://www.manualweb.net/mongodb/):


```javascript
cursor = db.ciudades.find({ciudad:'Madrid'});
```


## Código completo


El método `.find()` siempre nos devolverá un cursor, aunque para nuestro ejemplo solo haya un documento dentro del cursor. El código completo con la conexión a la base de datos y la consultar para que pueda filtrar datos en [MongoDB](https://www.manualweb.net/mongodb/) sería el siguiente:


```javascript
conn = new Mongo();
db = conn.getDB("demografia");

cursor = db.ciudades.find({ciudad:'Madrid'});

while (cursor.hasNext()) {
  printjson(cursor.next());
}
```

