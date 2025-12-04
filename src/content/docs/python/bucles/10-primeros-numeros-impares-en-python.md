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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BC5ODIT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T053840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIC2UVxPnV6m%2FrpSeq00Q0iReb8GtmibSFWRioXfqs59nAiA3DSuMkRR1pNvbKUkyBoe3MGTctzXtAIczp4fBQOkGvyr%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMxcmNq5oVGKyPZINHKtwDmtuGPelTxcTBH%2FCw4pmbO%2FYWZOEKd0qsZV6rDVheo5ia6Y9ncLm4f3PyQpABI98iC7zoCvbFybgxTJo5KNCAfuodWPT6w9UWj6JXjQKW3nNj3VQ2KJExH1mHTpIvLkj%2FWpWdqi4lxs9j78ArC1v%2BcXxbkj3t%2F8DYk0yOc%2Fa09pu%2FdgHd7ijKR4o7zZn7%2FW0574OHoQhT7b6SWH0VfUt4dg09A%2BQHpRnqr18KcLLWMkTbnZqkFKELxMPbI%2BWooafDynbrX772r%2B5CK1x19oacrJz3X4LbZN2iJd7cL5nnVCoyHE0OTUYzkLmpVMv9gQ6hBbteaDZjMG2H3xLB0T7OPOqfQcHpuoD7RtbfP06G%2F6WLy2CwQSDTkGouTFI6yDJiqx3NxEd3y9akwB6zZMNkyehuy%2FiLWpx8sVS%2BpZaKqJuxE8Vj%2Ft3SyB5H7MydPaLeM%2BASyne%2FrpzKxsZVnTrb7iDkM4dHNsRyLf3o8CbpdQieCkm7A8rudP6bkc3cVcNPrQMi7MNfcco6F95yTK4ZF8elMBzZPe0osTCZSetUM2TYHE649T%2F3mwRMUTvfpyKoi7iRc0Ps5nJomeLG5NB9lGNJBkIC7R2MphbCXmm6L7KbfC4JoWjGCF7AunIwka7EyQY6pgFDJab8Ya9aZ%2BEI6fHIT%2B4%2FGOBuH7V0heh8ZiFpKDFU94LVCXVjsXZkuNrTnhySj0lwJ5%2F2STOdHAkVjtMA7MBu7lFuf1Yeu%2FqcRaJJ4j%2BRfto0XT384yvz7Xl8U%2FEAc8GfCEu5LQP%2BuzVCX7FIjSfDhqNCEoINxdxVFTX%2BAKbvKq%2Bv2d%2F%2Favv3zlNgl9Be0LeDhD9f7sCb1Z7nHkz6VMzgpfdGNnPU&X-Amz-Signature=630b3d3a2523f6de148d5885f137547e9700adf650cd089335ffce5604964190&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

