---
title: "Parámetros GET con Flask"
description: "La página explica cómo manejar parámetros GET con Flask a través de un formulario simple en una aplicación web."
date: 2016-03-31
updatedDate: 2026-01-06
tags: ["get","route","render_template","request"]
slug: flask/basicos/parametros-get-con-flask
author: victor_cuervo
type: doc
id: d0a08e40-822b-4e3d-8074-06e055e86c5c
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/flask/parametroget.py
---

Crear una aplicación web y pasar parámetros entre las páginas es la acción más normal. Aquí vamos a explicar cómo manejar parámetros GET con [Flask](https://www.manualweb.net/flask/). Lo primero de todo será crear una ruta que nos pinte un formulario. Esta ruta lo que hace es renderizar un template con un formulario mediante el método `render_template()`


```python
@app.route('/saludo',methods=['GET'])
def formulario():
  return render_template('formulario_get.html')
```


El formulario no deja de ser un [formulario HTML](https://manualweb.net/html/formularios-html/). Eso sí, el método de envío es GET y el destino o atributo `action` será la misma ruta. 


```html
<form action="/saludo" method="get">
  <label for="nombre">Nombre</label>
  <input type="text" id="nombre" name="nombre" />
  <input type="submit" value="Enviar" />
</form>
```


Ahora deberemos de modificar nuestra ruta para ver si vienen parámetros. Ya que si no vienen parámetros volveremos a pintar el formulario. Para poder recuperar los parámetros GET con [Flask](https://www.manualweb.net/flask/) manipulamos el objeto `request.arg`. En concreto el método `.get()`. Dicho método recibirá como valor el nombre del parámetro del formulario.


```python
nombre = request.args.get('nombre')
```


En caso de que falle volvemos a pintar el formulario: 


```python
@app.route('/saludo',methods=['GET'])
def formulario():

    #Comprobamos si viene el parametro por GET
    try:
        nombre = request.args.get('nombre')
        return render_template('formulario_get.html')
    except:
        return render_template('formulario_get.html')
```


Y si queremos controlar algo más, si el parámetro GET viene vacío también volvemos a pintar el formulario: 


```python
@app.route('/saludo',methods=['GET'])
def formulario():

    #Comprobamos si viene el parametro por GET
    try:
        nombre = request.args.get('nombre')

        if (nombre != ''):
            return 'Hola ' + nombre
        else:
            return render_template('formulario_get.html')
    except:
        return render_template('formulario_get.html')
```


De esta forma ya hemos visto lo sencillo que es **manejar parámetros GET con Flask.**

