---
title: 10 primeros números impares en Python
description: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
lastUpdated: 2024-02-10
slug: /python/10-primeros-numeros-impares-en-python/
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRL6L2HK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T193955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIASqRsZgQhGuGc2TW6OOcqQ6OrN4YF2A4YpzM4NY00uCAiBJpbJlBbZcPTqmn%2Bc%2Bb%2FNz2CTn8WEpYW10b8wm0trkaiqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoAKGArhcFx3P0aslKtwDJElpEHhKD9rP1fmDn9M5g0xKsD0pKOjlIZpqoPAgNjIks5Tt9dEDZ6UjAs7RHS48Nk6UeDPPbFcQyskFhwzvVC%2BUWdRgj9B4FYLKOQhm%2F5dY4YF0tobJJkSXNlznnX6no2yX8EVSG836CpIUcNHQryGzlE6pxlhvNjkABg6t08PC2BmV9lO4MB6e2q7vatzaa9u3yct0nitR8wJX0Ch07qCpNi2sT4xIun9jpxy%2BNQcZ%2FUP18R4sr1UP0S6bgzT2I8HbzGYSGrQRRbtm2kkYllWCMddQsA4%2BLn4wPmyfFKvATi89ITlu8gXjn1f41Z0Qma7otlHjxZ9qUkHdmAZX58txe893iAjHQ0k5m7Y%2F%2B5Kt0Rvm91E3NtB8kmvFUgVFRg56ydTELXjvYBdXhE4F0dpFf%2BFiqCt%2F8POCSV2isZjYmGbV1ecNdAFfGpKLCgfIh2Mk6G3YhPvpoX5sXHAymtWQz2fXDYp1uC4Ghhi%2FtV0WqEzuXwDhREQp0%2F3%2FvZGrUUL1wFbZWoqAvqZb%2BKW7T5IeKqD5L4pIfaHhh8bagsUVNrpa6t%2BVip%2BJk6mxD4hAb9tMHQPFu6Ai9tNrhIIqqXOQWfIdj45FcPBFpJQw4vH%2Bj0H2amC4hH8eIQowxbTcyQY6pgFs2UGg97c9eh96sHHlbdvy4zTJlX7lrX3waFZOUb03ttoeTmbD9hWk2IVuf8Kszpe5Biax2dvmDWVHRCK%2FqntSj8usFg%2BATQ0el8fpcnrcvodQ8kdcakMNOJ4ffXrl7ZhPx6zKtdnatrNbfju8yghNqfGX8yXHutHY5XgjXpD%2FsIVXH%2F2XWWQMKMvi2IgvmJzEYHG7AmkmUkrKkpRIaW%2F1cGA%2F70%2B6&X-Amz-Signature=5abc050de99bad29a2e288a3ca65975b2778141592a662d584c8d60d486604a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

