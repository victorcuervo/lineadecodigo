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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BMKZTQN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T023216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC3w81DiVJKf32BhDGMPdZTVKgUne6wdZ%2FqeeNOA2VnRwIgJqPp1sXu9aQjf1zc0fjOwrtfsLnGlHeJBPs%2FIRTY5cwqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPWsF0YeCcwZUcEu1CrcA7bRJil%2BG7gFvrxAhkJCAq5xI%2BUOeSwxid%2BBcxAGvWbWY7MgBEKiaP1Me1epb5%2FSl35JFT2pQxKREa9G%2FzS5DW3sZhsMfag4oKkgCKVPWrfM6Ii5AXDr%2F9A2uzE%2Fh6WanP636%2BpX0WluVu83hd1BKXNQbEni4bYxz2MRe2xjmh6bA%2BKD9FVBllv01Qc7CoO8bboVHJUbEQo8akYtqbzTT2dRm1JlH%2BZQGLxigqlDtivnzg748PPS4Y6RIW25rMrgrCUnyOd6Nn6FSkzMutzAAoHyGojNZ1LEiwGMLz5CLly4tLf%2FcHylxuyp5t6%2FLm2%2Fe3pZm%2FvU7mk5ExodoUzzZctx0W39%2FPe09vf4j500OKyHlbVFwiPVyOWh0bJSHnZxfCeaP442wQbLS8OlxLvL80g7Gy6c17hAXaqdYZ4Y3cUz6tMi5MJlGuPBi%2Fwin4fIQgAEhwETb%2F5zaLw2GsczHtYMBzTNo4JSn08KImXDY0eKHO5yfp3AZarqV3aSC9QKg5c0jvLeF7tC5C56eCURQH9un7TBpOU8owPODdHjyf%2F1v0Ufh2JL4QIrLiRQ%2FGE69Nmz4mNhb3Hx8yRKknal5VghMOKAY4uveTkiVjW5wKvGZJtQb7o8pMBWvPEuMMGO3skGOqUBagX3LZHgwhW7PMpMIuVxsA76WXbAd%2BDjDu15vyOD1G8TIesqpzKtZC9wXRz8ZohYgsv3Hiv%2B9PDm8X359W%2FhPbwCjaqGhMre7ZSWMQXGk921N1AtxAsFLygocUA3w7lBQ81xaKYOFmvrTxvajGrHjdtmhc6lf8BfcrXbegUqbVifsDs7RgG2r6X85AxUqX25NfIBxmJHtPyi%2BivqNxRHZEJI7tKX&X-Amz-Signature=d6dd938d35e83681805e8d3341b338896fd4a9f691ba01ac95a24542718da33f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

