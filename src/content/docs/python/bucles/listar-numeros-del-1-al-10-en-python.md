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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CKTVNAN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T133633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIG%2FqbqTue54Ri0nAXOztl022%2BYqPe6jLWGV7C6I3ZxgdAiACZWxsZzrAu%2BigJxxfaL3fD6nkIjfag9lwx94GaFi5USr%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM%2BsSdHTAHQN5eQMI2KtwDWzF0Yt08ZGEPPa1KH1m5Mh81J38M4RTuiVz3%2BxT67LvP5IybT1N1FSvW5503CTqhfcK3rPjj%2FIgmQitKo%2B2r6qHE92xsYHjdT9ErBaAmrA0iJzS3hponjABl3l3huzr77fDHbl31nCZOD0OSjriurEPQUL9%2BCsg0yyWb80qoL%2FRi%2F1ATm8tQrkzchvBubmgA4ihzmpchTyv8ZH1ajbxKTCGGLFaP9nccdQ9qZkGaaHHrBiwauVenkm7apO9C42ePNfSKiN%2FkIiVcxLx%2FQX17oxgWnJXmDI0T92Yu0Q5KmkGjDHhQvzN2M81HjiAQHpHLhZeNV26K3cKFAVxlnAPPujwv1hyVMLhx6wQT5I9Lu5UuuCjLiL0TSeBFvSffpJnEXKiz8VK29epaGsAwQ1T1ztPhHG5zV%2FZqlVw7feNnsUgRDxRa4sTTfn%2F8N1uQfgnrAmp62j%2BresjH%2BvPVl4EpqcedRb4uy%2BAMyi%2FCJ5rKH0j2Edq4AIZpaZPBvQm94Mydyaqw0FGvfPWZHGkdnlzKj%2BiLsCRzNB8h4zrtcUyDjP1NakUlE1QZLKFDG5CQ5EZehQxF1K8EYzx8E7uGs5MpQ59vzK9Hx8u%2B5eYbRL0K4FoW0sMi5iG6GKaD%2Fegwy4PGyQY6pgEv8wZ%2F%2BcB%2BQ5A6xq6UEcEMchArqWwCQ8EUB3V8%2FyeMDvuj8kYvThezy%2BwFiMWTEmtagmcb%2F4JFgrURiTiVb0z9fdfYdEaw%2BBjbzXeqi0kHvKv61I7PLN6O8%2BZnI3e34oHkmUB5uAxIYi7s9nSAVEpQ2KJRbFzuJg27Jba22Rj%2BqArjnjVudffBVHb32FFvz3Px7EurEik5gC29D%2FJX7MJ2O%2FjsKmaB&X-Amz-Signature=317c37e0d332badb0a8d3b9a5cf1b17efeba029d03af5cb95dea448f5b467c8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

