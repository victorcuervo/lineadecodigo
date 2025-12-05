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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662OSZZ6X%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T145929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJTuf10kW5b3PLSzQY6zv9ZOKH0kcGs3gR%2Fg7hrC0hoAiAgGl4ftpVZmFlWj3r8scWYOv%2BdkgKr9erXh1EVoX%2BFMCr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIM38eAbLggDONfF3OKKtwDH1K7rWrZgcfTg75%2BMqwNMj%2BCP1v5YzrChmK3vHDoh3iAnLySWOht%2FfEXNNRIi4BrwrAPAPcK%2B%2BeASo2AQK0LxVNBlxEvVmTKneodStS5d1au86BXmYMYuI5osScuxAvwOvDK78FNTJ0nPndm6OFkTlapbij9uQPPOD1NnOVs%2FqyQdwr9jlXvbiNcGS%2B8efHjpt942f04vf7uUfRWFV3fpZMzXXC0aQyRX8pSHfTgvQAlmR%2FcsF%2BIWfNC7Kh73lmgvjsnICaJKPG%2B%2Bbz1NmwDJh3UdqUUg7Ic0%2BZI7nt7X%2FVPwzez36HtuvcOU1rsrOQqOT%2Fmcvf6V5qDqByM1q6DVCDVFvQOSGtGIma1%2BOMLZsPx4b%2FG0dD%2FTvlu0Ltr5zQycNYLJYtcE8a%2ByxnpwY8NAHGYQx6CjpuAR54boaCnna5nqnFRl9%2BVcP25H9qxUPrIVS3KVQjp%2FC3xbSMAAzlt2Q7TblT96%2B2D2OFDhdJyO9otfN4Kl7R6wLeGdjF%2FxwHczTUWB4n0GKDq3lsT025zhkc%2F2aVK4qauDtMBlkumlyiyHNMjqOh%2BzrtHVDfZwdLLA8VDzhJqRSrZYz4O21tHtj%2Bs3%2BhqT4eV6R8mYlOz6B%2F7HpVDqXHTz7OHj7kwi9TKyQY6pgFpsM3aQw%2Bj3ikjuY6mzfIMsyk56xZbzEzlY1ziW6iODEg%2F1FXd1dgM1tc3Ac63z1ehSoSozLWYno50wDHfcrYnhA%2F9YM3Sp6TR44bKc7%2FSBuo19w0E2DcJ8Vf8loeYbphmxOg6R0T7SMkRRFAEF8o13OYo9w%2FJKrIfNqbjdk4zMoh0A64Q64WH8UcdRjORWjKgs6IDffJzveKUOdD2HVXwMt%2FGFBLU&X-Amz-Signature=3c34277b38171c1c545e3db2bc0b38524f2559992f4e4855eda8dfdd9e49da66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

