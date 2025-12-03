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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OKXAB76%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T105946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCICSz71GXf3HCcQjeEM%2BFMZQxy%2FqsWk9hhOZ8dXPm2igBAiEA3qUVbKghP7rmKqu2iuTJ4EFu%2BDr9qDjW5saimshzkx0q%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDBVxjiyaQbr%2B9AFDRSrcAxlQTJWOuq8Ij9H%2BptADeciNmAogVTsYflNDe3Ps6FOQPMzN0oOptwsO9urEjEi5172dHyZrb8tpIbygGeLZBIsIIJ%2FQUf7PUORF1wMLNLSaZph4p1xF2GhEEJ%2Bdw0Cz%2FU3Qb5%2BYb6s%2FU8o461VZSsaNXwsKmehlQJ1d0nXmq9wRLMitw0JtRJC38yZ3anNGEPSuAsYnPOfMuHbTCQDAE%2BYY9AVlJR6BzB8ZLEiqdBV05uLX8bwSU6bt%2BPn%2Bxm947gtEk2cKtHJyE459al8HBgL3S1%2B04QoYXqu%2FTuEdXPtwLRb%2FjlYg5yubge7YGc6F3ckuhj2LUm6thX2EDqbXZwtT%2BuiX1PVF%2F8H9IKrPRhQj%2FV6JXm%2F0dnHtm9J18UiSOHYIIO7YHgaMBsywF38qfAQugJWDe8VHXifBkb6ypIR2UmwJCaFFX3bE9cmBoU4yb6qoDGsog7p0g1UBhbipsYP6bWmXvbr0hTcGEmP4YIZsKL3GtrY4h62H5TVqeXcRHBwSpqKwePspVPWGYqII%2B71belfG5kniQQn8a5QsAsbsTVg84cg%2BQprWHpwJfuLMno08u7ZRUXlFKEV85PZjKmh1PTIvKBbAi%2FNpt9DbRoPGhsr12ce%2F7l%2F7pu3uML2uwMkGOqUB3ksU9zd2xBj%2F75jVVQT13C%2FIR4b7JR8AVzv6JJgIWqLAz%2BGN9EUzhuLBQgwLsPRWm1QZV3YI0dDRuYSujfY6Eqh8dBno5EX1%2BXJInfqGpTFmzw5CahxFf7SXwgUB3gmB2Nj7JW3UGB87%2B%2FFKmi1bphaM5RcD5DZGejVj5Om%2FiSktoiElj6qkng5%2FlF7rB%2FGlsxgC73WkSkmLg2pTbth5kYcGEUOR&X-Amz-Signature=a9cfbc2856ec19073512498cf35a4acb8fe54a2a8dca6c9a1479c82f8c8a44e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

