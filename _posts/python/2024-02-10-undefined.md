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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYEWPOWV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T164551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIGxWZwDqfWCYMvQhthWlNo3yANUsCxz%2F%2B5JagKL%2BGCACAiEAtSe1OcKNX8oJ%2F%2B4zTLhyLe0Ns3q7gG9mt%2BsJ%2BjxHGKkq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDHRwbaCGa%2FvtBzYRdSrcA35Ann0CLiY3o1yGm23VYOSovBSnluG0HFuke6kURqTN8rjLaa31dGRWPm5L5xa%2F4lJdkpbE39qX5pojfHbyU9jIJImXgCM37g4QKmspO%2BS1w6%2BD845gyCeyU2Z9zHdoZo9cMBvji5ANZx8GAZK%2B10qLs0ZpbT66FBRCxwmGvJvr3ShPPuKu4QhFbnkKucYrqA9FxaIg1xw7LcDLPfwmNDVZ7n2s%2Bbz4pjw6Q8SPfDHE8prf1XfVE5wZXE9LDENpd5wkzO8ZPxQvjNvTv%2BxDq2fo76B%2F7S8SIrN%2BzU3zOd2et418iFi6tx2phxxPnFjgBiALbcK9nardigMNqxZyO4XxaDOCZX34JtAHGa4o%2FrUXU4Fts3tcYpFHP7vEL6scu7aqxNJNL9iMkkAFH7BDXowcCm74DcHa0s3622AmtkirtD%2B6DAPs9JKfDnShN6WRBrxKUn%2Fta9Yrqdb3kk%2FU76jmfknCh7IK%2BpMZwhYm2%2FCsASlRQ5QktEg6Q%2FAPk5V29Hhgt3qtEmPDjvuXGRejuTAqDkXjx9yO6Sjusg4M3cya7ATG3WLh4PG52Pq1Bs1MgVMfMsAQFGTGF2BR4%2FJgHDaTVVvx7Ap6EmZjce6umJ4d1wwUjlHKAmPaT3WyMOjBwckGOqUBAzyqpMBoYlR6iqBtfcv4jiZGZATTwnjLGxpwwJY9N%2BHcYQpjAW86c2eZd13WbthRk%2FfeNQ%2B%2FjD0GYS0XeUNnUGR6pflw500ybvky08m2YtqrmCQJA3ZX0uYNHP8du7Uh6s9fZWliw7s7hJaixAycckrTEyv5Js2tamyZt21wjNbhsuwF0FB8tNWyC2gfEfvrUzmnse45OiPlB3bAY9s1xOo5wihW&X-Amz-Signature=3f4a188938bfd37f219ffdf874d0e0101c94b1106cc42f1c60bc5697de475c2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

