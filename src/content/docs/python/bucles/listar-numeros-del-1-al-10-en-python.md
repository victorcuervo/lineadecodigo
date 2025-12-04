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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SQVPXXY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T133209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIDVM%2FyfaxrsW2Dt8j%2BWlAwjruhty8JIJqZdzxFRjZHy8AiAFqBey%2FQg3GrueZ6b6SirGwn4DFpJsHmV7QSPLtn4hDSr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMS3pTrZR3synfGZO9KtwDj4leER3JFL1WhKjtWZNtWjKXavvuDPTmBVfaRpRGbFU93YHjGf%2FreJ93EfESHXq1tSvbT1cHuNaoqjhYfAWx4WWW9Ck%2B7zEI4m8LGlFs6aL8RYSc7jbWD6NMnlpOPiz6Rq6y39MoXfHqOX5mnSweWCNg70PgiV0NIzzl5y1%2BGEF553QaNeysEVrCqIjWbl2Eaux38B%2FbPMIqkpgMO6GxObo8BVdd1rH4pAF4stJjNfAbRMLQ%2FQUVmPkL%2Fk6iObaM62Lqn0wIERrGzZLrE5Q3X%2F%2Bhy0oAp7NGAQLZ8wxpXIjb9o7QDstuH0xg0LSREKzNo5bzq1fZ4OW5K1Lo3zqoPSUl7m%2BMnDhIAxwb9iaJJDDjw3C4T8iJqhLsSYfM6aSAH0e%2FTCTefLxz8rURuY8CUS6e0IXYAsDgJOHYvJIo3Vp3m5lXCyvEcWi6Ybu%2BeY0s0oPFAENkDitesxP0HdE2FGnkq3g5%2Bv%2BHOIEHW%2FaQKRuURl2x7betig3MfARhm2hrAFRPrd6uG2vnaXAUIRcoXIgZsovJCIh8qIa4QJeZtZ3BKyq%2BVsBGgjO2IpTe7FTeS2ZZ%2BhPumojyHAQKTMXDEt%2BL9X4mfpB1KEQzC608P7h2KmLBy%2Fb92ZEX%2F7Ywr4PGyQY6pgHNXxmf4VGxrQ6k573RcjZDoFiC38Zp9X4lYZSU6g42Z2H7JFHC4nYuD9TGYz2y%2B%2BX5ObL9X%2FyfGF45YT3q0TmAyCPKz0nrJCFRMmhn96f%2F8Pidpm8%2F3glhzRQNZ1SHw7eEtwBH805D36N0TNxnOh1B9vlHF%2B%2BOnvT5hRmysANkf1Qoc6Y83cl55ddIozzSfctWGwAGIAzPgr9TogQX1oN3HuZlOym2&X-Amz-Signature=b81808e74310dae69afbfa78f2228374578e395749375301cf9e8bdb303a7664&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

