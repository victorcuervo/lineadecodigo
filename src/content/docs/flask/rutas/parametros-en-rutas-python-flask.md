---
title: "Parámetros en rutas Python Flask"
description: "Se explica cómo pasar parámetros en rutas Python Flask utilizando un ejemplo de saludo con un nombre."
date: 2016-01-18
updatedDate: 2026-01-06
tags: ["route","get","def","parametros"]
slug: flask/rutas/parametros-en-rutas-python-flask
author: victor_cuervo
type: doc
id: 170afe0b-fa9b-413f-882f-747e4812a62f
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/flask/parametroget.py
---

Cuando estemos creando nuestras rutas en Flask es muy probable que necesitemos el pasar parámetros. Lo que vamos a ver en este ejemplo es como podemos pasar parámetros en rutas [Python](http://www.manualweb.net/python/) Flask. Lo primero habrá sido instalar el microframework de Flask.


```shell
pip install Flask
```


Y haber creado nuestra aplicación Flask.


```python
from flask import Flask
app = Flask(__name__)

if __name__ == '__main__':
    app.run()
```


Ahora vamos a crear una ruta, la cual reciba un nombre como parámetro y nos devuelva un mensaje de contestación en plan saludo, "Hola" y el nombre enviado. Esto nos servirá para ver cómo podemos pasar parámetros en rutas [Python](http://www.manualweb.net/python/) Flask. Lo primero es centrarnos en la ruta.


```python
@app.route('/saludo/<nombre>',methods=['GET'])</nombre>
```


La ruta debe de indicar el nombre de la variable que se obtendrá de la URI mediante un nombre dentro de los símbolos de menos y mayor. Además, en este caso, hemos indicado que el método de petición es un tipo GET. Ahora vamos a definir un método que atienda a esta ruta. La peculiaridad de dicho método será que deberá de tener un parámetro, el cual se corresponderá con la variable de la ruta.


```python
def saludo(nombre):
    return 'Hola ' + nombre + '!!!'
```


Ahora ya podemos utilizar esta variable dentro del método. En nuestro caso la hemos utilizado en la respuesta como parte del saludo. Finalmente la ruta entera nos quedará de la siguiente forma:


```python
@app.route('/saludo/<nombre>',methods=['GET'])
def saludo(nombre):
    return 'Hola ' + nombre + '!!!'</nombre>
```


Ya hemos visto lo sencillo que es pasar parámetros en rutas [Python](http://www.manualweb.net/python/) Flask.

