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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625MMJORQ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T155157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIDMX7nOgBZEgd0YcpqOG1zve1ckB7CEgFJb6Lreqwi3jAiEA6MLMplHdw0FbRS0wyrhuq5EvWSMQKim4qegiBefBaZsq%2FwMIMBAAGgw2Mzc0MjMxODM4MDUiDPUR361qybhfpnqLAyrcA%2FoMhj4oLTBh%2BfJKh3tM3VUjp8ukFb7Bd8irkb280MAcF9WgOxwM1IrGeJz%2BfKpBpZUe%2FidUz1YJh9kBCjmaSY4GV0mAu9E%2B%2FavoAjqi7zJoDwDJm4Rhtj21oGNP0J0GPtJ4JP5oaHSoZOKaqnqLtBcyjdfObaXpf%2BCBVFlTvfmLgiZY41WJX0qWa9HKuvqT2tRpwLYxzM5v9ncuCR7lG7pTMxij4X3WgaIk7lxzRKZ3Rd68XGFGeUDF2X3DHAFOYQpkmupJZLBgHtc%2Bu87SjSGWw8QtPRu8jcXcggBbJlegLYWHYZfF8l1XSzg14Y80prXBVKdIrt6ZvtxsckCOTSgoJuI%2FHBXRQcOpAxKL7G7swBO8Ka4i6B5bDHDg0DTVrfqGhWG6PAiHB49krMC6TIVZ7Ly5HBEaz6cJiD9mxrp3SnlwJIateOWjIybUvCiuSdy%2FoNoV%2FWKSk69plkF9qGNhHXtM66LSou5EJRfWN7zJTz3tzt8%2Fum5H4LYI1fYj3HAL6wTWTsOkOOoFTNP2gjPZN6jsj2W592nzm6%2BEaon8GGngJ%2Fc81VC591uc1laU8s1pt3kb15D0lyM4qtaaTeYTpNrFHJSdRQ9uaQ2%2FgfhEZy2QcQ%2FjKKF9euOBMOGlwckGOqUB1tT%2Bnii4rSTUp6uVkXsZHPOsjtWu9CTMmQlZjnK09xsPPBAEnO7hIj05FxIrF7OAor31UB6KrYDZ7ojG3yg%2Bi87jouEe3%2BamvAKgxWqQ43dFFxIa15K46yIgdwV31dpyw05wjkqzS2BbRSye%2BL%2BeUbEcLZUgpvJc%2BJx97FbLP%2F%2Fek4iGpX8LiPDszHQBwc6yLJxnd3lM%2FBEKdYUOLc0W3C8LV9eX&X-Amz-Signature=4bfda81488ce061c3ae099e66ba1e6d6f558871d4a86c38eac3205cf259e392b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

