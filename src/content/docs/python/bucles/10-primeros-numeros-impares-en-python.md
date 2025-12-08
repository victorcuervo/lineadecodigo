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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FM6WQZ3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T113004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXjlI3gHJJHlwT3QWJvDMCdDOcWlagndytXnpadK%2BxeAiAyOGwKOYOX1fHMnAaK3RcDQh2nz40JV4UyH0wTlodFEiqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxd3VtJ%2FsRYl%2FlYu9KtwD4GGzqX9J7nLADRQqbaBhCdB2Xxfu%2FM55D5RjPoUnBsE9fAJaCxAdICPWxPOdbyUxgiFbYkQcSkm3HD2PdhUDvyrG54joNSAEfsdubiKh0eB8wYqqzAZYNAeZlclLKDgvGMOcJsxHUq2z9hmKg9rRP7A2MtWdRbzTN5v3kPVozdG9BKnnw2F9jDPfK%2BwM1ETolznjdDq0z7xvWNElDPEiccE%2F%2BWSsquQQj1P9DL2VXWATIOC4oGChXAzigoyvCkZ%2FxvH5wHna3y%2FkmN1N30gaAIeehpqgwluhrA1%2FmHwm%2BwUuywFOY7l5RnMzef%2FsXCUj4fELP0pFbbVtY%2BNl6P54Sx%2FD%2BLV6u1Hv0imruIPeHJAkWvGrhbH4K0YtfcwxHuFDi7fC5F2IsrhgAgHXP9zBKlvSmdWRo25SSRnnIPijKhlPyqeN5O94bMttWQh0esWg7qxeQhqEOaEw0UZFNRl%2FxDvOlMp64sle8dnDFIhcATtbIyXMlPuBv7ehc8%2FamGrmHIpPEc%2Bf%2BWFUems8K%2BBXXmoO57JWpEskMZZp99bBEyb6vzXwZvXvsIEbdfo3baY9W0p3MMHXFgIeMFWiUuo104%2FUuUV0JU8DAkPoPtpQWz%2BCPr%2BvRa9X6LDvW4Yw9e3ZyQY6pgFfwTrF1sQc%2F7ShMGyJohyQyaYxj3z1bqhN1Jx%2B4OF04iRIm6Nz39hj30wDo6fZQSa3bVfrXZnZEwQ9DJwCpARSMj7tk5CTXoo1owTql7QawkxpgzsHqary0Hz1J%2F%2FicVB37aYfQSKyZLGgMkd8z6PIqlvvenj%2BuL8Bx3DCe8H2gwe6eW7q7I7yRqFX2kNwFAqcxp1mPjGwRv9sOmLKrpWv2nIPSH6r&X-Amz-Signature=83ab82f575dfaa6d7a1c3caa79c248cb453ef9a32070b67e2a488ab881c027d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

