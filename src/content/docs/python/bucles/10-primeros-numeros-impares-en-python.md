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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PYPEBTF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T150607Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCC6UR2DCxEsNtZa7EuSIo8d%2F3qLG0mHr%2FSG3fWJywODgIgFDsrsK7%2FUZoQIkyqt70jS7VuwXzenXkx8i1jF9rLcEgq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDGC8uzlK%2BglgGassrSrcA23dMyQWzxjF%2BJmfDMqeowy8zEVhxp%2F0r7L5AsOcDKTnQlhL%2BZFcDrOcCsRcjgHP8%2Bh%2F5otnsNqz92Qm3I8q6R7DZfZ0%2FqouwmhTU6LZFHGyF2ZfEtAuG4ZxpFXm8ZuNqFs0z%2FPvJ%2BnWhz0UH%2BygxvGFfEgmgaJHnjG0JidwTk0FcOaBHUo64H6T5WEXWAxgVou%2Bp%2FdGUm5%2FtrMIYoECZOPnRtxWdaG3rKTrBBunVjAGcr4k4mlQz2kPelPm9NLBiYbGa1bxC2CH2XZpjdeQg60AEve5a6sMZqRaL02Keav70GvnQPx%2FwmLG4OjRLRf8krRwSz9JSG%2B3oXdpF%2BJbO0WrHbckXXMtrc1eGtOWzpHNVSAUbDDFB5vg%2BGUxEP1zNBI1cEaDj%2BWsN%2BpHiISy9rbsUZGSTORHq3brjtqDYe87LlIVs6sfLKPIyjCWjNevfClRqH7V%2FxwQY%2FLPw2EXT4WsgWJbWmH4cxj0SIZQX8tK440HV9GRDsK3h76GHIoGpx32xLVQRSnV0WuOWa%2FSAga9XjB1H1l0O69BoCkZCfBiEK%2FRpXmZ%2B96dR6O%2BvYygfDpVZuKt6rTItmKhhpj%2FB%2F2bvm7lncEsx7fu6wFYQBwEgtd%2BUB33GnBCqlsvMIG%2FxskGOqUBmquxjl9zqT7Wm5FOALugowe3IW910DSpVj5BoKM%2FuoV5g5oDJQRkSJXV3qN830D0wnd8Dq%2BtnZ1nPhddwKeKMELajR%2BS6DWkBEgTD2a1f%2Fx%2BxO3lmgQyhOaQISkl%2BMPZCPn%2FzDkmDKWxpxC8oJ%2FAhzX6uaxQz9ShZc52FlKF5uDOVruIi624NmRSUP13Qm%2BcpT7WSjH0z7NlCBRz%2F32mUBwDyXPk&X-Amz-Signature=dce953c3185a82ba5cfb9f5ec3b03c2c5bc4b2566c3bd12e7ac9a88da149575e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

