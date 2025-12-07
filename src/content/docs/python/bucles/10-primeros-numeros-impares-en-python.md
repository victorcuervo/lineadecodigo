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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665I3WGN2J%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T183514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFMqvGfJW5bRoydQvV1uEl2Q2CzvUz3JbTnyHTVGeSCCAiAtwvhRNbPKbnoiODn1Ppsy%2BB%2FiRDRKz%2FCVXK%2Fchk7StSqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxlZg7xBppkEalBXhKtwDhoVP2wP4Oe5StjFyIZEq95Ipszi10lPoRwf9BM9gOpUkRdppOvEjqrioSnbxHe%2B3zIiTwXA5SLp2Q8kBsdirLUfgiGGHdGRimDPC6ZEuF%2BBPh9VcR6DjhSbIGkb%2FJ2heEbk8R9EwqOp0xY%2F2h0xeCMmfHCotJTiy6jzZgG%2BCdJVE7h3DLI1py94UB7AcHZzRsUA7j3xXYRKWLWoO7knaDpjnNOaov4sWPXYp0v1l1ZzuOmSvPceiKEUmVcqYf%2FZ1rthFql1ZwkTfxPEMp6yAuBNg0yLnD4D4LNme9Y54vu8UBF%2BtaUN0R7zZeFVianCuHzZFwR5lX194cDgUZ%2BlubO2ni%2FigN0C%2FBg09Z2fUfAGG48Cqmz1b4g12f%2FB62Fi1e7h910a5%2BdeSUQAYn%2FNJO%2BEB%2F2%2B9dKkVZ%2FEQq9VfpVTRc7X%2Bv3i0BqPQtM5O7YNN5cK5RlbXctzL9f4GgiSJK8wg3n5SUn%2F%2F8J9A6WODGgGVlao0hKvXFnpdFHMTtICN5mxvfoWRQ5JoDdSXx%2BZZWF6%2FxGyuktblG7xRJuHbW%2B5Kph%2BKBjdXnk%2B7%2B0hNeNywsHDhQG5oijFXacSy%2B0kRVH%2Fe8X%2FyLW%2Fn6rdMMRWtZ%2FI3Jy3drw8DrNSapZUw%2Fb%2FWyQY6pgEPdt5aPTShfxYR5IXkPLUOWjDIUCt77gfomFQ1jxYPQBet1MsQ50YbFLA%2Ffja6tzkDkBxQz%2FqJrpG47bUrosZ8tcb77IFUVcU6bXslT2tmu1r8RjCCAAMqdxVjKU2qlEE5grTommXsBkXolY%2FnFMcfpBe8rd35h7uFXrU2cS8wE%2BePQX7HicJgCdTW5CXyFYC9haju2aWe4y6%2B79FOcGs6TitMRt7b&X-Amz-Signature=fc4b5850f125792f469ba4c74fcb9ff1a41cbc847a3f4fb05024f354f2897a3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

