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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3LR27KW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T105903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCg0Dpilw4v09E%2BIO1I%2BHGIH4X7a307OQvqb2k1oxzjhAIgQXQpT2XP7rTFxurfNn3wAnkdWxSRPJnZNOn5AU9mz18q%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDIOqbhq6NTeqT7oVoSrcA6ugBKgSR3GPyNThQC4M2EPwdpyu2t7cDhbUPq3EYbzZUdkemngkYc%2FHyuXiPe%2F1dhrADh1ftRLO4J4Cxr%2FH8BJVm%2Ba%2Flm2xt13QJL96kctvAYKif7eFqDxcpviz2hbuN67o0eKPW6wKH2nYD7Iw6cAb3A8YP0mPQwLEYN%2BpCl3WiR9FhWPYdGMEIJgAo8%2BsqrujwTp573uRtxqJDWVsYFwxn5ZiYX3viEF5tBmNUCGJ%2FJyAUUH8mWd6rA3uy1nGoWnJY3o9q54RDQUIkKV0WrAZpMUR8ZSWxlk369ULlftJfyF1clsccrbWewYrrNU1AqV%2BYMDXwrepWrw4H3YX7CuBD1IrHtOSqetMs4ObnA32yrvI78ry1IGO2awZvYYiNgjCuBDXhy37fREvUf11hK9ETNDtojrGck%2B9RIZNhx3Q%2BsU6P1%2B0ji9A1voJSGqUTtTi71F751i9vkJBfOdxxShaCWmtzG%2B1PnptnyulId0eGmVDuqoTJLTIZ05ZadQCDdaVrndXdzrCzEW%2Bri2s5iDH%2FjMPbafaYjJQ4%2FsTu2hk6hflC1hV%2BnN6BW8IdQAaG9LkvxXjS0CRTgY2wzAnv%2FZ%2FfjxbZLd%2FBtl3wbQ7z858gj%2BGg9tqUhGJNcKPMPmJ0MkGOqUBHafQxu1jTPHG7rp4iz85zVo3HajVuZLe01d0%2Br9AJ3ytB%2BhdlvMh0Mvo2OX3uqbcBI1GWwH0sb0Pzye9iXjmLWsPlhFdDROoSBaK7WDBZHNYzw82OCOZJivuY5S3w4B%2Bip797E8AA9T2mkuiqk13vEUKAb3YwIG8cEvh6GvPhbVkEUbYS0dL%2FKjlZ2c5CJHyjsJYHaHZv5rEN5syoPQHfzFhZGQb&X-Amz-Signature=60c40311ac22eb3ace40530a43e5a81528282f8d4a10b4555ad6558cc18ead8a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

