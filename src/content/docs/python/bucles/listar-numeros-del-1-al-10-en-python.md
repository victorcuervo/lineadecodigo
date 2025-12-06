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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WY7GR5BL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T124512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHal0c8WbChbs6mEL7E1msE3ri7ZomeSgAL%2BcUBiicicAiEA5agXL6QHHv3yzKiqmq3yMRMUQrx38mvfOKWDOKMwK9Iq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDCZvUG%2BfWLv7sM620ircAxZfXAsgQ6hNynb1c8TYzF%2B10RQvjMprk3yKayrcip64QCaCU1Rc9wiVB%2BL4RXGEb0LueakwcvYFBgpd7bG85PBBW6ZBcw1fYcvdFfDkZ9y%2B4dy136gwPuIgDW0KJV0KUtFDZdIZ8quoyQ9bCWKh8PhbPqahNT%2BYJfypoD9bG%2B1xTJnOVw2MD0I8hV1nSNyW49QEQPTzNtrAVs3Ye6DpH1sBvy9TZl%2BLuDKtKiJtLFhrx8SwJ%2FgWz2qFwh7Yg4BxHYwMro8hVrX8ULplFsvugUvLIrSnp73nON1rlk%2F5%2BNbmA58iz6YdBQHbYH2vfISL7DK72LQpZc0xy7VljovWinz1NB9iebx0fT3uVWzRWOyCUjvOyHGqHmeTKE1ItWZ0SHtRVy94G1938%2BgzZIJCBVcZ0Y6ywkhIbIEGphR8STZG6%2BwX%2Bx06cUKa20v%2F%2FMDF8%2FN8O%2FrBAcKEIXYSFUNME43Hd5jxtv8%2F8YarEw1gnOHo1%2FgATkmpLu853bNf%2FpSrCZmVp6IY0l0RHgue%2BuKgbKjY%2BkQzHHMOxX2NvWeKi%2BVsjS0SIXTfEBYJnFF6Liu63M%2B49FGr2WXbyrzQ%2FhXdx7irmnVdOJczz01S4QQaiiXf10VFYu6KIZX5iYWjMLKm0MkGOqUBB%2Fm6ll8qngtWGRR0DY%2FnPII28SDDhLaePuWbRZbvaNQCpIvTx80g8Bs71%2FtWPDZRDR0e19boj4%2BpVWu0X4f5JabZkesDQaxuL0OGJ%2BgKDEHdJoOG8BBn4wDUS9dTc3a8vMEmeU3XkDAfIv%2FBkJzDra2h%2F5PbbqRdpltiZ0kWosetzD3TMJNA8cmDL00T4FvIPbWWwDJ5sI62uUsQbr43w8OsK8XS&X-Amz-Signature=6db66fd6a554cddbbb8f9147f753d05f4a78b491eab0e38341daa8ee4048d104&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

