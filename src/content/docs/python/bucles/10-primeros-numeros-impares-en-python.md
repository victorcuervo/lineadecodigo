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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AWNCMIX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T005148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDyGnIFw%2F8JcwZonQMoE%2F4vup6hku6NdJYHERLqHHw%2BCQIgdfw5YQXS23dIyvpjiKCOrZhwhEKYEd8m4WT%2Bp5C36W4q%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDOVAtzdRBSNI32fhwSrcA8U3s8Cu1ngwbvj5%2B5%2Fy0O%2BheTr7%2BcoQMwNm%2Fpktj7scptm%2BN0cS1%2Fh6l5QsigMTi2fYdnfdfZQF2RyZLgduo2QbXLWK8NrRa350BG%2FUjyTuSi1Jv1tUv9ExffV9PKB3wSN%2F15DE9uO4dBgLivVbm0cP4LEOzaOAavYuwDnn9DiGNOTFt%2FFfE5yKDTa6RxS4NVC35hIO9TbGSl18VRjE71lWAMixAxg4EtGlmxxcGVq1JowqB%2BjG5b0VlJBBXpEqdjKVQaZjJX4ydBojUNA%2FZQKf%2FloaK1zsHO7tWF1FS74yKyOUcg2RiPn48DcQwZ%2FSooejQKdtzIu5xlGFi0YZh2owNg9gCsymOpoB4zAJH%2FI%2F4B8nkLmdAcEtjpKJGvZriDjiXYWji09kAky30DHHLzL6zU0C%2FVY0Bq894GsNqiNiScGFY20Vb3LZkHG8RDzhQSotdDbckc2apwm3nTT%2Fc5yuj0QjPG9yQMRG%2FKMlAtj%2BrMunqv2WSSmfNjILBEPkm6QbzccZLwF8MU7cxY7RChVYlnFmhBzM%2FREjRMzfEBwYvZS%2Fw2Vn4n8jkL6XpH57D5BXDMkia24JIBj1YzEsOQeXuPTaDQYDpTlsql7%2BTWG0TGGdUDtPlEvhiADbMPuzw8kGOqUB5%2FubsagqVbS7Vd5yaV9etYCff%2BgXoCsI0bdJSzWKc%2BWsxnUjL8tRIULAU4jp0NhJpKd1DGsRJlMNay0yKucKEF7YEA6FcfOTqc%2FdTc18u3na5zPN69H7WMi3pMlgM5ZVmtJ6Buo%2FbYNIvG6eppEh4AiDrg14%2Bh1gQkeqLWyjSQdvD6cFxZ9M6z3nvqqVZuc6Uc962lj0MKHUzFQFgcxnMbLQFznf&X-Amz-Signature=0e19201e8248c431da04c24680cac0c0e3d68b430a1a4816ae91dc4f5779a42d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

