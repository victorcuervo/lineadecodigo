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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JUVF5CH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T171718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxVIAQfshfe6Fwjl61G89K2BJXcEKSLyz87RzDYtAeiwIgTkWuFy%2FHvoxsLLAcS37NCCQngCJ4spALBQABuKQhCUsq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDHCXfDgAWHT36mk6mSrcA%2Fi6vKn9LeL9AvtaRIm%2B%2F49bgpAIiGxxxT1V18Wugq6DlX%2FJzencSW1rSk4bjA3lkuBChuf7Cy2uWEM2GhvHl0GWbmQeDwuNbQCMMX7DAyEwKiwA%2FR69nt1Fzp92ba0A1g%2B3DlCrTPIJxtydUV0guXtzAKEh2Vmv1guwkpyi4ySjXPaZoka59Kh3pOkR%2Fh1m1w7LF9VZP5hTAnISs1rsw8TE%2F1K5l1wgWhuQ1fw7e3AJP6C%2BvRZJyAkZ5tvjhgjXz1QwRddpzZWefoYGGPwmsniFsbkbFsVxV4b9D%2BDmPQhcBVi23G2PgN%2B%2FUjGRTVhXr6aq7aw5UYsGYU3WYGT7Qs5I5RnydCbKhBHhLVptFfjmjqPTYoztCWtpmb5a1J6LjGRrAR9FL2oKVnv2VS4YFrZ4LpPaea3qIkl25ouOoC3lCm%2FP9vw3hI7BNs6bsWMnGzRkVW7CcG1rIEZRIg9g%2BZ8BW2Sxku2VIPHdMnwZsZmuvHruCXSzSU%2Fc5PuZJukXQQph449Lsz4p7s9ya1rz6YI6MjoZhq96PgVh8tTIO8uPQrNrJcI%2FjMfQgKsIqvJwJEF8%2Fl%2FndZFBWIcW8W48O3i7psnn%2FwVgS9yVzB2S1HZuKKBqw8cvxxBxK%2BIAMJv6xskGOqUBIOXDDLd%2BDJ9sC61wz0BgdCKbrrcI%2BsvG2%2F%2Bl2viXIbu2pOV%2FqxDwhlsF76e%2FJiQ8h5foaQtc7P3Ewu49%2BEW1sFsVclZSl6EJQTJ9mBtOf9hOSve2G8IJV9WX%2BhYBBnyariuLnxTwZLGtme%2BenKgfvfvmKrGYtCqVBJbhdIgEg45t0gssVZ0K31gAy9Geir5yjMNPhF5Dql6c2r2mH704oh%2BPUQ40&X-Amz-Signature=b374e77d4ab0d56bc11f08711a9bf31216303e262a04ded18a16a416f76529a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

