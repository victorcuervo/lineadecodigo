---
title: "Números aleatorios en Python"
description: "Uso del objeto random para poder crear números aleatorios en Python, ya sean números enteros o números decimales entre dos límites identificados."
date: 2017-06-05
updatedDate: 2026-01-14
tags: ["random","uniform","randint"]
slug: python/numeros-aleatorios-en-python
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/matematicos/numero_aleatorio.py
topic: python

---

En este ejemplo vamos a ver un código muy sencillo, pero a la vez muy útil para poder generar **números aleatorios en Python**.


Nos encontraremos en múltiples situaciones donde deberemos apoyarnos en la generación de números aleatorios en Python. Por ejemplo, para sacar un elemento o pregunta al azar de una colección o de una base de datos, para generar tiempos de espera diferentes entre acciones, etc.


## Módulo random


Lo primero que tenemos que saber a la hora de trabajar con números aleatorios en Python es que vamos a trabajar con el módulo [`random`](https://www.w3api.com/Python/random/). Así que de esta librería importaremos varias funciones, como son [`randint()`](https://www.w3api.com/Python/random/randint/), [`uniform()`](https://www.w3api.com/Python/random/uniform/) y [`random()`](https://www.w3api.com/Python/random/random/).


```python
from random import randint, uniform, random
```


## Generar números enteros aleatorios


Lo primero que vamos a hacer es generar un número aleatorio entero. Para ello utilizamos la función [`randint()`](https://www.w3api.com/Python/random/randint/). Esta función recibe dos números entre los cuales queremos que se genere un número aleatorio entero.


Por ejemplo, para generar números aleatorios en Python entre el 0 y el 10 utilizaríamos la siguiente sentencia:


```python
numero = randint(0, 10)
print(numero)
```


## Generar números decimales aleatorios


En el caso que queramos generar números aleatorios que sean decimales vamos a utilizar la función [`uniform()`](https://www.w3api.com/Python/random/uniform/). Esta función se maneja de la misma forma que la función [`randint()`](https://www.w3api.com/Python/random/randint/). Así que recibe dos números y generará un número aleatorio en formato decimal.


```python
numero_decimal = uniform(0, 10)
print(numero_decimal)
```


## Función random()


Por último tenemos la función [`random()`](https://www.w3api.com/Python/random/random/). Esta es la función base para la generación de números aleatorios. Ya que genera números aleatorios entre el 0 y el 1.


```python
numero_base = random()
print(numero_base)
```


## Simular randint() y uniform() con random()


Podemos utilizar [`random()`](https://www.w3api.com/Python/random/random/) para simular las otras dos opciones. Ya que para generar números aleatorios entre dos números deberemos seguir la secuencia:


```python
numero_minimo + (numero_maximo - numero_minimo) * random()
```


Así tendremos el mismo funcionamiento de las dos primeras funciones: [`randint()`](https://www.w3api.com/Python/random/randint/) y [`uniform()`](https://www.w3api.com/Python/random/uniform/) mediante el siguiente código:


```python
# Simular randint
numero_entero = int(0 + (10 - 0) * random())
print(numero_entero)

# Simular uniform
numero_decimal = 0 + (10 - 0) * random()
print(numero_decimal)
```


Vemos que en el primer caso utilizamos la función [`int()`](https://www.w3api.com/Python/int/) para transformar el número en entero.


Ya hemos visto lo sencillo que es generar números aleatorios en Python. ¿Qué usos se te ocurren de ellos?

