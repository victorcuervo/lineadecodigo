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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XK6VQ6ZL%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T101213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCqpNzUmBTQEeXO9VFPBv8o16ADvCbYl%2BNfRL%2BrxiK%2F0gIhAN5E568NZyJtXuT%2Ft%2F3eTaMyOI0r9az7UoL%2F5I4%2BunxWKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkOm4wBTe2rZsGV8sq3AN7olcNVrsR%2BwEhtMYR4Jvg%2BvxcBfVbGqCCVTE9S6%2FPxnTKA18iO4wb4woCuTZB3UMZoUmH9FYe%2FwuN%2BJNGnOqAK3af6R31XeDKwzbNyY9K96nW6MsWoK5H%2BQmGup1h3N98FV7vAt%2FkZHiglmEl%2BMXnUIk4Kb%2BM6fIGpYoU6YU1gWsQmkHBKdlvXV3KIoNdzL8DXNn1itOsOrnFYr51fUUed9XsVLI%2F8aT%2FNEyI6XZxs6qBTtHxecMB54GR1MvCOjC1HpWPFGU4cTwiijjtkRLz%2F%2FHD941AVXs5FHfAKgcVlWSZmBw5zjZmhaJSMg%2B8ChD4uzFozoK%2BCiQWV7d%2Bf1nAcDFr1SLoSxqTdRcCmvIkrHf%2FZT5sMk1YAIhkG67Vtx%2BBSIJbaTaR8M%2Btis8ihn7kLNIkz2GfTDJXVVqpi%2FGGwqEY8wvxcSuDicEgovUnnnXpZF5V7iUQ%2FVDSdTB2NHPJLZev%2Br8ADMK8xCzEI9boqv4CjiGPzrxDm4DXS%2Fi9%2BBT67qIKZEceNR%2BfyYKxnd%2FbSRpSTphMV5m96hNPHuiRY%2B00%2FjdibB%2BaZAymoBoTDUwSrg4ySvpRpWu9sXh0Sk%2F1uxz70Gtmhz3zZcgbhlnChW3XCL%2BXl6HpICTVYDDjxN%2FJBjqkAdLbPC2JsOsr%2BkjH03vuPgHO7xEGMnsd6gpHgYYRn1M6gKIiFPb8Je9uH3muPuAQoWb4tZllCDfooSBIwCNjVTRtlpNyV%2FO8CT027%2FYCYCLRvmzbpJidpnoe3nBvch9c670hxbTzeYSnAn4SoSTO%2FidT4CUw0BzuyDFOAU8rMsLEBVevwJPRC4P9sHXr%2BAyvZpAuCp0tm7xD%2FYWTBhkUyDDUhmkR&X-Amz-Signature=3f27d36507c35ec906ec0c9e5c7d2f991bd4029ebaa164db846eb8aa0bfbf830&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

