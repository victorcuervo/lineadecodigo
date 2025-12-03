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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUHXUJOR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T135616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCICXLJ81I5crW4NGUdQ7ZR8lu0FcTsFHuaLK2jjlQrqJuAiAeZta26TMjhFvqKZsVwiQFcmKcDDf%2FFzZKrbexVmctrCr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIM4I3fnh5e2JWMAzgaKtwDBOkPAbyFQ5Z%2FwXD7pI%2BUuxYtQXlr5%2B6gK9Gps%2B3jRfhMEhc7%2BJKFBThSW7to1DUxTFHSVzjGAIIFgw4FMrofGv0pbY1pNl%2BsRI2c1hBRtrntCx8vCD9vI8lxtCu00yIxYzt474sNPQhlXG3kgXSzReUwunt0S4lnfJfYIHRYgXgy7lBZvOAGn98App6Vo0s0mB1ghYaHkLGlq5a5VK23c1Ns1Y44%2BBZWuAScV3qwzn6L0rZSNzmC9I0O%2BlMrr3xAUaEKhe8ELVs4AqMWQTMB1bQSxirsF1dk6WxTmt7F8CDdP0NUukwyWnS9GV7lZSXDdVPJzaDhilENZScY1Ez0sB6BVEdn%2FSYRZe9sApzq9rWHsL3Er5bA33D0uY1g%2B6UZVKQUsuZkMY0OF6JXRdCXn1DiPZR1OibUSydxJTvMbwolcsTq1iNz8D1zKRI9Rt8YRnsZ35vbjuquyVQUuk29JRN7C1A2YGm2uUhPUb5dmEFAkzbQycWMtPEF62OFlSZwQwRMCCjQPhCtlFQ4nl7Vj2p%2BrQi9lslgxMUtJhprM6%2BgINSZ1MW%2Fk0saSbG1RZpumwwyPEKjWbi1geDJsXzmGqBrJ98TYlEiEVp32itiPKxa5RGBvRC4fa6Urxsws%2BnAyQY6pgG1FHaMx6zCgMDypHXtSIYQXvL1WSCsed3z2GnHFJXj25HQaCd00hT%2B8CbsrDrZdV%2BMlzY%2BPi7FKKeB80mO6y8%2BcNnd2x7tJNyWh6XyCfGJowp9V1SRe3vqek1Z8neey%2FQbpf3OylzZrBkeSM%2F%2BQ7IwkzAscZQ9hkvfiAqnBfJQet%2BPb4wDad5AnfZH4svAGX2NnEy%2B8SbEBc6QpoCzbse9I7RoMERP&X-Amz-Signature=361074d548134f98c7be298be77f72e9798b5b715d5d97cf500cbd26e7c4692f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

