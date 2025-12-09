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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIHMDGIA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T004207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv7hSDYbmDzlxUKsjihb%2BPxthzDWyPvvqE0k5vLbLUSQIgMTp2wBEdHu%2Bo9kKOjIYjJR7vfZwz6ckWGObobI1XHXkqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNU7b7Ybd4sNx5%2FSLSrcA6RqTNze4SSUJWxL9MBJwd%2BNz%2BCPGbb%2F%2BW6DmzSg3FJul3eLSTj39kv4xwx6YLaGd3ZLcWMRETMBT9w%2F2icd383cobaZm8%2FEkX67k5eTCn2MMzpaF8tMWuiOSfRO%2BNRHdoN2cXxyZUZfIzbrb5RH%2BmlQFLvdz5PJgWrW5ruYuWHsmRnjkWu%2BBYMh1NhN912c%2FTvx9ucC7c5bMSSF9iayZ9CIbAEtYFL3GKxgKH7x1rmdyw0%2FcTFBfWkc7y1dSGQQ6Dz018avHiyKJY%2FrbH7lOZe8fasr1lE2%2FKHE6Jfk0UdP%2BBTflsWck4ydZ3yQKwEvSH58F1QMcrGvGBUjeZYsHMg4mGtO5UMoFOgBI6B3yjOQ6YdPAm8D%2BtqRiSvOcX4tmuCHxv7FmMG42auNON8N9QHE5%2BTbVoSJ7FeL4FGaRpasiB4mUJ1369spY7hMCTSGuudkBsDnxEiCcHqkG6VVgShNiW7%2FrfHWBkg681T1kUO9hfBKhkUmrekBHwTiG%2FJdVrB9bt0mTSn3Z6YznyR5gQAf6vYx%2F9whIw24boWhXzqCu4ZQs1p67J2UAjmpb%2BcCKSB7UZjV%2Bs6a0u2p%2B1WHAuHdeLfh5kOyvxX4HS3vGFZ4CQqGab%2ByojjwoMqUMJPD3ckGOqUBwiiPOvM28hMU5HpaRiAcmvuzOH4pXCT%2FBzYvqWIqw4abbgg2UeX3BEwklzNx5QIqTJDzw09CmwP%2B3q4kNnjAHkItcQDQnH8WkqEtHRZAu2DCYnVRN2N%2BJa8ZWOP7Z%2Bi3M%2BVAA4XW8H3FneSdTbH%2F4xmcSIm%2BzSCs1PBwOZr77R7cu2Xxpn2mEekbzxBSAg6cNnJKMWjfYcqr2%2BhC9QPIWszOuXAB&X-Amz-Signature=1422dde85f87d984679608b5f91579c7ca7140ad8864739f5331be3bb7ed3cd9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

