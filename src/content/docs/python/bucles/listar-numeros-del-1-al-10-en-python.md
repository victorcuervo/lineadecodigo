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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJJQ5DHP%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T154825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFF5rA%2FvpQK282c9FlCDvsB%2B0nuX1J%2Bg9lji9qzFhZKqAiEAgYPGbsc879tEZAB85QZGLrli2iwV9%2FYheDHX9Pso%2Becq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOahO8pJGAVjpNUj%2FyrcAxOjzR6kXHQxi4Fn1Ckwb7kgJ00LUmyx2%2BKFEx126OHwLKdBDC3dCAcA0TkIkqeCfWOk3pT%2Bq7V4F8UND%2FgJzephlo%2FzVs3yW56SRndozuKnhG5kbvKDdUR35Gk0d6cVoljTtAY57lP6N1F3FWFiIDzSFecO5VZoA6xazSKegvarJLPt4YljouAgjj3pYZwoRjzWDpJYV8IlbbpJD1lXBvCaab8oiapOf7zVK107TxQDw%2FjgoVgHh%2FXW37t2QK%2ByE8UKpq%2BMV0GbfONV7fX0T8UnDj%2BSO8T8RuuLQXnWElUupet0fAOSlhyQhsaQM%2BBIZz3lz7E%2FX5%2F%2BNS0zucjMpHi4uv6UaEIPEc2JlaMs%2Fzk9q9s3mkCaI4SYazjaisou3aMmlCLOi1no3MotlxWJP35ZwN9nAqpV9Y8S25l5fVRBQ3Tx63hxArovI3zlGwYPYnKFPpJWy1edMLZU5Gb79cuDYKOiWSX4HgUACtUy0BBLDjxfDnWI%2FPZuU6aBjBszTjKJk9Di1jWRHFPd%2BIGCUNnb1gHiYKESVGhBSj2xgCyf5gL96rUDLaWOYT0B4YFuKrpShSL24sPzm0cgdOQgt7iZ2Q%2BAHdrV4gIsMCGat1A16cFns6iAXfMJk4x5MNim0MkGOqUB6L5%2B4MaxQ96ErDtrYIqM41TvMmJDwWzXyB2QGE5%2F1lHl2uYw19mxR3pfGyuSz5Gv5g6C2Y6q8r%2FkfeBYo4VQx%2By0KPI5v3alo2uDIwere8z6pyIh6NtcH6b3HY0LaAeEuRKRe9YCFV1d6zw%2Bw%2Bh2glQYqjC7RFNsnnAkf%2FVU2IjDjOb37YWtL3ncnWoRHo2I7v69lCppNzJq34MnCYBWNJNFnsri&X-Amz-Signature=b62cc198d91d63700a1981ce48df03b101fcd594c0347a7f785353c449839517&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

