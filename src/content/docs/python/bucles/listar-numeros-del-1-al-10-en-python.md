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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5DVSXPW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T150418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGC%2BGEzYkJ8Z5n0%2F8tzRw7W%2BHd9XL3yKNeJ3CTWzk%2FS3AiBsjDE6Cz9Kdtz5l8Io6aqeC3WurKXoZTMpfPfVRSmrCyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMoBUh2n14TH7anA7uKtwD4z%2FpqJS2wHVssxsdBQSu12Oz9CH6ioqBSBrnL709qxhGkrAIojEqCehW%2BOBV1qetxj7nDwirhB%2BTi%2BdvbB1WvChw6W%2FWYAu7Kno7U514V3Pdj7wuLZP7DOly5mt9BPxtc1ozRcW%2BuGD051iGssN5G1p1F9rMmgn5J091zyAaHKSV8dZVfuU%2FNxbJXeTmdhZ6XI3SMy0Puy%2Fu2SVoliCDVcq24aobu48Cz3E7Z4odE%2FJZiI0ur%2Bdv9rLgUwdneIYvFq2Buu7EXQMwNobyq0KcjXjqvyheaR3U%2BBlG4uL2DVWXDyPgDSJTz%2B%2FIYupVPaskxsRenjMJ4mOfJJXdunnr47A174I0gPot5vrIO1j1ZE4qFfcZJuIWjikewbQ4CWAk1ukLzW%2FRREbU3MJMr4X6iHI2KztyaZrWbbRiNSmMDAOReYpDPHkrjpnl5%2BWqKQn3s8J4ft2kmIwkbZN2R1n9B2AGO7KSAUIab2XHAqcttAQAr8PozIQH0o8lJnRVH6BHh%2B%2F7iKbSt7gdVRKzIEu7Hzx6a%2Bv0NRwm0zSaHJkwyS%2F5PwwYm30Uwnm9y4iH3DJU6N%2FjeCrWVLOIX7ozN0H2XrI8Pi78GHquKD%2BVSnZqAZ%2BSZxo%2BielYAi1voRowuabQyQY6pgEsHvLgy8No%2FjUOILafXslpUo%2FcmtgP2da2ibk5OXl8pzr6fFZC9BRXw9XDMweq5Ihbo7G96xbuMU1ceyzB8%2FBC2WR5MlLUarI5q0JQM69JxHUi6KQeKArnFXMowCpeqDwLZYH31UpDMR8%2FRo%2Bq%2FGwAXAUVAL%2FZSx17KM1JRr04xfxl7iDRGUVl0osRDUf1FA88MuzMU6RyjF7OR%2FwkR0gSZKQy1Et%2B&X-Amz-Signature=6b5e4380a46bcdea6768d4fe0dc7ffc1ea1ebcb6e44c4e9b89c5a2efaa8f6c73&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

