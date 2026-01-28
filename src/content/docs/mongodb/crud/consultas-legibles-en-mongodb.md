---
title: "Consultas legibles en MongoDB"
description: "Aprende a realizar consultas legibles en MongoDB con el método pretty para mejorar la presentación de tus resultados en la consola y optimizar tu análisis."
date: 2013-11-10
updatedDate: 2026-01-28
tags: ["find","db","pretty"]
slug: mongodb/crud/consultas-legibles-en-mongodb
author: victor_cuervo
type: doc

topic: mongodb


---

Cuando estamos haciendo consultas en la consola de [MongoDB](https://www.manualweb.net/mongodb/) vamos a ver que la información que sale, en ciertas ocasiones, puede ser poco legible. Y si queremos analizar los resultados vamos a necesitar que nuestras consultas sean legibles en [MongoDB](https://www.manualweb.net/mongodb/).


## Consulta básica


Si estamos realizando una consulta como la siguiente:


```javascript
db.ciudades.find()
```


Veremos que los resultados por consola nos salen de la siguiente forma:


```javascript
{ "_id" : ObjectId("525ab02733b01a66a9dcbc5b"), "ciudad" : "Madrid", "habitantes" : 3233527 }
{ "_id" : ObjectId("525ab02733b01a66a9dcbc5c"), "ciudad" : "Barcelona", "habitantes" : 1620943 }
{ "_id" : ObjectId("525ab02733b01a66a9dcbc5d"), "ciudad" : "Valencia", "habitantes" : 797028 }
{ "_id" : ObjectId("525ab02733b01a66a9dcbc5e"), "ciudad" : "Sevilla", "habitantes" : 702355 }
{ "_id" : ObjectId("525ab02733b01a66a9dcbc5f"), "ciudad" : "Zaragoza", "habitantes" : 679624 }
```


En este caso los documentos JSON que se nos muestran no son muy grandes, por lo cual podemos leerlos sin dificultad. Pero si el número de campos aumenta veremos que se complica su lectura en sobremanera.


## El método pretty()


Es por ello que si queremos realizar consultas legibles en [MongoDB](https://www.manualweb.net/mongodb/) podemos utilizar el método `pretty()`.


El método `pretty()` se añade al final de la consulta, consiguiendo así consultas legibles en [MongoDB](https://www.manualweb.net/mongodb/).


La consulta anterior la modificaríamos dejándola de la siguiente forma:


```javascript
db.ciudades.find().pretty()
```


## Resultado con pretty()


El resultado que nos ofrece por consola es una consulta legible en [MongoDB](https://www.manualweb.net/mongodb/) de la siguiente manera:


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


## Limitaciones


Hay que tener cuidado ya que el método `pretty()` solo nos sirve para realizar consultas legibles en [MongoDB](https://www.manualweb.net/mongodb/) por la consola y no nos servirá cuando interactuemos por los diferentes API.

