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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SERQ3C2T%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T055744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5lO%2Fh39275G8ynK%2FKwn3%2BXHxzyV90HBpQtPCH2gyEWAIgal208sN%2BFby%2BG8TDHt3OcwO9jqkKmE6HXxS7vzIht1QqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDckvvBfR0HYErUNgyrcAyAcBXRRm6zSqZ4SPFCB8gwpqhJLUC4Zl%2FmN6T1s8KS7fPdJtb%2Fz4pVFGQJTCoWDWh5qmcHjtOJrr4k2uWr8X%2Bo2UMolXII17%2Fk%2BM0QWZMvWOWcLPcKmYT9bqF8PDTx98dSm1%2BAOwep8H3cfJHFz2Cm0C7zOTo3%2Bx36smOW%2FSvtCqVPsqB23JFTsx0P%2B7G%2By51OpHGLZH0Ts5wPWdKIyV5ZdQ5T2QBJkvKY7Fpfyus9MMmIuo23R8faAA%2BZkdQ2ErM3cxUmh83R8zR57WqCjIIygM0%2BVfxvG3AmoxFE4zSb6AM%2Bqm978kUK2GEUggat%2B46XFjclvb4dvYeqx0WQ%2FDNH8w0WjFI1Do6mxLB8HBIwLEyfBCa%2BZwqCL0YI1OrDbhLdvjhWcCUp5brP2UDgYLX6MCEYZuKAfFvKQIxwd2lXugtLau3A67vxoubSC3IBBFhdDsfNrF3PzLeBf%2Bqiav0XBMAYomTM2USClU9ysWXlAp76COaJJA%2FNnNvry%2B6a0F0SYmO1OoGUwYGvppw3DE0OWqHNndsjN0XQcgE6gC7YiD5UVcr7EoKK0mISTwGP%2FT7zfu1j26rNk9769jOuT%2FeCId6Fi24CTgKEGBN4sNYp7VZ7UC4mg91VFvF26MJnl3skGOqUBp1Pmh4oZS72SgaYRiDQs0R9GvVQ0iVTrmnEXBYLwn4zu%2BGtm7AwqrtcCPuitwZ7NNL3hmF7YZjaiSXx9ONc4tcpdiBCz%2F3zAD2F74pCWUcl2APNBE92AStz5q3HC%2BEVjSNISQi3X5vSoc8B3%2Fh30cDjIOO9VKOEDIvfG2iCLAh7NGXYZNLvXIJsm2ZZlVD5gv7kYpTPY5k3S5xqklLr9c2KNdwiI&X-Amz-Signature=10dd06860ca51ac6bf1eb94fb41e2cfae35dd529289948a31252eb62a8e304f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

