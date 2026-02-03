---
title: "Total de registros con MongoDB count"
description: "Descubre cómo contar registros en MongoDB de manera eficiente con el método count y optimiza tus consultas para obtener resultados precisos y rápidos."
date: 2014-02-05
updatedDate: 2026-01-28
tags: ["count","find","database"]
slug: mongodb/consultas/total-de-registros-con-mongodb-count
author: victor_cuervo
type: doc
topic: mongodb
id: b1c35657-d58b-4bfd-b529-c199e11fd19e
download: https://github.com/victorcuervo/lineadecodigo/blob/master/lineadecodigo_mongodb/mongodb-crud/count.js
---

Cuando realizamos consultas en [MongoDB](https://www.manualweb.net/mongodb/) una de las cosas que querremos **saber es el número total de registros de una colección o el número total de registros afectados por una consulta**. Para ello tenemos el método **MongoDB count**.


El método MongoDB count se puede aplicar directamente sobre una colección o sobre una consulta y nos devolverá dicha información.


> La ejecución del método MongoDB count devuelve un número con el número de documentos contados.


## Contar documentos de una colección


La sintaxis sobre una colección es la siguiente:


```javascript
db.coleccion.count();
```


De esta manera, en nuestra colección de ejemplo de ciudades, escribiríamos lo siguiente:


```javascript
db.ciudades.count();
```


Esto devolvería el número total de documentos que componen una colección. Que al fin y al cabo podría escribirse también como:


```javascript
db.ciudades.find().count();
```


Es decir, contar una consulta que recupera todos los documentos.


## Contar documentos de una consulta


Y es que esta es la base para contar registros parciales de consultas con MongoDB count. La sintaxis será:


```javascript
db.coleccion.find({filtros}).count();
```


En este sentido, si estamos consultando nuestra colección de documentos de ciudades:


```javascript
{ "_id" : ObjectId("525ab02733b01a66a9dcbc5b"), "ciudad" : "Madrid", "habitantes" : 3233527 }
{ "_id" : ObjectId("525ab02733b01a66a9dcbc5c"), "ciudad" : "Barcelona", "habitantes" : 1620943 }
{ "_id" : ObjectId("525ab02733b01a66a9dcbc5d"), "ciudad" : "Valencia", "habitantes" : 797028 }
{ "_id" : ObjectId("525ab02733b01a66a9dcbc5e"), "ciudad" : "Sevilla", "habitantes" : 702355 }
{ "_id" : ObjectId("525ab02733b01a66a9dcbc5f"), "ciudad" : "Zaragoza", "habitantes" : 679624 }
```


Si consultamos ciudades que empiecen por M y queremos saber cuantas existen, podemos utilizar el método MongoDB count.


```javascript
db.ciudades.find({ciudad:/^M/}).count();
```


Como podéis ver el uso del método MongoDB count es muy sencillo. Otra cosa es el coste en tiempo y rendimiento, pero eso ya es cuestión de otro artículo. :-D

