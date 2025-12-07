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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPRW7JRP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T101643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBEa6yeXN%2BKpEI7r2nazLbYh%2FJ3P310pB%2FDLkM7qjZoRAiB88jaI%2FhhUsYkRyAzxPe9ousuUUL1tEWEi9KMc2j1FRyqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHYuhbqm9RDTBsQtGKtwDVe%2BYcSdVuxtG7CdBJaa2DQfc2eDhDfWkZ%2FertxCg0MkdeSWSx1oaR%2BtQlxd5stabelArV%2B66BhKB3zDZa4lMZuyOK7bs2479QB3aR99qmZcU8jzYtrlwRo6%2FdvRpAmwJM7183T8alwxv5l38sShsgwAQPvFoHFwvlOH7CWp6OA%2BxsaAaP%2Ff%2FD1%2BoYf%2F1uMIPfYXCVZa3CfFazsxiwpE0cUHSjt1t0rU0KktKMafiak0E%2Fr34wOrf5YUMI2kpyu2OcOENWtQweQQJ9%2FY4q8Pt%2FAi1kP%2BkvFAlza%2BdmWti1tWUyxLgSSxaGQoFvwA5cnqD4rmMNPBKBkvxaB6r8CHMJvfekBn6QPcyQ%2FvQgYbeGKXAVLp8RG2nEodZxYF3bzBPQwE50hRoRvp0hxqI%2F7oLt%2BnEqA1W0zzAHn1eZ5iVF9SqDVOmoccyK2Hp6t1WaZyT68ZcaxSn6s2Sy%2FbFmXR9lv%2FCnhwUQcbobix9J2I1zSTYyaVkzHZDLyYTmox%2F03X3x%2BnJgNANR9lITWZ4SdbDqPF6vx5HoRHq1rTt99C2Qdi2Gvic4ryzae1reg0r5I3CI84jfUjVZACP7DNKyHHy%2FiD7HRdDJk%2FXspESQN6Jeb1%2BO699lv4VAlV4KR0wzZrVyQY6pgHOkuVO%2Foqv4ctLVNj6qwmWe02Bg9xK%2BKl5Fttj%2B2DY5v9JkgOXyrJq7Tb9vmAeXhryVxhE6FWHqjEY%2FrsBugyRY2QZga2fBqR3XCZYD4iUk82QlwNR38fKZEwQzkJOF3N0hf%2FmWyCacLu3LpQ2uto%2BIlt0FXo8O231c81ANCMp4Vn7Rc9jrH2eoW6%2BDEqqvfL7krI9ScqpAPqhIxPMJuMvFMwIFfgk&X-Amz-Signature=8aa58fa692b49c34b5f3ff482639b758b5611b3274e1b69717f165fc95ec2bc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

