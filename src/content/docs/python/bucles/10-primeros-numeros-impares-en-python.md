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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625TQTQ6E%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T101344Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFiepeDBZxkTIkgmmPhgAuEFowDPXasqJDc7uV68WXs%2BAiEA8xho463W3Q9MSXfqes9aqQkyusFsjjK%2FcQl6rywYoXkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2Vp5HE4opmc%2B%2FBzircA8z3Bka4XYhpmB%2FcYy5uGoCcNWFRr25k%2Bfo8S%2Fv84YoQ%2F7Z7CKS1NCdcyj8uzsLJMp74K8%2B2JNJjjwBnhc0%2B%2F4yeComStiVQDmm%2FmHNn99UNWNKS8vBiT2bmUvJCR1%2BSahSYTN2O%2B27qkZEooC2DXtb6zLmU2fuOBJqufFk%2FPlR%2BsSUcKw%2BgeLxN4lKg73hjgBLas4iOGUQ977DUkvv04NQ3UsEjTwSgrYxHALjoBEqBkYPyfLNNqmub5tRsc%2F5u0RMwlkmA5f7h%2BgJHD1aSpXxpQ20NJbYptDHK%2Fuig6tQulDdXLmnp3W8iToknhPEkz6OelnqPJC7vXwr0PFl%2FjEBdiV4u8miiRbl4X%2BpcUcpyqA7%2BPAlDmKCR%2FFwXhqiqJzRjg%2FphOj6EL5JeeygUcHT%2Bt3GNBWwsLlwTgzN%2F75qFul5O7SEt5gSe8C9fp5AedIkxqN6SYwH4ZmXFcWDoXauOPFIYuaKq3ts5oihfYR4V9m5lXYMpef5hKGWqnTE9Z3piETaDu0NgsJjeMTzLMT2Zc5DkXcQ9pkM1larlys3I6fNMKOP5nyOOcLnYebwsNz6zkQ77hrc4IuNJfuD1Vmjm6UUUBg%2Fbo2wyJQ3cqLPYDNmHpM0mZ2jAmRRYMMya1ckGOqUBxeYVMe4y7g67mCh%2BGBPr3oVtxpiaofs0NsTqaQwVs0WuQe4LZ%2BPtRD75e2erh7CuJu7RlcHTtfkpWmQh4B7FUDyfviAvMfaICr%2FBUXeCPXgy7cqTgBsV4ff%2Fj13oN0sbuHh%2Fwb1YwZJb6oMTdqSnzYCWm8oQFvf5aVE%2BGFGz3LioeX9fY8sxdsQi2swZFhvCwhcPAdvly36yBIA1sEBcUPkMzMeT&X-Amz-Signature=a84f08c9d30b0988a166fa0c161cf1503b7194050a8f7561f8eab4d5f32b5e16&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

