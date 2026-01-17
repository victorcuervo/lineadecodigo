---
title: "Hola Mundo con Python Flask"
description: "Aprende a crear tu primera aplicación con Flask y sorpréndete con lo fácil que es desarrollar un Hola Mundo con Python Flask en pocos pasos."
date: 2016-01-16
updatedDate: 2026-01-17
tags: ["hola-mundo","install","route"]
slug: python/basicos/hola-mundo-con-python-flask
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/flask/holamundo.py
topic: python

---

**Flask** es un microframework de [Python](http://www.manualweb.net/python/) que está basado en **Werkzeug**, **Jinja 2** y buenas intenciones. Mediante Flask podemos construir aplicaciones Web y Restful con [Python](http://www.manualweb.net/python/) de una forma extraordinariamente sencilla.


En el ejemplo de hoy vamos a tener una primera toma de contacto con el microframework construyendo un **Hola Mundo con Python Flask**.


## Instalar Flask


Lo primero será instalar el microframework, para ello utilizamos el comando `pip`.


```bash
pip install flask
```


## Crear la aplicación Flask


Ahora creamos un fichero Python que se llame [`holamundo.py`](http://holamundo.py/). Lo primero que haremos será importar Flask.


```python
from flask import Flask
```


Lo siguiente será crear la aplicación Flask.


```python
app = Flask(__name__)
```


## Definir la ruta


Flask se basa en la definición de rutas o `routes` para realizar las implementaciones de los endpoints. Se crea un método con una implementación que acabe devolviendo algún tipo de contenido y a dicho método se le asigna una ruta.


Por ejemplo vamos a crear un método `holamundo` que simplemente devuelva un texto con "Hola Mundo!".


```python
def holamundo():
    return "Hola Mundo!"
```


Ahora vamos a indicar que este método será el que atienda a las peticiones de la raíz de nuestro servidor.


```python
@app.route('/')
def holamundo():
    return "Hola Mundo!"
```


Vemos que hemos utilizado el método `.route` con la ruta como parámetro para poder asignar dicha ruta.


## Ejecutar la aplicación


Ya solo nos quedará lanzar la aplicación mediante el método `.run()`.


```python
if __name__ == '__main__':
    [app.run](http://app.run/)()
```


Cuando ejecutemos nuestra aplicación python:


```bash
python [holamundo.py](http://holamundo.py/)
```


Tendremos al servidor web ejecutándose en: [`http://127.0.0.1:5000/`](http://127.0.0.1:5000/)


Así que ya solo nos queda ejecutarlo en el navegador para ver funcionando nuestro **Hola Mundo con Python Flask**.

