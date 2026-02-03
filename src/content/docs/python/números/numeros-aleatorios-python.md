---
title: "Números aleatorios Python"
description: "Uso del objeto random para poder crear números aleatorios en Python, números enteros o números decimales entre dos límites identificados."
date: 2017-06-05
updatedDate: 2026-01-05
tags: ["random","randint","uniform"]
slug: python/numeros/numeros-aleatorios-python
author: victor_cuervo
type: doc
topic: python
id: f86eeab1-315d-4bc5-9742-ebe17d36e5b7
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/matematicos/numero_aleatorio.py
---

En este ejemplo vamos a ver un código muy sencillo, pero a la vez muy útil para poder generar números aleatorios en [Python](http://www.manualweb.net/python/).


Nos encontraremos en múltiples situaciones dónde deberemos de apoyarnos en la generación de números aleatorios en [Python](http://www.manualweb.net/python/), por ejemplo, para sacar un elemento o pregunta al azar de una colección o de una base de datos, para generar tiempos de espera diferentes entre acciones...


Lo primero que tenemos que saber a la hora de trabajar con números aleatorios en [Python](http://www.manualweb.net/python/) es que vamos a trabajar con el módulo [`random`](https://www.w3api.com/Python/random/). Así que de esta librería importaremos varias funciones, como son [`randint()`](https://www.w3api.com/Python/random/randint/), [`uniform()`](https://www.w3api.com/Python/random/uniform/) y [`random()`](https://www.w3api.com/Python/random/random/).


```python
from random import randint, uniform,random
```


Lo primero que vamos a hacer es generar un número aleatorio entero. Para ello utilizamos la función [`randint()`](https://www.w3api.com/Python/random/randint/). Esta función recibe dos números entre los cuales queremos que se genere un número aleatorio entero.


Por ejemplo para generar números aleatorios en [Python](https://www.manualweb.net/python/) entre el 0 y el 10 utilizaríamos la siguiente sentencia:


```python
print randint(0,10)
```


En el caso que queramos generar números aleatorios que sean decimales vamos a utilizar la función [`uniform()`](https://www.w3api.com/Python/random/uniform/). Esta función se maneja de la misma forma que la función [`randint()`](https://www.w3api.com/Python/random/randint/). Así que recibe dos números y generará un número aleatorio en formato decimal.


```python
print uniform(0,10)
```


Por último tenemos la función [`random()`](https://www.w3api.com/Python/random/random/). Esta es la función base para la generación de números aleatorios. Ya que genera números aleatorios entre el 0 y el 1.


```python
print random()
```


Podemos utilizar [`random()`](https://www.w3api.com/Python/random/random/) para simular las otras dos opciones. Ya que para generar números aleatorios entre dos números deberemos de seguir la secuencia.


```python
random()*limite+1
```


Así tendremos el mismo funcionamiento de las dos primera funciones: [`randint()`](https://www.w3api.com/Python/random/randint/) y [`uniform()`](https://www.w3api.com/Python/random/uniform/) mediante el siguiente código:


```python
print int(random()*10+1)
print random()*10+1
```


Vemos que en el primer caso utilizamos la función [`int()`](https://www.w3api.com/Python/int/) para transformar el número en entero.


Ya hemos visto lo sencillo que es generar números aleatorios en [Python](https://www.manualweb.net/python/). ¿Qué usos se te ocurren de ellos?

