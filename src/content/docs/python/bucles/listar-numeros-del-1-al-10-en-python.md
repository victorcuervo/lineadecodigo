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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MRJVS4H%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T000216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBHnnALzV%2BfNK20p%2Bjgt5QCoAOv3JtXb5PeeiWROr%2FnIAiEAlskpH14QZk18qD2U091nsI%2FVF8KrSWrLIhHmmHwOT3YqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOCh%2F1HHDGUQ3v%2BOaircA2KYrqtgu%2FsYUrUesYOLuSAM%2B5Yu4%2BgWWgpN2kM4giHPbBze3UTcG%2BFJwWsRW3FLxbiFb1gd7YVstQ05cLAQt2kUeMXt7BfzJfzpVmPs4dWTlgIwog%2FqyMabIdvu56zi%2FuC%2F%2BY76aImg5kb3wTicsJYzpxfzWTMX3e3WuWgDZbnJRVyWLishThexd%2F8lpYF%2FItqQII%2BbDmP6DmvHRGhQW5tGZFk7NQEPzk%2FUhsjWAMjbLULHHm6IjBv%2FjB0F%2FUKStnkq22TUQheALFUoP2v%2Bq9bYlu%2B98kTvKao6e4vK2zvgJqqznDYD0GCncn4PCuMx0v5WMwfYVewrzMlaKqVpCGLFPcqMDb69vWW43hJTcaMVVDaBzj%2Ffev8hJ71T7TdQmB4iYOnD66Xu0Q5Bo7ap%2FYs7wHmCwLp5eGxr9%2FrTLpN%2BrX0HwMX3K9i37IAXMvENmcZe04sHInrE5JhHIsFLee1TY28nijuZ1NZbP%2F9%2B2QlKbk5CUWL1Q2%2BP5mvGYtwmUcGQTpZQLzD3jXJy4%2FIFTP1wRxstiLsqgiXYiFRLfk%2BC7cEb7MqCC9UKFEhUpavTXjpnwLs%2BlbVQoAcG8L5aAm0oRd9uRMOdJkB9yoZSQ9mGd1z4q5cKA%2F%2Bgir4fMNb90skGOqUBjybzhehIBdLC3v9PQbvzPNp2n6KVb%2Bgk0%2FOxOEcMHyZ5Ak4BUNMCfHzfBhEtptKq8i%2Bhm9KLZ6eJ5ohxpARpn8ukRR9NjrEF004fhY1xoD990m8gN66%2FgCyPLwFT1v5Gq7qcMqkdm0La3ZKanGQyGx6%2ByURY75Dvl7Srd58HhKPkOpTLMxOV%2FBk2U0bK20LXnaTG2GTuf4DHqXa%2FjH8qS16e9qIs&X-Amz-Signature=30fef1590c24e15a7663cc03d7f4bd6b0256c98a603212cb8d2022b2351cc37e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

