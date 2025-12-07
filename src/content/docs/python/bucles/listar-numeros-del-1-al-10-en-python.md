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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TNSTKLK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T141934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCiME7HnQCl51n7vOHp5z7v47LGgdnskvN7N11cGHTYhAIgZO46LWpvQOHUDjqWqf3DrK4j%2BbG0bWbV6Tou%2FJTuhSoqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDArvgZnFlrxObHpZECrcA2sAvEFUkWtZ%2FINUxLRAR08AjGHatAHmQOodq%2F%2BeyITSwKWSMP8Voemt4xATTof3IzRUdHFJpMs1s0WpwY22fLm5S6PHTsBBsXl%2B%2BrC7arblcxtsdnDus0%2Fn7MbYGls3qI3OXX6lwtTYoA5a1n4iyHTjd7FS3ZIuQ6bLD%2FwzmRp%2B%2FkxioucQlU7Uv0RLuO84MsiU8EBq4t55AF3peUD9ij9jl2RQvUK6qmSL%2FMtiVP9%2FfAZ%2BoCPEiOqxBe7W%2Bn6Yyn76bUBUpuax9HOFPN2qUialQ75UT%2BWnej91u%2FZmsUXxkbCTEUtV7jJwOwgxBRZ9tHVjf%2BdIbQfkW%2FjYZTqpLRcWrZKWI7t6qjsCE11eUmc9iLDS7%2B%2BLrgvSXxBRZvXqkKCl1DC7xzxCUV55Xfs00i2REvk1oK91umxB2rNQUJAhUFIGhsrR9WSt%2B8VJUyyWwdgx%2F%2FyHkYgyJ2FOJCMOS3ubeEwoTq%2FKjSupJXdoSGu8VZWg8Tzlr7i88wcRtP8cyimP47%2BvCoqVIcN41Ihk8uIkh3bqgY2FGNDBpuLTvyp5HeNnVkMqPlJZQl3FSlFINJXv%2FRlyDEbO4cLZNC4u3ZKJeeEi5W%2F%2F3Ry0nzwg6SEWjcyLLFueGMjntDWIMMGa1ckGOqUBkK6qPXabuobcP8hjisT3pEeAxnKhaHnZT3vlaCdgzIB6tT90d1vPq%2FopO6HUZ07gMhqqR5Ey20NZpga2kJg7BGy0HxHox5Yr8K60kemIEaxxXDB%2BXmXbMMNbAwWK9vzT5lSCcwS7%2Fi4r4yGRgCRU23CxvkRudlL0eLqL5ndfc8r6QAgt4QGZ3Q6xYIZhsVK2Pnj23EZd1E2f4kbTkDadYzyAQfEL&X-Amz-Signature=384d0fe58b40c2781e64e0f5cb4cec70fd53296ac4f487dbb1b7995d7ba614dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

