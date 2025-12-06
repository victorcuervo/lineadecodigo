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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E4ZXIU4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T163445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFhB5Nh%2FIUW7z6Mt%2BleWRHkEFXKqpqh0naeOaZeKyiZAIgC3CSbo4J6%2F3D%2FrKy09d1p%2BAR8UWZo5cOWR9O4SKNNscq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDG2tVuBFpOYKlwQlvCrcAycHZqxzk%2BCixWhDk9iTmkphYL2e1r2nC6Zz%2BtQ%2FegPjs2EdyuEu409B8dv35UlNIG2HWt35D5H50T8OHv4CIJMiM8RaO4tYSM3DlaKbPQjpKMfmSBpanZID3mK6owaYHPaaWJFI0Zekk1ywrEJYY1oqEwXsKvDwUHKjHA5f32SV5TKgtiSQ1LwKZIW68BTFbTU0FXivaVL2or5hxi7EVCqJMLbLN9gMLWvHDAMV5gwUlrZmzL4J6DsS16V1y%2BibvNGWhuqxMXDbOnwlMSKUiR0Ftwo4Bgbt%2F2kMQ0Lnnq2qiZl%2FK88ahpVUE57hyPlSr9dPEri9jyU6A4rUCaGKQQkdnA%2F5eCIZU4TfAwJwU8Cy3RFPxQKJJB0EkppjHzIPz9NfxfHRaBpjUiWa3kUHdOmBEnuQqhvrtg8KSZbHJFlnXzRb6Chs6vT8E%2F6S64yhBwrea%2BSWiX7SsjaMGpdhgNNXeKqdqbLR0GmbayqCF1japRO9VO%2FndKJKFmKwmJSXtTA0XmTxlF8aJm4P%2FPupgBzEklB6f0idhi2pCtqM4wd%2Benn%2F3WS8QNLnqspHoBTC8CyB7cQFH%2BTG%2FiX1pai6fNs3UXH%2FsdadZ8M%2F%2FMyfBqbEi0QYiv4tsZrPUqToMOKm0MkGOqUBdqXy2XO8l9bRYPi6tYB9onEDGnHrpDk7qD5mWw5LPv%2B5SV%2BswK2TxEpbjwgZMs4H%2FYxWH%2F3QqsS8%2Bg8pyvDVWZYljagiWDHox%2F%2BkQqdTlCO16%2BpKNj%2B8F%2BiJ98EOwpPK00J%2BegQStS%2BCfdSofr8Hv4bR6k1ccEnKzq9lvz%2BmnwdGKjRH6TwMrTh9AlGaaKwb0reYiDx113c1zBnhfVQhdL%2FfffSi&X-Amz-Signature=010f4243e5f6f4f51da305bafda71eadd775f05c75f5a226cd58521275d678af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

