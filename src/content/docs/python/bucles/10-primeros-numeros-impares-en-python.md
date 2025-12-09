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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULRIQY56%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T003534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJkyJ63FxhjOq0zt6xVnrtV9vB64h7NqUGwXVEb2XIiAIhAIEulAuP%2Beu4c9urs1fgsr0XeGRtjpIG540xrx3bYAN%2BKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwT1DiZ6js1%2FfSZFwsq3AMQor5X%2BaFfF9KTAYnh3oPzD5WELlMa5KN91WBJGx%2FDZZwXiRSfbUKdj3jrmjGR0Wjpip31hYoT9Sq9db5uVLu25L%2FkI8Hci1xRUVUBRJc6OSY4Pk8Ge%2B5jXVXsapMih%2BkSyux9GWZCrebmFiBtM8ohx4DjhibMHxXn8xZDAzW0KXNpmhh01jm%2BRha3ezzi8A3Vge%2FweJwc2ydZjxYMjGBXqu3gYfv%2Bw4j%2BkUwsDnGBUr14ha%2F2%2ByGKJT9AUUXGe2dDuDhAlCutUrdPponXFHjb1UF%2BTmTHcQkOBL6hmYIe4RgG9MX6QIkEqSRWA0ZRk6LrXzpJaD2Lw6GjmsU7VCh0J4ZS9%2F3ZtF4HhyCq37Jfy4KGKENm0JqJ5dD587hO%2BdlW%2FH%2ByKlLSkuhEBRPprnbRWKNOOg1%2FRdnA5%2FJ4IT2FYq9Hj92blpZ5zWRDXO1%2FMEaX1k7w5oAzZcY5ZXgQRvCBJtblk3sDi9rSvGxKRrMI4LT3ujjIk4hhPDc6iP1qA8ZJzIGWI1Wkk6pBvRRcQiDiqmIuylIGphiuwmWPF6F3GNm0eXmXFJ8yk0YsSSLg4oIdAIuR%2F6XCcTEu4yfbpIX%2FCe4f7OB0QwZqhe%2FvkKCUUzOozMjqSlVt%2BqGqVDCHw93JBjqkAfxqZXdISkWk1u1XLaYKVz4lasenIpSl4Qrd%2BlIiM4BERMBS4lTd8WFPz45YvZUTzYIB4xiK73JWvYpqZMoqO9eLBQw7bvOH0mFfp1fwLilHbwXxz7C%2BFPNa1RXa%2B7P%2FsXivC7sERx1Ew5MxFUQqNGeZZoHQ%2FKLUouv%2FvzbYuIcHdIDXZxpjnHDPbEVCgPobONJzFBeSTQ6bOPVFG4bJ6gkatcHB&X-Amz-Signature=534781b89f94e0f1413d20b0858502628cb81e527dea6e262e33d65295811faf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

