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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBONDRKH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T075718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDyMHob2eq%2BsDGH4W9j6dG8SGR9hzYhoWMuSHdjicBQwwIhAPrqAKQxCx%2B0cImOs1F4PdTWLjVdhf4A1Uc3290tGMPXKv8DCEAQABoMNjM3NDIzMTgzODA1IgzWk5YnwT762yw4EGYq3ANkZ55uyQlj2SNqoaXK1S%2BPZmLvNJ72%2FqVmR807KvfJWHGrTN1emW5nBxlKQBNfMTRFLxjcnIYd%2B5KmrpQj0DOPkunTz6WUw9gZhJ9xeQvhwvXBP4jI%2BsdoiLZjYQrkBdA4vhPLIwUkzQYa5WfCVTxPkQKBMA6rub2AHQum6nd25uA%2F%2BnDAPIhj5EvEzADnkxZBlaVW1hUk5v3N5WMu3uS4Gb2YapB7ib7LdOIaIIop7TfqG5MIYlAo1CILC65b9AF%2Fi5glKDs%2BH6ynFgik0j%2FjqT1nwY5UB2RxK%2FAh9I1ur%2Bt0bhaKFzKL95L9kwB8NhAEDrQtcGpqFtDrhElaW%2BUg76j88e9NrXVinoMdAgaZbeChfvt%2B%2BOXWWiD%2Bc5Mcgn5tLrlS5e0y1LLWA0t1qoOcPYlJhwAAgx%2FNDp3da%2F0MP8x%2FGYJy%2FvgRiD1fNXe8zaOameADKBWOtTtlPq%2FgxPc7J%2FMDjVjjDmVUwS1HATD%2F82NzzhRz8qK82QOq2XOecT%2FDUTtHi8uBbKFgB7o8Vj63HEodqg%2FWsyRiZf3YAg2YZVKNv%2F9tdTSa79DNtCp0K3tu3YArJqV0u0eEgd1ey0wc07cHx3WwtKHMzrkDa1xwfib2infGy5CQ2u335TC158TJBjqkAUuTtUlPcqwsPE8juRjVKmPC8alFWkRCWhO997TU0ZOg4oNjaTtrrfIi%2BvYHrcpC959XSMTIpA%2BRDQWMlU9hZTdeVdNJCsv1X8MO5n1jlMq01%2B1yK8thrHcRvOx2qNGUEFiujaUlYv5DreKJSfkXle1%2FDP3L8bD15nbc%2BMM6SL8dCjp1EenaSgXDi%2FrNnfP8%2BG%2F2jrzLxIYD%2FSJbzHFX3eqLPT5V&X-Amz-Signature=4ac461f7e80113fdcf0ec93c84a220bb5a906228cb926fd8a869aa7f67215d36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

