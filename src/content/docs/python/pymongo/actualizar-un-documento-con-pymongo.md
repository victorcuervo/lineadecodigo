---
title: "Actualizar un documento con Pymongo"
description: "Descubre cómo actualizar un documento con Pymongo y mejora la gestión de tus datos en MongoDB de manera fácil y eficiente. ¡No te lo pierdas!"
date: 2016-06-06
updatedDate: 2026-01-17
tags: ["update","mongoclient","update_one","update_many","set","pull","push"]
slug: python/pymongo/actualizar-un-documento-con-pymongo
author: victor_cuervo
type: doc
id: 97010453-78bc-4dbf-b6c8-45bca4e6d82c
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/pymongo/update-pymongo.py
---

Ya hemos [insertado](http://lineadecodigo.com/python/insertar-documentos-pymongo/) y [consultado documentos con Pymongo](http://lineadecodigo.com/python/cursor-en-pymongo/), en este ejemplo vamos a ver cómo podemos actualizar un documento con Pymongo.


## Importar Pymongo


Lo primero de todo importar la librería Pymongo en nuestro programa:


```python
import pymongo
from pymongo import MongoClient
```


## Conectar con MongoDB


Mediante el `MongoClient` vamos a establecer la conexión con la base de datos [MongoDB](https://www.manualweb.net/mongodb/). Una vez establecida deberemos de seleccionar qué base de datos y colección vamos a utilizar.


```python
client = MongoClient('[localhost](http://localhost/)', 27017)
db = client['test']
coleccion = db['users']
```


En el código podemos comprobar que la base de datos a utilizar es `test` y que la colección se llama `users`.


## Métodos update_one() y update_many()


Para poder actualizar un documento con Pymongo tenemos dos alternativas:

- **update_one()**: actualiza el primer documento de la colección que coincida con el criterio de búsqueda
- **update_many()**: actualiza todos los documentos de la colección que coincidan con el criterio de búsqueda

La estructura de ambos métodos es la siguiente:


```python
coleccion.update_one(filtro, actualizacion)
coleccion.update_many(filtro, actualizacion)
```


## Crear el documento de búsqueda


Lo primero será crear un documento que contenga los datos mínimos de los documentos a actualizar. Por ejemplo, queremos actualizar a todas las personas que tengan una edad de 30 años. En este caso el documento será:


```python
filtro = {"edad": 30}
```


O bien podemos querer actualizar todos aquellos documentos de personas que tengan 30 años y que se llamen 'Pilar'.


```python
filtro = {"edad": 30, "nombre": "Pilar"}
```


Podemos añadir los atributos que deseemos en el documento de búsqueda.


## Operadores de actualización


El segundo atributo de los métodos `update_one()` y `update_many()` deberá de ser un documento que contenga un operador de actualización: `$set`, `$pull`, `$push`, etc. Este operador de actualización añadirá, actualizará o eliminará información de alguna de las propiedades del documento.


Por ejemplo, si queremos actualizar la propiedad edad, antes buscada, e indicar que ahora la edad es 31, escribiremos lo siguiente:


```python
actualizacion = {"$set": {"edad": 31}}
```


## Ejecutar la actualización


Ya solo nos quedará ejecutar los métodos `update_one()` o `update_many()`.


```python
resultado = coleccion.update_one(filtro, actualizacion)
# O bien
resultado = coleccion.update_many(filtro, actualizacion)
```


## Verificar el resultado


En la variable resultado queda información relativa al resultado obtenido, en concreto nos deja la variable `modified_count` con el número de documentos que se han actualizado. Podemos ver el efecto de actualizar un documento con Pymongo escribiendo:


```python
print("Documentos actualizados:", resultado.modified_count)
```

