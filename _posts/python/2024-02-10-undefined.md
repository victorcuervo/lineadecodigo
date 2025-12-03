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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625Z5S53E%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T152320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJGMEQCIHo%2BKFLm5alpP6Ef07KIx53uwyUb7RCCIj%2Fhs5gIozDcAiAA4OO2o2BTdpyh7Pyq5BZ%2FT4Vf%2BB988vADNjiS%2BACxWCr%2FAwgwEAAaDDYzNzQyMzE4MzgwNSIMk3klg5EPIOAgeTv8KtwDtVK5i0C9c2%2B2Ea5hX46Odt20O3tpuOkkZFdUzNNZUnFSxtjaer%2Fz93fQ%2BTmh1vcLtXdYqZG8q9sZ1NKb0rW7v1tfepiSx1zWoPG%2BGDSxdzojo%2BJ1ayDQ1TXPy4iF5FxdA5MoWaSkPGhugeG1DZEr%2BkmNWyUJxZeGnJ5wgylFUZuPNBAr%2Bvl90i%2F%2BPasl%2BsfMgtb%2FEJTvUuwMaIqcd5Ut%2Ftta1LbAV%2BkuwqY2V%2Fc77EZtmrMFpeh6vVMw%2BcVEp74pnCUZB5ovEbng%2BxQu%2BHhzfxGblQ63wuN5oR4h8WvKvgPBleY4nJB2MX8PYWLwKyzF6zI3WVWKdIDHkCq6NKSJUh%2Bk%2Bm0G6pxVewpm03kvkOPOdcmFYoDh7%2BFsRCLR5Ljfx%2BZcEkMTE7%2FLYfo011%2FQYrYZK6Fa1DFufmRM4BUzVwvFNS0oQhtJ0L44Syq4GQ4MmhUHxoq708x2Ke%2FXujmrP3w%2BeeawoPQImd0HsY%2BqZrT8wcHKb0uXwnWRYhDYxTEjWSjI1QPm4afESB9gpVgOw7Ifl6c%2BsvmTr775sNb1Ajf0dDtpRpx9KwYXwqLlQbYWGXHt7b%2BE1X2jOoce0EEoekZfsO9Cya%2BNaAtJsU5x5c4I85VVegFsGWnpcC4wx6XByQY6pgE8KCpx%2BTVLyh%2Bnhlw7Sr3bDz1TfWJQp9%2BDq4QC4gSdZoOLn820mLN5V1OPG4M3B%2FoXJffJDySLsfQ7yAxNouQsCmXRdkgASE41KBKjRqVpU8XjM8jaPm3HN4s66%2BUxCXxaJgyXSs4NKzJtq2hAkuaz9I1Iobp0925VK3pFLUD9VRfitmrDkTKmf%2ByFEw9YmYNY7JaqQc7vgBFJkZXD888smAd3j5Dc&X-Amz-Signature=156a7b7fadb759b2b076dd143dd4af6c138aa5b3ff3ba736850bb3ad6427324e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

