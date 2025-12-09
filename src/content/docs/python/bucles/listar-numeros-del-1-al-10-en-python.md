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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5CSO3XO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T055633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQJ8Nl4NmiSqflFRWzLVJ9Ul%2BbK4Ioq%2BJLRaTupCiKUwIhAJk7P6%2Bb6066mAFbAYWQchh8RBV%2FGnRFafzWSsEMzWoLKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2B4QXJCten0hnPLWIq3APWdsd3eM4vcgmU7Zzpu4cgsMDMDo0zo48n%2Btf91ELztRieMGVSzCIUc5iaFbRggIJxZgjH2F8h9ndxNVbADEpi7%2FD3uSDLrbNoADsxoiXskBxEttNjQuzH6xHT0UnMt7rkOAmQYCY0ITVC8ssYjU%2BhCUFtFkWxM8eaCi9sO0gT9knSF4VjJkod5Zy%2FJ4iuu1a5iUNrLMnvTuDXoo2Thc%2FNZZmi4%2Bflcc%2FJEl%2B5oH0iQFCA3c7F1i8a647dG2YkKWKTtW7ksS5v6RqSs8geHTVONtaZx3%2F1%2B4u2T71A2iKyczO6PQ1JNunWabTa6%2FKIrT52uqQn6%2FoXYUfFlgY55BNIJAosNJ13ee5ICpNBlaAVxcggEb8fRV0pyGlk8m1nF37Q%2FafBr4YlaV06b1nhc0gbUI4qdSwECcgPZb0pmOB42ZAWiBhQ8VPsDu0CLzk3TfIH91OZ%2BAxt8K%2Bj5ctG1FAnytsf5p%2FfYZxJJQJGOaKqYK%2F8SJxgB%2FR%2BHBpnaSznlxaJVWR14BcbNdGUENmZqGLE4yx%2B2CgoiMs6%2BgUS9p7tPNdQmNQFB4fy5tpJdIJw72gAiH1G5P4trbeB7rNJFRBnKiDByGxgUtK4EgYcuJcmC9G6b3rQgGhXtjGhgDDL5N7JBjqkAQQuKSHF2oP3atsdDj%2FGJFt9CAm1qJgKdrv4%2BkWIz7JMeh6sm0QI5B25%2FbkxOTKrOu02ja4rEF4a91OoFZ6YD6lFvieKu2fxkS6hYdgcpmGIAxpohgyec%2Blknx2olKvdzjicCv5TBxqTb%2FOGE1IZJGlKTbNa%2F%2FWk%2BnX6ftM4j%2BflHUtnSk%2B353H5M9Ms%2F1wzO%2BpjwdX1RDaBikmQkZeim07K78FY&X-Amz-Signature=f9994e147be86a94a0fe14d613202c50832a91e0dd6345785cbf5134f95b9385&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

