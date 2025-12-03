---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastupdates: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5CCWABH%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T211118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQDbtlHTEZppVl1lRGNfzngLCk8uhsxpEOvU0hJV8EclqAIhAMkv6m2aVZhC%2F0r5s%2FMADkPMfmr%2BoN%2Bkfo5FoMRTYCVGKv8DCDYQABoMNjM3NDIzMTgzODA1Igy%2Fa7mZqrD8AL2xF2Qq3AOkg7uuUY0FmSoxu1aw4GJSZSFzSWg7UQ4q16S9YsQ%2Bm2TKVUKxEqn3%2Bnrrvpxy1D4NKjJ77sPfu3B1RLZU%2By9z5jLCDG9dna53uV2Ty1ygAq%2BbGjvjxCtG8ewXx3qI7JQc3cSQgcFaDcxsE66h4lu689b4qqVHaKcxh5IYueS%2FspQZdr5VxuVsnABOWi3n7qfhydtvMjN5c3i5Q51YA%2BbhhkREDdjsfcpKiXwnOyGSCADMgIqak72tvugaNviBkrQ0VZFS2aF4ZnSZmGUUGIG7pReADoBGXIKJbxuUqHbRxdjp5GRtiJfByLxpfOuH0zuKU7IarFNj%2BwF0knzwKcQgjAtx9ADU46%2BFp3frQ7EuvEUiSU0sCaOJUtoImfPDP%2FL4FlutGMJzg%2BSb%2BvzDenT4q0MdNl8%2FsffjoL%2FKDdwVIVjglZLH4qw8eaY1umnxJIYGKmhe%2F%2Fhp5mPjLFr4qpwoDSWKOnT%2FfwWr9%2F0zp4du5m%2FU8ALrbKnTQ56hnnvlJCEZgP3qbPh4WFOkppzd7DDtUqZ1E1R00iFU260GbALMgsNBYF7zP2h4YWcYfAHj63g6mGmIRq7Taq8OOnzEnYtR3h7NylowWj2M4XjQmnd7UmX%2BPcnGcOM349E%2BgjDFvsLJBjqkAXTQuvHHpo2fGI8lVGXZlAvqLQB7dIaa0XIXWqcSAKYGpUKD%2BOap8UB4T0MCymovYiOr%2FmD3GTENSJi9JMz5ASmczA4jFcqYa4V76dgf4WbNUCbtGg81%2FgQeSLxuTuX1lrUXnmOD05IEyjAaC%2FMd6hviriQoQGmRfuR3athBjwhcXwd7aEP0vbnyVaBJWlGb%2F8zB9D9l%2FpsEpxciLeOeB5gUqr4m&X-Amz-Signature=1043c8b42a197d8dd7370d49d4ce8f23df9fe220b244a24777108b5ce17980ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

