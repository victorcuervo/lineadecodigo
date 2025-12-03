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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N63WNOX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T203815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC%2Fj0XYsjAMKA%2Fvdp0Xyeje2Oojdl2Fh3J9Z%2BidAO1ALwIgcLbRIqzbqVKim2k7dJkm3AY5BJmBIP2xjWduTB3PGYwq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDO0xyBZpUiBcyfJP3SrcA060dS0ZOQnlRD8c%2B42NG2Mi%2FHa%2Fy75Va%2BiZG4BfRMLJgSA%2FHDmKdvcuc0Tu9VWlC0jdN0OMrenTSo34KzrODErjDsaI%2Bl8Y1t9lMYdTnuO%2BKgQPS1w0fX6klI%2BwoKB19JXviRJ4UDfWLPybfNrg4Gk%2BFgR3aaVLk658RSSR8Fk3zsXC0mViTn5XlRLEWS%2Bz5X%2B4JX78hN5KJnDz%2BiYm2a4d4MHwIV8HDcbwREE4kNlcE3gD10E0nRmXEVALRYzD8fSW6Pa%2BhJqIS4WhdMYyQ073VqSydFtDKG8dbJFRgWZN%2FKu7C0VqpSzi21ewfYEt5sroc88%2BbFbqHKNL1ac4Hqsvpf68ZoWA4FXFV%2BA9oWPHQhnkC4zXdtCK1LKO3dWzYmQghDjyWsDYdzJ8ZVh8%2BXiDaOGjTR0%2BEZh0CvN%2B7kMxZ6ygKi6caG3FTqUvYUzoWDh4YwiTBg45mu4thMgIe%2Fv5jjJn4rFoVPxKQSipIaeJwBBRavyLZ7cW14IIUq5mIJnUbr4%2Fkj7cSdecUNrFE9abG5lfCNxsCzflo%2FgoArpvd2CwN0hwdtNgBKTcW180WYvTlS3ipnxytgA%2FtT7DfnwtzfOTikNZ%2B5myswcEQaTdv%2BV5Rd5NhG1WUfPWMJO9wskGOqUBXxcEa8xmcWP%2BMfPJEj99pGohJt6N8zmJn2SY%2FlWPCEE7kiqyHzkYPCAj%2BZq16bxVOl8OAqDYyYjiyfRnCh%2BzAlDmGRLveU8L8CxOHePS0bycj8CFIwjTNAuRif60Y1VCInhBDplP27gfVlm%2FrLoQF4pQMnYxEmIn8EpMiBG1ZsN%2FbFEN9O%2FNYZbth%2Be1DLDMGyigdnYHu2flHtVsiQW3yNBTEizu&X-Amz-Signature=52581c75140281c4b769a7580868bca170fa238b6cdb21110481bbacee964175&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

