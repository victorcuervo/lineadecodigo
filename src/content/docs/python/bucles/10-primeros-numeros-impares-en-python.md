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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5O3RCQO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T042206Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFmDyzS4u4%2Bm63PIKrtxtdNwPzlAedAJC0TioxNmncpLAiBsWkOpkR4RHf2QWqNelwEJ6iYM8pQrZ5i3qKaQHYw49CqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKbFnd9Ru7YssperLKtwDg5xi1ipKmurzk7ElHQdGpyN%2BX5SAqUP51HXK2GT%2FrmFQtfBqvXjT979uc%2Bq4lAutj0MYgm63twFHzKiUehro6Ag8E6m1t1wdRWF3DfkaRMm7IOiu1HTPEKXhYrs6KbIO4uYX%2FGRfUfqNuu7n3Zx6I5L5Z2qruTrHamrgOek11Gy8I47QkJVb4M0P1bLlh7G1PqwJ1SxKXM2ZQxIBi2aw13bJdDo99h3EbtwYEy4xkHG%2Ftuv%2FXsSUFkvrUfUQVJEa%2B0rRlujcA5UMX%2FwdZhGC1%2BDo47Kpr1YBPv4nBgLapPcyHAdl663glZM8BJJC%2FHqes4iiSJyOsA4rQ4MXSXrc%2BAo9%2BTLFpCBQzveFNy2MHZR%2FqgqbanOXzEd4cT4%2FNar1mVkXBSLI5eRazCVE5v3FzLAvPxtJpDXn3HV8wpGOP%2Bki47U5YykFTxt2ryIiNQMy8SbwljxTF8dMLHWhpzEQK%2Bm24nEOvEtPp5jd6aMAkBnI%2FCr9Kwc2nPHwm1RyYcuF7ihV6nZ3Hpj0zrmvwMsH00NEoLn8xW0PcbHmXWaiwcomPE7WKY2%2F3DLoEV74A%2FfMZv0mqLpLoEpq7xK8uaXJ0dBsqmFgv5Bv5zvqGoHBnFH6sYrjjnwC%2BXXZSfQwua7eyQY6pgHocgdrvou%2F3TK0GRRoZTlAsiEbwmwmjYRA1WYbRslvC%2FH9D8yks7l1KTwUT%2FKOiaNiyyNqBpv%2FexwfBPbzV%2BFsGR1s%2FQr1NVw0AEIJo7FjEY9ooG6PEWMXoOtoIwwxwemmvBNQb09q4ib0JIM%2FvhLtcWYL7VsKEL74aiZmZCYJELaOLR2CaiNOLNe%2FYs0YJMO8UrF53SMO7LkqjCcALH4Ua4IzMO%2BR&X-Amz-Signature=26bfdb43b1f883c2756bc177bc298304f10097d5506d9c084406e62937c769ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

