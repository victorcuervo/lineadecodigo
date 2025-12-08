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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRYGQPTU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T044525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICemXIqP6vsxEB%2FjbKf1nVFHJd6gqKU5vgUUlp%2F76F9JAiAFXP5goZsxNiLDBUkqveYJlCwNhEKB4A3KQZDKpIu5OSqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFezorKGlGskdKNeEKtwDOj3RaOzXmiZOjWi8edCicdACSfHjOv83ToRL1qUQrCExzBqcW6%2FT0RKDJjo7VkZtI5Cuew3%2FSEFdYK79cHPzNHHQyqk3dPQPOH5cfA%2FNzXon9tEsB0PML8T3tWB0nMpDxgOnf%2F%2FR6By6pr8hqyW%2BfqGvUOJ6A9lJRtTdTsK0cvqtixzF3nW4iUWRaPW57FaVO2vxvSSGUNTbGzztpu6V57oVlcZRBgxG3nnBo%2FbLXvPaML5q45eAUGFTvzlgY%2BA5SW%2FN4q2A016eTQPUv4bmtLFICRUjHxqrCLA%2BJMoU9dXZt9pFUBdcWpyL4%2F9YM3qMBZ02BeqtgA52CvFVRVS7q2bB1I%2BOzkYppXRH06%2FlZVegCj8E4m3Td%2F4DbkslVsxuaFe7HTHfpU2%2BFnwpzJfhP1hv914efHjBI1SQLyTJjuQCiaHKSyPYMc6q72UwIP%2BMOuZ9ia%2BfxhboSPMKa%2FCRWy%2Bzs7FAapeGBqqiQsY2HJjAEhWeuXEtIh6g7evIB3QRM%2FdY28SZYizsrM5PWG49DMyf3xpffuK685ABydSexPZyVfWI0FqKl2sSEjtI1IdgZ6O8Ys1c8x1%2FozEDqTeZLSQcKS%2Fy1xZy1yilhNlfGlVSQzyykj1s%2Fjk4UuUwlpTZyQY6pgEIbS5d34g%2FRXyPhA%2BrPyu6nfeNd9PyHb8M%2FJCxnuqUJHh8o3ctVCvt2DMFO%2FxQeEQEMzl2fbeU54WG17%2FtBW4HCLF6amhQ5klnbbO4o4grLhhP%2BCXpQjAFA5kTmnQzuwxsxTfRXS4n8lotax1oeCqXmf7mBYWPN3u5BhDga0s7ntLFFpUhmkOlfP113rp%2F8kGEe8vAzc9kIC%2F16unPQ%2FqypFXCQVZp&X-Amz-Signature=804a690e0965e1518644e3b68b980c885dac5237d6f699e0db38d4ee17708208&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

