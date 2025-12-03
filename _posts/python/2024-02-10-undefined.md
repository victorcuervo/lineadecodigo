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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUXHGH3G%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T082101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJIMEYCIQCHCt03m7yPfK7UKz54pOtlZqpaa09t9n7tF7NE57JoJgIhAPaF3ivEuvnkLPs42cdZI68AUPi7Yh8xXZA1mQXdZYG9Kv8DCCkQABoMNjM3NDIzMTgzODA1IgyNf7PrPxm%2F2MfcIw8q3ANezD6KSuZuN%2BTI5odnPTvoTI2ASOlKRhBeyRTUFAvdrx4%2F0YzdIYzSoz95uqwDiKDBuKgQnKkGokOGFW16yDQ%2BbgT9Cq32MOUtkbLZb%2BVyahUV3PcbUbvT7XBeAp545Y1jsrRZ429C%2BZ3I5w71C5Ol9dw3u%2FDUr5A9c%2FN2hfEjtztsDOz7nz11UlRoTuxZpM2B0TRDBpx7YY9v15ZkFV2GPJtEI9qtmr4puWb5IjIHWQHQAKsBvsyz7yvTB7PqTOzjyf%2BVY%2FPw2TYpPm3383cFQQXqRQJ7cpp7cp0%2FOkMgJFoxCOgz2HwU6DR8O%2FxnJ%2FwrLvha2TxjsrAhLexC7BPdV5J47vWLgM5yy154smLeM5xP7fgx%2BE8JCkD1DRNbIZvfdIvRjO1j0AWVpy5tSziHtHiej3NTlJwE%2BQQ6bbY0KPIjUsv2tz9Pm%2B02bQPxypChdGpn%2FDUTpm5ktYZuiOIetgqojkgkrF6gPbkvjPntFhmdrLBZAr6mA12rh2K9Ugk6kUYjB%2Fq3sd50AFgAnkDif9y1%2B4fKXILpSe1bc%2BFe93hMYLjRLWSISFpTS5dpA8oEw5PZxfXIzNLC3U2xzB5hQ19kOw5K4FTaHde7pzSFzbMV3Ej1V6CFl18wVTCR1b%2FJBjqkARXZqYlxZuN0PAdMLuf6%2BeqtGVBSyKURAufRJ4exS%2BIZvoHnyBYGrIpNJHl0TF5F8S9Cn7TDtRKEja1mwNwUqKaJVwFSFT0rqn4q%2Fjoz1GQnsziiagd7sxETkZZft5zZe4K2w8xff0krKQnXzz4iLkoO0Zia5E5BXqkAsLQb6syTFK1XuKMoce3kZuyMhtJ2eP7C8CkonOlzromPnZjNBDuxJ2fJ&X-Amz-Signature=02e1da5f0970d0a001ca1d7b1d4c75a63694d6574e50817d921a32ef0c65c338&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

