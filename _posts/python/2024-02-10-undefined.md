---
layout: post
title: 10 primeros números impares en Python
excerpt: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
categories: Python
tags: [python básicos,python bucles]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FTR4HMC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T090026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIAX3IS7ymdMsXd1AhBLrHBpSWsgGZrgmtl%2Bq9bCA8RX3AiAEUJ2VkRK6pCMvRGj5rV0tpKLCeFZZ0%2BtqVioS5ZyGFyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM6uGS8IkAhcQYK1U9KtwDvZaPqTszCXWJXWFRuMSWi59oroRMJWfS%2BWgwp11xDbHecIkDeWIRk38xVysJqMEHHJO0COdUGt14Q2GOU%2FfkJprCjKowyz3eEQHzq3v1VBNFw68uCtsAVREnxbvZt41RUU8tFbGKH0wOQy5m3OjT4%2FjXJZNK072NF5H8kho3xfFQk6r8IV1C23thlocyhmvNRzcjpRBIZnBE%2FG%2BO56%2Blw1LyMhdbk0LNrc0kET8%2FHYMFovmEx5wX9s8OFo1J7S9cetX39uhRxbxNgMN68hP3hleNZYnigWFAQnienCD5tgzf0%2B6rRLmRWYEvQkJxpv7nwof%2Blk5rv7OsU66eytSr1iD5rmmq9hCJ8el%2BFhFhs4D09tTotM0k%2BdzTo9JIRV1eXSR5hQfmTxoWUr3%2BJqrEEFXvpleFScbT34AwM3QpTDI72321qUONtRKySTMKRZnrgUhQTTIrA59M0QD8Q%2BF0gXsBT4TVqSJ8THTwcsr1XZrwZxITro%2Fdeo%2BZtG8cJPqXCyAc%2FH8TKQAxIj07874eukJ%2FMjDjS9aDGJOnEAsQ0qLggdzIMwULXc9CA%2FHA7%2FQqu%2FeNulnMmlXJpzfI%2BexNM31G%2BSbFoC6%2Ft267%2F%2F1AtGBNh%2FibMyOA9yJkmBAwy%2FW%2FyQY6pgH4RgFv28Yghw%2F9U9MDZ9sIFbl4pHwdscCy1exiXfMi4ccil%2BCoouVk3LAwHWuaJAsSQZwp6drY2Y4SQwPpx%2FeeIqOc8FK9Cp65TcTf9ejtp8%2B3G%2BVD9vKaUdULyas8DIfGdL0qBA12W9ExZ1Ocp0gJdL9H7qwRrKH%2Bqiu5dbZKB5eBSUkX5x%2F2d%2FIc0EEfaMBa1c2JV0bf9vdT61gmaPqUPK2L5O%2Fc&X-Amz-Signature=e4f13e3b54429b4a2fe40ce9379ed37c3ceab7c09e60eb9f96f6bbd7f71d5533&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

