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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QSIRE7L%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T124650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDYb4g6JlcoGcTMAJXwFl9bq%2BlaSLjtaM1kF0FQ4pFh3AiAIdX4wGXM%2FUHRDQDAHJeqTDx%2B2DJbfVS035%2BufJw4DYCqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgsez93eWIja1iWSaKtwDDcVQFq4TcDfF75%2BSAhKPZ1EAwdJTMdjhXVhJ%2Bj3XhpDTamIk8PR5MtIEgd5Ysk1gsy7Ov352wmxiZDuuPhltagc66untt%2BgPgQ0Dm9U5f8LbJm%2FBOh0Xeza%2Bjpfl43RHN5YCSkpL9zcVVhNw%2F6%2BLSe%2FtkxJswxaWufT6BwocP3Fh4A%2FSBs5blXJV9ZkfzbYIPqC4HQSvCZDXgEOYmpIgNcu4yN3761hI2NI6XsG%2FBqbaAPKL2G3qR16gqjmQBitpQPSWDce0HIlh9yBUDKZntYyq5ACg5cNQTkc2SUgDhatus6C9FjB7GJ5bXabDdeTZFZuSFiCgJP%2FoPN9nvTrYLPtTzxZCQR6AFynh4jQNrqCZXnqnL89hsYAn5ND%2BuoWEkz0Gbi9n3U6J6Te%2FoWsQofloDWVvxEgdvOfS5j%2BP6RHcix2Or0pOT7WI3rumMmHNkOf%2F%2B8igIA5LI7hz2Qvwzs%2Fmn0wLMSHvhz%2BEOEh464NaFUvJ6uGOBpADaxWBgXl6%2BFULE0qjwSrkZCWvjWSODVizM9Uw12CAXjs%2F8Z4HAmzy24jRHqUGeXy7qa0YFfD3kal%2FPvCWXHuPoi%2Bgkv1Tk%2BetFeTVtwrCdlx6fcf9nUauPhHSU%2FG2ebSTNwAww4%2FbyQY6pgGw9oU8AB4EZbRwpBv%2FcKHpT5mMmcpmDA5wjw%2FSkL4L25YpIJeK7nBS0H6oWXKApC3s7KDO9YrHNc1QRk54mWZrCgMNUHqw2gu44eWrgxZdVeiVQ6OfLNgT%2BWmoMebcTYZuubFBxWYTr4%2BCmB20AUpIQVoqvg3ySwg9t%2B7v%2FspGLBhREpVq2SgbhWXEvohfP1IIo%2B3E9DYkv2VIkwqLOxuvx6T1hkan&X-Amz-Signature=e95e9dd9de0368e37836507b7377958f6e09d2b0a88950915b77d2439ef221c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

