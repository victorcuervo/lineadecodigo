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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X22NXPPF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002652Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCw6BpXjXEX8f%2FWLp0l39J2KXhWpsNWto%2F2FzzY%2Ff%2FfBQIhAOUmoydLuG%2B4ydI%2B0gCS0dZ5xf11ZuNIq7oqlo3W%2FQFdKv8DCDkQABoMNjM3NDIzMTgzODA1IgwjQyktUjZ1xo0lG8Mq3ANPj%2F3vqW2rmXyWGMZf2h0oB0Kwg%2F0qWoZj3IcJ8ZBq51Qf9iIoulnONk8vLcmcQuP3X7AhKB%2BlXYb7avnW9AS4anzSB0EApcV5RDmsTBWvEvDlPMftQ7ZWRx1f9J72Nrb3hEtjb%2FJLzGAyU0RoHbgfsxkty%2BkQCLc1rC62YeM53lQSo3eamDmIsdT3qP6sYDe8UaaXmUnpzXtVLylCuhC1strrZ9f7J8Eo3Ajqj0ArotxMmE54QJ5OvBM28PTS%2FYsJkfbSiB9BgXfwZSHQ1c4KvixT71W35OtqiLLDh7Chaq3n7fDnAUEGyjCAUu%2BN3bHu9TZXhmG1PhsCBHFvMdzoXvGNZd7fI3o7isbStl2SjOKIl07%2BcxYn%2Byw8jd4qM5sl8aFGbyH6P%2FCgd%2BTveemrIwhh1IEmZ%2F607WAc1QQ8%2F2coKkilxr0WLaAOl8YUt4iFBqHtRH6yUpNe0GxcJ1GmeF9%2FZNdO%2BHk9a91KRZojgpECkJJAJBppZcV59Y8VZL9bDvxhQA6Wvjhm5lLz8gVwcQYFOTcFavAuk1947zXOONTHFUvyvDsjV1m4egnIUvc4VRET8%2BX%2BWUkTn%2F2HhLWz5Ypx7Na7jkEV0Tc9DuB7pVN8Thht7wxCdmh7fjCTlcPJBjqkAX3FG0%2FHgfR36S5tGN2kXlJTsfjY5U2WUFtg4fF6ISVv%2F%2FhyUlh3FTvZzsjFsW96OevEGedyy7K%2Fnv1Qb7%2BKTf5Y3QXvG8uRd3aZiQ2ZtETSnkAYJFukBzzmfbAv1GiMUabKtuybzzFWX1mmD6HrfcttKR3KwtBD5bRKPD70X1sZIreRnYA3e0HA0L02qHHNGajL6BIG8WVrNUX%2B2GcUSgX%2B%2B%2FrF&X-Amz-Signature=8c4909b1d967345f5558796a280699dd4b9ed2fcf4d7ff543dc6130c343aa318&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

