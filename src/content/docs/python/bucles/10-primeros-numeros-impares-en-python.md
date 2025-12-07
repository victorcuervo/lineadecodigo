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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJHVNIOR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T061525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDUVQ%2F2XoaoF3%2B96ShblIz3gIewdSfM0POLtCiV7NXv%2BAIhAKPD0xdYQVbn2u7KuPG6bEPpqFGyl5K3DXpSKsCaBXP6KogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgylqRmBQK1wgZqJcfEq3AOGQWvbwnfW0Qz9Wey9CJ0vpzKvs%2Fs0Epya037AnvGntA2zHRbLy4v6rhvX7O6JWU%2BXoAQJEQ0fxmF8V2pQvfsgIAtG60uIx4dzguQSFLDnf6gq4P1VqLSyNQ3IMQfORvxTRzGX7Rl%2FKYf95BiXo%2FD2YqpF%2Fl33wjf0NLAbNbXrWIwBhVKKd0Iw4cWzWSHCAZLu%2BdhC6pOLzfMpYEUxuKiPdkBeyWqqQKGGNtzxZZRbCp8VwIGS8b88pCIjGmCDQN33ZbxAakmzva00o6HBNtMbMyqkHzHFBgRhwzMxa93b%2FeWh2zAYjuDlqg0o1cNqFhe5eceCGY097bSLnad%2BajWnBfRrN9ZNo3cYjP1mO6IU5qXGSXW9txIa7Y1nYqvi%2F33Z2ag9nlpPuSfG3uwzU70I7zhoH0Eojnn%2Fpz4KdAL0qOgWHqkxJWARZUhs4lV5NOB%2BlfI4YOG%2Fa0wiXTS3soe%2B9HhMSRMPSNfW3x2hvUmRKWWh9VtGKfOwEYNLbgyGkRGfMnWPoI6Uck6B7gekzSJ7NQa9H79u09voR3axJzc1Nwj25VqmQx4l%2FpoCWSgrSheIONX0qS266gfbudwkHTgxqnn1YKr0e4Y6uhW1syX1kfnzaEKRq2ZQOv8PiDDWnNTJBjqkAb0%2BUhX4CAig%2FFmGE4kYKQlvbFVazoroYbUkyAgo9ogpro6LNzFLM%2BZZZWDy7FHnv6%2BbIU636ew6%2FERHzUnME2MJhGxP7snJhpfLs%2BDrX1cg4mNv5Gb1unwWWup6EpdYlfxVNVeT3tIg%2FQSgjEWAMI%2BubL0V60%2Bmp9SK8XkI6Ug4zI5%2F6Qv%2BgwRRpCdXujStxv0e5CZwbyDARq4OHhWGGzsXedhf&X-Amz-Signature=f5e116e355205879832f4ec66806a66bbe9a96da5c10ee1faf26cf9f534e6e57&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

