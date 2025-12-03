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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFUN5NZJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T112916Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDqvjWasa%2FM81HnII8FZHgfXILw8tNB5zTfV5IdlBHnvwIgMkok3%2Fz%2B0HNl%2FRjY2HzzmCqqgUhoeC7hqHfsu9%2B8Vksq%2FwMILBAAGgw2Mzc0MjMxODM4MDUiDKalQ1jarOJ39gI8VSrcA12%2BHWidxTcu9tEC%2FPHLwrVmNvCDoLFMlvE2V4aPdX%2FnbmN%2BY9Vet88RTPd4OBnr03q%2FYLwu1ukWu6VEXB%2F%2BHlSgkd%2FowhxOyCXo0HLWyc8Fki61TQlq%2BhivgvTa%2BSUbANbRfQ6q7Zs%2FroEAmQuqhh%2BDmFmtJzppuTZG6IKKU7pJ%2FAVm3WMWR5YN62UlxsMyv4tTnMS0iJZgYGBmblt9FcRelDZdMb8%2FTEr5qenpTOBsxlxlwaAyf2fxlwFDnAi53znwbcpwQvq2niFHPOIoFzg2GCTVI0Q54FP4YDdtVp4GeZYzZQkEEriWMVkyq2Ba0Y9SfRKtQ8mFrq7YbGLfKEUXG6he7PTXBGvLMKhyvSUnxHEbGe3l7apg3hFwRR2wztcl%2FekE5ilynwV8T1G4sGRX589lOOJsibyyzBljfgAkbZS9Ve%2FNNaw7paKiOXKX7iUHH4mjNY0jSKUWlJoUg7XJPvA9%2B2W0sCu9nlTmGL6I2E0DsSaNRoAAJdoAJcVVXNguVSmZ9hZ8pAkb%2B2%2FDaiU4c5bkc9KJZLZkaTIb0H6CgbJB%2FxoIouGRBI0O3cbqZMUA4eS1J0vWhKF%2FN%2F6JQ1Pa58yQlJVKTq%2B4Zs87NNGrCKD4DhnN771b7ktRMNauwMkGOqUB1H0nneSD%2Fu7sNa%2BkinO3Zmp8hLsa76AKWVkxCk%2BrGhcir%2BC6Pr11Baf6%2BCjdEBKYNK9YX2fgd00nKVmHaPdjE8%2FvWIvKxnHr6DrIQIOYQTv1QTwoX9fwoXWgZ7hmuJh8LLwKTUpBC%2FdDXUDoOIs7zfQBJQTGh1PaIGrF4penx7ysu4TYxWVkLJVOo%2BRyI%2BzbdYPzHTA9v6hVaM2oTnJtgGnQMEfp&X-Amz-Signature=ebe45fcb3698b5bf224e77c3f9c209ac23cb27b09022aea32904351629a4697d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

