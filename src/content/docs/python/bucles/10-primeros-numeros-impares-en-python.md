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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466437G2DVU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T075849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIDyv0Dae9f36%2F3UwVPoyfLNn4FeKwZl6wOsXF%2BQ%2BcU3tAiEAh25Ax%2Bu0b4x7D21OBoavX2paX7OZoEbXqB0ItKX4FYkq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDIoSxMsah%2BTyPBES6ircA6UWAwWBAKZgZKK6YYQUIqMmrR%2FNqugLnn5VkiXPM5oeZOtf4J2QQrqztvn8u9Go7Y0yx1D8n5p6B2yiBUiVUVcMoam6V1TRrcl%2FW%2BRB9UqSF55OlOR7sBtMNtJIWsKCDqYO6rNwZWZ6z4iLSpoAHWo5kmg1EBCnDWYYnnW7SMC2ARWLMBzAbdxFOgAXbU%2Bi37tIPUxnI5idmsCy7y%2FVeL9d5VATXPhPn99i%2Fc%2BoNE6%2FUoBIOGIpLJSHvpBhevHzepKeG%2BWLOaQ0xnYppClutvAkAyPUwzKfh16QuKxZL6iiGdk6T%2FrcSXkqtSrK2bwW5LpcanPekY8eagKUhZxFHbjodV%2B%2FtIklhl3mspjRUknj%2B%2BvECIlZN6Ix1uXkjVc5KDN3%2BsP4fnEEH0UCxMbUxoBgX39GyEqLGJR%2Bz3zyEa9zxRKFZJAo3XAZsz9wxnK%2BUrPSXqdLErQytx0n4Wckd6H3ewiJlYQp%2FFNKvKVXI8uavONpfuRez0M5oV8RZ%2BpiQHCdUTCKrLv5MzEgQu%2BA4MuWaYBkmX%2Bq1WFlTcN1vvNI7pF3Kh956Q6uw0z%2BwnGzL%2FbyBdqrRBfbsgCQGEmo6dcP5iQFucoRPnk29cibkDfZNhU%2BOX%2FDbXATNyWvMOvnxMkGOqUBKASi6Z0yBKPNWWoIegGo25lKYUhrHdUfHAEZFTxr76lWDabdnkw4Lc81Y6E82ilzIdQMR0BaX7UgkYgts1StCpCq%2B7pnaG9a5MmQU1PVjU%2FQrJTBLdIOAEXM%2Bqezz9hYBPL6QsNLGiazE6ZR%2FwUlHu3jPOhtxQcUmwzwt6p%2FPxya8NLvTWuWGm3U1SUdKCFE46R7EPlsBnCQCSQ0hlKywGjunawi&X-Amz-Signature=4f14cf29757cd345935c3f7ab46bfb56c357aabc86c0acc2640678b458e0e98d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

