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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYF6X4DB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T070656Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAQvKs%2FdjMewjpu1ksVhEyiAsXZZcWJQvOAeNwKBJiRXAiB0vmep8PGi5EQcmt0cFHjiWxKP8UM1I0WMRc3x3M05kir%2FAwhwEAAaDDYzNzQyMzE4MzgwNSIMHSyZHYT%2F28KLM8GPKtwD1IbCoRFiQqVu4lbh9oys3qx6NfRVkaMbKkpIRofLWpxIS2Ij5HfGFMg8Bq0pSbm7BZEAIy6x7ZXFSJigq2ZeP7LEbZXMbA%2BG4YxSw3UIw5kpDt4IZKEauwkq6w1kG8FgpyIhPb%2BqiZBeJZBosxc%2B7NgeeLNvoLlY8k%2FOSAV1mSx%2FIEt4svuzxsYhSoIVPdYeuzw1NA%2F2A34FrVSngjVASLEFRMN%2FsxT%2B7YIcYm7WhFAaygwWYMS95GHhyewLVeC5E6WxNS3kNLGwkRQmUnIDNhSngZKfY9pTjCVBQiNMGzR1FFl1rLlPJ4zbgqHP%2BH%2BZ%2F%2BpF%2BTK4hirY%2FrfSiNDDpZ8kt5ldAxJO1W4DteMx3%2FR0M9gauYfFMMJCpsCil5gJzbTbwcgut%2FGtsq8%2FlQlyxIn3J2hyffuFm19UsHqLp7LrvUTb%2BvBXIkk1QdzfmdetAcLMMYY%2Fwj2xmeDM0W%2FLJEnMKmIU1w031Otkl0FINA9xtbiwEcWpCo2s%2BDkABvj%2FNKhz4vMzd47DwnKG%2FJ%2B5yx2zqtUejwwhpv%2BLmrekmpHt9NCgFwYX8Gdo%2BWBeMjcZXd60%2F90%2BzSmuDnAksHQsV0yhMek6kbp89UYotbO%2F%2F8XA96gkJZE1UFswcUMwjJ7PyQY6pgHMeHcvzN%2FOY1ohcR0fk3o3sF0cB9EfZcUw4ARN3E0B5QRyYVGLCQOqe3Zb7ldU9vlRznMIhGFlBAZuey4WF1eY5xbhYHKJGN1auAaFL6bOYuCZz4lnzHuHmHp1GY%2Fk0U3r9w32pnJEV%2Fm7pwMt7WvJ1YdZciAC9yp0ZO6bjlmVfqnYSv4xnxNIPeXHHSdJJOCpVMeisYwQ6US6pZtn6yDOYqqpZgFw&X-Amz-Signature=69e63832cb4e5ac735ed52aef8584506c0610ec04b2c078e7f3a617617dc9668&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

