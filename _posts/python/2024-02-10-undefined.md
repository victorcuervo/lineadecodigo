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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627F4MIJR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T163450Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJHMEUCIHbjn6pUt%2BdZ4IMXSXjNxPNA2hPd2aRg2FYNo2O1NhaRAiEAlG75d%2BDG%2BHDBxe7N%2BXD51FyBzw3ctRytztjgy8iKG1Yq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDD6Mji1mg9dEAue3KircA8xK2s6If6A3KheManILp02h3YbjhfAhvZIf2bZu6espZXJZr6UI17jQDRh%2Fj%2F5bf8x1bKxUBqyRCUHuKK%2B47k9uWxL9dq2XrG6EnXkDrPnxm3%2FWhLbkW3DqXwgNGbg75%2Fjg0I3qQ40Fh9%2BUDvvYFgmZfCDu1W91LCOkK6sf3uvCobcq179%2FLN%2BKnuKuSFsPMmf1fv38vwImQpLFoCs0LH2u49KeZ0XMKjgi4uxcqjm%2F3wkO6tqMELVPsdIl6wONzgd8HTmmfUQD9%2F5eftTvRWBoMc1O6AukDtveMplq2hJTT915LA%2FsOUMDkga4s5YBsEhnnXE5m%2BjiJTIWhFl5gOpfdwzqoc1IL31DgtkCozJ9Bzfr4aI16vlV7a3%2FsIXMxeHRjPRyLvYGz26L2RKJuT%2F0FrqqWK8bwf3G%2FlD9vH1bbQNRvcFmrIdKuaxdo8C6qWh4ffAqy3E7mdy3Te9fdruyaDo%2F9snbz1YZc0zSpQh4D35SBEbVFeJk%2FPNSjRpaJk%2FB2IYcLsztn7T9vRGPrmFL5jLd4bn01L7mxewRwFSreAwYoOF4OwEjU%2BIxETQvhHxu0rAKAllHU1vLMaPgDojzjcrAFFgcb0PEDe6ZaWYxhLz9Klo4q2TigXrXMJDBwckGOqUBjR3iXP8Mp8J8vZDEyIMqNDQcqImj6Oeab%2FhpJN2kT8v8ekA7HGzL7Dvy9xWgLYQ%2BucjxNxS5I8W89d3o2AQKC2lNMXcPcSCAtbLCXXfl9%2Bs1Og1n27sARCmfNUygeQ44p8spwbygdVT9%2BtBzxpUGCheyRyJqhV27JX%2B9vVNPxrhOK%2FxdM0zuyOyez5BF65SEtQ3hHPXU2Er1AAEhH3Nagtlqh91S&X-Amz-Signature=8c780dcefad6d1325891007ad5c13f193faccd50c456e66643cb8a3732107399&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

