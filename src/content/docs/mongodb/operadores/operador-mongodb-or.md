---
title: "Operador MongoDB OR"
description: "Descubre cómo utilizar el operador MongoDB OR para realizar consultas efectivas que combinan múltiples filtros y optimiza tus búsquedas en bases de datos."
date: 2014-02-04
updatedDate: 2026-01-28
tags: ["find","or","cursor"]
slug: mongodb/operadores/operador-mongodb-or
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo/blob/master/lineadecodigo_mongodb/mongodb-crud/or.js
topic: mongodb


---

Ya hemos visto [el funcionamiento del Operador MongoDB AND](http://lineadecodigo.com/mongodb/operador-mongodb-and/) en el cual podíamos realizar operaciones en las cuales se cumpliesen dos condiciones o filtros. En este caso vamos a ver como realizar operaciones que se pueden realizar cuando se cumpla un campo u otro. Para ello vamos revisar el uso del **operador** [**MongoDB**](https://www.manualweb.net/mongodb/) **OR**.


## Estructura del operador $or


La estructura es muy similar al operador [MongoDB](https://www.manualweb.net/mongodb/) AND, pero en este caso vamos a utilizar el elemento $or. La estructura del operador [MongoDB](https://www.manualweb.net/mongodb/) es la siguiente:


```javascript
db.coleccion.find({$or:[{filtro1},{filtro2},...{filtroN}]});
```


## Colección de ejemplo


De esta forma si, de nuestra colección de ciudades:


```javascript
{ "_id" : ObjectId("525ab02733b01a66a9dcbc5b"), "ciudad" : "Madrid", "habitantes" : 3233527 }
{ "_id" : ObjectId("525ab02733b01a66a9dcbc5c"), "ciudad" : "Barcelona", "habitantes" : 1620943 }
{ "_id" : ObjectId("525ab02733b01a66a9dcbc5d"), "ciudad" : "Valencia", "habitantes" : 797028 }
{ "_id" : ObjectId("525ab02733b01a66a9dcbc5e"), "ciudad" : "Sevilla", "habitantes" : 702355 }
{ "_id" : ObjectId("525ab02733b01a66a9dcbc5f"), "ciudad" : "Zaragoza", "habitantes" : 679624 }
```


## Concatenar filtros con $or


Queremos sacar ciudades que bien empiecen por M o bien empiecen por Z tendremos que utilizar nuestro operador [MongoDB](https://www.manualweb.net/mongodb/) OR de la siguiente forma:


```javascript
cursor = db.ciudades.find({$or:[{ciudad:/^M/},{ciudad:/^Z/}]});
```


Vemos que cada una de las opciones que queramos concatenar con el operador [MongoDB](https://www.manualweb.net/mongodb/) OR van dentro del array separadas por comas. 


## Recorrer el cursor


Ya solo tenemos que mostrar el resultado recorriendo el cursor:


```javascript
while (cursor.hasNext()){
  printjson(cursor.next());
}
```


Como podéis comprobar el uso del operador [MongoDB](https://www.manualweb.net/mongodb/) OR es muy sencillo. Solo hay que tener cuidado con el uso de las llaves, como en todo [MongoDB](https://www.manualweb.net/mongodb/) ;-).

