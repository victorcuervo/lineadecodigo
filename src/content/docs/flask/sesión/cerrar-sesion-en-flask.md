---
title: "Cerrar Sesión en Flask"
description: ""
date: 2016-10-08
updatedDate: 2026-01-15
tags: ["pop","clear","session"]
slug: flask/sesion/cerrar-sesion-en-flask
author: victor_cuervo
type: doc
topic: flask
id: 48921f45-8106-4581-8134-bda03752938f
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/flask/sesion-eliminar.py
---

Ya hemos visto [cómo se gestionan las sesiones en Flask](http://lineadecodigo.com/python/sesion-en-flask/). Hoy vamos a ver cómo debemos de cerrar sesión en [Flask](https://www.manualweb.net/flask/).


## Crear la sesión


Lo primero que haremos será subir datos a la sesión mediante el objeto `session` [Flask](https://www.manualweb.net/flask/) y el nombre de variable que queramos almacenar.


```python
session['usuario'] = 'victor'
session['edad'] = 45
```


A partir de este momento estas dos variables estarán disponibles en todas las peticiones que haga el usuario ya que viajan en la cookie que se gestiona con este.


## Cerrar sesión en Flask


Tenemos dos formas de cerrar sesión en [Flask](https://www.manualweb.net/flask/). La primera es borrar campo a campo toda la información que hayamos ido guardando. Esto puede ser sencillo en el caso de que el número de campos que hayamos manejado sea pequeño. Lo segundo que podemos hacer es eliminar directamente toda la sesión. Pero veamos cómo funciona cada uno de ellos.


## Eliminar Campos de la sesión


Para poder eliminar campos de la sesión en [Flask](https://www.manualweb.net/flask/) utilizamos el método `.pop()`. Este método recibe como parámetro el nombre del campo que queremos eliminar y un valor None.


```python
session.pop('usuario', None)
session.pop('edad', None)
```


## Eliminar toda la sesión


En el caso que queramos eliminar toda la información de la sesión deberemos de utilizar el método `.clear()` directamente sobre el objeto `session`.


```python
session.clear()
```


De esta manera se borrarán todos los campos que hayamos subido a la sesión y la cookie que se intercambia con el navegador del usuario. Ya solo te queda ver cuál de las dos formas de cerrar sesión en [Flask](https://www.manualweb.net/flask/) te es más interesante para tu aplicación.

