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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VFNOU4B%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T165639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFIaYuRlNtpPtIEW5aRPF20m0uccRN3sEPG%2Fmt4KBIi%2BAiEA3i1B12OCNoul%2B3I%2BPV8%2FXtWhO6ADb4teyL5qvMCFC%2Bgq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDKDv%2BOPdqS7do9YPVCrcA9dG4IFM%2By8grN8MZOY9Pk%2Fo0KNFuzocQCC9uapEgGxk%2FHdVgdlM6SrPN9bkNmoFHS%2BV1p3LnXFoHNajk%2FMcYDiD0LolY3IJAsX20OBqeworDSPciJs2g52HynNAeBxjfZuPT3JB5v9Ij9GoyjOtUBwy2QUeujb3er6w0Vk8dWwpR4Q8ltnJIX7wzeBW3e1EJMBNvwTsGnx89mOvqxtWes4PJN4BPgxB5hdFcCfzFiQlRpMGfMiVKxG2vWLzg%2F%2FJM25qm%2FclS5qgrYe%2FSMyP4%2BQCkNLK%2BqwFTTOUSwV%2FiETyvvb4wSZipKxl3Xs6zIvtzGmax4nsF6WkypMb6agkF%2B%2BzKE0t9d9du8cTnnxq1N6GgzC1prMT0A%2FA678ku5dYaF3qVWR7tcfTSsFNSHjKkXJ6Q%2BBQiTrDD2hjllbjzIV75qyDJ9bmmudf%2FFQRNXgsn90oBW3Z3gj53P8wv6UdeneD8iBzjBX7dBKtSlxhaSnwNVP2GSfz3oMXL8%2BnqsXJRcbQNHWiUrSbL6xdT021YWlr2fRF7gLM9nv1ENQNnbwjS%2FpM%2Bxc7ftmBq%2FH2gfWpWpEtjHKaWpbg2hhLcA9B79x3syTveGCEQYKhlt3JjkcAKfJXJU3cmoYiL0d5MN%2Fsy8kGOqUB2zjXYFruPHXVFbkHztpRxxQAxwc%2FiNTYScBzxLHb7Zd8Y6Ldvc%2B07ZaurcJy7O3%2BOh8pzAc23NEfGGPJUFjAiMi92jeGl49dP5gFGfCmOgPsku2YCP6B%2BeBwo0KFUZfRfNC293KaQWu8ChaWPtvD8xZWnnW7x3Hl4xoLFY15KSyFz5BGv1dZPMK%2Fc1Oe6uHJgjbcUsnTvawAjaOkrZDXV6WgeLn1&X-Amz-Signature=9175ecb7e606f32788f22fbe10db889351430edfac2cdb2858ab66c1ac554aa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

