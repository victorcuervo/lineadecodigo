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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RH2AUZCG%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T171841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIApfyS%2F%2FgQGn8UynpoFKT6S2UfAwY6lj%2Fsa%2F8Gy5ra%2BWAiBd4TsXL9wQc%2BRLK6%2BUVu6fKja5gZKFytRa%2FGRtVAXvCyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMTD1gXgyxo%2Fc8C2pmKtwDtqSub1EASOq5kOgdYs%2FeR9s%2F%2Fdf6GbRKcmwZGdvLO2awUN8CIqcB%2BqsRAAU%2BSjwcgZ3O1%2FdcvXMEQzBuWdvPWSSgcZT99FX9nNP7PyDlp%2FBL%2FuD45X1oxUNPrSRJ%2FRSPyT5SE8ZRBzhQnfMkM0qWATCEstKA6qkFZ2K8GmrFDctlRa32SR2Zuh2usi4nxZi9Cmofx2m%2FhRUe%2F8oLqqVLquSWtFzDf6huGYV%2BKizNzQEyzMGNm7c2ZUp6vFrJhOh2pBuabI0r2y2Ygd7LR2pylLfxylzmdk18P%2BrtMUhY0rEBq4GvP%2BcYQiuWNlpyQfINKDw66jrFw6%2FmjwXIJYxMgQ%2FNUMKxRfsmt9iQUULQkX%2BlS9kIB%2BL4wf%2FHkE0EVlgXndMWtELoGkxU%2F0YMvSMXqPpFHcHRS%2BIz7ZgWywo5gdlI4nGzj1CYexnOlQyWyLxOaG4n6PEbjgULXfM68fuP1tpmV5Dr%2FRcB2AID6LSiXNZBLB1D3a5hZMl8%2F0Jdw3OEkpap4eDbnv3K3xr8Sf07rYp2s8FdRb5IBr4OLY5%2BD1AFad4RSKk5OGH8I4LcdZuFz2ew%2FOSFiZLK1eKclzZqH%2FIEVRnv5FdzMHxMpMU1xSYViAg2LkhSjzxmeiIw9%2BnLyQY6pgGYQs7QKZH6y09n7DE%2F0r2DtQ0Rv8J2NjuApVzTYcKbzsuyFlXrLzauXVKYMCZpWzvnht%2FcvJ1%2BoRaqw3Zd2bzZRq1eV0HntdRwKJxzCHmUAHG%2FIPEH7WxQE0ti7nuQfYAVSn93gf8skbPcycjrGANnpjz%2Bgu8LtgDz%2Faip%2FLm5z8v6JA5G7xQm%2Bs%2BWpKqk8%2Bt1yEEQGSQFtK24jaHy6I013CrqA%2B%2Bk&X-Amz-Signature=36b7da26c462863197f73d7a6d00e8023cda338349db4ada56649f14e565468b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

