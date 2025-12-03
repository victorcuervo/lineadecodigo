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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZI4HX7MA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T064022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQCh%2FCi9eqook5WVcD1Txp2b2MwZT1md5jzXXxmsEm5i2wIgFw%2FxBVpX0EWsCX2vgwRli2d%2BuZoCQHT5OCKgV%2B3CQDYq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDEYogHaNsnoFX5fdvircA87hRl9xrVofo5VE0vDDvB0Fs5YbOTXROdMIzEeaqd%2BHM%2BNJLSD3zxWS3BL52rqc93YAF3%2FL4Wbc0pHKJwIOD3NvETJsYOaP2tWoPQPJTRz4gHsfY4nI3j5OXm4h4kOvQTeZKoJ4XAsUtypcNn57v3t4V1cDqUBskMyHmIyqD%2FsajnFI9e7b1hYAHxD%2BljOOXNDCVuSYMNn9DO%2BJYq2DPiFFV%2FKKyYCTfodXu8TXdL3hyv9GGyT26uwLNRH4zzkCZm4HzZ%2BFk%2B4NYUTOt%2BN%2FxADNqEctwFMSwVIVZIWvlq7sTVewP7LQb7Y63%2FJ8nrsvrYj60ZHb%2BwyVc5r1oNgLEGuBrA9rC%2FpLsBlYquTKiUqAEMPEWUR5Bp7s9VMOQesD7Id68OWKRTlUUq5eYv3O8EV8Bkqw8Jx0NBEuX2BnmdpoA28WUUVRY4FN5SPX8uCdTlXYDNAqV2QBugMkk4LNjH%2BcBSj2QyAkbfpky7JQVwaM72eXOFC%2Bms0x4vluSEgOjFSmKSSWvygCIAIPCBcQB24196FqRDHvH1pDReJEaLjRuDNIMS2r8ZcgUT%2FD2NsIB01LHedj%2F0IyQtglrVD1lQXzkfZ%2Fv29yIateocnI7ciKRkPR96DI0e%2BXge8kMKSav8kGOqUBcgUC9amhPyFgOrabT5sbUeV6wp92yFW2e8GyiRWouGQOc3lLUxgdKwRWJwV%2BskWHUlXOTlg8xM0XPtdx4oG4iWNc71kyCd2qmhGC8irFL2Vmd4m0u7uBJLuBRqEHRQ0nWytwwYH1p4nShC2mIEsBc7p1DdqgBY9WJ2XDCA6AQgR7cZcyl09LFJ07nRMqZN5u8VCEQOxF2NSzWo89Sjelj6P%2Bl1V4&X-Amz-Signature=d037b6b68e34d0a2442238cef861414402354f7854d9486b7a0b7131def2cb5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

