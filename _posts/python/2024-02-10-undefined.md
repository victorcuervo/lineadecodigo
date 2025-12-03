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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWNEL4JF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T060530Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJIMEYCIQCyhEAoacZGROYuqQUP%2BI1Yy35MIYYIxRSThbljgvPwwgIhAKnClxK8WTk9zFjbNN7XkOc6u1mvNdDRfcZV0CMtGC48Kv8DCCcQABoMNjM3NDIzMTgzODA1IgwEebGH%2BAelVthkCqcq3AOQge5mIiR%2BN0SEvLJuL11ftAbHD90eQNdOjhfWkqheTeflsWygr4HeoVVIPq830HZiDm%2BgglSRSf%2F6PB5BqDi9NkrFUfRM%2B%2FJwOvMLRVbuBaorqpwHHyHnDWv3dQ37rILeC6FehvFo5crMk7G4jk4CEOkl%2FM3axlyPYcSu4sLSB%2Frk5XZ7xYrRwQoI3luEzvLGouc83c71UJ7QBEYwJXsg3RI7kh760hvZviIbyjJ9CMc6g5vKi0TipNrUCSTIX0ci0TggYaEZ3ESdMitjpbewJgnb%2Fgwv8iv%2F72BTArfsJiM7lBLz8aF%2BHVR6ZOe4a7JdDqPjcBwVIKOIIQk%2F7IStFmHFDyVRavqgv%2BrRpy4zGQxo7tjwNW%2B5BPm1fFLezKEaSJ9r3dyG0DJjpbZPY1SV55%2BxH6cGKTZ3IuICisKo9o6Qbr3vsw3HjVJG7jlzEoWU%2Fg5zaHnUhYlWaFad%2Bl1yWawnUAn%2F7CAaNYdgBzMwaEQqB1CC%2B00owVEYCsBfJy0DihUYr9980JPfN9H2UT%2BG5%2FfIT%2BZw1%2Bvj%2BoBmUr3wRV017UD0D7KWrcD5zIUY2j%2FWhQ7vQ4z%2BrWgf8K09Rdp7MpXsWJy5aocLze01S%2BBU%2BZaDOYxISDlSLnVLtDCNm7%2FJBjqkATvIbnsD0nLnkA4Kviyu0LsC%2BSh3aAXwmpQHJySiUWjxi5Hq93CcNDR88BGZW4meqEhb9Yn9xf2LmBy%2FBdQpcM2uRTpxEK2QZaCmGrMYoo5pxUedxQYOxjKrRbwtmgC%2Bh1g%2Fs5q1%2B6XGfbLNmdEBQU01gmberk3kmHzyDmGol%2Fs%2ByaZ6zvhOFGt46iLRXrDI8f6y6VVFKA6nau%2B%2BI1bzddsGkRkZ&X-Amz-Signature=32e66631e261db9775ddeae37f59e26bd378832ce01a3f449e9d8c3f9be4935d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

