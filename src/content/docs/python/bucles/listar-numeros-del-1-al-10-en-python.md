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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W65PNCJH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T003140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIQCdY278anPgB%2BgQPOQf9TUirjc4SCK1Kvg80xX9Kiw8lwIgKi%2FqGerqRIihGqcHKlWnQ5g6SS%2Bpn7HKCl5Pwvbz6UYq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDJl0xPY87jEETygF9ircA%2BTwPT7eTchVeRR3KUj6uxipLsKklXdVUtf64d1MOUuQIaRaw2pUxEGWy98sYKSgU9FsHgwv10XE9h0P%2BXhU7JO8QPt6d9%2BunAcUs5rGbVN%2BZyJMcaheTM4%2F8VlIEddnFk7uDtIsvaxc4yLGRrvx6MTSCUQfvY4gDtDrnO%2FJQW1m6xgGLFsLEEeUMD7o4FRWuiJtvupczTz0AVKKfsUx6Iwrm9gpK77GIPO%2BK2WxqqXb9V7a88%2Bx6ZhJqsIgQZavqiOzDxkC1XQnNzD%2BrEew12qnHfu9vE%2Brtgy65BKChJgIU24LIsGcA64hwFA2iEkaqDyLPGkIU64RtmR%2FWNkqxFG2L8LMvLuMU22PISq0Lo63RXKCOe1eEZ7TUfNR0wSmcFMnpyqr0VkOSBmUxvBpTEj7y6n4IkjX%2FzHnrgVqbJW9PPZp5A0Vagb85%2FZfhMqcfCluJ7ge%2F2In7MSlVnrIgTNVyBiJZ%2F1wegjsfEfQXs4TIqyp4S%2BFgf7YId7y%2BcuwYnJ1Bjfzab40nc8itjnoCQ1r106o7ZE3TMKKCXMKcRU2%2B3ef3dmMcMyCIvKEw6QS%2Byewd3%2B4VWp7ALGsCOExF%2Bj4SfDEHfWU36iEMBRU5dpzTTXZ6ahr4qJoYS4kMJOVw8kGOqUBVXd7VBvglZoXdOj2PrhsRmHrp3lwpu8%2BDW6ZVxLYCyUHX74NqahojV7tGLvOIreMGl5HbK57EKbT1q4%2B8OYmHXK3Gl%2FRwYr97ShzE2lqWlG31ZOR8lhYiCrkgjeQ%2Bup8BR0u1qh%2B1%2BgIoAudfx3xFmwtTO%2BuA7lquKveI9jH7cItkDeS2btTQR3NskK4jxd6brhUjW4SdOFBu8frd4Lduwjah6g4&X-Amz-Signature=1e023f6705f547682231aebc8ea0a7f9290072dbeda903d437b5b7806c6c0ef5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

