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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGLBEITF%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T091645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FxBS1DxeDp7ytpzzCchslR1%2BBjFGR8hzCFC%2FaAIjXjQIhAPC%2B%2Bo4QrvkXrtwWtCkqvsMC5PXFpQm1uOumB8M7x%2FNiKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoKY%2BE8v5eMy%2FK3J0q3APpdD653dgh8s%2FOYXx792syvG7AlkAznPumpT3hEzh1%2BP63kqYRm2lMgCklLYkHBmPgCvy%2BBBU9p6ohnbrneGORPOHtyQ2IPjJdSPP34EblnCCx0wiyxDzMbpdZnxBc3mE77S%2FyHo9pSWkawupwY0HPZEOdaRJGleXE8%2B0J9DqQ6GTJenzX3cY9X3I6KY%2B1KGHaSJ7WAJazb6YgFzQK6qlj5BWI5HdceLTsS7uEzXGNKLC4LbmGqFMy8IAm322v0%2BevfakPNuHUeV6LHt8gmgDKVMsrIbdP5XEvsT9uyRIR%2BQamG5lnRMfXN18WultR1c0pGdWIFCca8iJcXZE7DzXf1EtIlY757Z8Q4l3klvIB7I4UZ4p0%2BQhkDhQF2c5t3TQXD%2BfGIGFLf%2FFaCQJUtOrC%2BM88i3ss%2BeraoL5v%2BbmwTdcjf3a44lcA2DZyZInktDYqh3tsATG6Aaw0vx15n%2B6RLgEr8M0mbhnK16AX5IiSLzYOpe79vsBf%2FwVPwDCfXXwGasECuxlW4k6XKBdYEyJrZHfaez3HXeNMIGNuJPDqI7IM7C5RJaCLYbN7d2RFsfKBN8cEEF4Z3r7QwwXH3fQleIQNlJ4tQ9mLKwp5erQGVoZamDeAGp3P5hWO9jCvxN%2FJBjqkAbDE%2B3vrK2WIu7F5Vb3brND%2BOa6XiDUJYUFQxp1nAzdSrAFw65ImMSm3K1ZEn4VOjEDR2ONXUQUK5%2FFa1ggy7sq7%2B7waNiogMHSCg9ePbLAQtsC5OTKcdREQSqYIxgtsbqgdhS08i4N5ZhwRwa7NvEpjD0aNwyX6gkAJUHi8aOBwcVeEhwmiEXLEuX9JdxIXUXC4VbfLXZMMXgx%2FI%2BujHCLZX%2FEI&X-Amz-Signature=6d2d6b9e39cf9c412303c4f2fc54bb362fd81ef1404b16c01cf64c3bfe823a9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

