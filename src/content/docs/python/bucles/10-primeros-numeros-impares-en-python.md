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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662LPOFAPZ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231130Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIG5dVJeqZ%2B2D%2BLRb6NhblAgwsTKDc%2F0A2GQ8hhE922hTAiEA8zuwOZ790g6tn9efbOv9JZu%2BaZf%2BVr7czKSD1borCGsq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDALZ0sglYNOtHvAw4ircAzvIFr5qR0yWA%2F6Xg6M7%2BjBZikmnoHLCGQ0wegbeWECdny87sVYlrq5ISqpqWNt6ce6PMKkRY97YsbVXQMErxVg83VuqXpuMbaRQAFs%2F05EtievXda3Iz5iYWKkQ%2Fd%2FzmIXtbKcgKaH4aKDmi3LC6758jcRUJ3gPVHqEt6KN4d%2B7kBChMpIA94t90PV%2Fe9oBR5JbWAhMVTFuG6Oiq5QyzCDO6TCmyOGAW3Utu29EP8rItHrOlhsakHXFCwl%2BwiWE4Ek5FIGQaE7DLrqtIyOnNEP7QYiC5vlm5RWqR2pFA6wfnniqr1nrmpligs%2BRm0zBcjBotJ4m4ybVjXWRgZVb8Nb%2FF3pK4Dyvl1z3z3%2FroMbPKnLTzTcOtviYdaPDmCy0m95axHtgF3ox2RT8xZkkCJc%2BApLDry8vlb3jA4s0IeTpDgKOkytkNzWzHKTmmlodta5pkFr6jJzyDVSx1vw1d9GyKvL0B4DFYRwQw%2F9Uwh18Kzs0P%2F2nsCcnLjxPOf3cL2tLxmhaUfboKUaCKasOeLw9mzv6Vt2ifH0P72lSBMC1qwLNAliw8Oa0%2Fj7Qht5vIvcqelBTQ2n%2Ft%2Bb50Ah7Uz94It5bDUwsqd2ietUPU5jdLAEOmrTA7LfhRhE2MM33wskGOqUBt1nyYrhOEoav8WmYhkjl%2B3w%2B2gjx5agH5NciMbf5iD4zRcKHiCXic1HJK7un%2BthWkaRxYKt9SttQKNFPW978%2BLDcRo6%2FaQoVq3M8u3W1XLj8Cao5N0RY6UDo4MFOEXMRCit%2BXKSH%2BclU0f%2BsOgc8f0YsZeGsYOkggPVFvKo4JgnrjLY43%2BeeOHgjAydVDEirN460KgNvYCQQYWpIAZYPKMhsFd3G&X-Amz-Signature=5a1f7b411fece32ba4f064b47a93b7dfed856458d8d907b7ddec67039e0d1b05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

