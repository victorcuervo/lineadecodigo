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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ZKOZ4SV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T105129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKIoQZ7OpZ4GN7J2LRC3WSNEr58nZUV0b%2Bhqorzds8%2BgIgSe2%2FOZmZ5zdiyZqsG6jGk6siNFScrmdE3yrIOhAt2xkqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPxf73gS3vc19sD4rCrcAxjj4XBYnzqV0sb6BOYlXjcSF0BpnkNMmpuYo%2FclsRGuNZeru5vZNV01D8CSnV1SBrlSsqOvYeryPT1jRQfVyJ%2F38RG%2F3qMsIV7atFmPtuA1%2FtOlCIEYf9VoCOmwOsYz9F%2F0s2zETQ215X6ebaJ9SNtl2ed6TTny2kO9udF59c%2BeqJ%2BLmysJAv0TSw5rWhVsTeNzzU2ngWwIAoQTYcgWjaI2PQjhEK4bxxnlKI2DkPeT5emkTAFgEsjrXj79a4HogwT28%2BxnhqnFa9G2gPvTHCmzz6mj1C4umOqPagfltUyUjoL20sVHIKER6A8Wq6NxxcbSDfFKwUFFBhQGpnJWxqENwV15mAGezmGPbBsGVWJurfkN6GrM0O3ZYspeKtyH6R3C2k2kaIJwEGi8I82Bw2wqWVWkB3lg%2BuZwU%2BhXFm1q%2FvopHwVa9RaGrvJgIdWM7fx0HUyPpbedy6nas1nj%2FR4maQoNqAB4hBzvVbrbRzUbdEPaDtvoClYdWCdv86OTMXigqDrAqwwuSa9F%2FospVipy38pwfEKXxoSVJF3jWnSZ%2FlrF3iGCE5C4NpZACBF%2FS2ojGM7SNVnEmEbsi8Iqfz9T3JDHu4t1w4X4XSkXJ48Dww9RwR7tCA10WRiBMMua1ckGOqUBFtOk2rDoUJ79HF0ANESgp6X4Rzd9Ajmgw1dB7TpxsxCr1W1K4djQ9lXEdhoUXnwyrjfrBOvexAidGeJRDWJDzhMg7n67QThuInMXKT5tfzXx9S9Jf0vThADoE20UjERFX2W7ycLZy5bahPvZk%2BR%2Flm4vW2oZs%2BQp6o%2BbPl%2FAPndy243zvlZz9%2FRvrAcsbIFdvFt1OKFlBKxVlOCBYAA4RuDIhFOB&X-Amz-Signature=695ee80744d89bd0a708a1c8b29f97c66acbcd0932ce73e44fbfb756b11712ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

