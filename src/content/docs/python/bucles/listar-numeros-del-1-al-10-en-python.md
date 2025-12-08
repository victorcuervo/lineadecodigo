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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662W7JEWTJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T151303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAvaeCiPC%2BHLKhSuwbB3LVlJLJOvYfK24KYd2RV0WWczAiAY8yJIly7DZstVEhjWFpNncs82jYnMQ5mm4mBmmyqiOyqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbNH%2FJzSLkVqzLhvNKtwD%2BCntnykebx3n4u14goET0gAUiHeuyRqvcxLhV92plTJeKllUc7Cw2Q8EzdYv%2FwVKjvGtWtBuKpZ63O29Kq6ne6NbngPnI6tdecKPj1Tg0dJhlHCRhpw4HiHU%2BLw7wOvEd%2BobWT%2BvAcBgIOD0JNmbdo79IGKVtzdhwTGcXDBYOe18gbkWCoSdqqodY0yGi2n0oVJOGyb9jyD%2FQL%2BOXer%2Fsh33DP78BAhJCXwOTT6t419Rio7teGdLgKRLLwN%2Fbp09tEdK6lj13hLArvglCKvK7QN%2FnOaKV6HKxD8bjwj6Ah1z05nX%2FmUDUCuK6OvMn3nfcK7S4CSb4OYn85p8YJAz8BHTVcet33AyG3GMECVnbT%2BATYUOSzgMHrD6%2FvjZq0LjH8%2BinWU0tUh0Wi%2FFm%2B8Zwd7a0B9XLKsTLx0F%2B44ZbuvXLE1JebtvSq7hiiPFUxGCYBPGgONW7Buh5A59UkwgNDE9%2F9HJ9wtsbi0%2BRQkwT9l1c48Vfkf8H%2B5Bi%2BjmXOOQLg1OJJaTefFIrBaLmbN1PEN5XeZV%2BNx7gm53aJvcsIPU6wFfBMZCl2V4tcM%2FUgiNntWqnfbp58ZsDcJF28t1Nh2WKZNb%2FzAqN%2FCd8zMN%2BJ6jdN2q%2FClk4MoNQlQwuMLbyQY6pgHNv0lrifTIwjBnM6TizrcYJU0P8BgBq0R75avuy5ofl3XWn2d8JgDicIwhP6WAm0tciGc8QH152TIa6PacNsLDLb6l%2FfJgQU1OGqlDwnTDYL3SmFMPecML8%2F3c2gOsF2osp652zD%2BdUGKrDwksLpx19D%2BvD2DJPObzdrwdMRWwgBCenG20yqfij2jMPDipUTWEliNvN99fPDiFLTvhN6luiMtAOTcs&X-Amz-Signature=fae5ef22d7c3e75f260a7aaef86b983016aae25f80090074a6086a566942c05d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

