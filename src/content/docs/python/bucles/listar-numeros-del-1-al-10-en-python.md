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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHCAEHIQ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T004151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrOkKVd1o1WbmmprDmbNQZ33ZDnpvCS3swRQHD7LEVvQIhAM7%2F8gkmzihpL8HaAvHrs0f%2FUhkuHywf9VSR7R7F4mqBKv8DCGkQABoMNjM3NDIzMTgzODA1IgzxVIXOg4DMvTA6pLoq3APq69HVGO%2F2QrvALfwYmmLNgGJyqsXOOjeBNf78%2F53iyiCti2rb%2FhoNFyMqSNDjDaNo8GwyLZyvsq11sv%2BiDMwguOXGDNDb6hD6uuDu%2Bb0BaWWRfvv7TCgiiBmk6%2Bb3V76723qPyrM5Z2tgl1tZ2DQU%2FebT1DXdoQrlCvUMH24lP9ishEJHFF6B%2FghaGBcCMWv9DzbJ%2BX5t%2Fc7o%2FC%2FmFx6zK9eGYGF9%2FDDn8qdMqwrA17zkqdl2F58E1WjV6W5LZTA%2B0OfgF0lqk5PFXeGMTDnNAwGhP8qyrj9F8R1i1D7ClTABUbbLS%2BWsxvnsN8iBpuA%2B5aqGNbD%2BmOsR7j7OpGxWDxgn2x8c1pWGneo%2FunQxraideYWGIl2QbBtC5xvop3lg6cGauDm%2FftoTjeXZR0P4qO6z16mZ3fVqJfZ4yRphgKKeXI4mElOT5%2BnbhZi2M30U%2FxprTFU%2FQAp1P1aJzObms9qZDBXVVJ0qEmfKnZKJYpijPAz72LExQlRlDtfG%2FWfEufMdiAPCcSDATeHW2hzejjRoXDceK0DhZKqprLZtdlhM5T4%2FJunupjnEmdy2tu%2F7oS0OB2POU83B7gPy95JvYkne5%2FnAhWSRGIV1qMxaQtH%2FdUYQbJrmlCznwTC16M3JBjqkAaTjN5ACJ%2BcXza%2FWiRjapLWSroWBMrAlj8BztQ1Ej3QG0d%2BGBxrvkhRdPHX3LGY3bCGIajH3LAOQ97Y1xJ4pGNtFHjBK5BLu%2F1dGhdIeRR9z7X8q5r2gvkxoTlvMK9l3%2F%2FS8Qv7WT0EwXzAUb8jfN%2FLgpm1%2BPhfUuML%2FTFuePpwGYwfBGf7zUjcDBPpOSPW4Expot5BDkCcEdNg0nGgxJPcyWn55&X-Amz-Signature=e8a4593101786b63ee5581dd95932ec5cc349876ee3ee5a7a7c24b724bdaa763&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

