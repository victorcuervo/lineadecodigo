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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOU323AE%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T075451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBhn9JYfxrivfw7DWFdBRIlf6PSlR1z1iRO7FkV0vfjwIgZwr1P70z8v5vXgjTop%2Fh4a2dGRjAr0u%2B5w4arbp1SO0qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBAbGUPsFqtnMAcMHCrcA0MQI8SlpTRvDnVj%2FCZHCuvxg5b6U7B%2FeIFiYrxhN2hDMYDfG2Jx361iG9AjI93wnGWq0BleKoHufmFH1fqkSuni3sGU6N%2FyRrNPQjA22GRIw3u3LZGun9QAo7wxasN99BUJ22fUrsjD3%2BD1fZIIqfn8LXcN9lN6%2BQMOtIToH4yVUKbRGnu7OaX%2BvnW6ubR1wMnVTqV9t9TbwhA%2BSzhVlAS%2FOtKiPJOkI30UoSJGLoL9YqxyOYe5J6i0xOpmP1T01K9Rq23zstq6SlgjYPrOR4Zu182J4jUx%2F7pRjb5yl4A9hyuQYJoAB8AaZpxEg%2Blhg3Y2CqYFR%2Fit7pw6KBecL9ZJm9EYsU8by9ca1htIxrmGExLTDBefHKApWEAuqTTmh%2FJl3DTDGvZ9z%2FtadzR9IC31pNUxc%2Be32r7I9Itic%2Fl929UV2JNYNy5SUCIfGsDUhy%2FUML6Zx%2FThoQW0lMCKHpR13k1NMDtfrt%2Bz0wp%2BZSzDbDc0bAd%2BUa9aDV4lqBs0pWBBHoU7d1FXMRm8bDu6XtB0F0EX1hNf7GfbJBftqXlJwuDGGuwrgax3YWdvZF9JOUwC2KA%2Fr3RJs%2Fbdd%2FEzDrddpaSvEULlkwaR3%2BuQOH3Tc32RKi4q6DRgR2gbMPWl38kGOqUBfLhNiEZMoncRNt5Y5IycYc75znETGnlyJKygrUQkGU7aqdKrgfTjQyMbfu4Y5bE9GcAK5KhNQoq3DIY7Fd9znfCEmP5id4BWhbyqXfvI6LrxIMxlDMP2YDQB9VGZXZZNzL6AxDIfszztQzBvMGAtyvOOS4wnx96oB6Srb4TkzFGbHchMspIlCAo4JoEv6bBkqjCJj5D1EAXjm40o70pgOyeKwQ1z&X-Amz-Signature=670ef8716c4477a62c860cc46e86ef73c5f0dafa9f69fbd93c9c0a5b2e8b22cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

