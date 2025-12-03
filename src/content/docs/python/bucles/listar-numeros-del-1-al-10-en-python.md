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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PMZO7SD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCMew6f7u%2Bw248bz%2BUobTzX%2BpVQXvTKazhOWOzwbUjljQIgMKrhS0p9wDYG234fppBtOkLdQSgH7YEjoHwTPdeUxlcq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDMA9uRWm46aC5PMFpSrcA0dIycW3CgY0cVk8JQ7R4GvJOF9S7Vwj9kd8Jzsxy5VJbIXXsfMlHmUOfXP9PDxOqhrvgB53Ls6g%2FN5P%2FFVnhUjG3%2BpHyjgexRTbpOnX1ZD%2B9EjCyuIHKgIPAMYeNYV%2BwRJkMC74wn4AA4iQVIng1oipcx7L0IU2XRVWuWOMA7FwBJ9P7ujIwxyNWDgqB2KJzOM0RZhyB1xQ2KOboQCoOfqJpu13L55XejDn5vCnF2CtqVgg%2B2k8aKOr0X7sc%2Bra%2F5n3O6IUOfOCp%2FPjNtKsRwvsVKI3fljOUz%2B2OJ%2Brc%2BfM7b5VoJlj9%2BUh0KFLAuB7WdQwd4M%2FdPdZoEqGj%2B8mkSQFN0%2BZ9hkI7gnkT1gVkxQ9mH1fMnDbTf%2BmG1T7O2eJC7wsOWhGEz33FItUoBWh3ivnye9FU81JKYdKSXFLxd%2F27%2BxdhSYcSl9Erca3kM6Inwp3N44QM%2B6FEJwctWpq8IiAhkxHzD0C5TgZKRqcbYMU5zNTi7ciTz3Ex9H2XVKMnE1OZYQ%2BH%2FsEX%2BGg%2F%2BqtvQWPfx%2FubNJf9ohDbLn8H%2Bd3WGsEWnnOqVYxNvTskz6BRLQDCmgu9kRFDzfXlDjI4o4JgeINF7Gk%2FqYgWOQLfR3O7Kwuhz%2F%2B46L5fwsZMKiVw8kGOqUBn4m%2BdfD%2BweYX%2BMyY%2FARhNP5BNxiueFQBiN45XpfdNOaSvXZhQ0MBca4p%2FsQqQzUGmugqFsGoDKinjIw%2B0i4CPGb3xR5eNZfw9C%2BNuERyoK1V1yL1Dn4gy5X%2FO4syw%2BhhW5PKWyZVD%2BqdgE1avBOwO3qlypCi3cmCM1d93seMWuva07lX0FtERp0iMMeaLXiQm5wY9aMSmOvUC2xv632TsW8BOSkv&X-Amz-Signature=030da84cd3f6ad35b0fbf8f37858179ff205fe07d9867ea33438409597315e6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

