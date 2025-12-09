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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QV2R424%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T020752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCljIkuHBrLagFs8lbVjU5n6hQC9NklzR%2BEaSGWVWqXEgIgDI9uF%2BrrWsPOD6qQ9QNz70ipytp1c%2FdQoxP%2B5%2BWfXyAqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN9rNeBkAoSmDE%2BEFircAye6XC82dU3wbT17F9xbBlo1rgHUlKCY%2F%2FxVx4nusAs4y3YNIPFNGJDpnnjQ7eeTiCR2Y9m4wIEGvlZijZ4%2FTzjsmTL7QOG3yZykCxG4yix3ToxgcxQEjvIe3FlxMyGCEeLBLobWaGgif%2BoEW4fWxkxCaCJqdzz9UEUR3wUvtBv0DRYgv%2B7Z2KFKJ5V1AuqlUKc%2BbcTYy8PEbnFd3CLJeWiG4pucp3xRvyMj%2FmN4A0C2dxT7QkoPj4E1q5tkxlvFs3FOyPehmXqDGOky3vp7jOQ6s3zibIMbr7ps0gqIiHsmNDhdH6o%2BqZjcQIMW2HsTyvfGlmrLi6W2IYCwMt05YC3CZLjBItfhiqJkqnBXppR7qJA9BK3bMjN7JI6M0OLsJLruWsnrIPmd5tLmYEYzWJnAWrH8Y8%2BhKep4SYx61cxip5%2Fixa8%2FDkOW6soo5PCOpQwogVAZEu0WFl%2BEYNd%2B3ChbapENWe6FPJutNfFchhQBeZZEo8zz0nQlZd%2F9jNIvN90Xoy5NoIN7jZP%2Bp9bqpLxkbtuu4JDVJQ%2Bvt8bWqIhug7ovkinvJyFCXRZhXlk7vD9wsGFVp%2BvrXu2rWn9hvDW8E33RZCerWmQ7tVbHawx4m6m4Y02AXOjql1shMKLp3ckGOqUB9o0yx7Achx0omH8I3L93FC7WchAFYuryNopvaK%2FkgF0FfhB9SMW%2FxTQIFY5g4m2CQ%2BtqG9i21JOsblVSpeo04UueVhn7HhTbyZWwDkrBrh%2Bt%2BFp6ER2Mr6fVrn5R1lnBgPlaKxKqXEud5iJ7ZlrP2gZphZqgfgb%2Fck%2BBnQNuKowrHUn2NI7hq8GemQVHTG5%2FG63YfLRDlr%2BZWw5qtjjWUeG4V0Yl&X-Amz-Signature=3f68b4936255bc9eed8d70737eadc3c789219fd8d23fb43e3592c1e3145bc54e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

