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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2KS55AP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T011218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnqrGkwUBxRpJPbnqJ9nN2bFkBHv%2FcwvHL9Raht%2FBl9AIgTsxomwllUCZjLWrLKDGK1cl4g7DvfiSLbDVUXZQ9lL0qiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMBqLwc4fRr6rmG03SrcA7ac%2Bn1dtsA9nMiuvlD5aSn0PLTu370d62YuAdI3iYOLpEW8ievfl9HCsN2MvrG6ncXCLCxVtoMCYjpDWJz3qLGavtz67g26hQdWW8DDGaBwZFpkNC9HD%2FcmTtdqpNy20RJEq94B9n0d2rbCiKa3hF5lRBAMWyTc%2FyFslKDM9ccyIr%2BTKKKQaVu%2FFQCRwdBRcppMc8WZb%2B12BGk8a37HOzY6hALw50TrR6vYBVNKfcHGmNfV2VhuuoteHZJj2EJO%2Flhq7dtZjtGmRR%2BPnam03QDpAnbLiLAL%2Btq144R%2FLq08E4jUA9nOOJ4uttZRwApc8Lxdnl0y5rA6AX%2Fpu0XkZ4lihDl9HXzu5xae5EB7tRigZfuY7V3XjsE1xZdQFh8dPmHTWTrDyE9kn58fuByB6QzbIzjueV6ee63IYz70H634iM0o8gI%2FqScOot3pFTC22Fyt6XJNNRMQ2QUA1FBTTt2SDBJjDK8e29kHSnjBvBDZ%2BcLv8whNtvsV2eL2q92SWL4pOSV7uLErLvBoxG0Pj7FZcothySip1UuHcUKCeILtWJuA3T5PKyfA%2BCKX691m83NMxN%2BcYe3iCt5ksXkH2mNnrzUbEcGW9L%2FCeCGwscwjiSEzttowmNzI4X87MICi2MkGOqUBcvTbfIoYi5fIY0nDVrSjag6s4CHz%2B%2Bc9njXA%2FeuVSR%2BD6LiDXjfLMJFZtQG2jefR0cfPSExjrd6F9zQ4zObMp5bn4pA8qIJ9Y7RRbEstvxpFtRpIHB%2FoOW%2FOVy0aaI5PzQwzgRSBcS%2Bk7o%2BTUbsduvt2TscINYO6XIEMT%2BgyUUhqtwEpLqzUBUaKfedyjTl1UCKm0zTDYzOCG1DekDrjYwyBToa7&X-Amz-Signature=9a049484bb349437a7b7c6477e9124d2bd390b9b64afb35b17f1e0116be433b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

