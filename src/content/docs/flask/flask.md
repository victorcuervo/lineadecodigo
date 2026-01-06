---
title: "Flask"
description: ""
date: 2026-01-06
updatedDate: 2026-01-06
tags: []
slug: flask
author: victor_cuervo
type: category

topic: flask
---

Flask es un microframework de Python basado en Werkzeug, Jinja 2 y buenas intenciones. Con Flask puedes construir aplicaciones web y RESTful en Python de forma sencilla.


La mayor virtud de Flask es la simplicidad para crear rutas web. Una aplicación que devuelva "Hola Mundo" es tan simple como esto:


```python
from flask import Flask
app = Flask(__name__)

@app.route("/")
def hello():
    return "¡Hola Mundo!"

if __name__ == "__main__":
    app.run()
```


Simplemente ve a [http://localhost:5000/](http://localhost:5000/) para ver tu aplicación Flask en acción.

