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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKWUAKOY%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCFPlqoBSGLgUjsBi8QvmPh1UWip1uYBzNNLXXeppkXgwIgVz7sIlZYnrObuywdnm9ImL8CCvC6rLo%2FK%2Be82Z%2BaULkq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDKUrlrs6NoHGsRGhJircA6wm1Vqg8Vjvn9V%2BLucfqFrmgodvQXurxqz3OMheBaFj9wtWGSjT5%2FBlti1AkTq6L1gGaheAiGLW7UQ1Ds6JG4o9kQe%2BBtMy7ma4xOaUyGBoefgqSJvVso94vNwDIioPcMamjlg%2BTzmypRZpTM5lfVrZq2YEV%2BoVsDDT%2Bgc6pPqkuPM9CdKYCZX3eHO7BhJilqyqLef4Ztf9O%2F%2Bw8k8orK4fzbMaubAGvCS30TB19c%2FISqOUu1%2B28d2Z1Kc1i1%2Fzy0DEjn%2FsCGsBzSR449kqmJzdXkLyO8iHppJbsUZdg8moMFzMW6xt4v00bVpK%2B1k7cd0ruRMQoT3Rj96gYraOFYX2BVaC6s6%2BKMh3GKWNbf4%2B4oL1qf42pKhhNZ%2F7PecwdINx%2BC4v%2F7h%2B1x2UQOMxm9Ux9kTq2w684dn0BpccohgxQDraBLvQU8NpBhaWPPdY0cEID3HSkt5wrJk5Pe9RCl2z%2Bg73l2h2YPhelYJ4v9v5vXhMBhPa%2FUiprf%2FyxaOWGYE0TkdIL%2BIWVVbKx7eABRj6VjLEk31O1EYYRyk8awCCzCDTxyylmeeXcVsrM10qXbzBFl390%2FqMvtAdZFC9kpHcUI2gCGj2%2FxvjMdikCFMOHVRw8fAv3INVDb%2BXMJ%2B%2BwskGOqUBNXQ8taJvNij5y%2FcUGZFVtRnLQT4dJAEOFvFObkK%2F4E5M859jvw5Ml0bTQQZPRnMjozz96yrPXJToGP%2BlkZrDjzkOmB4%2FHUUCkWw4rAMexQUpMT2XNxJNe5cRbFGYyNAJD9yDsbbjxPI1wPylefrQXBkUDhvCZfxzns%2BXjhp1ncMxYBYK%2F70ZD74R4nlZLqGZIalA8%2BensHQKad1pAtoQgjW1ejsf&X-Amz-Signature=abbd9f7c4f5578bd2707cb8dc792ba4dbb8792380ebba129cc6c9914615cdec9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

