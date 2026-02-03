---
title: "Cabeceras en Flask"
description: "Ejemplo que nos enseña a crear un objeto response por partes para poder modificar las cabeceras en Flask y devolverlas personalizadas."
date: 2016-03-29
updatedDate: 2026-01-17
tags: ["response","http","cabeceras","make_response","headers"]
slug: python/rutas/cabeceras-en-flask
author: victor_cuervo
type: doc
id: 8571b965-437d-496d-a309-48a8223606b6
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/flask/cabeceras.py
---

Cuando respondemos un contenido desde un servidor a un cliente, uno de los contenidos que va en la respuesta (o **response**) son las **cabeceras**. Las cabeceras suelen llevar información sobre el contenido de la petición o sobre el servidor que está sirviendo la petición.


En este artículo vamos a ver cómo podemos manejar las cabeceras en [Flask](https://www.manualweb.net/flask/) para una petición.


## Respuestas en Flask


Lo primero que tenemos que saber para poder manejar las cabeceras en [Flask](https://www.manualweb.net/flask/) es cómo son las respuestas que devolvemos al cliente.


Lo más utilizado puede ser:

- Ver una plantilla como respuesta mediante el método `render_template()`
- Devolver un texto, ya sea plano, [XML](http://www.manualweb.net/xml/) o JSON

En todos los casos lo que se devuelve es un **objeto response**.


## Crear un objeto response


Si queremos crear un objeto response vacío podemos utilizar el método `make_response()`. Así podemos crear el siguiente objeto response con texto:


```python
response = make_response("Texto de la respuesta")
```


## Modificar las cabeceras


Lo bueno es que dentro del objeto response existe una colección llamada **headers** en la que van las cabeceras de la respuesta.


De esta forma, si queremos **modificar las cabeceras en Flask** y añadir una cabecera personalizada, podremos escribir:


```python
response.headers['X-Mi-Cabecera'] = 'Valor personalizado'
```


O podemos sobrescribir alguna de las cabeceras que se devuelve. Por ejemplo, podemos "tunear" la cabecera del servidor de la siguiente forma:


```python
response.headers['Server'] = 'Mi Servidor Personalizado'
```


## Devolver la respuesta


Ya solo nos quedará devolver el objeto response como resultado del método:


```python
return response
```


## Ejemplo completo


```python
from flask import Flask, make_response

app = Flask(__name__)

@app.route('/')
def index():
    response = make_response("Hola con cabeceras personalizadas")
    response.headers['X-Mi-Cabecera'] = 'Valor personalizado'
    response.headers['Server'] = 'Mi Servidor Personalizado'
    return response

if __name__ == '__main__':
    [app.run](http://app.run/)()
```


Ya hemos visto lo sencillo que es manejar las cabeceras en [Flask](https://www.manualweb.net/flask/).

