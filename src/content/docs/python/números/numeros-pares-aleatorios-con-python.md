---
title: "Números pares aleatorios con Python"
description: "El uso de la librería random y de la función randrange() nos permiten de una forma muy sencilla generar números pares aleatorios con Python."
date: 2017-06-14
updatedDate: 2026-01-15
tags: ["random","for","randrange"]
slug: python/numeros/numeros-pares-aleatorios-con-python
author: victor_cuervo
type: doc
download: https://github.com/victorcuervo/lineadecodigo_python/blob/master/matematicos/aleatorios_pares.py
topic: python

---

Seguimos con nuestros ejemplos de manejo de números aleatorios. En este caso vamos a ver lo sencillo que es generar **números pares aleatorios con Python**.


## La librería random


Lo primero que tenemos que conocer es que nos vamos a apoyar en la librería `random` y en concreto en la función `randrange()`. Así que lo primero será importar dicha función de la librería mediante una sentencia `import` dentro de nuestro código Python.


```python
from random import randrange
```


## La función randrange()


Ahora que tenemos importada la función `randrange()` debemos conocer cómo se usa. Esta función tiene tres parámetros:

- **start**: el número inicial de la secuencia de los posibles aleatorios.
- **stop**: el número final de la secuencia de los posibles aleatorios.
- **step**: será la variación de los números elegidos dentro del rango y fundamental a la hora de generar los números pares.

## Generar un número par aleatorio


De esta forma, si queremos generar números aleatorios pares con Python del 0 al 100 escribiremos lo siguiente:


```python
numero_par = randrange(0, 100, 2)
print(numero_par)
```


## Generar una secuencia de números pares


En el caso de que queramos una secuencia de números pares, por ejemplo, de 5 números pares, tendremos que utilizar un bucle `for`:


```python
for i in range(5):
    numero_par = randrange(0, 100, 2)
    print(numero_par)
```


Vemos que el bucle `for` se ha apoyado en la función `randrange()` para poder gestionar las 5 iteraciones. De esta forma tan sencilla habremos conseguido generar números pares aleatorios con Python.

