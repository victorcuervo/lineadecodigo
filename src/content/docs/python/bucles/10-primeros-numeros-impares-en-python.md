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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XRANA5Y%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T075318Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDiq5d3R4APdKJBIYXQZcP1ygJp7ph2ZT%2FGho7RaJcPTAiEA0RonFldyug4fqOlvi6AcvckR2DHW33PzOreJD8lwIn0qiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNVbkAD6ZaTuo1HXHCrcA9wBnZnQgRDJjJKvMB%2BSFsGGFM%2BjM7DdjV9MX4SjMw5M4tExDbHY50hlqy5tc1eIaZNoXArXYglRH5%2FHZvQLDMwr3%2FazfzabJ%2BfguqtQcq%2FTVsw9WusJBXSvOrIIG8XOYgDGFbmKyAHsRzDdZ3lwiCPVK4vEbUu8VPysvaFjAr%2BqGMLrh2357PmErVU8TU30HLyVI3AUv%2Bys%2FYOvoEWFRWLO6TZxC8UEqBUjWIsFQAczCjp8v07q%2B4F%2BtuZtoGYz%2FmfGbyFrS4wz%2B0nAl0h%2FrqhMtxNuD%2FgAb2SKj4HyI33YyMNxQq3gSqAY3fCKFT1swAN9J45PUcthJPztwn80f2E9rdjTc8tK1gnPzFH8aWHtP%2BP%2FkCwekqZG0q%2BJHYBd7SYIwOjCF5yzsA41hT4tVRQAIv8JqJPYRR8pqvxuyVfmpyKrRIlwNd5X6MrPxQbxNVxfjPYw5Ra9WN3DaYTJz%2BAOnHHvCJlKujKrdrmlC0JJdORLm0lNhoRclygKQaQRtQ78tvKKkmdIfR4L03j8lngLfFbGJAAROh63Ob2KsyxFwau%2BiL7wuujSX2m64Sh18cL%2BpHyyuv0kl07afTMaNw%2Bm9lCSchwg02DMcPwEPQHaXai0wb2mp5a45YQlMMWk38kGOqUBahE64%2FkOcSKht2Mu0e9z7Ya8BhHIUq73KN4BOM8ww02EFcU9xKXHUp6e%2Bx8vMJ3mvRnfePsfNSY7SSxb05GN35ySPXBiRY3D40wEiKmuZJsS8qHz9X3kfsQ2qlZGdOnuqQQ5iBlcKIl7jrCDIwV2yUDuYsUCQG1i8LfIkF9XZUqCtZ1eOl1coVV9UIkOzkxA5mVSj%2F0yOgX2lFSW5EbRta%2FVf8dF&X-Amz-Signature=111e4f277457370def67488252a40b3e6b350384ac895c3b2165b7667f0332fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

