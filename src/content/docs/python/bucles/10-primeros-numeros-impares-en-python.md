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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBPOVLL5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T192553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFvWJg%2FLOkvcSmvd%2BaJaALhXvxIzQVrr%2Fa2dy%2BfgcQylAiBdkOgatL7kj6RBV0wfXjF4LBu6LeQhX6qBjhY4Ti63Air%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMyO166%2F4vWFXBgVb9KtwDm3rs4RzQd3CPRUQoNXa2js96ZgXBNSSADjDvIbqh0c3n%2BbvuvZkB31%2BJfVDNZRPPCKK%2Bohz7xREdZGQWGHJL12T55hPkNCEQhopIx4quF7MsbxNg6h%2FM3ndby26wup52mmaqv4kHGl31WKiI8dT89VtKnjtU4fTxDbd%2FQxlf%2FEonZd6TA20cg9ukPaCqi0%2FcqD5ywVjlck9eoGFKWMDd4yyWU5FC8y2mgIxF2SgKzwCnBkkk%2B%2B39YYl4DWpaO1tu5gPXrzSKwCvdfX6we9IPXZi4VJlNw2h4am6dXX%2FOAF%2BreV3%2BGpQZRSt8%2BBY%2FXym1JYhQLlpF5xLO3OGHaIsGU9Nw6Q1GLapwYMa0CgWKFqifCJeevbbDkXRwYF8tfGtGR0soN%2BNcOvOoxzRZuPuH%2FcczNJwDvqIYIGXVZjsOULX77xHiygLK0fUFc87uvDay7WUSiwaNApTm5ZH89CQM6ra0rm2aIjgcMXhKGKR9598maq%2FgQcYIuhjjeZ6scLv9kqix%2FfNYYvlKMbTrI%2FDba9C%2Bphvrq2UHTVkiGqBS%2BDtvAWUqzpdL79uIvznMHdZh1zEDpX0arS7RAgLR9wbArPsGv28KDQIJee9eHVamb%2BKvlBMBVcnbAp67MHcwjsbRyQY6pgE2RVH1IIjRi8oRzKJK57FLaZu%2Fvjr4s6VK73RZinPGnoqNVEKAb1zx0I3BfbRBXvPZVerSCSFkUW9WMInQ2LX51bU%2FwtLbf%2B1Uf%2BiEEuL5xaNm%2BVB6ZTpp92B9jgiC9z%2B304x7%2FqUHue2yWJvcvGVk4%2FSOeeAHiF5Lt8ECdjfS9VdjqNt2%2Filn7Xnm54BHz0PNrhjEyJpqVfee0uRC8VhVRMK126fr&X-Amz-Signature=cd923d39a8ae52619f886253fc27e8418d0e0d594a2f4e2dfe7c447aa7a68e67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

