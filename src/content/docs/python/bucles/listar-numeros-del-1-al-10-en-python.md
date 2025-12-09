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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645RIIRZH%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T084020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyy7z%2FilAkAwF1oBvJgUwCzasti1xckbjb2meJl5khGAiEAs49GC5rK4YcqdHyDKcjXCsInnv9a6Eee1rtBcZltjAQqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEqLd9mmRYZ35d3thCrcA%2BvOlsZ2IDero2G1sjlUHqHTR%2FciTGENjIUo8OlE6hwpGcaurYGJ1Ax8y3SW5E%2BJo1ysTrQycweQPu%2BTUHA2UCUWc3ZlJzByzV6WNHBoSqe%2FDXdw%2B3JTV9k%2B%2BZpQfKNGey%2FHwSxd2vP8uZJGw6YyKR%2F0%2FphPqXZsctjqx5k3hpFNiDUsg7Tpi%2FBW0qe%2FgCUXMaEthZJfMGCUx8z6CXsAqLLhqacQh3nObBHpS1itjaJD78zo6RQPG7EPWqzkAM03xUrc1b3Gt5OSl%2FX750JR1RtJ1cv9sZk7nQkXMEfEcaiS3uOci8esY9PCXnG78T01Q9P7BzG6VcwbPqyPV3i%2FggwbKk3r8%2BwtlpPVSnyL9%2FdlKDqInh%2B9CV52KDnVUsdl194oE5JkmdQc3UTbeCKkL5ddlEkzb4Qd8C%2BzFoRIsr7UfUTstKN2nwG0PA0uAGWx%2FNsQ0ZdXig73EhT7b7DfUWnE3QJaWvFbu4JRNXvRwKjYGpUe0H66OLOq%2F%2BWZYbtCa7aGWdByxVQOMg5V9wnhclwyWHcgUYBxlthNJwUhKKfvr2%2FgXs6cbqu9jL8xxrGA6AXlMMycu0U64LK9ZcAXUj7YwHkDqP7WqAbz77%2BlzgNG18qub6UAdaJ3nHXsMMik38kGOqUBe7Icux8%2BlCxkbfuSx%2ByhKbcH0ylFcG%2BueU47QEnKMjWoquR84YQ5oZjCeYN%2B%2FLV5OROZC12gbFsRTRKSxo7S6nXTt9oI8B1A6U6lGo9SpMGhvL1IhX0mkMjDSCjf%2F58Z6IdnxFfwJxBH1zpj8IxFYmyrYBSf1rO5xhkLwieeB2Q3EwS5h5Px1Rq5oAp%2BxJimFXMvNMQ6mx96yXzoVQHfkV4SF1wT&X-Amz-Signature=31453214d0143a231c82651093e0778ee4a6f387f9f87b918f027fda407b1b92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

