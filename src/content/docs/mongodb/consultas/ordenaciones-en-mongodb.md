---
title: "Ordenaciones en MongoDB"
description: "Aprende a realizar ordenaciones en MongoDB con nuestro sencillo método .sort() y mejora la forma en que consultas y gestionas tus datos."
date: 2014-02-07
updatedDate: 2026-01-28
tags: ["find","sort"]
slug: mongodb/consultas/ordenaciones-en-mongodb
author: victor_cuervo
type: doc
id: 8a451588-bafb-4364-842f-6953ac5b4a4c
download: https://github.com/victorcuervo/lineadecodigo/blob/master/lineadecodigo_mongodb/mongodb-crud/orderby.js
---

A la hora de realizar una consulta podemos encontrarnos la necesidad de realizar una ordenación de los datos. Ya que si no decimos nada las consultas en [MongoDB](https://www.manualweb.net/mongodb/) devolverán los datos tal cual se encuentren almacenados en la base de datos, es decir, con su orden de inserción. Así si queremos realizar ordenaciones en [MongoDB](https://www.manualweb.net/mongodb/) deberemos de utilizar el [método .sort()]( "MongoDB Sort"). 


## Sintaxis del método .sort()


La sintaxis del método [MongoDB](https://www.manualweb.net/mongodb/) [.sort()]( "MongoDB Sort") es la siguiente:


```javascript
db.coleccion.find(filtro).sort(ordenacion);
```


En la ordenación indicaremos el campo o los campos por los cuales queremos ordenar. De igual forma indicaremos el tipo de ordenación que queremos: ordenación ascendente u ordenación descendente. La estructura de la ordenación es la siguiente:


```javascript
.sort({campo1:tipoordencion,campo2:tipoordenacion,...,campoN:tipoordenacion});
```


Dónde los tipos de ordenación y sus valores son:

- **Ascendente:** 1
- **Descendente:** -1

## Colección de ejemplo


Así que partiendo de nuestra colección de ciudades:


```javascript
{ "_id" : ObjectId("525ab02733b01a66a9dcbc5b"), "ciudad" : "Madrid", "habitantes" : 3233527 }
{ "_id" : ObjectId("525ab02733b01a66a9dcbc5c"), "ciudad" : "Barcelona", "habitantes" : 1620943 }
{ "_id" : ObjectId("525ab02733b01a66a9dcbc5d"), "ciudad" : "Valencia", "habitantes" : 797028 }
{ "_id" : ObjectId("525ab02733b01a66a9dcbc5e"), "ciudad" : "Sevilla", "habitantes" : 702355 }
{ "_id" : ObjectId("525ab02733b01a66a9dcbc5f"), "ciudad" : "Zaragoza", "habitantes" : 679624 }
```


## Ordenación ascendente y descendente


Podemos realizar las siguientes ordenaciones en [MongoDB](https://www.manualweb.net/mongodb/). Si queremos ordenar las ciudades de forma ascendente escribiremos:


```javascript
cursor = db.ciudades.find().sort({ciudad:1});
```


Por el contrario, si queremos ordenar las ciudades de forma descendente:


```javascript
cursor = db.ciudades.find().sort({ciudad:-1});
```


> Las ordenaciones en [MongoDB](https://www.manualweb.net/mongodb/) solo se pueden **realizar con tamaños menores a 32Mb**. En caso contrario hay que utilizar el método .limit() para acortarlas.


## Ordenación con filtros


La consulta realizada con el [método .find()]( "MongoDB Find") puede tener un filtro:


```javascript
cursor = db.ciudades.find({ciudad:/^M/}).sort({ciudad:-1});
```


En este caso se ordenaria el subconjunto de documentos devueltos por la consulta filtrada. 


## Múltiples campos de ordenación


Podemos establecer varios campos de ordenación, los cuales se ejecutarían en el orden en el que están establecidos:


```javascript
cursor = db.ciudades.find().sort({ciudad:-1,habitantes:1});
```


## Combinación con limit()


De igual manera podemos seguir concatenando métodos en la consulta y podemos limitar el número de documentos a devolver después de haber utilizado el [método .sort()]( "MongoDB Sort").


```javascript
cursor = db.ciudades.find().sort({ciudad:1}).limit(4);
```


## Recorrer el cursor


Eso sí, al final no se te olvide recorrer el cursor para mostrar el contenido del mismo:


```javascript
while (cursor.hasNext()){
  printjson(cursor.next());
}
```


Ya sabemos como realizar ordenaciones en [MongoDB](https://www.manualweb.net/mongodb/).

