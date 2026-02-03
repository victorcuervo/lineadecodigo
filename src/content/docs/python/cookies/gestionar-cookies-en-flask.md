---
title: "Gestionar Cookies en Flask"
description: "Aprende a gestionar cookies en Flask de manera sencilla y efectiva. Establece y recupera información del usuario para mejorar la experiencia en tu aplicación web."
date: 2016-03-21
updatedDate: 2026-01-17
tags: ["cookies","make_response","set_cookie"]
slug: python/cookies/gestionar-cookies-en-flask
author: victor_cuervo
type: doc
id: 6e64f45f-8802-401b-9aec-64f39a25cd7c
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/flask/cookie.py
---

Cuando estés construyendo una aplicación web con [Flask](https://www.manualweb.net/flask/) puede darse el caso de que necesites gestionar información sobre el usuario que se conecta y que quieras guardarla en cookies. En este ejemplo vamos a ver cómo podemos gestionar cookies en [Flask](https://www.manualweb.net/flask/).


Lo primero que tenemos que saber es que deberemos de gestionar cookies en [Flask](https://www.manualweb.net/flask/) desde dos puntos de vista, el primero será para establecer el contenido de una Cookie. En ese punto asignaremos un valor a una clave. Dicha clave/valor la almacenaremos en la cookie. La segunda parte será recuperar la cookie. Para ello necesitaremos la clave en cuestión.


## Guardar una Cookie


Lo primero que vamos a hacer es guardar una Cookie. En este punto deberemos de saber que la Cookie es una información que debe de viajar y guardarse en el cliente, por lo tanto deberemos de devolverla en una respuesta. En este punto utilizaremos el objeto `response` para devolver esa información. Para poder crear un objeto response utilizaremos el método `make_response()`.


```python
resp = make_response('Cookie Establecida')
```


Al método `make_response()` podemos enviarle una página o un contenido en texto o json. En nuestro caso hemos hecho lo más sencillo que es devolverle un texto. Ahora añadiremos, sobre el response, la cookie mediante el método `set_cookie()`:


```python
resp.set_cookie('nombre','Línea de Código')
```


En este caso hemos utilizado la clave `nombre` y el valor `Línea de Código`. Ya solo nos quedará devolver el objeto response como respuesta de la petición.


```python
@app.route('/')
def principal():
    resp = make_response('Cookie Establecida')
    resp.set_cookie('nombre','Línea de Código')
    return resp
```


## Recuperar una Cookie


Para recuperar una cookie deberemos de utilizar el objeto `request`, el cual nos proporciona otro objeto `cookies`, que a su vez contiene un método `get()`. Al método `get()` le indicaremos el valor de la clave para poder recuperar la cookie.


```python
@app.route('/saludo')
def saludo():
    nombre = request.cookies.get('nombre')
    return 'Hola ' + nombre
```


Ese valor ya podremos utilizarlo como más nos convenga en nuestra aplicación [Flask](https://www.manualweb.net/flask/). Así, con estos dos sencillos métodos hemos visto como podemos gestionar Cookies en [Flask](https://www.manualweb.net/flask/) para establecerlas y recuperarlas.

