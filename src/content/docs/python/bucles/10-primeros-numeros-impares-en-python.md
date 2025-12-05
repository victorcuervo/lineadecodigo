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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJAFGE2D%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T210946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBcYvqkVqCgQjfALwHpYafrvapMXRD70osMqY7tpnx7VAiEApb07CS3DsGdtHKGDeyEqTNvxbMZVV5uJIbHpO0XbDPUq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDIMfgSmCAWUc4DIMcyrcA%2F5SLD1NhMrHFQHHxNPf%2FD0T3wHUViMpYL8V9HAFlvj8sfSQxTCjZo9uLlkClkR0Ex1sqZi5WWPn8YPIXsVo45v0UIKGfw0sNuFgWpQbTtpHN1p3n02QXbOuCZIwyQ9P3209msvBj6PzT8Yek7c%2FLx3piJzEPvQeBOgNq7Z1AHITnWXzIFh74GZFmaOqJgZ4zHPsnbZWuSGytTdYYeBvKFEx9F1qeJgaFkzIeCUyJcZobpc0wK5YU4%2FNIT3%2F4EL9yER5lrUiTmf2ZWMXYRZpNjeGrnIw3rUmWtjmV84Ew9CKcUTirS2FKjWBM2%2Brr1yhNwKCfafgeF5CsrfkqEl9YXblvWKVGuxt1QuviyzXN0fIml6hz3uBwBkAO2y4OoWPJ4exl7xDymyhHinl55v9QshUcdSltCZLkkOYcM0%2Bw%2FJBj8paAabR9IhyH7DgPIKntHm4Z6U4ynOpf%2BEZ69wHlJNcM9vfXtREUrRm9xids0KETmUeRz6fyr9OCQfXKJKDoqozxWkgE0U0hpOFe61TEyEj8BuZrOzSKxNkkmfjtptr%2B7vw8eZQ7RGgzDSf0jWmpLnDPjJZpNdZnE%2B2GPCYLR%2F6qAIT%2Baldzk1zC%2FPaQi6Umekcdz8z%2B4K%2Bd1sZMLvwy8kGOqUB7t6UjaYl3Q%2BBpWcYMI%2FGJJw%2Biw%2F9BlXplvq1Xxlv%2F8DeCL%2BRJepsmFoSyEpEseM4oeAjvAsp6GWX1ZGWEPgtf4%2FWOVyw06rsjCu2ppWlQQm2KU6V31%2BYR3oKEksztEWeIE533CJqB4ngTdplyW2nDLTRJQk7R6H2KNaJQMLNHDZdo2EIvwqco92e%2FuPLaVySGlIkEYZeE8aJiVRdngnTG4QyJDnI&X-Amz-Signature=3ca0833b775744857e814c8f03deb6ca1223d3245cbda0433ad10f2ed7edf873&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

