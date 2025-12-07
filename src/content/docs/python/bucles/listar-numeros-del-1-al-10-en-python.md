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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OM6DWWZ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T102530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDoei7EowfH6EQEjCiIyaVDnZF3cq8I%2BUhg2ctsMb9KRgIhAO6SZCG5JZXNPlgzS1tSg1h60V3aSW%2FyGSF7DXISyzkdKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxqIdMm4zukbIVAp9sq3AOVBnJBDYjAE7T93lgamBGW21z1mHcQXYeT%2BXDN5IL2o39imQsnZlHhTK6RkkUtC6fmsJB%2BOubPuqT7KpPTtzeQdGPGO3S8qxmQ%2B%2B7TDINKFFT69psgQ503FSzwwHhjXKvv5g7z2rEN1X0xMPh30uzX0mPerLpHOsZjAAhsRKF373vHws82lMm3pwd9vFP7G7eLKrd74MR%2Fds0afI0cquoKeUxSqOSti4AHNYyRAwMndExaNer2VVjOYqf6xm3%2Bt7chEdpgy3Hlgr0ILqQ7V3Rtp7pN9fVU3KoWgZzYnzNRG8JjYHa3O0CrbfIMxH0Fse%2BBgOjDkSZWPz2xfESckX34%2FLgFT6ZZyLdNQLQvh4yHsjeIeZ%2FENn2lpUkLcIQ4RsLEkjwllGaQu7V0deJnFDLBLEouD6%2F0QslsslLyso3RoTSKsD%2B%2Bvr5Dgq6VtJAmTO5gXfGABa4i%2BkFcoDVAXuk1qQkMKw9zGrmbmXuzrD7xBKqj1sGARAghDtFDHkL9SVXTngibM%2FgUCg5QkHI66ffiRD2hPwrp79%2BKyr%2Fz9mPiViiUswUmqF8tfPS58MlCfHIBxGMk7kp%2BP4D4xvU3dXT1959QzSLiMgvn%2FlU16EWhLcb6hSdDhP2i7aF4MTDMmtXJBjqkAU1n%2B%2BWi50rrJyCRb%2FR7sFHgx%2F1RxJJw2R14RokNNOwW1ZUS5gFYSxUExawuDlO8hS61q5tD2urmQpzrDofY0OBQWu0SCF9fHez7owEM48%2FDwhCW4pjPG9Iv%2F0Fx14k4hOx8pykQCUaZwIvWPqbVCvgvW7ReN200ymNa8Rt4YLAaOHMFRzDhXsgms%2F5gmUQ7XULzM6MgBqXwNCXgnooM2FSHLnos&X-Amz-Signature=49481c6bec61d6ab8cff81c6abdf5a0d7c9454bd48c1bd072ee0d103d52a9baa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

