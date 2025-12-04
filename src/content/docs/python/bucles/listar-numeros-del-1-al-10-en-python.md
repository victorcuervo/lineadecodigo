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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WW2HVZW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T133040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCYZXFRhu5qk%2BAQ%2FhanBk8HxFJcfBVVFgjOfpBRxnDGEQIgXGSi1%2Fw0bCagScxk1JhyYNTxgyFueFVNEnmSpPC8DiQq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDCnUqHTakTPJbqIvZSrcA5%2F1WpafOVbb%2Fugji2A0lgKn9PBc6RKmH4QJROhbhs2eG1CIfjRiRFtcXjnxh4FqwjSF7TOyQxFeAs%2FPUut%2BfBhtH08H54l7d1Ilah%2FNBpSKs0A%2Bex4tjz8T50Y2erdh5oMkv4o%2Fwf3wq7tDvDUl0q14Kd1%2FWDhLprqtz4ZqgVX5TjI5vV9TV1iCVv9Gqpasxe8MjpT3xPdNR%2BrrQ2s6L9wg43wJR863QrZXeutbul3aEGHKJoedWUjNMd0Xib%2BBzNI6fvuLMR62wcdopEiMXvR8vf3MqwP6mpu7YD7mDv%2BsZfIWEFsiGn136pVbOPbCSsg2znet%2BNf27agQxYUiKr5cXceVbwwyC3PuOGZN1OMXmO7WwABYGQXAeZmaxPSBdC%2BTXz9L7UIri2kA46pL2X9yrN%2F8%2FJVTsg1q15wL9gKzGXav3TQDtrxZr%2FseRpjTjX79QDdCNJy4WoyXbvUJAaa0CUTxO8NRpR4paY59FyrKMNcNqcIx9U3mJzP5pjoAiqP2Fqk4PXgeOyw88%2F6YhibxycOTfxfH7TJir6Ne7ce6immAzJMlQzuri6hK2m%2FiZqQhly2LgfmWKXUpbPHDJy0s8VjwBV44ui596HGdmSXkMAT2OoCokuqGtfs3MK2DxskGOqUB1%2F%2FCdHLDbcgVRwoOGRYlvwM8V1vX%2BvOqF5p8iGDgbMd%2F%2FR2RnKnlRf8F7%2F7Wq0mVJNZ5dXCXFXQlF3yAgBFs%2Bv6Jx%2FxrrvBf4tMRwUJAkmzIrAnCQzJ%2BOdkHGPGrhZYwl55sOQD6gBsRWvNteKrA%2F%2FrHT8IfAcZUh9Zm%2FInWWA3oT%2FqFjUpd0nuICKBKhEpPgg6PZ8yT7iu8pzf%2B4gBE8ITZGtHU&X-Amz-Signature=fcc7877a9e77e374bc48c1ff7cc8bac1d79273a3c1eb703099d91bb33d264c12&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

