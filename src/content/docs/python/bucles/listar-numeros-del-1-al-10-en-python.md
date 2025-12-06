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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466535OLHOE%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T195842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVNCwJz363WSu%2FVeX45LQp6BOPRbY5UwUaDt0mdW5AsAIhAO43rYGy%2BJSQTGidwvyMRKIDP6VMWT5L4YPRn5aONnHLKv8DCHoQABoMNjM3NDIzMTgzODA1IgxxlXI2ftIb7Zta%2F4gq3AOZvnsViq5xpw9iiPhkgC14ksFwosozzp0tVG%2F%2FtlnSrrsZZfmdtDuAktHi9ECohb9AngF4BvVViKckRy6kKkf86SdrJr2q%2FRyjqB5Ff6cc0rtpncoqpwtmZXwjoea3Bw9sb0I10XdsjpBqicNOBd1QL47%2BNGlvpWDlu%2FhS0KrSRhc44eXx%2Fj7HJxm27BoYU3Lp%2Bwp9UixbD6WoKJpryzRxgwZ8Thk%2BZGP8D5f74UzvrhW9vGHnG8jEOEYtaVqNoye0RyuY%2FPF2p22J%2FT%2BES7DVjnHbHBKO13v91xHZDvOJJoio3qMdduD%2F362Pt9mVS%2FD3ZWDYTdis5IqDm3sweCtIyy7XboxS5yxZvjBqM0Vq%2F4a5Rw2o01U7m%2FbtbJmZ00Fg0xxiHhnRPmrAcQ6HgiFkRlikIxYpRqW83F6cBcVZfCgwjjZJbegCR0Ey1o7pxBfzr%2FzZof%2BtfF4Vq4KIWNvonz%2F3qxd%2FbvLQ34ZtVAB9%2B8lrLjJYlpbKK4D4KQKzsWzpyPEJD1nK7n%2BlKi87nBe8OseWdVNXHzfowGb1pHWK9b2V6nl14vF1hK57KDz8S3CX%2BBF3aTEQAZj4zEKSAhxpximu2wdKh10aHP5WuMrYd5fj4VLr91LV9AYGPTCTzNHJBjqkAQR7eCCRjwmLScUJn%2FDQliaH6egANSa4XyUa4rFiDtEUVEAhXLymZ8z0oCEFwnyUJFenqqBTBLwIgsPQ8E4ECjJw3PIrKfxd3Wi8WcV7jucU2oSRkD85FH7WNmxoeQh%2FTGLNYoOtRfR1J8U1gi%2BwqlVtXxcS1P87ru%2Bng3BvVdBhDHVuLWYOjrLe6%2F7iw%2BR%2FZ98K5AZ6Rmzuit8UBVeApumMOavS&X-Amz-Signature=43361c3c9336eb3100553c6fe4ab89e12e08f4d0b0734bf2459d8a18abf2dc45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

