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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YA6FPDO7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T044047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB388ZWn2xjBl39OAJnDY0KMIQeunJbN49x2%2Bi5w9fBmAiEArmQe9piM7pzb%2BtUUck5RNZJ92Z4IazSIS4kxB0PaqLIqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2B5kpnf5RK9rxGyLCrcA0mwP3ko8ZPcPr15Ug3xeGgs4GokUyigG0C63j1Lg6yu21fnMFKBxYw8AIw0zAW6cCbNzC2QfsOLkjqKGYBsdo7ubb3O32sGj2l1Pg79ls0k0%2FrW5bbWiVqKV7H8il1UISBEi5OqbJVoln6EcLFcl79eTnx%2Bx5ZFkI9uRqw%2BGg8pTEUQ3ZeCqsz2ElKGUbfx%2BFJDrcYrnplLF3KzwpVDvBPFwtBBTBzNoRf9adCG%2FpqpkDVFvdzncFHUiaQHgMQHXQc9h7KkIjw9mxbK7F4YHUc%2FUXh2TOa5GqkI2F55ca4tRbf0uTxDE14Pz5ZDr5jwe3tveiNs%2BWXA8ZWedbb7xDjsP%2BzzW0K184wL%2BxXM6ze6rvPXSeqN5%2F62ctwJ2zzx3yc8TZTC%2BAd2pxX8Qb8WzM54Wm2AQ%2BOfwaQYT76KR3zvo29zLEu0NtmQEJNIBqMjMZQTE0IFg%2FRnb%2FUqO2tdABd2YA%2FIuEO%2FGMIQAi6V2mzLL4mOXOIbT8%2FuYzU2p8fhp2BoTDmKgfSBoMf0R90HPAp%2Bg2tZb5bg8Q78hSyTp1Dfs1xTrrF8a3mE7VO1sIF%2BJbozDrVR7JCuEJCm9dBtlEYLC9YreogkvfpZ56TzVRMjNphJGVNoUk0%2Br2jsMJSU2ckGOqUBA0A6uPnvv%2BTRE993yXMhmfZsQTFtVxkARL4jCH%2B%2Bbm5wDrQ3h0h6Nke0tnkKtSXglQDRxxpGfj%2FQWChvs5%2B%2BCQ63V%2Bnb6qZBhGe3lbiF4ipnKisfRZ21Uc5R95HDrB0I77l69ICBJI2DzQQUPdjIY8ov6DzrS7TYQ0HDAFzRRG7Raj1x4%2B44aIj1zk884%2B3%2FzzVZrKT7BocbWV8M5la85W9p11jX&X-Amz-Signature=4c02bd12cef1e06276f1f13ffde5151e574a2b9178660e7411b0816218152ee7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

