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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VERWRQ5H%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T162856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJGMEQCIG5GspJgRJaThv1ZW3qpY3E0IkiB45CWDe%2FNx%2FQNJaxiAiBxPfOJVfhL9ctQ%2FqqVyO1YU0SZdtlJmP2jGN48%2FNnshSr%2FAwgxEAAaDDYzNzQyMzE4MzgwNSIMea%2Bw2mkFAfzYXutzKtwDLEi4c8JfQva58svmmwx53ezoq%2FZvSQkHK849xbPxFGJ9MM%2FPKBEOvgtGSB06TXKPPxH5dn2ibEFu12RsxVr0sNQ2WL0HURI1TbP%2F5gf1JAarPfbsPodio%2F8fpyg7kI1o9%2BppBgXZfOg%2F9jB6NXF7uAhuBYr8H17j6H1L0NnJI6Qrz3jUxWU4YqPaRFJoqMU8dWzb9qT%2FdCWFj0A3k64%2B4OZMfNqiRUGltuwvAQlIOx5nFGYn2t5LrgYWlyNi5GI1gBCPF%2BAehUeZha78IIAZPMxy1V%2BTwg%2ByG%2B1apAQp%2BBEl9aepakBRSBYPOUBaVSJAjRC1NU6850Jb0R3CuOdFgiW9aiM7VhP4Ln7QbvFHuRK6mwcaveXDLLtpjT8HQ3isYSy6hmJ%2BNEOnWYxWlBIFGBqFgObND15LgAJJq1N7vTFsrGEuVx9nz553ekJXZXv%2FNntSW3ufFeQTDn2hz3Vd9PBU7cH1G7fJ12yabf4CwSnjn2J%2B9A3p2JO%2FlfavP3yQxVe%2BRL42%2FeJeEp8YQTFYYg7SXkASIwnaVyvdkKTPBXD%2F12Bl30jSeH5YRMh%2BQqx%2FiC4uHJq6tm3Lxy%2B6wr7lpBwevrn85EWwWZk6jNidr2%2BNF2stJqW3UeR0ALwwy8HByQY6pgGl%2BIj7jomc3nEGwaqliwJdCgsZzGtGT9ny%2FkZn1kxEiIun5EoCDBz%2FW0og4RRTqML%2FLcd%2B4HQ1uvgF8hFt1iVLgDabS%2BkvlX7LblqgjIi5uABhCBnQFwT1GUmEusiv9F8xgxOAMA3MBUf4PZjE%2BayusqMS1bTiaY0QK8tvbgde2FtT4n06D2Qm5ZlDfO6XWiVKU3CoqdJUIs3paKYg61HtTTBg5ArG&X-Amz-Signature=4018fc910d49f158a42297e63a6798d3d22907b19b5f9e4a222a70e3f23e9e7c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

