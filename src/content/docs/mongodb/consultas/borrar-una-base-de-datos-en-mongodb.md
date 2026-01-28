---
title: "Borrar una base de datos en MongoDB"
description: "Aprende a borrar una base de datos en MongoDB de forma segura y eficiente con este sencillo script. ¡No pierdas datos importantes sin precaución!"
date: 2013-06-17
updatedDate: 2026-01-28
tags: ["db","dropdatabase"]
slug: mongodb/consultas/borrar-una-base-de-datos-en-mongodb
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo/blob/master/lineadecodigo_mongodb/mongodb-basicos/borrar-db.js
topic: mongodb


---

Una de las operaciones de mantenimiento básicas que realizaremos en nuestras bases de [MongoDB](https://www.manualweb.net/mongodb/) es borrar una base de datos en [MongoDB](https://www.manualweb.net/mongodb/).


Esta operación realizará el borrado de todos los registros y colecciones que existan dentro de esta base de datos.


## Crear el script


Vamos a crear un fichero Javascript que nos ayude a realizar la operación de borrado. Llamaremos a nuestro fichero `borrar-db.js`.


## Conexión al servidor


Lo primero que haremos será conectarnos al servidor de [MongoDB](https://www.manualweb.net/mongodb/) mediante el objeto `Mongo()`:


```javascript
conn = new Mongo();
```


## Seleccionar la base de datos


Ahora utilizaremos el método `getDB` para utilizar la base de datos que vamos a borrar. En este caso seleccionamos la base de datos "foo":


```javascript
db = conn.getDB("foo");
```


El valor de la conexión se lo asignamos a una variable `db`.


## Método dropDatabase()


Aunque ya vimos que para crear una base de datos en MongoDB no teníamos método y había que insertar datos en una colección para forzar la creación, para el caso de borrar una base de datos en [MongoDB](https://www.manualweb.net/mongodb/) si que tenemos un método.


Este método se llama `dropDatabase()`. Así que nos bastará con ejecutar dicho método sobre la variable `db`.


```javascript
db.dropDatabase();
```


## Precaución


Es importante haber seleccionado bien la base de datos anteriormente, ya que la base de datos que estemos utilizando será la base de datos que eliminará `dropDatabase`.


Estos tres sencillos pasos nos han permitido borrar una base de datos en [MongoDB](https://www.manualweb.net/mongodb/). Espero que os hayan sido de utilidad. Y cuidado con lo que borráis. ;-)

