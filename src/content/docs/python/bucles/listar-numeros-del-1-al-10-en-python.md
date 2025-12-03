---
title: Listar números del 1 al 10 en Python
description: "Ejemplo sencillo, paso a paso, que nos explica cómo utilizar la clase range y el bucle for para poder listar números del 1 al 10 en Python."
lastupdates: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBLBFAEP%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIH1syZIwovxp%2FlZZnasghNEGVnUgxBGEq8J1waOe%2B7svAiEA%2FHfgw2JacUVk5oeDNd3EbmGXquOswfdPJo74C8GeJ00q%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDKCibjMV9bOM%2FTmP0yrcA0yZOe0G21knYFIb0IQ5yqYiw%2BO%2F%2BWkzNUUrozrh12hWwPYYDwcZeJgtSNbFWO5h%2FCvIN0dUpvCoTdJWW8bpJG%2FPcT1xC8YOjGXBDtcC8HToPM485mmVh4BQ2u4AEggKLkpOy9zKG2iFSqllKoLuUw6ViJXBF0tmfkn%2FOgdCDk6a2Sgp19VodtiMFxPfr5iuXfaaV18id15tjWncX3ztURAuIgl7scJmVlXkivzrUqEF6oyziB00K6P6JQW7v7vVRKwSUzGsimicHMgtq7Diqx253YPzC1%2F56yradREZfBS46SLx2H0%2FBsQBNaQ%2Bd3mJ8PkwWLqSZLKL6MSF1G3QtBBoxGJ6wz5zmcN0%2BY3JnOdVy4BdSrquNqX10Zwf5AMe%2BUEFQCxTs8r2o5dKNBPOPHsfUIPqqwRRD6tbS2K7jUk70hHtsBn4OZ8MZnsraWV7r0iYgFanfdrGttyjls3w85dPEhjtkXoPUVplGn39fQTQGqj25TVYVHPZZDsSbbjZetSaThelvtJWh5fH8ZjMcRJbtNtVhAjl3WAlwu5%2Birc5T%2FwyhS04nj%2BO3pV%2BHIEBQjzqNg7D0z93MguTNl1L2tgRSZWGi45iuyzQ5HPuGRV5MspQFEWGkfoqYnRgMP6QwskGOqUBsCMldJJpeAQGGdzKYQ5%2BUsWG5lWo%2FFnhkfAY5V7SCYYlxi0ZyQACToH7qvtCi3BTL9ftRHj1zofpIW%2BZQxD8dhs%2FiuEzUY1ddfLcu7RwsfXKPSA%2FAz%2BLTLm9T%2BV09MUFOgEtBTea3jL09spo6F%2Bs46J6du%2B0jLHeEuYoGmo24li4RUGIl3vhITGY6rUmPU8469TMopX2G9Io7FElKX9zESRBTv8f&X-Amz-Signature=43b33d3647a22ced721ee6ac2c3cbcee21cb549d81e5778c02577f1f5c54d4c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

