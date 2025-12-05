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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667DXEWK4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T211857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHLz0zkCV1XhRqMt4cYk3zK1%2Bv71ergJDObEBOmfrLGQIhAKxa2uZ2rFMRj2527pxxw8QWqvwKLP5lJCgm%2BW51XbDwKv8DCGYQABoMNjM3NDIzMTgzODA1IgwBzN36baYC9W2tpTsq3APHN7lRwb7pXhxj6X2BsAOAEYImrbIPl82bW7eWBhnoQgKc1n1fBS%2BEMTy3OP80vRe%2B0fAheplTM%2B%2FTK3tw3yjKkAD3FOAvc%2B5C3EjY%2F99RLenDjo0ozsm0h1FRvFPXnsCtJ3S9USvq4sMldZplVravQtOK1WvawtMlb%2FY8Ba%2FLZ77S6p0Ff7T7VYFTLMy7QyG69XPq1bQEsjg9turql62UWGUj1x8tnNR5mX0jMPL55I5tiY0znpRdlcBmsA6Bl9hf%2Bc72UqXA2T%2FrrPKyk%2BAR4YtYKrgnswHgsV%2F5j4IgtP3t6WeFn28mGUqhMHzFml%2FW3WJa3jCv3erwdsOxh5403MeY0JXqT%2B3vwsEIbOXDSW3HDLegicJoFJRI%2BRMEY4LBeWaF%2F0KWJnEx0ssw2PZeOYCKvRezWZXkJrLhaiLMbJF5y%2Ba7PSxbIkhBn8wyRwUS19YzibFE8Mrs7QqvcL1JKlsaxvyG4tp%2Bn8qPkZb0zZSdHzpdwt7WQgCyvA9hwboKCg2RSGex16cx%2BwQHIFJh0rjib4cBzWe2II%2B2GfSjtxECsBclU3aF5AV1LO7KomapalJ32uo%2B4aMAeYoouwmbU2SjR1JLjGxaU3We9v6yxhAu4zqQhIjLAI57zjDZi83JBjqkAY1RUO%2BiBQQIgB09DaHg3mmxfLZu%2Fig17ldB9HSFAVNfioP%2BxfQnB4dIkI8S6d47A%2BuRSKCBJUb0wlFOoboA03SvD6Q1X%2BIOlJdflV3Fc%2BRdf6EfSqhC5JfnuLU9B1PQ5MBXfAuM%2BOO2LuiUhveUtgrf1Jd3mOStmjYR0fFbsfurAYJtGgiN%2BMkEryuvCT58H8U%2F8O%2BYBP8Yn9762qg6tNbqYt4%2B&X-Amz-Signature=def11a568c51d0a428226017a95e3b52a7b9756c89ddf168752234e2e2b6c076&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

