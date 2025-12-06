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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3BHVMPT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T133049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEIlrkCUoCrn3t4%2BH%2B0s1NQwxcAnENEkgRXaTdARzV%2B7AiAr7JPpNCJrP0gYpUlnte%2BK6sd4m7RuKRpjeMrRo%2FqwZSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMjiQ4QImr2hlHwfO6KtwDEFEFg2uTzJdIx%2BdIFx7pDkwymYgcHmbKaAFBJdVq4neb8%2BXsv6qsS61j1%2BxeVEgx%2BGuRdJJ8zqJLefggTwReC8jIqSBjjiU0PS7eEpY7wJI8jPuo2nD19T8i7inq8AEIUA0e3jJMmAOKC09gig9lOXAjZQ4V9QD3Lrno2hS8C%2BPAt03yWpHYIsmHuzkIocIKyCjJbiC10YLvogfgMBViWRhCt3Wr0E9gfyhLh8XJo7hnAxg%2FCf6J2YdewI5N7f7ycgfx9Ch12tX%2FomRr9zlmGgbV1V4Txkr25Bg8hE7%2BGcHpdbmDQZmJWGHvY0HbIsVn6FS0HJhiDhXHUZrieErVl%2FlotAcWuxzPsEK918CUWttBplMxWWiiXWPOrCeR%2BkyoX1%2FBw6Gelh%2BIHsevxfT%2FYOV%2BKTOXGMql3BOvd3vpNHwhyxVvAmIiZw5x3%2BwxJsg9ZQak2qR7i46UHhHq%2FHap0Tc8CsYH2ozqf6LMhRYrXeIY8qOfP705CyhER1z21UXvMhT4ixEiYqAinROUt6YrvwbAVpgpH6iaPqX3NAhfg%2BFiH5tbJDH%2FoMVCIS%2BfBUthFcYd1lbE9uN%2BOWQM0qV69eLt8WZP5mR5NODEbcPrNMG2EaxJnkXBV%2FseKD8w7qbQyQY6pgE%2BH8XfmP1fFTubJoKykI%2B7tL3MlAYfk%2Bm8uO3JLEz6Q%2Fjw%2Bi8NiM80TWi9gS8T32NuIcmVk%2BGyyZ%2BIOyFxtjBeXe3Yhr%2BOXq0iOJv1l%2FdVRCIZr1NJwo%2FODXE5Bs5pf7YFf9rHH3%2F2le%2B%2FpxvjUpDb%2F95EeoXYC%2FlUS8gWaxUUMu7OxDQAtX1kec94vJX%2BRsQsuCS12LxxATFJOXFbaJwZE6UF%2FAEm&X-Amz-Signature=f2b4decb446be3007627a82651bdbbf807ba4ca2832130cc947c8c154b7beba9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

