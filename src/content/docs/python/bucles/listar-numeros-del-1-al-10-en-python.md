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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EJ7TS63%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T120928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQClUsZ1H7PVjgNre9t9PXoOIUdvOstsJoL7O4j%2BeSDcrQIhAI9Ru743aZ0%2F%2FZpKDkjgdoYoqWAYUH%2F%2B%2FPb2Vae2E75uKv8DCEUQABoMNjM3NDIzMTgzODA1Igw1UPo1zBJxZNfBufgq3ANJRmwEaPjl6OtvDalfx9Bc%2ByBukLcKfzMujhlevAy05nO91KvOWdtnhsld267zj2czsLEUH7mLn8dKBI9q%2FCBA5spX4rw6ftdbOXLq9%2FEacfxkxPhMHRstlYNN0l6hEBIAs274pFRQmGVS0Of3Wq%2FItc4q%2FmECxTEAwxHaxKCsOX9XTSQxOyEEObNqNEC%2FniTfmOs%2BGQgHWR57OpprOzZXGSKtn4hKiuCrym%2B6lBMnJzlw8i9eh%2FWPbYpVqh10s5k5j9XsYR3DEVtGGQNzP%2BGvd4QlxtjtZ8RxB0r08XpSfx4Dk1q5UbNI1pcUXbuLt1L5Ch%2Fy5bZ%2BZB3fwslvQmdHSxuCN2bA2TsoV8EE1dBSyFJ%2BhAbs24JvGXJJuPNLGqv5ku5VFYk1AiwGOjnQOAcOSTebAEWQjxUd2QUL8ANZRR46dqy1Ix7w1kclH2rmQocx5Kpkn8qCrhfYBp3C%2FR8PeDJeTKg83Q1Ox013O6ev4Y8Fmgenb8MfC1V0KYDKGBXXsHpOTOhoqmPu44rRPx48sZsgvLkucSr%2BdUjPRkGHRkEScEHjufOH7HiKBiXPgpqN9UIiuRP19Q8EXSFWhv%2FY1MJ7%2Fj41W05K0Kxg1HPQooncECEWQm8AqIBuJDCI58XJBjqkAZJdAaCp13xve1XFP8K14EJm8x8WFplcUJENLhFSi0DFFhVJTA7TTa%2F2yo%2BUNulG7%2BM3mTVmFHrgdIwhfUTHht3Wo2I7YHMKQ%2FjhUjC9kOG80JINRtBCA8qRrGcNYsHuZuERC4ZfpN53x5eITKGVCfxqfkzlbSdENfqXVvFqY8MVQodUix1mCYqhApTgOAQiNf1oi%2F7A6du1cgEKKVsz%2B7yNi96D&X-Amz-Signature=7366fdad0a60938dc3f1b88dae29b9cba9faddced30bbd8f659fa411f185fe35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

