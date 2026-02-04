---
title: "MongoDB Not Equal"
description: "Descubre cómo hacer consultas en MongoDB Not Equal usando el operador $ne para obtener resultados que no cumplen una condición específica. ¡Optimiza tus datos!"
date: 2013-11-14
updatedDate: 2026-01-28
tags: ["find","ne"]
slug: mongodb/consultas/mongodb-not-equal
type: doc
topic: mongodb
id: e4fb7aa4-afd5-4eb8-b5ef-07f3704e67b0
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo/blob/master/lineadecodigo_mongodb/mongodb-crud/notequal.js
---

Si queremos hacer una consulta en [MongoDB](https://www.manualweb.net/mongodb/) para obtener los resultados que no cumplan una condición vamos a tener que recurrir a una consulta [MongoDB](https://www.manualweb.net/mongodb/) Not Equal. Y el operador que representa el [MongoDB](https://www.manualweb.net/mongodb/) Not Equal es **$ne**.


## Cómo utilizar el operador $ne


Vamos a ver como utilizar el operador `$ne` en una consulta [MongoDB](https://www.manualweb.net/mongodb/). Si recordamos, las consultas en [MongoDB](https://www.manualweb.net/mongodb/) se consiguen mediante el método `.find()` y los filtros se presentan mediante un documento JSON como parámetro del método `.find()`.


Es por ello que para conseguir una sentencia de [MongoDB](https://www.manualweb.net/mongodb/) Not Equal vamos a utilizar **el operador $ne** dentro del documento que pasemos al método `.find()`.


## Consulta afirmativa vs Not Equal


Partiremos de una consulta afirmativa antes de aplicar un [MongoDB](https://www.manualweb.net/mongodb/) Not Equal. Los datos sobre los que nos basamos son nuestra conocida colección de ciudades:


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


Si queremos recuperar los datos de Madrid escribiremos lo siguiente:


```javascript
cursor = db.ciudades.find({ciudad:'Madrid'});
```


## Aplicar el operador $ne


Ahora vamos a consultar aquellas ciudades que no sean Madrid. Para ello utilizamos el **operador $ne**. El **operador $ne** se aplica sobre el contenido:


```javascript
{$ne: 'Madrid'}
```


Por lo cual, si este lo queremos aplicar sobre un campo, veremos que el documento JSON que representa nuestra consulta [MongoDB](https://www.manualweb.net/mongodb/) Not Equal llevará un documento anidado. El JSON que lo representa es:


```javascript
{ciudad:{$ne: 'Madrid'}}
```


Vemos que el valor que aplicamos al campo ciudad es otro documento JSON con el operador [MongoDB](https://www.manualweb.net/mongodb/) Not Equal $ne.


```javascript
cursor = db.ciudades.find({ciudad:{$ne: 'Madrid'}});
```


## Ejemplo completo


El código [MongoDB](https://www.manualweb.net/mongodb/) que nos quedará será el siguiente:


```javascript
conn = new Mongo();
db = conn.getDB("demografia");

cursor = db.ciudades.find({ciudad:{$ne:'Madrid'}});

while (cursor.hasNext()) {
  printjson(cursor.next());
}
```

