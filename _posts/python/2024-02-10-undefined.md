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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VPFGXMV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T065013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQDpTLS6K5biWW52XSnjlY6T8EUoh2qDmPk27JPDFss%2FFQIgbznmaznIMkCRZUyMEpl14NZBqSYdS890NUA381LcfhYq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDMgF%2BBHMwmPQNrblFCrcA9lbbAq%2BwCEgQaOTSXup83XEosq1a%2B931N7glTdDdn0QDEmtxL%2F%2F6yxIMdfnolBDvIa36P0WZaPB%2BebG%2FhQWeo8voOfCz0Na6OS3R53LPpO9jRWOCxEwDg7i3PvH54JJoyVYuGXrWs2ORkDKR9X4xci6%2BEHwqmhk8ApomEK5nm%2Bgmtl1pZmYz9iXl2zQopoMfCswkLDGaJRlqKSZ9EKw2hDcBQsfg2BBPK0MP2vj76k%2FbKoxjdoYANYrMhJAydesSpEds2QdgS%2BR1OoOgTPWu6QvpezAPOh%2F%2BGQ5PVqzbcPbrlGqiSn1bRi69rBIumJ1EBxIkq0OoTEGRxXj%2F%2FCr90vvZuV7VtZp5OIzdLI8KHZLUxJdjc30AwJfDrPtpK3%2FXrT%2Bg0sCuaHMTXa15soDs1%2B5dtVTSP6HCaNXa%2FrzYKjjne3aPSywCa038dEwBn%2FZLAQzooKl5Nlk4%2FgGf1oQYtXKGXpPSH9EzwjwwYjdrGGkmCPfpeUlupRTjypZm33HmOWLhGBwz14drMKthQgoyTLgGxqx0FumTYy75OlJu1VIWZ1vReUEqRfZWrzkfl0O5DIQ7EE7X%2FuAUXpc8hdUQTXNYRUZiyqCvu1YmVt3tjMzvaJDVsvOQtJ6uCtlMKS6v8kGOqUBHLHZsLdHOYQ1p8dIwCRqRYeA464jUi%2BPvdeUA%2F%2FEBxWW9maB9zAAxgJj39LwYbDYgOjFQsqugmTmHU62rHiwejNumM4nEacmFQnufPBAJIO%2FjGssgL%2FFom6EDUjoMdf4ukZuxrpxD461r90X8EgQ%2BZXJkuNCuAE62B4rnpHlGDpT8cGSbNxmejbvJFVlDUcQEoia1hK0yGXMVZqqhTbNCMXtylVt&X-Amz-Signature=99e2a65caaefa044f1ffaafcd407cf674aca017de61033a2f6c36b12759f36a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

