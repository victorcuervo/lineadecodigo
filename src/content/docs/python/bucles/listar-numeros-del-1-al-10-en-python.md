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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YOAA7PLV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T051053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHFXH1jnmHvzC%2FPzXXAVOhbs8OAuLPa0xu%2F7CmGCQC%2F9AiBMq8K4SU2j5hSgqnZXm0r7iNzn8BMIyIt6PQC7wtO1cyr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMclJgKFWcVw0noqt9KtwDc8XtfPKlSz0y2gfVMsoXoLZ5j26yaz50ibDJLty9CNEqE5t8IgXOna0bFd4e%2F%2BU8fq5IpbSlNDrHtI2oJ%2FSIrZL6IrCZ%2FQJHVL7IQjNCS%2FoYn0k9a649%2FlYHmvkIde97YpoLHzgj%2Fmr8DEGSm2hSl3InOjNK4zbJ01stOlFOyyGDghTPaMqofgCY8NNs4gtiMJrI3W9Wgz87qJOp%2BEo%2BF3Yra2omSYu5bcH0tAZkkOR9emdIB9MInw8Gi0wOkkuYa3B%2FLgaJgITIPFALaz7gyBxhl7i993u5x8jCTNIHc3bF5P1dZLLp0ZFoLjG0vmY3L7oKbs6xMblftfklq17htZUKM%2BGHubGxg8Nw3qmPJyIN9n2MgpxHEh8qbrivbnyk3Ke5k3t3zLhV4Lgn7cCCCSmjARcR6RFLocZiLSeyOEl3wpbe6y6D9bg5QFqMVTjafROFxklcwnRxPM5N9D8ETPlp8YcfxjrKKPRbw3NHx5894fKG%2F%2F3Lu2xlKQPIkAg9jRVdHBbJkqbcP9FPSf2NOF8mIcLDjsamrbLuTWjiRNREDzRzm07O47nhiIz3lFAymmKr9shM8jy4pzgYgnBK4URZOaFJb1om%2B6iA74gSVhnXf5dhvj3nSgjjbaYwld7OyQY6pgGXGzOhZEJpGOY7Nw%2BJjOaM0QQBc4xVE5LERD%2FVOChllMFrzJkddH6gmcXHsZVwpaoNIcY6uV8LNSdIXbpWIoL9uR5ebkErMH8Pv67HewBoxngN6d1znMF%2BJ9kkXdH6Lqe5EL4iV3%2FPosQpU%2Fk4LL6iOYz7T%2BLHjFCMPFX7Yiwt2FoT5N7%2BaLRuczDH%2Fllj2XuS2y47va2nXnNR1Eh4jjh7TKHvRUSj&X-Amz-Signature=15f0c00cdb1b0d40a8c8532b58c9dad15a309f7d2f5ba6a164b88132116d2b09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

