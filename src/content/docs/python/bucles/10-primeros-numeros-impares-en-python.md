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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SAOQC5PO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T193602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcizDoghhwcoTm50CaNpmDS8GEPRCLvkXX3CIVG92MaAiAFP%2FtXYboEUJb0P9AbOLQ0nK7o3lJ5W6yaT1VvleITFSqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0%2Fb9nZFu9Ftop8D6KtwDMp36Nx7Bp0LxbuxEzqjn%2F9Cvp%2FYgr7UerHs3SMhM2n73LU9SfYtJYIOOLoSa916M%2BIpeSsz6Y4%2Bzjkmwu1G7s1uo7y9NOt78zzO3oIKXJF%2FkXx2mT6gq8N3e9%2FKQu2%2BAWnpddYD2Aw5vJPalgz1uh4pCn0DD3FqPwIdUS3raNWT6IOvqcAX%2F22uEJ81eKh3P7neLO47%2FMJD0KouM64ibR1Ihy7k949bJkJqDtTg9LVafSg52vK4cBTAa3mcld2rceKguIthL3%2Bxqbj2SAZeCIcVReDSD26MxPekKpTQHA8yZ1vLIM1O9ictSev16e%2FsHNaLfTW5UCB8RwU%2By2pi5xGupKwL4wYreA%2Bwnll8%2BLvikvMpl0Q3Z29lMobpwEGEe5kyDys1vP0rDaqR%2BsNiihlBPlUj5tZzXZ14qXdikYtQj9V3Y9FidyerKczgwExB4iUS3FuJy1vJr%2FUzUY%2Bhrm%2FSf04XXDEeelYDizeAtWfEAolcVbdHZqhwX9jkzIabnKsQj8uh45k4YbIS1EhlHJ%2FJlOzTK56pWJVuGUeFm8Xv%2BJSUwCNsAumPVz9UgDhp6BQ77pFirWK7c9kD0yhsTqFTBFHnMolwBRKm61sQqNdaLx92ore6n%2B6b052gwr7TcyQY6pgFTouTE9TJglgcK47kTx7mbp2FcKcm3KuV%2FUG9xLY%2BSyBHNS3aKgzHnOjMI5DyqiPY0hEfOx9vMIaLRqS341yC5%2BMFJR3zjdzCRC5yyLDP7%2Fxt5%2BAdPa6FVodMLL3jONvUdrTbIW8BY4%2Bil6nkfgxbjIV8p3%2B1j7yjedm2WkQJ7Irk4ONKKBi%2BTcUEJ14OIuYzlI8YjrQengDDYU5wd6ZsIAM4ZC74c&X-Amz-Signature=22b8dde201954dc4d3e4796040c5723784e763df395f4abced4fc119dca00539&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

