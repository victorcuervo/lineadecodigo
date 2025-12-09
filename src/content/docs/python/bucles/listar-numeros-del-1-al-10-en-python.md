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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLRKTSUV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T004747Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHd%2FNdFuFnVEzWnS0AEVFQkitbbPnmkp8XOEVEEfAkLeAiAW1mQSqWdmWTBpzHlORY6dNJZ3BwGuJri%2FPrUvmqn0KSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMe67zu5XpnFrNOmIWKtwDMeZ0XuBZbQAYhX5maIptYWx9LGXecKf0ntpN7rCKp6aIU0Pbp4fFupdTKWzd5lVV6YV3rCTmF%2Bj98tx9z8qGzAPAmtJFw%2BG5B213h9Ybgds5j%2F%2BFVtQEEMTyMEZmjocKzHhpUEJa7p%2BDWt7%2B2sLypZh8U8W7HxJmNs2mEBarBmXBdxt2d9%2BPXoUeY%2BjjkVFZC6CBVi7IlpSICISWubqqXH5oaK0gIwCXoay5UvmcQt3FVZI4DVKtZAUghdx5qmxYOIwiU6BDao6KFPTFc9HoFypD7hK%2Bizc60lSue8%2B9P%2FlP%2FczSwQlCCucgqPHWp48l8EsP%2Bm2mBPSpBTTBLklvCCyPz%2FAA6bnTSqYn1Leu58fTGk%2Bt0hetYyVOXe%2BwFOcb6P3H1aDndiV7WTDzwG3V%2BWaCsHUZ81AgEm%2Fqg%2F4NLagnyeeQ2VVuoYk5mc6ZHrZ7VqQaN8GeYutZNW0mPvI6hsaggBR8jUzNFbqUGeX9U%2BKP0NiwEojxVPg9WhFyaFDusbU53oiU9yswsA3j9Mem4vJr%2BuG0UoNzn4BG%2BfNfpqRsziDULaozWIWXZLBkX0cKI20mzXFFmZ%2BkF80mhk2qlar0WJMaM6yd30MQ2eLjyom11HEWwSU%2BDIwDch0wh8PdyQY6pgFGxg4%2BDK%2BTwcv1%2BmKRwtUyqFd4nAV8OhNAf3vDg27xFLGioAjJzTnIOsUl8TAe%2FN0DOnydwKNleQ7k2lBm9%2F6QU7ive5yg0uj98lM3yhOijR3iPGNZCMzjemR2lzm4pvYMsB6Kxk735nL0Zd1P9EAwh7P73LqCCP6UzqoUDae97%2BUC%2FIwTZ9hCeaMieLY2yUX%2BYyt%2BoI%2BF8BhSPXq%2FUGBKrOOVb23m&X-Amz-Signature=8793cf3fa0376ec56405ac5a6b4b6bdb924bb0c50958d4d7160035cb7053bcb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

