---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastUpdated: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I24TUB2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJIMEYCIQDwPuOAd6U9E86qJigT3R%2B%2FOoZx1F4cG9uzps2ctJDcLQIhAP7B%2BB6GCNwBjl0yGKljQJD5qhvBotCEEZx5GL3N3RhkKv8DCD8QABoMNjM3NDIzMTgzODA1Igz7mZrCHz%2FNTRjdw%2B0q3ANaqnL6uKQNk3QKd2e76lnf5o7mzsJCx0YC7dlXu3dKsY1HWPp9Z%2FM%2B4W8OPja%2F%2BDEa%2F9yE1rcHscLqX4NbB7SlSWBeOcmFoA6iovqt4N%2BubSqsjx73F3GN7IdiIEZbN%2B82w3MVJ09E2vf2WrxIrgxnBy1GR44YpI3dg3doyf2hKHyhEkcLNU1EnF%2B7LDUkcpG2pIx%2FTKCZgJNc7BjdWH4lq8PsynQIvnP1Nrs%2F%2BSL%2BKwLmkG5DD1Ap9zIYRSCv1RxYIUzLqbYy%2FBvNZx8Vgn%2BQdERUDTbbZJTgpx8lwgy%2BIa1%2BoxC0G428gFrPD%2Fi0eMQYyHdElJSEHBD3USQpeapRhlfiMLlEalMSpDv04rzwf8%2B9gvagc6ATaC6rn09z5dD2m96aT34a0hdFANjUwwAEBeqwBXE9Y3SCmI2Ab2KpebBWNcvquK70Q6d1wWuopKojFAAQnq7A6RUDga9WnU8U67wsRc%2FiaAvqk5klcQCZ7mJhNKmCvuLUYYgoJBZfMNk%2BYtolemh8gGB9e15Xl1dUgmhmC3SF0Z%2BNv66IiodRV%2FyJnNtjLbYQn7Aq%2Fx3qrVtvuQCUajwVsc4xh0UcSvuf1x57b%2FghQ9%2BR6LyZRcZ1oB3SjUq%2FzuAx5IRZ%2FTCMy8TJBjqkAWjmhbDT%2FD6ROXYk9SjJW%2BlBQWOBycsuWXuQ5%2B%2FFVFMYZ9HsFj5qqz4yICIk6Yz02pVUb6Y7exhNfgGa%2BhzYEAz3zW8fvzyAe3yvZxcRyaEBzof%2FICoBxH9MNQCvxDfGVXIQmtcsCX6A1rwiiqfLpoXMriI6Tu12eZuRfc53FNYrERKXSQbXB%2FomfvLNSg%2BOGt94zBS4lCYFxTBxfIN5Wjjerc96&X-Amz-Signature=f1d8fdfa2de795c87af5fadc3205aa87f77a6794779a9c1d0ee2acacc62b8c3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

