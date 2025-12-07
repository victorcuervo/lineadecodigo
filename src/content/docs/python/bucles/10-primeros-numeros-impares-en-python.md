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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665E6V6XKM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T075403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDebvVbhM7yu0wW3dBZtK50WMQ6wdVMKtJeT%2BgIdgyW9AiAf%2FbS3owtYllr2XBOHuBsIMzqlxKZ0PVHUhNKCTeUtgyqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMRBbrP6F6ABvX5EAzKtwDqNpWoVoArW%2FEtY2BvxCnxpNhU8IY7iN6ddw4CERcth%2BzKvpMamH%2FkyaPHiS4nS135RJhwkVW3tR6%2Fh4M2psjHMKVxnGMiJgEc%2Bf95YbhE9QCCqqXotkipXWglQY5%2FwfySRHQhrXoGSZ7hKL6YPLJb6ohTvErGz58D9cKymHl28fukuA%2B4%2F2BEu5jH9BzgyOcGdRWLRjX6cZyfv0dDaf2bpLBcLZcs58Ab5rOMW5T5Q5UHXIUR30W0OnsD4MJqFUI7rl%2BgjZEHEupoSxDdCnA00n6FPmc%2BSb4U%2FHDPvcrS7m5h0io%2BU%2FLjA1UItbZ8MtReyHi8e9Zz54WEn2b60IymL0SzjRJOiCRctI7A4tpqL3o3JwYxwYRDwB4txdWlofz0YTkD068fMZEinh1185P8Ezdj3BWL1qYbEqCbdwQbd0%2FwtgHREw3N%2BWR9Qm9lROatwGDiK7XLRyzwdJ887b164uoK7ivXdnnU3IV5IFdMI4F8KSZfaDlep61ozL6oVmEwQ6UWeBRj3prOVFAZ0Oco5gORt91v%2FbQ0gTVKRy5YAeKu%2BRlSIZ8k6zXQJO4PStq4sYbY7F9DwEic4ISBi5N2IrqYGYaGGqbVta%2BAQ2u%2FcOkUqs137IkT6FUn1QwpZnUyQY6pgHZf2tVFLmSjydCoe2w1dSV88wPC0cV0zrrBw7VJVnBrmXxy1MtXkDGxLkCFFooca%2FTyxf6JdvoqPUgwuIotsYBxqXIblGc5BqaepwzVMINpUaEr085LO7fA9cfvX6lyGJnVATpLRrHgO4c29oekQiRTX2O8hdtdEnor5B25spDs5GtAKbOC5hKsne0BeHDLzxUBo56c3zYSRVycow6Ls2rkNyGwz3Q&X-Amz-Signature=4bbae2b138098b92c66fbbe483a8dc32ccfc62cef3561a30aef5d5aa18ab70d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

