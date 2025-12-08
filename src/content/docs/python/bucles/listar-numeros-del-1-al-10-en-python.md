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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRX5CG4H%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T125601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVXF91MnPZb3SP%2B5KHal4qcuxNR2iPF0g9kW6TWT5KWgIhAKJo6I7gZldSonmzAISmM0jphg2pQIsYsBi1k%2FulWbuAKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGCRPMLhd1sYBrEYcq3AOikYdV0Rmtn6zp5JSoVyn0Hu8eEDEv5XgpYzbllyaF1zo%2BcigIG%2B4GYvKCdi1VxO1mFmvRFhAjmVBHTF4WJZYsOfD37X2Jc3qW7fxV9hCGAk7r%2FjygBf3V%2BoukVwTQp2nwib%2FCde5EQEUIsY8xLUvnmw%2FX%2BvQHng%2B5TQo%2FLHNOQ%2Btez7dWhpvMc3%2F%2BbhsKCDHuK45bY3Fj%2FArx6s6yv8f5K%2F71bcJ22oFgcUFepaxcWkRaXi11FD7cDxJDffZ%2B446Zrf7gMmpVmyrYjdi8wSV80%2B610LOxhkWd3HjGrypakeEnY4ruNZa%2FvY19qR1%2BFJVbrv8%2Freq8sxy%2FEhfc5MLRmUMg8aA0dMANJSdWT6J7EYCImkyek2t8ds3z8VSAqV1qy9utq%2FnDZNnEqTsZ4YizWaQy6t2cia1qs%2F7H6ItC0vNCpavHp7kRrmvBgUC0CTpEITAJUTquXAbf6Wd1GfJ8RJm5QpBPzuAGYAlEGkiAmOyzJZ9r8z8GeTEaDPGmc8yf319AxeuEuLp61bgc9pXqsQowWmqizMJr9Zu2BJqYpjCyFto69hU87SQB%2BTf1a3c8K92N%2Bw4ZOlU%2BpMCsrQuOx%2FeS6kW1iEi9SbzIi9bbiUjQYmDE3384qH80CzCukNvJBjqkAR762vTTUeTBMQO2Zh2WT%2BAErTO7b2%2FHZ%2B4cejeHENJRrF4Al83cOrj9cZYzaRfoBXQm0bIyDeNk0grhW5StE9s4Gaby4mXK%2F30w720y08t%2FMIcm6WDs4bXcOC9S9c38eU82hfFfzLlQzERUM2zTTCsdNORCmfXY60D5gfR0BLPdtinoLguThk1lZD6ZmHNjIHkgZdAVoNh6pp%2B69O6cSMtnc8mu&X-Amz-Signature=f0c3be53c170d86d1edfed27acc3c7791e3de5345d1e65637ee0d3b57b90401b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

