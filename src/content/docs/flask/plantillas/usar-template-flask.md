---
title: "Usar template Flask"
description: "Aprende a usar un template en Flask y crea páginas web dinámicas fácilmente. Descubre cómo pasar parámetros y personalizar tu contenido de forma sencilla."
date: 2016-03-13
updatedDate: 2026-01-17
tags: ["template","render_template"]
slug: flask/plantillas/usar-template-flask
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/flask/template.py
topic: flask

---

Una de las cosas más sencillas que se pueden hacer en [Flask](https://www.manualweb.net/flask/) es crear una página web ante una petición. Es decir, usar un template en [Flask](https://www.manualweb.net/flask/) que sea una página [HTML](https://www.manualweb.net/html/) a la cual podemos insertar contenido recuperado desde nuestro programa [Python](http://www.manualweb.net/python/).


## Crear una ruta en Flask


Lo primero será crear una ruta para aceptar una petición. En este caso utilizamos la raíz del servidor.


```python
@app.route('/')
```


## Usar render_template


Una vez que recibamos una petición en esta ruta utilizaremos **como retorno el método** `render_template` el cual indicará como parámetro el nombre del template a cargar.


```python
return render_template('template.html')
```


> Los template en [Flask](https://www.manualweb.net/flask/) están en el directorio <samp>templates</samp>


## Pasar parámetros al template


En el caso de que queramos pasarle parámetros, estos los pondremos a continuación.


```python
@app.route('/')
def saludo():
  nombre = 'Victor'
  return render_template('hola.html',nombre=nombre)
```


## Crear el template HTML


Ahora pasamos a crear el template. Hay que crear un fichero [HTML](https://www.manualweb.net/html/) en el directorio templates. Dentro del fichero [HTML](https://www.manualweb.net/html/) podremos volcar el contenido de la variable utilizando su nombre entre llaves.


```html
<!DOCTYPE html>
<html lang="es">
<head>
<title>Hola Mundo</title>
</head>
<body>

Hola {{ nombre }}

</body>
</html>
```


De esta forma tan sencilla habremos conseguido usar un template en [Flask](https://www.manualweb.net/flask/).

