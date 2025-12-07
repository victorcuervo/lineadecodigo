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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CPJ4GL3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T071855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgsZEEek%2Ff%2Fmka%2Bm9ioHcEv1umDrZGeIH8Mj00XdJRhgIgFNdrYJHZDqwYCnQgop08y%2F%2BGL9MrZmX3u6r3YCJVHLoqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDN%2BpnHlj6q%2F9ImFiFircA%2FagnGsx9VKzr7Lfbppd89GT3UluOo4LQnPqQ48K%2BEgVfiV5MRiZy8KfH2dWG6rn%2F2FFWMAprhhzDUJuoVb%2BxTF2%2FIxkZV%2FOYMz2ylPAhZYCZOw2AsLHH00%2BcMaz3MMV3ab7jYzcQFBakRl5nnTVdGdguJp10TRXEIcGJ6CR%2BzVT%2Bo3rt9d2w1Z7xW5ZNl1pyPx0jIOpr6QopflvLqt3kVMdSBhS%2FGmAr9HYHl%2BttGwKZx%2BA%2BRSxuC0ETyBQ28vJCDeG8dXPLoRufQACDz0%2Fxkyo4wFES%2FqgA5u%2FB8vC%2BAlqwDUngyOk48fPTF%2B4JsGnbxAND4IRwoFKV4cIns7QkUx3Uf%2FkQws1Ek3D3KrzCS7LMpukDXn6CX%2FNvi4awM6ssipTPc8OToy7DRM8FogMyLLfIn2jVbr56Mht5eqT87E4o7F1VAx0hAEt%2BlvYn0tVi809%2Fya4EcjUJO4tRN0x74tDvpJrV2QVXlApxnLZiEe9qr3jaNhh%2FanDcRu2ynMwoJTs8Njuzs1lKgFRVIp4DQ1gP%2FYL%2BqPc6EUhrZiYWHrHWHJO2Yl58i50RB%2B4q%2BlvW4pftLXYwK5U44izm2twopHTWiIibwmiqLWsUTPwyTFdp195Cev%2FQsLu54IuMKWZ1MkGOqUBKH%2B8YboYh12T3bIPzWYBjj%2BduC5PaN3ulR6JUo9aNs87BPvfxJvtzL0woGlVa0d5gtWW3e2Syc7TQ37FxJi37%2BpG0Eq1%2FGS3nQ1n825fGeF360ceOpxBnOUu08TACGWjHzbo9MIoWLV5wW0UU71%2FB3eWOhjmTml6IM8Nk9H%2BDAaz4GxUeWHT%2BU1qgZIbVe8%2BVMeQBhAaIWm%2FwnqT8aGVMEyPWPXz&X-Amz-Signature=b59475b80e1f6348ab9331bea54a9b5b91296329bca713c63abcba8a7b6d1b23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

