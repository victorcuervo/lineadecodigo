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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q25AUZN%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T032035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBYqXzJ4ivU4p%2FUvY15r6HuWslpcPgqvebTbEHAdlYEKAiBHDHIa2UxdSJ7TeIpZesiMQ4eVqEWnSv3RjQSFmbPFVir%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMP2f39KhHBS%2FxqozwKtwDLuRHgFxamRg71womeHa30DwSCQkfuFvVM8C1HDXn3apv%2B5Fbcnr7OpQuxrWPC9e1ZIz5Mg0hS%2BbUykVBbMzlS03GqwM%2FCQOIuOLo6jp0QeQAG4lClZKxkhN%2F6khtaZ4Nq0DVUb8QMTzCBJCeqKdMwHtK635e%2F5XCnJpsjGYPPUdxG5bP%2BIeOxY6ineNH%2FOJFpvrcn8XQG9yanuL1CCJNX%2BIfToRxcKfjTEOeuLiq%2B5iLVDnbK9Dq%2B%2FUudUG1iXFR0zYoKPP%2BYLR8N9eeLo2cZr7diXlfLNlHBS%2FVQav07pGWhDqLznW%2FmLDc8ac9qWixe0sOI0iHDJ5IyjRJ2HHTwPjK4lE4g%2BWe9a2ohREVXWEFT%2BDenifoq4xMdoUVb4FQsciakuueSPD%2FbXpxvXVrRyFaQyhFbCF4TSGCqwDQ9ihJrZj1GIag%2Bhoe1TZ3NSe1tfUnDbwYu46w%2BLHV6OtH1EbBnfD%2FEHncZQ1IivcLzgTfdHZLYLsUupNM5YW5J4IvkdFNSN3hgvAFfBh2YqYeI%2FIBMr8qFvSzVkPgQHRrr4UkShRboMUbWF6IWWnGMCzsco5cBdt7RV9aRvwoo%2F7WmQUs3OJ9Es3vDdvtTyl2%2B7wYr79LQcL1jclu2eYwlafOyQY6pgHnRHZaXepEiy3xoKiH79%2FL%2Foq8tbgm25taOazP9LQF6LiHdKPfsFNaO4LtJD5%2FYPlvbzVsXrbIEbueYXgejJOFTcswsinkCFDq8HUp50L%2BeRVk9X7fGnExF5MGoMfUqea%2FyJzKn8bnqtOaytedPqP0N5Dx64rkD9ftnSG%2BoRCsRi0xWv%2F%2BMI5Va%2BBUC0xsoi7Thmyp73M5UIHKSu6GPEMNidFzNg%2FX&X-Amz-Signature=6a060d6fd5810667ec36119410f1ead2647476a49ce05416a5f79eec207dbb8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

