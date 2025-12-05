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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6M4QJAZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T123406Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2G2I98nigznF%2BQ3YMXGw8oiQpTa9FyttAaD8Nr8EIxQIgdJp%2FnMQLM8KYrxpwl89RXs8VnDx1NV2ycP19BIKRZ5wq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDFRAGg3mSWhv2lBL%2ByrcA85xKWm0gtB6Sp008ElkLAa2dPHVPt3aGHjsz%2BF6e%2BaU%2BcUubLCSHs7DpYWUHJTAD5oNUbakkbQTxleErjrUxbxKrGy4Hj%2FXQuxCdciK2tax5C1bHJkQSqwlYDpotuWKpuOBSHVYj3Ese5RVTHkcAhZvmVMr%2FVeHjtEcBx6pUE5EvZWi0Thm%2B5trX5Rd821bPXtM28kmPiVGjWCu9TMcRi5DDQiwZRcpmauqKDtcoik6k7r558Ry83EfwvvhdmCewYA7rLt2JOtYnA5bgVZ2316O1OUpSJiSpUb8jwRyz8Yk60IqPIr73DPa91M5PeEuPCyCTVW3EN%2FiqeUPg1wdXD%2BQS9syUDtQ4n9qyyUWjyIewzkJeNiLPSCx6HawWBgSoCzyobOtKS13gi08iHvoRGZInKRKPdoAzXN9B7kzjNh4fcqB2xoB550QFZ7lK6OcezPIjWzCuUV%2Fy%2F%2FXhZsZIrLCXdpQow7LYqdHBsH7lDhvDH5hmU2STrzcaBxvhCcRt9i4GhCezVPQkp8PJAa5gMZ05ECIti1JdG3lcsnz%2BI25RZCAqYAm01ox1lTw3T8zDHNYgU1TF1t0wOyQUuLTszxKy7tzb%2B2IL6fpWHB5Y6jOGVLWJsFrUpo3bSFXMJDSyskGOqUB3qtRdNMyvZOQBfwqDfOGmhe65APeCtuO2wtcdDv0J%2B4%2F4ZeyfB6EUtQ81LnGOKsCW5dpzcLNfWVf2a8SOtXk%2FuTQ6YzrkHb9d5wb63v4i2QQU3u%2FecXfombyle0gga28bv1igN%2B6MXsYLb7a5D1fH%2F0nYcOWpeNfetZcwgwXqa80ddyXSO3pOszBuHBFGH%2FlfaLFlcQEJqj%2FS6gPoa%2B3gTB7yctL&X-Amz-Signature=cab6abc8b5161b1ff97d2293788f3c0c11cf9b5b2effc943699f8b6bcea2d3e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

