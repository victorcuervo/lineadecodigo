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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLM2KIQM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T120551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMllGZx%2FUbWnmSZiycC72O3uBVUCxTj18Fz0c06s6ooAIgbE5LAD4hvRPLBKlYnW14luqplEx1EbNTfD49QG7fgy4q%2FwMIWRAAGgw2Mzc0MjMxODM4MDUiDE62VXft7Gh%2F7x6p%2FSrcA80rh7Xsy7vyEy1VaVn15H%2F9cLRXn58PNV06WUdUyaiXvuMx9j9Q3BqxWKz0GMdJ2IkD1vVw3X8C68TWWvh4FvO3ll2ifjvtxs8gDImhNvRFQjbVGfjolpu%2FKUVdCr15%2BTgVipvQUYNep%2B6xum5AfF9slruJIlle3Sj67shnjeWrDlYC7vIR4df7kvqGuFRBW7Iti8MrHFqFqnZexLAhn5cB5gvOEqrkPJ05pe2bIaR0oFv4BvLjBuvAuZb3BUoT7vuoRap%2B%2BKTp679pJ38mct4yVN7L2xdvKaUUN1wgmmsBSBfjY3kTK1u%2FbJsD%2B%2BTNxiiyaRRlF%2Fe%2BPqJclFBWrYn1CITqy0AZ4v46EiCxkZzWa6v1UhEWY50G3frlRu7d%2BFwPABBPJAeW5rERGKT%2FxpTMPazIapoOvpqpbat6A%2BeA6Rmh1HCYY2IVVw6pMfIRTBmq91IHI4W2DW52FjBWvKMTzOSYcOUVb04%2Fet0BQdsw1pbW8f%2FJfuJuJ3bbpJ1%2FW%2BM5uEtb9NehGXGgomsCCMnmNFb088frN5HdE89roSCqUjD4c0mcpr210lL3uMeV6fLXz2vwWj7lZx3Q8RxWvAtSCRPFFXbZtP8ev7f19TUhEAhM46S6daDeP3q%2BMLWoyskGOqUB5VIopR9WEbkG5kIlQ4Io4tfuFbG3TO0tmHhCDu7dj5MNPjGW3a60tNPV%2BFIOC42NCM3Ac82i2SzhI8j2O0lJBgum6zJgbigCESRpfaEJ1n5BMJt28kau39F%2B32zOiAOI%2FK7UX9FcutUdaNn7pAiOwirg4AplNBd%2F%2FPXWvlPkYKARTeVpsNJgG5wc48t88P5n0c9csR5AneiWJokQBKoG3%2FZwXXZm&X-Amz-Signature=9e597d81c9fbc9b45e900d56f3b367a8df1277d25541f9e9dffe9492f1992e6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

