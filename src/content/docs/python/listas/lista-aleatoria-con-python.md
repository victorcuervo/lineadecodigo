---
title: "Lista aleatoria con Python"
description: "Como generar una lista aleatoria con Python a partir de una lista de elementos, números o cadenas, ya existente. Diferentes tamaños de listas."
date: 2017-06-12
updatedDate: 2026-01-15
tags: ["listas","random","sample","range"]
slug: python/listas/lista-aleatoria-con-python
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/matematicos/lista_aleatoria.py
topic: python

---

## Generar lista aleatoria con Python


Ya hemos visto las alternativas que tenemos para generar números aleatorios con [Python](http://www.manualweb.net/python/). Ahora vamos a dar un paso más y generar una lista aleatoria con [Python](http://www.manualweb.net/python/). 


Lo primero de todo será tener una lista. Por ejemplo podemos crear una lista de números de una forma muy rápida mediante la función `range()`.


```python
lista = list(range(0,100))
```


En este caso hemos creado una lista de números de 0 al 100. 


## Función sample()


Ahora lo que vamos a generar una lista aleatoria con [Python](http://www.manualweb.net/python/) en la que solo aparezcan 10 números elegidos de estos 100. Para ello vamos a utilizar la función `sample()`. 


La función `sample()` tiene dos parámetros:


```python
random.sample(lista, k)
```


El primer parámetro es la lista origen de la que vamos a generar la lista aleatoria, el segundo es el número de elementos que va a tener esta lista aleatoria con [Python](http://www.manualweb.net/python/). 


De esta forma si queremos 10 números de nuestra lista inicial codificaremos lo siguiente:


```python
import random
lista_aleatoria = random.sample(lista, 10)
print(lista_aleatoria)
```


El resultado será, por ejemplo: [74, 63, 30, 72, 35, 86, 87, 38, 0, 84]


## Lista aleatoria con cadenas


Pero la lista aleatoria con [Python](http://www.manualweb.net/python/) puede ser de cualquier tipo de elementos. Por ejemplo podríamos hacerla de cadenas de texto.


```python
vehiculos = ['coche', 'moto', 'bicicleta', 'avión', 'barco', 'tractor', 'motocicleta']
```


Y la forma de generar una lista aleatoria a partir de estos elementos sería la misma:


```python
import random
lista_aleatoria = random.sample(vehiculos, 4)
print(lista_aleatoria)
```


Generando en este caso salidas como: ['tractor', 'bicicleta', 'avión', 'motocicleta']

