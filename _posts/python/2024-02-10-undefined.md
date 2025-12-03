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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWNN3D4P%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T012242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIFF3b%2BLMjc%2BcdYC4T2POhnLMNcfvSCeE9T2LmZhjX7GhAiATwcmGUHwOGdUUuSc4Oglk3E59P1PgD3j3C2Wgj7BJGCr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMxin8uOt80GZSv2OFKtwDz5BpdFBriJfDa0%2Bj%2F9nvGZYF6PFndq3PbkvSJRRdSPvsBC56CIoaR%2FQLiugk5KtQj8hJ9j0trEYg9VfOT4RDRm2ai8hCrVdoFtHksOuaiekLU51%2FwwGGmTidrvZIiZied0Tw8rIpQf33xBV3k%2F5yVjWuSGDuHehe3%2FkrLCEUrqMI0TtQr259Ef5%2BqRdZhUbwbKWtX4QUve5L32vVJsNO2YSlU7gixJd5k1CqQeQ7MdKhTSjuxGallrkDScrqfIfJNaYZPdAWuoTgwgZomrG73F68eS5Pp%2F%2BREIjVLj0rC4w227KpWecEbFVhQWC5vCaMMp7VrsfUvF5z%2BTCFME%2F2X7OiHBeSzte7cZQOvjGsx1UGVymy3rhd3LUBPnJ6nAmXLXOU0Z6IVFImWCVP27Ay16Sdpul5hBNL8HgoFfSfNgOkxXqAyi1dqwwAqRhC07UDzrD8F%2BzuSvpgIiL8rq5ahRIwL8gaw01bVTsvSGEFtkbfCnBqHHDccKebChO4pZ5fI94CRcKnEqaW6xhB4X5dYxPi54hKlVaWMbmKTdDZP7CuJPW67i8ljAmE5Eb%2FRf2ZXjHNUZPl6Rf3w7OXs%2BT0vkbyEuBc6hU9PE%2Fr8ZIACgtEgWXkKc9lMbll49ow1pa%2ByQY6pgGode7ChcCDCNwuVcEq4Dkv%2BH3KFDQbyHDvrdykEC%2FKYAorbpaKFastIpOvnnrYmiuz7d6q8sX15pqkXWcFBPkdtlnS%2BRO2%2FFPywu8d%2BQDrbqxE8VzlXzZlih6LspBtzkEy%2FWQ55jV5NJoD9m3DW1F%2Fi8eVbxK1cGjKTlPsqinhM2cbjX5XlwHTTd%2BClvCNwMtTzBtgRL8x1DXH8vksg5y1J%2FrYg3oj&X-Amz-Signature=026d05edfef4512a0f1b31168ff3d3c84bff6a62c1e475a13aeaabf6d805856b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

