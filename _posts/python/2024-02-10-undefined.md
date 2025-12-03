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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6A6SUGX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T154928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQCPzhmEomclwwFZKgWUnytgCT8gxwF3Cjr3LP%2BwG2kveAIhAINdiGNGmimRc259pT7Y1sGnBoCG7jxlxBc9twonUWp4Kv8DCDAQABoMNjM3NDIzMTgzODA1IgwPzL3Dsh0oqbHBrEsq3AOh9fPrir%2FoE1lcW209LDXb6Ij3CzihWgPV4GjBY91C7uBIxQ7X%2FRehda6FfbrxMN07GzzRwjUb3Ny5xO72D9NWLh46ENKPLMH95%2B4lCExxRJqY7k%2FOHgLc4SDUYj1iaV8xEMEgqQ1M54ntPksMNEJWTy7Jgcqfsls7OBmaw%2BPWy3%2BZmcBckdwmCldwQEv1YEvRSw8MtQjfmLBExd6zm7ISDJIeUoJjkMbbCoS21qoxmgQXVEFuHoibxoOAvk55GGxmS2XsvVk9KyOXDweczvqTtiCh9VZTBs1raEphAOz40Lg9pimzDxXuc9AtZ1tyf0M5wi1ALhyToaedhmn3H3PYZ8OuJ4JynId5SlB1lOu6Y%2BrPsdjatC8a2k1bZNwleeJh31WjdL1JgCRaE0ti4BVugdvvAZ4S2swMzDCdoavqm6UZFLois%2FqlYIbojHBtvpjplTvVeEF1KqgMfXAj4yGUSxa1ZfMJOBW5D%2Ba6XNPQnuaV%2FXgrz9EB2jc3R5NtGeUa7BQbawD%2FwsIRqchypWYkuuWdnj9hiZ%2FVcShoxfIQPtgoCGfrJa12z3u1xNVeBJFNL6FpVAvCpD94GxcP%2BhcwejWXvxGqACt3zOSaRjZZRkkt4UamvfVZRtDiLDCipsHJBjqkATal8ZjHynhme84MXfNvTQnexDLPtGnXZQ9Qg6XA88D5BHQIdL4RSL70WXgkDGZzyMmHR1QBgVtrT5N9NlmznWaLpboRa3sa4lAIegT29NgM2iXPCUE0XCJ1TQ9EtF%2BdNX8hzCd9KbaU6D3wyi%2BqmlpSZ%2BGwSfVX8o8bfDpv821PwMSlsm931qAbjTU1nM0qiQnmpdbaBsL1h9lnDzpiHAVEPUit&X-Amz-Signature=9d754ed6b7d7a706ba3bef2156ed89064ccd0cba4f68bf36adbd9af1cdc8b4c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

