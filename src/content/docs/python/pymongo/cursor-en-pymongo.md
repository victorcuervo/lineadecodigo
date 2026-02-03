---
title: "Cursor en Pymongo"
description: "Aprende a manejar un cursor en Pymongo para consultar documentos en MongoDB de forma efectiva y sencilla. ¡No te pierdas esta guía práctica!"
date: 2016-03-11
updatedDate: 2026-01-17
tags: ["cursor","for-in","print","find","mongoclient"]
slug: python/pymongo/cursor-en-pymongo
author: victor_cuervo
type: doc
id: 4b648cee-9c75-4a82-bdf1-ed266d32f7bc
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/pymongo/cursor-pymongo.py
---

Tendremos que saber manejar un cursor en Pymongo a la hora de realizar consultas de documentos sobre una base de datos en [MongoDB](https://www.manualweb.net/mongodb/) en [Python](http://www.manualweb.net/python/). 


Un cursor en Pymongo no deja de ser una lista que alberga los documentos resultado de realizar la consulta. En este ejemplo vamos a realizar una consulta sobre una base de datos [MongoDB](https://www.manualweb.net/mongodb/) mediante Pymongo para poder manejar, recorrer e imprimir los resultados del cursor.


## Importar MongoClient


Lo primero será importar el objeto `MongoClient` que es el que nos permitirá conectarnos con [MongoDB](https://www.manualweb.net/mongodb/) desde [Python](http://www.manualweb.net/python/).


```python
from pymongo import MongoClient
```


## Conectar con MongoDB


Con el objeto `MongoClient` vamos a conectarnos al servidor, elegir una base de datos (users) y una colección (listado).


```python
cliente = MongoClient('[localhost](http://localhost/)', 27017)
db = cliente.users
listado = db.listado
```


## Ejecutar la consulta


Ahora vamos ejecutar la consulta mediante el método `.find()`:


```python
usuarios = listado.find()
```


Que sería lo mismo que haber escrito:


```python
usuarios = db.listado.find()
```


Mucho más parecido a la sintaxis de MongoDB. 


## Recorrer el cursor


Al final en la variable usuarios tenemos el cursor con todos los documentos resultado de la consulta. Vamos a utilizar una estructura `for in` para recorrer los documentos y volcarlos en pantalla.


```python
for usuario in usuarios:
    print usuario
```


De esta forma tan sencilla hemos creado un cursor en Pymongo con el resultado de una consulta a [MongoDB](https://www.manualweb.net/mongodb/).

