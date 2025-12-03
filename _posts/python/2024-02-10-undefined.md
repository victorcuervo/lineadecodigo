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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642EN5ELT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T113403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIFyEKnhMrKskGeuIah0PCyuci4Xcp%2FXhR6oKm5SQez9wAiBA%2FXEUQAv2pyV2ifhWiz7GbqQe88tddptXrGhJiRJCair%2FAwgsEAAaDDYzNzQyMzE4MzgwNSIMilwnOCLuEwqCb7UNKtwDewHV4KozZoBqy%2FMUGkqq5Zzht7OSGVB2qApu0oM9R2IGC4KwqsjPZ3pqyPEB7Ot5KKNTpwkYW3j3jY73ykkUbXBShMAI8Z5OpIrhKdl13AXFqNdyGFEsFOHkyAXwjOGh3XdetjEEJpY03MxuAwEr5ly2SUy9U38dQkQoqCz99s0FidQGmIO8yXNmJVGR5hGYPIF8lWpMXoeZ0A6cZ9%2Br0Q7e9xvuyUArQejjALlVcA2KrWcrR4gS38hpuEIB%2BLE4QwOnB0UnWxxNSgESyedVjNctikqOfKljeEKC3ku24q6xIKDFIi7bP3phCJXLsJJ%2BydpVFRkXl3DTYa00FWEgJnzJe7A7D018RKA4jt9KugIpUKjEV0BYCIYe1A3KVS6PL5Vtmed6hNEJm5oAfQoULKeSqBqxwD%2FBofJwEe%2B1lLSkX0aWA5kqdV6yoy1HHkZw0sSb7NtAp1pipOyyKGj0UFCRV6xHZeSfv2uB0yxHRjIhaWq5m62vR4QPkA2YJbuyBIqhqXleXpryROSk6Qd5VOnkHig3WUQnVZA3DG9nvf6v3noECIBTzL3romODSOab9yzwzUvKpGi3eb1%2FN9UmfpYN1RWplqpGQzEfGbLtKram4aylFx8FZ0moQJUwoa%2FAyQY6pgEgojZ2THk1LNtQYvYFJfp54IxcKqBRpY7SeDtXcokz4VYhIvQoP%2FkkYVfvr6sXRrkT9hAsWWBSjNQuST%2FCn7z1Dz9UNyNxA9GaCiU407Ga7eiAnFdMcfc8xEoal4pn6djkW7tcaNK%2FazQoGv6HnT%2BgaKyE5SpB%2FlW5OLzPugem4dSf%2BPT5IRsl%2BldSROJd2LFDomKZ0Wu0kaRMExdiRLJcBfyNNVAZ&X-Amz-Signature=ca03718584ccd5a521e3aff0f4a40c1557d80d52c080037d9e5fe71b9685ad05&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

