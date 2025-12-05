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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YP5PLXRN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T154033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjVrIowNoEOTTJnjhLLZvIrBkZ5NA689UhmwMObh1YzgIgUB9vMHrgHerOZD%2BnmdXz99CkJW1xpUBkEV8CzGnSlVcq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDPVVXKZL3T8jGLRsuircA5zn%2B0mQzizFLEZC2wepbvT7ZJTzKoJD8%2FQE%2FbG7EsHAO0VstSlmTQt01yWObyAzpa92NCwQCxJw73r%2FyRBel2XmO0SoAM3gss6r3usbIHOy3U0e0Ei0T8pF%2BLu60q%2FFcKIv5y63Z7ymplawvNJWbR2mrGnNxPHJDkKaTSei6fRAp6WQEbQKCl%2FM6Yo6emZR3WlubxpQ3c5Qj9QK6Wrq4HHU5XdpgxCWxUkLjNnfhKIAmVsYzo2zgQoJKYZoViSByw%2FPZBDhLs%2FCCMPiSNJEyxJU2bqsAabldt%2Bihqibej5yy2uYa6fXFRpVwTHNaMdeu8De8wFInEQIq2RLzblPfJ3RvhiKBqLeFPQaHeF%2FYf%2Bey6mavdKWKHPGkLqZ6EQ%2FnvDqnp4Zq0zZxwjNGyRwLERADkcryyBzDF2NEmswCZs6nyqlMG5%2ByyI4SS0cPREj3PPOX5wlhQ9fwfOA7F1AdNbIsFkSr%2BrzlUt3IGL98bQctUXoWBOOLVUAzglJWQIe4JyXcSNTvxVXOcDSjx1vhRVLorrqT5832pTX1tRSYhYAnIHjL%2Bw%2Bka4ion7BOXPntDOSAB8swluzKeByl%2BUFBS9oIdjQsxrbVjOa%2FsJ6JnZqWeTtzcQVjhk%2BF1P2MPn0y8kGOqUBo0l2%2FM%2F9vUNAQyun0gOlXH7nFQ%2B3k4a8Dy5ulHp0Q2AriLfKBM3aZ4YRI6cURabSn9tU%2FEbx2lCVZtmMEy30b%2FoFKFiF%2FX6wOg7YLM%2BpHi0M%2Fs2UIoeebuLyXPOVuVhkHYiCQvsrjwnUNMdBA3rBuRzvBmqHRnyh7k752H3cD0v%2BPe4kyjOxD%2B4uJfhxSgsfxml53vZbukTj3TJNICEfIevtwU3M&X-Amz-Signature=d6c636b4a6687e0bc1ab2d3febca3f5a813db51b0a98098d34f924dae73e15d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

