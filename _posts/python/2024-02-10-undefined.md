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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEWXSOEN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T022751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIBol8M%2B2HKXcSXr%2BmUAIZBf7e1uUNIKxvJ0jIaPZyxNBAiA%2FVKWoChpeODrxo6X682Oil6SPrng1JXFMc7NC4CVhFSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMjPdp2SXVqCvzrjQAKtwDNVVtZJb2J5aLqNc%2BZvgB%2FEsYGp8u%2BPVTy2GbI14%2Bsp7uFBQgr3KHZCKauMX8E0w%2BvY6yaSX%2BbAD%2B6Iltfzs%2BequGWhQEZ5ldWIKfuopoC4i%2B2j3sQD04z6Vwjk4TCEvwWSBP7JufgvuChC%2FO57OBE0lKEGdhtd4PwocScEbC2OxQ%2FZc5nwbam9auMC2AeicV%2FPjUGIwcy4x%2FrCWZ9OzFf8kCos3rhTLDAn8eoIdp1euyK5Rs9y3BdmJkGehRavk6iVWrQnzbZ7gmmEDVD3d8Rc%2B0WrmNkkZ5N7ixJao2sx2NDDpC2ctYttpUb6nejbtt30kSg5mKB0ZHhJ7rr%2FzDfysIFkOC4kg7INDH54y0WCf06ZfaAI7%2FepK36Fy2An4bwMks%2BvQ8p5lwB9eQHP2UktJ7nUgUV56JQI2W3gUEJ4ayEH1ncgx35whoOSN5HEdWyddYOJk1ds2fT7qYnRhrht72meZh%2FKegzgKOdX3ozmmM%2FNyqngdZfg76ugCt666UAbcNms5YniqTjlkM90nIaPL9UcD%2B36%2BN7p%2F2zad%2Fz0UUhSB64Vc1c46xT96FcMfyZ1tZNpNJFqehdC0keUsj%2FXWxKLPOeOo830oSXwb9I8rLRZPP4GpfwR35hAow9pa%2ByQY6pgFR4DJ39Nc8rOyevoT9AlSu1fNhHysM08X1dx%2Fm0UHu1xNjAWtJ9C9Q50RydMDKwIx%2Frg%2F6QbRfs5S69eLck%2Bh96SkjhZasnVuJkfjX9U3W%2FtOTLjl24lFnookyQV%2FtTByK%2ByzDuu4yzn0hPnqOHWrSWgb8V10TGhPFBz%2FET6KbRYGAeEniQoYPnRs5xoiM7ErooHVhkfxxQ%2BsZO21fAMoYq6hci5rO&X-Amz-Signature=ae7ce44e137ef060eb867daf9bec8dd095e47ea44f6984c72cedac7b3c20beda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

