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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCLHNC3Q%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T085646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQClHPkOmMLVr9iFzuyZVfYLxdfDMUBogAI8asG8dYHF4gIhAMNxcA%2BYHX6SB9TVv0pR6gVZ4UXUQwf68L6P3fsC%2BwS9Kv8DCEEQABoMNjM3NDIzMTgzODA1IgxF%2BNPKHsC%2FAm%2B2THQq3APk5%2BqtBpSdBepTZhZdQMxyxq7X9Tw7AkyEdV8YT2Wo57thOu8EaVG6yZijgu1qdKbdgG9AX2I63AwUXvZzEL3mNbFiNM1Jg72SKUOcQw9%2ByHf77NOFY9hlUPB4rRhIokk5qX%2FTED0E%2F3hrTvnQdza3D%2Bu%2BCQg1gfkn3v57tF%2FT0HQaM0HfvKdHcMaAq1igLeKfjLoOXgSOAiDiN5p1Ibpv3tKk2X8iv0UEEvxdkL4QL7VvPu6h0Ps8rAdE%2F1OVfqF8f3WOI%2BwgFUT6bXU3xzE4TppXTtxbC6xzt6k68%2BczidMHNV2tGsBMAADC%2BU8W%2Bk%2FOp%2BWcG7D69ZPgj5O8XcK1MRGHZyY66Z2fG2%2FDuYFBgZpUpscoX%2FC7OHI5hIhDkMFccWv5cN7f6m%2Bi7KnXNs4iKm9VASumEIpz2gMjlKZ%2BWA8Yk7onHdDJlgDA8b%2BCYTocn1D8xdITlUayGUqqfV3lIyHDXiIjJhOUt%2B8Tb4ANf1xmk%2BWKVr%2FnGeyWjUgJctng9gdo3uLg8B9HPJWV0hTrkIa4RQ8WxrycG4dTAuZvYKe2bBPhEpDa1dg65skFIoaJ0KUc9tzrF%2BDtSp1oGRsaKvHPdYCLvHES3QXlkiyLpvIhhQEt1EOwyb7K%2FjDhh8XJBjqkAaeyZB5fNe9xn910%2FKVjfv%2FN14PBwZiAgFKJV6k2eguzFLvQSS3cAevvixiSppDtAFnXCLGg46VhrzAf9VD%2FWPc2weHrdC%2FDRyQLdpSCK91V%2BB4SJVWK%2Bk5KWrKBZcy1%2B%2Fp2e7cjjbzMJKceuuSZYKqxCLx0GkZGGCcY6dHQ7tPmKV8KLwluyqMinPaSDAeEb9ko9PWbh3%2F%2BjRWMxI%2BytmOwc5nH&X-Amz-Signature=99598d1d731b2a9a8fb4cbe005d45aaa8f43ce2060bc97235b27d7e72e443ac4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

