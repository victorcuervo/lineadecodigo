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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KHP3M6H%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T172229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICzvkjb1p2dayBhSh3j4%2BrDvUp06R6Ogc1N62KxM9FtIAiAN74ihAKarxsBcbccdwcb18gU39PqUGe%2BiDUvFTXqFRCr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM2Eqb7IAKrcwg5kArKtwD1kZsJTdLHmKtaXQnPTzoMNe%2Baqh4uKXI2z0WXwWu2jONFHiEAGRVAIhLPRx%2FrMnGukXW6q8WImds3lyT9bI2BrTRMuJTSXl9pR1Fiu9XMhy4ZcIHNi9B%2F2xkPQAZR2oSkJwoxLPes6LI1gSuSzNEXEHU98adhbatL3vI15X0sc4YqwGqhDh5bkAbULpxaU3ST3%2F5sIZNUFEhUmThmoqDSkU5xdlMH5s4RTrExPnlgOefpWHqx0WkSBoUnUwPlOlHMwMhBpAcFDPjkQFTtlfGb1tumgQh8fFbGgDvjG%2FeG%2B5bNBXfk4J%2FqV2FWIyftwh4kinfEsBJlc6zrIGzFLRblUctA70T7yf%2FrAnfXVbU2AHQhD6u10rQUk8oxUUrGTTllAdTu%2FLWyPVnM9NjGv4ycFWNAkJikTLC6qe98LfA7USnO5Z3njhW3J7Ma%2BuYgkaucIuEl%2F4sfzLexoPhFWP1lQVjyxq9jeEHaS%2Bk17YCIJdV6QR3KDpaYaT21VVfZoJ7g7ZVOYh52uewzqGSHcKgHCiqX97Aa0bqs0ShWKZLn5pknsv16W%2F8a5sR2D1KhWodwE%2BnAX4UvVJL%2BgMx2qJ9ig93VddVjutD0cb7Z%2FsbBiiwGeZUG0YgQFb08fYw0ZHMyQY6pgFBIybzQJDXjWyfTi5%2BW9WeS28iNyLu9RBkyLVNbdjxu2mMG3T%2F8f%2BT79f%2BYOXYZnzaWrpJGoGNByw%2BOl%2Fym7HL6GpXRSxJdF%2FrP5x4JxY731VHkl4kLEY5UMpdS2QnEYcB9EadEEVrkqRDits1eXcAu5SvnAIMcI4LyJ9ayOYFmybEnCpCkx%2FI3PEoOkGoFKjFu3pT7o7KHq955wdVC4zLATX5iNwE&X-Amz-Signature=75ecfde843df4b13aa8f1ef5dab7574d50ed4cefa2e6687ebbfd89137856e86c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

