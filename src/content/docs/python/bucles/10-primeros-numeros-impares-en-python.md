---
title: 10 primeros números impares en Python
description: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
lastupdates: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UD5DT2HM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIFQBGTsSOR4kiR269HfR5z0XklNzP4KTYI%2BBurXOgUkuAiBlbKHbnyFYSo1tBGb3CLK7sS2FphYURcEdi%2BqVg6TTACr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMtc5erMES8NfS%2FKLxKtwDo4jlWBbcPIg%2B%2Bb7dSw44yTsLNRpxyQ8ABKsCQSN4AhQqSt1LArmiN0%2Bk1wCqmLk3mswcw%2BvYVqLTCnlRxNOm3ZJv%2FWKN6zjzB32ISnGzpa98qNuxTBs9BRV9IU%2FWOEn8iUz1uWAwt5MT%2FKl03sQAWV6%2FpViJe1PcP2pZgNytKarkCAyrMkhCHt5NfeTkkrmbIvzeyDdZHeSQDeS%2FIChyQ6fP5iA9G2jLcRaeAUU7XjI4d2dCcqlBX5gUWw5fx6tcfh6dUDB450Yw69g7eDptCeRy2lTJQqmfGYrarnEFRjqR%2FyHf1iOATq496AzB0JyLqE5BdqhxjyEhkbtgA2x7jUuQPo3ORcQV9x0qNO3umkfTpGlCB8O6ah0BmmaNhRMxFRId4ZvB1nyeb9wmvyVtwoC0aEUQu3l2DhSc6n5x1%2Fqlf4K4t5VFXw9R3Tguo6O2rFkDCleJ9TySH7%2FqMio8za0kG1CRNo9nD2%2BRcgBlG6jz7CSlPAK3tl0B3DIZitKzfMeyCToH79d3LSsfjyQTX4X4jjoIW8UooekE7fG2z8HVgxuaXEDVEnFuiBSSCBKZ1JW1PcpeOlu2nLdvc0u0XGetMP4eWbB6iYBeDl1H%2FAufwDGXD73dcPVoJrkwnr3CyQY6pgFH0BRCpzJJGvb1ss58KaNjewuvAWoiHhsHJ5xQ%2B%2F%2FfcB0bESGC8gjduAYtdKawRQlP0lIkLjGCr9jhEY6EILQT54dukJ83JyV1VGSHsz5r7QeMz0U42EqO%2Fih5FcRk0gGPcIzgWTQN1ncHs0S5K1G%2BFgw%2FFDy%2F%2B5%2B4XMWbE0KkTGIc4PhvJ68%2F0ywanPZLC96ovtoq73%2BHMlCi7uK9oNxkY9ljCxIw&X-Amz-Signature=f90d4ec13ef2274be50b71cf9fa873898c6e4992fdfa64509d737f836ec715ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

