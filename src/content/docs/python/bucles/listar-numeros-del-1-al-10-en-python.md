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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGA3Q5T3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T121811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDcjavXYle5DvLYKIwglk9KMSX1HWEMx5Ix%2FUjbeP6F%2FAIgSnXk%2FOs%2Bw4%2BBzpqWJ5nVQeNdrhlOiGbR9Xn%2FqcfqA9Mq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDN2qCktzATS1xWBkgSrcA%2FHcZC9fjVsyLKyjvgXesZG%2FEnGO3ID6pNvy7hLBr9EGTHd22WR1i6vBJV290q7a1kZmkywSQYKADWNZTa88q9uGw8k%2BtoZRLqGOkhkNp4Kwg6RUGPX6U3fAojKp0JEnEV9YRbuu9bZbyZ%2BPa%2B88NvMIEJs20TJD4wZh2%2FcHX01cN4Fo4yQW1pluIfIXRo8onUHaJMTus5EDz3bRVuY4lMUx51bj37oKQZgtm8EFcsfsV6KsjmAWcZSCJb1mbwAH2%2FweTpqnewJ8zRd9iDK24ndyClEjE%2FPwIuv6%2BJ5IGF5Ub1oCfgIxRH9rEdDmdyBIP5012MFsQZbrAVNIHkaivC9XAdGGKit%2B%2BlcEQuHeHp1jChXIcjO7lIvcJb%2FSDY2rK3r6gOPYsRax21cpb%2FWQq5laqAtW%2BAWycjvhBBOAErn4dNhd18FPob5HZ3ky4%2FaD%2BeQm9NlA0YSm3aNQBLM%2B4gTuNOT2A9i%2FkF9sri%2FS8t63xVBhI1RmfZS2WN162t%2B00zhwHIspDxZSxWNRrtA8xuXZkS2fz2v010WE7ozsrUwK6oUJsSooem4PTbJ4osvkmgaXePBABspOCrnqlZnUdMeGi%2BJge3b4uio%2FUzpT912eECLU3DI30BwplZQ9ML7mxckGOqUBavZj5FRNmEh8DJ0wRUIUVu6f7aEaXW6dFhDzh%2FiOIjcJM1%2BVaIIwDOrPTBDONytKcSLpnlzivoW%2B0Qa1qd9kopPSzjQRrzcrrzgQ9%2FWJTfF5HxUTHcBJUHVqo66VtpVUhS2z65fwOTFaqUfR6PQn6gsUsF%2B7WxuKwjsuQVsPMgZNBXTL2ISnh27pKc2iMnxvFVDiszKfzqwBREhr5pCYq523EvnT&X-Amz-Signature=9f3b00aaf17ffd80b699977dda0164701b5be5610cda680d840ced5ae54ef528&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

