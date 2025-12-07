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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46664KNTFWN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T051044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDiNYlsqhfOSxl9%2B2DBsYZUNwZLNHmx05Q5Dfmk2IzugAiEAo1uiCNKjqo1pxWNxGZNHdMHd1TUG%2BU2p63fOq5Et8rUqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNPAKw8AEvAmrbxtuyrcAxTgl0RI1LOHUM9%2BgYFl4TVpbWl333MzL1cs3n34yx8HUxV2DOPgdbDA4spCUp%2Fthu0JdU9bnWKF0UuxHMIf6wltfljjKXqv8wD2mo87KyTnLSQQsx1Sb2h0trY4%2BcENsY5XQShMFHQsOF3cf8akLKPBhaMochtJpd5ZKz5gHbUepaazXIMri8UbCw0TjTM5H3QcZfl%2FcbGptzKtCFNqt2kOWhHyZeKoS6E4c%2BgJ6AUAA99yoscqXwbdOQY%2FpkK%2B7%2BsggfuODiqDA4ovN%2BNwUGJI8vw4A15wh2bDYb0MBzS7ugnABio24tZDsSFQ0bImMMFQZBnoZZFmOA9sZuvPpThTOJAOlTgXTj%2B0aZv53YX5VhkT60AmcCrXV6f5qUugXtVs0JjqU7ubXpCAOI1cing7fzf4M5gGbSc%2FtjRDbvqJNTD0OrK3zG3tfJImRM%2FBWDIBCd1%2F8hp7X4FS9OHQsI6h%2BQKnB86azby816c%2FAlYvKgKJREnAcolInRQwDyUR96h62kTu61SHNtnElsjLOQHT9SR2k3iGwS2dBc49OEldjEwAjJJpnIL0UfSEGv4cub1gpQe9DtE6%2Br9uqS3kdyaoXKlDQ%2BQgbshMSbaqrJyR75gY%2BGaxXJaMYq7PMPL90skGOqUB0lSWDrjv8XCS7cqEedqmGcrWHWlZ6k60OLVVH7pOwk4tZZGIEKGdA6epLlyGp2h%2F7q57nL%2BgtryEycLND4sboRj90KoOKuKOLgPlAZzXwfZcTrOTEpvQ61%2FzauA01w%2BdVhJunN2kLXpGucuyWtJayEgHfT8vu1ygfiiY%2BqfFZt%2BJvp4U1uKumZdAOi7ua7RQb7GVt7Da%2FdmgGLCgK29S2olJN%2F8b&X-Amz-Signature=43a07c4d0a5088ce34942ab4b73b2f05394bac3569b1e3313bd88ef9fdf3eda1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

