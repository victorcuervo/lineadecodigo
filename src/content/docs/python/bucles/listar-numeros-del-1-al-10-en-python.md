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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGPSKHPT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T072020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzCJLtE0fb1uXbBT8hJ0bATatTphrZxSTqq8x0Xr9rxQIgCpLmM6GFn3Z4mJfEVEpCBxz47kbmZ1bshQ8lbu%2BU7LMq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDGG6NHcUfzMuMGhZwSrcA7X7z3oIEwmcoIYW2rzNn%2BsCfgm5gQcap5%2BY753BSp0KDKBv5PpcXvZDar5eZia1JLbUPr2IlozeDOgs8nUGF%2Bc5nZRIBFGIrOw0BP6zdKRCyviyueQyajWld4pXD29PcvrwnY4AAYaJCELqJLczhc2N1lYqS9E5ZIURvdpyGihDIf%2FMXQ7lbHGV1nWjwlBIzbUH%2BpmATl30knkvjJWt1qJd6Fy%2BagwXxh5%2F48BmFOXRlJOQ8vHMVUb%2BQaqLhjZ%2F8a2CRfQLo%2F49txJdZJbmj5qpt0vqHRwx6UCTCOVZ4D1yrToXDYkJN3CeM8tyKrJTAsOJqQC7J2qq3DbICTnPvMhuoV8AvddAFav9r6ICG63GuQBXDVDzJgloIjI5KQZ%2FquI9Tzn2%2FgR6iEIgGYxvl9IM6AeiTArBIjSLWwzHoEbJx%2BMxycNTmAqKQuRNIdCRjg9XHNlaD7bBgGa8KAouguSeyaSZMEkS%2FpPE0DhR%2BUxJ7XAz90D%2BHUCIp0cWtBpmiaGD4WP2i%2Boe0aHnk%2B%2FnOWywOE6xCgOFtR5%2BYI38ixitFs4qprJyztePBRsu%2BP2QeMTm4cPCA8oxPeVoft8fcZeNBNdjrlzPHbS26NZNzJ51vGBrjMvBB647LBOPMIifz8kGOqUBM4t6bhKFsz3hhIwCT3lBjnQ332hgP2a7hopoTIdk9TXh3gsDlUNVd%2BB2CJ4ywCilJVJWhHkSnIOHjIhbHloQXO9DJeTXTviMrYcK9EOq7p8f3p%2FwrR%2FrwjCrV8wqt9oRACF4O%2BF3Okm13x13XQ2S1Grg%2FLEsDVgqKud%2FIHNeKRczg7ybKU2YLw8bidcfieil80WaRg2EeGVEZVW3RZBvMmXjodSP&X-Amz-Signature=40020679c572d17050c0a12ed32aaf60121e2ad7b108d0da943c5b979f2870b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

