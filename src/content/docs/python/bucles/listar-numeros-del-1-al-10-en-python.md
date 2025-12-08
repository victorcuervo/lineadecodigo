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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRK5PL3E%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T172752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsXZd67KP4M%2F%2BNyD3gS7AGxaFY22ca8ANkj1aMLQPJeAIhAImv5WqsZKOKNolUV3nl%2FFWAiV1eDvuu7o6uBIUcvmIbKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1bmZ2DLvxleFGV7Iq3AMdZCuZkLsMJ%2BwHuf8Lf1cS9pRUf7Bs9%2BdhsfdDPhqjSlTbUUeN1kJO3qbpiCa%2FgTvGsACpz%2F4olvRUTBG90B0BpmhQYio%2Bd2AT2Ds2XV9aJb2Mwyjl2SYnNqbx2Vo9eM4lSYdO%2FP9fFmXmpD0AgNhJavEdjfdB0bTbtr8XDtcqOLTdczuWl5ynNRSjIW7iWb9IXNUKHWtfvGdtZY%2BoVqpRKgf%2B2H5TZ3nFo1zomZZklK5sA4S9feBjsd4eMGvinaJU6df3mOhLVimyn0CfcFqQY8Thb7bkfVcgXImyZb6%2FghEdXuvp1N8sNzMI5%2BKMdUoMHzE3%2BqQXYtcTQitZhi4Q50p%2FPBj7qhvIgUDiY2RjMbKZFaxnuTXDKPyeWjFEyoHxV9Cmswx%2FQPxNkrEprWY%2FbwFpL1wZjP5bIepgXXRD56iVsXRBHd2392%2B9%2FzATU4jlMSu7pAw8HEP28pHwy1fmNM7et0htz432mV1SxkcXffVQkTbCQHSx%2BIZ3fYlpHjvZ%2FTzEQAMB0PX%2Fca0kC2rDmr7tph2mw3jrTf8xn7czU%2BPRH3xjJuVVrflMwABfb%2B%2FtqDvG0ZVz2wmviayLtmqBxXXzpUjmCLgDbxeqU7EA0m3CnX7p6dktKOKz9DCHh9zJBjqkAXAhOjp4ZyzOU78mvzQZEfQHJO0kg448jHfP60bQ%2B482iDhFTfmr4z9BB488MT3w6PHy6rcWC5zO1IfPJ%2B9NQCnIfsEwmhBUufI4HiEeXMosK1TjiPjFw9CCEld6SkYOIGyJtG3aoPsUODy0ScLoI1DOwHvchQAOPUUoncAwOVVjMOihuK%2FBAkTaMRkDFYk6rsZMtRCzemrV9TMauolPfVZlRbWj&X-Amz-Signature=a91a650021451126a43a103a702eddc9413b88124c07dc70c6bc5dedbeb25dfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

