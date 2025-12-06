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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCYCFCFH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T001948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGpAMz2Otpkg5wpa39PgzDAtGduwEQFziG3XG%2Fnpkt9HAiEAmP6Ef%2BTXJ4FMb8l2o4RTVuorEQritjTJ%2FCrPHHv8fzUq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDEG8qx4USeoz5U1F4ircAwAdr3Z42Pg%2BMvLS3GlfsY1bkm6hFwh2GtehAbNQXgZ%2B4%2BUPXRZ1p3xF1usu%2BH8PX%2BNCTTNzWmlGkeY6d%2BcEEgB3gAucCKFJNopiudJKNv%2FqeHZUowdBwB4s8yLWC5dAOMaXy302uw1cjAolEIPariC7vWY4Zdw9FHAd%2FXGgtI2y%2BvgHk8hjNiOl6mDCUIPfTp1UijfQiyDEdjByEntzyvBlWaH0lS2FqOQTCMDHAPQriRJfNaLmdToRHvWkojZevu81T%2FHTReOzlmQJZB4rpBsCcXMGum2qQ1l5W8R85Y0UyeQTp7ONQqWWfOx43jxsDZYEFmbCkfjkvww5AWxBMc0XZaB9Css9QZGFoTwe26ePf0EsjfdCXhda9Xlp4szmHFAf4N9Jg5rxu8CE3jz3TByoQ7e3RA84o4TNrRvksYA9YciPo0L2eCY3B8XOo1Bhf9njP%2ByOBC8wX%2FdCi82uxNYJ3RZpe8qvk3%2F0yQfQ2zlpXp2PlSxHxXqSs2L5H%2FtQnlYEwKs2Jigsswbo4UQKOcG0NlifRAeCC7fKDupPZJEn9lpYAf9AcJeLqXt8yEam64NEqO2yUmdXyMCeSrMUqm6C36TO3OFTG0%2F%2BumE6FVdwTXshG80tIEOVacxmMOfozckGOqUBxFYFTNOmibp5br16yKew6Mh7FTLonQ2tZ2cO3m82icbn0B2x4dIpIzaikLRnv%2F%2Fo%2BSrn3XoKVdVKiOCE8idW2WmQXFRvLCQI%2BJ2k8OvnQNPMzczKxJgXQ3G5Toean0cxppXY81rj6JUpmH02nY3Ac3a3xSswX0QGv1prF99%2BB2C0DqstSoLmEVFfiVW5nWT%2Bj0JrrtkObk2J%2B4skxUb4M0jOb7AL&X-Amz-Signature=62727ca4480e8895c6afb8650a2bad94bf52a33a636f5fe9f562620032540c34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

