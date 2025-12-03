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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RE7BWFQE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T135755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDLtAdOU2tsDW7u%2FkI5Xax1GRryKIF%2FTjr6dFbbLWS7IAIhAIAuP0789d3nE7mNf6R73nd2Wcn6yMiEnKhKpcbLsvOjKv8DCC4QABoMNjM3NDIzMTgzODA1IgzhksKowvtzkE16wHMq3ANVZ0Nxk8Y8PMN8wF9jVMLvrs3YRTitqTSJT14DKfZ4PtWdEmnOfv9FQ%2FSmR0EUgm%2FHu4FgHeutl6OOe38s05lBqGrLIT3csp9cpxNTCNCNeePIyKX42S7sou2uqIe2SqmzW6UVxVh4MTpx2gNvCMLwxYwyQNBf2b%2F3d40cqbjNtfCpUZbv3c78WFOz09XgCr9tPoN6D8ygXigV%2BvZHEM2hHSxw8%2FQVAhWoQInaFLKI0LuowPRyeIg1NhnSZlRHJCCxr%2BbjS9jW3CnI%2F4EaAa%2F3KeFlelOWnSk0eezCdwtXn09Lq7U%2F6Zcdnz5fV9%2BdrQ4jSPhot6qF8Ss%2FX0i4q6OE08Omn8uRMloOtOJMgOyZ%2BqcU%2BKho55FMIIu%2BwryrGTAhZfIy3qHlVbR49f1gZ%2Fit9vTUpaC3vT2Kp3lh8esZ9iTxs3UWp8qmBMS%2BPt3o%2FugCjkgtLAnOj9sRue1dXdATRl940P6KUEA87DnCqNTSSWUmoaou%2BcwUKgXhrbeC%2F6xpjK%2FNV4xpo5mhnF1s3kZ10NMr6%2FK164hM%2FJQI7%2Bj3CMFQgkFe3%2FWrkqKPtLNRCQMVeLC%2BmGq5D%2BquzN4KkRGZzVUcQGRLH4K7qdOJMV%2FNcdl%2Fu3RbqfScypaoxzCN6sDJBjqkAXBgONtL0aK%2BMq%2FbnhdUlNzWkxo%2Fw2ScQFFqvvXfj%2BEwXwtmuociJquEjcUwD0d6NWyZe3eke3DF1ycgyNSfYt%2BWt3hwjJri%2FyCeBPkRUIVDjBez%2BRdaaHtqRBpaLgLLC4TN4Zcs%2BylDrs4kdU2QZxxccjjC9MuAcsM%2BZeMob89qV073jh62yVJUQUi8OhvvFFN%2BinAc3Sex%2BM%2BqTxcVnxV459EQ&X-Amz-Signature=c4a0ccd19ce0e4c33efa593ab9b7bed64ad2f7a193bbb0096c529defd75b7230&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

