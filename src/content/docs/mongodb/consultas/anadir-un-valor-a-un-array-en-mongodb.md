---
title: "Añadir un valor a un array en MongoDB"
description: "Aprende a añadir un valor a un array en MongoDB utilizando el operador $push y actualiza tus documentos de manera eficiente y sencilla."
date: 2016-01-19
updatedDate: 2026-01-28
tags: ["db","update","push"]
slug: mongodb/consultas/anadir-un-valor-a-un-array-en-mongodb
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_mongodb/blob/master/mongodb-array/insertar-elemento-array.js
topic: mongodb


---

Una de las cosas potentes que tiene [MongoDB](https://www.manualweb.net/mongodb/) es la capacidad de crear documentos que tengan campos que sean arrays. Cosas que nos permiten representar valores anexos a un documento de una forma sencilla y que sería complejo (o tedioso) en una base de datos relacional.


En este caso vamos a ver cómo podemos añadir un valor a un array en [MongoDB](https://www.manualweb.net/mongodb/).


## Documento inicial


Partimos de un documento que no tiene ningún campo que sea un array. Dicho documento representa información sobre una ciudad.


```javascript
{
  "_id": ObjectId("525ab02733b01a66a9dcbc5f"),
  "ciudad": "Zaragoza",
  "habitantes": 679624
}
```


Ahora vamos a crear un array en el que insertemos información de monumentos que se puedan visitar en dicha ciudad.


## Conexión a la base de datos


El primer paso será conectarnos a la base de datos cuyo nombre es "demografía".


```javascript
conn = new Mongo();
db = conn.getDB("demografia");
```


## El operador $push


Ahora vamos a ayudarnos en el operador `$push`. La estructura del operador `$push` es la siguiente:


```javascript
{$push:{campo:elemento_insertar}}
```


> Si el campo no existe se crea un campo de formato array, en el caso de que campo exista y no sea un array se generaría un error.


## Actualizar el documento


De esta forma utilizaremos el método `update` para poder añadir un valor a un array en [MongoDB](https://www.manualweb.net/mongodb/).


```javascript
update = db.ciudades.update({ciudad:"Zaragoza"},{$push:{monumentos:"Basílica del Pilar"}})
```


Podremos comprobar si se ha actualizado el documento revisando el campo "nMatched" devuelto en la respuesta.


```javascript
print('Documentos actualizados ' + update["nMatched"]);
```


## Resultado final


Una vez ejecutado tendremos el siguiente documento:


```javascript
{
	"_id" : ObjectId("525ab02733b01a66a9dcbc5f"),
	"ciudad" : "Zaragoza",
	"habitantes" : 679624,
	"monumentos" : [
		"Basílica del Pilar"
	]
}
```


De esta manera ya hemos conseguido añadir un valor a un array en [MongoDB](https://www.manualweb.net/mongodb/).

