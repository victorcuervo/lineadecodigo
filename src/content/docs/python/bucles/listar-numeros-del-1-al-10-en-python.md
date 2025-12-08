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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQVX7LHZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T174541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCQ%2Fu9SesU%2FhDLVoN8S%2BzIs1SQ%2Fc96v9eSiIq4bW52gfwIgO2OqKPXKZOcu49Z20yraAJlSz0oRfAQnH6TgsesEcEIqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJtz4GJB0MHY953xoircA32YHCOqhR4q0hKg2Z%2FGyLNTnmhNNj%2FC5%2FUk3bgze%2FvK%2BIRiwyafbqzLVyRyEnqiMGY4LtDCJT2dtpVQyiHSN%2BEXsJjR1EwaL492WGwB1UZUa359mba9BUmGUBb0KC1DtIY7c0lhfc1cxTEfwMix0rYEDKVOGDwZLu0u2w2a0%2F%2BrEKbwG%2BrgCZyqPJ3j8Kn0IufY%2BMlKF8iP6oVXuVBncXInlKdA837gxtXpKuo8H2b8JH%2F69FnBbL1PZZ7InzZXpbZUfAMDm6TixomKvpW2plhX4pxTZz%2Fza5hEZSnQiWNV8TrCkJkK0dL0KMDPDF5poJ1rFFGHoM%2Be8lvalsP0GONn92e14oCoe28XioxLUVKGZF8QFC%2F%2B5Qjd5FElFVTCbNc1Jhw8eyXT9kJDj%2Fp8lqFR%2FXhAm9sKUugJPaG2bLbH4NcxywlK4bkIg6MVQ7WfSAvVB5Z945Rq0t6sAdCteowxe9oJvkYjfBufYY4P%2Bo8As0pNN8JgxJX%2BD725mN7sxCqfbHpKMYWxbKzkgmg%2BfPtK3kQR8jZwEzpqFFs1RJoMWQAfHfB9K6RR5B5uW0OZFSQ1ywe%2Fs%2BMSiS0jIzsuGS1udEVbA%2FAGeQxUTEFEkE8zxgVBbCDwQqlF1pMLMImH3MkGOqUBNwKQZY2dS8leBU9Y5GPnkTx8X38CaKlKHsqLcZ0yUZJFbOLfoFLhRvo8EQd7UoGEm46BrE8FlE6kLFPcxYeRGCWMM4oebE%2BDU5DcOC2kV%2FT8lRQHjxHzO79y%2BH5ruZmiy6GsA0juybJPaeJ93t1a%2BqHn%2FgMOmGX4hT%2FQrykZI95re4ZiUEGgrzKuxKDFYRYvaVVu3BAxilp9TKetthASmPWJlpB%2B&X-Amz-Signature=61f03c02610d5d6c7fff3c1f00dd9f86555bf537854858ea94e4f16488592a86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

