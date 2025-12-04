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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3LZQVHO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064511Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCH0GXlflZ0kDi6Og21fvutWSgG8k0F8pqbGdDgV8k80ICIQC4yIEoyvdP8TI6LqCPh5BztggSJNPy%2B81qG3fIv1emKSr%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMd%2B3weGrigGG6IDITKtwDnYPtxCYp89PnsIiSUjfSI9A3nC9oBhMZ8EF9K9SOjOKhOIsu8t6NpjgjLrRLK992H5iIWxN4FPOIAbUOArldrV1PsPadVus6KbbvpSkgCf8nMw8rhKyJh3cUVVrumIVCygDIagI15smWJX20nCsz8M8T3jALU3j1v1WL5ei1L31HzF2kOMxtafMYsWhMwxxBvPWvFE3S%2BzFguPT06NcYzI3zmlCO2TdO3J%2BuuixutQzDYRcwO%2B7rdMCysB8gpsp6xPmMeqrGm40b%2B4EULDizqJq0LMSpQDH%2BNtbuKAfHBOyw1J%2FLZChQPPc8ieoZAL7xNgj%2BugsVyvxnef9GqNkVaj80BpvQ%2FNTfaGOVo3epQfp1Ovx6GBafLoaMxkxmL1Um0Bah6ykGvhmLu8zUo37S0xvWnQG2TNLBgi7%2FeEAnKdSG3zhbMsuZidgoBn7z8CssfynFzMsRpkq0MaHdUfDS3vUXAEoPylMwBpXtje6COAemaH07s8wk%2FGUNZX0xW5FDQf5NKpnRxPvgQm7A0WBZNj3lGjkmhkeB4%2Bvr%2FBpfiHaYJjva%2BSxbIbZV%2BbCAEeET33uXZLSe1y9xNM4NH9TukNcHzNou1a1%2BTg9QFPCMfF63WYLOntraivXiL0owpMrEyQY6pgFLEqLt4dgRMrmLfKr5l4Db4xAIKcEz%2FattmqTosVm3Aa7NsSxi02PCShvrNcWJ8so59UuDZplMjGRk15citnmW3mPCS38dyriDTop39LCi3X7fu0s0E9%2FustEHbouD%2BhL2q%2F4xEF864qgYPDHUiVCHMxBf94lpYtx7cmNXQGDLTk6lu8GZzuXT8%2ByZEYCEKPyAtyMMTXBYUg4p2wEDF6Ca1gWduYgb&X-Amz-Signature=a1faa4c54babd81e805dad8a0b24f6644b9e60ad2034fcefc98fbafb171dfb8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

