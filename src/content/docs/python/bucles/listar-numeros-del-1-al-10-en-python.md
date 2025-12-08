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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAJWWNJO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T121417Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAW1eC%2BEvUw5LBTwJU1xEhfkinhWHua4OYZfPjAHS%2BUsAiBoHh5UpBxDIdwkp634IbBnIjzjq6SVw8bbk4kI6tL8uSqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMm4eq1U%2FkZjcDRazZKtwDyUlVzCJaxFQuAxPdGGf1IBmqG9YSa9GZk%2F71uDKXqN3jTAeJ4u%2B%2FfNx2u%2B4LLwAlF5A718HjDw9eBET5GZ7Wf1dzRMJNcteG0rdWp1V6j%2BvjktcgWjgkMus6q%2F%2FBNaNesMVX7MKfEWJ8mPKcriTuCyccWhnFerTbmDOO%2F54%2BhD5HLqDM7O3PofVLTSse2Jk4W18CsGNuez9BfEZNTcKLsUnhSga1m0KqgFOPYvqvHFmjkyTinuC0NWsR%2F%2BEWb4y9N798mcOncoXPu3tqKBJBpXlBm%2Fe%2FcZvXxyy6sgZyreEmZOOISt5s0jx7hy7CkycGAO1z%2FPalYi85my14we48AxPgGMxkfJPi48QmtPymrlKlkEvlH3Ec3peRdCJyQMeG3vO2w101T5gxCfuizYyfIUnHknQkj1TU5OcDMYTTeDK802DF5QIpyPIzj%2BZ%2Fn540DNiUh7tpNmTpQ%2BbOB2NqWRBBWICQ1iY9bAqQ%2BU1cmCzk4RcJZuB7PYzRS6aETKsPXRIt5Mfb8TnGoDwMbRDHvs%2FVMflaDOVMvkxO%2F%2BjEAHWYmB4y7gz0Sjwq9CGEX2ZI6wmz7ZD8pkLNHMM8pAcmEDE8DrdAco7uAiAkxx1DmUwzlsrHZ7FHF83dyfownPTayQY6pgEU0QLlTpLjXqW4TMBfh0CIuBktCvY9FHw8rUreQrVwjOlDXXexEP5RBiSldskTH5d4PJHgCR5NQxRcw9jlhUuIKYfk8PxrOSaPsIGm6TvaJGssYEcO83wqTkmRLl7h0ix5qW7v0lwqzVzwsxR24IxzRj94cJ4lGE4mKCrTmMyo8uQRnfBGnMo7SjrRnQ1OLVEuJyizepH%2F7%2FJqMeju%2BOyK0JYjXg75&X-Amz-Signature=e0622ae6f163cd9ebb8d5d683cdb66fe8b27c953689892a66027a4156f5fb247&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

