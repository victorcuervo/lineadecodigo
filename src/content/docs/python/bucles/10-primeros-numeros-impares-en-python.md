---
title: 10 primeros números impares en Python
description: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
lastupdates: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWRHGERS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T205837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIAuE6%2FJjHADGWcO0tn%2FUdLE2Kr565JWa%2BzuFJnuoNfu%2FAiAUp8bmM6RUI8imUb8yjavag%2BCPkSolMrr5ATrEA7j%2Fryr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIM0L%2Fr9NIHSJ%2B9RqHDKtwDnZMYCy5Alb2eb6p%2FoUZohiWUXKSBs9Jeni1XkuM%2BgRkTuUCfP5S8eUrAlG9h9pcJvvM42xlN5rH4VCblp%2BfmaD%2FVZ%2FZNyfyhUOO2i41zSOvmDGnZw5blUwVnl%2BUnZjyikBycgZtvjlp2KglbRJRK%2Bqbsbcmsi5WlG%2Ffm254E7%2BjR4greg5cFiA71t50bj8x4hsUmhqTN9o6bsMCGzwVCWZB3a6pbkaVxv%2BRcAdDmtZhf5qQDKdYeHlscaw75rUpkArjXC4v2bF4p7ysLtdqXbKZibYjYkJa3Pzf2lwscUrXubVjZJQflOwaJDIyN8kRyV%2Bk13hNCmbLnay23UzkY8FINO%2BZ6eWSHDgixdzkI1Z8UeFw%2BIuN3%2Fok6j5ksdvFwfrO%2FfT6Jmf1OpbGFrbDF0wVhV4U8aICWgcqbvtv2pjZDLXGt9MZKNxh%2F5GTEWAkE4ecV32yoAlFy42Q55kdIy3MxQjv28Pd%2BqBNEB2Tb8NnG68RGHeohDC9x8%2BkP5BnBWaLhgKxn08eaF89Ip85jTMSzoyeVNCuHB3Y9v%2F8Vn%2Fm12oXm5Sv6WnpsUOvOsBQLgK425WtEkEkOLcOTzrgCgp6s6ZJSRdRghIb4mvEs%2Bo9Js3LqVviluNyaajIwir3CyQY6pgFwgk%2FCb7NL6R3C1Z2cl3li6yzHCn5bZFUNfaRxGZSlvyd5ft6P4KHhsd115Z5otCR6Mkh2lB4ODZK7AVXjYqzbIsIU1RDUY9fXQ0AfXc%2BnB4NxH0Za4lgEhZqzsTKiOyVhKkyClBIP6JGc6poUgrHTkFcK%2FkWp9OphNbR8i%2FGnFKCXHNI91VYbT75JNgn40bYCsAdpgkAupoEZ1i0B0EDqh5M6BA0j&X-Amz-Signature=30e0c761d04b516eef168f4d91532f2b96716ee64633ebdbf791ee17abcad90c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

