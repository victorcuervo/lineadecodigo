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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656TEC2K4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T170638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE7FhumsKSoUoVJSUjXuB9rCmuPsxhAH5Ti3vUpiyVgIAiBCOcra94a%2FC0G7Sk2BbSCnoIuCETPkoi3wI2U7E6UPqCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMsyrKRcaMU9Gmv84QKtwDiMxhhadmmzfpmhvqkOGMrhpGvbmcos1mYb5PlxdHak5I9wMRBZ3D3TsYMu%2FuVQiNlBvvAa9TsQE4M38Ixz%2Feqyf6xRODj5eWIDRTvgValUsoCRN1kdChhX0oJ4e5xbq5eJS1JwPWfAXAhsyI2KT3kfLVDr4CW0%2BWdc6o9ULmyLCNWjQjBaIsTk5S4I3TlTnqiCAES%2FXPci81z4LVy2RRH7EQ3ro58mlFCUTwHRYi6uFWwU5ZpNqsWFvBexO0maE2zPnZdGVs4rWAo6NPiVThUR6PWkPg4MawrH3pe%2BRhARav%2BGqVhWJQ7mkMu%2Bwc43yytgtXKQTyi7R0x4ITwz6CYuQTQHuBlbK8DuaJHRV3nmaGLZFsyBeLfVBJV2vbVYdHUG0Mvdg5pa2ZWMEaOp76q44sfqz8qKbt25TBz%2Bt1cOP9ug9241%2BMuOSUJxo3jLPVydKkaN0pcMO7PWcYXhwktmHlHPHsQxCMZlKi1gWpribdoWNvVzAplCj%2FOHlk39UTRW6gDq2wwipOjICsNXIOIvN%2FdWVz5G3QpLY7SGyvg2JalOlebtU6pvbkwlqk4C5vKQGRnWq0%2FekyjHHs%2FiWwr8GrQN7ukHHtvcMw09c4baThPK1NevK%2FeKAAjYAwkafQyQY6pgECP6oudnKBOJC7clUVz3wQsBhiPvekcBsHEScHnrsg1UpYHBZiAlQjGiJr2eJDLXWNAR9CH6e%2B8mArUJ2ZTO7XU%2B0VMI5UQtMSNqpRIoihbPKmp%2F0Ik6fk3RF9tFkvE%2FT4c4LpZRWHNzvrfa5jnTD11Y0ZAkW68VyiJGmvQ57DmJO7WFp%2FqEBpBBc5gUxjLPBqzYMu77FMDi20KKrMUsaq5QmOsgBh&X-Amz-Signature=66e1a9898fba2b9041c665238e4bdae6be1dc2fa79db0cbd156c8ad5d6a9e20d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

