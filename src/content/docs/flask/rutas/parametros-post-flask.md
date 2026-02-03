---
title: "Parámetros POST Flask"
description: "Este artículo explica cómo manejar los parámetros POST en Flask mediante la creación de formularios y su procesamiento."
date: 2016-04-02
updatedDate: 2026-01-13
tags: ["post","get","form","request","render_template","formulario"]
slug: flask/rutas/parametros-post-flask
author: victor_cuervo
type: doc
topic: flask
id: 119b5c98-ba49-4c85-abe3-7a0c4d843abf
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/flask/formulario.py
---

Para crear un formulario en una aplicación POST nos llevará a saber cómo controlar los datos que subimos. Aquí vamos a ver cómo podemos manejar los parámetros POST con [Flask](https://www.manualweb.net/flask/).


Lo primero será crear una ruta que acepte una petición GET la cual nos devuelva un formulario. El formulario lo vamos a renderizar mediante un método `render_template()`:


```python
@app.route('/saludo', methods=['GET'])
def formulario():
    return render_template('formulario.html')
```


## Plantilla del Formulario


La plantilla del formulario será muy sencilla. Lo importante es que el método sea POST y que el campo `action` esté apuntando a la misma ruta `/saludo`:


```html
<form action="/saludo" method="post">
    <label for="nombre">Nombre</label>
    <input id="nombre" name="nombre" type="text"></input>
    <br>
    <label for="apellido">Apellido</label>
    <input id="apellido" name="apellido" type="text"></input>
    <br>
    <input type="submit" value="Enviar"></input>
</form>
```


Es muy importante poner los atributos `name` en el formulario, ya que será ese atributo el que utilicemos para recuperar el valor.


## Procesar los Datos POST


Ahora volvemos a crear la misma ruta, pero en este caso para que acepte las peticiones POST:


```python
@app.route('/saludo', methods=['POST'])
def saludo():
```


Para acceder a la información de los atributos del formulario utilizamos el objeto `request.form`. Este objeto tiene en una colección los atributos. Así que recuperaremos el valor de los campos nombre y apellidos del formulario mediante el siguiente código:


```python
nombre = request.form['nombre']
apellido = request.form['apellido']
```


Ya solo nos quedará algo así como devolverlos como respuesta:


```python
@app.route('/saludo', methods=['POST'])
def saludo():
    nombre = request.form['nombre']
    apellido = request.form['apellido']
    return 'Hola ' + nombre + ' ' + apellido
```


De esta forma ya hemos conseguido manipular y recuperar parámetros POST con [Flask](https://www.manualweb.net/flask/).

