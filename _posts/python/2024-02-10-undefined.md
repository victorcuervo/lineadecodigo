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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VL466JK%2F20251202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251202T235906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJIMEYCIQDaPh9VfAdm940If0bUkW5N8CyCZVtODrAWAJIywQ5HQgIhAL9XmThU5hHEmqxhDT9SDADYxuwCer6wfPh0pSNlphuSKv8DCCAQABoMNjM3NDIzMTgzODA1Igwa16ym1Zpcb5lGeE0q3APulFBdYrnj%2BYQporcuH0HnNPe9VN2IXOZb91t5DSelURlkWNzfh7REr11imBrqLduEZmY9y9H4PS9O9OzQ7uKI1NRiXRB86FANBBGOMXGw3xgJiQQdjYSSojrdJcyYTruPdlFLqC4re2lZvgJtWE4Qpgvr2BZZXUJfl138mY%2FvM7C1rr3eYM%2F4o35YdNcX7ZPRGKnqyaE20a0ULwFwaXhk7glCdhoSF4YxXu5vVcF9bDwpuU8fpQUxzeOnOJHkETJkL1nVE66vCJmlP2w1VM7aSojNNvXdrOroaiN%2FIARsOXtx9NZfvUtP%2BfuSJd52IRboP1QkmncvC56tAJta67YvXzsSkmCNYAXJvnZ%2BRSbuCe7A0xziz1nNTW7y4zwkIdaqGwTsuXTgCF1IgpELe0UEXiYGj8fxt3%2BWyfuDxDQP3AIYNMfD9mQPVoBnshkcA7H7Jd0D1UsHiG4YYkselh6s3bTRhHbjAY3uDYl4h2seGQFwdjm8ge%2Bt2RwbugE%2FhLwJv7djtuqZWdPhL4fH%2Bq6wggP9jbSRA2LhECHISZBGVx5%2FxkE2OasHflIDnimwFahj%2Fl4yTX4vvR3TJG24lfnzWzIqLD8hLo6hjTjk0BmSHN4GAQUxVO%2FeQO4UHTC%2B5L3JBjqkAaZmXKxEYJWf5GKSPYo0L0Q4CyYm9ziHHST5YAmpi1rolJem8r%2Br6nMQf0cu3Pf7ghjiMBm3afQWMAB1V%2F4Yxk8N5Y3pp8MKyXIV%2FhntxKPHU0g9npri3ZYz6s9bQbW4zB5%2Ft6WW8qCmNhV%2FnqFVe6pInF%2BpUSnkLSVet5NgkTy5YS9bpPgVabURBsJKSHH3nEG%2FLzHhjmGGbSUOmKH6wNDWCBkk&X-Amz-Signature=443fc1e49d91f129da1821f3cf1c8213ca8e89ae7b025b3c7ce9a326929ed065&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

