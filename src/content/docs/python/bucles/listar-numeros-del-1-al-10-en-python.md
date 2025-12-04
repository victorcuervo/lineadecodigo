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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTXEDIIX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T083844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQDFDnFOpxxhtA3C%2BmUySDrfQK%2F101hSLa754jl%2BFVeHHgIgKqMkXx2sBu60Y%2Fh3Kk0V4DIv0sqNLcpyoBPomViE8LEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDCMwdl86A3JseT05WyrcA2B9oykn8t6rVO6HClP%2Fx%2BaSceIGSPGLQWXoa0Ks3yZkLZL%2FH0X9DbpMuMRjdr1SVga3Ac9gJOVkHBL4CiSE8RLBqE9Yr0ZIKlj0KnfNYFXGA1NkTP5rUxQQmxLRawB%2FxmJK4h%2FgMSTXQF4xA9X4zniPqnVo0kFMfYyetbOKczVcvov2OWxtK0FOB3QNE0X9fcFCo0ODW2JLJm25hhDjnuVI1cG9xizdL0F4QsNgM2bTu3WuqzZ5J2jE8R6z5TX4AtyGj3WGIlHLPTpE%2FYV8%2FjCdyc4vTh%2BHOs7zLfuY9Jxe8IO23aprsBN6M5%2FdejQGj2vb38EUmK9shCw0SqC5Lg902RNe7BanxcKpUUfUkCKoMDkw2LsxusTlsWSDyG0qokuAylS0Bhe%2Bpbb2Am9qM9TfUL3HzgxG42Xf10Ousv9Wo%2FnGX6s9iQK0Xim0OUH8YJRvX62zYwyNrIrWOzsznXDw5uvyA6OzTl3PF9JTfC%2Bn8P%2FbN7tlZmYtx9MS7zUWkMClwUJjlEDjyrsR1va3RRMqrrC1qEpRudToF4ua5PQS2uppl4M8eqQ%2BcSuUK7vh1JV9DU%2FxAZXSL8CjM5To1TdSu3lWNWbgXcQ7j65aZJiPbsHFatBOzmrLC6byMO%2BHxckGOqUBQC%2B2mhEqRuqACXj7o8dpA7JwMvcFAMg2SAOS2vph4SktPVxA9hxbArzLI4s27Aie%2B%2BCDjz41McXsJxXsEUAdcABUDR0dOGyJMk9sWWP8YW7GD%2Bu3CCtB2gcMGS3n516vV5DXzg3ywbEEVeCwK1DqxzNZI%2Fstlt3wIl9LvHCtQXCdmK5zB7m2ndR%2FkuucwMIykm6c2MHsowTrGyQryQ2J6JIFImWr&X-Amz-Signature=babc34fbb340d84a09d9a9926bd5466247c62ca02cad19ef679d91427b32407a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

