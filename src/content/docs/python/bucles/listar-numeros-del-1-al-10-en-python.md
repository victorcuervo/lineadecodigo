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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWMDWDMO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T220817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDaC0YI64%2BCWwNbn9dxazEwIBbX8YS8kF0NzwWa9Bp%2FTQIhAIawBzWn%2Botf9oRhJSBegWfRIDKLx3PDIYOhjd%2BI3bCMKv8DCDcQABoMNjM3NDIzMTgzODA1Igz%2FbisF4oeToDVs19cq3AMHktCoSzrDCWronqDOMELIoq6tg8v%2BlNIY6UXMFtFqJh68jib%2Ffk9UprFAVETZRGMWgSsWhP8ASJCZzU%2By7%2Btvu2wI76VYSHDyQH0viglTXzb48tPQJpQ8gzQKfNoum9dY5y3f%2FwX%2FE7dmA4wpFoH%2FMqJU4negztPbEgytNisJQAmnq%2FPXZ9RPydBOyJkL71YiIfjlioUcPW08FY0E6BgyzP2wdn37Qoj4bX9HVkQxHbzoKbAWt5ByPUCEh7DXKhwmqc0TxRRjbCrWaBWK0stVRWswpqiCE4CESeWsFPbr2sS6%2FqwYsEcdqKmbXptwl52PQ13ni5u7UOco2uk5q1p4w156JZiha75NXT2dfYan61O6bOPkL3N%2FSG76draEE9HJyOywRI9UO7cMu%2Bv%2BxC1eCualAX8bMhtbTT06nQg0Y3seQ9FLrf5fVONxzPpOsbKKtCBU9nq1kEl7DsBu8zoOivV%2FeVaZYSc6KGCoQ0LBq8mGz%2FQAv62CvCsvlmKggFllz2lq8T84URBGEaznPVppICozXSamBkTBRVhlwCNz7CL4TDUloDUd8Zx2jH3XKk%2FPRGXUirOaOwkbWksSQWGi1eHf7ckJNiMEdhbXbXcaazn2Ooh609RjZhUeXjCj3MLJBjqkAbRqWtUiTCCfhoxmr8AOGc%2BCnXJZZ6FUZXBVLZDwAeL9vOYUcLVYj4awT%2BPppB9Y7uDBTxjlIVSPWJA%2FlUsKp1ikisMoDd7y%2F5rKjPrLSm5L%2BFDf8ePB5YVFSdl%2B9slLuWh3HN%2BTkq07kq%2BtA1hw3csIa7geV4tyok6Lj%2FKGlh9GeKPuD7wIkb%2Bn9AeyGSaaf2EIHegMQYs3g%2FK0yhsSb%2FXMJLL%2F&X-Amz-Signature=0f13d5fd3c9be72839f882e53e3a33425d456742670360f4a51485218f201e4f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

