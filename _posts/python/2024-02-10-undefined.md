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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPLFMZJM%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T030207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQC1Zq3DmXF2YQ%2B5JPCVm1%2Fxq7HfG1mdYQ3ErMZ0lqck6gIgRucoRLPh6lW4yqw%2BBVKd3HhYU2K%2B19aPhEtTcGfLonkq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDMjciGHy1z5eHOmJFSrcA%2B%2F1RaHSWcSBiF%2FDNkkZBhrEG7y8Uf4pfzSlQ%2Bo4xStW4Iib00OSREbaEfTknWU9utloD6OyzgEMz22MOwQk7JoxWK%2Fvxa4xKMTa8DTRU4lNpyzv6eqbZdWXngakATV8bCCHRBjSm7JJF9j59KwghgK%2F8e4ghCgcE91UXu1nLK%2BMqYs0iRs%2B9oTG3ilhCYay9hzxalxm4kzcLdbHbNzddM%2BHgGLYwVMEMeeYazayWHC%2FXkelFwHASKs%2BaO9V59esZi3sDNuSbiG6kfwziT%2BXiC0ch09FdxBXfjfAKHCEd2Vigt2sd4N%2FF%2BjWiHOW5vBY%2FMuEN28pMJzHtB%2FhUMCZWBLqRpUrLHh3xMR0dOUIuoieeU3Yt9lfImj49bxYSs3bWQqQEEmQCfh40V48mDyN9u%2BkwRF3tsMEQubg6f9JUPMcy1rHHqPJ%2BWVFV7zfmgyoG1CrMh0GD1Eqh45ROOVP89%2FO44EBzJ1iSnm8Q1Hk8tr5ZUXl%2FUsXQXFM4yA8KNGvvspMa6X%2BdPHEZlkn5YFvKPZpqlB9Z%2Btym4MH6E%2BD7JpACpzMhVOMOxY3z5%2BTXVnb7l3xqw5fZYpFviQ0A7qzagIKInkObztl15icRNnbWLDpILWZstxVFGNd3I2IMOSVvskGOqUBJ%2Fwd7zY46b%2FbGZd4fJhujkb%2FVrDJcvjFWn7EWjGhpaig7bJwt0BCvX%2FsoIsz1CTBYGcjrC4sOEsI%2BbfbCN%2Fy82NTwBE4rpQLpCbj4a50JdJ%2B1s%2BPuo8La%2BbA52vDsCqaZNKHG6Sehalo3iIVFyVW9mktyPgYRKsJBCQsP8Wx1M%2FrF7JB1lVki%2FaAU9DJ5%2F%2BQI28TSX%2BgvjEsVXhcmG4EuPXwCTT6&X-Amz-Signature=d9ad083ad7308a6717ebe9f66e168ec31a88e4b486ae4373d9dc27474b26d2cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

