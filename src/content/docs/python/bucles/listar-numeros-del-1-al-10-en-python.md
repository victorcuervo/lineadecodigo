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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I3WGN2J%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T191439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFMqvGfJW5bRoydQvV1uEl2Q2CzvUz3JbTnyHTVGeSCCAiAtwvhRNbPKbnoiODn1Ppsy%2BB%2FiRDRKz%2FCVXK%2Fchk7StSqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxlZg7xBppkEalBXhKtwDhoVP2wP4Oe5StjFyIZEq95Ipszi10lPoRwf9BM9gOpUkRdppOvEjqrioSnbxHe%2B3zIiTwXA5SLp2Q8kBsdirLUfgiGGHdGRimDPC6ZEuF%2BBPh9VcR6DjhSbIGkb%2FJ2heEbk8R9EwqOp0xY%2F2h0xeCMmfHCotJTiy6jzZgG%2BCdJVE7h3DLI1py94UB7AcHZzRsUA7j3xXYRKWLWoO7knaDpjnNOaov4sWPXYp0v1l1ZzuOmSvPceiKEUmVcqYf%2FZ1rthFql1ZwkTfxPEMp6yAuBNg0yLnD4D4LNme9Y54vu8UBF%2BtaUN0R7zZeFVianCuHzZFwR5lX194cDgUZ%2BlubO2ni%2FigN0C%2FBg09Z2fUfAGG48Cqmz1b4g12f%2FB62Fi1e7h910a5%2BdeSUQAYn%2FNJO%2BEB%2F2%2B9dKkVZ%2FEQq9VfpVTRc7X%2Bv3i0BqPQtM5O7YNN5cK5RlbXctzL9f4GgiSJK8wg3n5SUn%2F%2F8J9A6WODGgGVlao0hKvXFnpdFHMTtICN5mxvfoWRQ5JoDdSXx%2BZZWF6%2FxGyuktblG7xRJuHbW%2B5Kph%2BKBjdXnk%2B7%2B0hNeNywsHDhQG5oijFXacSy%2B0kRVH%2Fe8X%2FyLW%2Fn6rdMMRWtZ%2FI3Jy3drw8DrNSapZUw%2Fb%2FWyQY6pgEPdt5aPTShfxYR5IXkPLUOWjDIUCt77gfomFQ1jxYPQBet1MsQ50YbFLA%2Ffja6tzkDkBxQz%2FqJrpG47bUrosZ8tcb77IFUVcU6bXslT2tmu1r8RjCCAAMqdxVjKU2qlEE5grTommXsBkXolY%2FnFMcfpBe8rd35h7uFXrU2cS8wE%2BePQX7HicJgCdTW5CXyFYC9haju2aWe4y6%2B79FOcGs6TitMRt7b&X-Amz-Signature=03b519ca59a24bdd3e7d0b2633ccecc511ca0188b2e79f97dac1ad95d97c0794&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

