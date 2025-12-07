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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GMC2SQG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T094027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBEzRbxBzHEspMhckJkVZq%2FDXhLi9rv3UFDTeoDNvM8JAiEAqIlY4z8vwCujL4eaNPXvNxdKP9%2BB2RJML0prlJ8ATcgqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGv69JQwWvqXiBZOpCrcAzf1GorkE5WR1ZRNuTNFSrDX7IOLRpFRxpPmJ9HazpHZT1z2%2FAUMLx8yb4350RRjPTSfWSDVhkstehuO%2BSAnvd6uUifJ8w5n5teJ7u8VFX6IXf15vhCQ9Rjw3PrqtjlNxbslxy%2F34eN%2FeJwK4vYv3vSnvIoP3WbOj3%2BBduAOWsxmYK48%2FXhbN27yCeHTmADcQheTPTKk00bIi9mn%2B6%2Bw5Xr%2BshyoMq9SIqvqEH3qzz3oGHhT3YWkBYk%2Fm1D8t3m6MGuO%2B%2FelRdPn0yMC9YMTcGwQqzO4V7XWlp%2F%2FxePkxNrDlteSuCdLVQO2BBRBxU02CX51AxCrqLK24ZtV5w3lNVPVAMOxICxw6UwIdbc8TfxSg7Q1g1E5XU0EyAz0KxvJvuKXuDeM7oHz75miigQUj22kZl%2By%2FMe2jGZ8ZLzXzivbdYBy0GPPg0%2Ft4h18NKR222DG%2Btw2KFSuueF0RSrDi12hjYMMdB1VIiLM4Oq3LQZeIJTmTYqKIiUkZ%2BKMdIyXuxVF8%2FS33dxV8lCHb7xd%2Be0IKNcWXrtAXx3dKeYb2RGP0SHI%2F3QuTQEmDndPd2%2FtTw1kuQDvzuA9lWewJUF3rMLngsMTOcWBq5lsww5wED9kInm1ReolmYLKjT4HMKWi1MkGOqUBkwjx0vg54s8lCmNDpjnPgGBfIL5XsffOXHAIWHP5%2FpUKkZu0BVEg7UrB2cLPIIjtklm7dkhgSAT3YDiZDmarqlurx9FON8US0jQ2ULqZiI%2B1UPvJSuThd3GiS3fcYf%2BEJO81HVunU8r7FUb%2FRT9JHdE1lObMhhvhBTn8fkcCDrf3fKBaz2F7dSUrzVzsqdocS5Wnkxp8CQjPElAch457EtI9fiq4&X-Amz-Signature=894f476b77b0129fbbfabdec1e60c22b31fb3bba20c42891818f56bd560b112b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

