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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OIXASGK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T121250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICDA6y7h9sJM9buRLhe94pNBUGEQ4hh54Gj%2BfK52rvDdAiAv%2Biozqwf71ojXwX%2Fid6x%2BvuSHUwFgZ0Dc%2BlLlIqrAZiqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnoqswpJB3FMMpesfKtwDNuUPk%2BovrSJ9M6pm4XrADJjV2YIfiuxEDdC0i4F3Y%2B7tZ%2FXY125Jp1a7qZmjrg7KdqtI7miu2gvSfRUseQsy%2FANv8JkfP3eSiTDK0qmBIiUZ6Bl3AV3NxGZuqbRxCiRwI3NoHt43Oz720kzjdMKYBjfKU8vA%2FRgK%2B%2FxXKySamxY647CrOrUa4Z%2BQctXCBcgU6EgGcPlRy62gFWO%2FzHM53zTO8bca3wVl63x0lGpPNb3%2FvSpEYuT7JQ16YbuYLhj0FSi50eVBA9fRwdAbpI88v8QdrixdnKMoDDVFGEJiL7SCrT4f67FZyFUcWGNedqVmJyCjgJs6ATmFmDKEqm9CUV3XS0AVtMiBvBgu6syQbDhvQCwIChRuGRIVVH9KCOQ5pO%2FlMmp4bLfDvyG62%2BikA4aQcQxPx5uBOS3xK1yb%2B6OSUP3uM8mGFH5QaqOIUQ24gK4Cf4TDCrC3I1NBHialJ5FFtcseatKC7W2wV%2Bm2K7hr5uwLJx2QUdMlm%2Buq5buDJsOJchZOvtEFu7P43K%2FajpMicYk7uSimgB5yPaTepxwvPH6gzRF%2BpEGVghV5eeNw27o95NAVGPKH4QgD%2BRBWukftjzktR%2FIArW0Wq8vkAbPCXbELyH8SU8yhjxQwyZnVyQY6pgHuLns6d9bRRXCsa42KZHRxMw50YOItZPUF0MGxp6szpdFjKiw0w8xJtcgqaPc5UNVBemphj00uD4D019SM9gYHeo8Y6R4%2F2WkG6c1VppTk8RAqfDKo8aSHztQ4T1hkOaqQGtvuFcS34yQ1sknDREBj82l3JQzOtVIDV%2BEmnijaAcwzlPmXurFDgSRAIr852ScHvqSNhKvRsgX4b3tWfIlR0MLTTS%2Bv&X-Amz-Signature=c8b3851b954bd5c7c4912e1f8e29b685e8febb6e3545b953a1effca7c8546386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

