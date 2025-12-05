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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3RE3X5M%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T020115Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF%2FkKkMIMoM8qZxafLx9e%2BkCadkMehy%2FEYDnfUO1Knq2AiAEuQV1av1lrR%2F9Xx3hUQAjlnfFfG1ER9U5DRV3dNURoCr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMWMVxlol%2FVy99zSWVKtwDuV37xfL1vdFdLYbguJkXhzGd5slPLgPwNQVqZNH5BwM%2F0VkAw82gM9AEOdPo%2BDzKgivxgJimUhr95D4j7qvWo81ZqvaqpNjcQwGcvfaK%2FKN8eT7UUxjPCNZyme4dXei3r%2BrVX%2FQG6R%2FZ2EGZREU7%2BYyVFbFrTSGXlgpEfWe%2BgWPvS%2FFB6KkZUeknD%2Fa%2BMAWjZSyXh%2FlhtOhtxr7RAP6bE%2FVDWZYKbRhMhRevYMjOWJePga6BQrv6soTOu6W0IF2LTDXWSSxIii1mztFJ9MTuUYl0iFNzJKyKFQtqS%2BT1BUyRensxTKCbz9eSYVng16J1Tzfk7Z%2BNc5zSLid8CsHMy%2BQRd%2FCaSBgq2xSuCVQuZWD4BtrOWNClmHafs5EC%2BrNdoCLWNbQlF1jFWwI5W26icVNw8LNsJBRwrym%2BPEvCcEREhRvbNAuz%2FUYSqBTYK1mFh4IlsCyU9kVR6Y7cTk5Oc7aZomtDGEsm2nYBTgn5u%2FhKQNbyy%2BgW4U%2FeZ9EzsiSs8GODknWy%2FHuePOI%2B8XUzL6f7tHru0KtZkzHF%2BtF4ed4ngNTNatbxUPjEb3LdrFvPv%2FTG6G%2BOZh8Zp3pO6FbJiY%2FAOQ74GKapNA15MTJjT5jHeVbyy3UP2MBna%2BUwk4zIyQY6pgHzEAB%2Bew8uiFBTIQ4LAYrxGxpF%2BwNA1u68oe9lYBAlbo0953FJtwrNhDUOWn8npM2UexY4eoKL1Sj68x1vvfh%2F%2BAUWjSxsN8b843kQAxpDFXS6h9qvpDmIiFe0C%2FTjo9BXSUqMKB6WpOY5yjo4psEH3dAWEVDPAlICyzynrfvh20M4bITFSGc2qXx1Q0tM6jb%2FoTqofPyRF8DJ%2FIBSPZ1cbRPLlDW3&X-Amz-Signature=1bd69139d86df274b93d6c7c385a529c8859fadbbd34ff71bc4b8311e66d26f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

