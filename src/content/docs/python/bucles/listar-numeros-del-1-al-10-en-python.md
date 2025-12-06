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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TOHFCN2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T145456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDn4HpC3y9mXn6Bovd%2FjeRI6Q%2FzAQsDgNZ05ixRcJGLKwIhAJbHqrNPS2PLes370xo%2F5m1n506FN3SUf%2Fo1h1H0O0SoKv8DCHUQABoMNjM3NDIzMTgzODA1IgwxJt3ExFsT%2F7YXqKEq3AO4lKqzQTxoLkPrFP7k2pnJMfu37eibZxuh6cDAYTcQZfcI4OCYUTcXDCUkb7FuEK79f1HzQWpk%2BzMzfHF3Y%2FpI%2FikXDTKOFF2a9488ZopvAA3K5ofCYTA54oU4aULncpMleTgmvnK5fvOmfq8DcfFzlT85mV%2B216h%2FBC79lxzdmYn7B%2BVRStwgFvT%2Bwl%2FrR7hrUZJWBH4lwKsI4yj1Q2H%2BTxM2Xg4jct%2BfjeA93OyDoN9nek%2FGfQFMB2x9Xc77Z%2BDkMRYDNgqM%2Fza3q2joABC6%2BS2B6Xi8AXdwE943ddn65pD0wJ2nep5y%2BgQe4UqZqf4htA9vF6wCY8IZ7ABEbHNNm%2BQQffSQbT7hjRl8%2FsfGwl%2F%2BonHh5bKqnyIyOvXpJ8dynj7iOLME93j5kurScHXGBfFWMG3xln8rprBz6D6G1PjLdaTlTxxNjkay6WBIW7YUgZ7PsMazvcW4Ez37yNglTJPaqNR59iSKF5yw%2Bk0r9LR6P1Q5f48NlIck3HGzOW8T39a27Avncvp7e3kU6mUYV1xgWFz%2BsBPdHpTrAIPQqQ%2B9fvLF0SZgrFCBVLldFgd0zgqQfmHrr9ezMKTDcZxLoAH%2FCGB1q6QVMJOuE2KnElT%2FysDUQpNdcvYQVDDPptDJBjqkAXDIwqO3HxIYoT53SOoxLkZAA4KgXztC2FVc1835ZFzBuUhtJCNP9KEFzy1WCH%2F%2BfA8CuYe7TJCruLKg5okUde0jDabbHbbKtcmqDLcCRRHGAQpIglIxq%2FOK3V6VYjIWoAZWiD4a4KauVSpDIa%2Fkjxj72HXtEgzbApLv0rgqkFFH9MVofa8l6irl0VNNbqIQo2xoqTJ9Y%2FS3cl6kSpAIbUL%2FJiGN&X-Amz-Signature=3ee40d3568c7fd871f7850a4552f044b53016a0a72a4481820970d43db42d146&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

