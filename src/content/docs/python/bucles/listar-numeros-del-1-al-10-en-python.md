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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QA2RTSDF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDVHazae%2FYbpTTHANQXbZvB7Dcs3Nnm4QZdIzoU0mE3egIgGq93zn3dha4KkCa%2FwV8PtwfJwKaki4mknNSnThoPeUIq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDHRHUz5%2B0fcNbfkPNSrcAxId6RzjWOHvj1YY7NLeYbjists%2BqTxjwxyEbpUxZ29u%2BxLong1AyGIrn%2F7On8uDCaVXaDeWXjkroSowBRjv0akX9HvU7SucC9l5%2BULKF0CnYEs57hvij2RJ%2FY6KkEr8XDtcYHiq36T%2FUVNR1AOGWRWbe0pjx07iKaO6xPryMIa0KCeYxLJbswvT5ZrxK9KtnoAFpjpM4mYrF31U5CvYCsDkO1Gl393tv8KIcqPPt1fDysImecEF5hFEuy1dfRfPi6CNyuw%2BQDhNLk7grXpnirGZRugfjb0LK%2FAk6Pa5%2B%2BX7QXj1W9EW4fPTLESyM6oP2f4u00HxHqVBBoOfOK0Rn2MpFtNapWnJCivAI237AYeoSmxTfezj0oRSZt7HJApltm0RsVDBqVlh8Rco6gJ6D2g6VZwPXc1J4g4SQ1IPPTzGrP%2BApUc%2B%2FsIfbRhl0i0zi4xE%2BWtXj4EsLTYqjxFfcNYnXadeHvYbWVc%2Fi5tXisys5l%2Fi1bMXWzVJXajk3AtJtRMw4To4g6jZSVieGbQE7nHkCltJ17m%2BwwPactnSiHPr0YmBGL%2Bi0uTZS%2FL4ARL9H6DxFijLav5p%2F8qv9O%2B0ArAEbUuvhH8%2BkD0aGUrhNdZuApdkNjbW80DmpBd7MKf4wskGOqUBC56TickWbDAihu1bEZflZ2%2FjI%2Bkp5qqNwLsVpA1UBrOBJfZBFa%2B2Q2rf0dP39kYPkpF8CzGHCwRjqxMllCpck0dHTCE%2FfEpzntUnt0qY9OszVHFcgm7HaWR8QBwoPoxJMc6mga4DUlgUP66bX%2F3nvG64OCrI1roi94hyo%2Bn4tRjJ8Fo27Jfnb3yewg%2FDswZurWolwIEq1De0w4UdfGYjMRJ%2FrvR%2F&X-Amz-Signature=2e907d9548bf3906e5f98bb04c8db23662fd7e74b1a705d0d152b1b7b2bb825b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

