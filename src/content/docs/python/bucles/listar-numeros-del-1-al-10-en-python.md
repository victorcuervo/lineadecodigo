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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGXRAMG7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T094336Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJJfusKCSdYRjtPhvliCmv7bp9mEFYvWF4UV9Lhx5QOgIhAJyN38loMEBeSQMosLZxdy4aJkarUO6u3inBXHfrXTMTKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzbgudJNc4v7giH%2BkAq3ANN3YmGTnuoeqhXxgRHRDs5WP4fDaCNw3O1zy%2BURB5xphMgF2%2FH1O3J2sxgamj5fBE4eswH94dPATn8Mn1ZPkBBStQ%2BNcqbASIxtmOX%2FOow6kPKTWhfypcFDTRier79Fv6XGa%2FTdlCRYOpEcktzzXc5Jw%2BOyP3%2BuEDQ%2FlkqWGx27z4emPwBGyzLKgCUckFrSDT38%2FE8JzUXA%2BYr6eZ%2FxRSKvXDgnXW86cdFi67T6NvV%2F1fyxEJUkZmkH%2FU%2BqBfGfH97Vg0VbzHQaYXWFYcHq69ucSqSfLhXwYoWRMmOJ%2FjLFSbTHscP0d2SlhhMUeJZ%2BnXrwfJddWvDYInyWbgoDokH8kgeOGFbsgskgLBTwQHTZ0kZCpjkcOZJ4WIQkHKd6ML308mmc7UqGOvb2LfFD%2FD5VzVaHWi9sq%2BxLmReHfZUnuF%2BM2Zz3Lmw2McATLi3%2FO66t0zSbEkm6Z1h7raI06ZA%2Bnui1UddID1iUS2MmpUkGmFUiwodHaY6hyjTTtWWkEpwGnTz2tYQ1hpr93%2F86gVoYHTPBQC5hG1S9E1EvAMJrffjo2ahS4oH8Em1rvwXNfyXfEPgh1iuIz1B6dzc3ujleVVmfp1KVYXVXuz6IvXp61rSp4Lctxv%2F0EWKJjCrw9%2FJBjqkAWd0uUMgOBqZvdmFZ%2BdUiuAKvLsXoDUweyjpWXW937TOXN8w1PDL9ihvSjTppgqF%2FpMysiqsba%2FCsLTvpxyB0Yc6hL9Fz962vwXEwI%2F8pfSXWbwnt7qr1RuTFUOWk%2B5AWWGeP%2FjimZ0ktU9Tqq%2Bw%2BeqOAEFiB3bkurvn0STbiiwzPeSd773%2BlVpocY9wZ22EEMTCzF0732TcCpfsDXt9KnkXoitW&X-Amz-Signature=2883f68874e8d501e661f1d6d17c6666e36180c07f5003e4ca633fc693870272&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

