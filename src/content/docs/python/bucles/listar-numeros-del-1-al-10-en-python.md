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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FGCRBG4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T151843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDm5DRZcKVWd0MBXp8v0Ph82aGZijJzCvPirfXvHCiL3QIgO7xSv2QG31DtiuiWoNT%2B3znNgP18bWvMouKlpAOLk90q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDNlOZnxAM1gnu7zMFircA6MxK2HzxUcK7KFVxaXOe%2BWNdtAbup%2BpQxcK2eTTHyXvUrKhJQGoxgNBNGYF5AGl9uKaFH0f24Cn3li6EdZYowvDQnIXIVPnO2Q7aEN4nNjYbZSKczPTxH5sPa1kq9gWn898hi7ZUuaJ57U8ReQipSWqgG4avLz0VaNGqXRHnrvvA5lwrcgNpee49vvv5cXVtXj3ojolyqYLdUyq0DpTY4iejUZg%2ByIS91KKgPdChSuBVw1%2Fwt6ZpkfxBzCNK5%2BLi%2FcaclQRGr4fosqhGJGsyQrpkFNOpyL1ua85oar%2BdFtcM9YBUdMohucrHtKV%2Bo1vRueC%2BKKmWafdY3VzZZQlaJsH5SCwIWuM7xlkodbRjKVEYK6TCFCjgHUYFeWK01A9iX8Rn40cTT9MnuA%2FlySSCtdjbNJ%2F%2FfpHI%2B4Fh%2BEMvoOhzY%2Fpfs%2Bt8hYRckaedILDnUv8iTM7A4VqgCpgqdhv0K5LL9nmoa3p%2F1lqN1q%2FniNKRfo0iykCSf8l7iSv4b0kWA6RuoODAiSORL8O%2B%2FDKOjm6XITSIAkTxIPVk6BPS5yW0GtoM9qMmKMtx8i9V5brLnHpe%2BaPq92gcwmowtTGta1tLnqSsxTeVoNJ52foHa50SuGr9NbDDOVpyz%2FzMOqm0MkGOqUBIrIcNjKWnM8KuOUyEo%2F%2F9fn7ChI6qlvHlMbE4S756aC2RIeBLLn%2FwVYSpa5K7bne4whagtTyFq5dPH42e1AgkQ7n9olLcqOqy15viFPfZNHmVEWQUoX7YzgJo%2B0VHKPZl2%2Bt4P3m%2FNTZtLJvmebPOhn%2B31n87Q%2BUndjp8pjpTODc3TIWuNB6wZBYyQy7OrSBg7d5YxuDhN7RRloXVWXflDS4VZrg&X-Amz-Signature=3314cf98811fe501d84403a88191e50a422e387ea3a434a882aae7b43b9e83fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

