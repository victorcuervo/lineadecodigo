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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7NG5K7Y%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T122003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJHMEUCIQCZ1xI%2FEUfxWc%2F4UFZyO9GYOEsY%2FrxUF%2Bdd1q1r3ivGkwIgaayQj8KxNpf%2Fu3uKLRIDNE0Ekbn7%2BXBrDSLt4t37HA4q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDPJuUsXDvE2xXMHteircA8LCOkbeMhYc50U9e7fIBAraryStV5rbTHcCVhA57IFBjGHBwp6zMwJBFr9fxWwNb8ksZnAx7172ZFca96yLzrYm4hRhPBdbKVDjlh2uongxhlc5UGuBNhBBMe5wZ2QiYvJ0hIq5LaM2B6fOUxtQklWir%2F6306hV%2FkgyFfpV3hUq1n3NQMjCLn0djt6AIPnAVtPsYA6hbljBd%2BAwaxGrRlj%2BJ1Ei9e9qlpA7BdfOJDbmIbptAGfFRjp9rkKQvbnykqxWrEXxyy4Al%2BrCc8N0qkfISCxdmwc2tKrlmB3wAlOdN29Ebj4QgQtxkrD1xUK28om4Zv0KcsFxZtkJ0PZRYyvHbF51MDnGXU3mF15cbA4nkvKYko%2FcCTfSV%2FoHP2Fjd7Ht82q%2FXpCgQ4KChBGLz%2BKcy%2Bhwk%2FUt%2B41%2BTBsXVyQURV2pbS4zm0VQcWY0sAPRwI9YCrfBB1KtbVh8%2FzRzvaVFDQwtCXDGIODygYNXOVG%2BrXMWtq291icfDFqvJVO52LykEo02MSnvB6pXpHAtSV%2BhNewGHsIscC0goazR2MgGu1DH29ke4u4EegprX88Mq08SFEH9u3ao7cZmuY7C829aWIhY2rPv88oexiddu9LYI1d6BFDsw2K1zklSMI%2FNwMkGOqUBb2%2F5W1GjEaGeB4h0OZx0YQWHNYoHUn%2FnA37%2BDowmhPs5DFI%2FxgtMksVpMZQEKDi2GuSCmT3XPOU7xROZTYdYbFl1st1RsAqbccYugJuVqOZ4OmWRzVTPWOclIQ3AYyUvB3WBTV2BqOevdWYwHcEiBC2VJthqZ2UW5bfWnVHfOli%2FehrD95vIjIht34p4PYAWmpQIIG4yXE9gMbVFk3kGEVn%2BNtJk&X-Amz-Signature=9785ab72a8f268316f3131d9226e08c1a79fe062b3983e4025604a6aea2e6f2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

