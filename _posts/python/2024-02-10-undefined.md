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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G5VOD77%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T085332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIGH8C06QzrMaX5btXieR7ftRpG8%2BlygMYFdiJuCBWbExAiEAyjjgRn21P2IP7lTdM5gQKpIDiZj%2BmSUjZO7KBm7oY1sq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDFrnW9IMbpbkH4GByCrcA4pyvh0EGRSB0ztwFxcrmu1DwGbI1SeJFlUeKPptgZJ%2FVKeWra2ZQn72kGWBtWfAAsoCkIZQPeQxFIuHdMUsGjva01IRPuFiebmm%2B0IQgzihngFYzgUIzNaGNtJSDaI2yJW%2B6U%2BatfqO72HhqoccMfEoEuIFsxG3bVpVUCYdzAiBRVw3%2Bcg8wIFB3NFHAhcdZsV1rT%2B%2Bnw%2BG2dNx8n9%2BBhz8acXcGMz%2FTNmTKkgRlhIRBr%2Be5%2BNx%2ByFGJVgbHcXr93TLYpvZfnqJ9cevU6xF4u9YGlwk2ebQLHxMnptWH%2Bwlj7Ewi1qIqcwry9G2vblI5qosn%2FlRMgTFrQCQIq%2FvwVALU6Rd1Sv3Pklex8GzJFVbT8ty2GkldKnb4bSV1%2Fw0ZZtzs8N8MNO2h7vCEcijHIMSAw53Af6xzPy8OusCmP1ShPVl10nJhlGKMEZbK1I8ycmjfjWANkZKU2zHuBKrUq8D4G471ZE%2FeB46eKDkjBpVGMEqSyVJbWhsJAjce7feUIcZijAOa9UJ20qRpoxCqvt4vxNdSclrAthdsn0pigtjBoLStmOSowTjm%2BrNEKAxMQgs4F%2FOFc8T2FHswxwJ1hggMZ0qW%2Fai8bEfuBFbEKAwa3lY5vtxcse6sxrYMNfUv8kGOqUBKUWs32HgkZuDFsYc6cHaEEsP4v3f5xpP%2FqQZHTy68Z15cPVZmhVf1LXXSgKuwXk7dNrzI6rriOkOrjxse7nD91lf%2Brxi%2B2WHnMS3UsLIRoc7lTWYx9j3I7Rs94w3t7sjQSnT6F7KJ%2BKm3OUAIaIIIQcF3ZcxfwZZrKk3fC6O6BDtWjPRatLfTxVV9d2d%2F7qSmKd9ixRWy76x0UZ%2FGA13ujzL9ZGu&X-Amz-Signature=aea8cd4e63424811df2d30b9801cf6ee4e9f8e228828d787a4ea1ffeb69264db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

