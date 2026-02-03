---
title: "Páginas de Error en Flask"
description: "Cómo diseñar nuestros programas para poder gestionar las respuestas con páginas de Error en Flask de forma estándar, y así mantener informado al usuario."
date: 2016-03-23
updatedDate: 2026-01-06
tags: ["error","abort","401"]
slug: flask/errores/paginas-de-error-en-flask
author: victor_cuervo
type: doc
topic: flask
id: 2c8a9dfb-adca-8159-b8df-c6cea7f0fa8d
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/flask/error.py
---

Si queremos realizar un control de los errores dentro de nuestras aplicaciones deberemos de saber como gestionar nuestras páginas de error en [Flask](https://www.manualweb.net/flask/). Lo que tenemos que saber es cómo devolver un código de error u otro. Lo primero que tenemos que saber para controlar nuestras páginas de error en [Flask](https://www.manualweb.net/flask/) es que vamos a necesitar del método `abort()`. Es por ello que lo primero será recuperarlo de nuestro framework [Flask](https://www.manualweb.net/flask/).


```python
from flask import Flask, abort
```


Ahora lo siguiente será utilizar el método `abort()` en conjunto con uno de los códigos de error de HTTP como parámetro: 

- **401,** no autorizado.
- **403,** prohibido.
- **404,** no encontrado.
- **405,** método no permitido.
- …

Por ejemplo, podríamos controlar el acceso a una página mediante el siguiente código:


```python
@app.route('/bloqueado')
def bloqueado():
    return abort(401)
```


O bien indicar que hay un método que no está soportado:


```python
@app.route('/peticion',methods=['POST'])
def peticion():
    return abort(405)
```


Vemos que siempre es indicando el método `abort()` con el código de error asociado y devuelta la información como respuesta. Así ya hemos visto lo sencillo que es gestionar las páginas de Error en [Flask](https://www.manualweb.net/flask/). Eso sí, las páginas de error estándar.

