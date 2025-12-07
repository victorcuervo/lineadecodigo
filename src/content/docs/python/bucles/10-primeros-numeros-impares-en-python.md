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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666R5YAPRQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T124528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDfe1TaXEVRc1CHGP65jTdpPDCsPURGu%2FXySeFUGU9TYAiEAuBmRvl4SRKK6NOAajc48VMbNdv2od8hp496OQpyXDLwqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLFiFbDIhwmnNtMeKCrcA1mkxe6Cj7o2hoMKSmXxtcOjgfChtMcQYVqqYbuqda2KwAs5ZpzhZgqmXbGtvlPHgDHAoAYli46eUj4K1o8CjG6MB%2BMZ4%2BhP3t%2F9YMOvI7JfvmRNAmZCjN9uwHfDYo54iPiB0T50O3w6aFJz5mwHNeo5KzriG%2BD5Qdvj5AV1qzOSfb%2BkgzsL11t48EmtCG%2Fh%2BGllXqirUHS7DlopYqqyI2U89GOX4YxaXhXRcaXx2am492tKcUl0A1hj9FcBpalubqfEQ0RvKC5qHldDQ0nX6p8ZMwg5GupqSshZndrHJT16gzMAiK%2FkWb9GrKe28vmdM05wRmGGHcTDZjyHe1Kz1at38nHStFb81uH9LJ6eOsnhAhpdbs2La1K93t%2FUVFmOUUR6bLpxnmP5PXeEbRSQPV49w69avX8Tbk2xPenZfY5GQuDoq4MVxf0P2jeVEbCS9JAZUNTc1LH4kko1Rcknb%2FtIxPOYGgCn89rcc%2F5neHxsQVwitu6B8dUnuOB5EOUx72gy1lG6wQPmZbISuZ%2BQiN%2Fbw46p6KhO9ktRgfapP3xY6NqS%2FilPTbj98iU8e9JxWvxEpiUOR9Z9HbD4PrC1ORWP4PKOKT0DTCWBXdFoB4RJVT%2B2CcDyL2ruj1syMOqZ1ckGOqUBFf6kfa6wwcNGrdY3tLky1moiLSPv7mhkabfNpC7OLnzO5hrYZVIp%2FqU%2B4sdXwu%2F5g4CAXfuep%2BO2V12luefi3x4wtswcC1a7KndRTZSqa4g2FIFSNwTdRrG1PwuJlAwJGfos1fVrCJj6sa5%2FqHHn867GLrayRzQXVGeubHP7lrGZCeUakCS36CMl0yHd95ySqUUtZAKVUfUssIlGuA6eupG9W6JS&X-Amz-Signature=a633c8fb2e31b7a057cd799520797544b7f6a755b59eeb7d417694b567aa2d0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

