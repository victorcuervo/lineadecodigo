---
title: "Insertar subdocumento en MongoDB"
description: "Cómo utilizar los objetos de Javascript para poder insertar subdocumento en MongoDB."
date: 2016-01-25
updatedDate: 2026-01-28
tags: ["insert","object"]
slug: mongodb/insercciones/insertar-subdocumento-en-mongodb
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_mongodb/blob/master/mongodb-crud/mongodb-insert/insert-subdocumento.js
topic: mongodb


---

Uno de los principios de [MongoDB](https://www.manualweb.net/mongodb/) es que dentro de un documento podemos contener otros documentos (conocidos como subdocumentos). De esta forma podemos realizar [técnicas de modelado de datos en MongoDB](http://www.manualweb.net/mongodb/modelado-de-datos-en-mongodb/).


En este caso vamos a crear un documento que represente los datos de una ciudad, el cual contendrá, a su vez, un subdocumento con los datos de ubicación de dicha ciudad. El documento resultante será algo del siguiente estilo:


```javascript
{
  "_id": ObjectId("569c389705d1b33ed481989c"),
  "nombre": "Avila",
  "habitantes": 58358,
  "ubicacion": {
    "altitud": 1131,
    "latitud": 40.654347222222,
    "longitud": -4.6962222222222
  }
}
```


## Conexión a la base de datos


Lo primero que haremos para poder insertar subdocumento en [MongoDB](https://www.manualweb.net/mongodb/) será conectarnos a la base de datos:


```javascript
conn = new Mongo();
db = conn.getDB("demografia")
```


## Crear el documento principal


Ahora vamos a crear el documento. El documento lo creamos en [Javascript](https://www.manualweb.net/javascript/) mediante un `Object()`, ya que los objetos en [Javascript](https://www.manualweb.net/javascript/) se identifican con documentos JSON, justo lo que espera [MongoDB](https://www.manualweb.net/mongodb/).


```javascript
var ciudad = new Object();
ciudad.nombre = "Avila";
ciudad.habitantes = 58358;
```


## Crear el subdocumento


A su vez el subdocumento con la ubicación será un `Object()`.


```javascript
var geo = new Object();
geo.altitud = 1131;
geo.latitud = 40.654347222222;
geo.longitud = -4.6962222222222;
```


> En este caso hemos guardado la latitud y longitud en dos campos, si bien lo más recomendado en [MongoDB](https://www.manualweb.net/mongodb/) será guardarlo en un array de dos valores. Ya veremos en otros ejemplos de [Línea de Código](http://lineadecodigo.com/) el porqué.


## Asignar el subdocumento


Lo siguiente será crear la propiedad geo en el primero documento a la cual asignaremos este nuevo objeto que representa al subdocumento.


```javascript
ciudad.geo = geo;
```


## Insertar el documento


Solo nos quedará insertar el documento con su subdocumento. Para ello utilizamos el método `.insert()` sobre la colección de ciudades.


```javascript
x = db.ciudades.insert(ciudad);
print('El número de documentos insertado es de ' + x['nInserted']);
```


Y así ya habremos conseguido insertar subdocumento en [MongoDB](https://www.manualweb.net/mongodb/).

