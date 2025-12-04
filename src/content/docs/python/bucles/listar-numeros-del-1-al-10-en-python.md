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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZLQV5MY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T053955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQCutx%2BTVrwtxwQk1wLafnnMyOlXN274X4NVtY2607LvUQIhAOHaz%2FL8wQdVBgcLyHcGkj%2Bc9mUzpzavUUYOz7FgLO%2BBKv8DCD4QABoMNjM3NDIzMTgzODA1IgzhPdWWqdF6k4LKV9Uq3AMGcdJ%2Fn3kDfuCpcumG5h5oOrN3O1fXDsKNUcSQ4mrT7nmRsj0tuixKr%2ByF%2FE2k2Y%2BcRMkGWZ1iwFfp9HAnT3uT2HOWpr9VrI3eI2FaI2oVffFRuWveCCDO2hkG2iF6%2FujUl5O%2FD74v1aGRUIKdfrkYlA8pBVDCBCFEVBGtj%2FNoxTKqyo8ekjbPTaAhgBb0yqCPv4Ma10N0B8pGHqVe3Rtl4%2BDOLhlWIENTdxOJQQ37ajI%2BLCt7T1kB4bcqqTZITYCp674QUhRKAHc9Zp6N3G9cDx6UKJYVJps0A2sCU%2BOQnK09cfmgt49rrfcS9TURzSOu8%2Bn%2F6eIA%2B3cyr8TBOrl%2BBtxyHFq78IpugSPMxDz9oYCjc3B0HNMBRpHrCI0pgUMj%2FEgAirQW6Iu0Icsc5lwj47e6vlSmFapQQcVFE9rAIZF523gUrmuR0PIgb7dhjiiiJOhiFzDLmgB%2BNNnvtOQUKH%2BeV7X0%2Fnlq%2BUmEKphBodhsVruNLQOJ69VzMjRgZ4qTzBxk5vQQ%2FnsOC%2FfJaVYXZA%2BXLwFc8eIPdk2Hmv%2BKADS5becOmiui2rn3nlRldTQ2teGH9LSlu%2Bl29Eo0t3SdTTDi2hwRN6MY%2FSaJzyLByXMLp31IBz9FB7vB0jDjrsTJBjqkAc9G5nzHmYmbka7wF73BHjdaRVCRkxeMjq41i9HWQ0cGk5ovE2j28nchtZZWiIQkR3dzmEVAjd9IG62K4rkCKsn3XrlThdBNYuJcV5nwpK6%2FFwWxg8RJJz3NZTlUoCNl1YiCcKG7gBHE5UP%2BeNIiVLE92VftH9i1x7fh7gz%2B1j8lRD399TJuP1gxwCHcgWY3pRDJy%2BEib8Yneulb6U3qcABxl0yt&X-Amz-Signature=d44290f8adf62532228485bfa35c66ce6226e83ccbf226bc62796ccb726aa5e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

