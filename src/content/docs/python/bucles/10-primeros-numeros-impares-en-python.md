---
title: 10 primeros números impares en Python
description: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
lastUpdated: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5EUTDGI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T014239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIHRr1RdzNZy0ceCmRD8lOokyHvRiXVbV1AhNu9Z3Nne3AiEAsPaMWKCESXx0xWS47CIM%2FjuxTitfMuRBtXiEkz1fjowq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDEamlQxoKXhAg%2BAPoCrcA0W7ClXttBCgWcrlvBqC0W6XzBuGcj9kQxxaflRRw77l8p82PJX7sZ5s8jJTHLuZFOc%2B5onzEPYaj%2BqI0%2FYRCViXR1HEdxS%2BX00xD7eXjGZ8ZoQhamIoMW6%2FWkytxJpDzCkaXJaI3heTnESv3wPt8IKbdbrslBVURSA3CBPrwFu%2BaoAsJ9ObhPejyNUyUsmbMj8cKi46jrHSUmQvGzoeqoagOeS3U8uCqOqIp%2BA5oUp0k6BsQ16tGAzYetWPPfFFVxiMSWWLWBZ5hzJBnM1fL8CZleUmduiiAPjjUJR8oKxeVA6AxmMBe1ILlJpK9pxvGN3BD5j9%2BuHvvx40GtBdNt2rIsC0GYsKugyGrFqvxy2mDePmTfsLiwOxgwlxuLWyU9IZhfbfA33sDAZeFQ55ORy8LO9FQgsQ1H%2BkPDRuxbFRLnbayhuhEYmZe%2FSfNXQjjAgtyti%2BQWEc1gKISsNhzTAtPASCG8Kbs43zEJMTsK8%2FTdtAkXsYKKxgI5KT8Y3hF1IVO8fEFI2oQ85mm%2FX%2FMtYJXmLCtXHNOI2GMaY7wPqJl9hhR2dAMUgw5uNABlRBM17dMI0k5tDvfJo5Ul1Yxihkp2vlUJ92pTcziQtytWUbMeAZ7KmNNxQMqq6pMJG1w8kGOqUB%2FScFAndj1SrJo9HJif5%2Fnsfw20F6Tv%2BFTqYPH8hy9ypUke0u5IBvKehPgQgHf5eHO%2Be3V3vrGLlYJ%2FLx%2FijhoEy4AfRCxo%2BYqJn6XRnGYUsXMuRByZfxiNb8QmdaRlJJO06FYP%2Fa8sto7pP0dckSlDcNGU1MiVIfac9i%2FpLKN8791XUUbUGZLqeiPqbJ0oVAJFTwReYWu4huV8BCqupbztxwDaj6&X-Amz-Signature=f4a9d443e9e56bd10f8110e6d8aead6d61a191759e7a7d8c52da7ce300a17592&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

