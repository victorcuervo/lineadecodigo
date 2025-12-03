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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WQISQIF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T040454Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQD%2Bn3sU7ayVMusEGIQ1bSp7hwzDdbC8j4BdHYrrplDMmwIgGOv9D%2F6OoKMOkU3sKcn9dGVSdW%2BfhYtb02yqsY3EaHYq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDNGHGFR33RLD%2BWUGkCrcA%2BEjieAEueEPvdMTi1z8uL4bw06ey1qJD%2FWS3ZrgDU6AMbmaIQvtAM2fN%2F7r8QDZU%2BuO3XuQh6OxrP1hZc8E9T8kT74xFdOEHwcfVyWUyyR%2FPeiBzhhqI2HlqxpTKjTQY%2BtqAk0f3QZShNycAB%2FAvLgijm0v1o6wmmeNysBrqwls5Y9znfmNT0OUvhWpxMscbL7uaqQ87M5wQldTk7%2BECLbLudPRb9N6rmqsCQ%2BcvuFLuYx8BQbP14uggu1klu4xGqcW5EAMG0%2Bu2NMXv5kdBr8pYLA3GRJGdbc0nmZz93YiI3qnA4SL6Kgkihc6KicGYrYClPGHabjjnxn6Oy%2BLqr2Swb0gPe9es0K6LXMYxwjdhlIL4Mk2xqhGCI3fqeEuMkL1pMNP3WLa5TiZPYFM2i1aVVKkbynIlLBlJM0UcSe7bUo4s3h4f5EuCffLs0asoJQYhX7AGk0j5zuM44jUxR7g7QkyUpj%2F9NIOURini2UcX5djDoFXqVX0G1JY6IxF7ZhNVvMJp6bBIZXqxoOwyJS61Cm23p0UlkJ5K6LRTlP%2Ba%2BU8dubKN3a%2FMIvDYdW2OdtXwkcyQVWkrIfOp9Gx%2FeLr1TnDohc19Nr0I0uYVmVF%2BqXsmPPOe8EzVtWbMPmWvskGOqUBkM84Wu2WS9T1j3giFRerVNZRnYiqM7KLrHTF9o6oAcuz1jWokyA%2B23Twr%2BCcFYkb676hKHBjFQKvksYKhVNbmxtBXw3rII8A%2Fnr%2BxPfhhj93keGHAe%2FbIS1H1i1Z7nmz9xLwpPULgWVohvZ9myHlLmG4Yp1FN4WzPIJrASdWMyLOaMRH4dn6Be%2Bjg%2Fv4wBAOrz4%2FCCapzUcJDUFocUsszvDpzp%2Fn&X-Amz-Signature=00ceecea5b2174a2c3352bb8994c9ebaa9e778eddd23c86d5e6eaa2a4722f795&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

