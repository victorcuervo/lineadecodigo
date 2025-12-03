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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TM5ICNV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T092822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCt7GgDqlxencwqp%2BjkQGX4QPHmmN5%2FLpqhKXAmu0%2BNswIgIvzK57Lc8CL0wzm8A2XSmlzr2f06NCH%2Bxe0UKGLoBsUq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDHEk0sLvkE8fgCQnXyrcAxsEL9PPIfycrmHSexp6qmk82tnOSjHyb9c71VMWsc5%2FCPddyN7A1iuIfcHqwt3EpjnZpz%2B5ik5wo76Hyl810RaEakugQfNCycQIGHJhDHfrOtNZI5t7cy4M4jNXlb3cKckA%2B9QPKOfoel3dD6ODoqWeDNEuAV4NPKrxhstGsPd0wkjbe9sBsbOqVUp1E28QaxjjbvPKkGU6pBkyyoINbjkrryHQXmI8S7UX7oNBWbyuTrNCtnyAWMkbYaBVsJEAQZlAi7E%2FeapWcXfQi4rGAcN%2B%2BWcix%2B9Ct2D%2BB2Hn6TOOU3RZSiunyP9yOQGgFpNKkqvEGcxGZ2KJZDNQCvf4Mlwtx2pzsnHcZIRe8jZ0UKmkLy5cjlzmw6bw%2BJB5OUsfCSc3ey1s0VhqQF1YGLGF5nFoQk%2FlIe9ZxMoazcmFhWdekQnm00936TCQWGxMT0AXPP933vpBfyfLMbr%2Fb3PKrMEMqgBZ2Jjlt1A4Z9xm%2FC7c6kJ5jHSOCx3S8dwW4PoCzKzTXDkWnG4gzYlCZOUmnoYLvXIMpQmbejzb7g1kCekFe1Q7%2FRpM7L%2BczqLpqob2V69EOWkLX4cg1PvxQs%2Bo7sJAD7kdMQCfZAStyzqrxojQ5DWeJsxBseCuoKcFMNv2v8kGOqUBmBfo0PBTJy%2FbwOGsuXWB9GKPeam1w96m7v8DCXaFxF8iLJxbBgD2ZAQd9og1uovmcMtA0dX4AL9Jssu1yUawbPYnOxM6bslWDbxa2LgSTVWkY9t6jLLhLmeBhf2DwrY%2F01woR6IoZYH7IdVE4115PJImOx9wvJ%2F1R4sN2RUP%2BTnWJgk6e%2BnoOo%2BBU3wcp3LmSXuhcvXbZFD3d9CY1magfO4KATOM&X-Amz-Signature=7cdf6b460717ad2fbef0f11e9e265adbc063ecffed0f8f1343f1a8f8c70c3967&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

