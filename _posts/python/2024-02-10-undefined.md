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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QY4HDM5C%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T102355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIQCJHaS62TOyxmnigcxbZXJbd%2BsSR%2BiHcPBpAn2Ov%2B07RQIgI1QyhqupyHbK%2BOUxYnLstCpS%2B8muRdFGdew%2FHVTQ%2FbYq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDB4ZGhHUorDHIJWxgircA3HLHTRWGysdwidpahc%2B2UdAHpTBmS4HY6mqIGsAPYd346acNArgk3NDy0nwYHK%2B851jTKD8gudN8xsNnU88wGiZG1aDyHi8WthyqeYyj2QEgsoj7eFkavAgPZubRN9qQmYYXvC%2BSHSe%2BSlbJso2vLFM0gBQxZWIp8cVWhKYbCPr4q%2FlfYQtJIDvMyJ%2FouecUy8eCb9lukI83p%2F8BEWuYb0yX678VVpCtdSXS3ZfPbe77RSnSeI16RQ0HfCTXjBM2vRKRydKog5OMjvwqdYzhG3%2BmLJRSZfEHhjWfzRfdANd32WloiHVJNF9PDi%2BjjC4FAO9kg2slawbDkGpY3BQ02z%2B8SD%2FVPZcBnu7GVlxPYuYe8XUUBjyNsAtsu1j7NoqDACI4K7zv%2FAih4Qlso5A01eqxNxEl%2F%2FfHr5LIB3tjWJF0%2F72NsPMFmbZGonc7f6Nn7CZn6TcqqUO5B2qBvSoERDmVzpjK2A2jVQ7gANZ7dnSxtSsPJn%2F3wtP6l8R86qQZwkrur6IznLMVOXmK6f1DP8QxwtquVgw%2BcML%2FMT28kb%2FY4%2Fx%2BSBnPSM8nkuC06cJYbN6KM692mTD84pTb28QQ3LbbgKeJoO52SEPKlT%2B4e%2FNxJmL45zJg%2Fu4zh54MJOTwMkGOqUBRjS4vwEj7FkwTF6FGcX3yJ1KEjjibVHWcjjlOynsaUnIjLU%2FXcB%2FdP4ZVjx1xUdcA1ctkrDG4gKYhjOFJJRMSBSD73zbIFcqCvAfFzAokDG6u92wmXkmhhpIWh10LBlFVptYZ9hM6dERr6VC%2BKRl%2B30xgkxogB1dcopZ6X14HV1V93nPkDKqKbLDc0FBdvoRf%2BlupKXoIbR5rPX%2Fhhv23TlzYmxG&X-Amz-Signature=f50f8be0fa55d2d96cbb947713978c8b40517e30daa4af216531b821f59007b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

