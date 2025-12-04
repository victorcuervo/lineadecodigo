---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastUpdated: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXKKH5P5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T001540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIBx6Bu9esG%2F%2BBdj92MBX7Du2RVGslsYyiZEa6o3oHwB%2BAiBOyGHNmDRbzVA3bWoyzYmjBQAsqAQZ%2Bmf54r4MODdKHyr%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMPtUqR07HlO1HJbB6KtwDnHO6J3P%2BsE%2FJo97R5Cj5i%2FeWM%2FAxr8ePpE1DWgxKPq2dGY91okDIJzo1FUTHWGKW175m6J1qzCiD8J88i%2FVBLl%2FqNtkIERVBSc7EKpMjmy91ijaKPhacTLbQDYakVcI%2B1%2FQDr3q8AYApcR7oaKn2g5cnzn7W2vVu0buRYfjjWctnbIRRdlLmAO8GGleonl%2BAZRwDkIJG90VYcCNvSNTX%2Bu5xPLZaLF9rQUxNmgGPLJH5sqjyUYFpqTveDVmHT2PDHtTXB7%2BC2286qRIvlH7RHMEAlAbpbn%2BHKP0X81NGDZxFFOQ%2B8txbwQFWdAxGp5RYotRMR3qpYwoR2R8sGN2MQHzUsgCJ%2BAyJ4tSegN0VQU8pUurqbke2Po4KncnnAoPMMmod3dFBeVmOEG84a2YVK3%2BfLAS8G6tl3JHjGG6EJZ8taBu8bOzdLIMbgwhD2RhbrHqsUZXrUX9P%2BQdIeWCoQg7IAfVCLWTWDHqttJYlsrn5fyTmvANUPBLpRxbAgeg3j7dgFnT1YZUnR%2BSPGo2glqHZ3gcj592bIR0Vmv1e5XvtMZhnqLLF0xz58q0yJUFugkDTvSwvog8Z8T3V2j8DBw5c41Eel7%2B29tt%2F0yWWJnWoKC1s%2FuVC4pUTf68w1ZTDyQY6pgEbkmgRzzaEWW2gsdU8a7XxhQ9Z74clMFOEMnR4sMaeF%2BNObYE8wW9suyFPgIH45nqMhWlGBBHCc8HfALGMayOOtRJQ7dQbKDLxgDEN4NusYbPOknnACqmHu85DWRZTNbugFFf82vA9n7chNDG298D%2BkZqimKAoXQh0iYYEdgoy08nk4xpftDHyeEdJRtyzKXxcH9QPdIc6H3pMhqW3WLcTYojpx%2B0%2B&X-Amz-Signature=66798fa5613fe23047968a272aad93fb7c9d0a4f265127ba146dbf19a8ce8c63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

