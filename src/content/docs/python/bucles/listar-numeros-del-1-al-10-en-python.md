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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4HY6BZZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T010327Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGZ4OMh3zZAFSs3hxtnaRME7wBqT7yNi%2BZfYE4P3EMjbAiEAspxxgtIwNfaxKdsjkuoGM28S9Sut5UzoJxEoQNmIEqkqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIWlWHXVRRlbgCxRVyrcAy%2F5VIBxp2cRkTTJRZa8KeYS%2FemKTqj%2B6hjfMvo9k6PoPZhwZaJ2O2CJT60pliJhjzp2aJyqcdc9WvOK54b0%2FmMkAkm2pPKPlfkmHLU15Yahyk3t4QnaIciPpwdggud%2BEdTjjX7sSJc4jqJxVCrB4g4xpUY2rxUy2YYE5aUlWUkwgnJMxgcN2s4ck53gJV5kNGmrm2BGwQmy64qEgPqzF3wBDTcW9Z9%2BfftCwFlnp4l1jQfh84txrKOoq1PFqUsIvsxalRi%2BakqxD5CBolOOJs91rn6yzr5zNC1ebDW4XGlokLiS9gnf%2FL7Cpky5WRod5JkxKBM8H27RA8aBWcYxkQNCn5Cj6HeAek86Ap%2FuXEPg1Qkey5Hae4Rd%2BpppBCn8erDYI75bpM9pvd31Se%2F119xtNsMmmQWBhIIFE0U4S%2F6Q78KDGJtpyq879cChXHDzygxrN6fvrH%2F1ON4ffuKHMS7wuIeLnCyyjJseKHJRPvMjWGxLxgP7Ab5%2FjM4sa0aD6uwmuyez3FuMZ%2Fng9WSMVkTD%2FLKH2%2Foqb%2Fkk5%2Fk1OeqYoRlp7IKTwStBf7eod59tuhFnsIALv7gf0RGh%2F%2BZ%2BIR81BGqspqY3gAlEueV5HNeQzvSOOQlLaoZ3sqz%2FMPqh2MkGOqUBq4Cv7weGeAu%2BBaShOXQ5sRThbKaIgfz7sNhfOXaapLJyaHaKloQFS3FgI75caY6YBPLf3%2FChWOKpiBJW3S4wmlY8sCpv1MpTdrUOjLxSv%2FI%2Bolr5EohcZt3QN0dp941DrcVhGSa%2FYpJn5rCn5EwV%2FK7VrGgiuRqjsXPBGc26N73dsFvraXsEUf%2FY0U5mCuGWzE6G1JhVKIIv5ACOK6VA2x0ukjP2&X-Amz-Signature=dee7af40c26d3ef266fea1c3568b0884a2892bef1dbd3b979b26fb0199d86c9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

