---
title: "Insertar documento en MongoDB"
description: "Aprende a insertar documento en MongoDB de forma sencilla y efectiva con JavaScript y optimiza tus bases de datos para un rendimiento superior."
date: 2016-01-23
updatedDate: 2026-01-28
tags: ["object","insert"]
slug: mongodb/inserciones/insertar-documento-en-mongodb
author: victor_cuervo
type: doc
id: f12aeb27-5380-444e-a47a-07e7a79cbf8e
download: https://github.com/victorcuervo/lineadecodigo_mongodb/blob/master/mongodb-crud/mongodb-insert/insert.js
---

Mediante este ejemplo vamos a realizar la operación de insertar documento en [MongoDB](https://www.manualweb.net/mongodb/). Para ello crearemos un documento mediante [Javascript](https://www.manualweb.net/javascript/) y lo insertaremos en una colección.


## Conexión a la base de datos


Pero el primer paso para insertar documento en [MongoDB](https://www.manualweb.net/mongodb/) será conectarnos a nuestra base de datos [MongoDB](https://www.manualweb.net/mongodb/). En concreto nos conectaremos a la base de datos de demografía, la cual tiene ciudades, estados,...


```javascript
conn = new Mongo();
db = conn.getDB("demografia");
```


## Crear el documento


Ahora pasaremos a crear un documento [MongoDB](https://www.manualweb.net/mongodb/). Como los documentos [MongoDB](https://www.manualweb.net/mongodb/) son objetos JSON nos apoyaremos en las capacidades de [Javascript](https://www.manualweb.net/javascript/) para crear dicho documento. Por lo tanto, lo que haremos será crear un `Object()`.


```javascript
var documento = new Object();
```


Este documento va a representar una ciudad, con su nombre y su número de habitantes. Por lo tanto crearemos cada una de las propiedades del documento mediante atributos del objeto.


```javascript
documento.ciudad = "Salamanca";
documento.habitantes = 154462;
```


## Insertar el documento


Una vez que tengamos creado nuestro documento utilizaremos el método `.insert()` para poder insertar documento en MongoDB. La estructura del método `.insert()` será:


```javascript
db.coleccion.insert(documento)
```


Así que será tan sencillo como ejecutar lo siguiente:


```javascript
x = db.ciudades.insert(documento);
```


## Verificar la inserción


Hemos asignado el valor de respuesta de [MongoDB](https://www.manualweb.net/mongodb/) a la variable x. De esta manera podremos ver si el documento se ha insertado inspeccionando la variable `nInserted` del documento devuelto como respuesta.


```javascript
print('El número de documentos insertado es de ' + x['nInserted']);
```


## Alternativa: insertar directamente


El uso del `Object()` para crear documentos JSON es realmente sencillo. Pero si no quieres utilizarlo siempre puedes escribir el documento JSON directamente sobre el método insert.


```javascript
x = db.ciudades.insert('{ciudad:"Salamanca",habitantes:154462}');
```


Como puedes comprobar es realmente sencillo realizar la operación de insertar documento en [MongoDB](https://www.manualweb.net/mongodb/).

