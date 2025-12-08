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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ3LNB6Q%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T212917Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID20oujxvrzYGnqFUlp%2Fu589bDaNoKZTTP%2Br9Fb0mdGOAiB%2F2r281JVcdRnBi2Ezz2fPZK9%2FUgSC9Iz%2B9jyKU5VnZiqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCE%2BaN3Z3Pr02pMk8KtwDNa2iGzk2Awf8NUzFfFPLXPT92U%2BvwxAyTIt9bkadgbYrJVaxroToBSknUvHaWH1B47Y46miBF7iBeAM7RBKf2wD25f5jrm2zgBoco8C%2BxVr1xqvSSfXdh6YZZfKobZBo061wR8S75%2Bvof4%2FL%2FHym1YTYvcleUqT5PF60qCOTDu5ZVHyKC7%2BbkSc2TvN%2FoqsaM%2BGVIkT3pu3MKg0eavb7%2FZ8A0muocKy%2Fx4FOuEsG2ri5%2F%2FA8N7n7sKLjnuNRm4Wa%2Bv9Td7EIhkCNATMJ7DYIJWAd0zRFkOfqCFnw63O9qgLs5cMz4lir4KEt3uFcG6%2FCJd9Npbw3cUZT%2FvqOkcDrf09jBYbOJCC0rNCdYWK3IJOYRGYVWrkUIo4d5BN6tZBA%2BOY1N7KgFNidKxOY2k5KNZ2LV%2BgzUOawyLVZCLIJhuPmT16gUz7iNYMPEldSNiw5STt6WeIvs5Df%2F4jdPuYR4D1lfwlw2u3I7h3qd3qw2cI%2FZADt%2Bu1tkLWAtGJrMjUz2B3fv1xoSJq5c5dk8gHFO8aj%2BEejKDPoPIX%2BLkHelRvK%2F%2BsToZPZB8EIKF%2FCEvLxJ4xY7aUDmpqsbeiiHbVLCErHFdNsjn17znWyKq4QK89tdalcC1DryW1KL0owoIDdyQY6pgFlK1dalmaBxTZVxKi9ZzbeetNvcOoqwq0SziWrLm%2BDkK4tOn3agibpvaZWzraWvQMYloyjuPIDlmwq48vRGzbwf9frYKTa03M7V1%2BxWlCKVM9y7Vrc%2BJPZcF3KxisMkZ05U96Pn7%2B8dpZVpY9RGKJOvMf51ztxatbOa00fiXxN2KvR%2BAsxwKJzeRFD1NxSQ62GaRTss%2F195aCUFXwFYHePFGdPt4Sm&X-Amz-Signature=66eb9e57fb2620092014355ef1476b7dfa816ed2a66308cb51713125f67c17c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

