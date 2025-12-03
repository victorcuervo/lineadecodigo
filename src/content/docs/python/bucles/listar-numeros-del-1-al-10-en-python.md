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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZRXWBS6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQDPQLqfUFysY1O89ryIS8mXpg9rcSjpFbi9KIO7NVkl4QIgaWI%2BwQc5vihT5HKPicTOyyTnsXMD5bUVIbuA2%2FOk1Ckq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDPJ2akltQsBU9fKbiSrcA7QmUy8jXKpfr45PtMDGdQoGXJQc%2B8sMiMISuJtUeBekta44g7gIVrf%2Bw%2Bk0Rg64V1i501ulx1FHHfUnKB4M5rHWi9PAiZWkL%2FncJ9p0AB%2FtbKPFohSf3GK8hFUCxhNr%2F3IPp2XL0ZsGBPv42f9tJcZ%2Fntl6%2BR07wamrMkvM3ph9cQz57h0mPYYtBivx6sHbvrtypCSbuT9hLIZbmj4q3gHbMPlLGxF8DOfeq8HEcC5prvjoyfoE9ldv40i1DTw5UG4JCPZnFJLUIKy27iJdJCerkNeAo4qKADy2FbcFqKvhGaAWvkunCle9LbGXxbro989aeVskBFyOR2dBt0DieKC%2BPnH8N3RgiSTYRcSXqdi8jKn2EtwyJ9iRBw4wzFmfCxH0bdaks24bJv9Ol%2Bua0EeoGZ%2BlRSHJ91pEGM6ozc4S7vTvCmCQAIF6McMMts1xCkjLlvk7b2qa6NGxrzDRNM2bstoozLoOCUyTwOpdvFfgsIwblipjhgqFJ%2FOM1v2Z9Ug1dihdNB7ZRvHhevXbocYp9dIDwfyVA8zJRFab5SZL7TnR4Um6sY3tkfyIRjNPlLfaFxuoYzGBwAd%2FJLGaEySBGbXvU%2Fp%2BHqEtL5FtbGVsmg7wRQ20jjXfDZHkMPe%2BwskGOqUB9euSdUGpNjCGrqn7mwuHELtClNL3vEGMRLD0s88wzVO6NbQ5QbZI2xbkrqHa3Zf6L0n9SC5H11pF%2B%2FChQwHKb4PJvAvF%2FeRIz0dnxgz4J0Rx8xJXTRVdFG3CfsF8phOpBxkAKuCIxAQ%2BHIj0oEfFG6w%2Bo3KDn4JSU5H3ONnbuIj99LexxFieoHL3QhCRibjXXH6CLdJEBqVsl%2Bi5O5o8y5%2BBQXXm&X-Amz-Signature=b22054c174d5f2649fccad970102488e897ed8b5aed1ae35705f5f2873061166&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

