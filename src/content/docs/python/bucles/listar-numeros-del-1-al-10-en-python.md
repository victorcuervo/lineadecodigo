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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663OVD5UDQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T031459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcz3RsfFZc6s7aR32kanRj%2BBQExjAnD9GPOrDRHDo2NwIhAJNVvlnvz746981OFvaOqjRZqJrOJXF352WA%2BLR0LrooKv8DCGsQABoMNjM3NDIzMTgzODA1IgyRgE90kyotnBC59WQq3AO2amyD4pqE%2BGzKodRkeshIKiP8QM%2Bx7uNo3O6GEH5XIZEnZXLb0hPMJ4JXOauu4tYIlrfSdsmp08SxYxpmzel4o%2FdLjcZJsedZiyT%2F9VAavmQTZ6YEhXYGN6Eou13ISjAXJiB636oDMnaLG44GBDnMcXCdKF43Lx5HW5u96prElS4gsSk%2FP2jttf50P220568vFz1I0ePeJ%2Fn%2BlSh0RAuUZPpw7qzDOnTJf5dAyAvgo0F%2F6t0n1h2x5ccfOG%2Fzv29ZUHXkgb8ixIiheKqzuKR8%2FdGGkY55t4S5X5Mg4OA2lWyVIt5SyY8mERxACwJtfurg2bk0sT5mTijk3x51X99r3hULDA428KmA8vFUEI%2Bf9dJpw4g6EjmqEp7WFfB%2FPQfJg64UMy5DF0FMRChXyqP3mGP3rloPt%2FH5TVi%2B8NhnobGSu6wzda8UYe4caPhmfRFodmrbHataeFk8Z1hbPclNOe5ekMMdaJvklfATJwXLtS%2BDmc2luNfaxiQPW8xImUoW6NxZCJFufNB3L%2Bu4fwYQcMFZvRQ09TXkXSZPMuLOvJO0%2F2ADXd40sg7%2F7TaLGdoxkMbuvFQ9%2BnRUEpo698JUR7b8gQW3JTdqKxyi9JqCR8lUbkudHqh3okeFCTC3p87JBjqkAeTgsHLoXJhrebqYBE4X9BRaAwP1%2FbsO%2FGR%2BIu9tS%2BUq%2FVXH9l%2BDFsdeYdskiy5biq9B%2BzsJCz6FWDphScEDomDhl9FkHopQR88QiSbjMfpA2x0D0y97mFyFhFb9833sqgJtTHKU%2Bg2bSqzYHzghYJV49W064AX%2BhBkYrqB0TNE6p5tP3RBM%2BXR5q8M2lPrw3kib3yQiYLS0lNeBUnJvTp59ks7T&X-Amz-Signature=0f183b49bac76df65ba18006494c74ab2b1d5bf0eb7d4aeadd0071f0116ed65b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

