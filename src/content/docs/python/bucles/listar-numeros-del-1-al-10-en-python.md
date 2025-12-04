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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKOTVIUF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCICTqLO%2BPajoSxhIBONLLmm4cucD7XPJTorT5dzxNLxcwAiA9V7oSBNULvRtO%2FDyRE20dvcxwnwReC8bX7lKDqQ%2F8FCr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMxyCENtU%2B8Ue0LJPKKtwDZ5jtEZunqHRdndPs4y4Dv3IzuVcx4Wo1B41nDDNVjlZ6dBV1IMG0PIS1SvwTmkSSxxiHpxGwfBeJBzReiec3H3bitmkOfg9V2zqmuLJaGr85JL5F9CfGL6lzynF2ga9sfyO2lq9Ogz7qoIVeb9ptfBZ9ST2MPkNS%2FDbNYY4cnZiA2q4s4FmmlYnfuW0PHU38ZH5tznH8Zx17QJxzv8BxIxLYa1%2Bpcv7mmdMm6dWRz3YqQofGmPfB3sll6ZGXtikhly19O%2B2ccAFUl2lV4D9SLEaek2G%2BN78UFtiDZxGpVeiJPTou%2FqAR9GEGbP%2BYu8QLb%2FDZeM0UW%2BVykEANnhlNeDRwDy%2BiCIeVtOn%2Bbg6eTi0m8eagfptOYv%2FaGGhG4nvFr%2FL6Gijam2QR6TjKRZNO3ju6ZYxfYZwE7ctMKmLlmo6g0d7uJB7z6Zfw0q8FOm9b1vL4aA5l7Szn8FGUJjKzjNC8UCjO99%2B98ujeG%2FN4gKalGUfvvNFaKot3O1AFqgUCdvMyTlETPM0ehmxrHjOf2AscbmBQR%2FijLiVhqMpR5QS0JNlCoIt8RoqPGQYLTBODggobK5NgLkV%2FPW1ZDruIgI0tcuu0LBNOO1%2FgOI796ilbayablUk4DvquDTUwloTGyQY6pgHVjRyKnlkPprli67zgHXUlLhfs4sYWhZmNp6vaSlyKIbDDrBnhZ5H88IZxB%2F%2FOrSGQUxEbnnk8lj1%2FA0tw%2BE3240xZdpqd%2FaP%2Fy%2Fbn%2B2vUZwUOmOvc3Su4a8fAEA91Wc1HqDGPBYinw5P0UH9X6sc%2F62aZs9rlJdz8zhwBnnafwIu9h%2B8Ym6Xc46IqMtAcwL8JdBHkxprf%2F6GDnbrthW4Y%2FvXWUrhQ&X-Amz-Signature=58984dd5ee0afa5321754403dcf37484c8bcec898631337e25f79509230bebbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

