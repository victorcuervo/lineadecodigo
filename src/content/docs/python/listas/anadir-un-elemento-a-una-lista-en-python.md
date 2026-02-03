---
title: "Añadir un elemento a una lista en Python"
description: "Análisis de las diferentes formas que hay de poder añadir un elemento a una lista en Python."
date: 2015-11-24
updatedDate: 2026-01-14
tags: ["len","extend","append","listas"]
slug: python/listas/anadir-un-elemento-a-una-lista-en-python
author: victor_cuervo
type: doc
id: a743c636-c788-4234-8ccd-b4f50cff5c09
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/listas/add_elemento_lista.py
---

Mediante este ejemplo vamos a ver las diferentes formas que tenemos de **añadir un elemento a una lista** en [Python](http://www.manualweb.net/python/).


## Definir una lista


Lo primero de todo será definir nuestra lista:


```python
lista = ["elemento1", "elemento2", "elemento3"]
```


## Acceder a elementos de la lista


Lo que tenemos que saber para manipular listas en [Python](http://www.manualweb.net/python/) es cómo acceder a un elemento en concreto. Para acceder al valor de un elemento lo haremos indicando su índice.


Imprimiremos el valor del primer elemento de la lista mediante:


```python
print(lista[0])
```


Y para asignar será parecido:


```python
lista[0] = "nuevo_elemento"
```


## Añadir elementos con append()


En el caso de querer añadir un elemento a una lista en [Python](http://www.manualweb.net/python/) podemos hacerlo de dos formas. La primera será utilizando el método `.append()`:


```python
lista.append("elemento4")
```


Simplemente indicamos como parámetro del método `.append()` el valor que queremos añadir a la lista.


## Añadir elementos mediante índices


El segundo caso será jugando con el índice, indicándole que el índice es un rango desde el tamaño hasta el final. Así podremos añadir el elemento mediante:


```python
lista[len(lista):] = ["elemento5"]
```


En este caso se está realizando una extensión, así que el valor del elemento a añadir va entre corchetes.


## Añadir elementos con extend()


Por lo tanto es lo mismo que si hubiésemos utilizado el método `.extend()`:


```python
lista.extend(["elemento6"])
```


Así que ya tienes varias formas para poder añadir un elemento a una lista en [Python](http://www.manualweb.net/python/).

