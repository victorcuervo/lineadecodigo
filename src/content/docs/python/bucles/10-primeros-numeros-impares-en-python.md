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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL2TFA5J%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T140441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCZfwCPZNavDLnwe38pgsEMUhiMjqmtxPgoqNzqzzGsUAIgTCljGPXt2tBoOuic9cd5rnmGM0oKkjRHFhMIIgDw%2BaYqiAQIpv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKVsv5b7w0gTlCCtdircA0i0dyU7Zwpxm06hGzh3x0UFtE6elsGZTc9MMAeoIyJB%2B3%2FRuOsBnf4%2BNjo%2FxN2ll1uZttYV6W6taipkF9Q4jq5jnxRE1WTUhfRbaQqEk5RcfM87QFbBgdGKeuy%2F0XaroyUbim99UfS77i%2F8V1O%2F8uJ4iqe8D4Sg9qA2OvdvQg62plzy%2FFwDace7GGxsGiY%2Bh4dT3buOO7lNHn2E0T0yWYmDstAPNuREahPsp9wJ3rSkLePyqQGJhugWLfEJOddhvqJAv%2BjAefndn7zAkSC3QEuGP7iKLEA8NnmpcTXKJBw5aG4b9qrQlLBz6MHP32A3UCrsmMPBA6h90gr4rkGBD0RkKq%2FgpW1oKqxdPLYwFEdCtSTVZS1LTUTHzvcPG5mmZCzBKt0y5iRJIcrBN1t4k4IAap%2F5V5X92vbJBlu7opgV3FC2MLXyOVJM2MvfAirRu5ZWmUqp%2BYKm5A0%2Fg8xZolfuKs4QNETI8dHNV7cD3eSwU252wXWVW9PwASd4WG2xoEQVTSSwSIvHRH8tc3hx4yDAR1rjsqf2lED23kdm3tDACiiHmm4UiuM3cIV08QbF07e%2FGBSlYdwrAC1T1%2BrELlkdqqmNvio9h7l4CqWctW%2F5Ss%2BngyCl6yn8bSJaMLyQ28kGOqUBPam3HmiqkWOm1A80frv3a6tYx2SyLiCI62TzE%2Bxcgw%2BN6Dv0Ye51%2FgYW33ctcDKFiIy%2BgcTmY4hxA5mNNnc2zTolXG0pK0yKvyZKR%2F1Wkz1hoHPNRmG6jZNJaOh59GUK9qycwWkt7gVVUdR71X3hnsMyuHj4xMLQ3o%2Ftir12B0X4VJVT35vB9oOKO8FVZZvCBO04128EUfgMW42v12WIaqRmo2RZ&X-Amz-Signature=22bd0786d985c0f9c88bceebb09944f74f7549d98f56d3ead0e433acf9252e15&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

