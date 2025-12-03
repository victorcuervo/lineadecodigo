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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667Q3PO7RW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T101219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCID5YLRFMD%2FobijAg%2Fcq%2FT5TzQv8NzXGhV1Txpk0wNCw8AiA1mk2qsnZ4xblgYfP8Kh74cH4qqyk9qhcEWndqWz5%2F%2Fir%2FAwgrEAAaDDYzNzQyMzE4MzgwNSIMNk57XWunRX%2Fa%2FIhQKtwDHgy2CNV2N5sJNoRFlH5FXALGGLTIp4hnJvw0uZmcHDHvuehgbwG3qM7ySfkHOnh%2F4NGYYEIHDqKxE6%2BW0wJb1v2DtZEHOpkQSSdITqHXMASvRjAJI%2FIkVkCKDSsFYJtyOZ0NHiuKyF3UfIdQ%2Bv8kKxQ4YlmG8HkZe7xSc%2FvIXf5%2F6eNvibRmeVyXaW%2BKe880GfP2RbbvTLT00oOEPZap97cceHxnYhf7ayWPM118HTl%2FKoF5249ZiSH9PjRhAJTWRCH3rE%2B3of15QWp8YL9W00OULATvgmiA7JhMLyre%2FLdKGZsiRrZkxG5WNOFEXrZRb6xKGj6heFRXnr6K6X8frNlc%2BvZ0pONrDzSmHvDRYxenueYWPO2MWbRSNMWRgUZ3unelnU3IBWA%2B%2BjORwxKKy9lbZo4evBmOhEWucfNKPJj9es6oxp7SGsPJxmBcCY%2FguKV%2Bwh4d9OMHtG4gZ9ziorN4oCLrbcClwczi1ZKxZvC1GbkqxyKOPYdSEWbX80OJAAGHNMzEJCS0X6rSHIBSMLhgE%2Bm75VCsZFE4Mw5LkEGu%2BUdfORk6ROg0LfheW6bfvd1mWo3GjwB2UvlsVHUyvYh1YNat1S6lwMiTo%2BE1l%2FXdQ2SWOWwuvi84IbMw55LAyQY6pgFtiZXkTLG2ZviGvnFGGrsFa0YzGqrpXYKLdRp7V3i8vcu%2B6JLPwRi9HTzTHWyXyGhtY25i0nTU0dmRxKxNCVGoNxuLRpSCU2FDu%2Bylrg1YhDW8yToQnvbv9tQYBjv5XSryYnogw5pxoaHszskckiCp9BSL1dMUqtOHT86B2KjdtJwA2T7DCyfJGdlabnOqGsYN7%2FOwtTfKGOi1HbXOgxPbtyv1c%2FRE&X-Amz-Signature=66747e2f572dd98ff945a1b81ee7f0a916aeaf39c526f196a43e0db147d8d926&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

