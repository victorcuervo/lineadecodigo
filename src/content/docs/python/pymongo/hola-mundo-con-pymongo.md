---
title: "Hola Mundo con Pymongo"
description: "Descubre cómo crear tu primer programa \"Hola Mundo con Pymongo\" y conecta fácilmente Python a MongoDB. ¡Aprende y comienza a desarrollar hoy!"
date: 2016-03-09
updatedDate: 2026-01-17
tags: ["mongodb","mongoclient","find_one","hola-mundo"]
slug: python/pymongo/hola-mundo-con-pymongo
author: victor_cuervo
type: doc
topic: python
id: c5177e91-b244-4c58-ae51-12844d3948d1
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/pymongo/hola-mundo-pymongo.py
---

**Pymongo** es una librería de [Python](http://www.manualweb.net/python/) para poder conectarnos a una base de datos [MongoDB](https://www.manualweb.net/mongodb/). En este ejemplo vamos a ver cómo podemos crear el primer programa que se conecte desde [Python](http://www.manualweb.net/python/) a [MongoDB](https://www.manualweb.net/mongodb/).


## Instalación de Pymongo


Para ello vamos a crear el hola mundo con Pymongo. Lo primero será instalar Pymongo. Para ello vamos a utilizar el comando `pip`:


```bash
pip install pymongo
```


O también:


```bash
python -m pip install pymongo
```


## Conectarse a MongoDB


El objeto que nos ofrece la librería **Pymongo** para poder conectarnos a MongoDB es el `MongoClient`, así que el principio de nuestro programa importará dicho objeto.


```python
from pymongo import MongoClient
```


Si utilizamos una conexión por defecto y tenemos instalado el MongoDB en nuestra máquina simplemente instanciaremos el objeto.


```python
client = MongoClient()
```


Si la base de datos MongoDB está en otra máquina o tiene usuario y password (algo bastante normal y recomendable) deberemos de pasarle como parámetro la URL de conexión.


```python
client = MongoClient('mongodb://usuario:password@servidor:puerto/')
```


## Seleccionar la base de datos


Ahora que ya estamos conectados al servidor vamos a elegir qué base de datos queremos utilizar. Si por ejemplo contásemos con una base de datos llamada `usuarios` escribiríamos lo siguiente:


```python
db = client.usuarios
```


## Seleccionar la colección


Lo siguiente será elegir la colección sobre la que queremos iterar. Si nuestra colección es `listado` tendremos que escribir el siguiente código:


```python
users = db.listado
```


Vemos que hemos puesto la base de datos seguida del nombre de la colección.


> La sintaxis de **Pymongo** es muy parecida a la utilizada en la consola de [MongoDB](https://www.manualweb.net/mongodb/). Lo que lo hace muy fácil de aprender y escribir.


## Recuperar un documento


Si queremos recuperar el primer documento de la colección tenemos el método `.find_one()`:


```python
print(users.find_one())
```


Al imprimirlo por pantalla obtendremos el JSON correspondiente al primer documento.


Con estas pocas líneas de código tenemos construido nuestro programa hola mundo con Pymongo que nos permita crear un programa [Python](http://www.manualweb.net/python/) que acceda a [MongoDB](https://www.manualweb.net/mongodb/).

