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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ZTYP2I%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T120517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQCd6t2JqXbLQHUfkCSTPj8g22%2F8c2xHk20QFCAicz7m%2BAIgKGb4p9qp6rJb5naUFIQQFTOD0suhYEnV0OjmMfe8FAUq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDC%2F5Gw3liKxh5cawfSrcA6yXcMMcfxVWriMNUQ%2BHPQQK8S2sV8j%2FOVDSAI2n3vJtYhyJ7EiKM%2BG0%2BQ8%2F47ppa8uwcDXtdC6d84vuGmkncfcQgcMQWg27pM8c9G1%2B%2FrlbiMwapMdiWumLUeZZQJK8P9MBKVF02njB3G2MgMPcQfXyV64wNL8smExKZIMBAz51Z%2BuR1T2cDFlR7wamnfaTYoap35IYA6aYhzNCz5vvCuSTM9xsJm0A7GIoaTh%2B1TGzF1mfpiOpXYyd8WxA6k4f7kLx8MjQc0ycYfskTplU%2BkCQILXJVZN6jYsSiKK90Ho6Tw45AvSh3%2Bk8f1kVlOSr5RdbsdrJh8mE9o78Mt8NYAQEIouo4x0U15BUVjHpBhM48UGYPD0Jrz3ZC%2Fsqaj2o05IZ3M6hk4a2jwy0p2OGPUTTGe%2Bn%2FtFSxVW1aAw1eN8PSgAK9BFzeVF212I5aG24eMJ%2BrfeFf0Z7OJTdpPcotAtvgrDpAu3%2FjXFvYLAGXSEqKBM1gHatjUUHl7f1Bo1%2FOBg3tGu44YUwlzpIEUBzV0LH9B2NdjB8xB%2FSIaTto4Tfttt5dIDmaWPfWFF5egFpHBo2kLpCY8DJgF%2FC1Xk5wshktX8MAZixNs3ZTZqDyXeX8oedWKI%2BS2H%2BD7k0MObnxckGOqUBOZy6VpNQzZvvXIKidZw1Jfz1%2B6ysaPvlz3NpBZLlyYzDUCOiae67fvx382z%2B7lFcp8XTTtGEKTbY627PgAhSu2iV3dZeI1pzNrV4Q%2F4Rp6A1pU%2BgV4ukXB6EN%2BYmjI%2Bufba0WFwTaLhcBFd5qheqK7F%2B8%2F8%2BqCRKmpRKS%2Bjg%2B1iIDW%2FYertWIW87v2vDVWOF2s%2FwmCnAaeuq%2BLyybSHZsDbord6z&X-Amz-Signature=42541bddab72c5403dedae80726ef67aa66cf2c9ca6c9df2364f0ba4f8c827e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

