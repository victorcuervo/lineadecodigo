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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625XEOCN2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T013929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFKyfSECuLjjruPw%2FBoku39dmCiaBqtKs59I5mye4gmRAiBIyJhuppoWXv856MYE8HwLT9KcuzTT4opXB5O7UXlT9Sr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMnr8UgWDgqBo69mqzKtwDYAaoL7Uv3Le3T3eko%2BqnRmoGoBZxhzT8kuoOYSfgFB5XhJMZ3mHvWbijUY%2B4fU9%2Fjgk1IhTEOU8uXuu1Mn8M9qhA%2FgpDxFY7lSB6997Rut0nCj8ZyDoGFI1F45xtp%2B60QPM%2FuEM2Aeorl%2BTloOhysZj3w2bXkGZ3AfK6u984cRXJRrNKNj1r24shueaRc8kuL%2F2BE2CFYNBUPaVSLxbpUumVS20l0KToE71ArBKbJU6xePB%2F%2BeSt40T2XTRYz16aZbgPgLXKsY1eOIpaH1Y1vI1tAR2C61ITX6wNMLSQD7LHDI9xagF3TeO0JvXMmwuOjLVPd1AYTlTwHDeS4%2BZCZNWO3twt%2FG4NOi58w%2FTyt8ENgJRbB%2F1lENzP0LyW2TLo081mNyr650%2FkpQxRU0STB%2FjCPLTOzu2jxnFEqR%2BBh52TeOHJv3%2B2jcyo4yTOu7N7BGSjb%2FN1SUIBxqtIcXSBzmQuVBRQ3Mf%2Fr8AqeBl7cOK9pmKiOlX%2BuhwJY4BKXQPs4nxrLg7VwwN8u39cMG7Y0URZNTM1C4Traj%2FiHeaVW5MJu2DKCQWtL3Ycc50zUEIpubbxfiRte7%2FLMgWbIK17yorEYEt%2FnjcT%2BunqN7Oe%2B3%2BnAKYfFMWjs90%2BkYgwwYzIyQY6pgFRPM8pN%2B8IzolsEXYFSV6jvgseE0tGCC4hS8NEy0qWeD4cWuJ11LEB6WJTv1SmQtHXlq4HwOjrXzqZLbvBi%2BTSArXFrVip2uRhIbc6T2%2B%2FAVBSqHq3eXZL%2FNIIY%2Fs39Ot36QssAMvDgWovreKAgQoI%2Bl1uqnNdZj5DYSfYfRSUHMT9zugj3GrveZdJng8kdM6kRQtReG%2FncT%2Bf9zaPDrqxlvoj74oT&X-Amz-Signature=1493b778c64762c36ad448fa187e1b74d4e6a314933b3f56640e6bf45146cc63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

