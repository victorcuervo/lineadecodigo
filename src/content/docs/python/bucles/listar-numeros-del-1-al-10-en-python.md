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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WALM6EME%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T072002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDi%2FkKnvAkX6FUrrnvCgm8lvY0fCbyTXB%2FBO8EovDnezwIgGQ3YcB06ohypP87BQSqfOzOcFSm95zJlb%2BFl0wuqpZAqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBmQgotcnpGwy%2F1rbircA5bp1AbspXe9As7N7IR9JFwxd%2Br1qCrBARmfXXZeCKeESteeiuwmjiUJwXryKTdqHxp%2FY1jUNrFudcTGLhohFGigAIBpslYIUt4Xpnkz7mdyijfK6N7qebmNwKSOX4glYokiajMlgQ2kCb%2FnPjtRna8mjfX0Fy9V525w4MGuuomb6wMCcJpc3ZMat6Nr%2BgPH7BHOYJHkJ3VnWyQEpvOay%2F4POiR9jIM%2FKpPpul7BbZD5yBDIUh%2FsOAhZLn%2BsB49Ojv4ds%2FhiXiAlFQK%2B04vA3qx%2B4TiinmJzdd2%2Bi%2BKjDpFnZmG1joMSJy22twx2%2FW2569dqJ8iR4Nqh3P5qHCRTWfOMwmOvdpkf%2BoWeYXTejc9cvoMB5rCbIaMKoGUoeTbHC4801Ig90KNTKOPJ1DSirbPi1EAoBpkwztqHkcjCqRNahHF5CmQZBiRiw0qqQOmty5bq%2FjOfiFC%2F%2FxbxX3o9ZND8hc7KjUlw%2BHpRfsYrs%2Bk8BADEDkoHiO8N8mif4S%2BpmQJ0FTJFJCvNd3UoG5EVy%2BwwEVgdKX%2BX3%2BLu4CB8aB4yw7VI%2FnPYwzHLES6yPB7pX66iVwA0%2Bnnx1pEjUBLEH%2Bmh1feFj7nQhvUCFzdFEHwySVMuQ%2Br5aHDLLkfaMKeH38kGOqUB2nLNgsxHf8lS6nHdOOPFvTt1lXklBXfQCaThsnn%2Fe2xCKOVQgCmguRGcsVz%2F0hwRJZJ7cF7rEsqrcrodTo%2FDcjcKVda042hhVQ2XYTfb586IIGHZUi1GiuTxgVUpMsoaZ0Gxve4H4W42MSkkEu%2BUiYOuUme3myocEuZzzuYiJ0u%2BPfrl%2FM9wJWunRN%2Bl%2F6shXSkySwt4iD%2FxY4%2BJk2%2FHe2m8vCFr&X-Amz-Signature=026deb0cb4e7e9912e369f48782a5c0de839d4c949e02a6be73e0ed64d4fa5b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

