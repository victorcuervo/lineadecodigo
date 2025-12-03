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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU53IEGD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T062956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIQDYN0Yn5ePv7tJRHSoDsOPrZWNYXmERLmwzo0YCtrLMogIgJFREPgiOAAdAxw0VWA%2BCB02Nu%2FGVl0gaj1fzLADC9Psq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDCm6ju09NPSUogY2syrcA7MVfmueqIjDoi%2Fs185LtYRPcy7kwKxH8%2BTWMAXb%2B4U6%2B2honc9mlbqjZUU%2BiFceK2NBPf0sK60qqgWw9A7hwODZFYsTqdOhRdPyj4YhyLD5o%2B8cWpr5GJ%2Bf9KJzira9U3ENLr2%2Bh7LAKKD3rkmuz0BszuGAirNxng6%2BYuWTc%2BVueLPw6AFeX2FZDCXvk4kuUqwmYskFsm4ujPiXSeWB2ejyRJjuadkSijfSkqbuag0Y1kB%2FTBHU0gn3lXn8Bzxb7aLGI%2FV5FtbUGfrR1W7sGrYJjNA8Vxbb4Qaw4rhG4GCDm3hq6gUYYxU2%2BifzLZhB4wnW4ouePwuNK2J6GXHX6P9HM05ckOWpB1vmJPH4cUHvqNaFcKdOfzFHIg5MIZR0tOw9bq2MT%2FsPX6HRNFB10N6yLcYvQHH4KQT1s9PgVoqpDxnitjf0bUZhKrdHfdrikEsQOu0TREuGhstUSkhpV8atEU6PSphvYvAsgZ%2FBzH7RydTjzsnaFkGX1i8d%2BuSEoNLFNOUVOdHr0e7bCS5oB9gfMbV7xEWg5To0oU%2Fbx2VgEqDIsAC%2BseDZXA%2FzqoEdvBeqpzdJgqRMcZk%2B5UR7jll3yENKyJ3aR1vakyaBV7WTY3kcI25kgaUCJANFMNmav8kGOqUB7MafbuMUIBO2D9w9QX5SrC79Z6ewB%2FculJJEcqqkPkOZlU2peo1eTHq8fn%2BxXhNsMT3WvBc48Go23NLuloLayIC0m3h%2BpZQ3gTduxH94gcXnlrOf2JYiYKJKxwIR9qNagpYVa2uNKt6LeR9YfOXUsESBrIA0%2BBbwB5ZBAjy0A9rKVcmDGU8uV0KJ0tG0yeUE2vxUtrtr3Uan6l0pvraYy5S0XCHw&X-Amz-Signature=592d87f43a0fed20dac14902bb25b98bf40ae519475001b036554e21bb9c5f56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

