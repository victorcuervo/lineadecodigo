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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7RB7V5V%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T184541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjOczttly2E7BnN8PU3fJI850CVUGowony1kuh%2FyOY9wIgH8DT9MvmQziIwJPdXOrH02Zg%2BX3YHk%2BRcyQG0WGWPi8qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBRJli2hKJpu%2FPdntyrcAwVR2B5xmNcef0A8fNalrrXAthbyzOLmTAHm94zQgTWgjzGHxhe05gixxXktTLRZhV7NeB5XblnK%2FE5mJEDfD9XxB2FLSlKn7axhQ0HE2zMssme90OCwSeDpMIdwKLFDpnFcmy%2FAf%2BtGRswWzcmk7aN1Pdjy1oLIxU1%2BTqwi6e8cJr8OYiy1ev7MuJIm3HUDQ6443m8WzO30FOPEdtHaNSCD9dSbdAocAJ6JlfwLKVBbNSoSLKRGkvbhHI5R2tqr%2FR8m2gqbdzbX5cAjBmhVBeewq%2BmEZfv19neKRDZbRZAfyaGjVGWoBh55iWuTTG1uAoc78XzXgDMe%2FAp1tsFka7SvypcR2KWchp5UdTvddTXWcnJMMlTbPHUX9Lut9Ww1S6M4zsV0LZPxHwrZgnUL5%2FXlTiZUGMXHAedoFgTzR131yYAtTK%2FGuFO5A5RriRocnZZgAyxIolZIMr4iDWjVNs7G2QMD%2BcjILnK6W2D1Ip7jPQe22acTz%2BYCSKMkpcqSQvbkmhk8%2F8lqO3jFrLyVyZNT3sSgu0R%2B8CBhBjK%2FuIBFOdZ6FQOJ1AF3Eqf7w7rQkG9fz04ePqXWGn52ZKCJy8GUIxcwtDK6cbYRRB1TCDyb9hVEb%2FE10mq45wpkMLu21skGOqUB9NngZfEvB80ViCdLlzF2puePOQd4obmZT5OCTzmoFJt7tCLdEwSX7ycUl0ZEiLlvWI4M02oCUrKfpVXxz%2FOi5DrIwvqu4ER2OyNGiIAJa3wX0yR7rWTTMqeJvT%2FuQnIWU7MtnbNmSW1Xx2SiGGJjEDbY6SYLenJqFHmEb7GNDMYZp8ecfA5peOPFFALonzB7ETHH31Gm3yavtXyStQ5tBYzwv%2BgA&X-Amz-Signature=bb5e0b8a7f1a1ce3128762fdd9a8b19b8f9827636a3caeebf668f773f3e43b0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

