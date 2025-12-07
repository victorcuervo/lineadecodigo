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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGB3IKVF%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T001252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICI0b%2B0Z9TLFF9Ncj%2Bxk0LRaYobwwonClsBNT0JWY3f2AiB0Bpokv6xv1IDQvY%2BkGGbqhZeJs1thP3mA6dOmSuSTKiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2BDypf3CFV9h5mfdnKtwD2jGA1XQxSpssUViHmOaLgHG23SGXEYttBcXRfaOzMOENp814wRVIPD3rvyyMwsTNQ4mlYp6D5vGFgEYw2GlHFMD6d7ABWhuQXcpp0p4y0XNIkI%2FtnWym%2F2V%2FWqQTMp8QDMmD61CMcAmXpP31uGusY237lYY5K%2BwjT6nQgE8h5nFGUJ%2BftvBiQVvtNVdvKxe3lJ4l%2BuB1YXPeZ8ZmIGjO%2By6GLLWkBpDd%2BfiFOZnIiyadi3GQhWJe9vyzw1EvnsX482fQXosW62iK1ZMxwCRrA%2BoVzGfGZlda0fnDLFcFZWKSM5Og15kzF5K5knrTYIpxNZ%2BvEIY5Yvoxd%2FwGbb5H9dB43D73VO4b9DQ6qb7hJAoejkeDfY%2FZC9nlUpliSOEIdcxR%2Bj8fWXj4Iif2sIQ%2BzWoBDEu8es93wXnizwGP%2BsAVmtWVAvTgwYJCEvXToAjmdgi9F6O4V6LBMVcS%2BeD2%2BM%2BfoJT%2Bm68bX7gIU9Vdo9QT6QAcBRXn1eRaQr%2FthCSBQdq5GsEjCMv3nzXiIo88V627dWvk9N7nA1ll6mhfclKqOm%2BvxReC0Txqr8Y2zrtJnZkvIJvtnvvUDV13t73wrfoPb6wRWxZHJXTy%2B26qmeeXKwj3V7SIxJj1mSYwrf7SyQY6pgGfZNwhH%2B46VyCm5TJA0mTf%2FsiUry8HQMSQ%2BohrbjInMK8B2PPJrcmo%2FyPJbPR%2FWtbhA8uVZVxvr0qu596EUWQ67DYorqT%2B76%2BlJfxzihR6a7fosyChGG9Fp5JvXsDIettJdMguvv63eXYT1w8XBhNFyN2Tkrajo90jSY4Xefp3ST6pi79GTiz7U3cCYcNZMDG9CiXRmMmWmDbKL5DeKMzcKhUg7Rod&X-Amz-Signature=85a4aefdeeb7e918f0e113909009d8b50c84fa3d7c910048b2325e026ef1328b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

