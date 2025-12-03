---
layout: post
title: 10 primeros números impares en Python
excerpt: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
categories: Python
tags: [python básicos,python bucles]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WK2DUP35%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T013313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIBoUff%2BetQR%2FZXr0aI1fcWZNVT7CmsUwYBxA3glPwTeVAiEA%2Bu3lbgeljG%2FqGC6so3vONahsiRcKPAs5YDPLCNCWP%2Fsq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDDN%2BAnD2HPHsnHkL5ircA%2BON4Rx2OiCwtAhCJzu6dDc5mHWoSX54t89FXO16WIGkdyC6PzxjL9rqPOFDc6ENu0gBKDqTeMnTqMWIeVjj33PwBOkMvy%2FQO0VaD6vgxLn1tY%2BS7xxW556qLXOvFLvad89zEt2L2rP2jLI1m4xAG4J5JlhtpU9icvY7Sd0mRnplK4aXPxbqYz49GkyPFg6ldXtdYW1HGYlrADyM0%2BuLIeLU6cuZ67DAOEi0IDGrBEPjJHrYn6qxYYIaR9gZ0beEIT3YUOne%2BasN3Sn4cFTSSV5HhduH7z3%2FWGb5EzGSdo18Aao1KcMbzYwXZGzem%2BEqr9q26m%2FU8gOxMUyDQ%2BnZrO9iPLho%2B3XEQlDNQ1hJufArQNLVWQQHKgIVga3w%2FJ69P010FI8ykm0f58xS2AJ1%2BptaOYnMTcrx57FgmmZrMFRmbaTyEmNHWoZRS%2FsXqYMYh7UO8R44SsfGFcfGhkjVdSXmyXx5XVT8mlTaN1qD0cbd7sdeQIZZa6tT2cgKsj1g59kgSHImMTpX8VWuKwu%2BSTIABMrPQcWITxIaHaJ8uB3eG9FXdjnJZPOY9U7DB6xP560XRJjOdSw2d%2FRV8u4FbycC7qMck%2Fnyxf%2FFmv5WNiaMgJ9r%2Bnn%2F2UnA0C31MPyWvskGOqUBY8Cz9XO5sqaoamQDfEc99%2BNXOC7pGCZlwChal9nAgE8GBj9matiAHfbzl55cGCqB%2FmOdef8CsIQ%2FgLbFB4e4EfvFW2VHV9OUF8odIiJIFjSI2KqdpMWnSoJzzEy60msMJDBdf9pJUSucVZj%2F1bg9%2FtK1za2vShFbwO3UzzZSozfUDFWhIM60nOX%2BOWSvFVROEHGkAXVyyDRXoWU52BbcYgkzDZXu&X-Amz-Signature=497e19ec36f9b38d0da083ac87351ae0679d98c90daaef17e377ceb6481f93b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

