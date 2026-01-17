---
title: "Templates con listas en Flask"
description: "Ejemplo que nos enseña a crear paso a paso templates con listas en Flask."
date: 2016-03-03
updatedDate: 2026-01-17
tags: ["template","render_template","lista","for"]
slug: flask/plantillas/templates-con-listas-en-flask
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/flask/lista.py
topic: flask

---

Cuando estamos desarrollando páginas web con el framework Flask en [Python](http://www.manualweb.net/python/) podremos crear de una forma sencilla templates. Y es muy típico que queramos listar un conjunto de elementos dentro del template. En este ejemplo vamos a ver cómo podemos crear templates con listas en Flask.


## Crear la Ruta


Lo primero será crear nuestra aplicación Flask.


```python
from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello():
    return "Hola"

if __name__ == '__main__':
    [app.run](http://app.run/)()
```


Lo que podemos ver es que nuestra aplicación Flask tiene una ruta para la raíz del proyecto que simplemente nos muestra un "Hola" y la última línea que lo que hace es arrancar la aplicación. En ese momento ya se puede acceder al puerto 5000 de la máquina para ver la aplicación corriendo.


El siguiente paso será crear una lista de elemento dentro del método de la ruta.


```python
@app.route('/')
def hello():
    lista = ['Python', 'Java', 'Javascript', 'PHP']
    return render_template('lista.html', lista=lista)
```


Ahora tenemos que pasar esta lista a un template. Vamos a asumir que tenemos un template que se llama `lista.html` que ahora pasaremos a definir. Necesitaremos del método `render_template` para poder llamar al template. El método `render_template` hay que importarlo de la librería Flask.


```python
from flask import Flask, render_template
```


Y ahora lo invocamos...


```python
return render_template('lista.html', lista=lista)
```


Vemos que como parámetro le pasamos la lista de elementos que hemos creado.


## Template con la lista


Ahora vamos a definir el template `lista.html`. Este template deberá de estar dentro del directorio templates.


```javascript
/
/templates
```


El template podrá acceder a la lista que le hemos pasado en la variable `lista`. Lo que tendremos que hacer es recorrer dicha lista mediante la estructura de control `for`.


```html
{% for elemento in lista %}
  <p> elemento </p>
{% endfor %}
```


Para presentar los elementos deberemos de mostrar la variable entre llaves, con dos llaves a cada lado. Con esto ya sabremos crear templates con listas en Flask.

