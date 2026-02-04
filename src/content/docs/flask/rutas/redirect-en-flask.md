---
title: "Redirect en Flask"
description: ""
date: 2016-03-27
updatedDate: 2026-01-17
tags: ["route","url_for","redirect"]
slug: flask/rutas/redirect-en-flask
type: doc
topic: flask
id: e84470f9-0991-4da2-a64b-8d372bc8a8ea
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/flask/redirect.py
---

Una de las cosas que se hace mucho en las aplicaciones web, por lo que se respecta al lado del servidor, es redireccionar un contenido. Veamos en este artículo como realizar un **Redirect en** [**Flask**](https://www.manualweb.net/flask/).


## Crear una ruta con contenido


Lo primero será crear una ruta en la que tengamos contenido. Para ello nos apoyamos en la anotación `route()`.


```python
@app.route('/')
def holamundo():
    return 'Hola Mundo'
```


En este caso vemos que la ruta a la que atendemos es la raíz y que el método se llamará `holamundo()`. Es importante el nombre del método ya que la redirección no la haremos a la ruta si no que la haremos al método.


## Crear la ruta con redirect


Ahora pasamos a crear una segunda ruta, la cual tendrá el redirect en [Flask](https://www.manualweb.net/flask/).


```python
@app.route('/saludo')
def saludo():
    return redirect(url_for('holamundo'))
```


Para poder crear el redirect en [Flask](https://www.manualweb.net/flask/) nos vamos a apoyar en el método `redirect()`, al cual le pasaremos la ruta a la cual redireccionar. Pero como ya vimos en el artículo [URLs de rutas con Flask](http://lineadecodigo.com/python/urls-rutas-flask/), no debemos de utilizar la ruta (por si lo cambiamos) si no que habrá que utilizar el método `url_for()` al cual pasaremos el nombre del método que tiene la ruta a redireccionar.


## Código completo


Así el código con el redirect en [Flask](https://www.manualweb.net/flask/) nos queda de la siguiente forma:


```python
from flask import Flask, redirect, url_for

app = Flask(__name__)

@app.route('/')
def holamundo():
    return 'Hola Mundo'

@app.route('/saludo')
def saludo():
    return redirect(url_for('holamundo'))

if __name__ == '__main__':
    [app.run](http://app.run/)()
```


Algo muy sencillo, ahora solo tienes que acceder a la ruta `/saludo` para ver qué sucede y cómo funciona el redirect en [Flask](https://www.manualweb.net/flask/).

