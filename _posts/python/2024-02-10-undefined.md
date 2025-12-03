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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WVPPKJ3%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T061750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIC3k92%2F0NVlft2LPus%2FR6HovAHEpjId9ezV9Onp5Pqc9AiAnBOput0ybgN6YZ0%2FuHXnnQFX3pTONfv3Br0WOCXexlCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMyzszfXK4i1BuL9BpKtwDvkOTSFTY5wLkGeXzLUPDfTYvevNQID7aqKx6g%2Fod4gfdGe%2B3zB9cWdRJRGbQjWxjaszkh1PLyuQ16O%2FHxDY%2FppFsFi0CwVeIK5%2BZdM4xLnRqT3VCO9RBDAWiDKkBEfLU2Zk7VHCP4pOJMK0A7sNQTBuuH9vvwdUgfv8kk5s3IqqBjkn7vBUTEvcNdYPShp1byvqVfFL5cSWT9J5N6GCi%2FBJmecgz38qlbHg5xa26YSwKaj4OtXAhtpADkTxD6MhocczZs5TQSnGdUIIufIBiloo21Bf%2Bcym38J9eCuZg%2BsZ0BDZCqxbQyaFwXFTcB4MmsP4vtCjnoUvaHv9L4otmzBsi%2Fz%2B1YwnDY9psyErIcA9nrzwczVKwx8JJZs2XiLYYxO%2FMmaa0xNdahuUMTntQUXRYqZEakk9l9iZOIeKi0W%2BTH1n%2BtSyRPJWNTWK9dbuHZDZoxIh2%2BTLgMQZ3prtX7COxwfu5rNNxDqbHuooCuGcDULwNKTa3wVwlZJBpRjiSGmb41S9jMdSofjNFJ5A4J36CtvHZ8jYdiaF19l48VYwiE%2BF2iQgBD%2F6BuY9U0DmwrN9CZqCRBmZL%2F6pK3QJOKT1JizL2nXfiGiNnbyMsKVhtc3XcspVTtDPrWLQwqZu%2FyQY6pgG8Nqyr%2BHAIl2D9eP%2FA%2FQbR7%2FknlHON3vmFOh746IOjo80SUY54ctvqHHpN59JrMUo0U3IEExrb3SroaoyintK4XtaabL%2BkRu60u%2Bd34CIgg2j4EMg2NmsGDWpxtoHk3Ii13c0DRjCXwAErm5hmJ0%2FWoWxsYmuNgL7wOVm4hhfikMUl0HMy1Am3m6OP%2F%2BLX5B4fgm2oeSjEagPVdtxQW9HoRtW1jX95&X-Amz-Signature=bf88b217ab63e73c7af2eb8854fc98a44fab74bc6eae9e794144573f96866e4a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

