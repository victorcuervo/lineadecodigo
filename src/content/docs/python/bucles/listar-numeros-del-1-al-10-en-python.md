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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663AORRHBP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T161241Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAUYCp7dbqmvBbM2cwwV%2BVCr6jtSas22doHu5rsfpJvmAiEAp4dfIl6zzmdzRFv70ZpV8BpaAhIreSjEV79Tq9bQDTAq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDArTH4DJbj%2FznNnN%2FircA22LdCWalHAy70bAK5uR4n6JDOV2r3aQZEiuY22JCfFjtUc9i2kDSFgi0fx1LkqPRC4lxiD%2FFY6O%2Bv6UMKCznumqCW%2Bs7n5Tofd7n7ifTGWd4irtlkHSc%2BEbynkyObFNZd2j5UI9tmLKucArj2RsbAXfrSRP0oWgO7BgNqTuZXSVexGjD0qEQx2R7t7XOqxGuO0J691pkbDZh37GHN3BVLXwn%2BxwWtl1PWJ%2FQ5WqUqG2%2BTjAj7umhxp6qB%2FM4oJUZK%2FbkXWQ8dGqzos%2B0hGieXibT1hLdf5Bs%2BMabP3tad0om%2BOAeseu7Q5FMzAQtTMaxLUlhVXPlbsK55Qz82GCHHNVC68kpo%2FsmP8QMuGx33Of0GvIG2Iiq4U6c2HCjOE%2BYgxhG0opJ1%2FFcas6nrlrr4Q8JeqD3ids%2BsuwQ1lnWV6L4JVB3lUmeaXrhSbbw%2F4J%2FThaK0XjBwT1CAsYRCPUjh%2BNZYuTMw8LrdwvOYqHMSyShyxxbe92FnUQbENHsQYaVPIJ1WYUeTzN5PTGp2ZjtUEVdiKOWcHSIVB3BZ1QRBrg9xEyLFNhq%2BUwVaj%2F2cyZLv42G9nHD%2B4omiHD0Q6OSiuZJHmzHrLH97ml1CU3XcNdB0bAyJmbfcsJPXNAMIrcxskGOqUBt1kHFdgtlLufvnpcjMln1E7V5K4UvDsdjo1776vXeqApz4gPPMtLDc2GjNLay5Jl3f0A9%2FgADghlFB3Pq4BinVvabw7oYAsT4XLDBCwJhGbpoy%2B14uzo0p1FbRrlP%2B%2FQqyVSd3t0bg3AUiZu%2BM9eb%2BGPmz2eush%2FgeGApWNoZTIIFgEzwI08Nf%2BVXd1Tcz2XbLvgRuKQO0pTXHyz%2BUuAYsZCM4b7&X-Amz-Signature=f5cfc1d63dcc8390d5468449e49b37969c150362569523e5e8b3c8f1312431c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

