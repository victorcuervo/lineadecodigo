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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645BXMVMT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T231623Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2FLS8rziDGLu6kFjdv89v%2B%2BuRJtw3KDHufiq7T33gUCAiEAsjbCWAXVryVnv%2BJwEInz5AnOWREVt9Yscots7rzet%2FcqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOh09WbXdAOpZpM3uircA37yNIF92wSgyFQd%2BKRwVrt1rx5ap0XHgFzHhBcjwGPO8TDX9x9NAnb%2ByH0uM7pWwqRSaycaMwsuvyYHvMWtDRYxNR5Q8UkPPMF8GPGi%2B7kGf1JuhriSPeD45eXJWjVdjN%2F8cQsan%2Fj5dfvsPrADMPy6HxHNdmR%2F28SfYYDWteS720qJ02Si8EORb86%2Fo8DGTyCB%2FfVz6cr8%2Fc%2BDBm0ixgLa7LMQp9r2Vf0HlD4iFEtbpRZSCQ600dKI2Wg2pH68yXVM9oaj912HqbgDciTmsPcaMvQeortCJYKj8sij9IOh1zeSo4YTwxgdleM%2BGSS11g%2BXVDDC499oxgLRCXDW7FioymgIA%2F9ADnC6H4Kc9E07NE3UMsdb74StxxKAPO%2FZzFLmBHg6b5IuRgat02kATZBf9E%2BXjBMtmfoFTkGPbplQZJ08On9XtCN3aJvqLUZbu0xEeVutIcTZ%2F1wRt5yOPds7hbWFxGbLH5MZQYg0phWTnKZV0YkUWidp8ihrZHqOWH2mSB9%2BcORiD%2BCbiqvta2kiXdv8A2unQEyC2gP7dkS2evYJL3u3Wxc5byHdPcBZrTtjjfHczRVZ8G1l32bcK0s1vcJnX5BEJ5Ik%2BgL%2BMRAykhs7Lo6gO%2BPH1wJLMOah3ckGOqUBsmcpwJzJJ%2BgyuZM5bqkPEXzZQ2Zb3tscAytqXj6AYSjNt%2FeEAM6wQ8mr72VzYVe7iLRGdMnDM4tRbdGNkqBfNcPG3ULdzr46rKPgRM%2FxFvcMljW7DzwP2FJkcXjn0nMcKWIJFPsMNJ3hjVs1Q4o%2BYSfXLxVFmwsXJtbeN2iNPhb7Q75DASgOpAdPi3SXZl6zL4%2BZykZAhzYuRdrCI3mWQrx6p4Pe&X-Amz-Signature=63d1466851db133f9b7b5cca4d4937b825636265447e5650ee56f5e27d713eff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

