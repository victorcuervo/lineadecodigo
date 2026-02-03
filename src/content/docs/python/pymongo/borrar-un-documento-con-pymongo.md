---
title: "Borrar un documento con Pymongo"
description: "Aprende a borrar un documento con Pymongo de forma sencilla y efectiva, optimizando tu manejo de bases de datos en MongoDB y mejorando tu flujo de trabajo."
date: 2016-06-08
updatedDate: 2026-01-17
tags: ["mongoclient","db","delete_one","delete_many","deleted_count"]
slug: python/pymongo/borrar-un-documento-con-pymongo
author: victor_cuervo
type: doc
id: 709c7393-07fc-4d3a-af63-265d801d5c91
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/pymongo/delete-pymongo.py
---

Para poder borrar un documento con Pymongo simplemente deberemos de realizar una serie de pasos básicos los cuales vamos a ver a continuación.


## Importar MongoClient


Lo primero será importar el objeto `MongoClient` para poder establecer las conexiones con nuestra base de datos [MongoDB](https://www.manualweb.net/mongodb/).


```python
from pymongo import MongoClient
client = MongoClient('[localhost](http://localhost/)', 27017)
```


## Seleccionar la base de datos y colección


La variable `client` será la que nos permita establecer la conexión. Ahora pasaremos a seleccionar la base de datos y la colección a utilizar y sobre la que realizaremos el borrado del documento.


```python
db = client.test
users = db.users
```


En este caso hemos seleccionado la base de datos `test` y la colección `users`.


## Borrar documentos


Para realizar el borrado tenemos los métodos `delete_one()` y `delete_many()`. El primero borrara el primer documento que coincida con el documento pasado como parámetro y en el segundo caso se borraran todos los documentos que coincidan con el parámetro. El parámetro deberá de ser un documento JSON que contenga los atributos del documento buscado y susceptible de ser borrado.


Por ejemplo, si queremos borrar documentos de usuarios que tengan una edad de 30 años, definiremos el siguiente documento.


```python
documento = {"edad": 30}
```


Ahora solo tendremos que ejecutar `delete_one()` o `delete_many()` pasándole el documento como parámetro.


```python
resultado = users.delete_many(documento)
```


## Consultar documentos borrados


Después de borrar un documento con Pymongo podemos consultar el atributo `deleted_count` para saber cuantos documentos hemos borrado de nuestra colección [MongoDB](https://www.manualweb.net/mongodb/).


```python
print(resultado.deleted_count)
```


De esta forma tan sencilla habremos conseguido borrar un documento con Pymongo.

