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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDGC3VHR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T034553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCAfzXtxX3C5MScAkli%2FFyk07SB2WSlkhU4aAfNyEiQ%2FAIhAN2jK3RSYjGF%2BTK7eQe2247ofNt0Lv6px8vrwjeYYqWwKv8DCE8QABoMNjM3NDIzMTgzODA1IgzgRSe2gsLaLLvdb8gq3AN0w8EICS0CUqovV9HHtlbRLsBGf9ORzzPdouGP1b7QkXYioQ0enCXa4tc0cWCUqpvy21yjatRQoMN93HNo8pUksx%2FLg7%2F02yRZBaLNqHpWvL5pE%2FlyduKL%2Boeba098PuKt9%2BKPvIH8FL48pRNEEnYvZlF0KWwEnxhjRx2OhwRz9dXWI%2FZWunAEBNRYfzamassYpAGy0lJ6FbM6eGuM3luKpWIuZZbHf7g2timQq9BqCWsXi1k4EQ09XbuZw%2FysCxRRlBtL%2F1ZV75gxHjvOOA0rWFLC9%2F0RpvnCo%2BCjv8PHovgrgnI4q2p04uDvjPhHmFiEkT4h6APVsJl%2BUT3SyqQb2tIejzWK3ucNKuO1Kb37GvLxIet9KQDh8JeFAV9v7rq7TyDvdaEQVI4sSjp8S2LtkRvXaoADN%2FxqQ20tgNPZCT%2BgDeNJ2%2FLclCC1btGQSLiwpTC3TMlKJpoEWpMctQk73OIRKvGiUP6zvQ85B8nT8hqmj56N2eWhexTa6SrLL8u75lxYp32N1OS0YqJzcb1gnyCNBQR3g%2BUJBGuTg6sw6Ul1v4wpMHiKjjNFHL%2FC8vFFpO5pUfSGhqtSC8yKcSRxgVv9VSr0iVXBfJWDdESwEsDUzwBooqTjp%2FEOiDDPjMjJBjqkAbvnEgtyqASSKTUR6J7NKza%2BNbii5CrPfVRiAOcMOhHw0aN3lb09QjVBq%2Bv7rytAfZb8ilSSaXedkV%2FeMCntONFH9hBv3xLDnb1iRv3Wrc0IW8iiTCzwGsUpLBX9Bcy3ucEW3Gebg6mnPklAI8%2FkyrSTMDP2%2BZtAftNzrnYN6W3OyD0XXJEZE%2B3SKgYGooCDSAKtvGU3%2BTtBVaVTteko9GkiY6hS&X-Amz-Signature=856ed419456268f604b78102a491e267926eebc691440f33e009847762d078df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

