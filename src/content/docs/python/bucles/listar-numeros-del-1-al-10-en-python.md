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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2B3MA4Z%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T182117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDs7ChuaJk%2B08yoirBgNt24k8HrYwfz6CEq1dKgMbUjZAiEA1svmmEqKZ3Dsc7AJUwptQmXNr2MGPNW7xixDwCgkOAwq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDNgUO7lci9eCbTmllSrcA6jwoyFNFTJHhm0RM5bZfrUYeQL4br0nIuOdZo6UfY3MW%2F3GSeOPpWom6gZ%2F1AikSf%2B7ZpF1rwU3rvGome4546ghtVUNhNMtSw4qlPfca2wPHlmvKQhj%2BcoEBsHyAlWNxKmE8ClYdij5cRViJedgxA70%2Bhr%2BXoLWZ%2BYJqYIzLSm9LSamaPYbgCC0%2B01VBA0JABxAxwJL%2BoPoR32fLemQLgPsYV1Lx%2FFZDIo2tTxif9XRg1a6ELJ6r6Cj2z0tU6P%2BIoeJJjof9CRxwLC24kZLchqB30tIHegbpNECwfcZJTylabgSCEujOJvRgONb7VnOW5vnRC4CzWB0rhEGmIJEmL0fk0oc%2Bh8VXIC2X0gGyzHfXbkEQdP0CsX%2FaKGuQzZNIj48uR%2FJNK3BZU4fd%2FdEi2OQIlxTzU6PIQhNmD34XGO3KOM%2F9cH4p4HZU6oR6kCS2fjWdr4y3mP3cFeokMw%2BNu0f%2Bfji8nA6QGPx22stcShhfu%2FJvtETmrYQG7hpwh%2FTg5eBFSiJpwbft%2F2QigmxtMUHHtmmbstqLuel86n7WK288yX2Tnas36Zoowp5kxRjcaYEAhwAC4BKPwtzkpzG%2FjX8QYmsBAwW7TFJb0jf7R5QLVI9mFO2Tw3lsn50MOXB0ckGOqUBzAFiSTbbQh8RqnAK%2FC77v63Gm8U81z51i5O3EEzbZ0ssTXdmH9vpbz7L73B1dUHYyhREO4HAD9JGk41%2FnEwzGplcYj6Y334wWahZm38EfE0zxs50qdTL0c4vckNtgGHT3guMxyghgkWE39G7no%2FAlhAct0kxlspF2gbA%2BOwIV3I8cM1iLtSrdP3JrlQOVG%2F%2Fpb6C9tLZ58eHH1sncf9yi3fAfvW2&X-Amz-Signature=b5c3a14a168e3e9a8d515dbd4976c3a9d54be6902c52e0a16422e8a31e89ab59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

