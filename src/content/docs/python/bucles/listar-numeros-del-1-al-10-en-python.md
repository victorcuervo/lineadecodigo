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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YGQHLHY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQClP%2FEMYnEGViSPPeclu03EOEE66z%2FSiYenQTyHefgidAIgSYa8BolXsOBWUWhjhBm1vNO8C6XXlP%2FHuWwPmg8CCYUq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDN10QCP31VOQ3QY3dyrcA9I4keWnWjkpvfT2l1LpGysO5wS2nr0ASQvvWARHRjvYVd80Jjzz2eU24Mz5RQieevs%2FNikn8NuqswMAhU91YBKnguP1VU9HOApkQPm6hc3Qbkoi8uXZ0SnYsjnIqOopgRPUKjzk6paLPuUJqjvsusvHEeEFD6YLxVcKAqGdONqtdvtBoGLiihiK4%2FuoZfjZ0BKVRQjk9tCgSl2B2OsQGilhzB%2FkRjfqHYWN8d%2FF9kCyDKOzNTJPHbFyKncl7UTRJHFmVp5rLJ1egEFuVO%2FSTB0wABLIFulU9hXKxr5%2FwVRr0AEmYro57aOX0sdf8EszGMu1isrNLWCzKgAq8UST4TjOVeDarEnBJFZ0iC7Nfd1NYh6cTnru6WCsaeE%2FnlGMBiHsuDXlgBM5ghHAIkvyxmoFL1Klpw5xkhLqiB0YsKki8uKEWvYJ1%2BqUTaS%2FZEKHMrQgb%2FeO8tkCp4eY3KPH8jdTStUtNfNjpnaei%2Bpkt%2BGGe7CqU4K2Euo%2FHFwwk6wGKiInHS6RRdzPBXShdHeK0M9Y6TdkzsVA9ZQFLr4sBxY3Z9fhMa5SIqKUClMN8TtCuN9Zuwed5KBUUvdHKm97vrxn4gBvj8JrYh7JvZ3v1h3zu%2BooUZDLbgEfk9twMOjoxMkGOqUBAuHwEfOjSJbOT%2F2vPlPckCBTLF6bqwZTEfsTtsLa%2BdJKlhuKYgT1Hn0h19sZC0vnVRjyL4AE3Uc5q8luzMxY5dyYjIRMDCIaSL%2FNT7K9AzqMjVs1%2B%2FcUdagZ9HmwzG2kQvLP976%2B5a71o8kPHkQTCi%2BTx%2BMvLonFrcQbXVr1gf7XQiSDp2EhpYHK2HIoNUneJvJaypQU%2Bq9r7ESlC1muQXYamb26&X-Amz-Signature=6fc441d7c351bbe2c1e027252abfe98b2c7d200844388d3b2b3ddb83286e2d59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

