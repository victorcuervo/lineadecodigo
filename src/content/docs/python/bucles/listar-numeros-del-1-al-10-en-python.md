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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RF2H6VQK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T085417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEimjSLfRRwaMKCJVpQLkzZJmOKafivbA14ZWjIuorpKAiEApxWWomO05VJowCxGfyFgT1RG25A%2FLzE91A8sY8Z%2F1Kcq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDBcVexbPWM%2Fxd%2BF3YSrcA7MWy6NGHKQcl1RYKSmMlIhAONdcfUYvvBf1BR9R778dzgu%2BauapgfzWAqR1sDJ%2Bm8jOeOzpI81jGDARqK6nSeroRegfGTPlR3tloa6yrm7H1ru0I8BqjYyoOvgzaFOAME3rDP5wNUkhcua4MhfL78XP%2FPv5L8r1QeQoZm7Ov%2F%2BOjdQVG45J%2F%2Bb3JrhcK6LYMxQiLM5dcnr1sJeoEYTCBk8XTV1NHh5YnCiRqStHAk4%2FOBhLhQFNRHcvcmoRVKo%2ByK0wPB9ydR7CDYEL8UgJoFc6%2FzYmXDRIBuDnjAioo%2B2aINMF1vPQfMbf7hJ6hV83bY%2B5m9TfIuHDz5gq8h305%2FhU3BUnHOw%2BFjJFqQGq%2BZyOZN0NbDCEKgFPWHHj7GJP2t97%2BBmxke9akjQ2HrnkDQgTSvBWK4gEeaEH0e8A4A1ITnMpDYJuKQ9V%2BDYyecFXy2Dyzy41oUEk3lh3BVILpTQuQyI%2FKpgepxUX81VJ3TFbYLn%2FsLwdM2W14BXBJklBIOLi7k%2BMgbx8MV%2F6RTeCLSXj8wx%2FTm2Z8snuFFbps1fta%2F6BiZwYgANJ6tyxgGiEoInPQOThPp4Cg34Kc5bbnj3YTNg7G496YGTgSg3PQARJWh6Xf%2BJs5DxnDWAXMKC8z8kGOqUBuvWGB0NFsRQBoJch1lSG2E%2FBunwd9u7Ax9j1ga46WhUqt7KSFVZMO7lSiShO32ShfTPWXsvFbAysfb%2B61JAaPJXcaHNILCwR0sp7L%2BWjNaRhZBNgSxL4D1xa0kHlJjcc2T34Pd3liVyYvXCbQeOEzawiwp70yWXBFIIEeI7UzISGlMfkJleeLtlbRVHz8ITl9DEDN8FjGT8jm3NdIzPasaaBkpLr&X-Amz-Signature=8a006ecf09390bee1cb8cb94e9c8e1828b84934356fb558cc3f854e189d0eb0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

