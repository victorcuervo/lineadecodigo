---
layout: post
title: 10 primeros números impares en Python
excerpt: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
categories: Python
tags: [python básicos,python bucles]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

En nuestros [ejemplos básicos para aprender a programar en Python](https://lineadecodigo.com/categoria/python/) hemos visto ya cómo utilizar bucles para poder listar los números del 1 al 10, en este caso vamos a ver cómo podemos listar los 10 primeros números impares en [Python](https://www.manualweb.net/python/).


### Uso de bucles para listar números


Lo primero para poder listar los 10 primeros números impares en [Python](https://www.manualweb.net/python/) es conocer el manejo de los bucles en Python. En concreto vamos a ver cómo se maneja el bucle `for`. El bucle en `for` en [Python](https://www.manualweb.net/python/) tiene la siguiente estructura:


```python
for variable in secuencia:
    # Código a ejecutar
```


Para conseguir la secuencia nos apoyamos en la clase [`range()`](https://www.w3api.com/Python/range/range/) de [Python](https://www.manualweb.net/python/) que nos permite generar una secuencia de números.


Así, revisando la sintaxis de la clase [`range()`](https://www.w3api.com/Python/range/range/) vemos que nos permite listar los números.


```python
class range(stop)
class range(start, stop[, step])
```


Por lo que podemos sacar todos los números con una secuencia generada por [`range()`](https://www.w3api.com/Python/range/range/) de la siguiente forma:


```python
for numero in range(1,11):
  print (numero)
```


En concreto hemos sacado 10 números ya que la clase [`range()`](https://www.w3api.com/Python/range/range/) genera la secuencia desde el número de el valor de `start` hasta el valor del número de `stop`-1.


Pero, esto, nos genera una lista de números consecutivos, es decir, nos muestra tanto los pares como los impares.


Así que si queremos listar los 10 primeros números impares en [Python](https://www.manualweb.net/python/) tendremos que comprobar que el número, antes de imprimirlo por consola mediante [`print()`](https://www.w3api.com/Python/print/), sea un número impar. Para poder comprobar que el número es impar deberemos de validar que el resto de la división por 2 es diferente a 0. El resto se puede calcular mediante el operador `%`.


Por lo tanto el código de uso del bucle `for`, mas la clase [`range()`](https://www.w3api.com/Python/range/range/) y la validación del resto mediante el operador `%` quedará de la siguiente forma:


```python
for numero in range(1,21):
  if numero % 2 != 0:
    print(numero)
```


### Clase range con step


Además del código calculando el número impar mediante el resto de una operación de división por dos, vamos a ver que podemos listar los 10 primeros números impares en [Python](https://www.manualweb.net/python/) utilizando solo la clase [`range()`](https://www.w3api.com/Python/range/range/).


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKA7UBYC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T144854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIGFMwSjVeYkwrGpyQ0c572TOliBXjEINSW9RQBLJ8MMQAiBQuA3keDUl9m0iO3rZWIMNNXD9EFgVwQOVf6foYni%2BFir%2FAwgvEAAaDDYzNzQyMzE4MzgwNSIMPclylkC5vlqUxTjcKtwDjjhIB2YDbgqvAprjYgrdSsLPEcFRs2zoemBBEzB3kTIDb%2FcejXGSMjYuxRmE%2BM8N6YGtV5On%2F6aO2y6Fqa9hnjYSNpPwratQh%2BK%2FhGY3k11d0zfZV1yPKaKTZW3EQbSFfnkjIGp4%2FmlSX25AENLWhsYBhUFL1yEVmdUo0fTooU0wxqbDfTJXpoN1VkAZIsM5s0cU4SPW9BTIIoTvWszrkdgDk%2FZU5hDk77rnqCk2TNA5gUP1Gtq0M%2B0GdH43MZRW%2FW52IflZJvyqHDwSw%2BDLfhyUwcJRRPURFSC%2FBaTTjiwK0g%2BVT7%2BGY8mrNp%2B1IyH2oYGMAPzIxV0zKGBXqdjmJ%2B6mgYd731MQsVbkcYNhIGfpFer%2BEVc4C7V2rrArSBkghc8svbimfS0XhgLFG8Gbwnfm%2BIG4%2FzSpvCFZKA4wl%2Fx0jnqcoDtIudGS2fVSMRl2K5BciNG6YdKrgLPwx0aIUFAs9UwKGYmVo%2F1rXx%2BVyFNQYcvPkjLROO%2Fk0gtHd9W2unrsMOzSxcFPToQnhgn6c0kwkAIy5CllM1dkCzjkZLengnJsWEaCR66Vlv0itmGeee8M7OFDbJWEZ6jY9u2e70vCRADamv5QejzOewuMaOD%2FU29y4W8aL3Z5xrYwk4jByQY6pgFsgPhdeqgWzsDGO2V3aCOsFPN%2BRciXTI%2BsG917ECWzU0yTKhycPVT7C1Lbv3xFcMbbY6xIjry2shKDsC%2BG5MXrb2PcF5Ruv2gNgzJZLasCGfft1gbfV%2BCASvHejla0CXtuhhBG6wMAr%2FBQfZk1i%2FKA6Ergs8XAt0AxLemCEsrek3Yds2VXsAWXQfpstT%2Bj1Sv9lsli9bn8CoPcITrOlsUbeKyl1Keu&X-Amz-Signature=a79b1bf79465b8be46c297d6685281b29edd46cdf28fad85f919f008b9097e9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Mirando un poco más en detalle los parámetros de la sintaxis de [`range()`](https://www.w3api.com/Python/range/range/) vemos que hay uno que es `step`. Este parámetro nos permite el generar una lista de números con valores de separación entre ellos.


```python
class range(stop)
class range(start, stop[, step])
```


Es decir, que si generamos un rango de números del 1 al 11, con un salto de 2, tal y como conseguiríamos con este código:


```python
range(1,11,2)
```


Veremos que nos genera los números en saltos de dos en 2.


```python
# 1, 3, 5, 7, 9
```


Si cambiamos el parámetro `step` y ponemos un valor de 3.


```python
range(1,11,2)
```


Veremos que los números están separados de 3 en 3.


```python
# 1, 4, 7, 10
```


### Código para listar los 10 primeros números impares en Python


Así que podemos utilizar la clase [`range()`](https://www.w3api.com/Python/range/range/) con el parámetro `step` para poder listar los 10 primeros números impares en [Python](https://www.manualweb.net/python/).


Para ello, como queremos sacar los 10 primeros números tendremos que utilizar un rango de 1 al 20 y como solo necesitamos los números impares, le añadimos el salto de 2 en 2.


```python
range(1,21,2)
```


Por lo tanto el código definitivo para poder listar los 10 primeros números impares en [Python](https://www.manualweb.net/python/) será el siguiente:


```python
for numero in range(1,21,2):
  print(numero)
```


Lo que nos mostrará por consola la siguiente secuencia:


```python
#1, 3, 5, 7, 9, 11, 13, 15, 17, 19
```


Y ya tendremos por completo nuestro ejemplo para poder listar los 10 primeros números impares en [Python](https://www.manualweb.net/python/). ¿Qué otros casos de uso se te ocurren en los que tengas que utilizar el parámetro `step` de la clase [`range()`](https://www.w3api.com/Python/range/range/)?

