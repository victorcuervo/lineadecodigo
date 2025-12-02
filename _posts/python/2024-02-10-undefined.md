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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E6IXQKN%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T235619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDxHYRp9kCqV7Y1pn8O77ma6zgJMhDmPc58Ox141BXZngIhAI8LLu63vPjdvWUg%2BfmmojJQrfZSjMANFSMKFpx69ybLKv8DCCAQABoMNjM3NDIzMTgzODA1IgxixSz6ijbWMASA%2Fy4q3ANP5gFlj0NWFEJyXlapuvd9YWtwvzoPL69ixp2Bd03hZ31z635Ec708bFnO1WMIb3%2BLyfFWmnn2UknbAxYVs1yqusyb%2Ba6Pzt%2FGiphMN4DKuhxjDBc5mYw75B3xOCmNwhW3d8%2FGfur%2Bqigl7%2FpHLnscTb9W8vKCuTM5JWKDh%2BNJmbjTsgN10cAwp4Y0HiPmkrnpoqD%2FY2EvuPtDFzOdMRnfelmTqjg5KoVrkvLlbXgnmR7OqndTJRFiYN0im7pul2UfGd%2FppOzJdStY485Ma65Aze4E%2FLfj3NxSN8Rca5xfwh%2FMiiHmnjwaZPw9qb8dW6Y5J6tqd%2Fx0XUhL9IEGUxc5My21%2FWdLuahE%2BT6FvhChhO6%2BaWhEQiVD%2BWwt0uh9i%2FbnTupjrbYBaGxAlU64BuTWbl97oOntVrGQJNZBj%2FVHaSPCQlrv8MVTPvCP%2FcQbHlUJ24aFH3O67p%2FRcHgATpmFVa0KxD9ami8s%2BZWMoOBafmgh1KQ6cRoh%2FUs4KOgeZtpMxfkko20JTBMqu%2FSn3CC9sU2FAkxyckJN3FKoRzVaUfOvaLf%2BRTiL88aAkyo6O%2B408CNYTxTAk2TgpHZUDNnmpD2AFcqimIWXBtjTjIK8vySTr0%2BNV5E2txCifzCG5b3JBjqkAZsXjgF29D%2FWICdfb%2BhOMtjlDaa%2FVhk3P4x50ZN4uw1sc9ualF0DxYLvlH%2BzTf%2BrPBMTwzAOyrkPXGn7Rl8%2FNn%2BF5zSG8ib%2Bkg04AsQu0rd7MRAjlkgUs0G6VsgixKkFksigqqo3FPc9liIh6rOGD62J3CqX6MrZEgAxc%2BK%2FHCVz%2FtYf4NIMsfHOkW3AdSnDIl%2BZ%2Fg%2FT8nlH8DQLgRcBvFu9fHW4&X-Amz-Signature=428a8ba8604b360aebf43344f1777d7550fe03c8b2d6f2870696ce9eb4832baa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

