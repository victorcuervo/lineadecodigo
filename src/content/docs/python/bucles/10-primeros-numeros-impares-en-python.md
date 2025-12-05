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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYI6MB2D%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T103351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDK%2BXI3ERE8vx1Ut4OLM90aB28Jw8Ij%2FUlRejJpOlco1AiEA1pj6E%2FtU5W9qaYvsAWjYOb5dMdQ%2BwFvizWEkurl0I3Yq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDMRmH55F2uev7grk%2FSrcA2%2BhRLtb5UxO4%2FmwRFrlLVpaA8KimahT1yVom%2BaQFqt%2BexeaRjh0hsrJr9uf8ClUhYnpLJ8PSmrXLaqKOoJHKOp2KC%2FmUp%2BzdoKjRjQroZLZWn7fM%2BPRsQsPzPmEl8LeGoDFdJZTZEiuTRIuAlnRc20CaJguyI9rxuZXZ161mCFI06QrrVbhtq08V7bfn7TVK2JJ6az5V3apOX4LPh3CK1IDY0RURR9fFhXeiKWWC5Id%2FI4o3jaKVsA6ZqnTei298asPTymEujcoSMtN%2BvG2DO2jpCUM81eJL0xjWoLKeOhzn54%2FjZ0K7LitUiPdSftLLln0KKmndFui842kwtVGUJ2O8cPIRgIbzQq1q5GcL6YvjTn6naLIB5rJMi9n%2FmCo%2FTe60JUYAMz8jpw0R0HAH08imh0cegN8inYUhU9QOALZMXFAB4X8s04HrnqGsuqx60XvnDMi%2FNEOg9E4rxyNOkQQnvk75DR55PyQq3rrFkz0JICOmv9B0Pm%2B%2BZ%2FvA7sXGBY%2FKsSYq70FRPZhCn19qS93fQBR1tEynVfkm4vnIXm9drWkbgkYx1XJvC7zjaOyNL3ODK7%2BwOCa95b0HK7wewVu5cnKJey3eLRpyXuW9mgCE2WN0azLIOYHJkq7MLbDyskGOqUBDls00KkLmUJ2siZVgMmZAksCHCIGIbkFJe5YuaUBDttSJjjHKvJoXEpJPPoTnXJ2DEWu%2BKIXlpnVTC9cfJ1HGf2Chq0C%2BGL0tW00HKY9Ibo476UzVOeoW6WPcLUYcq593zi6gjKUKyotBOKKDknQfSKxBxMmq12arsvWpRaJKa1FMTbeKMClu%2FQw81ZO%2BfkGdJ%2Bvvni5WvZiU54z1920AlVb7E40&X-Amz-Signature=dd4e0babbdceb0eba6d9ca917f06415f3255962890ee5ae2e795a527994bc079&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

