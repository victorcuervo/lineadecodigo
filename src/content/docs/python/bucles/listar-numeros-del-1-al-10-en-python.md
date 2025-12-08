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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y42CZSQ7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T153231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBVrMmQpIaexOfCu%2Fu7zg%2Fd9dnVH1sV5mj%2BSXsx4bibWAiAnnLKPxa%2FCZ1e08mHZ6FEzRCYc5k4HgPiu3TgvHX4IiiqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8SbCE88e0g9NDNHOKtwDjHrvTRnMM1IzBrFpIq3QIQHlR7ahtccpeIuibno%2BMYNqmBD%2B1kgrg2nKQI%2FzgAjxrpxFigvcMR4zPcl28F0VKcy00YXqEHzoMR828l60s3wrMlAE9xtV%2B%2B0QPJPv7%2BCm1br24v%2BcnD%2FnPvg4Gy01kvnJPBU%2Bc8aZmEoCPGqmGVQkzhDBO1aHTe9%2BCmLheI6NRdfYlj77jMvL9MsUHgXC5n4tIOI0gBtaKDk%2Ftm7pKIe8RlikREE9%2FYuvobNvupz4dlZl50scoHuWi%2Bjndw11B9vnk72mwBPgfdkfhLSqSruNP8lbBxi0mm4ly23erU3jOCHjM78nAFH8p4A38m9huSfoyfJXa9WZZRd49emjYcH9%2B%2FbhV079d6qN4v4IeTXVQ%2B0bPVm%2FaDKh50clDwmzZRteia1uqD6A8eWh2nyGswEqhhs5%2BbPIwe5e4fv5XP5rpixwdc8m2gjqwhHy7tLSerh9Tz7rEyeZMyKaNorAntLswrQxd5Ig0ya8w2L11b%2FnNdIVHNNHNS7uz%2FJ1W3hdHb91Fe7kgNXHNlvY7sqTUaqwQrXZGEv2NQjLKlX8YTvUaJy3Bl5%2Bo%2FDfyPmeI7wAkwjkQVdWxV3WnWQZd0w2%2B7lu5q1gROO4Fxm5%2F8cw5MHbyQY6pgGp6qhzPANbUh%2B3FB44aKXRn42rZdt2HHAMfeLLo%2BelJ3FCXksL8uwF77yuDPmGyvo1hPpg0cGg%2FNqYr9u67Yv6EMzP6CSU8z9kEuOjgecwXRw3wvHG1NHBPVtutSk%2FrQmemmxYVRUcgGWqXhfgWsMlg1MpEvSAHPwZIvrKMgZFQeuBDeTaqjWcd5wWwUOjvKNCbCiI9TI%2FoFDCwnGJnxnYitOD%2Bt2B&X-Amz-Signature=ab68ac7b464690c4cf5a85e958b098a13f4092c752f5e46b60d2c9e0604eb3a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

