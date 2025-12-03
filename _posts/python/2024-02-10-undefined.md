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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWJ2XJH3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T134232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIQCRrPNXIYD2LsZwRen9gI1MspTUVutiq2oBOH9WgkwrmgIgCTF%2BYOwCjhdON5w4wipPGeR5ZECbr7%2B2Y3Ei0Zhko3Yq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDHaOsGVGCjsCziSgCircA7jH1pnx7oStdyT0y61FCKrI7mLPEfyT%2FuvXRbnOqFjz1Dt5tmvIZaeRvHd3XmvdGqLWazfkJGgmimj7%2FwqNfymfCyjuRq9M%2FFbJPAuvGiXnubG3iK0l%2Fi94Q%2F3YrzJijObZ7Ea2DAA04deXGxK8pFir90feoL7REgxSefCmqyEH4yISqkpFMPhRtfxSP6Gx%2BjBcWh1aB%2BK2jp22mffle5xSdPTiCeG4X3enjxq7runeNNcfoWSHY8Witqlz16kS9fAOHIXLVWylUPL3s9BzwKaQeTdC3SjWZwcgdz6Lbf50Gbm9oDLhFJ2SBxsKjSy340sn%2BEeWSlWvUyujJZeqpuJwZqK4ELHbzqjlU%2BZZ8QeWynPp3KFmiSxvx0mkcCqY9bMpQF%2FQatzdtORxJ1Gd2nw3O7U%2Ftif04VRu1fNrtwsbLYw5KygIqYO0icdB8Mqci05T5XG4umd8v3Ut4kct4mhEKFLy6R9aoiE4lk0nUclmNQBxLF5W97urF0kdSiXiJR2VKr1s3drC8YVTxdGQHb5NmN1tEf%2FfUYaqCVMnQaTnHPCIgcM36KRsjVXb04jA3rt7mhQDsutYyJAxFUMKi54871GnFGyPULvrcestvxtN81s%2BwYK3HXE9luBjMPvowMkGOqUBKaZh0JCEkwH8Y6%2BEFff9g9rnJRO4d5rOnTH%2FuL%2FVlPF7ZHLJIvMi8hXyL%2BYU2tfKpcSQ5GMKZGQfZUnG82I7AXC04vO63z5KrYAvlnFDDO7Hwo9eCYRNpqTfwnkLqqokD3FYw%2F6IjjuF4kjT8WSp0w312J5ystLBE15LZ5ri530J1LM7uJznPb%2BjtsMHJue3Gztjv7e0AeUmjqXCdHvaHtGYLIr2&X-Amz-Signature=13a88d6bc3ff62c17e75b09b37347dbf7c1f3473880e2556e1ab01d631277875&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

