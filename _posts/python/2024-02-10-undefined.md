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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BNSWNAU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T170635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQC5xBLMPZUhmHGTAEfp08yhOdOJT%2BL8wJFAGJAYs5Y9dQIgBx9I22hWr%2BtqpBBaxhlDVXvW9SzXDDJmA9aiCXkQYI4q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDGU1LiYHJUN40TbPSSrcA%2FpbAH57fZ1Hs6NcsLb9bL%2Frc9LzIwPJQ9T%2BlQHrMLHLzTe18%2FY05HVfOsfCe9Gpw9OYkUyy4uN9oxUd9dreedhE7Az2uPELQ6RFuVehHiOmv3V3FV4lWgL7Jy3QuzbzxUJazTC6x7BjVxCAMlfiO%2F8SZVlKGV4M3oJD7JK6HhVI%2BW69GfyuPEFjlvAYgEKwqTAldWvB%2FNAEZlgkZlhutt2%2BqYVXSJiP4v9MEFYLxbllPrBsCitGNJJcq3Owk69XLxuDzbM7smGWXv1cHQ1G9VABq4EL3HCiFAB0MqQ2qBCHohac2WuHwLvgaOpLgn63QqIuQWrF%2Bh1CFRTBbYKxuwbQuHMk%2BlSpLacwlc9wiMy0fPAEj3leS49NxewX44KkF7gzn5DBkj433xQkIhGZmHBcApgvXQNmlV8VP7S6VDL0gXyyQquUWuDcCjDSiMrX9mZkPsR1ZdstD0Vls5behtvmiS%2FdOOnQHu6UH2UBJ4ij78iGdWR4%2Fcy93GnlpRy5Dv4sHFp7F754nydb8DuX2fbFmGqFTpEnvj73U84RlPyqwbZnrHtnEZx6woW7JSaTqUJLmQ5IgUzogmly8jLQNC2AJJ6Cmf2H9V%2F29ahebl9KhlU9X2U5UU6%2Fj7QYMOXawckGOqUBGjku08%2BpJi4cSv5DKDpkZ2BUtSEI9NdrEE2qUjeKptDqgpXCGvY8OPqat1RuT63mdlyp3dBDsZjz0OCC%2BFK8wn1by0WD3ESl8O3vcHjxaPWwyCdGjJR0c6wshVhFEZaUQDGNs8FjJgSXP5LcMtx3JWSgbec%2BG2J2qoWR8HHczCFP8%2BrxzKSt%2Fe5zWVKlaxOm0rqNpd4QzWewQL9osQjwLqDytNnW&X-Amz-Signature=16e99969d79778a1b1ba195e32d6f19820adf248c41074e29ce56c0789ebd9bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

