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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V54QHFT6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T172016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIEJXAZtiVKPc5Jr4pcNZkAoXZd9OyYUlublmsBdE%2B6QzAiBKkDpH6WZgnFNZHIYh8v%2FmF4oQE%2B7AW5xowoa%2BKZbXwSr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMU0DLNqNKo4DD7yCWKtwDVU2jxHKO0yDeD4xZUxFoY3rAhjnSPGJC%2BTJOUF9OW0htUmyWv7r6ishWtIg5HKaR3W%2BqYlD2ozEAojpmCNYBdzosOycRMUJFnQMRgmMkMaVQ2gGZogeD4qCkwyK%2FpO8PDGwjPYlgOCnrhzOm1zSE3TNPA9CLprf86M3Xdzl4j7J8i4E1omhLiX6Bwvomn%2BD4UZ7CfdBHQmkvLADLvyvhleO%2Bb1M6XKWKlDFFlPehlmLxHD7gKUSOIqR5lWKKAUg%2FT0MKk%2BB4WYvNES5HIhsTgnZBJDgoqZx2oRRyzGOsz0oFV%2FuhP%2BT9KqJQm8fJel1nFWSRkDt8E4Kw7V%2Fh0GbMkzcCn0eT2VLuRItPC%2FSdoVlzCt8zTf0MKsxeYaQYqjFR%2BHKRRVuTBBoI6oK5G5iPkgpNQXI501KFfjcJPvBVnT3x9MFzU6FcaDad4%2BxRxZxocokg8vhgvF8mKwhjyXMkbS5%2F1UQfBVMgjJ0iE3ZxLHUXV92FiMD7RVdiR4AZJs89MHJ932SeljEwWVtm1ZmzWykeuOZmfC8aL0oJOM0ffHHxLLMgz%2BnKWRk1yKWHMY1Gbvf7d07wzcpMY4ITBeGomwTCm4Sx2NirDNFRIty6Wm%2FHkvNQTw%2BMCwbCykcwgdvByQY6pgG0VkBG%2BjsahFp8rfH0gcmQXGmN5q%2F7KBpSczPldnBQRs3%2Bs9w7DDXA%2FGXWKuvk%2Bzpw5GAoIxxzf4Si4nRF9SqeDOITFGc%2BZuvr%2FqS3b62%2FO%2FLEFitF4YSujw%2FuQ3SSJ46MXuTuOxaxLxtcX4rVRwkUbBqNroyImnJV1OILH5viEI5NwKRUeEsL81742lDNO5HYUVaHqYAqpFMPkNGpY70PhAnUS%2By%2F&X-Amz-Signature=7ea3fb0dc83723a460accb1a5c8bf6c88666d391d47d2febe1037f33ea17e710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

