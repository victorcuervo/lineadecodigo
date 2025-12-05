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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KX4OLEW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T074102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDIAiCMU3mYCy33X7Gu9Kna0egoyR6DX%2B7xH%2BhdAONa%2BwIgZRMRrN4fRf%2Ba0raoDRcc6MFwuS5I6NNfuSGl8nZcqxQq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDLMKQ8ClsstmZ5eV3SrcAyFSb%2Fgfv3EB%2ByIdlEgu9D8sEfc%2FBMSpH8H%2FZFKzLV2%2FlWh3Hn2OZaGypxcV4%2Fczt%2F1DmTkIr22mBsUiXPT46CkgtgVZ1jDGH4tP0jlcLz521jmK6xabSEmpMYAXhHMHucKOCe7iZZWkgx6p7jAFzmBqcDVbP6bgH%2FplHCrzpeYfVCOb0xUzehZcfHuTb7ouab8s89Q2UnMTtHwsvExl8n%2F9I%2FPvuoaVk7Xq9QJvOQ64Ss5EX7Zfp9AVQz01YpV5EYMyoCau3z6owrpIdC%2FpSAynGyt1nocisVtABS%2B7SbhAF3f6g9yvNhmY68CX6%2BV7dLN5wppG%2FBO3BWaEChscBlNa5gJl92XF7d%2BXkVWN6D7Yj3xoRT%2BnebwmvsyXwTpz2v5S8qmm90gHWZz9Wab%2BwHGJ5cAkPJklgMEvEYw6cgqERIMVyxt2eCp17tY0zl5wjz8jFLuhis7mLgBzqNIvQZ%2FpI7lgafeWCgY2crrtqCtmaWDXvpzkyuph1YT5vTQsBpecTTmkfDhagVkX6c7KEjl7jmF2Jh%2BHgWgukc0Gk5eigyoCgndFXW2PW%2FeCC8WZVXsTpzMPT%2F6yqA1UQ9%2Bo5GtFPWuhJVxwRPtwq1smKz1YwT06NRhI6Augjq%2FIMKKsyckGOqUBCFEKVcXKhEwjcfIJxuk%2FQl2%2BphZKaS%2Fj5YdN63I5mAKY2xfE8GcL6JbiwlysSpgA3jVZeFhTvW1h9gvq3zkdKFYhWM8L8xJJ3h5zvn9UjcmhORlhz%2BOv9RfPA0A6dNqrxc%2B5ma9gufkvCkyz%2BKdqNA9PenUaBAHnrnxh3T%2Bj1VGc8w6A7G2ZrI82qxSKZt%2BM2j9UJqj%2BOM4FW3Z%2BAtBNy4yiYhwW&X-Amz-Signature=879ace66bb89d08c209bf7711c8193e37e44a762d5a9dd7109792a4db5d5e152&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

