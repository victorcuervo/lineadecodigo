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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VG5RAZZZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T094427Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIDZUbcZDhe%2BtN7sizNhu8lv2lX6yk3DQl6AgFhLKCO9jAiEAnHbWtnfkCBtHkt1VP0lun%2F6S6jMbCC3ArkXv1S9bz70q%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDG%2Fl97bWhiHETsMmCyrcA0RV7uflD4NC2WTCEVL2pLxduDMdIST9cMidoqGb1mESjto8Jk1QKa5%2BJYn7h85ICwcbna%2BjxqEhJZVq3k6sA8fFZRrLJg19Fr%2FYL9PA9z8K%2BJAO4xktfuXYmH36l%2FrxA3Nzm8r29RJVwotLSUQbRvzWXpbhAfom2T1r6vtBIfuXq%2F7cIPwUVap3J%2ByVHXcOM0ezAypYJEPiYh57eMy%2F%2B4q%2BXPYxKXekrIG26K3v%2B2x2j2gqRRijxv6eoFfrIt3vgzGBs7Jj2%2Byoah71OymHxjWqcYtgUSWJmp%2FGVck0jVYDYnfXfDHwh3hKataFPMl%2FoHB%2B4RHI17Mh58xVQXVk6aRthexpbuIP8DbRWUAnIlKm3jw4Mb%2FIDmL9rtQyZ9wD%2BUd9O9rGlBGPVSzeCCX3z91rPyEbBQqpCXStYZHfHBfd92DqPRd80ll5g5nn4%2FepWCZRZYDbjxeAfrFM6YHfK57V57GZ9UdhLVgknSdZLIx5%2BLH%2BQoH2WK10YARDVzDdMZacxy9jnGJ77U7vBwIfxX2n04mQbeZy6LRZfZZbMi5K7G7hA9soDQHUKsVBBfKuXAmNKfwR3CUA0TrK7ipIQnaH9CpGI%2B%2Bzs13X94RVb8Y8S1j6ZTwkmyhbzKGKMJeqxckGOqUB6ezb4UMDiExpArDCXkigDmUqlNs5M40KST6kDOZgdCBYmmyi2VaG2k4wNFsZuM%2F8IfLz959bCfzZlr%2B6JtOPDb0c9RKw88VQzM1aBIwt7stvNLDj3PDMGhxfCO3XSonZZ5ZF5A789AstnrhysPJcZkE0Mxg%2BGAh4EpFTZ7JS9%2Fxwz32Lq6l%2FSKGpBZSMU67Vye06a%2BbFoa20T%2FXIguP%2Bh2TfwDFV&X-Amz-Signature=7811bb85a6f15ea9c1c5a5ff4773679c6260f1e58d2d1730cdca1bc4a5e060d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

