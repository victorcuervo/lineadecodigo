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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IOUEAT2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T191658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDs3axCdZ8ALUqn0t%2Fq6DJ%2FQWdF1SoWa4ZvXo24f22uCAiEAjIJSbEVlj%2Bxy2jE1RHMJ9jVdN54rQvsYXUU%2FD0y134Uq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDHpjBctXfrm3SVMmlircA0xkb1g4h5oaMvuIQa%2FLwQo6lEinusbaD3KvL7Mbs5A1dCbeu%2BD16aGpociawO1M%2BZEUfmHJ6zMKEqmgbnEUw1EGxT9QpWlNhj%2BwwVoTTxr2CoWh0qD%2BniCx%2FviveTUa%2F9hB5EOVwdJfnDcH%2FHIeranLQ7%2BMCpglOWHQ4%2Fg6zaVdP2P7GQ9byVLFsNqdFBZwsUnZ9%2BVoDy6miiUYMAlldt0JRB45L%2BqQl%2FUvxZAGOkZwd3xOq9LgCnayySysIulF4jbv3GQa9qTzUYb2trjiM2j%2B%2FtbRZ5goTNt4tnum%2Bm6fwc4kDaRq8t6eZaUX5JVG1lzNJhKbhe5IjQQr%2FtfbRDjHzIKCpyjaT6r4FK4ByTlfT3L1%2BYA1Qm4gIwUHEFZZlCDegjElR6EoIJ384Vd8j5rLj%2BMCTEaqRF1w6yX%2FxttP4zK2Y8EugQeppPv7YxlSu2wkB7OuBjjEOxw4EDFk%2BOTYOmMwN141RXb2IhEWNhL%2BlZQ449pb1OIohfgRlUaRPspGb7M%2BTaresOFcZDJJTPa1rd9Gvif5Gc6SIcpbgkhwTN27Sj1jd5dnXp5XHyqWkE7MyIhdV9d%2FPXdETT8JNunjcVi%2FGU025POdPsDoH5OacR2oxMF32DUm1q%2FMMO38y8kGOqUB5zJhz9Toru5DigfaOWW7hMQhUAKomsLn0ItfiTlriB3vQe8uxKqgv5jPatLYeS4hH1cojtEX2uztsxVG46ElNji4kZPLGTVo8Wz8SpGYJrGTW%2Fymay6AO52TxnW0x2YV0CLSjNzHpetQ53yqwIH8ChFkGI9VINJ7Y1X5et%2BTAY9yZHkftQWS%2BymDcgDiDx9x26TOYdSJ3Q6q9IQCUsWfNUy1A1A0&X-Amz-Signature=6f7274f08b5068e53580ab9ef60f337ad9c146b64aa27ca8c1b74abb1b46ae80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

