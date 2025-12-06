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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MVPDYCJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T225616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3di82Bxj19HOsr082vqpv%2F1A5JUHpQnRvopaWTBbBhwIgIFDNXd7EPa4xmatw5fKAH0x9CWNLzg4xQjyZT%2FMsbakq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDFXXdeFT1QKmZesCKSrcAyz8OcLOwKUo13eXtVNMg1DduvIs9DuA3EoWnf2Ufmjfxpphj3UHK8Q1fWxZI7IWcifDQrk57esebfcpWM2GIj%2B2vKTT7PSKuFlos69LUIuL5xsO1CEMGf35xupyKfdTptdsHPNJw%2BIJuClEo%2Bq0Pcm3wwo8a7P0261LZOpmqpipaoeGDrlIcwNB%2Fenh79DARrekCkUcvzJsf7Seewm2Hef01OiZdismUKt2SjuHaeAQHwWsC39m0fP4knIQuaej6RAr7%2BUHYQsacCbpyXZd%2FshizfL8nuOK8B8y0hdU6yUIpUnA3QXrG3twnQ5DihUpcTdGziYL6mx1mOrpZWTbE9IS%2BA0Skung1XS2lvuxRns3TUFgzUbHJEwrDaQTG5CueGjn%2BBOT7DBLMgHgYq2tzmExIBi7RhYkUBge0CoAndxm7Y8kf5Y8sBkzB5loeeLrgY6WVi2tr7k0M1qT2Gx%2FGBrtX0vKpMZQqBYQOAiTNeOy%2F7JuH09VN9ID%2BJHdWJQWHgSjfv61nyWo3ED9BdBsmZmCxdISLQiQtyxUVEK%2FGNBvkaEic5Ktstxo%2B0MXorWrhVlmQpGAffrTYlxJ9bk5CV0sUwG3Dz5vj1itr3nVMD%2BLBODVnWz3rlhVWAVsMM3T0skGOqUBMCk%2B4I0LA0sfiB4vMerZVl0tz4SFGhw4BvM8FPBTHiGCoihaXHn5VB7%2FcA9dnRNC2kPzl2Or1UWVDfFH08gzo7Cc3wtw5RxQNkK7FA%2BoX1UUGrwpvG2Z7hgVeKLMB%2BWS61%2FYUTFcmgsrGz4aj2crzGsMGbsENqXggpmvmtWJnwxJ5LlxyJFNjMaG1PTRSLQObFtZzMrzHwK5%2F2fE8VFTVgTyptg%2F&X-Amz-Signature=82e56280a6dd4cb9ee28f7c11109f4cf29ad7caf42bbf9d679af8d8793102eeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

