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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNYUHIBM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T032339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA%2FrFt5hwYQRJ63%2BUi02kMe%2F9AIwalq8pszx7si0jI04AiB2oWoXZyCs%2BGJd8ktnFvg47o8RBrGGAuq2VLcixE%2B7ECr%2FAwhsEAAaDDYzNzQyMzE4MzgwNSIMjIm7jtUFODStZRH6KtwDk%2FzUa9%2B9yKQ1xMxjexAX9iiIAvq9%2FNQ62w4B6uUYUT%2F3U%2Fx%2BWt1gMnhgH1yX3sBjEiwjD3YzL5854TEYXjuJibpg0rqFG%2Fo0n3csYaeW%2BoFE9bwIts6c8I7V3qEhRekrJe0ENY9tgEhdNzgIDFG7sh8QSYwctC3mUlhlmhEcTjpOElTc91cI0g3qjulxnkXix%2BOHOrbazVo8lDYxPwZIUMjVidS3g2lrEi8t9cEwugFPWfZLXkhvvhBYQlCu4NoJmzB5v%2B5ttNWaxpmB7UJQ7xRGN1piRgiTTf9PACwd1qPtKv7xfCRFO4L9ncGr%2FcDa6YUBF06F7e%2FujWw%2B5TSVa3Dv9x8OpM8g0FVeOyw0Qo8LDUE5hWGtTwfvHLddXtH1pCMZCnBCN5dpURv2gyOgSY37uMyfvlD1f3Qg%2FxcSAFSdW1UnkrsFVyBqVZTq%2BwSHOeU7OHu61HKY%2Fo5qw659BmvOHFvYxeMPiVWZPBP%2FKqspr6Rgicl%2BAuI1Zgg0I%2BVqo982dadEpuaGmz7j%2FkbYfaHaEUrCRYHhixog5NbPtEGhiWOcndqKeAFpbj7Fl2QlLBtTZiDYzBW2ozu9jeeZ5t3cpSEpqZZulExgoVXSo10YlRSbS0I79D6U6lcwwMLOyQY6pgFWgT6uBYho%2FFRnCdaRFRYzzbcfCJZPmIgUS2nI%2FbieSLqSaTWZK%2BiHH%2B60xnz6BTiotaAwwTmn%2B7LyNB2zsuzTmZXgI1Wi7go8XZYmw9s9F%2FLnJJcv2m0pStape2hsAAu66vFGUQsL9k5CQ7wGxYUBt7HFYvLB8YBloyxt59PWOnAOSmSvJS8E1HWr201fWk4LGBx419ajVkHerhhY5%2BSR2xfOJqcf&X-Amz-Signature=4c27d6017023b1cd739cd57d3e5ea8f89fd8aca3241bf14b1f4da45277ff771d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

