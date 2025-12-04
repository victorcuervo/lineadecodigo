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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VU427GM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDQEa9yf1ImEMBrzFXo8iqBVwgfyXcHT1Of6gk%2F38tPpQIhAJN3KhaurTIB8PCLUW7O8UrbiZQmimdV6Tk6IThopxikKv8DCEAQABoMNjM3NDIzMTgzODA1IgwrTzCpFnMMmhQ0ZMUq3APog2u2hvcC0jEPjPggPh01NysxT6JQtOp4Kx23BekbxiCvfIbNkjDu70EcSk%2B097lkes%2FUj%2B3QBVKlArfkWb4zCiUCM0XsoJXxonH%2Fdkn4%2F3L9xLt%2Ffin%2BtzInKim5uTyMsIh4O8Hr6c5lQitUmniGms02MsK5flqvyjpUP6wpdl65V6VxdjkZatEmQ9ZU4PI9%2FNkZ%2BiLOJTKpi%2BNwgEZdxviUDMEq%2B7bdZJXGOYs2IzVz%2FjZBtV%2F5ivmZkcS76GsRidTGNl2h2%2F8rkIz5Rfv3iv3Xc9Yq486sYsvcKCd0%2BNDD4BKj1AwptXxMdLt60OqQb9eT1wtYMjK5JlFE1gLYz4eh0XEM4sjtIsQ7iHagBKyCDOHhNoUwPlpS2KuDVUMSGNBBZOAlv3BoNZCig3%2FvkqjudS8PtwPokvOQ%2BeJjWyaX%2FDpI2un64pZbHkmlwdOwoXha5r0T8ET3mm0t7LnRHdf48Qb0RDwbVWO7zJbcijUxTu%2BsOBMWeBjzeIyhnmHkalsDZUF8TyU4iDhfim3ZZogLUPGoXFC0gvOrR9wgjc3RgDmcyw59%2FOf907AFJHEwMlPy4NyV3t6JQiue%2BXJlLRFTYbuLolX6hn5fo%2B%2BlUVQj%2FStP2E5PX4%2BuFzDR6MTJBjqkARj8C7DiMpLvUmpfC1DBf%2Bs9KYLBataAVP0VFbeN%2FyWkCoLWR8e2uTBhRrYzYbsgSxNqN1zD8JqeakFhOb1o0YjfU8NZhjaB1RtdQp4NA1m5BfKasrxYoP9f3ovud93GoB7l28LEKSRUB6FqjNY2M2bcf06R%2FJYyo2Rqp5XlGjAddMJkwPcN6uaCW4vJiCP8wwYh2YgDJp9qaVP4wfakIYtEZzuA&X-Amz-Signature=6d2a4d600367e8b5596251c1c156d40a7fd07893288799259934138cf31197ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

