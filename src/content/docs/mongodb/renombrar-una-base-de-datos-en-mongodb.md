---
title: "Renombrar una base de datos en MongoDB"
description: "Pasos para renombrar una base de datos en MongoDB dónde no existe la sentencia renameDatabase."
date: 2013-06-19
updatedDate: 2026-01-28
tags: ["MongoDB Básico","MongoDB Database"]
slug: mongodb/renombrar-una-base-de-datos-en-mongodb
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo/blob/master/lineadecodigo_mongodb/mongodb-basicos/renombrar-bd.js
topic: mongodb


---

Ya hemos aprendido a [crear](http://lineadecodigo.com/mongodb/crear-una-base-de-datos-en-mongodb/) y a [borrar](http://lineadecodigo.com/mongodb/borrar-una-base-de-datos-en-mongodb/) una base de datos en [MongoDB](https://www.manualweb.net/mongodb/). Así que ahora vamos a ver qué tenemos que hacer para renombrar una base de datos en [MongoDB](https://www.manualweb.net/mongodb/).


Vimos que para [crear una base de datos en MongoDB](http://lineadecodigo.com/mongodb/crear-una-base-de-datos-en-mongodb/) no existía un comando específico y que teníamos que crear una colección, pero que en el caso del borrado contábamos con `dropDatabase()`. Pues en el caso de renombrar una base de datos en [MongoDB](https://www.manualweb.net/mongodb/) no tenemos un método del estilo `renameDataBase()`.


> Hay una [petición sobre la evolución de MongoDB](collectionpropertyoption://494f2203-2739-4c2d-9997-f1251e18eb1f/UW13Rg/YzMxNDA2NDgtNDZhZC00M2QzLTk5ODEtMDUzMGFmNjdjZjM1) para que incluyan una forma fácil de renombrar la bases de datos.


Así la secuencia que haremos para renombrar una base de datos en [MongoDB](https://www.manualweb.net/mongodb/) será la siguiente:

1. Copiar la base de datos [MongoDB](https://www.manualweb.net/mongodb/) en otra base de datos [MongoDB](https://www.manualweb.net/mongodb/)
2. Borrar la base de datos [MongoDB](https://www.manualweb.net/mongodb/) antigua

## Copiar la base de datos


Vamos a partir de que existe una base de datos en MongoDB que se llama "datos" y que la queremos renombrar en "ciudades". Lo primero que hacemos en conectarnos a [MongoDB](https://www.manualweb.net/mongodb/) y seleccionar la base de datos llamada "datos".


```javascript
conn = new Mongo();
db = conn.getDB("datos");
```


Ahora vamos a copiar "datos" en "ciudades". Para ello utilizamos la sentencia `copyDatabase()`.


```javascript
db.copyDatabase('datos', 'ciudades');
```


## Borrar la base de datos antigua


Ya hemos conseguido renombrar una base de datos en [MongoDB](https://www.manualweb.net/mongodb/). Solo nos quedará eliminar la base de datos antigua y tal como vimos en el ejemplo de [borrar una base de datos en MongoDB](http://lineadecodigo.com/mongodb/borrar-una-base-de-datos-en-mongodb/) utilizamos el `dropDatabase()`


```javascript
db.dropDatabase();
```


Es importante que ejecutemos el `dropDatabase()` sobre a antigua base de datos que teníamos referenciada en la variable db. Si estás en la consola de MongoDB no te olvides de hacer un use de la base de datos a borrar antes de ejecutar el `dropDatabase()`.


```javascript
use datos
db.dropDatabase()
```


No sea que borrar la base de datos que no es. Con estas líneas ya hemos podido renombrar una base de datos en [MongoDB](https://www.manualweb.net/mongodb/).

