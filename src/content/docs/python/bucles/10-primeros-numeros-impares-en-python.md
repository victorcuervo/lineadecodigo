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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X25MNOZS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T073446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG52usXihtUPCfoz8DX14YM4CgEuSQF7WUavr0oUlBHrAiEAzwfh5QJQzUNjTb7%2Bm%2FLKz8QjRH%2BZmUrjJJmmCkGTsAUq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDAqq0UHrOhxF%2F8vD5ircA7hiBedIJOvBqwd8Z9HqYM8gef7WfHHzw6%2Fw4L7x%2FUA49VE6LaRpFgEC%2BRLpPjYHkHlCKdtIYbU2%2B9wJiGLUbY2hO0A5ohcJgRl3lMBLPs4Njq%2FGzvSNqqkBMtvjjpvKUTS69PLQeY%2BUgTIQET7i%2BaVtL2j5xqM%2B5X8AAftr%2FVvS5irR00zfVyQgyPHrZeDn7QT%2Fyu%2BMm4yz%2FeYgAvNsCz0sC%2B52id92UnzovtGwImro6vLwoozh7g3138iDET3Pf%2B5flI7GK4R5LddbVOAQlOD%2BaILmyad7odjeg9nYcJoL6S6VsAQe6fAu9UlUv1X%2BwXlqcRwukU73xZrNIr4kjQHi%2BlYq8A%2Fgfn0VIItXQkl5nZIYPkGrNg1mBaf%2BkQIWRHT7JwmlGg38DA5j%2FlU%2B4S9MoHfkpcxxcPHmk95dZU70qwgzpah9G0kgojPFcLbp91TP%2F%2BG5Cp8IYRqb2Td%2BAuWlrfP3xWWJmRUDo78IQUX7fTE8gAXhMJdxuLxPCAgaL7vf2Pc3Q3nVX%2FLUHTwacxOnN%2FvbLFcVlv9k7ABJ12l45clwLMsnM7Kz%2B5c7kWc%2BgtW3ix4rFHsF9DHWeQYYdwP%2BFzzWOxpjXrpbp6SMIe4PqcXniFYchG6QBdLpMICez8kGOqUBYksCrNCbCczrhFmuAC09x6xPsIC6XqBPG%2BuVkkbGGYQClVbrCIxMwf22SmNsFG2OylJN3ENybUaqeFZTXycH0SjMtIwa7gUVnINY0iWLO0udAaxlcMdQi9JQcpI1YgCRUHrISgfs0KuhjR9q45EJii6DRJFD7gCsGhAVMB04U3tOsRbk4Sjkd4RN52bkk7hTEvceOrTFkCc45SwlvPh3jXusEIW4&X-Amz-Signature=33a216300ac4fad127ee16b92c740f2daf2df55bddcd8fcfb38ee5613c49395e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

