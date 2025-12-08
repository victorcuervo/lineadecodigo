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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TNGD62CI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T033718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDq7n2M7MlqXJ%2FgvU08wmF1PBXLkukE5bzkfeDOnr%2FWiAIgN8%2BeqUosHKmk2v8cDeqWcfwxsKOkVj769dgaa2%2F8heEqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHJr%2BznhCRngHCgqCSrcA4wJ4c%2Bl5fUOCjY54%2FVTKPKtQZSV5eqaQbBe6OsLbuYmNmop9OL1Op8CNrs1g5XbCXD6i%2BNy0Kml97ten81QONr2yuYGDz9jYHd9RDPYogdT%2Bmj2TsLcAcZittmSlMs62dK0%2BB%2B6Wxgj8AYPvPWdQgLpOAkSQE5OTmhhun54NOqPNC0hejj85V27V0uxeLxnVKexxtbrvA%2BPjooCsnAgGKSHVD1OKGoWCdyHaPaqS39D0lyQHJzMr75NRwbMAax4jycsor2IhZOYKAlnXdOo4uDwq%2B30avHnTk9zXeE7Eqr7maKycJeGLq2LdANv%2FiTikudz8r7POpWigT8Epw%2F%2FfC491YuDffTiMKK5gUfHdOci5cRU%2FfN9%2FZG%2BAoLD%2B1Ag0BzfuFePOXbIYvwP5%2FPcBzwECYG9Ir4MMgId6EmkFuSIi9w2Z3QFx5mLGNITptyXfY%2BTKY3lKoTYBUponjVB236HGRZ4EKdgw%2FAkPibHR5LaAiQ9%2BfV3ceNO3I7ey4MIRvzkTzaUQUjVX6DQ30jxWRJL1UhJ%2Fjcp07Kn0akLilObaoqMmtrKDZJIWsDc%2FJ6y7VCp1UkPetO%2FjLhDEm1yCjxrkb%2BZICFNkwhpznxJlETwjYo0PWB2H07h1ZwqMNXv2MkGOqUBCc5sGQOwQare3TZNaLpjM7P9bfXmXUTUKsU2Y5ktUJkN7FFXGFNeV7WbKvgPXW2DPni43i3pSkhIID6F4kERjAudN52NS5lz6emnmYMCWiebhDZdvDBj2U%2FjbBF0K0Vz859a8EuzC4PMT2izWu7km2rjcC7bjaxSlj2gnYgb2fApo4X5Y%2BKPxoKhuMxaMJM44udFiWlt6tQfACPzuXQ4M20PwwMD&X-Amz-Signature=0c793709de85f6fafb8c5b19c2d5c913373c56662e1b7cdf65e149c5f66ff2d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

