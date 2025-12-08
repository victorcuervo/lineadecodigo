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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OAMGVA3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T093232Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8Cmjvt2%2F1OotXC6o8NgT%2FYwLgLqKmHRDYBEhAVEMvuQIgAZlvD%2F%2By5Ry7BDampdjarDS%2BKpX3DC2730t3BFieCcEqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6O%2BLVWxcDuPzqq8ircA91fYqmvgpPwidyFWYF%2BotzpGjH7tnnAm5Ma6pQt1d%2F8uDbpXw3XjrUPcRw66t7Ao21Ia98FINTAW%2FeaeOi2NIPFoowTvvNZqUI4CF5veVf7yFDNJBzwYxAdPeK2YnQed8Cn68%2FnWmke88N6VcRs5g9K%2FbAyNBYghgYaOAdZjsOCxLjx6m5fC0dCiBTYwy2OFqFWNJ0jJtK9mbcD78K%2FnnNSF0yJ8C6zvp6Nd39IexXgwZxBaAVySwTn6AXOc8sC%2BpDk5cxOE%2FCqrLuRWfhL0ZAHD5q1neEFFygI7RXE7tLlCZnBV%2BvrzxT5K2wT00kvp%2BEVNaL3x3ppzp1Xn3Iax1%2BVO48yFEkobXJlWt2N9IwldbS4s7GHAuVLr6EKUk%2F3ayVXnVDArMdITIGmY9pWO1fJEPYetKLQfl1Uhz6PEBaOC3%2FuGPClIIjBguT3eYr4QT2s2ja%2FUHBOCGaEsxHMPneBs%2Fxl9M9D3d4yTHd6qDr2RSusEsl%2Fz8%2FUTR6LNf48f303HyJgXnCaRGVHMq%2BMLI3vXiDo0eO9viEFyCev7aTpSoXrKgUgvxDGj49Tp4jUdwMPXLUzG5fV4VHZJUZ4Y%2BkCnuoTLO6R1BHqtTZ6AATsyp9Ff7H2lBlq%2Ft2qMKLt2ckGOqUBubqx1y58MgdmvTsO42fMNZGxD61yuYBD%2FoYJbV84k6qVuiiUgXIvkBJHloaBkg33R7vqixiwMuB6g8eqFNa1tv1ulFqQ4bL7H2%2FqyWjaVL%2BC4HGzekEuANrJE3%2FIDD%2BSpTvEoH1rVMk%2FILLfP%2ByNg0CuH%2FCDtF7zzlNU9IO1PHBGRVL2bM0dCCbYVy4nH9Ppzv6V%2BQs%2BbRkzdwwKsIQOXooUXbDH&X-Amz-Signature=e5ee2b20953ae02a18e8fc763378e2765ba427a13ed1129ca4a02efa4ae5bf60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

