---
title: "Insertar documentos con Pymongo"
description: "Descubre cómo insertar documentos con Pymongo fácilmente. Sigue estos sencillos pasos y comienza a trabajar con MongoDB de manera eficiente y rápida."
date: 2016-06-04
updatedDate: 2026-01-17
tags: ["mongodb","mongoclient","insert_one","insertoneresult","inserted_id"]
slug: python/pymongo/insertar-documentos-con-pymongo
author: victor_cuervo
type: doc
id: c38bad50-d3be-4f4c-88e2-69510231a6e9
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/pymongo/insert-pymongo.py
---

En este ejemplo vamos a ver qué pasos son necesarios para poder insertar un documento en MongoDB mediante Pymongo. Para insertar documentos con Pymongo lo primero que tendremos que hacer es importar la librería.


## Importar la librería Pymongo


```python
from pymongo import MongoClient
```


En concreto el objeto `MongoClient` que es el que nos permitirá acceder a la base de datos de [MongoDB](https://www.manualweb.net/mongodb/). 


## Conectar con la base de datos


Mediante el clientes deberemos de seleccionar la base de datos y colección en la que vayamos a insertar documentos con pymongo.


```python
client = MongoClient('[localhost](http://localhost/)', 27017)
db = client.test
collection = db.users
```


En este caso hemos utilizado la base de datos `test` y la colección `users`. Vemos que la notación de Pymongo es la misma que si estuviésemos escribiendo en la consola de [MongoDB](https://www.manualweb.net/mongodb/). Incluso podríamos haberlo acotado escribiendo.


```python
collection = client.test.users
```


## Definir el documento


Ahora vamos a preparar el documento JSON que vamos a insertar. El documento lo definimos directamente.


```python
usuario = {'nombre':'usuario1','apellido':'apellido1','edad':20}
```


Lo único que tienes que tener cuidado es que las propiedades del documento las pongan con comillas simples. 


## Insertar el documento


Ahora pasamos a insertar el documento, para ello nos apoyamos en el método `.insert_one()`, el cual recibirá como parámetro el documento que habíamos definido.


```python
resultado = collection.insert_one(usuario)
```


Vemos que dejamos el resultado en la variable `resultado`. El método `insert_one()` devuelve un objeto `InsertOneResult` el cual contiene un atributo llamado `inserted_id` que es el identificador del objeto insertado. 


## Mostrar el resultado


Así que podemos mostrar dicho identificador para dar validez a la operación de inserción.


```python
print(resultado.inserted_id)
```


Es id corresponde con el `ObjectId` del objeto insertado en la base de datos de MongoDB. Sencillos pasos que nos permiten insertar documentos con Pymongo.

