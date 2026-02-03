---
title: "Rotar listas con Collections en Python"
description: "Explicación de como podemos rotar listas con Collections en Python a izquierda y derecha mediante el uso del objeto deque y el método rotate."
date: 2021-03-01
updatedDate: 2026-01-17
tags: ["lista","deque","collections","rotate"]
slug: python/listas/rotar-listas-con-collections-en-python
author: victor_cuervo
type: doc
topic: python
id: 25a53ad8-1830-4c13-817d-9d4aa3ed1771
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/listas/rotar-lista-collections.py
---

Ya hemos visto en un artículo anterior [cómo rotar listas con slicing en Pyhton](http://lineadecodigo.com/python/rotar-listas-con-slicing-en-python/). En este caso vamos a ver una alternativa para poder rotar listas con Collections en [Python](http://www.manualweb.net/python). Aunque el manejo del slicing sea sencillo quizás el uso de la librería Collections sea todavía más sencillo.


Pero vamos por pasos. Lo primero será crear la lista. En este caso vamos a crear una sencilla lista de números:


```python
lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```


## Importar el objeto deque


Para poder utilizar los objetos de la librería Collections de [Python](http://www.manualweb.net/python) lo que tendremos que hacer es importar la librería. Así que al principio de nuestro programa lo que haremos será importarla. Si bien solo vamos a importar el objeto `deque`. Así que utilizaremos la sentencia `from...import` para hacerlo de la siguiente manera:


```python
from collections import deque
```


El objeto `deque` es una cola que nos permite añadir elementos tanto al principio como al final de la cola. Lo primero que haremos será convertir la lista que tenemos en un objeto `deque` de tipo cola.


```python
cola = deque(lista)
```


## Rotar elementos a la derecha


Ahora, para poder rotar la lista nos vamos a apoyar en el método `.rotate()`. A este método le pasaremos como parámetro el número de elementos que queremos rotar hacía la derecha. De esta manera si queremos rotar tres elementos escribiremos lo siguiente:


```python
cola.rotate(3)
```


De esta manera la lista inicial quedaría de la siguiente forma:


```python
[8, 9, 10, 1, 2, 3, 4, 5, 6, 7]
```


En ella vemos que hemos desplazado tres posiciones a la derecha y por lo tanto el inicio de la lista se ha empezado a rellenar con los elementos que desbordaban de la lista.


> Vemos que para poder imprimir la lista en [Python](http://www.manualweb.net/python) nos hemos apoyado en la función `list()`, que convierte la cola en una lista para que pueda ser impresa por pantalla.


## Rotar elementos a la izquierda


Pero el método `.rotate()` también permite que el parámetro sea negativo. En este caso el comportamiento del método `.rotate()` será la de rotar los elementos hacía la izquierda. De esta manea podríamos escribir el siguiente código:


```python
cola.rotate(-6)
```


En este caso hemos rotado hacía la izquierda 6 elementos, quedándonos el siguiente resultado de la lista:


```python
[4, 5, 6, 7, 8, 9, 10, 1, 2, 3]
```


Hay que tener en cuenta que a la lista inicial ya le habíamos rotado 3 elementos a la derecha, así que el resultado final de mover 6 elementos a la izquierda sería el mismo si hubiésemos rotado 3 elementos a la izquierda a la lista inicial. En la rotación hacía la izquierda vemos que los elementos que desbordan por la izquierda son añadidos al final de la lista.


De esta manera tan sencilla hemos conseguido rotar listas con Collections en [Python](http://www.manualweb.net/python) mediante el uso del objeto `deque` y su método `.rotate()`.

