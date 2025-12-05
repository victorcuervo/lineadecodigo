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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBKH2GRV%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T054800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCbAdi16szOQ53Nmn8Owh5yPgdggMvKR4IPlRtVkELuyAIhANz%2BrFRsrOJxnweBd%2BzXQpBvXnrJcRwYXpFcmXKXF5RsKv8DCFUQABoMNjM3NDIzMTgzODA1IgwfjuYULG425cgsbp4q3AOFcGHa18%2F8zc2ZW4jf73SPQQf%2FsJ3YSHT0QMbWGTZpNrC8vm4VT1ydUGEeB1koR4TpKZvRprtQuLAx%2FLPgf9KGllV4IeVEKf4m4w9IhemoISkNCyH%2B1UbFx%2F88DSa2%2Fzlij20FYh23BJ7sm4z9z2%2Fz8g4TNt%2FxFPh2NDTDK%2F6sLp7UtLuXiaTEgwfeF5LiVGnJXvPfi7gP48dB%2F%2BF%2FQ5cJyBvnxX%2FVFenHX2OX7QeE5edUESO6cnoMdazmJ52GMA9Bybb6BLKDsFp4UcJ3KT93ug0%2FIWyYC4uoGk8uOrRR67YCkOV7b1kM9yOHT2Ine6vLYp0G5YHpSDjs4X4xVn8rx4gy93s2sLARSYIzgZNQs6YCLos%2BrIpZNXGYj5AXq4ekKHUwPxw02YEYHHaaZjBRSB3PmaEpMxxe6vTaC4Hwtvo6tQF5%2Bq87JiKABDn%2BNgrU46%2B1UC3eO7GiTZDIp2xZKIvckLhdAYuBe6RYvnx9wZl86HVdGLxCvrTqidFU4IsC%2BG%2B%2FUX%2BPPNZbWI3ElR1FzjUKYst1J49jCX5H7ne0ArC29iyJ%2B68h1k5L3Iy2A5rkCNL1QQwwBMlwDXmnKImnUUbBozml9K9XJrcHCuARMndtbLEabzYAxfbdpjDzq8nJBjqkAY3cmu7IqA3vRfNA59CRU2rPs%2FsNva6xiHSgSEbs5C0NFmu3IAZzfhTG36JUQNCDcH%2BSUeuS3rhU%2Bz6qiqyfnVjy0dUVSqKZNK7%2FVtgEyEjX%2BIfZdQQcwcW4oldLjRVsa2yf65Z52iWP3SC%2Fi2WzsbZsQaDgkZc7GJ1CKjfNyBp7p%2FNMSEPR5lkrlnBocAy%2BxV4t%2B8o98sMVyGkEaIiCKn1Jx6qW&X-Amz-Signature=4f8f685368334a023fd1238c5853063a6a40ea8edb13d37ff964293724937e77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

