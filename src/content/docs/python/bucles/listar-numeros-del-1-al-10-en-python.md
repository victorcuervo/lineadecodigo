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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7HEDURP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T181700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJloyk1aDBgfN6DS6RT42U0mlfW0vy3xtGM4%2F6OKjdiAIgc0EvFW%2BAU1sZNMlYpgzKccbf66%2BB4GZG86sGDiLmoWUq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDAl1hCcHt5MUPJmRDyrcA4sOIDdx3Uk87xknq61bio46cqGVimTMunRqnzMQD7kDTHuhbcqLftpS3XkQL3slzOkPfdkXzt6c7WX0pEPVzPr0BfdKvG9Ed13G%2B6fW1mGkbsYefPH0tWV2pkCcvvrQVMLWd%2FB3LADKQmjORR2a6hqatJR4oOWKFYnjdEcwuDRq1PW7Smr%2B9TUco1odrRUT88oEbAbcqVxJQ1ItkqhLmN9S9th0IUvTIM469OTTRRWpW6qtiSYs7TJNuFcn5F7GV1u222EpxiQMRjPCcSJQnuVJp8NOv7v5OLryegFCI4de3V%2FTN4P1A%2Fqth43Ge3jCE2H6FZ584UXSyLQRcFmX0xpw%2BwPyZPHKftdkhV3A0GqcsGDwTwPBsPxe06LgQTF9%2FZMKS6gC0rquvfTPVgWNo%2FuTDa%2Bpg%2FnftH40edriFycFlvTmBtHNjQnsmOtW1Y1VUxZ%2FGuJcG%2Bb%2FJirVrH2%2FWtYlDZ%2BdGCAv93bOPr92Srekj3Eb8RwLHsdvEWXxitvsBXBgWxOnRtrhhqbM00sr1Gw2tfnxM1yxB%2BwXzOcxPLJEZ7ty%2BQw60VuOZ182FHE2iqGasEfWhSupbfcHdc9vy4j5znKVLp881LCokvmS0BIXF7WTPQbQAkYMXMOzMLLF0ckGOqUBJ%2FbIvbKIzMqKe5YEO8oGOJ7reBnB5c4Ug4rTfxsg6g5B5PG%2Bc%2BzzY%2Bf%2FigAda8W6wI4IIGPxlbV%2F7qWjYb5Xs3Yn0W9LD5Ba5VIczDHbKJqrHjlW4k%2B10nkqzQQxlN20wAACGnJTWUaElJRZYUZ8Eb3SH2CFd4u2meRrHNCbg%2FgyDnf98wE8qN5GG48EFRqwJtBLz1mWvElwsBWOHJCccp6ZX0rD&X-Amz-Signature=e6687345d6005f0af7d4dd24fe1e653f9184d2a7151d5928ce2e6d7078faf87e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

