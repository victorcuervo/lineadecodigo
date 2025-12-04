---
title: 10 primeros números impares en Python
description: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
lastUpdated: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MAZYYO4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T080441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIF4%2BhM4sQUfiW6eN3kaedyXncrfsJejujfwC8m%2BuDgmfAiEAkUFhfZrZss7LNLet3%2FFs3LG554b7i6EL7yQ2vL8B9Ukq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDK4wZmtyOEFCIzz8%2ByrcA%2FJJz%2B4Vq76TI5YAh4ztg0xVVpCNWvlyIGYlgGwTGzMXDvDzp8wpbmr1jSb5j9ivRoef5C6HPI8%2FU9bDu51rlec6QVC39Vt7vfN6CVb10iAvGdQdh4fsMBWXcskU%2BQMW5FJvXpn8IKP%2FJ%2Fhmu3oj5Is%2BAjwpaI2IjKZv%2BMzoBA5qWW8ZO%2BMs7goN4ij%2BpaGrAJKsnwESwn5fYAOLNPQ%2FGVZfLW9tR8DmFSclNOUFB1t8u%2FCHXXVT4PPon03c9fhA5kJE1LXyfR2TYiL9z8mutjnedV%2FI90OalnO%2BQ4sJKXoIy3klRoNylWb80Wj4M9FXYgKhuLzTbojnu7QEV1NIIL%2Byb7kcIJNk%2F6xZCG5EqUkI0Q5MpDCYOKFnhrbV7MUHqd5pSjsGMVDYLvPxlgKZCTd6qkCT1zT0tQbKyKITlRMGAim2DCWiR03b6ZTX9C%2F2ZDbG8wILVPeJlB5KQ5nYVQSTZW7Pm4zjmqj%2B8%2BccMy88VcVQT3Ia7RphMctagytIuB9FD%2FM0tMs1GMiJ8G3EI8rIADUd1tnR4CDxbRXf5T%2BWHMPifyzaJEn%2Fgr2wQvtgyn8Gt1Tyjc%2FocFcCT3gDurwTrhiuZxJ2FesXpM5sI3Ky2IpPMJkJpK%2Bc4%2F7sMIDpxMkGOqUB9pwe5DLMVguNeWRULvxZYap13MjjYznWdMeIP6Em7Q8PYZZV5z3FG7QfYLs7vygEgjkTcS%2FUAa6S0mn%2FqtwyYX%2FyANq7ZxYrDbfDDV5krv%2BO9tp12CRrMw81KhPLzkGvJr5Nsx%2Fr7d9qFPEu6sMycAMuR3wWywt84AIGuIKwio%2BngGXdFy1XSp%2BtjDrovnRoXzgJ9YkNZthE7Eny6Ld3qmu3eKv0&X-Amz-Signature=e5bf3dc98fc0f5da6b4151f8222859819475d4e57c3a12d3f96b1d1abfadee09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

