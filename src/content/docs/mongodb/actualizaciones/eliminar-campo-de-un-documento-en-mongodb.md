---
title: "Eliminar campo de un documento en MongoDB"
description: "Aprende a eliminar campo de un documento en MongoDB con el operador $unset y optimiza tus bases de datos de manera eficiente y rápida."
date: 2016-01-17
updatedDate: 2026-01-28
tags: ["update","unset"]
slug: mongodb/actualizaciones/eliminar-campo-de-un-documento-en-mongodb
type: doc
topic: mongodb
id: 0e9d66cd-d195-41fd-b92b-d065efdec94d
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_mongodb/blob/master/mongodb-crud/borrar-campo.js
---

Una de las cosas más potentes de [MongoDB](https://www.manualweb.net/mongodb/) es la capacidad de crecimiento de sus documentos, lo cual permite ir añadiendo campos con diferentes valores atendiendo a las necesidades que nos vayan apareciendo.


Pero de igual manera puede aparecer la necesidad de tener que eliminar campo de un documento en [MongoDB](https://www.manualweb.net/mongodb/), ya sea de un documento en concreto o de toda la colección. Vamos a ver qué pasos necesitaríamos para poder eliminar campo de un documento en [MongoDB](https://www.manualweb.net/mongodb/).


## Conexión a la base de datos


Lo primero será conectarnos a nuestra base de datos:


```javascript
conn = new Mongo();
db = conn.getDB("demografia");
```


En concreto nos hemos conectado a una base de datos [MongoDB](https://www.manualweb.net/mongodb/) con información demográfica: ciudades, estados,...


## Estructura del documento


En el caso de las ciudades los documentos tienen una estructura de esta forma:


```javascript
{
	"_id" : ObjectId("525ab02733b01a66a9dcbc5f"),
	"ciudad" : "Zaragoza",
	"habitantes" : 679624,
	"catedrales" : 2
}
```


## Eliminar campo con $unset


El siguiente paso será eliminar el campo "catedrales" del documento, en concreto del documento cuya ciudad coincida con Zaragoza. Para ello vamos a utilizar el operado `$unset`, dicho operador recibe como parámetro un documento JSON con los campos que queremos borrar.


La sentencia a ejecutar dentro de nuestro Shell de [MongoDB](https://www.manualweb.net/mongodb/) será:


```javascript
db.ciudades.update({"ciudad":"Zaragoza"},{$unset:{"catedrales":""}})
```


Vemos que los campos tienen como valor las dobles comillas.


## Verificar la eliminación


Si ahora volvemos a consultar la colección de ciudades veremos que ya no existe el campo catedrales dentro del documento.


```javascript
documento = db.ciudades.findOne({ciudad:"Zaragoza"});
printjson(documento);
```


El operador `$unset` nos permite de forma sencilla eliminar campo de un documento en [MongoDB](https://www.manualweb.net/mongodb/).

