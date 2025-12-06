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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NLCNQCA%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T094155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0Oryw%2BmanCFv4VR86WZ4Mmm362TrNA90XhxV83HYHKwIhANAkoXwzAnZmvV8hSb2I75hsZvw04SDIVYGs7qc6t1bVKv8DCHIQABoMNjM3NDIzMTgzODA1IgwEF1ZHYVLjlbX0SKMq3AMecuJ4lH5UzfToIOodgj3BOHSg%2BFA810VwywemNAxIphgpH%2FgttFzz8DqPsDZ4vXKFb8333fyWNMh2DCGhd2BXAw3LkSjfhcCAhucPcDlcI9rDylA72sBQlXdZq2yoiUdTtcx7%2BrwoUVPC9YRi8wrOVRBTNpbRk93RsyojbEnHYnb3nOKI%2BG%2FuSlsUnRY5AZL3SQG8jUqsyqTQp%2FH5ET66uPgikzk6%2BynPhDoFFdsnZmJr6Rqdl6FrNv1VFxdROxDzgRkB0sz%2FNOsnLZmdkVpzlaKdD1huHDu40Gq2tdRKF6eqLcaBrC1qIcljiI%2B4eeH6HayoZ55jB6BNC99d%2F1i0qxXc0004R6mZzHnAGeEOqocTkji0G9yW1NHlKZVsca6UTp%2FgjUsL09OM%2B2lqH7xdMlfzJmor2FLldot7qEtcG9PYN9i3OR1gzMLAzVog8OdqcgzW8PehygegAUbrnyMydvZK1Km%2Fy4prZyFI%2BOmQ0jD3AQ7lgK%2BFIy1K99YkejhdcxRoM14K%2F65cmpKLhzg1vaHhZqJ%2F0FKmutDmVvePWmjCgmc6Q9J2WU04CwgiZLHEtf%2B7pIX5q%2B5AHmpssNhOI68DYy3tlTOITcJA1Q6C%2FuC%2Bd3p6d9JSzqc9IDC%2F68%2FJBjqkAXpZD5EeZ8a6OpRMe3YnIaX9%2F13Kh%2FA8uHdy8NK59r0QqRg8N%2Faj67ViT02dA6oQyxfaSDJHG02yCcujM1k7Cw22ruW693ciqP0UB0v0WTbaR3cXQHBMmbMpTuxBdW76zHOJ8Dy41kW0QKYdVKN3rAUHW%2Fzy8mmNQ4UNEliNH0YI%2BeDfL2LJy5mSKGroiSLa9UDqG4DC84%2BnFIp7c4dewIQoeh1E&X-Amz-Signature=bc87a8cf82cc0333db5c356676f74b01a7e973843d85109e69feb33ed86719a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

