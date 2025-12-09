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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AI2GVHA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T073300Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID3Q82lIIiUMwkDavUawvvhunmmv6QGgdLGjzAsRQ5VGAiEA%2BsXLk2RScFnq1ETKXu%2FxLIrxBzzF75VG%2Bb6BDYwmiZAqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPUkAQzrm9jtL5mETCrcA5LwMb4GPBnXxuGMzkBmeu3qIyGz1LUCamF9dYXKXCMj6cfZQW5Co1o7YVsfgSnfaYy1BWlLReNwQiwoPPWJgS%2BjZKpMhyDPaoN8cVFX%2BFY1%2BBdhJY32a%2FmswZwUcVmbQOlmeEuHC7c9BHb158sIyMwOuHcoWgEi8aqQ1joHdSPNwQil0knQkRhg%2BrYTXDV4OM7CBuvSJNfvcwjn3e7qpYd2agniTYqWcXJ7C52542MWAtDUgemufHfYtw%2BnGxnrCTZ%2BE6NsWyIohVx8mHHDJ5gTaTi4%2FFqf7tH%2B5M%2FC6QjgHIKG6RDplnZalAQLsA4l00I88RjjW%2FawEdl442e8olvx1jiluUW%2FjGtigEknwpZ2d2AkTCdpBTmTeQRCLpa02fJCRSrAuAOxop0%2BZdb3MoAN2CiD8dzex4MXPMhPmNMxQkCjwT24bFh%2Fcjq49%2B3EvLdsISuU%2BxxKhXRxf4%2BGumcTLZjotIa1xFX56vYoc9iTGazQnmox5M0%2BFHhFUMNU%2FULpkqjjyxGORC35Kgi%2Fpu2tLQ3Kg5OQ0N3ELryYwRfri%2FEHIQ0WmkQpEdaE%2FCLtj4F6cV5Hka9xUmA52YbfwLw1TlHjYS3Vx%2B67WzLRb0eCqMinKv6RRbn3GrgNMI%2BH38kGOqUB14osVNwbCDzWQJ4u%2FdjgvgLgkSAWXTmHYZWSiD7LQMJlR%2BaIilrSnjNE2CljWaHV2Dkgv6zgItd%2FRjBJ9eJ3CoMUHt3hHcOZl7UFpT1j3CQszIngI4PoKg9u%2BmNqVbP2quC%2F9bHEyQen0%2FmlbhzVFHeNxzlCABaJb3gfgcaQMz2qGAj%2Bqw8yhHutfNNLuIDmppzK3pJJmehk6E2YGfNshZ0io%2Bda&X-Amz-Signature=b9762e92896192b7a522ad89b3fd481e0df50e455d94525f4f6f3c82dffcd32c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

