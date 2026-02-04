---
title: "Parámetros Python Flask con tipo"
description: "Aprende a forzar parámetros Python Flask con tipo para asegurar que solo se acepten números enteros en tu aplicación y evita errores en las sumas."
date: 2016-01-20
updatedDate: 2026-01-17
tags: ["tipo","variable","parametros","get","int","route"]
slug: flask/rutas/parametros-python-flask-con-tipo
type: doc
topic: flask
id: 2c8a9dfb-adca-81ac-8c41-fddc78e87a9c
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/flask/tiposparametro.py
---

Ya hemos visto cómo podemos pasar parámetros GET en peticiones [Python](http://www.manualweb.net/python/) Flask. En este caso vamos a ver cómo podemos **forzar el tipo de parámetros** que se envían. Es decir, forzar a que el path de los parámetros de una petición GET sean de un tipo u otro.


Para poder demostrar cómo funcionan los parámetros [Python](http://www.manualweb.net/python/) Flask con tipo vamos a crear un servicio REST que nos sume dos números.


## Instalar Flask


Lo primero será instalar el microframework Flask:


```bash
pip install Flask
```


## Crear la aplicación Flask


Lo siguiente será crear nuestra aplicación Flask:


```python
from flask import Flask
app = Flask(__name__)
```


## Ruta sin tipo de parámetros


Ahora vamos a crear la ruta que nos sume los números. Esta será una ruta en la que haya dos variables y que devuelva la suma de las dos variables:


```python
@app.route('/suma/<numero1>/<numero2>')
def suma(numero1,numero2):
    return str(int(numero1) + int(numero2))
```


El problema de esta ruta y método de suma es que los parámetros pasados dentro del Path pueden ser de cualquier tipo y alguien podría invocarnos de la siguiente forma:


```bash
/suma/hola/adios
```


Y tendríamos algo tan curioso como las dos cadenas sumadas "holaadios".


## Forzar tipo de parámetros


Lo que vamos a hacer es tener parámetros [Python](http://www.manualweb.net/python/) Flask con tipo, en este caso vamos a forzar que los parámetros sean números. Para ello vamos a indicar que las variables son de tipo `int` de la siguiente forma:


```python
@app.route('/suma/<int:numero1>/<int:numero2>')
def suma(numero1,numero2):
    return str(numero1 + numero2)
```


De esta forma nuestra ruta suma solo se ejecutará si las variables son números enteros. Así hemos visto cómo podemos tener parámetros [Python](http://www.manualweb.net/python/) Flask con tipo.

