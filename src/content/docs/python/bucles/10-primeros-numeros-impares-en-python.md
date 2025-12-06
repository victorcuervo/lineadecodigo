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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TGA74ZH7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T164440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCGmCZIcEjOG0uNNbQBQAckrAdQtYx8NTWNG9OhOzogDgIhAPgQ2nB3ZB3t%2FWVVwje%2FZXfZN1KOtxZTlQF3zZzXQfvZKv8DCHUQABoMNjM3NDIzMTgzODA1IgxcRNRPIDoQbIeFP8Aq3AP2s4FixkDtV6kmGhN6lPGGf5R5vSD3SQg7wReW%2FKyoGKWXfqpYWrlIGA09fWQ5QYbSP381fYybH83tGJmtkwzaMu8PrLWYzLGMp1Qku4REpJonoEWyacZ3HrCrZ5mXxNuF1rKZ9gf3lGLWjgRgq9wKLfNqIzmhRcNs5SlkNqnPte5TF6KMawoakTT0MLTtKSF%2BJ5iOwr6OnThE1cBMGuOf13KZWcq7yyAERyyiiLszjfMV5z9RGSLoej3%2FY2DhoV4ID1zclX3V%2BiPAunuVT%2BKIp5sPIQCCK1zd2yqOw8nn8oQKDQikIqtxDyX8iC7A0hiuh5wQfxK%2BnQ558cxZawUX%2BFy2IinNH%2Bp%2FXAIDxfQ6KT7Ru%2FRF6I8YBJ4HBGkv7cmM8902TzzIDJWLiOsRkAFIKVjeMEmUEHNdQjd%2BXg2btU8WWhea31vI9ngPuIHLeg4BHvRTXRiQKZhIviAzcfnK7bMkGjORACjjVMNlR5pxADVq%2FbRchBZXHh0xkMh02VTcx6J8DOvfbk8w3RaLpLSC78JbsPKV4LbXucP13Rta7ZzUwNBMF5qBYWmTTy6amoo5Fv16R7oUatSTtimXoCiJW8bqyfxdWyGBx1bJ01JdRlQj4KTD1TLbCt7IlTD4ptDJBjqkAbbkE658Fk2hWbYeH8uS%2F1R0QcpgzVtd3eBqi%2BeMTKZ9HTLgbzXFVBs3EV71ofASnO7fsMJwSn2pbxlgKMqgzMCyaMfJuD5GctwvwYnpQbW2sv6mRbd3Q9%2BEglcy513jbtK0u5PlHNT7hC2fa7tYEKaNjkTTv68M1ZmUg9%2Ffm1owZMzFc3z84R%2FuCmzLrZClbWjAitG%2FaJYZNDy%2B%2BYm3TEQrPLYX&X-Amz-Signature=0effde34d2b02e3aaa89b19eef894193a853986d955aa02a40a4c21edacd784f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

