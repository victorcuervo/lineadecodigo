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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCYL2U7F%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T225203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDpIMgHyut2jc5%2FPn%2BWKqdF7kdFIXwMiQ5sH6QqDqqlBgIhAJKOUHsUfUu4UaB25SEkkaCz9v3qIJIjBO3AalVHouR%2BKv8DCDgQABoMNjM3NDIzMTgzODA1IgyU4st4C2zx6shNHtwq3AMYPr3CMd7fhHesXaR5yQdF5urr9xWrug6aK%2B5lUb6Kxf4yqJO4YLVgN%2F83Nmptz9NK9wgvZgf9Fea%2BFJT%2Fx7%2F3Rmhq%2FoejVb158jYw3Sw0i0KvJbQiVVJh9MHmBhOOWaTD4rTdSxNEsCLBcI0hJ5xpjBekn4fJHNiUHO0KWWWl1kh4X2Ucjcw6un3jmHnuMwe6%2F9khojEuU1LF94LBcrhMuxTDNp1UuzQtlbEJEB9VLi762r1fjJw70S3eleE%2BQ1YE7A7fuIpZhc0vyXTQ0r0k72vt4TM8nvLoL8efOoGYcNz%2FiGe7h1RJTFAzSJBZEoyuPNie6DO%2Fjwq8n6G5tuvDekzhOWD%2FTWBCICqbyfDdon5bDWfT%2Fcft3yOEZc%2FKkdhtwf67oEZt6LrUrrXc7FXoh5kJUxZLDh8xM%2FF%2BNpP8IzHjiF%2BH%2BchbOMrHJYAB2e8q0AAfbMHj7osCSFP38fl3yosM%2Bj4s%2FQf25oNfGWKvHaynm8fqSsnRH75AmvBmULOGUEl1BQRP7HjxSPcxbYbKtUm9KzgNaxEn2DX4paNKzZK9hrKXJA9cPTTVFKtAShNVpB0dE4S74uPogIJxBQsGQQWLVL8HIthXxJh09Z2YPBjycWGhUbemmoDdqzDt98LJBjqkAYGS9geoKIAwh8zFI%2F2El4iwFbw%2FJZYxI5mzd83I%2FYdD7KdzLywAkxlW1xCWybaT16FF6B143Px9YOzJtMeqCZwGIifn1j9EoprTgujLGEtqVVqMw2hpQ2PNYzjTCqlVxgTTkFa%2Blq1IWzeA%2BaHjhtWr2cfjYxa%2BVV%2FzpZNXpP2U3rDsdaEd1o44rv2SshkEqjIkIpdAKug8MBnfc5TCzh5QLf1C&X-Amz-Signature=3bf4278ac0b00719a4cfe6a3f7e6e18677478e00d2aaf5e317e2e30cd5e13594&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

