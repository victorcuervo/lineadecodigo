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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCKPDJEG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T104727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCwujHP5o6mQ9yTVBsdjAlzDNxtH2H8AyrUUNpxgQFmUQIhALtX2UU6nA6QxPLc0qltiOLYxqho23mSjL5RVPIq44woKv8DCHQQABoMNjM3NDIzMTgzODA1IgyCrk3LPN8NtR1itFQq3ANSUYEkLVdVBy70hglrRF1TrO7RMWwG5F1tJ%2BmDAiFN4U4%2FqPksc%2B4bkGp3vrmWRQIfVi35%2BWpTqmBirmO7vzRu3D5o0Xy2ydEIyc4tP3xNb8knnhZQdDpnFecxaDekQuAZVRrRiCgxYPah5KNZjaqOKPe%2F02xG0J2ibuV%2FGWMKhmy4ZT4SDIU1LfjROQxERkwBsLejWJpr3tgP0IfQM5KL5oKS5VGEGn%2BOm2VJyurBATkI4GEuX0tebt6jmJTIR%2BBUD%2Fx5dg%2BTf4o8H%2FaHz4r4pBUZ4eDP5KtqHPoLvzoouaAbwm5CR5U08O8fIVFpLXIetd9FqmB0oJPjYKnZc6xj7wrq%2Ba9Mwvnl%2FdsHvHyo8HD4x9e4ksAFJZwWz6UdSyKzxo0C5Vg2wyeu86wrJBomNJ0XP8rw%2FBqeU%2BOu5%2Bl%2BcHkvIrw0sZ4uXmoQUNFJYaj3IyOCeYG1lqaNtuAraH5lynYLcifNHMt3UCbPc4tHsl6W5GOCfvO7b2zxVlkvZUzGivkDrlq000oSlVwk%2BnV1hSeAtHJWrZ9i9Qu4J4Aoqtc5hVg6TxWk%2FBBx2DQlmnTbfGf85XHTXQ1VmNRI46ffH9D66nUFJFCeBNfD3MsDR8BEH43gkgb69YA4%2FzC4idDJBjqkAc6o6mnIwQY4YZ2jLum3O1z%2FiZM0H55HW6zziyv3%2F0tx%2FKQNa2HsPAgvVz0BqWEk%2BFjT%2Fm5G3X%2BOEsEfViX5mqDyMHC12MNUIfJmC2fccqXIpqDe8KV4b4d2kwlQn0cjdfVbLxOA98%2BG%2Fp6JuSwsITuH7uH8hqajlKMvJcsYg7eLRvkU%2B812quZKN0YpHMPBk%2FbNf3gaHlBQaouTcQ6sag4ke%2BOE&X-Amz-Signature=619da2801e368e89f402f23f8c1af54c223701e705538d152d6bfa65d267ca81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

