---
title: "Operador MongoDB AND"
description: "Descubre cómo utilizar el operador MongoDB AND para filtrar consultas y obtener resultados precisos en tus bases de datos de manera eficiente y técnica."
date: 2014-02-03
updatedDate: 2026-01-28
tags: ["find","and"]
slug: mongodb/crud/operador-mongodb-and
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo/blob/master/lineadecodigo_mongodb/mongodb-crud/and.js
topic: mongodb


---

Cuando estemos realizando consultas [MongoDB](https://www.manualweb.net/mongodb/) es fácil que necesitemos concatenar filtros en las consultas. Es decir necesitemos realizar el **operador** [**MongoDB**](https://www.manualweb.net/mongodb/) **AND**. Por ejemplo, en nuestra colección de ciudades:


## Colección de ejemplo


```javascript
{ "_id" : ObjectId("525ab02733b01a66a9dcbc5b"), "ciudad" : "Madrid", "habitantes" : 3233527 }
{ "_id" : ObjectId("525ab02733b01a66a9dcbc5c"), "ciudad" : "Barcelona", "habitantes" : 1620943 }
{ "_id" : ObjectId("525ab02733b01a66a9dcbc5d"), "ciudad" : "Valencia", "habitantes" : 797028 }
{ "_id" : ObjectId("525ab02733b01a66a9dcbc5e"), "ciudad" : "Sevilla", "habitantes" : 702355 }
{ "_id" : ObjectId("525ab02733b01a66a9dcbc5f"), "ciudad" : "Zaragoza", "habitantes" : 679624 }
```


Podemos querer el consultar por el nombre de la ciudad y por el número de habitantes. Lo que buscaremos realizar con el operador [MongoDB](https://www.manualweb.net/mongodb/) AND es filtrar por ciudades que empiecen por una letra y cuyos habitantes sean mayor de un número indicado.


## Estructura del operador $and


El operador [MongoDB](https://www.manualweb.net/mongodb/) AND tiene la siguiente estructura:


```javascript
db.coleccion.find({$and:[{filtro1},{filtro2},...{filtroN}]});
```


Dónde los filtros podrán ser de cualquier tipo de los que soporta [MongoDB](https://www.manualweb.net/mongodb/). De esta forma, para poder escribir el filtro con el operador [MongoDB](https://www.manualweb.net/mongodb/) AND que hemos comentado antes tendremos la siguiente sentencia:


```javascript
cursor = db.ciudades.find({$and:
  [{ciudad:/^M/},{habitantes:{$lt:1000000}}]});
```


Vemos que dentro del documento asociado al AND va un array con los filtros, que a su vez tienen la estructura BSON. Todos ellos separados por comas.


## Uso implícito del operador $and


Aunque MongoDB tiene otros operadores adicionales como $or, $eq, $neq,... El **operador** [**MongoDB**](https://www.manualweb.net/mongodb/) **AND o $and se puede asumir en la propia consulta, de forma implicita, en una secuencia de filtros**. Es decir, que podríamos escribir la consulta .find() de la siguiente forma:


```javascript
db.coleccion.find({filtro1,filtro2,...filtroN});
```


Por lo que reescribiendo el anterior uso del operador [MongoDB](https://www.manualweb.net/mongodb/) AND tendríamos lo siguiente de forma implicita:


```javascript
cursor = db.ciudades.find({ciudad:/^M/,habitantes:{$lt:1000000}});
```


## Recorrer el cursor


Como en todos los ejemplos, al dejar el resultado de los documentos sobre un cursor, solo nos queda el volcar el cursor:


```javascript
while (cursor.hasNext()){
  printjson(cursor.next());
}
```

