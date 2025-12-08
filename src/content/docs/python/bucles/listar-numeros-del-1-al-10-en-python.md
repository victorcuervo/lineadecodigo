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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655ZAPVFH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T010855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClx9n3%2BYlpDFmst6Km3GxshBbnBdfjiQ7WUHiKS%2FnK1AIgHxI4irld7N7%2FAFJSLijivArc7cNs3ULW7Uv%2FJNaHR0kqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP5YS6nWZJ3WWPBnWCrcA2OnOIR2wji2svlnK55TnhaYumKRAr94v5QytL4pac0fMWUVk%2FrKk462HT7FdWROuzwXV4uuzuwmFy82CIVQxo1ep5eCr9dDHrYqnNCtz8k%2By82jyBF6X6o0bArTZV%2FfbtvwZOhTdullUvBo2Pw%2FynsrwjnbbrHcg%2FltY0mbRsYhQ68bzPnA6ATWvA%2FS6SzyIH5EED6KlaOQ2cCMp1t6KvLyPlPdMS1b1Af3tGVydToG0qox9plsudo%2F%2F53zAqCN1HEna4cHq5oiimDWASRH0lc8q7pLlwxRwHU%2Ff4rTjiZSkgM%2B0z2U0tzPZLtE7aRmbi9T1mAZGdAosjPdAsC5NXeahb4X1px91sjIbZ%2FKgkkkKRpY5vpzzsvZFeNzka%2BT4ZuKc8N1qvUlWIbbO3DM1Dm5y2cIYuDqnO8ZggropBxd2P3FpF9BqOHOS4uTuQwq126SUiEH3l2ZwtBUduRmQUKirS0x%2FxJHt5AtGfMH%2FedHdTmzMJnhz88A6fTbL9m6bYA7m3OdCIrISDnDfagr131hHN5Q449a8ESQQ4qNV1H3p9o8OdlikwcMI%2FqTTU3wvW3%2BxI6ApqwG3wRBfbpY9egZDzj2YCMgFQwWmUJNTTg3zR5ophfe2lGigMGfMKei2MkGOqUBIjvppwMi3f1xlD9EpNcqlCAYFKvMRN2s3RvRrsDY479WwT%2FSjFdFK2aWlUVDlJf%2FlWkk5S2JUDPC4CFuNX15WoSeEbz8F%2BVkVew4bNVMpkIVuQu8sKM%2F7bLsKiVsnivGS58GCis43N7mVSvgBZhMAXN1cRbuZkOf9R7tx5Q2OKKMiNPaD5wCAVvfADRskY4NdgM55pwD%2Fq8v2akub9FZqv9EHH4a&X-Amz-Signature=7cc7bff9e1be79807b5598dd861aa96bba81e52a027d292c8afdaf19c2d727f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

