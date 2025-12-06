---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastUpdated: 2024-02-10
slug: /python/listar-numeros-del-1-al-10-en-python/
author: victor_cuervo
---

Hoy vamos a revisar un ejemplo sencillo a dar cuando empecemos a [aprender a desarrollar en Python](https://lineadecodigo.com/categoria/python/) y es cómo listar números del 1 al 10 en [Python](https://www.manualweb.net/python/).


Para ello vamos a revisar qué tipos de bucles tenemos en [Python](https://www.manualweb.net/python/) y cómo utilizaremos el bucle for para poder generar la lista de números. Además, aprenderemos un poco más sobre la clase [`range()`](https://www.w3api.com/Python/range/) y qué papel juega dentro del uso del bucle.


### Bucles en Python


Lo primero que tenemos que saber para poder listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) es que tenemos que utilizar un bucle en [Python](https://www.manualweb.net/python/) que nos permita recorrer los números. Dentro de los bucles en [Python](https://www.manualweb.net/python/) encontramos de dos tipos:

- **Bucle while** - Es un bucle que se ejecuta mientras se cumpla una condición
- **Bucle for** - Es un bucle que nos permite iterar sobre una secuencia de elementos

En nuestro caso vamos a utilizar el bucle for ya que es el más adecuado para recorrer una secuencia de números.


Así que miraremos la sintaxis de los bucles for en [Python](https://www.manualweb.net/python/):


```python
for variable in secuencia:
    # código a ejecutar
```


Dónde la variable irá tomando cada uno de los valores de la secuencia en cada iteración del bucle.


Si vienes de[ otros lenguajes de programación](https://manualweb.net/tutoriales/) quizás eches en falta el control de límite de bucle for o el incremento de variables. Y esto se parece más, por ejemplo, a un [bucle for-each de Java](https://lineadecodigo.com/java/bucle-for-each-en-java/).


De esta forma, si queremos listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) tendremos que tener una secuencia con los 10 números. Y si queremos representar una secuencia, lo que tendremos que representar será una lista de números.


Por lo tanto podríamos decir que para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) podemos utilizar el siguiente código:


```javascript
lista = [1,2,3,4,5,6,7,8,9,10]
for numero in lista:
  print(numero)
```


Podemos observar que hemos creado una lista del 1 al 10 con los números y mediante nuestro bucle for recorremos dicha lista para acabar mostrándolos por pantalla mediante la función [`print()`](https://www.w3api.com/Python/print/).


### Elemento range


Pero la verdad que es un poco tedioso crear la lista de números, y quizás sea algo realmente complicado si en vez de querer listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) nos proponemos listar, ¿2000 números? En este caso generar una lista sería algo poco viable.


Es por ello que vamos a acudir a la clase [`range()`](https://www.w3api.com/Python/range/). La clase [`range()`](https://www.w3api.com/Python/range/) nos permite generar una lista con una secuencia inmutable de números. Por lo que si vemos la sintaxis de su constructor podemos observar lo siguiente:


```javascript
class range(stop)
class range(start, stop[, step])
```


Mediante el valor `start` y `stop` podemos indicar desde qué número queremos empezar hasta cual queremos terminar. Ojo, que la parte de `stop` no incluye el número que indiquemos como parámetro.


Además podemos conseguir que sean incrementales de más de un valor a la vez mediante el atributo `step`.


Por lo tanto, si queremos generar una lista de 10 elementos deberemos de utilizar la clase [`range()`](https://www.w3api.com/Python/range/) de la siguiente forma.


```python
range(1,11)
```


### Bucle para poder listar números del 1 al 10 en Python.


Ya solo nos quedará utilizar la estructura [`range()`](https://www.w3api.com/Python/range/) dentro de nuestro bucle for en [Python](https://www.manualweb.net/python/). En este caso la secuencia es la clase [`range()`](https://www.w3api.com/Python/range/) con los valores del 1 al 11.


El código definitivo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) nos quedará de la siguiente manera:


```python
for numero in range(1,11):
  print(numero)
```


La estructura de nuestro código quedará tal y como muestra la imagen:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFINEG6N%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T073315Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2B1XQM9zKvdOPq4ujnDM0wDH1bde0ltoDMQoagVmwwwAiBC0j%2B4qcfmVQH4oKNL1PqlyYpARg97jX3g8jN9wFjYxSr%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMacfTRCVHKz34GmCCKtwDyqFewj98pwK3nL7QkUIYcWM3uBQaq7gY1DwuoTKn4wiUVgZvi9J1o2mhGldt0YI2YjCbfJMv7LIhPHVObRWZUQ1eHeJQnwD9%2FhXRlNPp%2FoBMTq8O99M0IK%2BgwlyVzTndB4HVwdvv6uM9nZRPqYUHrG9CIiC9yD%2BePrVSz97FuvF2LOynKlpdVWisOW6j3G6ij482maNSaG5BhqfQ%2BksjrEDD%2BREJZbxC7nDEcq7Zdj1nY6%2F0WPfA8aJZwJl6P6wupur2Nkn3%2Fp9trgJDtpshwXwHF9uE5RvDkrEgLmy7tHGlU4E4ME5hRC5cAFvHOqnzzWcFQUCrhdbrw8NbG7AbsktjOoiugd4%2B%2F3qRFiFGadueyg7uzhCeSN%2FziJR8MeszVr7ldHr6Cesl47GctUlBqjiAHILMW1KoCFsp%2B0Gc0c7m0rA6vRzt0QDl9xzPLibgPkWcKLIMQWuv6hwrkoW3ZBrGe%2BQVY6DsxawMU4rSE7ns7Gr%2BYPnBzKfwnRw7rXUy%2FTCtbyTpZcRpJUDa%2B1UxyywzqGZGq5nSo3u%2B%2Fiv2Vl1sqo8oqesOqLVvGLU4ArfdRg8NN3uwxIx%2B%2Bot%2FnbNSYVR0b9sDITe5A1CaX7jrca2CV%2BqhtrP2DkIhRd8wiZ7PyQY6pgElBhP%2Bj6Z8gRq8alYy6Vmh2hujHma%2FUuI7dt%2BkYc1Mqhh9zb5gQzab1Mg33Ze6us1tfjLwnxuw8nfXGz1y7ioAmkzDgk%2BK4c85sIxaUEdAkTy3M5tJACGajhgXTVQdXeEiabluoodVzR1F0H2%2B3tJywlsiusG5vZh%2FtY4qWme6vqfPAkMuBFtqH0VuyxHyOZG7n82MYK4AuaqDhqVBYyFyt2lKnR8P&X-Amz-Signature=f9630a8ed4990cd2d441c4bf1d7797bb2738139d73f5da6b367dfa2692d66c47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

