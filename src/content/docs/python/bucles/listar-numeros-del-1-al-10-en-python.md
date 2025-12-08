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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SLP5OVN2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T210323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFzaJEXEVzOzdC5WE4wFES%2BmqjS8DOtVatYBU%2FVOh4gxAiByZjM4xUA8pa6ypUmg3lHCpBOUSIePwdTxWqYBosX6WCqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0ZC%2FjvTDVIcyp720KtwD0ESj%2FeFBRQi2IVUvrRIF84nvAkT2ZjiWHizsk9K8fLb1PISTahLyZlV9OrMVIviN5EmH9qkIz0kayZc0rIkC9l4bp3y1g8hB%2F0REFGWXyhZX%2FiRcwAJz5nRI7pxbTQ7ce9lMtBONOpLpPaGjzoWueySHqbzQseMC%2BAtnTZO8g5cp7IBwYpYm0%2BOS00W6fry6fMZcKI%2BO6xSuPQ5HrTQcPXnEWwDR%2Ft5hHL8i%2FPVwz1iM3ethiCY84x3%2BoFs7yNttEKzRm3vOAOjKlq%2BiX%2FxnCilZUFiXt7e%2B2x8s76v%2FT37d3LTHw2xf2EIcifzdsJ9Juqz5O8bh%2BM3QPVkfX8JpbFo5OSVkuX3zaUydfGaJG1bO7VjJ7BKAVg13Xb5Jl8BrMvUVaoGTBoWAoKLjXgEn2JlYkO4AHASOXGNKQ2d9CSmJ%2BnWFIBL%2F3ryBJjAgFrKMDpZyrVJ0OZJuk3Y5HcMjfU8wbsTrT2YovQEHnSuMJFzm5Q81EemNvFcdz1VtLr7PJ%2BGIjUMCqAnDfTWT3c0BqM0i5TOXkY4fem%2BaJROOg6HdPPLdHdGhV%2FjPAhS7vMVvJXgtG3GP%2BXyce2XX%2FZN8Fne8qQafzGLci1bw%2BAxV%2Fdx4FFbGzvRZckN9RQwwrt3cyQY6pgF9P2aa%2BDk%2B%2BN6%2FSguM%2BRZvqAiHN4cHBth3%2B5F97gEPstIIk7fUQT8ImHvidsnVvP73ErAQeVss%2Bow3AoMkG6CHsfSA9OSQsNprSGS1yTyp53y6jzyz7QJ0v0VLXPw%2BVGW6ettNmhQ2H2BN7cyaB0eo%2BZlGyXYdAhEcIHY6CzynBSn5IdbM455koZGKAxSBC%2BjUxvpIEA7eBNJCzjDWe82uDm%2Ffr8g4&X-Amz-Signature=903e653b133a1d7bc8fcf4ec3a777c677eeb30bd13da2152a171e9046cee4e6e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

