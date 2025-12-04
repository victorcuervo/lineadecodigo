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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TD4QUJBN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T233651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG1GLRUUU%2BcNU%2FHl4jFpWn3Mt22S5iy13HE9psxhFZU%2FAiBW02rnIx2EYkV00f3pDmCEdEzXNV8SpZ8MFwJwPSmvoyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMJLbA0YWNWX6G4AQEKtwD9IVOrVe9%2Fl9IcDu%2B31ui23H8B4H6XitbaWXeyC5u6j%2FY9PGcASJP6gTEJkmWXmMyUQFy%2FR%2BF8vp7Z4Ov5ItFuNek1cLMyse5TkiLBoLTEOVjCahfN3paRP7IAX%2FtvGZ6Ox28mBAJbRbwXbpKP9tzARw%2Boy6w8SEnPNGsGxr0c67zoYS2lzwImllEVUHnfliynTchZxDKYzGDL0ic6NyKZI16r6p4MnavBhyLDmoqvtXRY3L0pQt0eOHsuX6AQ3m78i6XudzTxTpkDwaub59e1obF8k5jXBcfMTU%2Bp8f9mmOpmNo9T%2FrTXTvYXeADYD2C0Wbt4Pdzw2yOntKau89UAbu6VkdeR7efrSUSFeVkpCWXaxbMwpfICQuzo8WoRJhT0SKxLoye3EnLlk830O2A4KCCQtPbBddqYw3sCo5vPbXqZHFcV9V%2B7n6A73tquo8gYaHogfuC04kYi%2BJtAn%2BN7Kd60MWC6gpb3tUWUJlIFewG1RRKSooO%2FzyxfmRRh2KE3aTfPa%2B2fCyN%2Fz9IotGBfSaU%2BPqRSz%2BAeuqVQ2Sdv%2Fa%2BxE2Crxg0WDgOe%2BM6qWz7CWHkUQqr0buc5HZTW%2FHMmI4okMy8KwpPZ3ujK2PufZ%2BOL%2B%2BlGU%2B4uPVL2Kkw84zIyQY6pgHJNzBBWAeLIP8cbhiF8YFbeQfgBRO7C2R5Ogbg%2BsVWW4SKSyyyqAGP7S0bC7apw3V%2FsYrOrEfhswYafxc9YVKRNdSdAYCoT7LiicZhT62wUpCIonFueqtKdTkAuc3aHi%2FrmQFsf8jb%2BStB84xZSD9pzfKDcEu1%2Fli1tY8VuBXTPCEh8MBk9rY3K7%2FjHwk7l%2FRq2uybwV1EX5uYPcCRt4MU9ugaQh1e&X-Amz-Signature=bda47e7d5ff2660d3d30510ab39d7722a64459c904be09792f5dbb84f1352865&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

