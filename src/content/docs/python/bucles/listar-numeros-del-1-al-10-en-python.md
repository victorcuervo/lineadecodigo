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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/ab3864da-68c7-4e72-a287-5481e2b9c1cb/listar-numeros-1-10.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TITEPLJN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T212742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFV4lrzIKvU18AaOTPnxlglMUQEHcWc7Kk11QKLBiYI6AiEA%2FlQkW14C3iQchw0qkEXjhugY2JWKZVT1074XRKoRvqEqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCUhXByAxyvs8QiTKSrcA%2FhTlhRWvnrvv4LeORZ8SrQ6P5BgT77AYBGHnJ2pxM9%2F7XVh%2BAhAv%2FYBn75gCpNYqkpIxYLI6dLs8bOb5pCdaB1u8HBhukR9m2lvjxA5Dy8Fwt%2BulEjG9UEtAQBBLWp8pdGOgSpr2p9gR2FdJ8ZymYBvuv7wNSl8duPph4Wtjt4amu9L6Jqsu1OcBtTaM9lrTAsX%2BwC7GWdoBCarRsSSvJlbKkVK9Z5WMV2UjRadpLdFi3xBp7jJUfGt%2B9HHPDm8QZLsjANHDnJJzJaDH8f4m9%2FWfPGAcYlXYUnDg9xsPL%2FPCHXvmtpwIPRM9pF1tUgjS6RRATYg5XIFnwsiATYpvb8sAW5XKqtR6v4kUFpbF1PJEVO0XlvGX2Vt1iqFIE6%2FcjAqTfGIEZPViboH8NRGYREmUnqpGs6NL4Zr5yxsIUzus9%2F8NWmEqs%2FwHnJkdz77uwOS5C1I6E2GhgeIKAEC2kBN%2BI%2Fm7gsT9jSObpEA2OQshmNqrK0EGtP2HPmqdg6or78FKckiJY%2FG6aFWuEfu6bIMgmyR6kVmuR04%2FtP3RRRpulAIX0svQMLZLSYi2XrcWSaS9JWcTEw%2Bhf0B1QnU2DVj%2FlKjHS3D4PQOBV7GeAeGC7UpzlPzd4YkeC7lMMnH18kGOqUBXwJLqX5pz06gbR21hFTN%2BLt38zZbo8%2BrSbSKGnqLgwzjO93BbqhKdKzNLz4IL16PyfLp%2FhJ1nRTrJM7vP2YuqjN1LyJ9COiQFr4htyBHcUfltxMy1tHMw3HOCEXS%2FkNiBRv%2FrUXF0URageqyLJeJ2Ahr5fyrQeCpiexcXsYGwltgvQtnPVP0FehnC1JsxIAVmZs0ndARYim7mawFEkeBZm%2FbOtVj&X-Amz-Signature=d61564b35779f63242321c03584ec84ff358eaeec8d9e90b7e4f781c5976addd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Espero que os haya gustado este sencillo ejemplo para listar números del 1 al 10 en [Python](https://www.manualweb.net/python/) y que os anime a seguir [aprendiendo a programar en Python](https://lineadecodigo.com/categoria/python/).

