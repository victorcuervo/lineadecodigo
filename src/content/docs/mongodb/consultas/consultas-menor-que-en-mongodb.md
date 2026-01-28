---
title: "Consultas menor que en MongoDB"
description: "Aprende a realizar consultas menor que en MongoDB utilizando los operadores $lt y $lte para filtrar datos de manera sencilla y eficiente."
date: 2013-12-09
updatedDate: 2026-01-28
tags: ["find","lt","lte","cursor"]
slug: mongodb/consultas/consultas-menor-que-en-mongodb
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo/blob/master/lineadecodigo_mongodb/mongodb-crud/menorque.js
topic: mongodb


---

Si era sencillo [realizar consultas mayor que en MongoDB](http://lineadecodigo.com/mongodb/consultas-mayor-que-en-mongodb/), igual de sencillo es realizar consultas menor que en [MongoDB](https://www.manualweb.net/mongodb/).


Solo tenemos que saber qué operador utilizar, ya que la dinámica será la misma.


## Conjunto de datos de partida


El conjunto de datos del que partimos para las consultas menor que en [MongoDB](https://www.manualweb.net/mongodb/) es nuestra colección de ciudades:


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


## Uso del método find()


Como bien sabemos, para poder realizar una consulta en [MongoDB](https://www.manualweb.net/mongodb/) debemos de utilizar el método `find()`. Y será dentro de los parámetros del método dónde ejecutemos el filtro para conseguir nuestro objetivo de obtener consultas menor que con MongoDB.


```javascript
db.ciudades.find();
```


## Operadores menor que: $lt y $lte


Los operadores menor que en [MongoDB](https://www.manualweb.net/mongodb/) son `$lt` y `$lte`. La estructura JSON será la siguiente:


```javascript
{$lt:1000000}
```


Esta estructura la tenemos que aplicar a un campo, por ejemplo al campo habitantes:


```javascript
{habitantes:{$lt:1000000}}
```


## Construir la consulta


Ahora montamos la consulta con el método `find()`. El resultado será un cursor de documentos, así que asignamos la salida a un cursor:


```javascript
cursor = db.ciudades.find({habitantes:{$lt:1000000}});
```


## Recorrer los resultados


Solo nos quedará recorrer el cursor para ver los resultados:


```javascript
while (cursor.hasNext()) {
  printjson(cursor.next());
}
```

