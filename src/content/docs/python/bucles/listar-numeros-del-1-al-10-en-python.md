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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBVDRITA%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T004753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKwIRJ96S8oLI%2Bt1WxgBoF2UtR3NlZ2iyEvvPvCA7gLAiEAj6haG1bR%2BWqPaHoNfPLjp4FwW2T78oia%2BWCYChydMO0qiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLHCajik586mWj%2BujyrcAyMULKI9XGxk8cYaflVHrZhDvEVG5L1x2bCk1LSC80q07wMFU51k9C0H4fFgrh5CqqFIA5HUdpjCI%2BIc1RQlltly8Qj%2F%2FBxXAIdfcXJr7hs4acxvpONn84F%2F6PX%2BnX9mm18pXSiEuSShOnzAlHKaay3pfPRc4RZVGEjIgTjsPRMgOWqSobB5eoTmcW5yijWwWaITUbaZqqTDx2us%2BjHXcDyQZNw9pz50pPH%2FQtK0gKswQM%2B0NXQzgC0es3q6zAIa%2F%2Fwa5Rad5d0ODL2Mt%2BwbUuJAtOGd77fwTwikDC71R4i83Km33LKWoPuw%2FWn9J3EvFIpVRC%2BqWdevo%2BKW8zQHd%2Burs%2F6TPTTeeWO2Ogr0EXr%2Bu2FwqRMBpC3STO5%2FrWTZz0bjbkYrCWo%2Fazdn59Q%2BtG5%2FplNiGC%2BkCvNR4oNd1Zsdke3rjgpn5L45yf1T91LYI6Wgdp9sSi1ltE3QnMXB3btdInVImAb77aYyYBKsCdWHNOvwFP%2BmX4oTMfsP4LwSIVi8ETzVka2imnEZrCja7xVNDUxc6FfFMjRJid7OSRuo9A%2FXqHJbKUewfi17Ar1xcUO8ZegvgiMFpObIpvCZv8zo%2BG86hzWdLbD5mz7GuZTmRsn1%2FM1mjsnxQc0fMML%2B0skGOqUB0Dcn7CES5TTdytLHLIfXf0U4BrOjzJP6GFlo4TD5KnbUdfSlk%2Bwvs73dyNoCZ2XvZSXtrp0UGTfC0rlTkZD5MCrZtDEuo3do6cjyTyGY0HXuo073ru44MHvOyInCP31G%2BFOqPqDq9rh29ylj8Mfkhx3kJQNsO95P5QecSqCqbraLko8%2BscepEd%2FYCY6pRga6wJvP9WrEeCcuAOhPOTUHP4axd9TA&X-Amz-Signature=935c03b1a41227d381a4708918ed5d0fc43580ff10bc2cab9cc26b7a4a516ef0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

