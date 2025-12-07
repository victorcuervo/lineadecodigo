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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REW4P3GE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T114139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDGtpXk%2F6%2Bs2YFM2a0FfbbeouWmWPpyiS1Py6X4Q5gGDAiBtTkNLi5PJh4lDJRhCVa1WKYLx3CgRB%2FbSOrOD8iLBiyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJMVFssIPa4C4CKTRKtwDXhyPvx5LyJ2Ilo5JRgqxl%2FPkn7ujQX%2FWxaNl5HD30F8f7XoxM5kG05XMGt829owOZHbuXdtXfWX1u3I%2FpEIUCMhPL40W5V50eTfdE%2FjH5Lwv1Ls4MV6%2FMB%2F5Q3pICa5FVReSUoulw30PjPVyP6T7ablaRQnKPU5ijm9Sx0YYrsUeKxNyyB8NgkT8xXKm94y6ueZDDRN%2Bs18JZUB61qTSTzTRPHSoe%2FYSf2uJtRj9d1QFMgS7FDdWtWAZIt0a6IIAbcvR2%2BEJuv%2F%2Ba47NdZxStrbRLMwHWXbZKHv0JqiDXAHT497qLtFXWHMWRDBhJmAbObJQR0ZqYfnsNqJgEMg%2FjDqa8ySEr1aZw5wdmZsqEP6YalYwZvJNZ0MkKUdTzA2bEqFlzMNKncOw%2FT%2BttgZajbpRVyfORSo%2BujReGoRdVFKcG5xvRkOyzIyVHLKu5Uo9ywCwWwLjxuIkkF3eItdBgWUHoU5DYFZWDxUYJpmFBXiHQ9OIGEthUkQNxS6eM%2FWguZMliEA7dU2XfAHULSo%2BwvJynjG7ATNiukJdxNF%2Fq8urU%2BzzK%2BfzGjnaA%2BKB4FLe%2F%2BYFII%2FVOCt%2BQqKOkQhDGa%2FvXkGxpO3mqYhuHzCYUQpS7a0VdIhVTZYAx5Ew9ZnVyQY6pgFh6EkmTKaC0uj0GpYz4MOKvyowS5AdXZ7twA3dFMIEe0x3fnLjtzqpTwc%2B0Iqcg14PA63RMkhZykHn7SlMuyk%2B6IIyK1cg0cYYQ4YeYPzdDsOeqotjKw3yKMkuzi67jbfY2nK22twlO5ime7yAs0ABXxECbM1Dtz%2Bv9%2F8giQJzSZuNXr4FAyznbodGenBV4JEZZV1Qo7SJqT3dOdtnF%2Fp391KpebWB&X-Amz-Signature=3a33d5c71aa68604c222a6291aa69074fd76153255cd4349088f2be9b03c4cc9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

