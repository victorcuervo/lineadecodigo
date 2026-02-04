---
title: "Operador MongoDB IN"
description: "Descubre cómo utilizar el operador MongoDB IN para realizar búsquedas eficientes en tus datos y simplificar tus consultas de manera efectiva."
date: 2014-02-06
updatedDate: 2026-01-28
tags: ["find","in"]
slug: mongodb/operadores/operador-mongodb-in
type: doc
topic: mongodb
id: 7ce94ea6-344c-45c5-ba24-c5a2a5aae1a0
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo/blob/master/lineadecodigo_mongodb/mongodb-crud/in.js
---

El **operador** [**MongoDB**](https://www.manualweb.net/mongodb/) **IN es un operador que nos sirve para simular un** [**operador MongoDB OR**](http://lineadecodigo.com/mongodb/operador-mongodb-or/) **con una lista de posibles valores**. Es decir, nos evitaría el escribir OR filtro 1 OR filtro 2... Eso sí, siempre y cuando sea sobre el mismo campo del documento.


## Estructura del operador $in


La estructura de un operador [MongoDB](https://www.manualweb.net/mongodb/) IN es la siguiente:


```javascript
db.coleccion.find({campo:{$in:['valor1','valor2',...,'valorN']}});
```


Vemos que la primera parte del filtro es el campo sobre el que queremos aplicar el operador [MongoDB](https://www.manualweb.net/mongodb/), mientras que la otra el el operador [MongoDB](https://www.manualweb.net/mongodb/) en si mismo. Si vemos la parte del operador [MongoDB](https://www.manualweb.net/mongodb/) IN podemos observar que es sencilla ya que es un array de los valores sobre los que aplicaremos el filtro separados por comas. 


## Colección de ejemplo


Si volvemos a nuestra colección de ejemplo de ciudades:


```javascript
{ "_id" : ObjectId("525ab02733b01a66a9dcbc5b"), "ciudad" : "Madrid", "habitantes" : 3233527 }
{ "_id" : ObjectId("525ab02733b01a66a9dcbc5c"), "ciudad" : "Barcelona", "habitantes" : 1620943 }
{ "_id" : ObjectId("525ab02733b01a66a9dcbc5d"), "ciudad" : "Valencia", "habitantes" : 797028 }
{ "_id" : ObjectId("525ab02733b01a66a9dcbc5e"), "ciudad" : "Sevilla", "habitantes" : 702355 }
{ "_id" : ObjectId("525ab02733b01a66a9dcbc5f"), "ciudad" : "Zaragoza", "habitantes" : 679624 }
```


## Consulta con el operador $in


Vamos a atacar el campo ciudad indicando una lista de posibles valores. De esta forma la consulta [MongoDB](https://www.manualweb.net/mongodb/) IN se quedaría de la siguiente forma:


```javascript
cursor = db.ciudades.find({ciudad:{$in:['Avila','Zamora','Madrid']}});
```


## Recorrer el cursor


Ya solo nos queda ver el resultado de la consulta recorriendo el cursor:


```javascript
while (cursor.hasNext()){
  printjson(cursor.next());
}
```


Ya hemos visto en este sencillo ejemplo como utilizar el operador [MongoDB](https://www.manualweb.net/mongodb/) IN para consultar por varios valores de un campo.

