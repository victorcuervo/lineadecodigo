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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6KCCA2P%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T045932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDo%2BigzBNcJwGp8ADbEYYOq%2FPbPhCnTwIvLucS1KRTnYAIgIFk9YTsoZTmI8FT3uJMRXuByXqgx34ZQQ2%2FBZBRLcZEq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDEccLQKi6cH5SeDK3CrcA4WtSVQfdr3MHbF%2F8O1MBxL1srjZ1GqXEQd%2FN3u%2BO94pOkPSjrKADFOaZZveOHZle7ccbIaQQgNVBA5vFM%2FOJglKNfa%2FqUTERVZZl7sMUwaWJ6WHgY0s0QP234j67XrzVxbGH0pLOIst2z0d9JrwzeSLU9p0vc1GIO0C%2BA2QKcw6Uwp2lDzJkY86Z4p04gRQ%2BPEBv2HpoQ1vPBfU2H4aTJZwMR0v9vmPHyWHY2sRYdPP%2B6PgarRhlrQmiZS%2BIDftynGnNRYGGPXu1ZyJtqD0B6sTWEg4AXGENHkq2CbuCHmqYIJh1%2FoSH7%2F%2B6lhzeRRZBZFG0tAkg2RVEIF3jhpa%2BRPo%2Fw0z13ZlWStPNgE4oT8zvAm2sPCjyx1gjK7ruhOlMUvrpbGPMFsbs%2Fs3tcCGxLZwxQmSOp0woVMk9Jpuz65BvCAg84%2BmVB6sBlISuG3AIUt%2BFYrBRJBk0NdOwYQ78w6b7No%2BuROYfwvCw2cHetQmETAYlI5LVQb5paO%2FSsB%2Bw5B%2B8%2Fs6qJ6NmmRrjD7J87tuSY18DPSs4S3GYtwl%2FAPGUJl%2BppxEqBuK5PQhCGdwd2OMkf9hOQ7fPQm54F87OndBAuVe3oLUypJkiitN1UXv1kJp4uRzfu1i0hrJMOiQxMkGOqUByeFtA4qyK58mC0DKoC4%2FxgUAAVRl7fsv59bNrUPKhHZ2YXtfYCE0Sjm7%2FgcBBWyhFy0DwVoMaTqNBGKHW4HZJlxMxudt6xWdRcS4pgLa7XM56saPe8UiDPsquILBl0aueicoKD2jV7%2FevCQpa5bRAH3N37xcgfmyhQC5wBsm356T2LqCKo7Blc8%2FjMf0iO5ET7m0J3MzYsDinbD2MjrhmJCmGcBm&X-Amz-Signature=389405b1c564ba4d85dc9fa21d838f56d84bf69252409d524a6be72ebda43c4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

