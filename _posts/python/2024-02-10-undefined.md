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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOIU2VOJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T135441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIDpp2Ifa6tAUB7TL4%2FlIPM3VeFpG%2FS9ZLin%2FleeA3O7MAiBM3cD0vRu1CjvzBv0TZEOldan5xhweaXf8o0Yke7bInyr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMT5JF64GMnCAFpx1FKtwD36nOp3rsIaxRlEHkVbaxtoRRF9JTW8q%2B%2FPpSkSIWhbo%2BXOdSBbOJpK1gH50HsQKfqTo3ozwZWRgGGuRV6ROwq%2B6fC4169ZfmJSRVcg%2BE%2Bi7K2z%2Fj0nF5YN1%2FBUSxibm%2BLvkGybe0IvW5KmkmlgfKUjS310nau4ycCfixOB1fDtyDHfkqZMuoAY1RdFl1f%2FSxrNwD1yNN2MIRf7vsvtTSEShF%2BYhrWSlkhO4tWC1YuWekCWLuSUAMZ%2FIQUgov%2BEUrkC%2B62UVACoRh5bHz52WnJsfj%2B6O5Y4clS1kQM9%2BYwSh7QYIr4LJwtmphc7B%2Fpme5EQEWdE6y5vpmyCERrGhAnfPtRpsFBMTWOAXyw1gsuGHTIkchjy0wjfj%2BQsfE2xXxxWBfm46XfF6SlzKbI5oZ3I2L1aqdESF8VOASt4gbOS0vm2MFdcF9CfA66fZkaUG0%2FJ8mnjfLs6nNPN5fjL7WS4yZQnq%2BM%2Fsr70etm04FjDs2Zruh0z9229E3fJ0%2F7yleAMKDR4WQln5kpEi1ri%2BfGRmsAPMIDw195RP0FVygebSsO1gDNY1wrJW20BM1Gp%2FgRcnO%2Bp9Tc384Yh537oHms0N%2B7EfHXsEqyZDzjZ6UeuVFfgwEr8LuH7jLxKAwtOnAyQY6pgH4dYWzTUQPesAti6y2jmyTV6s5fkwPQLytou%2FHHIxtJa1ok69ZeLr3VwA0N0MwSetWD9oFuJIyJms18CLzeWz5%2Fwgp9cRtl2fDKf0%2FoFn7exxJC%2FRUZ91yrfstUDNqZr1e53qiJn63biXGdb3kXObhdtb%2B4bESC6h135RKyZ76yn4PLiE9GGQrF0bNWZWJWyunnsYQXws1QNcBQ%2FodsHqVa9NhYmrU&X-Amz-Signature=5233edf70fb9784c0ab5298df916d7731a6d6858a90f8298ab5384208ded9335&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

