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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6IDUYTB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T235257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH0ijLygxZ2HkNKn5WA3May8McFXI7fwdRWtAIoqO16ZAiEA6ytzNz3uW2qgZhlYSQI4IkQM8Hwrn4qfk8WQEhzFO88q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDDh4fFFEYk%2Fl4gx9KyrcA7VhbloNcRmePQiwZ4JTWjvNpCklAFpBoTNLfGRxELozkBveBTGJxTArS0kyMJGaGbmRb9SsJsMniu11ES80yIX1htX%2BPJ8xr0%2Fse3E2sBoHINaneLiR%2Bh27r6Izvb6h%2F%2B0M6aK6ltw%2B7qcP5yj45N9MR5Ht8D2rwGrZoqk4s1lD9JI6CdZvJ9OIqIZhmp7pRBUYYaNeFUgDZkpZcTn1al4afxSV1Sm%2F1ekc641jH4AqX0GV5m9How51OxAMkRAH5uU4qWQDsG2C%2BattnR1xtLnKFC87eD4kr3h9xdR%2FdSkvHCQON9TiCr8KjtBEyNyEPPAQ6PTiGT7xHQWR7%2FgQA4FKCABKgyA0e0B8KcCytC451dHWsAR2fz50BpEYoiMl%2FFkKmWZSJv3D0Cv5h9HDSd65shLCakBsDuVfv5t6SwG0si7ka%2Fnk1xrebpcm6aIQV0NEvrcs8cdadlaHGosIwf%2BHb3GjcNHyc%2F2%2FitryEFL3iBpuXNf%2BwKHWVR1hkkn%2F82U3GXAVp2hAcx%2BOfgl5oiUOWmyHPb7dQQqIx%2B7OVKO5lUKnpeIqTe81IBJdN3pn1NPP1HymYUQEuzl%2Bi8J0B%2BV8CfkxtrFsLMo8Rhb9zTlmgAiG5%2FHYtgNwgYqNMOnFzckGOqUByCVhYA02ItBeoV55M%2B7SMaSP3xF2Qp6zyLJ7k0Lw4UvNx6FwTJ%2BmwQ%2F0LRm6RZYPJzPuz68yYfXk0mkJhU3FzOISDq%2BmBIFoWQkDcaUKew04LMyiMh42SDQEhjUJaYBaDwcq%2FGPp36xYIBa5eq1ZhFrJ4l%2BI2HAj3Yg6z4N3wySu3VlNp%2B0B%2FyTTf9Jg7MeDZFDYSD4AUNe834y14K5Wnp6ybMw5&X-Amz-Signature=ba15d4f6bdb9ded80831a08ff04ab85d352d34313d45f271b77dde97875f450c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

