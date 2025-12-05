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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PSO4G7S%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T073116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID1h9chp4c%2B2fD8YYHFxNt48i0B1n47%2BOzsX%2FPnoQRJKAiAoImv0VIrjIkh7bDhzOF8r9vBqn7fbFjXQhu6z04gpnyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMX3SsCejATVtxSrCWKtwDPBj%2BjMKGZY2h2BrIAL%2B%2FJWSufziuO7M%2BRY0vFIuI7851B%2BbnHPMamEkL6OnvhzpMKbpuH8y6c3t1qiuG4N830t8C6BizAhFGRLbucqX46Bhh9XJRzW%2FOW50tAwf2NqeogC36RkD3enqun6%2FUw15jAAWifPB2kx3qDLRIJhbMM2o9LPFt%2ByvZA%2BWhNM08JYgPPgxZ5d54R%2FRaJJDv1qUWXq0ytaSPUvihjKNydngpqH7Um5SlTyY1vfJh43RHzXXDasleIPT1ZJ3TkdgX0Dgb979Kl48GACkn1MU8xSK2HUi7mKRFVVLIsoDJ6cFwUmWP1fhtQ%2BkkphSIvnh%2FTkEnjA29He6khvvTyZZ1nFW%2BIJ8z5alxiU67ivFfTU%2FJZlYKXdAlNYy0BO4xSMfTK%2Bn5sVPwfONS8iOowVTk8cT21w9b%2FTlfsFjdkvkhTpEUX6ThHx7AOw78BQNksyvXWESCPCeG6D0lVEywnrUyLRkvC%2BNn83TPGwCQkZ3FXO6Oa4SKgDLZ5sXPumJpyc4UOYwrc7xyg0iCaV%2B3BImzNR1qpmhCoUCqxmMzaUc%2F4YCDXBVHMU%2BPxwO8jTv467KmGcP2tyZhL7ei6el4zSiwwlRBRzIh8EeX%2FVqovC2UMkAw2arJyQY6pgESqRmgiKUIqn9PO9YyIlDM53E451Vx5rFE%2F%2Bk9i8zXZS56RYMtFdoJgpDCj9NXs4p9Q9ghJm2G7syXdY6fijJGq9ZtOjAThNUAD9lr0xpRlMz2Jsjim2ArCG0DWNayF32p85EY8V8Z4YNOpaWQuPp%2BNE010scOeNqpclxTI29TMuFIrn0DctQdXmjG%2FahU0wAo%2BSTcZvVb6DMqLua%2BB%2BmTu0fIhfu%2B&X-Amz-Signature=0143530abaec45064b40d26675335d1d61fdf1b71389450a839464a2a0051eb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

