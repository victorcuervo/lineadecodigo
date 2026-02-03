---
title: "URLs de Rutas en Flask"
description: "Cuando definimos métodos y rutas debemos de tener especial cuidado en como utilizar las URLS de Rutas en Flask para que no haya problemas ante cambios."
date: 2016-03-17
updatedDate: 2026-01-17
tags: ["Python Flask","Python Flask Rutas"]
slug: flask/rutas/urls-de-rutas-en-flask
author: victor_cuervo
type: doc
id: 5788c38a-fcda-4b2b-b048-b41e73955a90
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/flask/urls.py
---

Una de las principales características que tiene [Flask](https://www.manualweb.net/flask/) y por lo cual es muy cómodo y sencillo de utilizar es la creación de rutas. La idea que subyace por debajo es que se define una ruta y a dicha ruta se le asigna un método que responde por ella.


De esta forma podemos definir la siguiente ruta:


```python
@app.route('/saludo/dia')
def dia():
    return 'Buenos días'
```


Lo que vemos es que a la petición GET sobre la URL '/saludo/dia' contestará la funcionalidad del método `dia()`. Como podemos ver, algo muy sencillo.


## Referenciando rutas con url_for


Al final acabaremos creando una aplicación en las que se vayan llamando todas sus rutas de una a otra, al final, en la mayoría de los casos serán páginas web. Como todo está basado en estas rutas tenemos que tener especial cuidado cuando las usemos.


Es decir, no deberemos de utilizar la ruta directamente si no que deberemos de referenciar al método. Para poder hacer referencia al método y que nos devuelva la ruta tenemos la operación `url_for()`. Esta operación recibe como parámetro el nombre del método y nos devuelve la ruta.


```python
url_for('dia')
```


Esto nos va a permitir que si cambiamos una ruta el resto de la aplicación no se vea afectado.


## Ejemplo de uso de url_for


Como ejemplo vamos a crear tres rutas:


```python
@app.route('/saludo/dia')
def dia():
    return 'Buenos días'

@app.route('/saludo/tarde')
def tarde():
    return 'Buenas tardes'

@app.route('/saludo/noche')
def noche():
    return 'Buenas noches'
```


Y ahora vamos a ver como se referenciarían desde un template en [Flask](https://www.manualweb.net/flask/):


```html
<ul>
  <li>{{ url_for("dia") }}</li>
  <li>{{ url_for("tarde") }}</li>
  <li>{{ url_for("noche") }}</li>
</ul>
```


De esta manera ya hemos visto la forma más correcta de manejar las URLs de Rutas en [Flask](https://www.manualweb.net/flask/).

