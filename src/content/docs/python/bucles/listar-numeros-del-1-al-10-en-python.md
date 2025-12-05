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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BMV6W5X%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T193823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEqBlZoyf1N1AJh8Vtkr675DRQ6pTrqDYFg0icieC4WgIgKzvqacdW2j1UQLeKPJAwfvxfzr%2Fv%2FEHq24sQNFllGxcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDE2%2FKD1363zs4E3WySrcAwkhoPY7NX5ZWZssFkoxHqFndiBkt2SVri%2Fl%2Bai6sva%2FbOir0FRfFsl43MpylTHv9HUU7Lc01ywtWkQu6qiwWnFU30Uua3DDGxiy%2B62nwesqLN82D%2BZGep7K28VV4QFxperxCRlvCAVdU3uncujeStTbCGzbE9EjnkjJ6lXCTwb0IC3V%2FET%2BIFRR7ykQJjzUJP%2BgMYgZMpRAKEN4OoWdAw9kTMRcxy14ipTHAf9fzcLpuqufGeZchCmudAv2eG9l0niLrDiGICeg50w%2BOrF39G%2Fj9kHD%2BwewQ2Nx58QNkUl0XFv0bm%2BEI0x6n729Au8DrR12Om%2Fko5I0Xu05up8m44NpeZSKyBGB2b2D1QB0W6ZZT%2FWJiWSLYYxtLAMNH5855ZonJz5O2vOI6WGEnMYGenk3s0Eosqpwk9PixFmb1Hw%2BdKJO8RRTrXe0FQlvXhh7Zd0KKNDdUcfaY21tmtFWvf4y4r%2F1B0HOS7Up71KvBT9aWYSz28sXdYeOsW2udI2nalBavtK2vglXx0cKPNABoRZ5AgOicy9ywaQkF0%2BcqmkurW1GkYT%2FHroE04VCAyd8HWGE7E2Bt7Q4NKZG98HL1yeD7nyq0wXhfUjsBw3gl7AYsFH4f9xfq3hji9sNMPn0y8kGOqUBOersP4bIKpVv56rlgm3oWqhJOkigObw6fs2LP%2FZIXXEnTUqr0AwMwclKDFBOuu9YfZewm9k4Ci44ATypikARRt%2BFHZNQ%2FbPwNb3GRqnR3Y%2FKNu3jKCV5ACSk4AzJSekHxlMkKTCiJLOpQOHaEz8GFkooIf2SdqvhSXbQ3g9G4x2iYw%2Be180CP5Fb7Cu1UIRb9MJBXMS5OZxshIAoGV2qiSo1o6%2Bt&X-Amz-Signature=af0dcf1bb0c32e3d8bc5a5099a676ac49b0b83dc2384ac57ad60ecb2ebc86aae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

