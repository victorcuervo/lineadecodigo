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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQPQVL2X%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T001422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIFO6mdTfEw0dAJn8%2FYLpkf6pKgpZIE2S3%2BALV4FS%2BpQxAiAPg6P2dx5sbFCUao%2FoIIjLtJ9ciefYm4wv5f5cPtY%2FYyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMsUIk6VDJVFBibShxKtwD3m4U6bRqhQSWyWcYj4lHhDn3oP684jX6%2F%2B%2FngwQrPOfUf0qfvTQ9yztzTzNcESGaXj3%2FxcbUo40pxWp4tKc1odWh8YbMjbLv8OwYv7kCWiCxDKgHZhxYkMVR%2BgEPJ5cvyLC6lkANnvGMzNTtGEp28veD7DCoZbsqEb4MH4mj94lAYND7uiSErlK2TjhzHss7BAB2UZnjHB8GMdYlhirwPSpZCBbMrOfTD5sD8dJOpU0HN0qfemSh3WaS9os0RJceLduyGXeow06zas5a0%2BFiGMIcvZamyCnu7KQVUc3FP0vHjIDi6eX9w36owXm9ko4zwpz5mEJlJe0oE9O1vcqec3GSrdlceCFCPopa%2Fbkt5tPwnt6vE0iCmVrDSOdSTCm%2FAoRWR9ssCGXWesbxkeIa69IzP8mE3musUznIT3EUBKH1jQ95B9oVGx4x0%2BwDMSml%2BYDU8rxTJ5mnPbmCFawYEvU%2B09u9llIFXMyvKVHLcyxCVnkVLsLJzgSYJQBcwCOPnZWCI%2Baq2jtdjzxO08Sk1kqKAD5SCfL1aOEmB%2BeyVorWFSJ2kXZ5nJkpehzOJF7dLuJ0To892s4W7fhMf9TYxL3wISZt%2Bqt%2FjzX%2Bf06Frf8eOd7Hys0iWBi%2FZXQw15TDyQY6pgF37OKxrIc1G9hJxhSwvGjMF6MFzXMLYlsL1UGNA17vFcF6TbkiCIHvfL80B4DopeBQnMj2ngj2y9G5B1ekK3ABPQRCkCZ0z%2FIiPcFu8zDAbdBlyP4zE9NqzTopTdhzU8MIdTZ0VrtLT%2FdiJK1ltfSsrbvrDf5ztgL795oDegLByS6HM58c6vYwrwLCLnLDKthaKXEv2ebTJD6JBXMigMg9x28d9X9m&X-Amz-Signature=040f9cef469184aae815668cdf8bd334e886caf63b049d0813008660f323a49e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

