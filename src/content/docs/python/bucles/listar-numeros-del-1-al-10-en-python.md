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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCQ56S3A%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T132345Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzmoI4cEdHB4WkbpTf4epFVUDVC8JpUt5cH%2B%2B3cOg%2BUQIgG%2BLo4EJhVhiqzv460gBJ%2BG%2BjZrW992pokrVB19DjakAq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDAu5NUfbCcDbbilP4CrcAwJL7I%2BllcHZ7lIcNP1pvJzf%2Bbzrhs5CXR9KFToYR4U8oh1ApBrS3y%2BzqU%2BPSiNkbM0sgGplx8ce%2BD3skBVpGc4PDA9%2FoknaSgzUyl0PRQjpYTqFBtuxpzdJK99Rk12Mt4svqstD0dZ%2BIWL63x76R22J4K9ARbpeyrkz8pvs%2BaW79bD9PQuwv6TO7pdzXHVUcPQJ1nxFFuFm6GHHqcNUyMhpmjseAofNlV5KpL6zDIB0HxKQTCvEkXjY7pCDw%2BH%2BI4zM8KZ9Yenwl53Lbk6oIH1Qw%2BEKHkZgTNUJW0TscyLf3dRDHq6U3W%2F1E6x3eyQK%2F%2B6%2B0B2UIp%2FsK9%2Bsfscyd9ONHB%2B5EQMlCw3xXTu3lbiueT6wKX4bzlFdeM28iLoRZChngZEdiHLcmvWeCkcVIakf4lGKsmAWeG7mAj0VoT%2FFIeZD%2FULwu3zwgDwdt0WUzLDMZr3bxggrngUYh3nwxKqc5tLmgUjSylTtqTq7YzcGqpzQPWq%2FOV0VsYbfCSLd%2F0sVUAQ6QDUtmMhiO%2Fo1CqkzkNUUGDgBPf74vpZ%2Bthl0CkVYDqU%2Bmgz64hNdxT7p4u2seFutvx5ED8fkY39hehwulXYCOcJydQeKtR319gNvsAshflPvuP5m5SC5MKam0MkGOqUBeIT5YuiEAlYkQbYGLtL9E%2FtUGJ1PQDor7Y9VXwwnDikBcJ95%2FpLUNPa3OUMxRg5BI%2BPWwv3Uh59Xo2%2Buc9restHVt0rzbsPjEuHIdrPUm4UsSouyp3i1lTUtZ%2FJWbM%2BAOPIPoXhllJbtqJS63YUUVY%2FQv9d7xp1xfs%2FDPBBL24%2B4aRz2uefHLDDegnsV%2BbYEcHIqdmq401dBAPF84pT2i78hVodh&X-Amz-Signature=bade45db44a6877015c9847b31096e72f7a2de2b8fd63dabd40edbb2ec4fbbf7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

