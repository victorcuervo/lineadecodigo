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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SISZ3WA7%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T072611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHajoTHo3yNBkYcnbFuL6jKX6T4%2FOKQ5JZ4HQ%2Bcp8B2YAiEAgW8moVRkb2S8wSG1Hf6QFQNjEwJ6GMDWQ4psb9QNMKoqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBQ5eM4mTL0K9B2aiyrcA2xGPgprVotj5N6%2FQrrBrUrN2iP%2BZtaVhHzDgLeRlvYUNTfRKFbmczK6esZ3LIZ%2FBGwPpwcPFhlXJIUVj3%2BEyha4Yg3kRh93jzi0sN0hR0UhtVxqp0PMYcVxF4gKD3L2jZUn5lwrSGGCA6saX9prEbvQs%2BxNGwJRgD023pYVOF1mk1t6sgWmkvVoLFzV2AifShr3z3boj8Lo091SM%2BTvhuXkm0Odcr7Ee%2F8Yyer0P9Sq%2FbVKu3C21uPUDCVWd2e0LPEYYKcVeQ%2F%2BfdWkf%2F1pTjzCLQ76CFqbAdLcFe0QhD34f2WR2uy7St%2F3u1QNV3sZFygnNBigoXzHxfAftNhzBOaxd2xv0eKQYK3Le%2F7FzPdKABEazUdi6JziIGC74KEqu1G1WCMp6GBMc%2BmKMG%2FnY7GN%2BskNi8qNOq%2F9CnYKoOGeKa0sGwWVT%2FdvNrxSpKM40oIlB5hBRagz35QpCzqiUqHyDFLnIF5%2BPT2PoMTul6oG0PQeXSSttmruY6%2FqflKTqDoQk%2B251%2BdMsixRcqhJZ%2FPay27JdELtw5WKLPhSJLyyrMVPGDcNck7QuyLz5kmF8x59fVD99eo0r%2FoiVG3iBcO%2FQg7TJEqThqqlJKjm41zj1Gl77dQysP66zbTcMNyH38kGOqUBpYtbXInsG5nUyVV6UUSy%2Ftm2r2V1fhhtHcZOBKIjo%2F1f9CIHM4u%2FHVHNLtp%2FUyaF8757ZDU9yu8rQ3zUzlPaMRSe00M58FH5PYmGPCsDCtZPdBQg4ECKAUafE7DJw8mJaqgMd6OHg0hpz46XmNRGdZ%2FC%2FKbeDPdeRCHv%2BL5ov0iyECH0XpOt2ioASwcsWE4X61m7MvGhQR%2BNnY%2BjHl6GeYMJ10Rq&X-Amz-Signature=ad9f8f67002202943e2dfd994d37ef4162dc378c119c186a63128695de549fbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

