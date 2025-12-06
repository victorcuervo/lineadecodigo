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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2UM3XJS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T123449Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BJx7pf4YsShMlb%2F7n0HIugSfSBl%2FdQHyCvZD2fRLxCAIhAPcYsV7yABCcw4Bg4pDs%2Ba4U5Wac5VjIxBIhy%2FjEGoUZKv8DCHUQABoMNjM3NDIzMTgzODA1IgxgRtEAEPoy%2Bt9BwGMq3AMOYht1Fz7FMWz1vfsZoil4TRiUyCCFPTBCAVFjzCjY%2BSEWuMX7EqBYdcTS%2Bn0wDAxN5HsCk4LrfTIdsSCIANRIecE6hmYpqHpbYhRZFg0skLbPubPMYm7WoNrN8CYbIBkozEld%2BeTvjJPhJapHmd%2BtAt6rheemsji5mkhjCwg2j58idV%2FGohXQdv339MUqDo%2Fge6CnZ1BdUfsuBmA%2FBjMt0zssR8pUdLgghks9CB%2BMqRV3Mxnbo%2B%2F1ljMUlU5ZV%2BI9MS4I6EvgpiDjv5WHLc0RDWpnxXs820siq%2BkSFCg1sWb6WvnA5Zid1ZZxsgLHQJNDfSS9%2BqurdA8nvyHlfxWhxEv1zG6HD3%2BYJQFNZPLlr%2F6k9bGK5xP0GF25lf7cJc6KcokA%2FFcVkJJXGVQHU82DCe1eGcOMHFrfXLKYRh9OJit9JF2L1sFwghl9nv2hdcIdfNlkcCwwkPhYYroxJI4nUkMQ9P2k8wCA6NIiCDpZQNmaq8BVZsYD0mwgfSPs%2B%2B%2F6vDcp3z86GD2UfOfxR4TIoIqMID2oMu8TIJ3k4ddQ2%2BjD3SlCJ12tjqQ3MoGi9xOzz3pyXEOnDSJ1q9QrRBloKGbKcbpQB3J4pziOrQ4dS73W3Np9JTP%2Bx6H%2BsDCQp9DJBjqkAVWfKKG0f70ZzwXpMKVttNkhqKx9YAXUb4%2BcACK9O1LNL4XBkj%2B0%2BhDL09Dzxc800%2BqYP5CqQP%2F2YQh6NCrW1sDhJkKDmjxd4LHHag6dYMi%2FGE8HYtXH1pGHQqTJeVth937mtvv5unAh2%2BMXXeISAqGsBHb2PGE3lLXePHuPsalvTSMtKIJUVawXBI7P1PnGhq08HHrZ%2BLFKClIUaL1QYm%2BKA2fH&X-Amz-Signature=2c1b6a19ce70d9aa9d95fc27141d8515ef5d44046bff98d56b278b74c4398671&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

