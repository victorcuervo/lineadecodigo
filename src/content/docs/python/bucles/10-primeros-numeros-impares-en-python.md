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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LOAK2RO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T173751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4OwQb6uv4THNQxKn2hk9elzSzRZrISXYvgUOyIIvrmQIhAJpyPc%2BQ%2BpEOJsIYJUUIhy4eUX9MHFW6IC%2Bz%2FMaG8zGeKv8DCGAQABoMNjM3NDIzMTgzODA1Igw9RRADz6OEiDFOi5Eq3AMZZUFLX9enkE%2BwHBMt22GWsfY4CqqryQS5JPz1iAmBsVyrwPQhU54J5plbxnvwlF9E8c3lxN6g5ChthbdhVd1r0czs9C41oNFZZh2f%2FDt%2FYYGuuP%2BSbU201Er5VcM0oxpbwL3ys8C9wzg7u1JrZ0%2F7%2Fd1GR2BzqgL11AkC8cd%2FcvtPm%2B3Yqm%2Fux1ukWchbNmQ2aH4ioXAf9VAJble5rY5MSPqwtHT6MHJFNaju3Z5oAJDQSDLoRT3%2FSvVCgvm7PgYqoXDFHGGWVe%2BkzeiMXvmA22Sy12SgTILQUocQaHI7Lh%2FVgcdURkKvm1m8HCEZKx%2Fx2wTf6QfcRIFAHYRhTd0xOpHQ6KRKs0THjYkjWGch77TBRQ5x6DLNw5o2wrWpAVEs%2Fq%2B1VQGXHYwM4q0blZWOj%2Fny8ldnOk2cejH6eXBa2IR6gqB3%2FMp6lITd14wmMzw%2BEMOZmhvBIks0NPSWtdNILjsZLnXrOJeLM%2BkuJfkAHIvKhNW41VGkJIZJN0fyadj9M2yc0BCzQio43s%2FgcBlTJgeCcSnsS%2BNTLK9z77RyArJi%2BbjeX%2BHuLo0NHvwNxA7fljoLcIrpordh829gU7OAiu31G9PYZ7CtOxBRUhMk8KbJGHYB3mNAE6rENDCm7cvJBjqkAUhPIq8IQOtTEUGHSItHZVj9rGYzNaGZXRLyntwhl%2FgvUCg0uwvS8G9a5EyB%2FMUXe6pYqOBcl2mbujqI9tBlqSF%2FKL8y7SoTLT%2FsgDyJDEI%2BMng6X0hrWoM24yFztHM1fyxirpJJ9wfU8y8veatPUZyS5ogZni%2BYS04uNQFmexs5PESIUFdOfZ9C3Qy4C%2BfEdpwqI%2FSb4KfqTkvDjrAoL9IeHZVi&X-Amz-Signature=8f33e8c376816bb312b61b278b82cec006adb984a1b4546017ccbdb2e2d248d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

