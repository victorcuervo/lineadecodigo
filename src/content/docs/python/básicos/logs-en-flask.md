---
title: "Logs en Flask"
description: "Descubre cómo gestionar los logs en Flask para depurar y analizar el comportamiento de tu aplicación de manera efectiva y sencilla. ¡Optimiza tu código ahora!"
date: 2016-10-07
updatedDate: 2026-01-17
tags: ["log","logger","info","basicconfig"]
slug: python/basicos/logs-en-flask
type: doc
topic: python
id: b262a87b-31e2-4df5-9949-a1a3cc8b84b6
author: victor_cuervo
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/flask/logs.py
---

Cuando estemos trabajando con una aplicación de Flask es muy común que necesitemos analizar su comportamiento, es por ello que deberemos de saber cómo se gestionan los logs en Flask.


## Objeto app.logger


Para poder acceder a los logs en Flask tenemos el objeto `app.logger`, dicho objeto tiene tres métodos que nos servirán para indicar la severidad del log. De esta forma podemos utilizar:


```python
app.logger.error('mensaje de error')
app.logger.warning('mensaje de alerta')
[app.logger.info](http://app.logger.info/)('mensaje de información')
```


Cada uno de ellos recibe como parámetro el mensaje que queremos grabar en el log. Por ejemplo podríamos tener el siguiente código:


```python
@app.route('/')
def index():
    [app.logger.info](http://app.logger.info/)('Accediendo a la página principal')
    return 'Hola Mundo'
```


## Logs en Flask a fichero


El contenido de los logs en Flask se vuelca directamente sobre la consola del servidor web, así que deberemos de acudir a ella para ver el contenido volcado. Otra opción es que configuremos que los logs se vuelquen a fichero. Para ello necesitamos manipular el objeto `logging`. Para poder utilizar el objeto logging deberemos de importarlo:


```python
import logging
```


Una vez importado mediante el método `.basicConfiguration()` vamos a indicarle el nivel de logs que queremos grabar, así como el fichero destino de los logs:


```python
logging.basicConfig(filename='/tmp/errores.log', level=logging.DEBUG)
```


Mediante esta configuración podremos encontrar toda la información trazada mediante los Logs en Flask dentro de `/tmp/errores.log`.

