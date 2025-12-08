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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7LPOCMN%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T204818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE4OtOpaiossYrpBqsMngFBPWiv%2BBPsottNgvsaN7QkdAiB7siGugsCJnJdJbAJIjbgyVByxQ6ThmVz2XaR9%2BNjQqSqIBAit%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4CKkkh%2FDQw70mf%2F8KtwDcDDJ5wGgknYtQ7U0R3lU8gF2yl9zS0S9Bxm3Mn7Q589ghNdsVXDm7450dMvyi8o3PfRDvlzeGhU1izK%2BzoP7gBE%2BvDmltXR7WcTvmC7vMxQJGKb7KNVscn77GA0C%2FWlbMvsEAr1C37C%2B%2FuPeyWHxrYaXvbQNCLCMMoQBADxlHHFQBXhMiD3O6o0kJsKQ4R8U5pR2bFbaSUAAO7gMTfxxGpl6zZnCrANRi6snuqcXR%2FxRjLwY94qzXTFL4yyLLg3Ep5T4Tp1zV7%2BRVS4FRDr944Wvf%2BoF8Whs23zw1qE9mNzXbYBBt3v44FjyV5oG3ykyymWxUl4uNZX8m%2FqYbwSCbqZzFo%2Bfn9vnWoxyXY8Kjz2nRLHtB1hkYqqfpTd913934uXSRCHnXjg1z9MIN8JjBveBI4xi%2FgZ0FAKLkcjl5E4JBX9QIX8btcoMvl5oJBJAkBAqSqf9z2qvC7A9uUdRg0%2BZHcXlzECoKJ0nrcK9NXRg3TOzD%2BsRMY5LvvN191SAWMjA7SjKUlk1qd04hp%2FG9CJmDDZLjoccXCqp8WEQf7F4ns8m6VEtnEIEFH0RvToJnq2l6ffEG%2BodamwKjIzkvNeuNqJEIK4Pf1SdoYaGA30nrXflBdb2PSl8f%2Bcwrd3cyQY6pgHnOZf343gVgiwaAOh74jYZR86u0%2BsgfkDEhOE0a4yoqnInGMpSSoiovAHkENNb76X8Msn%2BM1IiCdKta7n%2Bnr8KVkZR7eHx%2FVV08yUy%2BiDszqCwIJ9uXEz1Y2AarYGJtOkBbM%2Brz8dKHDeuRjDHBvajyjfVAeMT3%2FBNAlmt5ZCqK9MfG3XsqmoRIISdVZWjkARpEYZCiu6%2FqlrdMzTL2koj9c0UNpjF&X-Amz-Signature=7135faadf7e0eb9e38fbceef5f447340624ea0804b2ba14b13f7dc3821dee069&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

