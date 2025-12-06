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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBWZHYI4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T105451Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAsTxOIO5wDqnpMYziikt0f185OXEoYf60svYt6i85h%2BAiAxEOHc%2FRpR080lxH4q1BybGfFg8Wk9HP0Ff6aiyrbBXSr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIM0Jv8Owa7eNHE6JdYKtwDW7SrQtdZDOVxrTWo3M%2BDKdkz6c%2BbSWYhL3pMs6Uqfdz2N4ecY2pzxxbZvm6f3CmKmB7%2Bx4Iz%2FLBPcRS%2B4c8ASuhiWS12sMcr%2FQnvvpTWgRUH%2BhEMVqUb47g1QOU%2BgIVhtur2Gfr9BHAtLCZ04%2FbJSF%2F0jIa%2BI5%2FbEdEHZUN7YLjafXWCXTN4y3fXsEmsqaTq%2FGH%2FDevUDwoogJbAsozf0sj1%2Bt7oAU8BWcwn0A1zNGPbU92t52ow%2B4bmj6DMrm4R%2FF8wU3TZRMqzWJQNJGsIXOx9WKUUly5NI9ujLug7YuIiuA%2BYz948vApp9PBt%2BBapVC03UgvphLfWaLM%2F6j0Qo28HJYybnrUdA7%2FbcVKJcJqRoBerJjKq9N%2B50wr7RCgU3t%2F%2BCzZ7DFKPJKtDw0E9H9nyDKBsL4fsMMQuaxqUfmg8KSVnNJec7MUrL23VkZug9jVzhiHVbmovr11YwDVaAlWGrPQfwLaseEULZRvPXel1EQQ8N9EApS1dUpVVlrrdhm2p0xUeS8UHZIciCUXW0W82B9i7c8s9L854L4LBVxoI8zs2HJ3FZg6NHyN%2FcGQjZEGPxOV6m85dRdQfJC%2BLfksLX8IxetfsghhUvKF3q%2FRcL78DpI%2Fn76Lt%2Bfkw94nQyQY6pgG45XW6QlhtJmR3UraUiPZOAbTUYs9hYvxM7vsITfz9Q3ugbejyUQtE3VPOZiDPZZaS5parsH%2FLQ1Hv%2BOaezE5G4YcGeX%2Bh%2FLo%2FCtnYEbX4NP1aW%2B2X9bMZvwZM3le2ju4nmsZ8sBMi9%2B4SjxQC8fuqRby%2BlD0sNyE%2B97vz6E%2Fmx5t4kgSVWSxzF0pTzuvhDgjtARHP2zH0z88EluR03qj2q3cDbsYb&X-Amz-Signature=04f4e244e6d78edc86ac05150a2a808b8f304fa8124fe26a68c32638dab35669&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

