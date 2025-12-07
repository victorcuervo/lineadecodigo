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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCV2QETS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T153839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGH%2FRXUUXNflcFfGYD5lGtdvvekA5kehz91Nu79ITlAQIhAL4g7XsSe2Y2NxiSS74rCPiwJ%2BE8ZOHFcU%2BWxBuhUDPDKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxUWNsMEvjZudawpbwq3AM3Apm1VapUukyyNJ4RbY0CdTHhKgBC4iYIgsF7XcziJ%2FIuVY1H56vOUGXrT%2FEu3v9gPip7L06xoa4heLJTAm76y%2FIgymwdya3PFyLKbk9aS11CVMucMTH%2BccasxwaVDOAsJphOHFJjvur5JFuUhZ07YhB3sGp%2FriWxQ90CkhJ9Bm2cHSkjlCeHOLeWemt16yC22sdPmmIsTW8Y5VXNGx%2BnINfj0mZuyDvyFrmfKSP%2BmxxbPdDNqpvTv7iFe5vD8OFHMYTU02AHkUceJUGzaZVVvRyo6aRKsJPUNTaGTjKrIzCJqk2R5MlAOKcg4t%2F%2F69GyY3wa5QEEgRFHtCbxuhW3IxIRc2L2sl0sZf3%2BNAnGyoWCGIH8ioWCRFM5FF7dzUwOZb8GZlsuMpLYfe%2B2Eq9ZTeh2Tt6K0txbm3gk%2B4BuvgiO8HYU9xSGnQKM131XPk9nBCoCFOYQWHjPziPGK9MVxfFJ%2BTGlSjUoWlbKzQBXYGq2s909iEvBeWZUWqu97ohFCDpXuI%2FmQzw5FNKAr8cYcYpo837b%2B40FvlEeuzCssxw6yjWsSpl%2BmNTQ1fxBwR5t6um8Qne%2FWkfo89eZirYSr6AxyiY7sqHYHSy4sj5IyKQaForsrkS8TJg5XjCkmdXJBjqkAabxP%2B8B1zDTrRrLu3qp%2BasmaygFw3gjIoPPuKDUq5lGKzkMiCPA06Ia7hjMeBJvdfS3r1iuZv9OxOIInqBq0s%2F0MvBG%2BV112bYq1F8o3iEw5jIupUyDoL5Y%2Bf97Yyp%2Fw0q1L5OFgj42vqpayaNxlJ47LaMS%2F4cXkpgfhfmFKnrFBBX1QbNxQEBrJu015WPBCw0ZRzhZm4L86hAJ9zfxJ2lhY%2FHv&X-Amz-Signature=88840fb77b6b8946c73100f701f3b10332d0fa88b5982a0dd9de3d48c88bcd69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

