---
title: "Personalizar errores en Flask"
description: "Explicación sobre cómo se pueden personalizar errores en Flask mediante el uso de anotaciones. Uso de templates como respuesta ante errores."
date: 2016-03-25
updatedDate: 2026-01-06
tags: ["error","abort","errorhandler","401"]
slug: flask/errores/personalizar-errores-en-flask
author: victor_cuervo
type: doc
id: 2c8a9dfb-adca-8196-91c8-eac841e84984
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/flask/error_personalizado.py
---

Ya hemos visto en un artículo [cómo podemos manejar las páginas de error en Flask](http://lineadecodigo.com/python/paginas-error-flask/). Si bien, lo que veíamos era cómo generar páginas de error estándares. En este caso vamos a ver cómo podemos personalizar errores en [Flask](https://www.manualweb.net/flask/). Para gestionar el error vamos a utilizar el método `abort()`, al cual le pasaremos el código del error a devolver.


```python
@app.route('/bloqueado')
def bloqueado():
    return abort(401)
```


Hasta aquí todo correcto, ya que tendremos la página estándar del **error 401** como respuesta a llamar a la ruta:


```bash
https://localhost:5000/bloqueado
```


Para poder personalizar errores en [Flask](https://www.manualweb.net/flask/) deberemos de utilizar una anotación con un `errorhandler()` al cual indicaremos el código de error que estamos gestionando.


```python
@app.errorhandler(401)
```


El método que asignemos como controlador recibirá un objeto error como parámetro:


```python
@app.errorhandler(401)
def access_error(error):
```


Y el contenido a devolver ya depende de lo que queramos hacer. Si bien lo más habitual será devolver una plantilla mediante el método `render_template()`. Lo que no se nos tiene que olvidar es que en la respuesta deberemos de indicar nuevamente el código de error, para que este sea devuelto al cliente.


```python
@app.errorhandler(401)
def access_error(error):
    return render_template('error_401.html'), 401
```


Así ya hemos visto lo sencillo que es personalizar errores en [Flask](https://www.manualweb.net/flask/) mediante anotaciones.

