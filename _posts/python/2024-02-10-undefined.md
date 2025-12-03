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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2WVMO7Z%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T103548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJIMEYCIQC9NLvMvBXTjAQ1yn3Q70pjrNayZHk2Xkm9y3AeC9H%2FYgIhAORHARZx62BOSz5O55GiI4zHO4SkkgvNvivwFJFGcCuxKv8DCCsQABoMNjM3NDIzMTgzODA1IgynWZ88jygcAUQSgtUq3ANEkT%2Fl4FZoEPNyY6Q6vostTyHzA10%2Fa4c8wgW43sI4ltrRGI4j%2Fg1LWz7kSxiYJX0MWdnC0N39CUKpC5kLZb6LFgLy5250bpzskbfAyGtt8YvxO3RzhI9xPJJSQoNV%2BPQEv6q8SNTnwuWojN31qmQJeZDUlyou%2FK00g8CfNwpnfTHsj3S6KsLpIKOYufYRoWhTWY31dCc1xUc1JVkPja72Gm97k3YU6WrSu06y7MPLPSVGLTUL2H1TNje2IIXKDTywhntiZWAdQZZSyKkfTEkhYTl4Kfx%2FjnoIdWbesO8TtL%2FLP2HnsVCIiEBD4S%2BF0zmQmg8OJeBpYzrECpO10XqAymeo0WfURH8cblovu6YfoymFq6M11b320nnnWSfujpFJ%2B4U%2Fk6KLk2Zec3YVhyJbHBVhRSe8jJJBkKs4UvlLaTCCaMZy8e2Whjfu6p1sWUw24bF2%2BDugzKQAxHx90veO%2F%2B8uF8pYHRUkac%2Ba6qZeJ1uu0hCD7Jl9F%2BxiKyRKxWBlYtVYy1Pl77O7wjitEJB7jv7asJHhqOtYOWQ69IUH%2F%2F68nE7UX2nVPxrKWOnOzNoABL8rZr5irzoNRBf6ImBy%2FCSZgw78iQklAVyp%2FLMRz1R3tcu4cABwKdRVmzDpk8DJBjqkAUcFED4YfEVQcmM6BBb%2FsPNxGYBmq1kX84vyu2pbKmL366sHTR%2F4R6uXIBW1KujNyfAHuxsGfWhlM9W1XJRPn%2FzkQAydGO5D%2BHfn4KV5%2BCAp5jnCz0GEBaCG0hbMJocvHbYy2DRqPXzKfD7qAo4G7E67NPwAjstOq0pA3D4rUjEpai13ABolRr6q%2FNb42MJIwD%2FcvZniJPCxKY8VUomNA9WM0vMh&X-Amz-Signature=b4c0f6a3ec9932e438576daeaf8f484ca5e63368001369f0699d9696d3a84136&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

