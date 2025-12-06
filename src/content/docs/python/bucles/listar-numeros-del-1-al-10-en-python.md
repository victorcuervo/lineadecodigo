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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GRCKZSX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T101745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4L86FcgQLaS7vAvEGNvO27VqNZ01BwnTubOvF%2BfUowgIhAKaahtB4sQVvNs9U5fyhL5Wxh%2BgmkXIe3X%2FoCoRwVUYhKv8DCHIQABoMNjM3NDIzMTgzODA1IgxeD%2F9VPuOzExDY%2FZAq3AMkYjfIB3yejHbJ1KjJ5oA3aqXE9ffAWvKY%2F3TVvoHSGdC2BQaNnhzABBJbP8kxCverYCpN4%2Fj30fsFLSl22qCjcrbxfz1RXQDcwHmRYyv43bTnQn7Hs5mQI2fkQrfzJlQ7TOIaYtCc956FOi%2BjsnDxryGZ2S8VrhsLnn0WOjtNrVa9wV1Of3JKDJ4fmDLlAr4Yxu%2BNEAsY4cFA5b67rSIviSc1epsvtW7BGjJbCPxifHjvxN%2BugBLB0OK8Qg05KCa0fcAF67SLwceds5%2B37gQnHfyYOKSGONUVGSocMV2oq3StC0T3zNr7eEZD7HTQy7pXabzJw2sxT1RPcSiZhK5hclpGxTKwBa%2FFaSFAyyzyFsVPihyM74QYxgsK2qgc09KCfm7KBzxDM7TwpsDIIYhFbIs6xQR4oguglhGkoeoa93WAtNTjAeR6f9yBOxjSjP7a58dSacBs6MgcNEgxNb%2FA8cUK7uq7hhWHiJ%2FJkC5Ca2PT1nwKuz5kvIjyYGvIAyXcn8U3J8163e5ouI8Rq4q3zJsayduxVxs8rdOeGDHns7ZmDuP14%2Fsod0wanSqjq5nz3DV8qjD7xdBP2kAHOBewPga8SNityiI9cNaxiDXdq8LBryQFRGyRri66gjDH68%2FJBjqkAQbBKxS%2FNmyJP0uPXz291CeC6q9Jor4x7ZRMAJwI9vV2bHgCrZzeYC%2FZpOQnge%2BnRIOdBiAtSXUajoK00xoD7506QoL2yKEyFSuR7R%2B5MUbgKxByqGpuCVUkA26HktnbAeL61PJGYhU9YacQPSVQ%2B7B8UXETbJawoOyoXVvnUeCd1bcbTnT%2BJ9jSRapg8%2FULgC9090bX6bN5%2BkJ0cEcCxYltLpIt&X-Amz-Signature=525e81c1f79a747c706c0e91ca01f58f7e0d512d960db430f7df4511de24c991&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

