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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SERQ3C2T%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T054313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5lO%2Fh39275G8ynK%2FKwn3%2BXHxzyV90HBpQtPCH2gyEWAIgal208sN%2BFby%2BG8TDHt3OcwO9jqkKmE6HXxS7vzIht1QqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDckvvBfR0HYErUNgyrcAyAcBXRRm6zSqZ4SPFCB8gwpqhJLUC4Zl%2FmN6T1s8KS7fPdJtb%2Fz4pVFGQJTCoWDWh5qmcHjtOJrr4k2uWr8X%2Bo2UMolXII17%2Fk%2BM0QWZMvWOWcLPcKmYT9bqF8PDTx98dSm1%2BAOwep8H3cfJHFz2Cm0C7zOTo3%2Bx36smOW%2FSvtCqVPsqB23JFTsx0P%2B7G%2By51OpHGLZH0Ts5wPWdKIyV5ZdQ5T2QBJkvKY7Fpfyus9MMmIuo23R8faAA%2BZkdQ2ErM3cxUmh83R8zR57WqCjIIygM0%2BVfxvG3AmoxFE4zSb6AM%2Bqm978kUK2GEUggat%2B46XFjclvb4dvYeqx0WQ%2FDNH8w0WjFI1Do6mxLB8HBIwLEyfBCa%2BZwqCL0YI1OrDbhLdvjhWcCUp5brP2UDgYLX6MCEYZuKAfFvKQIxwd2lXugtLau3A67vxoubSC3IBBFhdDsfNrF3PzLeBf%2Bqiav0XBMAYomTM2USClU9ysWXlAp76COaJJA%2FNnNvry%2B6a0F0SYmO1OoGUwYGvppw3DE0OWqHNndsjN0XQcgE6gC7YiD5UVcr7EoKK0mISTwGP%2FT7zfu1j26rNk9769jOuT%2FeCId6Fi24CTgKEGBN4sNYp7VZ7UC4mg91VFvF26MJnl3skGOqUBp1Pmh4oZS72SgaYRiDQs0R9GvVQ0iVTrmnEXBYLwn4zu%2BGtm7AwqrtcCPuitwZ7NNL3hmF7YZjaiSXx9ONc4tcpdiBCz%2F3zAD2F74pCWUcl2APNBE92AStz5q3HC%2BEVjSNISQi3X5vSoc8B3%2Fh30cDjIOO9VKOEDIvfG2iCLAh7NGXYZNLvXIJsm2ZZlVD5gv7kYpTPY5k3S5xqklLr9c2KNdwiI&X-Amz-Signature=cba125a18ebb1032bc400f165311763d05fb70eab156b4495e3b1a78384528cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

