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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IH6NZZV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T194749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpd9t%2FKGjkav6aRvuurzpeYYujHUUPFA1D5bS5vJZjQAiEA18CDMfOp%2BDwIkYP%2Fhvc6t4pL1u1ru3uvAyMlDWN0x7gq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDGEiQKEAcRFxka5u1yrcA63sojesdVq0bpEr6iSALM%2BNjLqQRqSxpUk1e0%2Fo1eeLhqvgzZN2Qszss7weca90EF2hP5n%2BIfGNckbpKRrwnh8%2BtsLlt1HtRxPyb3ik0fJoMiwXRwDP6q4dm1sCLUd1pEQgGcc4Svq5c1nK3sl3INZ2sFxP7NtE79EY3D8crv%2F5ikW3%2FPS8vI0QRj70Dyrfe9ONsCVvtrusKFkrfO%2BY%2Biit5L2M7Kfwe3Cod91u8teGa94NHE4i6K1LtX3vn98%2Fs94w1w4PVrwpMQxWy8BsYkODDC4BvZ6fJYhFFppgSXFwAGA656qTcKvUSK4DEZ%2Bs6IAAOjVPNa0%2Fl6WxTaT9V6cQIS63ddUgWAgXvDw2%2BMEvwMxg4S72o0WaRXH1R5XDakmNrr1LhooWf4Yznbw8gqpP7sWP%2BAHYgQjsxh4ANirgsk9WC1R6ZibcMaz8R%2FlgEFGB%2FvNPUESAYSvlGr3pV9jSjt7CATO3GC7jlz3mSFCxb80%2Bq4TbuP4L1MrihA8UhFeKEzsRud1ul23trrByOrk0OnlczG0OZzBMXNs7f2mb02jCEHQUAAtPAbdRNWOxAf2YYl6mN5Gv9gAfzJ75ltXHPHOxc3vYhrXxm%2B2DXWsmx3oP7BAeXiIrs8xUMP3D0ckGOqUBVqPC46BSrUB1FmopWt2HZ5vEkCe4QHXCrtuIg0WkoZlTNgFCEHzRhqsLqHkwVyuluOsxJRJMU69L5y9orCh2xkWh%2BvPr8Yh2dbnrCWHNxEXLy2EwmMvWFhHf5Fcb4ppXTTfgjaOfrG0eCqviXL40oOSTQm2PGoLRU1puHoUHAQ0Bvjxd97PrkiOHlVYvKUNMNmnDcSwLHbChdx%2FljjJiMJo%2BfAt3&X-Amz-Signature=8f7ad3dbe860c9e96658858b0cb9ea6a6e03eb2dc8c3f0fa75c11ddcc97b3a1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

