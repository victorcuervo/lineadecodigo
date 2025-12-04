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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFAQ3MAO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T125642Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDM%2B4oDO51HAr%2B%2B8Tcc7GOY3KvRTgz1vSq0%2FnJaj9yZwwIgLeVnRtsmJRP9hwyhdnT7u0Qri%2ByvMFN8nUaOIqfoyIYq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDPjLpTVFLqrIeU0ZtyrcA5VGXc8IU51KhaP045eOSE3P2k6fChgchtkFxZNjSo4UFaBa0wKHP3XFcIklJ1AR2p80hr1VVFHxwK6NnlCkZHuJXWTRwlEFyygDq%2FPrzwDhiAj%2Bwe1S0gG9mTTZRS%2BZ8CwNET8h5V%2BEq4I0uuGNf1e3MLA9%2BQYrf9OTwYFgraU%2B6uKTVEHlFGwebt2Gsx7Ja%2BTpkgazs7NSpz42Q3JtfYwRWQIkAS9Vg%2Bzp9YND6fXlxYlUecGAzrwE1eWNZe041zdyZkMFT69V8DKybJLOtiHkHRwVHHADRtGIov3Ll%2FUxJO%2FV17YjttCgLEb7ZzEEs%2FMy38R%2FW3qzpI%2FhICg9A82lvsQdSpbxgIyCkYSSSgnvJl%2Bu2UG88%2FKM2pFsK14L8Tm9Z47rleRqLDmx5wMZHeeqXV5xTd5xu%2FLpIBxMdyIwwKtxrI%2FzNO1oRilBq%2FhcJpN9z0GcvajRXiOyOEzmdyDz7a6n9hgujwTPebwgZPABJhSsUZ2ZIJGDhhA8UePNlKQwayFfZP%2Bmw6yVK2nC90daWRX3%2B6%2BUEvB97R3nNgqqcwtjCeLY8%2FRDV3DfB54t1a0J6gCFyaqERWKwsrGlTJimKivLUskF6JshTBwsGn26pPjCsIvsOcNrupSsMLaDxskGOqUBVVQafZcYTx60p%2F5Qek4roXhGlRKNMUVbf%2Bt%2Bs2PJ7vfG9tYd8M02i%2BZ72Vi%2FJLPP7%2FQc9oMoehMW4i6choViyq1vAGS4CfvKdTulr3KNLZfms9qgK6oP2%2BXEUHUzO1Cd73HtOntPQzQx0vg54sWmVcwMw%2BaNGs2wo%2BuVJiPQTDLWJDy4DzYhUDpoC3hgSexcmYUWd4alZwRGJC4Xii2CeMhhGwor&X-Amz-Signature=0a8426efa2341a94dce432382ab49b1dcd1df5f23a75a6df0ed2fcc0cf6ad177&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

