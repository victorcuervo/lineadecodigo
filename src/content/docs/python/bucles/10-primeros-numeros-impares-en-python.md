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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIU7SPBA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T103526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHl4bqzuffteaAUcyI9dio0N3aZpHN%2BvJWT7Y0vuNy4PAiAh5ZZV5WwaS9yFy3hXlYCILr%2BblSfIXt6hsZXVOik2Nyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMhjl0W01cRN4oIe7tKtwDsYTn7ToVwe1RvgRSfsA3XWOqgl57Os%2FWK%2FknKRlz5GA2PK517CHofHFHDzx3erwkF%2FmSQKYjyicMsMMtAJfqw1vN8mvgY9%2BncLNUbChIydD%2Fv5OlO7JvgEOxUIw7CY6eeNgg2ldYZiwMpbkaTIwHCM4x159Kd4Kp5b5HlyZyJtogVAqjS%2Fu8ZlfmlgfAkV1ce%2BPKhAYB%2BGKa%2Byca7s45fsWYHXvd38SeS8wzRMEhinh98Xl8x8DNU9wqe66eLt2tSkbp8ZvVDIZKclt5MSj%2B%2F%2FLsrjSAii5LwONoKsYoiBObqUovEljrLR0Edguehbcg7OuxI5bLRo%2FXifKObQdgasSqBLSNdvX2A6bQBFW1%2B7rk2hVVrjT9d4upYaouf4yYFyuFf3So6rj0FeH%2Fkj4yO1XKAqZ3yH3iIikwVv6ZhXP0IcDyPeNP6wF0hvDbElxKe7bbZ8NDqgCiYvxZ4EHlEvm961aClInVhAWqYUiCYu4M1Ap3KlYNvexLx1psQBq28gf%2B0ZDHmejlkgZ%2FSeCOMjG5qbJ%2B%2FCp6BybdygTG5rSiUidM4sTBjco7Qx4kfw8FF9Yg7oAdhszwsDe4N4TUUIWNe3Gj6KlR%2BT7L1a8utOBpfrWH8sf7XmpX258wntXKyQY6pgFd29umkWEjzc%2FAgCavSM2m5btu5zshw2qrBGDX6ocWFRhY1WdafDBtUqOMVFuGzlGRYPjtnCni1G9f05rhbUthXUlxX%2F62d47d%2B953CNpOWG%2FuICECahaUeNJ2hurDupMx%2BF4fXfDuOfJJlRjBsCzJbdLxLJOtSYFSVIke2dk30ReCc6RnuIGt6aeMQCa86INpdob%2BdNHOeV7sKsQIWdB53LLamB9z&X-Amz-Signature=4f1e3b15c493048454a3bf423cfd336f4c29b538dc079771b2d70622cc8f799c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

