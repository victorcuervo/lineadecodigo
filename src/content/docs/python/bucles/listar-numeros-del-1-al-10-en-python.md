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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTCP4QCD%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T131341Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBPysVNBSoFf5X7ol9Hyd1uGrqL0H9nqZdLNpJN622RIAiEA6klOLsMPXSF1EWi4EOcwXudTwgerXG8LbFtT3pccB%2B0q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDHuWghqfanBRe3nAPircA0G3TqkAyJVaN0m3Y14FAWH670yExYdur8waRz0KOGZGwnZDaL11wfROOPatfTl5ikrS%2F9Y%2FYZoOCAxRbZ%2BcJUJ9C%2FDQjoc5rnXa4JaFnirXmoNw000GIN%2BgxcrQ6VbZBjA3N%2BXkb3og9%2Fk98izbuFnz7putM8ZJWjQLmxoAYLuszry2pZLRc9219LlReiznPeypRCIu5Pm7MqiljDy61KAEB%2F0MKHcf92ZWsqVumNdFCKo20ursuEO2W7%2BT5UX5n32c2RjUjCLdHlfEFqLsfgXHnCFaZSm4M5m7R4GvMRJKWwnVQRs2tEWn0sGbk%2BE30zsoJRbLPPSwilmGaXek%2FM6r8K%2B7dnOOnghaP8hLulx8k%2BYle3ajWyoH7zqqvk5cNXd15bZemqbOhQ5wZ2AMhx%2FKjOiyZizROFOWsXnBebGxu4AQe1FwCu1DQFv2iUVyK46OFk9n2PXrxE2yvMVwPMtO6SV08UF5lGzaKWS6%2BmcgTZd9PxXIFnQC1vbMpbzXawGiYe06MxpDDwgsKJMH95%2Fvum3Wzkm%2FD3j1%2BlqJDCnvYIVZowzCWam%2BD8WPy4kw4DR7Le%2B3Op031PI8t%2FCWo2SKEIeqmvWv%2FKua4gw%2B0ONFmwV%2BlextBUP7b0DCMMSm0MkGOqUBdQL%2Bmtg25YY%2BSY18LCtYdvR6zIB%2F9AKvqetLyjUCGIXSunbHT7EYcQ38epF2sPKzcH4uhrLcjEC0HvXdfrB4Qlzv1NUavi%2F4cgv8odclM6N%2FJnmNh9pbpNsBi8oK62RF2B140ICbm9GSuPU7LzNvFm0mDbvmohsvtc2io1r4KOLfM9HhR8QQOibyoAh3qtEjXsYg57b1giumCjfOY8eT0%2Fg4y%2FID&X-Amz-Signature=ff840da21b7b37acf5b9b7b100f12793a8a452431ee24ef1dc8256616cf41354&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

