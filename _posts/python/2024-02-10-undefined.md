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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662J7DV7N2%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T091201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDsnLN8G31rNSH3Ld9xXcf4xtGvHXEjA%2FP4YoCdzt20BAiBgxTretEDvX4cafPLfl1%2BurLp4BQNiYGucWT6k6ucj5Sr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMFkd7NM8RgZGNqA0mKtwDECcNbN%2BWm52JURQlx55J3CX1Li6ut%2FWfcuQf57lBBOxHf1AobtbLWQupt9Wi%2FGQknVqBTWT734VoKbKmQo5vqoo5FEk%2BFZTAipcMC22Zux%2F6X%2BaphN7%2BktxipVYAoq6m%2B7z2KR062lu7n6W7oFutbyeBDGN2jxdqMvtv8mPH4iyLApYe9v4TyLZsVZvH9Rtx5nOE80VIxh0VZ476RjRuyY7VACGDXZndlcbJ2rLVEYIgKYrhuFXObuR5DXbJfMLoNkX5x2iokoXLy25rb22cnV5W%2BRnj1RRTvZl4UibuqEafmJyMf%2BDVbqNBh9SjMpWWU5ryPDu5MGTOlZDXpASIsgRPOt9zqfCY5%2BVVTBQwNWDR5%2FqoH3v40CiGlXfBEyqZPSGiNr3M%2BvptJhRGNsnhMjZVe3snMQCLgMrzBP0gTUzGdz8rF0u3A75mVHHzAMHxnkFV8s9cU9cLnF5tA%2FNMjYf2e9IIgRGIxa%2F7IBGh0C%2FpUWY8%2FlsM9BHveqfS7L2BqnyKYlCyN4wketxSgJeBqKdA%2BjhM%2BjS%2FQpjfSmdAUC02FmMmlX3S6PqT9lgAs%2BTSVsJ1rj2JezrtuTt1%2Bv62IanEUYiOeACWcIPAsxAWxSMMcQRnjFYn8wEtZfAwpPa%2FyQY6pgHVb4U7Yj4HYVi%2BGjwdCaVcmwkr6Gy2I%2F%2FNTLtZjy0y0tJbJUig0VXf6vby%2BClU0AsZMTnEkTD0nt8g9YGyPb1IuOlPKgWo4DTlCNebjudGXIQMxW%2FFdOMl%2BPVruZl4pW6GxquRqzKEQE6cM8DwMDQ%2B%2FN0tgFKDqntOsHdGkS9fhkujm8TqIer0htsBw6WXB61fr7gCkGRe0vMZWKfdXG1a2O91M%2Fw5&X-Amz-Signature=e7ce5e7be3061fe4d98cfc6f6c99300ea7ff52820e29dc6be3f37b8002f9481b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

