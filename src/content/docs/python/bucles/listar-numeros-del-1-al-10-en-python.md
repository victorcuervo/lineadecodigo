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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZVWC3WGF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T231019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBxlfRFCMJJAjlhh%2BNxH28udbr0cg1MTvT0mPipejYSKAiEA8l9RiuO6W0RrUr1MNAjzFJLsWZwxwLt3jOobvmX%2B7%2BgqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJOhdqHGVIRJelkuyrcA3%2B3I9xqOCpgBEMVN8bKUf9MQAMS7GkFYPtqLV%2BJdNA1kzSAbL1YXmnk3LsN1CkAI%2F8HoObRfYQK04Hw7AQUi%2FKsxwoakPKvY3zqaYU1m5aJZY3qn4sK1CorPgkZlfQgsr%2B34sUdYUdAiWu8WpCltauXnjL70DORjYXcm5uwCnK%2Biku3B%2B6u05ip0D8kvDwwf7bOAc9CSVJZWOr3Lubi3mPGtc0cxEqBVrivy4pUEPnm8oUYydHElPLpKY7IIHZCNjmHY42TGZSfPC3QV3dxSWFNvDvL2%2BT7ZGosuDT6Oq41aiJ%2FL6Ht2rvlzUd6TpDNju%2FAASFwBBYMY%2Fz38uIUuXcqdU4tI%2BxDlsB0j6EbbVkmrO0kBYCo%2BEjaoc3TQ9%2FgDKcuQxQDbJI3luWLDDu4vgo3p4CRzTizUv9tjQksBcBiIcnLWrto5jhje7%2B6Ucv2%2Ffzr1%2BJeor13GpqvpHGBZFEnmTKS1PQRrYA%2BfPFPCH3wUt7A0YauIuqa9E0BQ7E40ukW3LtNdUZpG%2BipQSqqrvtBkRO5a4ORz3tsRT45drqrOR3%2B40RbeP93IFWHlQ6Ql4vokDKApYGRdGrOMCD8C%2B%2BqW9w8EvuOh4q00J6X6oaTChKps%2F0wKHJHGBXHMOah3ckGOqUB4Xr4irofxMLwYCFrsbWiSY7V3zYm2lQg64L0Q7AxM0zfkWDQ4pxhM%2ByoytAsW1gsfnSfyUSE9qlU9jyIJlaM2%2BLOaTSeS%2F%2FlOjS9o3zdXJBMdXZ215f2UoQ%2Bjc34Ujj6m3R8Q82qYcwmV1GvpmGLII%2FsyuHanWtFy1xMnXNp3agLjJkpsL33aPhiWgAVFszPn1oNyAfR02BZx5ittQwYRU3kdoC8&X-Amz-Signature=a3f3323f5d39f9a3aeee6d68eafeec1fa87ff6206bfcc795592254c50ad81abb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

