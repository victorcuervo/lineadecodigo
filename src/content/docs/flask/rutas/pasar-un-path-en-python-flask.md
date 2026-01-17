---
title: "Pasar un Path en Python Flask"
description: "Como poder subir un fichero a un servicio Flask y así poder pasar un path en Python Flask."
date: 2016-01-22
updatedDate: 2026-01-17
tags: ["path","route"]
slug: flask/rutas/pasar-un-path-en-python-flask
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/flask/tipospath.py
topic: flask

---

Cuando estemos creando servicios Rest en [Python](http://www.manualweb.net/python/) Flask se puede dar el caso de necesitar subir un fichero a un servicio. En este caso es posible que haya que enviar un path al servicio.


Y qué quiere decir que pasemos un path como variable a un servicio Flask, pues que la estructura de la variable path puede confundirse con el Path propio del servicio. En este ejemplo vamos a ver como podemos **pasar un Path en** [**Python**](http://www.manualweb.net/python/) **Flask**.


## Instalación de Flask


Si ya has instalado el microframework Flask:


```python
pip install Flask
```


Y has creado tu aplicación Flask:


```python
from flask import Flask
app = Flask(__name__)
```


## Crear una ruta con Path


Deberás crear una ruta que acepte el path como variable de la petición en el endpoint.


```python
@app.route('/fichero/<path>')
def subir_fichero(path):
    return f'Fichero: {path}'
```


## El problema del Path


El problema de crear esta ruta con el método `.route()` es que Flask va a ignorar variables del tipo `/fichero/directorio/subdirectorio/fichero.png` ya que se confunde con el path del endpoint.


## La solución: tipo Path


Para poder solucionarlo deberemos de indicar que la variable es de tipo **Path**. Así codificaremos nuestra ruta en Flask de la siguiente forma:


```python
@app.route('/fichero/<path:ruta>')
def subir_fichero(ruta):
    return f'Fichero: {ruta}'
```


Así ya podremos pasar un Path en [Python](http://www.manualweb.net/python/) Flask y subir la ruta de un fichero a nuestro servicio Flask.

