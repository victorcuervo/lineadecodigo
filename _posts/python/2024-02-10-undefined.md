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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPCYAWKA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T112155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQCQhhZJLdJZG8hNMVslynhqzCcuXgKIfNfVD0IkrNHU8QIgbbIpVvBDmIr%2FunreNhWtJWFR5AFypD3xAhuPqkUxghsq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDFfm4jPGDJJPsi4D7yrcA8vS7tuAgUiD7FucKhFYr5CPKG1vhIjSzy0sXTMFiuYF0ZOD1ZdSquk5hzkcHUwbl1kC6JG3CQXZAuNlOa20Qf1ysHRxcM%2FgXg4%2Bc5T0KRfTv%2Fmj7ZxPD%2FRU0Cy%2BhytoXOWJmcmog4A7OBx%2B%2FkXE7Hm3gyBBOju6IJlQlbv9St%2F3QNSElg8f76wsBfGx50UnGG%2BQNwSlCqSxEFyK5ecXJzium0W56Iyndk20g4WhAUdihkKXIUK5QmAlH4kJ0pLJOCjZQYGmt3hkBD0c3FpjKJzuxaJVX22YLPEJ%2B9gfgKRdQ4wxHuHmSB8AmMFrMaP1vmZvnQP3R4GE7O9j21T%2F%2BlhOKqBcGl1sYEG7SqTbRF8q8VSFGqxSgodJG6WTGEZfL3jaieqRz5TbkiOUwl0nULpWsl%2BLBui0MJ0wNkRgNNFrqfBXBlPQMLvPoVPFyWKvmGS0W0FT5sGz91Xebp1vSYjdfYsUuH%2FnMsdYU0A4rm7Lm%2FCkXJj4jyFXc%2FgkjK7nK8s9w3zWAgwRhbvvv12PYfHHBZME%2BFItKckRTNGAfTWGcCcTNdEEFoCp4tmfm349fxg%2Bd4UBPMFIMAhpdT4dyxphHXQV2XJZ9MOdNACpQx8pvn4lgLkoHWwMtXFEML2uwMkGOqUBs%2Fd1S5C26XjPWPD0gPFpK6%2Bj3HGPiJfhQPjXr%2FP5B1hPXYhMZvPaLKqgc6Nqvua3X%2FTc%2BoV6AHXEhu%2BcKeqsnGAv9EG87ziRJweMLqxeZcl9C8hddPGuiNFFV0aHejHW%2BMLkbfljyq8b82ku1JjtIM%2FT3fu8%2F4znxHg2SvUOe3y4FVtoWHAVPi8uAO2AWCP29%2BEH%2BW4M%2FcPrlKNqJkr%2FHNV%2BQ%2BsT&X-Amz-Signature=a9d343c519cdb07ef3f12b157f97770725c788f80a9788d45272fbba51c092f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

