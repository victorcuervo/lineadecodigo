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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFVKP7P6%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T070442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1y4B8unalcbk%2FAAtEBqm0kCIytPYH5LYGJ5NNwQuk7gIhAIzIhqwyJo7wTTIofVSg84%2F0TqhTM0NNFDfWcO9GWgMwKv8DCHAQABoMNjM3NDIzMTgzODA1Igxjulu2B1uxVhWMGwUq3ANwerE77jxldNMsLowj6RI%2BrGoCzr9HZ%2B4QKz2jXFYtX2OZcApnLuxb0WbK%2FcEcWnKsNlh5Ur9nqe2LJw5CsdxkdcBMfx2O%2FHI4mcJ%2Fv9tIz33voBNj40iUWyhatgHKsnFk9GtKzyfmCyi9QKFQ5Nntr43um%2B1FwnVbIVNne4fZmOW4Xf9%2F9Qh5uv1Vyry0Hj48e%2FizDfbrildUHCMvHIr3CvSk8la03eenzAnoolhrOf6AonL4eD7ZKXJQ3FLoYvDMl6Yxz8hbDp0sZDzlLMD8TLvem90kH2XU4N7Xe%2F6ezxZSLUU%2B4MJ6Jq6DRzEH8F7wnvL1a%2FuUe7BSn6fL6OdxSqbi7%2BdUDj9KNMZdd7bqaLP7DVsQX84VTwXurRfzuXwU9umwxYSDx%2FrF9ae44pO4IqAmoeEcYUfMdhM4%2BA79ZDs0jrytXGQWqEoUw1VH6NGv8B57TnPuFIAD2hfPLKdUSCpsd63vSFLjAoBbJVJ7OYa4vqlw1qJAb8A%2FKUiz0XsWjAhzAIaUSlSKY39xjI7j4ZZuZphng8oePE3FeM3TemObYUjVtsiDaT%2FtB6%2BdFasYos385RuNMz7pbpydqh61nZsMqpCupYGgndGwPb6rC05PMctRa5C4Zt2CfTCJn8%2FJBjqkAVFtb7R9AR6soATHu7Mk19d%2BPqzf5%2F7H5xEatVjsiMAbQmeuqUZ5nwvGUF3vdvvsu7IyQbYLSBA1gGkUITWki1bxgezEN7y3rggBFmevQHuRGiDw5Ia9s%2FzlwbhMd0uTC9F8wYt8lw%2FDTFTouuONhJVttezBEFiN5w%2FNBH7LVDLBqKKCF0S5YjIc2D6vnKPBHYLaeW1CqUNnRJTUAcYYGrxvUSqk&X-Amz-Signature=7f210140fade60798c0475e1ca5a6df89c93d96a63043b3113d8830990534b42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

