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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFMDXFZU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T045049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPcQ3z3nOodvQvDxZI7tTxCqMIXvnq9A7CqTbIP5jeuAiEApIwlL%2FQeT1CSh8K0CDLRv0PW6C6hfcya7bTpfQF%2BEGkq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDJ%2FmHeAzVWTGQ7NAQSrcA1%2FSYic1%2B%2Fxe0sbPjB8xnmNC6YmqIT53wTyb2wILhAzLsMdelm1R1%2FYROPngsXMV%2FURX8XbDk3kFotf7YJel%2FG1Ip5lc6QgHQb%2Bk0wL%2FpG7qFHptTydqejHte0YO%2FqW%2BdKBdNybNMky%2BispJw%2FlOgSRUXA%2BVQUgsR13IKLDp1dp70CkEW%2Fq2cc7vh3EPjc4EMeCn04zCJdrEiBtMy9DCSOgn5odspQ1go8DKmparBafUt3hJ5mPqFFVyjmh0HNX9%2F8PxDtzRHiPXtYxzHEUtDP%2FirvM4xgjJL6R2%2FjBIOatBGy2W1EILrtfQ1mMXvqh%2FyfqaVfeuxwIFO23MOVABTQ55pO25euE7p%2B6RWAGPkoslt1jSqE033742hpKX%2Bq4H%2FNkG09muDAk%2F7Knf4fbAo9jZnpggDz8hPj%2BO3%2F4taFS4ag9Y%2BMUY9J%2BXUjDd8wu0VPrDDC1SVG%2B4u3LhR15fB%2FeoSjTDnqENFfg%2BONBEpRnnRWStjeZdOgNscxvV1XyxftP%2B9O5CCj0lmEUjENXaM36%2FkSGIwst06QO4tG5Rvu%2BKCDrY19%2F7bbR4RIkTQlKQhsxS22Yw6dc7sZjibhGP%2Fke%2Fp1z%2FNCdEO%2BGE6X%2FZIEftGJpfAP9qrKFwu38JMLOuyckGOqUBMzQLXPqKsq7LHbvgB0Im21RX2aInrODMq4Pu4%2BL2XCsziXZhLmQ3y1dDtMX5mszWnmTw3W0OZmjDjh%2BhpNIgRJH%2FK1zEWXuvXIYnagdYuqBkKI%2FpF3eHarATYg7YrhvWqEWpwhtniRsN9F%2FQqwxvoY3ee9lEpuUrh9ytnDdriQlSt9CP0JhcvgOjwee4bIVBgmiSYWk8lg4bxEPZbas%2FSXX9wxhd&X-Amz-Signature=88cc0d3a9c64232d3fe875b74da1a342563110018bb3575d0ae0fdcd9f95b016&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

