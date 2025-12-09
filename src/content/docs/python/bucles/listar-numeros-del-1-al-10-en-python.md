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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSAPW6UY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T014302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH7oh%2Fhj4yGh3Vpi0oGoRq%2Ft12E7J3jTkjTykhQaFhoSAiEA%2ByvkyY7Lrus2IHFpzv0Mkbj2S646qUr%2F1csAVELMPMIqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJvboH0xKyUQNQzEgSrcA6llTcSSMwk67jz5Qay%2BFfk1yHLD%2Bsr13X%2FWGfXZWBc%2FcIVvpPt31hTXP7Qcy%2B%2BD8er%2FB8P2o2mvcQzvTy5AV6WmIqCxWhRs%2B1RKrXdcQu4HR6qL9Qw9d2ZdZyBm0qztdGsKOHWkqBqAJj%2FDTPfYJRJisPUYDzmg54ZvLXPeZV1GE8r8YiDOAbh8ErKGCR5i%2F0j8pQnecE1JbGH1w7aPK%2Bw9hfEqKA13FQZVigmFxiJFp9xJ06A5xOYENmdSnSq2jCAmTYhcyuO25Gx%2FON90Ms9jSqZO3sAtAv7bDHkjglPMK1kNW9KtBeMbwALEMaVtADPZlpC3r28yMO00EWfyuqZA3SNZY%2BTsckzplt7i%2B92tNyPkTKU7sq8TZMcBnEVRSBxsBdLo5oiIq48okg82qPCs3e%2FXyMdccLVHrOE%2Fi6VB8Um8%2F%2BTiAyQHOW6HiExLvFQDPGxR94tjQ%2B0NwLJaVc0ASE0DEfyyPfkT7BgdEwJXfHjwV2t7%2BXXigjl2jTUWnFmauxNhwlSVzBt5SVHNO4VwFld4%2FCCmxKymHOsZbsNSyBVcWFtSZ8x8jr7T%2Fk0aCbfABjn9dv%2BR8P4eC5siwQmnVYBiWU39sebusX3ApVt3FSi26Mgzg%2FCL0yPGMPzp3ckGOqUB4RFsmuyJ5YA2S9wyl255%2BgqPo82i1KgmEyB3pTlnaffD1sfXgy7Q3YXmplnyVOBC7w%2BRlQI6UUG246QvA%2Bd6EEtsruRD7Ek1DyDGW1cNJIuUbD3XxmDCOf1F%2B3kc5HgwHL4rD7ySr19QL1X6Kmjy1ujL6dKZ8MHxeV4bR8AFv6JcUwTsqjBB90n3uYYd%2FsdUUDSO1cQoXkM%2BW7yBL8lzHIkDo13s&X-Amz-Signature=e3a07e93a4c8a420d030a2ad75a354d85c5c98014cc719b128eeb0734ba255c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

