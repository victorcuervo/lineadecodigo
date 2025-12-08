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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7FVCI2D%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T085609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKA5NInlYVZD1gTZImNQT%2Fs5EV5icW%2Fr1dfOdXUe%2F8xAiA7LDtUk%2Bqoy%2BrYd%2Bx5nn0lrB1KZVzNXIYpqR2c21zBaiqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKVpRmfxq3%2BgZdS3YKtwDNGDCg215Q0J%2FymBI4tgOSyPrKuHiQfgIKz%2F7hlfHkYAb3Kzj8qFlp0F63x%2FXaNufXzVEcom%2Bdx9oxCvEnZe3wHxQ1O0W1wVzQM%2Brz4p7FnfM%2F5DCBrZgKjZ8g2hk0vyVi5zS9DYoWysoGliq0TBD5a5sHRGyZLxBQHDtDU7uANT3%2FttUawxjn9qSj5ZNwBA7pryOnBe0FgbkPgPp2gCsSkQ5ve%2FJpudXKtsGhm5%2FIg6HNhmyw3r5ajnGt5GQHwrByG3EVAPT%2Fc9nIkX9bWQ00Aam5StoqjHCyBaj23IojmIUGOEgBUal%2BcqGHB6HPXJ8l57mL%2BwQid45CKkuWfSimRvWEMS%2FuCm%2FoG6t88ThWEFzchlIAOF3XcFPj%2BeafaNoCglvjWIdRnqlkR%2F90M7iueMe7t2y%2BDdEJvuEGkl%2Bc0TO2aiZqOInQx3yrgrQZuByDzUZR2szB2V6mZPkIseMy6WvB2kpA0kXNSrNJr6nz%2BTxK82dQZeHPhMwB4aQfxm4fUPFrrnzA3V9p2Q%2BWH4oU9ksEHN8T0p7EymvcSVP%2B31DgIAPbDee259oZCtVcv46MuVkrA4HrE5oYn73otUvs7U%2FGpJTzh6eCRr3NN%2F%2B%2Bz9Q%2BD4yuIzPhvWo1lEw1O3ZyQY6pgGeFgmU8pJyHqpkApuHDP4wOIvbgZFCZqv8SkfOopAYHrgoyaFJmPaM8cQ5fgSTDE5O3IJ1PxhlYuLJRfQLx03okrBLWlejFedsMo0awHTva2u77TnKJ88kWdcSSVET436HQqs1NrzV66wnNq%2FIkMb9wCAIiWlg94619Sj9NEHAsdrXNALH0TGfe0yU%2FHri87KyyItf8IY9bwnvLe%2F1aIixpCQ9klt0&X-Amz-Signature=ece81d22de3366fc8b8a812ba0abed6115551858432717bbaa3c00a348796106&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

