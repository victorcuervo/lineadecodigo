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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625QCIQLW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T013013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB6vWN4uLRST1keKtBXMHgx2OtZMdEpiuPE2M5a63EwYAiEA7Nd8L38H3C1ZsKdFcWV2DLQmpWPzYTqr4SPfhajX6LAqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBEcxgZ41rFyCc1lbircAx0oDUZxkP%2Bzoa8oAyp2AoZ%2BC5axUPdamSQynbvgkLB%2Fdd%2FGq5yGl0S313Eaz3%2BX2tkGslYdgdkTUUtMYDkfhslcbKqEVUgGGbW9d312PDyhKGGPs%2FcpqzC5v5W3Ym8i2lTtpBS5mVS8vCOfVNi1wLaCRDs7LY33ynRPC7%2FhqWNZmPxrMmJnMPYaYUCJ1JrhQIuLqQwHEiimxBW1UrYgivOC9ioWkg6jJ%2BgqYwHaW0t7D8GP8KXU8wxh9RWZgQRmJD2jOgfQbiKmcJY1qbwKGvNabyRHXXaUsUJKvom2HkuRpR%2BiWv3Y1BJQq%2FM6ybeeU9Ua5fUkJb2woysHU3eAJkm1%2FPeMI8C8mL6czb4wbTr0djSjwa9%2BeTzcPasc9S5kt6FRhYczoKkjnIqVcrqFBnVl40EPJHb8bkoXSwOZhL1llJDEhou%2BWpBkgJJe5cWYKjb4od4mEP%2BryFmgTUm0%2FbVpYEyELwSjRHZ0I4SZnJrAZIigEc7HzEnR3FbHnXNZxSdLrpH4hbud3cQn10%2BoVOT5kI4E6c55FnQ0UxaYGnDWjBB2xRc%2FhuYavz3Xvu0WsjLQvve62hhTEK2h6Yoo2O4USsrLunnN1Szma7eYWZp%2FMjsTC0pYbrF1VnB6MN3R2MkGOqUBH%2FB4fW9IF3LLRLqc%2BZAooFv%2BrfCHo%2F1Xta0HOwCCWC3%2BN7wjMwINoQxdbOVvBmkrhu%2Fj%2FK3UA0bvuVR0eJfSja73n4A480dh%2BF3F3dEPUIwOn9iO%2BSV0iuHhhaXYoKCG%2FPiY7qUvkFiarmP2ELPEejWroBwTSgox0fBpu%2BfkGon7ZtbM8WGsYbtyTaOqYgNlSU%2B9NwMg%2BDpTTUXHecONdAX1%2Bufl&X-Amz-Signature=d8db7d01ed8ad00be2228d3b3dff82f5d5f066299c3f9a713270bfc1f3c8e9b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

