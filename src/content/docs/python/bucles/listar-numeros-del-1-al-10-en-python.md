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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CULONRW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T193712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDuWb63LIHb59kiAB16YaH7deeoAXNeu3bBXScD3pAreQIhAOwe32MOJ5YLnwn7WlbGtxZNlU5YHnCw3OK8xrECEc%2B6KogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzpAh4WOORBAAipR9Aq3AOWmTpt1BVWnZfpedGcnQNjOk0CqTeayCm3Vo7ldSgFzxMUbTBiKxuNNcwMKo5XhHgBqs9HWqZLmMjKgvpjVWluP2TZ7EScZsIsNGjFNnmVkfPFRtHiewbjuwVG30s7IwleTGLa0MnEwN95SE0oj6nsVE5MSRzthbj8rQGzGrfwu7UF%2B0qSJjo0xXKy%2BPGeVTEfs1PGO46yq5VLEYvwAv1kTeOAz4v4Sh3QOUcnP%2Bt725gkicaAlO3eWXNQKZ%2BYUJ40xCqlHFgjT3fgTPFtKN%2F1OhtVIoW%2FrylWSYF2GFayPdvaY0CfYSzM4xXb4WA%2BcCtkpk%2FydClotYFqa7Rb%2Bdrd7ZuX4C8lsLK9aTfrkT3jghBOiq2%2BA4M%2BM7zlvC5YGlwxx6iViGxgwTVsFlGryTBrXHtayPwUeTKLkOMbfyEzVjm1BwV2bFDznnrRGXkYfIRk1ypwX2aSSWMx6I%2BAzfBLWEk%2Bctgu%2FGEVl62zxEVbTO1mCeukb1LFjTyPBC6ljGK%2Fsu3Ab4%2B%2BIiBCFVNTTBKP1796N25u7n8eRLCSSGMUI1BTPw8kWIEus%2B5AH7W%2B6N7eqTzgs87L8sEUiAcUc2ijAda5Yr5E1Jt2ottf2ekGtpzWroCj60sHv%2BQvJTCftNzJBjqkAUxpPurqgPuLGx5YT6LnyWXZS2QNA2pn%2FsF7ApBtu247JFjGu8TMa0fIAvov5lplRkcmm9cOPOwHZyrklHg0VNVZPYThqHGFcABA0UfpPO30jrsn7QqHaf0sVQpT%2F3al9cy0qrN%2FfXpIFVle4RAqy6g8LX4Ah0s5nJvoHqH3ONqOB9gtcRX7Xb%2BzHn%2FbWONiZk%2FsY9B9vE8AKGFOrwRIPx%2By7%2B3t&X-Amz-Signature=b6fb6b179ed3515d334bd1419c638df8042f12b735d5ba7802d7a4787647438d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

