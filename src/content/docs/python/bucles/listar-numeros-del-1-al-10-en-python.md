---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastUpdated: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQMCQIAI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T113606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIDQM7n%2Fn710slKwJ0kQaEuRAq3sIGCKvCH8WJFbqjenHAiBxwW%2FRiGYTuQMqhJsu6mh%2F3Y1B5E%2BGdirB7LwcpNB4CSr%2FAwhEEAAaDDYzNzQyMzE4MzgwNSIMe2RO0HJarW6UPtHgKtwDxo7vS%2BstbbWoNv59%2Ff08O%2B2swqPbE6LTvgutGYGezZCSsVOis9HN7lXnKN7TCrrmfa9PBkyOg7QUXqIs5hR45iAZJ0fsik%2F8W8a99PBs1ZOJsp%2BuGVGejdgBd8H8jXq4Ut7FwWBn%2BG%2Bf8VCN%2F10ZxN4pfAjyqHkTXLTv%2Bn1Z3IrvmZJHpl8MLTtXs7c1NrHd%2BXovcrlNKn8jpTU27SHA8DIZ%2BtEQrDJhXKmw%2F5jNJ0OsMTZvkKTeco1H7PQuoEaxk72G%2BGqznvP15Mq2fNyRTbEGzAAnt5psbuDGhH4wQbT%2FO1diC4UlE1Z%2BbiaoU%2BfLUy2Rp8A0peROkx6Hb2nR63oPCvqHbQ2uk7emjSVD%2BS9gfu8REQ%2Bj8mGz8dbwZHCS7OB6jc3xisHzNvHazgfnp98ImJqgNoz2q%2BFKz%2FcWbFY5RTEIlb7LxMrepuGGX4TnYxltBv%2B407dj3dHgF6%2FswqFPzV82vjGZFQs2I9FXheos188oJFihkJEF3r8HNa%2BTfOHw33ECKTPWrS1dtbbUbzYoYiHmmIJHSpVsKjHNkMOM6AOHWeo9oZLQ0THFMWq%2FU6kFql%2F%2FqbHwn6WYRgwk%2Bm7uYD5Xf81qM4cuCc9IlUpp6s2RbDOaxbMusW4wx8nFyQY6pgHiZ9m20lQJy1eFKxQ0IDrAfknqksLnB71uISr7ppQlAhiu9yqrLQFQoKNSSKFmCQBC0Z34ttcB2i66VEE83aNv%2B6rwzxzs9zoyCabs21gWKiPlDoklKyzGcEldZ7fgL8DjohyJIzDT6yuByrndSdd5sowsaXwJj2xbgU5T%2FGqscAX4rrkam%2F3NSSRz1%2FjRO6BoI2RjQeO2ifgWIJzDoin0ujYw%2BTjD&X-Amz-Signature=540e53cbea87a5cbe1b93fff3849b692549f8a99d39d737cb3681300568c81cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

