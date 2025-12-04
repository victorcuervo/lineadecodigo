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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667O4TK74A%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T075243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIGz5iacj%2FuYSBezpBCItNT1wGCo3aRA1VLG2NxYfGuaMAiEAiYLB%2FIeUNBNA491M9kYJ19QnZLZ9CQ287PwlC1VvuRQq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDBa13%2BfS13xzED2IJCrcA6JENYBh0V0yzD%2BLiZeyDKVewuOl2buxmsVJHRDTYKvNUoqcV9BNkjC3Jh4Qbs2IsPMfDCHija21w9DgIlLnoowF%2BrvfB%2FoCpFJxOaEEw%2BQLoQYvvBTdHbzq9SLXZJFhrhcF7q%2BEO0gGjUAH0m6BJWc5%2BRXz%2F%2BxFpz7jkLrLtnTNAfEDFT7%2BtQS2uEDNs87wmAS%2BcUhyDRY5nYDeuZBvCD32gY%2BG4o3KPyjEuubFddBikckM3QuKNwWyDc7GsjTy0jLfZT8R35rRfhNZORLae4c12N2g83L2DYyfyI24f2q3s7JIPZm0%2B13vBVTeib%2F%2FFnYJNqHTa0xukWhWgv4MQuetjJ%2Fx1l2p39zPMqqUPaIWUvYCzQ6E4PkNjHiYXesD1DCEyYraomiOjt%2FzJZzVHlH5lF7sBsqhvv7rS9s3iy6eTz29gmu7VLVpTOo7YqcnD9lTZLG%2FJE5fiCV2ZvpiUK4yJBJO7b0AXYjbdQOV785VGHGx2esTOvfPsbZWppc8TnOEcF58YIvkJ7R0eH1SX43ujMnUas3oAHC5QMyTUwEW46XBM8JnkSmtRAxhAiaOomWyU8LjzCtKvfrUhzi%2FnXbOokLIPWqBmMczEw%2FYBv9hi6DV59xvMaiB0xR0MP7oxMkGOqUBwZ5oMab09CG%2FwGy%2FquVz%2B47My2OBEwoIYiZzo9QRGPuPO8p02wsqrP4fPgayU3ipSnpHgl89kcZNreYPvQptxR8kYHZM04%2BavZPf1UT0VupQcUGT%2FjE6Aab41u9FvyP5CICSEH7CKQWb0VBVaJE6j6aRG6yfZTyexBZfQSaNnN%2Fi2PPr0El8qBAUkcuSnQBk0VUo9AAkDs0znA0YVi34oIiHuBH%2F&X-Amz-Signature=582765d9c24a0ca0017116561d1959903ff7aa75f985a72b2974ed83f543ce49&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

