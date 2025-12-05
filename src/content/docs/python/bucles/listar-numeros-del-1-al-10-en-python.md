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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5U5YVZN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T165333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxxDmrMf8Ul6rvys0g7kFQJQWG9cylX1M14zMP%2FSjxlgIhAI8f2Cs8eE%2FFg3LMiqSbl47T0ZP%2B6kJ35n%2BdjizO2K2bKv8DCF8QABoMNjM3NDIzMTgzODA1IgxQEW8f6Pf0A8ERG3gq3ANyicGeF31wOfFPnfNttM8dfzrx1%2BBfYWQPf4S9HRp7VqzJXwI58UeSlJRXu6TH5%2BNfmak1YwUWHKcHiyhHEXh5IjSKua%2FSPOyiyxnXOFYuZX1pkOVAXBf%2F3K%2Bi1S%2BGnbPSLoCg%2FQsz3nlon4s2kQ%2B81NMAjiZSjEuzpGbogVkfYtAAa7gcNeH3ZxV0gTszSDdwNXjYWMJN24d9vETgnLIkM15xUrcazhHW5TSSDrHcsGein87RuE6HH63iUjpH8faAltSX7Qk6YLCAMK74GEiSve0NpJgF23mJEviJ3dbEu0vyDbATuxbihCp87G4M5P0iy%2BqTZduxRY7xyIoDF0IXUp%2BjZxcclNMUQQ8NzcFDotHaGFDCxk%2FD9v07Q1b1UGnuu%2BJu5pxpDTjAPCO%2BsqsLjazXpGbggCZGX0yL%2F9%2FIeNT0rgv6kRRRdvkukcbAoDJDKULxLWzQ2GeW5aIV5CXn5kWKi9kIDRGMJPWKFgcgKu2ic71x%2FrOe1SY%2FP9tc9cj%2ByMivWnTHvmGrUafXCT5Prql0bDTThRkfE73JV2j3aB%2BQ25UajIqBOFSmW4PvVYcMbqAoxZJ0Flt9NpQ5%2BWl1ZwqTh0x2GWptWSzGzU5i4rEw7eCDqAmPr9CsLjDxysvJBjqkAZ8KIrgGbQF9sXG0GoMrid4MjDeNNd6Mu%2Bkl7nvjFaA2dL7IHdEp2CRsuLKrOjgnOQf8WibdM4p6T%2FGRK96KSHRplXdTo7VXPZAxPRz5Tv5NRUurKwFXi7ry9ilSJUwuiR4G8W4EWyErwEGpb9g%2BhT1u70DFj4yEssf7QNsnt3Gr3eGCzlulo15kz%2BnL3IlGXRC1GEBj7H%2B8u0gEbNxxFPdLmMxr&X-Amz-Signature=0baadd3ee90c1f88d14da8308963e01d773365d10ba36acce1b51ec16c72c2eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

