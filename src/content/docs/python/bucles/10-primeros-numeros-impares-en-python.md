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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4LJ22VM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T024708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDbgebH9b71VY42pvkK3eXPmy16WS03yXjxrFM7qCCkwIhAKnL8TpGS7GDb4Tikw2Ndar%2B3%2BqlMGOh6m6X92jg%2B0lUKv8DCGsQABoMNjM3NDIzMTgzODA1Igzv5m%2F3GGlFldTHU1Qq3AP4cOACAi44gtwqnrx0JlAl%2BKOljDDeJaof2TA5Wh%2FCIivkU2qxHsrzZyGCHuhcweoFUt01Ca86CadRlzHWdDXmscDauHxP7JGeOJ4YbCpz8GQ9hZ3FqLWz2tx3wfUe%2BINMEQhEXAG4uqxQSCV8tfMh%2FGao0QwPalCAJkP1O%2F0%2F7jF9QmuWjundirC%2BLcznlLapjIIcL1NpG%2F1mgmdrz9CgmOjqguQEpZcIyVv0p4Qiy8z%2BD8%2BhIYA4sDck0Atqsq5IOLWUZYMDQCBeY8ZqyxEQyINhyTC%2FfY9uOCAXe%2F8W%2BXR%2Fjm3HUuKnD3EtZI%2FqXKUhgLadWyynEaglxwfInSDRO77CIWODdL994SwX855A%2FmOQ%2Ft5cFgAQsTaJ9zI2gnBi%2BNN0K1JZQY0FGBranv6Y1UbpQNplh4y3wf63OZ2dKI6K8j%2BsY4UAzpcHiwFCwTyrWRWzHMjhIdowJ2p8wTlxgJcxvDKzqkKKE05H3yoVTD77wn6Y6eE%2FZItn2xZWJeNKe3pBQJYiuiWMcKFVOmyRM3G2KGf%2FUNR2VgXWe9LjOTUG9gj%2BwTFd4eXPA%2BwtQ3y8ktCREQ3Vi%2BHplfc%2FxxIo0m%2FBe%2BLdOc9RUqxFk19RbxytEyitPNZXIfzpsTC3p87JBjqkAU4ROyRSXc7G%2BZI570EX3oHUQzcrAYBEbzwsNBb2yD2r7NkZEhqC8yeW0oVrPDOg75FTUTWaqulDVfaWfga0HR3m5DJRYqwgjgL%2FcbafMKg7dyHD0vzJy5Z6rpTdf1mLrUWwa1wuEH07H8Im1WR3SbXRBs5qlEZ4hDn4Gf4sD4kpEdq1Qzote3joGwCHpJLpxaIaGQVMb5l4xg5yH2rX0zKJSDtG&X-Amz-Signature=7d2c0589f8de6d97c9d91646e051a66c61ce4719b5e59d371180f5d367a109cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

