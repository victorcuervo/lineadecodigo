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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676TBTCXV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T040354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSn%2Fc4b98llB3gEaZdwzyXauTfaVUoq33EQMRpWDLc7AIhAIe4%2Bd1v4BLY5NS7o4Kss7ekD2bwJZWu3QuDNVBsB03mKv8DCG0QABoMNjM3NDIzMTgzODA1IgwlIbJiKW60fdvHS2cq3APKVpe%2B1XoKFj%2BfiCPQDk0UNi3ThELF69d1LVuyrNhEvL6RvZzKcU7tjBqFWu1Zmjb0ZZ7Kyp6QJu%2B0oRTE2yPgP6xs34o3edRf%2Fe1RnDWWIqdQSfZY3qXwJlcy6IkimyMMEeDGQj8KtNSVMtYIYJkzYhXeiWO5CuH73%2FNGyGk%2FjPXBwsSlqJnqI%2FYXO%2F3lvRmkm%2F%2B5YhrTs1R9gZmTq23VUnIOhZ%2BrXZKyQ88c%2B0vuViNwPFJ%2B2Gxoby93%2Fp4H2fS%2FnoTTg4xpqOVxGLWyyXWkNugSbjBDp4fSg3LVk3o3LKLeJoC9lUTmhwYGjXn%2BiTuq09yh78iiQ9aQddwPz6iJaqNm7KQ%2FrlF4ja5JPCYuNah05hFka5AqyfGn%2FlwAaq9kNJ1FuhkY3Qfv5bjAJtX1uR%2BmlaAW%2FnxBJNury7I7azpVA6GMYObFDNopi1F7y1L9dCYbHIoQnmUG%2BvLv7AYj%2F%2F%2FY40OYkcNTMxd8%2BWClcuRuaKm4ccqUzJosDGGFP7YIbqIMGVOFsbt8Zq09nsAxsolTI1ULJgd0GPsEaC%2FerAU3Wk8Il8UEtaYnctxYOSnHm1aKA6FXTQEu7ijNbxyzVcBkLjjhjMgnO8xufWxsuvDCmBDn1MeBP6LSQzCww87JBjqkAYPsQuq4dLWyUe3tdUW0GeqfUkJL9fmf1hk9kNMl4rUCAX3WhseiljatxU%2BB2HG14tTzkwKaVf34SwJUI0lENNat8LfvpeE%2B5UNvrIc8EzSnV263RlOQb4t89BuXEwvjN1PboYQhAD4Pzk3CCvowtW5KSr13hRVL1Ub398%2Bb7EwbIRUT4WazuFKpe%2F9bbAuR9oFJ4Hy8H1cyIXLb0ZWtC%2BlxoGyl&X-Amz-Signature=2bf1af679e022482ab75d62d8fbbee18a2df9c2c82c7c640509457727e0bc616&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

