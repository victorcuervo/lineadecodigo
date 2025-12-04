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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4CIGIZE%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T163114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjc7ewpdxFBSgRz%2FNFQV2gE4d0n8A%2FrRDhSD0HTFWdCQIgAO3I4CM6EPv1AtEjPycyyW8lYUE4vZ0yHUifXAqtN3Iq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDOa2HN8M9Rls4tFaqCrcA9u70yerZcDNrNYLwhbifpDy4xR6DhFvKAC%2FMczUS8WGIkrzrpgnqgkEg2AHLNbXcP678rkDkTpEyy%2BfDf%2B0uS%2F1nDwZa6uMUYmeaKEUulhXJXsx7EumhXkFphTuNqhKLqkT3x5NDbXaBH2M8qF5nRVRZWFVnuh2jUQqz88PBYOSjYz%2F0ccVs1NaHDrrRi8aM%2FFGzutrIcCAXY0kZiVVyl%2FGJgSgQuOm0m8PT2%2F3jUcQHn6lVcNVsgmU5G9WioLs2KY0Xy0mJsCxegTYd9jEOrf4sCftDREtF8cffHO90S1f8sCeRXsWOexA5TuwIbez9oq1O9m4Hpj1iEbDJMIbRxUZI5WR3JL5Ir7i3tONqLp%2FQRV2xhzlqq8Eajs4UvSR%2F%2FrS45vxxkFEMlZmwaFl1EwmRiEhoCsFy0yaTohYYlTBzJ1KgqQw57%2FudaDVcCvDe2535l5ag69rCTgzQ9lSfKwjkKvp1UCgKePK58SVTw8ubNV7kjhWK9amyYN3CH1uUSoGzQjzcdH56R0ntxO7iAb5ZWI2SrojY1L4k1PA1gHTOr%2BkamqKjNFYB90OWFAosBcSHYDfJAv5Lc%2BRAWkTo6qnnCJCd9MwGxPt4RUKyUDMOTgwtv3YmWqz7Cn%2FMKrcxskGOqUBRyiDrDkoGaVZM3UnsT9e0VLE2%2BMdvhmou3Jx2sS1ZblCfu4s64nhnMgbI%2B1I9Gl1VkAMHp3c%2FtZ70J9hxZZsY4Xx0IlTqGqF%2B2NiMetRvx1a4QWN%2FZdvDfcwJ6jJeb0%2FQ%2Bk6uZasbWvKPGk1X5jq11Xt7eNT5Q0QVHPoK9CN4JEkiCf8Cl4f9dLyFg5uN8VGxjYDyB%2FumYXVfV9HmU%2B3IfiSA0lS&X-Amz-Signature=f89638f9e6a8abf7cf152759e6d2c307b8142f535781dadc2227e1032049170a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

