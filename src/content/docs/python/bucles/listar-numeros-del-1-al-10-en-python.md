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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647ICNN5K%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T235040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIHpAdWrQ8H4q9cPTSYzplAKDXrWxgTZHatQCLjS4uLX3AiEAw7h24Z32kl8ByI%2FHYdhafvXAx0UP%2F%2B6hMU0AHOToqKsq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDOAs7QOVmG%2FPygw%2BhSrcAw6K1fBfgKwRh5%2FXKe1uPV%2FSrMqwzhtTBOelordrWnKqNx75xjomyMZO7Zp9lGk9UjEF16%2BhT6RQsHRchDzvTDY8lrWcnzdJBKFp4KEhzBpc4O5gnHXmPFYTYNEnOzFks8YJtIs4NaMjTGek%2BFw0h4b3OxCJWCcGvA5szfExGUQF0PyNQx3lrFaRD6ukoKKKXAXoDSATunBNSXFFLmI4ZMEkDTEqQVupK06y%2FoGBFPO2tw54NcyEkiRCCj4gvN4wNlRx%2B2fiX3pYby2IDbRERPEXP22PB1c8QHetHqXRj9xViM7vJVH%2BVwDJwULzfuRGn6ac3S6hx7eTbkr4XAiEVmDx%2BCwHLAZiwM8uHKm03f4TdNPVsoHZ1TsP6%2F6y4nFv3I05CA7pFMO4mKr54dYVNmpL%2Bkf%2F%2Ff7MhTPNBYkaER3lqujJ6KAunzqdIOXpA%2FAAupdyKxezYSjkRW6bgi1vJ8yG089xKYfi74Utr81jFcR2jg7Og%2FZ%2FDMBkt1X36%2BxCSe2SxWT2A286JPn500IYMxmPvKcHY%2F5ukw%2F8SkBzQ0ugYIIICkhlBi%2BL3JBZrFmw%2FMazcIIIZd8F6u2mnXM1X%2BPEIForSWxvRplDpEJULfxGVuD7PEo0HlY1Gsz%2BMLGVw8kGOqUBwuE2gZ0ALbPuJvtHRn%2FnGt%2BiYff%2BWu1VT9P%2F2JTFjXUO6Fq99xo6p67pQOBAlr%2B9kYT1dgWGmN83fOFiFGH1ZOYntwvSTaaEKm0BrFGsZ%2FcIXwh1%2Fk657FHrqOO6pJkI7pOAJBlYDAfDFU%2BSdec3DZNyR2%2BOBVfwJK7YccnXHSGbJ4RG6ooOVBcxBnTs4bpSxEa9Z9T90HFECBM5NAwHmvVAw0oH&X-Amz-Signature=52427c1bf773b5297927350a66a8fbb090420b4dbfb4987afd61cdb4027dbe43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

