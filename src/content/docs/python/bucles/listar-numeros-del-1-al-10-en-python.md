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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPMEBZ44%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T223704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqgO7OS2s%2FEvVY8p2dSy9%2FfpLK3d9m2C7IsZhn5D49QAIgIc9dDWXpy7GBzN7RYRzdVeBChBC9ErMDlG77dG2rnCUqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD7p1SI%2FhLG6mrQclircA5JtNddVgOqjnG8%2Fl%2B1k43MRLL3nz6RHPoaTA%2FO0KPDuYH2AVJF7VR3puY0bBAiuEIMnEeyZMqvDlO0z5T1SMXQIwnwKz2J3HE53V3u4RS7Sb%2FGUkUf1Wl%2BaNZlvcOh7%2B4V8oO%2BF%2BcI5WPaRDjSB0uOtgEOoqy6sGYUv3JYBe9QJcGBCPbmWw3TKHKuWC8DxfdDuuVqfbfgacM63fBjvxoQwwrU7vzcnZdPqDTdNzUtZYWESyyGFVwiW8GNyscrJH0fLBga7A9Bb%2BA0Owp5N4QKc%2B2gsFgG0peNYacqYn3Tl8rzhKgV8z6pijbVQ4sFkxdW69%2F4lpXm%2FiPyvgZtb37B0dcad7dAl48dgxgLsoC8v3GJrUmqJbM01PmxhRq6Ysa2op9ilN4CgIRSDATrPhZ8oT0A5UfyRrHPkA%2Bjolm01I4015GwLSRldIEuCtd%2B7u%2F093ZkCO5bYfHieqDX7Y5Ab0neUi3iTLMqY3SpbJy%2F4tYgPCC7GQS%2FY4%2BX3DKgqe3%2BOYbXjyQBqy4XVH%2BVNkVeogkwp8tVY0fxImLb1NEdKkDLqbibR2Bmm4fP4NBUe9gWIkXi7dnvgSvmQTr%2FMIxVU0Csf7nYQ%2Bg3xLPVWuhce%2FlpR3X6ulg1nQKejMPah3ckGOqUBsg0ZrExj9DQxr1TfzGzfmTUEWSas9a%2BUSzUyofSz1%2BRAiRZbtHHvHFZ8EmXteJ5d%2FeQR5AdvHtUVI2ZRYrwYv0boFSRAE0qz55KpRGfSQkTePKZzMfZu%2F6dFdMrNtSV8bWgski1VZKx%2BIcaZP%2FqhHE%2B6jcFl%2B8xUvA5D78B9MlZgtfPa0uqGK3eIQ7qNXsqJSn8r52p%2B%2Bx%2F%2F8UBfF77OxENCvK0Z&X-Amz-Signature=a37cecb94682084ce49d4e75ad2527e239d3d679cf23f21c5dfe472f284e593c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

