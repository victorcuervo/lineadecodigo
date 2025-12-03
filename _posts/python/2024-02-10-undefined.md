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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3NLE7HL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T160605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQCyc8Hqv0aEsv3tEOAol3IacvJuRAPdSmo1ELi6z5EbqgIgYvGXEiUAaiZQnYF9jyB5H6xnO3BE5c0GfSSi57Ei8rgq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDFxsXCRIJtT2MpfKqSrcA1AAeQbTZrr4ANY7ptO7hOE%2BPGzIV6uPlyRWHbsXmv5b%2FjifSqTua9dthnFU5DoVik0GPoXUdhq%2BXwp1Oi7nFQFd1npduVOhVBIQaRlOcIFnEDV5v9yuuaX6afC98xrPSCiiXSrTz%2F5AAxVj8xQszwHGwF3ZyZIHjpQjtw1MdmIFSaiTYu973dqbMnilGdi3pY7%2F0ahBEtEWY702Fdv6S4h2BTTZ%2BB7D1dOWrDlT4E%2Fkwh15q239LII5Csf92vr10e7o%2BFOeQ3uwwMAsEOeB9joznaMlN41KqD7k7f4BgDlFi%2F6xEennSCFTUBNAwDroRc6DCCYgwhVC9Ax8NMYzQDib8xgSAt6iVY0QkrgqRgQwie4kT7g448kzFuWe%2BYh75krMH11hZUYdPTHp%2F14X2YV7w2VYIFaZrDl7hMNKzgEzJXWarZl0kPc8e5QKntyZ5gDPQhp3IqGtE%2FkdnNETw5%2BP49WyaNJr3%2FyfnsGl3ppiKl8l%2B%2FHynO%2Fqf0Xp8u1aBoLjZbwGU4EW200Dt9FjrbFkM1aFJbuD0XkypobbuHbgIZI6k7V4o2evhSSEj0KeMyR0kel%2FNKeWzzfFScsD%2F8KEP7bat8J1GvfrvO5sL%2BvIbnY6Q9TQuP7x3S0bMIWmwckGOqUBwjn1ygF%2BDi5ORQvLSxPvKNCqp5BLdyW56QSqvZ0%2FqQaDkgsgiMUdEC061fhpyyhVmCNI3InXJ6DIPgsXTd0ygNlsom6ufHgHlVgmyaRRmXqxRbU8OplxPx%2B0XxTPouRe1MCCBbdanQLNGGc4mLAHNPRKIUhC5wYvd18gK%2BlS6TUpXKzyIHOAvUllcclwDPwJ1SjIeHm7VS%2BuQQ6XaH%2By1Mk3axSl&X-Amz-Signature=c41d514815264968a96a3dbe38488d656bb6fc4ec8b1d2524e12971f3efc09a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

