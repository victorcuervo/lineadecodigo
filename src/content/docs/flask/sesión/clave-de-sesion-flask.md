---
title: "Clave de sesión Flask"
description: "Artículo que nos enseña como podemos cifrar la clave de sesión Flask de una forma dinámica mediante el método .urandom() de la librería os."
date: 2016-10-10
updatedDate: 2026-01-17
tags: ["os","session","clave","urandom"]
slug: flask/sesion/clave-de-sesion-flask
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/flask/sesion-clave.py
topic: flask

---

Tal y como vimos en el artículo [Sesión en Flask](http://lineadecodigo.com/python/sesion-en-flask/), tenemos una **Clave de sesión Flask** para poder crear una cookie con la información de la sesión. Y es que Flask utiliza el mecanismo de cookies para disponer de la información entre cada una de las peticiones que realiza el usuario.


## Crear la clave de sesión


Para crear la clave de sesión Flask utilizamos el siguiente código:


```python
app.secret_key = 'mi_clave_secreta'
```


A partir de ese momento Flask utilizará esta clave para poder cifrar la información de la cookie.


## ¿Cifrar con la misma clave?


En este punto la pregunta es, ¿debería de cifrar todas las cookies con la misma clave? La respuesta obviamente es no, es decir, deberíamos de intentar cifrar con diferentes claves a los usuarios.


## Generar claves aleatorias con os.urandom()


Para poder resolver esto podemos a la librería del sistema operativo `os` y utilizar un método de generación aleatoria como es `.urandom()`


Lo primero de todo será importar la librería del sistema:


```python
import os
```


Ahora simplemente deberemos de asignar a la clave de sesión Flask el valor del método `.urandom()`. Hay que tener en cuenta que el método `.urandom()` tiene como valor el número de bytes que queremos devolver. El contenido que devuelve es una cadena.


```python
app.secret_key = os.urandom(24)
```


De esta forma conseguiremos que la clave de cifrado utilizada como clave de sesión en Flask sea totalmente aleatoria y consigamos así un buen cifrado de la cookie.

