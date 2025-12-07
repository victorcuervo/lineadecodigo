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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FVWTUYE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T225733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2BwkIv95jtYSSsHdIF%2FoaQhmXtQw%2BY%2Bg90z0QVLcBZGAiAB6Ww8UuaZTur9DQbJekhBlGVS8bHiotS8%2BqZkXLXSmiqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMnjd9ZO0lKx24LWcBKtwDFm%2BEDAzGOjJ1J3XuVAPxy4KoHpM7w%2FvUBBstt2zwIcGvxZq3bDaD5qO1eeBssl8y3kLeqi12JqXXRZrlEpUyoMY3Ke4IuarV7hSDc0R1dSl1cNH9cJh58oFkbifSf%2FTxXr0IEZsts3H1kAEEoVdz6gnWsubhZhG1p4kqPZ4VKJXf1dJ4WB2lPY2rrLatRaLqjmGDeFOCo9t9CMw6%2BFul8a0%2BKHGCGTjaa4tyzqjRxQ71OM6dAMT1LrOqF25SOCG7wf5%2B%2F6XqRm3ZQzN%2BcNbhOXho46474HK%2BZnQxLJvHRhXdqhQDtwIhYe1kjmMbY1mwGyDZ6dUGO2ximvn6Re3uPBG1zP823eLI80KT6iIfegNjf9Vs8Kklb8y4MfJgBrXVNhOefAl2X1nXWPE%2FCuhzLcqQX3c0rQGCa6kDFkUGjdrLYHvWftURuszVb2wSamEn9dKp2cjHlpOyngbkKIKjEJ%2F6UeO83i0SToOO46yauhEsOfc2qn56h56N3JhUce8GvtwM3gmlHZXiIlL4Qwc6CNGnwziTaVTA5hy0C1uc2pYIadM%2F9G9yt30N5c53Oq30%2BTnAYK6rDKuwUm6Lie%2FKcBgnSI8R9Uu9RqTyh9y5mQmjFvK75yDDZXDH0LAw%2BITYyQY6pgHR8uTiwTHC7bZRGsoiWgWh%2BfLProxGtsp0l4pa2OWKzZoxeXT%2FyI8EPf6zZrwfW91aQUntO86YBj%2FSuhAf8d0UuhySTEhwYJY4P57R0aUumNZ5KKaNSXA6Mrd4w%2BjUksAdGKwP7e%2Fl4WPOvgRXkpW5q9DJHJK6Xwim3%2FkTfGm%2BxuebwttUcS7kN2U9u77IDa8L3SOINwFcjYK%2FnoTC2FvvopX4gD4p&X-Amz-Signature=a8a6bab1d85e0fb111f381748e989e1c99f5e3e95b5bbd48e8bb95b9fa2b5b24&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

