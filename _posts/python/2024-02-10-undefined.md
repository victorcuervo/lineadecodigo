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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JQ2E6JR%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T072804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQDhDd5YVrIPdZSnWrCVDHqf1xBM412PYjm4sreSiu2DZAIhAIpcz4ObfKiHWHVp9ijE2NjqeEhQ3RmxdLyaxFwmo0xPKv8DCCgQABoMNjM3NDIzMTgzODA1IgxnKMpXPBIE0dkA2hcq3ANQWLrt4SAP4ftezBFcAbWp%2FhHJvPhDEbhWaL0sH%2BOy5Q90BizqfFLsMLZXuqyOl9WoDy1jmuqy%2FbTWzlDFcvixzGBmWte8AGEBZgYyV0T76nxPzyVxCwdI8oUznREpxqbCV%2FDVVes9B8I7XKPhx4Fa%2FsKI6MpnU0c8vTvMgIP6mlB%2FVtBB7L0fYyPQDIxcLaJCgdGc0jaUE6A40Ynwbbc5z2VyJ1TBco1JgQcDDpI3e25QCrI49amtmXiegvTHTderpmZYRqTWITaCgb9suWytIiah936p9IcHZfg%2FcKyxvLbm6tnzZsoyRs%2BIk4GxY%2BvYV5wHb5WtQWJTF68Ea8CZ6xE8uEJQCDpYpzN68wAUX6KfPw2nx0Sg4Upe5khob4IxtA8igs2849%2F0mXbc%2FjlLI%2Fc22%2Btu9NktQFxPTNh%2FeBLctzygf68N8Uv2dmiiWF9ar%2FCOdvWRvR%2Fa3RR0lB7%2FcGw1uIOvflZ%2Fvi6TvjDQREjqGW1ybfvShl4lUSKjoiuSmQGEQUtng8hQF7QI9x37b7zGx59aFHIHcDdBUACw9hPhkdRJxbBtkvx3RbzAdB9Nwha2lzfHugujDiR%2FkFwxpiDXplhaIeTqlNfT7uPjIft2fMY5zBXtVnVpYzCiuL%2FJBjqkAaXIFCENy4XcE18T7Z9nfargAUWt8hLQlmu01cphWGmIWDNK%2BKVNA4NcPtAPUAWVN9iL%2Bxx9UAMYryBn2JoDNdnvYERthSJ%2ByuaiPGY1bnmrxfJr0HeIuEnPH1gasN7YfHMpAuMtZh%2FGfxlss9kOreghF%2Fodu4Wml9sXDQfmfaoGGnbcCHRAfS5A1gmakeGV5i3fO7OJHlyAi10Bi2HshgJdh0TI&X-Amz-Signature=0a9aace4aa1df4b3336b6855071567272c2fafc7b3d8787775c49fc6f42b5db7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

