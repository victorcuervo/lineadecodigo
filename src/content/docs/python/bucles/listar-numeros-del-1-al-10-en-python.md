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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6GT7CZT%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T084817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICy5iL%2FIpSDHhgaqQIFu2ss%2F9Srgz1Qbl1OsWEGBbZuQAiEAwGx%2Bshp4L2Xg0yDd3K8qjom0yO7YfP%2BMnRjxzGDLeoMqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGCiBKbZBsfLMvj7vCrcA%2F1vaFk2hMyZMkLhmq1dPSOeZ2cTizWIhhT3FjmNcDDBaJzFp%2FjrvVeJD6PHYXEoYR9egWyYJK23uiQfrPUuqGTh2wSmDjOofZ%2FfPKqj6QqVd%2BGx5C%2BkxpOlEkUMFDGbpjTJ6DiJt4%2BW0Ea1tEYmUfN7psBtVKibo%2FKNBuHMzIuoG5xrzAKpwBuZhZKdRhiG7blI%2BKsAZD64bhVi7earzdQ%2FaJwiKwc9ZNwt%2FgEBaI%2F%2FVFdrEiNYTb%2BU0adqahIEdT7gKXSpmr38VPR02jhA1xM2254mpPcqJlcVmzNZqeG8W7oAdlN45eSM5wniwBx58060sPJcZst7E9yd6XoQQ3OHdY9Gc6NMCwZR98f2bG0pGgBNlRi9seMohldtX0Aji%2B%2B%2BScXYjNrS7rvuDDqT44WJ4LOn8J9hgSYcwM9da1aCErCUmCtwY%2FhVIyePM2DIFEhCoId%2FpGXCAHmNufXXv0L85JPUNuANft641oAtGZmkhZTDBijGv%2ByAEpkz2GONimjHx7bmoTjh2UQpJL6NlLJ9LE7tmUni13X1D68ocw49k7M1r%2BgQLo2vIPZRvX%2Fk3TvgBrYQG48ahZe1AqZDgV8hZTXYVq1kxJzXwXreYPXVEoItvFV8eayTLhVQMIul38kGOqUBgm4pWBR713QtaviZBo1PWtg7qn8N6Qph8H1q0fnPu%2BhcruKEEQstdebPtSGdij3OjpZWOf%2FRvuigGEjP0mSbIanguEo7aQdWUH9s0V5P%2BJu1p2VKiCkDiE4C%2Bke%2BtFUjyK%2FR6e8%2BRGkVfmiXzHMva9dE8DjkOnmMjRGjuhw2q80FeBwc55dX7oX49v6eeVNnRrBTwoRXC5wx%2FDmntu6bZTevE0T4&X-Amz-Signature=e91e6a24bcb000d53ddad36b401a5d37fe07a679b5b273db570049f4201f1b5b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

