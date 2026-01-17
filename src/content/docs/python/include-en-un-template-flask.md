---
title: "Include en un template Flask"
description: ""
date: 2016-03-15
updatedDate: 2026-01-17
tags: ["template","include","render_template"]
slug: python/include-en-un-template-flask
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/flask/template_inc.py
topic: python

---

Si te has liado a realizar templates en [Flask](https://www.manualweb.net/flask/) es fácil que quieras reutilizar código y necesites meter un include en un template [Flask](https://www.manualweb.net/flask/). En este ejemplo vamos a explicar cómo se puede llevar a cabo esta tarea.


## Crear el código a reutilizar


Lo primero es crear el código a reutilizar. El código no deja de ser un trozo [HTML](https://www.manualweb.net/html/), en este caso vamos a crear un **footer.html**.


```html
<footer>
  <p>Línea de Código - 2016</p>
</footer>
```


El fichero **footer.html** lo vamos a poner dentro del directorio templates. A modo de organización hemos creado un subdirectorio inc para guardarlo.


`/templates/inc/footer.html`


## Incluir el template


Ahora nos dirigimos a nuestro template en Flask y lo que tenemos que utilizar es una estructura:


```javascript
{% include 'ruta/fichero.html' %}
```


Es importante que la ruta y el fichero a incluir es desde la base del directorio. En el caso que estamos codificando habría que añadir lo siguiente:


```javascript
{% include 'inc/footer.html' %}
```


## Ejemplo completo


De esta forma, nuestra aplicación que crea un include en un template [Flask](https://www.manualweb.net/flask/) tendría tres partes:


## Programa: hola.py


```python
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def hola():
    return render_template('hola_footer.html')

if __name__ == '__main__':
    [app.run](http://app.run/)(debug=True)
```


## Template: /templates/hola_footer.html


```html
<!DOCTYPE html>
<html>
<head>
    <title>Hola con Footer</title>
</head>
<body>
    <h1>Hola Mundo</h1>
    {% include 'inc/footer.html' %}
</body>
</html>
```


## Código a Reutilizar: /templates/inc/footer.html


```html
<footer>
  <p>Línea de Código - 2016</p>
</footer>
```

