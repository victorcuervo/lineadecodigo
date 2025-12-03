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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VLRTNV2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T114007Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQD%2Ffm7wHCTraINc%2F0dt52uM%2FTWV11ZXeHtzQD9g86HVkAIhAIdNBdkHPZ%2Feph%2BuCfyC5sqz8LTWK48%2FIgkS6zJ7zwiiKv8DCCwQABoMNjM3NDIzMTgzODA1IgzDzumFjNQx7QweN0Mq3AN9U%2FlliGPCoE2TMlMfrX2im7luv%2FfEiOWA6ViTbBMcILLWWbcndMzV62X8QQC4pMfB0E4rfyhPx4cNsEPLUrxUFE5mhaYqbozfGDr9fbRguP5WGtzmGAOZsWSGT07Sv6lDSgx%2FR2p94NK3%2FMsDP1y1ccfhqu4%2F5PbEXo2g%2B1WDIQBWTjcoFhBC3qqb9h8yfHgMvMYUxG7AkKUn%2BwbSq86oQ0B7SK91bcJOtf2NrHDDQju4Zr%2BUWJd3UVmbUBMIaHSv1cXkoToHq0k214gfa05xxagrmajzdowJGl1IrDp1kdj2wjPO1CpNBndhAdQe5Ff2REgkB1L6KdXVvzgEHyTc1Xl8WASiC4VgtDDhcZ7%2FLcxdUx9WeamhHH1lkbUIC5OmiNFxUEmWQh68sEr2cj77F%2BrCLdLrYLn2ard0FoSONqRblZzkdJxkKYUbMfkdyvB8Z7nlz%2B%2FVnIKUcv8e%2FLoT2Y8CEQuxY2KbJb6zKUX86mozSnCbyX84qBEoLPFmkbWtMs3Lng0%2BenDZIP2gjluu7YIQ8fKl8I9Py9BjDqU0%2FCwdvjbAM%2FzmvHQNCMO0T0CHco7C2%2FIMInxhwONviHdCeRX3lhs27GYmlYp7ei61I0XGOdx9oYu7nro3qjCgrsDJBjqkAS8nL45y%2Bt3UU075eZfezuGmZev%2FH8dakbuBvr4FT01Lhj%2FUaY4i3Gz7%2BDsjJbI92NJOX7q%2BKTbw0ScdPaohJGg7UtFS8QB%2BU4IjfaTPSS5X4efzc3AQkrn0gkW4q4FBqX6yzgWVQR%2F8JKXny84GIZ3JHKcHeufk9zERTxOhRev3ol70Lnl4Y5l9L1o5YSVeVMqqqI7oLubdWwK%2BylDqoKlt3xET&X-Amz-Signature=bca71e80b46a7fe369fd898e9840662d3773ed8f814fd0c88f93e6b103c00f9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

