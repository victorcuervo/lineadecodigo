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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645L6TVUY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T160730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJTmWXavsGAQqnijj77V6iGX5mvYtKpLyiXi%2BKWoIyMgIgPu63tq0i%2BOmPEuTL66ElZYCVgcB55OHTZH2%2FoikLSKQq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDJianc6%2BZKxLeStOcSrcA%2F11iLBnnyzUVNaLOj%2F068TUlkhEUVxr9eOHGLRAYLJgs8gcrhYo3iHlJPAL%2BKmedZOoQ9Hle%2FZf7o1M21cmF8JWu8smMH%2BByLJxb%2BogjkE7SJKlxsBzJKdtR6u9YK5m6fVZy0nbgvF3JSFFckQDYBHiHelSbfXmvh%2BNVQJprXrUIX7YGVzwHNe4XNPU9P3cEEAO2aGjKfOxawhHE8g6oc2EyhrmL%2FUhYm0%2FJY1DeJpo2UI2M38ciHCM7VEd%2FNtSzRfK6pPa%2FGfxCB2yqJ5ecv9%2FMBE1ZHQF%2FI0pU2HkimhyNG0hjzKU2gMbnIMl60a%2FO3R8FeORZSdDDUUHPrHDj5GT3ZOzD3ZK%2BAzOfSn8LjW8VAp1d1pYIVSyiraEds4%2FuZSiRPXprHVYi2ewKCJG%2BGtSkrxVM0AnZuA7s7%2BOW24xEEY1EQ%2BYjd4s1SzV2gd6eqHcaLZ2ugHqBm9%2BAPviWLMPmGWIERoJvmqaQUPCQkqUqfpspYFPDdSLmLs8fM7VVLa%2Fx14uFIToyUhWuKgCw%2BzOgkM%2BZnOM9k%2Bqywhn6oNxwg2G%2F%2Bwdh9lCsKRK5OCTa9ca2S7JnXpv6DZHBiHC67LJqJX6YDNFVxkB0w2TONfcBxzA%2BF2BP7uY%2FDqDMNbcxskGOqUB4hy3pJD%2Fn5xeTEwtzlxhQ%2FbT2cpZrkyLx%2FdsoQ%2F6%2BdyWnRhFZ7USRfheRPdIrWjrHE9wrR%2BixQodmCYa7J79lX50LhGpRu1HC%2B7isDclMUP7GswE1DOXYj4LImxHffLxBE6Tu18MixXd%2B9rGFwbq6cXl4%2F0SUCxZTToTakXSk29cbduFklh%2FpMSMHTdO%2BZazBgsSg710EbgI5hFrntumTMg5TE2W&X-Amz-Signature=785d5f86c126e71775094e26c681e05699249abf72e41797e5c5836be408e7d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

