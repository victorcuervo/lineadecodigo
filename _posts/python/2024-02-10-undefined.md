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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664IXDAFLG%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T080950Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIFk2kvuwuY81aMcUHipBVlrc18Dm87Z4H1uj6QEoUcxeAiEAqP88yljE4YJVTia2GdSPCpJAZ%2B5E9wy0U2n0Ck9oeu8q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDH4zGob2zzFY1dspLircA%2Bn90OUIrW%2FxfWVtLhUTgfcQKv2DdUzKYkgS50Bo2%2FxtiuZYwuECBmUl6MezjiJB8brV%2FGKDycmde3h9jQ%2Fijo66xnzC6Vi0PJi4AewqyCP%2Bu7rsnMNPceiDSexelDQEqaGxyh7%2FXz1qcLNO5fSQXm3nKPwLY8xpgsXjXhu4i5rNPFWTPW9ijI%2BX7r4iZA4%2B%2By0yrfBs0q8B9EP%2F487dmDS8ED0sTfmDes6d5e2ZODTS6rd%2BaTqR1%2FV4t%2Fxsces6fSC95wtwdv8k5Qzr89hRySkkZGHrRzkSSevU4QP5Uu%2Fn9KFurx0JE2lVDVkxYKlgID6jhXyZc2gQ10dwnKT18C%2Bf%2BqcclTqdmuWdIVm07iI54rKsjUZ1QzcE7ttvm5EDRyQIzAlDK8dldq9sF6yVcCck8M6KZTjRkWHjSZ1QR2OkIl%2F5SE%2B4DmaMC%2FrPDlynjpvrCycrr5ErNTvPrICA4xkDmhtdjGUDdDWzOkLEwXSd2gqiAbSJmOLDFmtjNNAbaJ8J%2BU3QAwvhOVM4NAWauygLszXh9kUi%2FiBK9bYD6tbGJzVxG8ciIDCaEtKS4P%2BhVqNHwin8sioSvyYM3s%2FdQdaWvWM8CeRwFn4825WHDEZxdnXg7csYFnEYZFTZMNHVv8kGOqUBwZJqcDwWu4snjdWBa%2Fqp7rLxnBCbYA3b15HqipYd3mwfmYjIZ0SJpkZJ2Kq4%2FtpwWnFXrXwfzlYxMZFfigGsZKZptapr7z9PN0PiOwJ0D59QnBehhG1LtB7JbGnkTgg9gRvC5J8O8pLqmTHEnoHsYSFwCUfGk1un2b7jp1UmOgC9y7QNhJyWw6pcy9sIhqkY5xVfSVyGvw1RB%2B9aVSkBlabNSkS3&X-Amz-Signature=bf2e74776b064f4c82cfefd3c4dd157e5d2a80450b52a52e34e0cc63859ede2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

