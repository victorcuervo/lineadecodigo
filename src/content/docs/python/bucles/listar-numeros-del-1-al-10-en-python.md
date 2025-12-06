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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKB25PMV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T063442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHuY3fe%2Bt9QifF4aXGIQJgxGcLR7cmAt3MhGs4NOQ7DGAiA8OOy8RnIRbEMs4i5bdWI4oglOiwaub3T7nspdN%2BmlACr%2FAwhuEAAaDDYzNzQyMzE4MzgwNSIMoR4pCp7w3hAcoSKaKtwD1kh7eDiBt3CIpzAT3qFkOnqvRK%2Fs3V%2Fa291WVR7GOPezQafuI4s0jUD68fuah%2Fv0xPiN%2BGkZcxAI0HK4uDkQrfjQEj6bUyG%2BHgKPMH6wpbhB2OuU5qf%2F34eyTjkEl4nuhKVhhOGE2caoYcOKJLwwmvnbr52jfZl%2Bpl2nwxKt%2BdKdFO8WmKjGHR6A1BdviBzPKX8VnvLZjTNPlfWcba%2FykIZXLApij9juwHIiEPsJcXMDS72RoffgxOYlyUXodt%2FdhOI9Zge6tgXQTfukxUWddP%2B2z%2F2dIKjvGH9OlCia2pE%2BSaTsw2Ztx672sCAmnuIX8eJ0AZYciwFYQGl%2FP0o8rgJlR1kxn0ulBk22VJ4bI%2Ff5te36vzuJemipCjIukyaGsaqJCnbIDqrtiKL19m4Lo3mQ%2BawlX5Xl2nD9%2BVbKiyirGAq21xg%2BgT199YSrXHGSeQ1QmyucUcn22HTtYvM256oIQ9XtiXVNHn6d8DLTdctLFu5k5stANV%2FG%2BTw4gLbOzo5OmIj2E18waAUDZimbOTUfACAtQq1%2F%2Bj8B8RqzXN2L5n0Oi%2F6WKxNvHsPSqtoN2nuSuPp7GSjxm1eRi193B1BLS8hLjaCDEA0stCHLi5KE8pfq063tVpZ0ZPcw5PzOyQY6pgG043jPo0UCyEMB1bQkEkasmbsncJ8W5XhUdEM%2BaBAWfB3lIWpa97NM42cIT5Nlz%2FfGxnB5r1BtcZbqB2cBV6Yq%2BUNJm1uwkaxZH%2FiVZul3l552c4aanZe6BWmQGW5vMd%2FeZfqQ%2FmmiHS6%2B%2Fw9eld5wVt%2FaTkoplZVtADwsf3DBiN2AbMfEzbNLjAcfKb%2BoXL5NWPjJp%2FZNzanfG2KKfDg7aNW6MaPu&X-Amz-Signature=2d9d7e0714c96d73c0ad1a86edc40e8f14086867d374a029dbb3de54e609a5b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

