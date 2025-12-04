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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDBACDK2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T043658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQC1yEvdwiv2v0yUsNcPFHivRHHceF1dOC%2FfO0iEn5h0JwIgH6vp64FSC2K9bEUYIaH9tbtQu9uUoJc24QEJCWpxGWIq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDNFmmTmcYtXsFuK7dyrcA%2FxmV2s%2BN49HKWPU87QAHhFR6GSBHa8ft2BzxzlT3IgGK1pa91xpr1x7wg8aW9fVOQ8ph2%2FIi5SQnl%2BSpnsAqConr%2BgWFo37XvKPR7Gcz088NiKEwowFbDhNylQh9B4O50lHD15WQOA63VKSZNBOfma9F2PuwWTbjKYOjz%2FtTmk%2BHtHWiTd4rn6vBXlMCJInE%2Bl3sCOf2pIWQYDUNb%2FXY8W%2Bnm9WFTm1g9OPX95qZw4Tv%2Bk67sKHL1%2FlIwDotTUGvlDZdUXV27xcSq7bjvkOnqnHXMKIk3Jw8YRqV8kqdhPEx3sUsfVvPnOeZoMkvPbnXv4X72%2F8ykkzdu9FZwkwVvR5LQgm1ZfALBCL%2Fm%2Bj5UslHhkJd6B%2FvPsBiBfdRdb4yW%2FMtGJ6eyG3uCJdMDrmKHDjKpnVrytDdzh0qVTeq3h54DSn17zDS8ydm0UHsW%2BVPrUR%2BFkXVgouux3NASFGLC%2FJRQ%2Fvh1m0yt5NA37yoMgNxJRltZcSMlMt7Bvcmrxv4cBw775f%2BS8eYe%2FhhfWjgzD5JbjonSlgITFP8lDWE6DVMfZdF79auP4P8FH%2FXZBOncMc4Tqzpg%2BXBxA%2BLQouQXTbLVYYf4ep99ckouwI5vDM1Y003rijESZqKkKmMPmQxMkGOqUBaVcbKbEuiI1%2FjZSSH%2FdIX4akMKLIuUedBdA7FpjS3bcR1KRR0hhZUbbIwzslSTo8U6D1GutH9DLXR9Vl1OBBLx5tlEX6PEk8HIQsT7E8cVZZxhf63zLr7G4cTP4W2WwAgb3fDe7ls5D5UbnYiddP0SStMdb3l0W19HLLdlmO8LVZVRrYGtfPtwhHwb5VN7ntWY4VFEC6e5z6QzfPOdyPgnSn2oNw&X-Amz-Signature=7f30b2ee7cd9e73ec01d36d81b4f12d75529ce7e9b315eb12631843835fe465a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

