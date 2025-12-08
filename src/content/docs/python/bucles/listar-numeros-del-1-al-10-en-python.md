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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH7QT2SG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T001418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEHlLfeePXNI0Xj8naZQRsfU91ytEkdg5PVU231kxtzAAiB3sd5Y2KWN1ks1qxLyqU7WUnZD8Y%2BILey9w6vxyNcWNyqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMgCVj8uE%2BuMT071X9KtwDt1qTduH9eBSjbi9JD%2FtCXcwl4CBIahVoH0GB%2FQ%2F7cjPewndQDVq5fwk10SYzfely8R6xscAm%2F4HZRen0IP7ctj8lELKzA77wh%2FLD1YELYS7%2Bb9EfeR%2BI8Pp3DtKdHABx8lokzT01v1XbGx2b6qCiQC2rar06xquwDdEHnXIJQ8kyx0WqPS0281Untrk%2BQA3OUAVoNoUslwNDM5lkD%2B6gUBMStC%2FHvUch7G8%2FrkbXWQ40awjLV7N2FqVbystPeODw3S%2ByHkbKzOOrJdm7LiELgm9dNHB1gNUti6QMZqlWrD0Gg0MoSlgWKIuFawDSz2w1pIHzvSAHCUyAQ3AUHCSVpZzdA4s6cSO4owUwVzVD4c0OD0nI2xrCsGhM3bOlTeSohzSSvvMcpuy7OhrDztNzwSLBG4%2BBBXYHZHctO2gXfhHhz%2FUbkrTEPkZQFFw4B1BxwySxgXBHf1ZkL3KOwqnR1iTRtQWTQhQ87DrhI9BvPnxPO6cPjmeXVLy%2BpxZfiJy8mMuUBwv5Demrr%2FNs9TAtlBrdhgoHtFmiJIrByM9aK9cGunnSB2ORA2%2FmqWdys%2FU%2BI73qTf22FnsVRfJ6jMkcHmuum4MXmw94h4euvei5TW0%2FbSy%2B895kBLKltgowtqHYyQY6pgFtwVX148fOC8rVt0FyYjN34O6i8AUbfZkx6FW0YjhkjgnQ7Rf5THfVbBXjONBf9U%2Fvcd33%2Bpl3pa7hBCHyPUEC%2FNwmTCHYjwYUB9H4qsA6CuowA8SpSGx%2FPyIcAlQHgJuSR3%2FTVOnFtTOkiCecXdgJjbtNTHa86wb9eWROPOCeT1eaAQ%2BLEAZziBboQaJHDz7Bvg6sbEKbv78lsakiMf3StQHP%2BVPY&X-Amz-Signature=5b4ab7e498ce9df4494099678c77405a33b7d748b72584db3340c06e2c39004b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

