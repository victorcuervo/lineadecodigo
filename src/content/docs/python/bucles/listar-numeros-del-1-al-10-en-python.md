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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3WCV72D%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T164611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgrae0P5aq%2BL3dpBuHWzi3KMD6J1JNExmqMTYE9TV%2FHAIhAK4HYvemcRGXivU%2FPFeN2d35JTs%2FQWEDmk%2FwfrEhCUTTKv8DCGEQABoMNjM3NDIzMTgzODA1Igx%2BTwJ%2F%2FvCLOMepjE8q3AM4WLlrM65ezxeldS3bVpahTGCf0a%2FxybIEX2OdLMMah6I7nto%2FEIZauhXct0qzw2qrP2SEO8wHGSQ4VvOtSaPVeOxwivq3eJKaPvsQ7RCSGoNbIOytBYvuQBsoOJDG%2FylqCxtkqyOgL%2BWD27RUg%2BbN8yXpN1tPHtc8Fm5mNDR93Bno%2B%2BgYShTQByE87Y8%2FucD%2FZXLSfbRRheXQb0y%2BqEc%2F%2BGY%2FPg4ZdFDvLGxqImhWHNnnU6IQiSkT1i5KWs%2BCefrXag1YX2QE04XpGgjNiTYMW5LoW8fzvIj25TyDoIN0QxK5uT4cX%2F4Ubs4k0RdacmWtg5mcZscCpQOfUkJMPxhziuWS55rVFAwrKhVbVne3LOqOjhEWVkba2NlGNH3WBWN1wHAcRd%2B5BQohMVSK%2BqHeABti8MSQXn9h0mGNasDQ5IABS6gIrMI6FDObUxtQVgfyED7CeCSuWw49O1%2FIwmveXUOjp23HCrcA2Vi5o%2FI1XS3JLVVfnMdaOcbWaS0s7dtFv1f4AU6304lKCT3qQBtRTK0%2Fg3Gbsh%2FfxZwkSKh6dVkfairU%2BeF%2BnrMvWeKLkXU9EFSnysKjoKCntezxXkuFQs8F3gpgHZ%2FLcgkLGBOhoOgQBUkFzLRmI4t2%2BjCl8svJBjqkAfufDNfeH%2BnTSYn23IWIkLKWHXjtJkPL3q0py7wHkEuLRubtQHHxpsp3NYDwfbCNn5KtD11B%2BPAd2vI0A4b4jx8rhx7VqO%2FKx3y21tNwMkwgLFOuIQii3HMNjGQSxfweew1dZz2zB3Gi0tJ8wb6DT2ygZwt%2Bi9GO5szPTMVj4jkeK2RxAsT49QPZWOhPViWRMPnbWhjrNWEdYcGHDt6HnZKwOoFA&X-Amz-Signature=9aff4d45a17c465d3149cc04d1e6be0d837b1643667af25410bea1b923690007&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

