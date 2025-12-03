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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLQMRXUV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T072118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCKmuV3suepPcr92MlSCs4C%2BwmzqlZ1rpbRrOHV%2BVFVhAIhAII3PNuEKr8An4gI8YW2Q6u91v0harmoRkuCND4Tpxp8Kv8DCCgQABoMNjM3NDIzMTgzODA1Igxv6TJr8aTZo478oW0q3APl3qkphtyN2wwj1zegYiiDO1Opqqu32YTSbphBU1DsNc5uj5gy2WLNUS3NQwUwVJ66yjA%2F621O60rREfM6SRr0i7NmoXwSJGkZZEnTHn152FsoEdPROuM%2BTbdpQY52%2BlbgrWJPGC8gn4EhozuVl9JDVfAf6A1N5jhYYj4HqgDO3nNMksFpUVYwqsnTnbobokrEhzwUuW11VNGoFdSXYZzm8gC13IW7W3xyT62%2BTKr%2BhfA%2BHMR3BhPCp%2BvByRVWAhsf1ASFj8Ue02CVEcAp3Vfld0loJNtbCvF79zLuzxxfWsiZWbKZcR5R6AwObwkQS97R9L%2BQfSA6W11bfX6qpinvZuRCgcifvitIXHHhZUMMJvze%2FS8pQAu475XEl1azoDg80jtgJVpJQSxrL9xcuhL7JyOqXBHh6N3Rp1YJEgA%2BKGPQJt%2F8xjKLA4b3G5a3JuYyJeSa5%2F9SbjCIPi2skcOQ5u3lXk9l5OSl1HLH0fbcz3Kzn7qoh6om347uU7QFGy2d%2BFVGi%2BgwgTBxIvt2E43q2kTOzrHtEJVHlD18SeisJotfO%2BHO0WaKY2xJPEpHVBFWi%2FBhYbjxO5nQzCH88w%2FZcpC3ODu41E2HCjDdQ%2BPKoVs36qbSn6aOGn%2FhEzC0ub%2FJBjqkAdZ9AYtSnphvkRnVgp%2F99jV%2BnpcMeqS0rtm7zPiNsPKa3FH8kdyBVStW7LHUbEb%2BkpQ2QF0Q1h9AvxPZl3nUW4KrYQMhI%2BWQe05kVYg%2BIoSCnA95p4B%2BSRFD1T%2BnbgaqENDQbxXQJ6H7iV5d0tBhZloxoGhMgWqrFhnwHA3EHj1xSVQARa1Lnh69LVY%2BHeHLQ1bWGdniQzfaaQU7YWMdVR%2FlqaKn&X-Amz-Signature=4dde90301a9b28c782ec28216aec2885fdf7152f38062379185aac1bd7092f02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

