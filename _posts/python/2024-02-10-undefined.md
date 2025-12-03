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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXJN5WAO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T054813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJHMEUCIDiwn0Z8W3K1X5mbOuC44euHH%2FyH3DeNPiL4jRzBZPfRAiEAth8GEg4YikRILU%2BI7Zct%2FGqWolUu4O5PJAFNDsbccjIq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDCv6%2F%2B8iG1lWBz3uayrcA%2F6vyRH6NQDzU741G73r72bdUPo%2BHm%2FzaeB9YQtqZ0iVL%2FnGFQuq%2BJDP4VIAzJ5cSa5yAdLS%2BUfTScuF%2BVR%2BqsWnUrLT4R6gkjM045lJtrdnB2e9NdiFkFt6RKvj0C04biQjTXSu5zoHZIK9dC%2Ft1fdLevtHq5HLT9dZAAe6JAozVWrmA8apZwyqQkBjC6r3cdRST1VasOFip7Mf3P%2F7l0h2cXqpKgKsYply7bJCbJLvQDBmt5CAEa5Oc1%2F9jhdRHY1Q9HL%2FXcYfLVnOwsNHGqR9GAQcTi9P7rPO9LlZMqhJwPzfnXVwLzRw11L0yWBLXR9HTGGwQUSsBia39JFFTlyYDP9iMsQsuG8p237o0RcfJNh%2BFc82w7OTETbo%2BkWAVW9Xpv82y6SrQVGc7zNWuTP78ZeNB61GPxCxafqFnSv6yWC9o4oTjMy%2FSzAsHBgc1SS0SZaOVn7DrzsIUlA7%2FY4qc6q5gXQ0puUrLUdTew0ad4dh4giy%2FN66Sp%2FB9aEzetdoL73L7%2F3p8y6n9p7l5fi8PSm%2BFPcYHgrfV3v%2BBdJ2W%2B2mtKERP04LRaRufhql9Y%2BdjFps9tJkDQwi10QIhDLc8XrH9IttFjkdL0W64NKJCko4mm3%2FAguI4g9tMM6av8kGOqUBxZry%2Bne%2BQFGgr2r96t9IVIkgUqIzRZ5sbMqdMm8T1oIBM2NapmM2cq1q4b5Y9KEEyyUO2VAkpz%2F%2FjZgtNH%2FomaIMpyc%2B0JQmylkGow3SOJZaImyB4KN5co1K1nozTOP0D3NEO%2BMLIOo4A%2B5U1VIS%2BWLvUvmTztKB5kwaDQg6Zp6w5wdI6rnVFPtMRzZ80ArC9yBhUONVnv7HYjEGj4r9C1FOQml7&X-Amz-Signature=b0c578d21675ec0418e1caf5924c2307c559d3ba7426c2185cecd8be72d70c60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

