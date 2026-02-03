---
title: "Eliminar elementos duplicados de una lista con Python"
description: "Artículo que nos enseña dos formas de eliminar elementos duplicados de una lista con Python mediante .remove() y utilizando diccionarios."
date: 2021-03-07
updatedDate: 2026-01-17
tags: ["range","list","remove","dict","fromkeys","for-in"]
slug: python/listas/eliminar-elementos-duplicados-de-una-lista-con-python
author: victor_cuervo
type: doc
topic: python
id: e2a657bb-20a7-49bd-b4bc-34904f65c6c7
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/listas/eliminar-elementos-duplicados-lista.py
---

Ya hemos validado [las tres formas en las que se pueden eliminar elementos de una lista](http://lineadecodigo.com/python/eliminar-elementos-de-una-lista-con-python/), ahora vamos a ver cómo podemos eliminar elementos duplicados de una lista con [Python](http://www.manualweb.net/python). En este caso volvemos a partir de una lista de elementos que inicializamos con números:


```python
lista = [1,2,3,4,1,2,5,6,7,1]
```


## Eliminar elementos duplicados con remove


Si hemos [leído el artículo sobre las formas de eliminar elementos de una lista con Python](http://lineadecodigo.com/python/eliminar-elementos-de-una-lista-con-python/) (si no deberías de [leerlo ahora](http://lineadecodigo.com/python/eliminar-elementos-de-una-lista-con-python/)) habrás podido comprobar que disponemos de un método `.remove()` que elimina el primer elemento que coincida con el elemento pasado por parámetro. Su sintaxis sería:


```python
lista.remove(elemento)
```


De esta forma si queremos eliminar el primero elemento que coincida con el número 1 escribiríamos lo siguiente:


```python
lista.remove(1)
```


Pero esto solo nos elimina la primera ocurrencia, ¿qué deberemos de hacer para poder eliminar todas las ocurrencias menos una? Pues bien, lo que haremos primero, será conoce cuántas veces aparece el número. Para ello utilizamos el método `.count()` al cual pasamos como parámetro el número a buscar.


```python
num_ocurrencias = lista.count(1)
```


Y ahora que sabemos cuántas veces aparece lo que haremos será el utilizar un bucle `for` para llamar tantas veces menos una al método `.remove()`


```python
for x in range(1,num_ocurrencias):
    lista.remove(1)
```


Al salir del bucle habremos eliminado todos los números 1 que se encontrasen en la lista menos 1. Eliminando así los elementos duplicados.


## Eliminar elementos duplicados con dict


Otra alternativa que tenemos para poder eliminar los elementos duplicados de la lista es utilizar el objeto `dict` que representa un diccionario en [Python](http://www.manualweb.net/python). Y podemos contar muchas características de los diccionarios en [Python](http://www.manualweb.net/python), pero con la que nos quedaremos es que los diccionarios en [Python](http://www.manualweb.net/python) son indexados por una clave y no de forma numérica y esa clave es única. Podemos crear un diccionario de la siguiente forma:


```python
diccionario = {1: 'uno', 2:'dos', 3:'tres'};
```


En nuestro caso vamos a transformar la lista en un diccionario mediante el método `.fromkeys()` que lo que hace es coger los elementos de una lista y convertirlos en las claves de un diccionario.


```python
dict.fromkeys(lista)
```


En esta conversión se eliminarán las claves duplicadas Ahora lo que haremos será volver a convertir este diccionario en una lista mediante el método `.list()` y nuevamente tendremos la lista, en este caso habiéndo eliminado los elementos duplicados.


```python
lista = list(dict.fromkeys(lista))
print (lista)
```


Con esto ya hemos visto las dos opciones que tenemos para eliminar elementos duplicados de una lista con [Python](http://www.manualweb.net/python). ¿Se te ocurre otra forma de hacerlo? Cuéntanoslo en los comentarios.

