---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastupdates: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R4H2JSOB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQCISoKFeOINaUiniGqedaq42NwEzmv%2BUFKt1yAqXXGSyAIgX9FMBxc%2BvrzvYaDhec8AESGKqNM9d53yWbXVr%2FFlwBcq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDL2%2BLUNGaVHVDx4roSrcAxyIYV4xw%2BF43qvIka%2Bvt%2BhIn8P7QBOsYCNdKOBi0sh%2BflPAX2oCW0JJvt9if0LRZEz0k6qn6GX9ypd4Ii1uLdPWmlNJmr0d2zv2kjRaVoy%2F9aBERQ7QN7RQJZVMTFZvOuo9lvt5dJqPkbLP0lkqkPNLc%2BwMfP%2FWDtm9rVqV3kUbSgSfuJ9Rpj3x0HhXxuLZE3vpPLI63jP8p9Kuy9w00H8YSjS7lT47KCXH4wpBkwVPqYR%2BLheE%2BRKKQgkariVHTYKy61vniH76YcmUaMpL0ncnEdmZp6%2FpPLtxyHt%2BittSYVTCthcrpU%2FTgGEoSvGZh%2BUTRBTxICHKz4d9VhMEKG%2FNzxOSc6nz5cCvkj20w51P63hbZTH4OvM7LNSbfoTtbHeoZbIj3Z1fb1P2Fr2XNtEs3oC8AIlUUUbpZFW7iDIgNf5B0EQ6%2BwtpGMt4EFXAhRPNisAERE2yitGI%2FbeizyBfFEC%2F9r4UImferfijDhyt0S%2FscWCswsSj2oDJ2K2mOWytl6ZRiLm%2FoPmtZ27RE82R%2BNumfN5nGQjjW3qRYAVrzpZTZIxgiTc7UzoLcT8eGcarS3Atstj0CigyOf7LM7LQusQTW5jNVcEh9lBcCgJyOk29jhIyR5VlnTQbMKe9wskGOqUBbQBpeoamZ1xGC3NHaRq%2FcVYBmSByY3qnYs%2BvyQHO%2Bd7bEMJFZ2b1FxU4QsLv6iZrLMPvxGEsWnbs7gFmoN08cFtO5bs1eXP65yjw8Xvmj2GCBEFWqeb5bgl7lJNrLltatQHa51P2BkzBtBaYvigo0MmmT7XqdPPSS3RK%2FgjCDj1r%2F%2FWCtbQ1Q1ggWvG3AqKOr%2FVAOcmqEc%2Fygk5GV%2FLoVM7%2FHNZv&X-Amz-Signature=95afb12a900a8342b8ee5f95d1e9fc913c5e4552047e558f2afb2808fc8ffd51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

