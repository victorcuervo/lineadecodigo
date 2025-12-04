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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UU7A7GJH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T232925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBS6ka3M1CYmtIdZui8ARZJFksxPalOWFMUMm0GFgY5HAiEAi1v7TreKcemIryMaZnBBxHotXlKURF5yVs0ZVAn86dgq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDIhOOIH3jDRIViCtaSrcA695EcIslQQHUXix6OvJQmFndF50Rc%2Bw6%2BMLmTngjbZd2Ogx3BLARmme1D43RwbBONatQ%2FVM3AZMM5WlABqDIzF367f65Nm2OSVQPwhHDkO5jh0OPMzuCPgSQ5%2BhXx3vmLKmyYpjUxWmfGTj4Ab75NAmx1InBPd%2FL7xKT5kN19TX%2B9ucX7pLVAXChmaoZ9MmWvQWjR4BNlUmAXCOpAMfyfYNbiakTLhFLn%2FYiPsem75S89roZPutFu7QBQAJXgCtmfEak1PJX2u3r7SShLriujYG4poIY7k0JC8zTgy1mRkWT%2BJZSid7oSuV70XWDlUAHObMcPTKfkrlCQrmbSrQ2kxkR%2Bslf0nzAbh%2FHJTHa7rGvgzLhFDWqsN8wJ3kbGzPz2Ed1xPk9X4u%2BPjQHtu6WPp7Nx2a90%2Fa%2FFueGdNtRNt07lIRs9ySzXQjtLEqVxls3aEpQtyadul1FMKwAIsHks9gEl%2FgCwfJFN3IkoD8O%2Bgea506Mxollk3ZBVkxJL9Z0SCEbxCb8AXY7h%2FAW6Lr1zT93jnKOZHgpbbfdBH7pY%2FqIIQQEynfWi%2BBRr5hLt%2F7le7ImfLvMi8T9donM8yo2DrxvhVGqQbufkzoJxOLj5tKA7%2FURHgDp3jHXtd4MPCLyMkGOqUBfXjKID%2BicfAvnFqnGmJ%2F3Ax8kw7qn%2Bn%2Bz8b5S1bD77ACmyOAUf8CUpa%2FCulMdi0vix5C7F78bh3Qdi%2F2pE%2FnvSXyzdVrZKbQOT%2FT4324QwFYviDaWiksLJjqbQbR2PleoLGsn1s8K6IZphscCH%2FriLHmERnV4J4pQaob%2BUx1L5FHTJHWEOQ8lgYGlCkio3voqs7mdpl2C3IZoOEaY8NJ%2BG0C6uzs&X-Amz-Signature=e4e899f94dd4a392482511e748112ca0febc956831f58a98fda1441995c05a17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

