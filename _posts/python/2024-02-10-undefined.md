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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ITNOMCV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T175900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDs80%2BlRENToxVo9QdhKE0NvK%2BCSR0Y5GDIpC%2F93pD1OAIgMs%2BnJf2s3MeNYbwN1vE2apYxmCI4vspF2Ty%2FHvejAkYq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDKEc8Kzp6bQ18xYsHCrcAz4YXW7%2FqqjmdFqC5UiqrTV%2FE2YYMLNFr1N6LiMnv%2BYdcMqpWxQaTMIH%2Fz5hc4TuAE4VDferGkrVqPCkQgKh%2FG4EVE9joPL62EX%2B120wHxvg3LSkGdKXtyy4s5WItP0o8YLkSfBrXtBFZImx6zl88kz7KE4z%2FrQ33miwb%2FX%2BbRQZ5KgJFnzFyDXngsE0iHrFcoWsU6gKYF08dVVEHReYs7aAizUZ%2BAsrVbcN76F2ScprFXySwSkXGImqVnb3HS2sRZkpGxddL%2BKUsXgb92skT9pwzoGs%2Bj0wK56dXmlaYUsY9PH9gOBx6asJJt0762Uzj9f5q1HX2WWRPAvsAGR6n3tN9vbbWGyMvfbkg4IOylv2VfGLPGmHF%2BKZd6PEZmOJkn86gKoiGF6Ymr%2FngZ7c1GwTJnHVHti95swVJv2aBMDyANYlzVhVOdczsJrSFe321v5P6N29qxntcO5PlcKGrAWcyB%2FEBRY8p97%2FpA23go%2F68%2BOXWnM39YUzm8n%2F5C1De5%2F2JVNzbmPqzn7GLrv51Jpq%2B1V78xVbAYXAwHZdNeAFCUX9cSLQr0A8E%2BqJmMHOYhvvK7Yi5ZySMdUiBAOtu3lfRWwcuOCTVGc6ywgEg58se4JuvQaDppB2jnb6MMLbwckGOqUBaP7PkStlicfg21vr9TQOFx0Dp%2F64e9a%2Flol90hCZ%2BTG1swC9eOEUI2fgXzUucotE2jHIuez5JqDofxJNX5PPrwl0ybGguKcEjoPyTPwUTqVlPjodctQhvE8luKmIl1u2pzxc5NomeukxS5EeKK3drrn64NbPFEJUyEop%2FBWOvcjyA6y3QDtN%2F245Us2xRk4yozHf%2By98yAhe%2Bh9XvoH3iEEVHdt%2B&X-Amz-Signature=a3aa8e456a74c8f7d228e304e8da4aa2375e58714759dc7e511623f1a192e303&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

