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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HBHJ2TW%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T051203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrgpvAlid%2FTm1LSH9SbpYCDzSTiaYOgWQL4HINeI8c2wIge6C08z942fuyqWm%2BVYjnG5snbjlJbnm72sP7t2oqSGEqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPViD9g7%2BveWwwkhHSrcA0EwrF8nIJYb3J0hvcGOT0xcTCDeggpDn0CNR0AZvWO5CM4vuGNp%2B7jqC2kZEUDK3mNLOOR2wEv84Bi9XTTQZWWH7CUQeu0uCq1X8DeKyCKld519puGQqmT59Gj5kWY8OJP3N0MZYAseMBjXVK9hvlxfAcf7muKgreBeUXm0tTiDr%2BzoFX0Z9XLHNPD9Mmgwnuc7XQiW0i2dAnn%2BPveEAcx87kn4OeuCZt7gTQB4gA3D9hDuYw36ifxQ%2FkGTBkpulwqcAQQ4Yjor65p8y24DIYt3dKVOe%2B6B54NGdGFCgdYdgvWvd%2Bf1hO2oSHHEvx4yUkn0A%2BzXWk4CxHihBVGjc7QUY6BsqPprgKKnOqSoLLI%2FQSWyb57jCzKKOM0LKW%2Fxrpu0tHcisLqvl2YQNK0M1JRzdbtpLL%2F%2BqjLD1w0CWf%2BDK%2Fl%2F46uPwMEjyUHA9XQsqKHIhhPGWo7BBxdbhxYkemeNjPoSMvPGUozY0TT187udb%2BtLtAUOc8BD3SB1WIws4d9KgtVPH4dQCIhImeRoJ2DijWEmW9BWIqQgR5C6q4dz2cGApKtl0dTXVMX7sWxofEuZ9FejmGFESC8dAnE20f93bveaG%2BWXO%2FtUKOuKnuSvfwCqEYfs5KpeLfXUMPr90skGOqUBTwr3izJFuWZf0b3366s%2BhfUyz%2B9OuD5%2BEB4LNjmy0PF6Zz8jn8tDv4xDN0sJ%2F%2FykuVQ6hlCkihtSUU26Ct5QBEuJ726EvPq%2BArFRsQ1rTeHkDmUdqig00L8PaFCAKwg8vqfg9VboRUrS8vJxPtnAWPll1Grx3tc7DzaYYZc4DUJnCQgMwD0xxyKxLqvb47jGhqiwVoVHAiqVdCEHVBJGqYsDLp7f&X-Amz-Signature=a548f0bc122de3345d75c7990d9e2dd51e351c3659f2b7ebc5825e1974412286&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

