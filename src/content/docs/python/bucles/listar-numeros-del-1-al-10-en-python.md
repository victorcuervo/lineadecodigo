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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622QM22EM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T155415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0ribQ7CB3zaCBY0nNNrKuu5cJ9l59HBd3pdMgce8QJgIgET3v3H%2BX1fw2vMoQ8LbBHaZuBmX%2Fhz7Kbbw%2Bg2X54xUqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK1mHCUUIIPxWcA39CrcAxDfXSmrimO9exIWJTgizBhdwCQ%2FnZs1Kr3%2FeJOOI1%2FWmHrqQLAHs14hzXwYfHwzpyFvWP%2FWKgEcZnRwXPVzintIu59TxcyNosrYFrcZ25EfX%2FrncKECUa2pNFrOGmY6PvCh8k8Bt0nkFqMJ4%2FrXw25%2BCngYwcAQFhbyVUirFAHsJF2wsvzlecgi%2F6%2FWjCUkgFm6%2FKL4SVqxml2fUliUIH1vCGAAjx33bFw%2FCdiKFYj20GtULw96klsuYYEW3Y6XISRERDR%2BtwHffTpoxmnOhxUpxV6hD5Nnbo9s2mSh8Vvyu%2Fb3FAF3W9Z87UaH%2FB%2BBmQQGHbpFm3dKc2WB%2BLJ9OoMV1riVEmfyQ9zZOfPtlP004%2FgxoOxMWvmmLeI9MxFv9GDycnNJ4kr7TBh6tniJJAJ2q71nuMjMmrF9JYFI2Co1tr1WwpNi3r5GT6B5y9mFB47AQ0GYSUrtocx8zTUsQZRmlysLEf088vzt7ULemsww9dtGYP5vjIT0WFVPlC2R0n1Bs2lo1m9fDF2%2F7PTbQVxqdUHuMmQL4mXtaRa7YdPav0bN%2Filr26k2OToCdJh%2Biz%2BBzP2Uf444sjXa4j7oRM3weltV%2BSh3YGrrbV68XKZvSshe3bLTeov4g2%2FhMJHl28kGOqUBH3%2FuLT1YT58kyz5Xcsy9K276L7K2jG4olhzwdCin7G9tu5ekPyNN8VJPkVf6%2FM3zIGhHmry4d2pKGSxBoYHmDWgZG4zJaDDx6XzqquY6ghNg1GZSUI4%2F1V84O8eNOu%2FFg2meAaJC9BSQAFyx9Dbllxk5yxxBa8PgnddnrPPLjY1KHDwYt4A25Yw%2BG%2FgkQHpK%2F2z1KLY31%2BlROOrTSUwUSlYUUNpQ&X-Amz-Signature=471138d4db787fc26543349b5f6c6817bc734d4bec61b6c7e417de5f372f4aa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

