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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S55TVUTN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T212310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCwthy2qOUeQMF2ECpSHEGyLRJoJhs64haB8qlDDe1j%2BgIgMmi87nocTNPD6UPUuiy5plima8Y2NLjD2BqQr9NsE%2FQqiAQIlf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwzesF%2FQcScyL5d0yrcA9uh%2Fu0rW3A4yvb9ryNf6z6Z4SWVLdpKrk6rfVW9VUHxdJ3l41%2BDImAOqp7BWSHj1%2Foc297%2BU5c9hgsdN2Osx4ctC%2FxUG358HdUCM0p%2FpFpAW3j6EE2qsv85JWMNrAIm4PkwYIO8j4z2FbNr%2Fc39kwxo%2Bvp6%2Fis1BEwXck%2BeBTzN3w3g5bVyJlSbUz8ANSuOkk7n8SAGxmPPaTA%2FlmPBUiilyFo24BvG2Id3JypOpER3smoztZP3TtRRx2C609wkhDc0Iub2%2FrCPZ6sbdQapLRFveYr%2FXzUd51Lz0eILZgVCo6Ha%2BTYU2wpOT1NdG8lPrrqImW28d59X6bclHRF1xo%2FfNDiwoJQ6ftRXUvdsyM82Dh%2BlU4UQSM%2Bczsx2s13APdACHcCcRsRiQDC2Y177BH0p2M4jE1jm2jqK%2BMoaHuuyK8CR%2BiuR3Vagl4yqyhmRZOZc%2Fyd%2FECCb7x2dpIewP5gJ1uCoSUhXMf96K1jZ1qLbpFYKZKfYXDEsNdSUGh521eg25i7YhN2MvZiQFNc1zFtTmw9db4CryIu%2F5LYd%2F4d7OU2%2FvTwn4ZKbqXnfUEzPmp81zvP3xVHZy0%2B%2F79dqzHlgJpqcJMb2lmh6A6hW4aS7xG49NZTIvBkzWJAgMNHH18kGOqUB1F4pTyLqNZgkwWDs0i%2FwfeW%2BQFdSamvYNiqXC4N76T582TfYbmFWgM5JX8hL%2BKEjVRbb0lcEU4nCpWyDnOa4x%2FcHTv0%2FmLw4kLRpALcyUTkv8K11fofH4evE7PEojYdop7v13sLlLh75pCpGyKPsy43gNFruiKueYPD0NlIh9O5KxpF38jHOOPVVnxBbLCKPPvF%2BO2cFYI%2BqsgAHfeASjKBCIrG1&X-Amz-Signature=dd7d5b5d3dfc77833799beaf8ec39abaa2965a77ac14cac5473738372ebadf1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

