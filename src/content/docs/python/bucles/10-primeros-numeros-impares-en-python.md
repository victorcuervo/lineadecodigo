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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZKMUNJM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T153227Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIHBsy6USOwYTLreYAu12gx1liqdZY%2F9rvbi6usPaN7mcAiEA%2F7I8u9%2BuvwSSVfXLAYXONrZbV9Z8z8LTAUpePfnprGoq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDL7qYYiv1qDtn7EwrircA43MVY3tgO4FIh5ErRJRqDB7k2et0LcgA9tKsZn3PSpivojLTXNyI7h3rRYoj%2B%2BuWLGueZjtniOuKh0J74nwEWovyOmOcTAe57uMyxDnf6UN28VA0wXIKX679aGHhjM%2FUTSod0DD2%2FaJOXfJJhHhZiClccPYjjpnkroxE2ZEiHdZNSP9V%2B0xKWvxaVij1SSkJEjY%2F%2FCZS09VHeIjkRlFdup75rG6o4DbEERSMPG5NPjG3TiCF2ElDWWdEhtK21UI4Lo6tRk%2F37xKQ%2F%2B%2Fu51rXOntJn167KjnF%2BupwZEDFEPNAPES4SGrsQv9nI2PRN0g7Ggx%2BfELnvEp0asU8sl3JSfujjt%2FetR0UnIfS0ohaWbwj8CCH7PBRK8ZJ2a%2BHDVkXzPEH%2F%2BRcS8xSSm2qaGDtb98bwehkGk78vXuq0ThXruqUkHLs4g1m1OkIIVn3koNHCff0%2BTIGhgmX23vgEOQMLEhfUq33%2BfA3JiXfcKT5fL9FiAehD5Yu%2B6DTxcfF6e2YJGz%2B6eO8XV3co6UHt%2FQ5hNSLWxV2t%2FPFwXzsvmsaoXUyDVDEyC6lAGqVL3oFm63p1FqGDR2YwN6R9WTQkxkvMT%2F7deg1C3rCpIOVqojN6NdNvUdwBPRXP9T4R68MNq%2FxskGOqUBqWPx7nlcrlrVGlSLOY9THVpW08BKCWRaKLyZBjNulo%2BHhzRoIvJKv%2FdUXB2sWpB0wYLh0UwnibKdHX7FA76WJczVq51SML5Gla7jmILU1k0DB4cDmKbwLVOxI57osIEWu0LVNULk7k78aJnNi%2BEkOb%2Bw4dsVNUb32GlSs3F1f22z2%2B3w04b%2BhFNJKpWxGas2dKM39Ww5fyKMtR65P20xTiK8po6J&X-Amz-Signature=ff146bcc438183f81bdb079099b78cf7db21860d1ff439dae6255846881cbfcd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

