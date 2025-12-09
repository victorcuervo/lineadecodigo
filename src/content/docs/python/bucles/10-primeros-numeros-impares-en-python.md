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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VVHP3SQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T000633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGOpTelLi%2FUbn%2BDuxcJmbD63tvbutQY2VKi02ZLQ8hzhAiEAucoW44qHJ%2F4fBQA1xdc6lvwzTKbxXv9BPcvjHLCiSewqiAQIsf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPviepJZEnKdC61MCircA%2FwvGx2zL2c0r80Ufo8sgpcbwRTAlu6cXiXqA8q775gbqw5T9QtT%2Bxqc5OOWNeoP9NRc8FiYVxXn5OxCVkNjazJnH3f5nroKMhS1HlKSh1xA9DsgAxx7MX9m7NQJ%2B3M0sakX%2Bo2HV0Sz6PXS005zFC3ajL673aWV12229ogt%2B7VIrrk88fmIRRhb7aMorxFDM4WuYeqDLkVFI72reWYHc9eIDuoDSJbaLATP4FUv6Xgt28Qi7Pd9JTkzMUfgSCqpvMEVweBpES4MPAslNgaCUBA0HXg5H0Z39PG%2Fhma759j1Gie%2BuaqFtM0gjgnNHT1f7uEFayOFGt6e0kuRrhaz%2BpfYYJgVH4%2Bv2NnKUzpGJPsFTOZHEkt2VtfCcs5OehjrK6Gf9FS%2F3h2OX2AKlkDvZQ0P4ol%2FmG2b7kSJuwN7juq2ez6KfRyFwjmPiMrLA1waPyaIdD%2F1Gv6HEATtEvDNcia0R0LQb0LrQg%2BBrgbVOwfT48IKQ15PtKJnZiBdNxBr%2FK9BpYTPE6q6q9xm0ornEVGeT2CFe5Gov2OZZXHGYDhBN9m4RqugepmMhT4qM4bvB3cLYeUCjrMqA3LcPhuqgzN74hziTifwIY7jDNVNvAJvxwXzw22IGsuNrYerMKrD3ckGOqUB%2FqzLsbybznlYeLgJej985BEOyjB6Hvr6fd%2B5CpYvLcYoZ80DCdjb3lQGqKUCHaLiwoGZcM43WFb5CJvFaP6ortahAqyLjCh1XSuDhDlFGOz0zAgFljHmvP6oglYVPG86KrsFUkNU8pCuOCMPnRTicDQGHh22g7y2eUq5pwqPqC7iPEb3V0YdCavfNRK6xs5iGUaeOVpV3SuNYoTawXo2cp8QcSac&X-Amz-Signature=0343cc7579fe632a9caed9df8bc3b4928b423ed6fae0426c3535b09020538805&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

