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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664JNAZH6Q%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T094019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIHmndn2zhd1UrzdDbGBTRyByAQQu90jbBhlv77M%2BnIb3AiEAiG%2FhRFdMQFBhx81fx3Ig5eP%2BwDcYiBMiI6omoU4%2FBsYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDN%2B21xcmx4gcg%2F1EHircA%2BxaGc0Fd1yU3c0USKii%2FBRxqd8sPem7x%2Bwz82S%2Fbm6qjCyKzr6X6frCCaQIrg5%2Bt%2B91egZoQ8g2PXYM7F2pOS9N6JjJAojxLyUcknWP5NKe%2BxXGJ3oDJI0zXpB3nXuKKL4ix5Owk3uCaVUHehFkc%2BWnzii1aMuZ%2BpxYH%2FJC%2FmJZOIY6QkTMzAGW%2Ft8qoqsheGEofXW2Lt%2Fw35vtWx0%2Bdc%2FEbgxMXhbYXDc9byBprWmUULt0L5T4xh4f%2BTbwgjYh%2Bm%2BAp6r0WiTYFk2QeIsOfKXcm110EBIrZbdBQKyzcul0hESEqLLbPsk2ejniEGSkBmj3UilEohJHKFnJiNGICjyxt4OlU2FsQ5lAIw%2FuNY%2Bo6cBAYfZoNjmsAvy6hv7Qd2BYg3IeJTl9RiDyfCy0nLPoTGtYrOpZev0CfXGKKC%2FpZISz%2BQOHcRxzDH9LjMV9GvkHB57B2KwnGgU2ViNWBKmsMSXp3itEtlUvZhvNqiqqpPyCr%2FIAmjUyRlwcQ81ErzS%2BZLfJ4HOAiqzm50o2gaNjjIZY9f1Y%2Bcqjz%2BobNwl8%2FkStbypb%2FNfYrwcjVIjIB0Su2wc3%2FVPDgna04CzXcz1nrB%2BGgM%2BALOStTIUqspyZfM1DAn0%2BZR8RqOxNMIOqxckGOqUBrdmKtTv6UQlEaJbnn%2B40YqiYMHodJ4VFoFHbU8wpyJM5Slzw%2FG4qdE7t5Y0yV8cTkbW2Sdh0Wu42RgPGDIREthC1Icd%2B%2BrwSlepGCa0srMnfNeKa0bl%2BHiOXM5x7Pbgs712SPJ7UBDHjGQcZVe2jYQrlNY8YyWf02vPKkQ8jJgI%2FADPkAL1nXfr8XoyifS3tetq%2F5UOGyx3PnwvCslR3%2FJB9NqjE&X-Amz-Signature=7f371adfb54fb3ab19816b36aea987e0df5ba347632a541966b5c63783f636f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

