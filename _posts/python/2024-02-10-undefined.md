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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJHAZ375%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T103433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIACVaGI5ogyBiQeqftqUM97mQgkqxFtqhQOTkuU7Zw4mAiEAqX9LS84kJ8JFExzDasSdnAJ6EOCxmc9xic4n2uKgEG4q%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDPYMH%2B4phR6CiQCgMSrcA0JLgakAGHgWKesXTLr%2BO3jkbLmMM1Sz0PgiBKbYjyykoY0NqtJmhcG%2Bjl5XRNT4DdAN2YSTaLhQ7XU8WQace5aPMLGX7IStBOC7yJa6y%2F3chmoCUb%2BRl3r%2BMVHVp4PPmZcoQmT%2FYUtKgBLV9A4ur3MaYcqCRZKNZJI%2B%2B04PMcamq3jKaOwRH1TbbVovyWXVjUDEnpJxMrsFgtrPSh8JVoZJ8Hd26MZBwQchzKHLlKAQr3PcbQkczJmoY1PbknDjnrzS38cFtQNnRAUZAxe%2BRAl3TYSzD4BAcvY8VjkpzjWWr8o5Q2XBxRtwNNx16a%2BPshIFh0562Y0dU0GztrZ0BoTcd3YVQ0KvK3yA0MljAidkBqylIXwM25IoNkloyLQJILG7jcFhs8HQGWTWPQBLZjKEsXvWkhZVlCoQztoyU%2Fev%2FPZIvHmdj5MGfA2U4tds1%2FPPFgcEGzURAn3%2BwwM7GyTPDbLWg3mQSTvcLL%2BmbxrAgVTT8dHk1cxstEjKMqprNCj%2BSB8rpGWNKj9CCa36d7Xo7e%2BUZDwxztPYzQqAKkhSilCuNCxrwKTu9%2BHluUbmpqSMKTfNoeslntiTNN6oJB0LAtZMsnG8lNnh5NrKpCDk1%2FUnxgCRQzmNc2vFMNmSwMkGOqUB0Lph8dUsV%2FH%2F3mh%2FoYQtLnrYqQUH7gaa8PFudmDG6EQeDdzzUMW%2BxtKOYWF6OB3N7x2SGTG%2B47rqAbLqOwBRCQ8%2BHcz7A6SGSZ%2BsFV5FP%2BfNkJMITpRr4Rmvbb%2F9rA9dng%2BU2J7x8YHprgRShYUAEVeZ2DaEttGGjYwDcMR3WTw8OVfbDy1A%2B8VY4m4MYhSAGker6xHNDcpX6w7uDi4wu3oe0FyF&X-Amz-Signature=cb1f768abee20367d44fe1da234725aa37aa6465abea4ba0d16b2d74eec607a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

