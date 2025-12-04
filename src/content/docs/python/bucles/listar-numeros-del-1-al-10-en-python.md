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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWJK4H4I%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T091751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIFKQO5uS090hKl1NiVHMzUQOofKpEWr0qsNXV3S6ZNWnAiBJJ5J6gcWVEPO8%2F4xAarzG4zlFNBzNkE669BOlB3xSCCr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMdGBunh%2F88DbEDbSuKtwDeX8PH%2FUybEo6KIuH2kp54GJwDToFXjYzmZcq8iG6ykFwMttDnH%2BajyohilkSGwRRuGemYWLzxGrWofWM5cc6P1%2BJmWOdUqhIdmbnmZ%2Fvg29eOFoXdrJML%2BI3h97MUo6QmSpFofmnkoo9kdWKoLzC6xufNYCG0NCkI8RDMc%2Bjne0xK5WSWWtfgEn1czXPrF4Q7FNYq33tLOmvq5pYOvmVJF3jJX%2BChKPmgIJGL2MStdYPBc%2FRPPYzxigpELssEKbpj5xBaNHU6aj5W4I4yiQfqSjfsPl1q3YpksV%2BgmYDPGt8dwbEXTEz%2FDhvYDjKXwDTCtJuEUiWtF8u2Ti0Qc4BIDVkd%2BSER6JWmY6ilIrglv7W7hvjSJbHRRUuYFBjmYgDmo4zCMDpq2sZiBEe3%2B%2FeN%2FZCDbdPRM1InvoXDdTrH%2BaIgdw%2B22tZf6iRZOqXNV6e3EE8kZvVODdhbHXpW3%2FtvVpCx7zXTZ%2BSVMDUaHwQMOcKC%2Fe9M58aOKAZaO1NDvSPJVwXiIrp%2FdqN3ieeNQSRjly0yuNfqq3Sa4oWP9ll9AULNw4B6zwaYk22G6WXk6uknZRaNR9JZd4Flo%2Be1D2AA3qVUZ611xWa3vMH2VakT9xEyOSCq1RKgubAFL4wyIbFyQY6pgEGCv9OfGI%2B0napwxNqOX%2FCV5hicOLpdjI%2BCoVXrTP5WGTMeKjTgrdvClDknqm2e8K1ohCqV5%2Fdagr5dZ4q%2B59cbL3bsCTSN%2B8weKd9UOJGPaFwbUo3DQbGnrClKk8d486e0tyHFBi5w160S3asNq1hrc3oVRcsWgdckNgBdi5yDRxo0XRMX3gwTN6hXONhmu5Sj1p8z49c8D%2B7YvnVTFTRBH5YWm6G&X-Amz-Signature=6a1f2faf40633140119d97cac81bf04cd899647b5113903fce3752086c6056e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

