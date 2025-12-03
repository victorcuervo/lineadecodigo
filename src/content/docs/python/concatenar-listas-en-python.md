---
title: Concatenar listas en Python
description: "Análisis de las dos formas que hay para concatenar listas en Python. Bien utilizando un operador suma o bien mediante el método extend."
lastUpdated: 2023-09-17
author: victor_cuervo
---

A la hora de manipular la listas, [Python](https://www.manualweb.net/python/) nos ofrece múltiples opciones. De esta forma, en este ejemplo, vamos a ver cómo podemos concatenar listas en [Python](https://www.manualweb.net/python/).


Para concatenar listas en [Python](https://www.manualweb.net/python/) tenemos dos formas. Por un lado será utilizando el operador suma y por otro será apoyándonos en el método [`.extend()`](https://www.w3api.com/Python/list/extend/).


### Crear una lista en Python


Pero vayamos paso a paso. Lo primero será crear una lista, en concreto lo que haremos será declarar las dos listas mediante [código en Python](https://lineadecodigo.com/categoria/pyhton/). Para ello las creamos e instanciamos directamente con una serie de valores:


```python
lista1 = [1,2,3,4]
lista2 = [5,6,7,8]
```


Hay que recordad que los elementos de una lista en [Python](http://www.manualweb.net/python/) van entre corchetes y separados por comas. En este caso estamos utilizando unas listas de enteros.


### Concatenar listas en Python con operador suma


En este primer caso vamos a utilizar el operador suma para concatenar listas en [Python](http://www.manualweb.net/python/). Para ello simplemente deberemos de sumar la primera lista con la segunda mediante el operador `+`.


Vamos a utilizar el operador suma conjuntamente con el operador de asignación para que el resultado quede en la `lista1`


```python
lista1+=lista2
print "Con operador +"
print lista1
```


En concreto hemos creado una asignación rápida mediante el operador `+=`. Y ya tendremos las listas concatenadas.


### Concatenar listas en Python con método .extend()


El segundo caso, va a hacer uso del método [`.extend()`](https://www.w3api.com/Python/list/extend/) que nos ofrece la clase [`list`](https://www.w3api.com/Python/list/) de [Python](http://www.manualweb.net/python/). Si revisamos la sintaxis del método [`.extend()`](https://www.w3api.com/Python/list/extend/) veremos que sobre la lista le podemos añadir otro elemento iterable.


```python
list.extend(iterable)
```


Es importante saber que el método [`.extend()`](https://www.w3api.com/Python/list/extend/) se aplica sobre la lista en la que se instancia. Es decir, no devuelve una nueva lista si no que modifica la lista origen.


Por lo tanto, utilizaremos el método [`.extend()`](https://www.w3api.com/Python/list/extend/) sobre la primera lista, utilizando la la segunda como parámetro del método.


```python
lista1.extend(lista2)
print "Con metodo .extend()"
print lista1
```


El método [`.extend()`](https://www.w3api.com/Python/list/extend/) tiene otra forma abreviada que sería la siguiente:


```python
lista[len(lista):] = iterable
```


Así que también podremos escribir nuestro código de la siguiente manera


```python
lista1[len(lista1):] = lista2
print "Método abreviado"
print lista1
```


Ya hemos visto tres formas sencillas que hay para concatenar listas en [Python](http://www.manualweb.net/python/). ¿Se te ocurre alguna otra? Déjanoslo en comentarios.

