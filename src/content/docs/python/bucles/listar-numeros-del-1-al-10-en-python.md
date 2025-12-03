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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULW5HM2Q%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T230832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIQDUEvbM2ygVDro7cpPHATTaRYVWnMcK06VhmFwOnszpbAIgFJxYEU48rdsweCkM4rEeYUbGhzG2%2F0WDW%2BMmTZguBwMq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDHd6ex1h6IJjJrWOACrcAyFvIPv5Wi4%2FSmQCueA9GRJXm0mMYMowK7AWvzOoWL6ed2juCD0iDDY4aFpPvzJb0s6Nvvij%2FYitMZejX1PubSIIci85mYL5H5P%2BqlHfJl9G9JhxIqqVzWNiU2In284RVzgWpgXnDyqFqS3oxy9z%2FLWVI6fwOUTdnY9sVidLJ4zJX5Ax1F0gv1aVDO022Sx7BsBgIh2mhv81Ljx111T0y%2Bb0T82zS6NAHBuHCRDkajuapQezxxhKf9Ynasimy4ce3iEjtrGW76Qzg%2BcxMyq%2F5AUGeIgj3tOjobSu6rCRsH6lA%2B3Cu0nQH73vIChMvHZytjzXmGyrK%2BN7llgcHpRnATTO581X4lBYCItV1ZCq3749E%2F7jd3bmRt8MgsHXsxhucyddNmbUg%2FfgaRQ9bpk2O0dkXIx8vNQF0WKgVKDBpy0kaoVWlKpwKY1JWfo%2BT8FiqsatOilrLOvC860N3ReUj2ryV3D8FVINDYDaQh9vgnDpV9zkCOfBi%2B0MeesqHe%2F7c7cvADCljREOd7dbGh2jQpXLePlTrVbj%2F%2FmVgcBTWTyaMNNqpo1woqyUmW5CgLO35kC4%2BIfjnQbZdeeq%2B%2FP0qWHCfv2OlZrIrRTrWqFkCwDoDw9cEtOX0sOznqeHMNT3wskGOqUBEtZCuuG7N%2FMXXJRD4NL5bPNneeRbApqfIu7DpMkEwifSk4c%2Fkey7EWLzwhJ%2Bi5EsGYdMS%2B70tFYz608Gvw4i6TQ923GO%2B1UhgJ4DNouj5hP%2BpToMjmAiyVf%2BFXCWrVoTs5%2FHUmiChQ31RQUEddsXAeCztRXMMUgwHWTVP87p7PAkeef3XtyKtEyLpXUd%2F9ZToTVE2miuuB0giI4XKdjrIpOh6ren&X-Amz-Signature=c559a1ff9a30b469e5e9a301a4d5953607310f54668f1fd00c7169112e1606ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

