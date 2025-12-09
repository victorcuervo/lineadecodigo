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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPYEWGP6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T024518Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCOvF4Y47XLTdBNNMX9NWyTO6HzZZ5K3J48EdvQ8HZ8iwIgSEqDMLXOBVXj02hB0JytyoFHX%2BCK1N6SJdKlDRWc8D4qiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDKhwr8QO%2BtdQaV%2FuSrcA7a0lYPhPH11D9ZR%2Fk9iFT2GPiZon43xlURuPZuXXVcaWJyqRT%2FX8IVX534K1pQyIkkmgUbznYYmg%2FATdXNUEPrA%2FdCh%2BS4SFn%2FNqj7GIsMwIv3ZTgf8e3B1SxuMimOKIkvs8rTwL6mSRFTn4AXRf9NMKFx45dngGZRgm0Z7d45w4Yo6Lx%2BsSMwq1xnHo2sRvlY7%2BfCO10XmaVxEv7VF%2Ftf110kWEocUiYRaSvmVtjcu8b2NlUGcueIkGzq4Re%2FqTYu5bt%2B6HuNheQEnMfDmUF%2BMJaB2pvmt3tEqayWA3esW2adpmJA7%2BqVzrGuGpX74k7pHG6nM0HZGydUZWMYMHydrZ9WoiuUMAJjl5xR8DbvIyin%2BTWvjnPgcA2XNd%2F6zCZ7SsKYkv0PavtWMkWXsMYf85tWHwTmwDtezodFPrBP7acDoiQA3O9FFw3LfOuvc4dSC5a7gnuRH3RUDWDAkInEfeFOxgU%2B51FcBMBQ6FS5H4Bkbor66t2BFcIfoR941iXhJXzYmCP3pFtsPBOjxN1hG12NC0dKxcFGR3Vdav4A%2BP4%2B3BBCsGBnqBSiW8vnd9UajALDihY0agxrDOOAmbZ6dPt0JYNGQuWLK8NA%2FF0SXM%2FEbGwCN92da%2FUTtMPWN3skGOqUBstvUt%2BZyzcUs6ATcmPcG7AEBsO7O6R8c%2BztK8KOS7n1aX8K4aWUFLzXhQPmMlXdW0OorGS9MTLLghviOWLyjiObT9t%2F8AEB3KKxjepyePCt6lVkxSYKjLm3JNTHk4Cw7JPPK3aBIDmIlBE2MUY6DCsr73axUIJxBe%2Feqn9wZAkV6%2FTzOw3VAVhXf%2BZGbqr%2Ff3DwTj%2BXZjK6WxocTtIzQS2yZpV0H&X-Amz-Signature=be8498f976324f72f483d06fda4d1a850b3529ad9a6a5c0a7284cd8fa7d055f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

