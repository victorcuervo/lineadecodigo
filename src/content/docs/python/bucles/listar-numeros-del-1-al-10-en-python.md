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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656YAWB2O%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T083301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGE%2BYf%2FAWhiP55xNifclBFavrdqo8AAZtXAc3LKJFgTwAiA%2FCG4l87xMB7%2Bvz2HmqIEGxOvCX2MajerWw203G7NQAiqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMufejIdwdFJhenac8KtwDKk1y%2BHkUS2%2Bi2HDXPCj3DrTi%2B%2BLOmNYT4pHaFvfFrRyR%2FTb%2FbwR0K7NLZqeofO%2FrTquaYcJdbScpF%2BkHF%2FO1Q0a%2F%2B2NbHjF5hjbsjqFOPD8bBkaR9sd17qu84m2DdyWRjfOKW6wbCeRih%2BlK3ycw4C8Bb%2FG7SVJkYhTOmffOqyAkWLrQuIJgEcEMSEkttOX6lPcqnU5M1kYnC7GkN2Lh34ZBEkP2cMUcQnjs41%2B0b3drHl%2BYyBAdz66GsLv%2Bl3BVHR13v1Efzra7pazuyQr5S72ab1qg6l7ipwLzVzmClJHRDad%2FwzAAgf2POZiogdpduZzTdTWRdYJ%2FlufbK7Cl6oflSoBxTzIkN%2BW4bQy1yaDsZ1p835ftPNXek3tho5igPtczXp2JgWABanK8YROaUCkkGDdVNjG0ViW44wd2YBP1k4t93CgPlLzeWEHHDeNZeE%2FHcvOlCzaVQ6dVS2erIQkTM9tb8hLNbC0Z2YVtLZTSBqaFtEgOjLtmDdMdeK2EfqMuUh%2BGZc49JkQhwa59%2B5y9rdzCqxVdVSe2zTHZ9RD%2BPMETlXP5dJIqOtl2z8bLz%2FJp1Xo72MLl6lZ7%2FKOHfQ6pNcksK3iiNSt5S9g3VsFgx%2BHExJi5NOCZuHAwye7ZyQY6pgGCJZBL0w%2Fmft%2Bo%2FJkId8Hi8vJdBV%2Fh2QgKV2rtJGkPa9%2BxtUkm4s2ZUT5G5uMZ5t5w9lm3YsR9HydMdf4pdIcGnAHFCV1Kym9w9a2nVj7gYLYWnx5e2om56iU5szYJ7CH%2BvCe%2BleINSqfagWb0L7T4zzyn7cFjo9w0xqHu5LiN0SeHnHe00u8jWKX5RoGIlTYxmpZcXItqCkOmFosaxzK9791cYW%2BG&X-Amz-Signature=d95254d2d8f3e96de9689f90bd02f2fa2ed4d7b5d0c534c82b33b49e0b9c4f9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

