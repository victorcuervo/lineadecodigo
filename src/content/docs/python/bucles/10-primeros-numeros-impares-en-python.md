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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y2T4XTZY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T111932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0WGTYhAQ%2B9lVJ3AaFqDA4yOk4uWJED1AmrsyVQ7Qf9QIgEE%2BgoZcUsonfTdrx9pkcTSDIumcsNH2xXJb%2BTljOEjwq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDCM0xe%2BQPa%2BS%2BQ9kJircA97ivplbX%2FpyfmWIHg7Aq64vCwwPBYa%2BbPegwIVIeVSmIkq8zXjVK1Q8G7407uvuT4CF6TsGdqWceRqsdNtgODeqlvdshYbbtUOjx40zP2Z0l4XZuFgscOc2ITvOrgGxzbnnLCi40at%2Bt6dGpcaZHSAWaQVUwpgtjb0fruqr3xZ%2B5zM3QId9mgfILz3tRSDFnPzgIdrczGegit8X%2BDAJK5gGADD4NWj48J%2BhdxV2YVbXFyDnSWgLCCdiLNVm1kVb0MDmDB9dA3rnupUnv%2F0W5lpU1Jop3275B8hYW3Gp7T3i4%2F0rxxj3hxhpSGT1QyIIUpxYrpz2l5OiXz%2BOYtESo5kxZqRk2aUNdJpcLBj%2B0pzPDmju0ooj%2BUPXF3hkKWpJnk6oVEaXOehdtdSokm9RMglwBf8ywq6%2FzuQiWe3vjNvM3h13sd3nH4dKPWnET4gMS2lI2znP8ddJ9doMheI6PnCKKKbyhVUQt%2FPrYG6Az0PIwi6skXUFEEgT7QdhgyhT1znUTGjOvi%2F7NkK4Zx9Ay1jhw773kuMkM%2FPN5AzLH%2BjkBvEZw07mnDZxCOL3Z2hc072Xdr0G2HAfEUKvz6ElRRzfOIqyjjD5soNNUua6qLSp5wpBscIyQZmkLCWxMKKJ0MkGOqUB7DondxN%2BfjYgrLRAKV%2FmHpDrIQ7DPlRD0PBwlYliAQD%2BGvAInfFecjNThL%2BSk0D1LqB9ypYUX0P2bQ3YPicPZrNpwZ2REsfr26RW6Wi6SUcdEgyE4JTG1qWZkvMFFUsBB9WHKOOlFiDxXtVbJM2ce47IJ9gUKSLEXBpgR3rC9He4P7k8xDEAWO6qyAei%2FyiNnLUmZybZ5foeTY6qvZmfxWmZOGzf&X-Amz-Signature=a7a892c2d349b1fb445053318828b54c5b83f25cbc9fa959de29ce398642e569&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

