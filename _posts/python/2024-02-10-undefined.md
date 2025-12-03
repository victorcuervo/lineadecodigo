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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664W5IS6GE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T175031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIHo%2BrKdEOqyZOq%2F%2FK8WNoH7WnBDSQBZmrIxT%2FyZuF7LlAiEAhoi6DHOpIzc5uSgtuQaCW92opKQ6rKLzHuiUOx%2FS2TEq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDEzyy8PjaiVteVoY%2BircAzz4RBbV98nqI2Jd93Hz9Lo8x3JTl4%2FA599xg04y7Rbg2sfKR1yMYv3nl%2F4ednKfWtgMT2jyngDy%2BfDMZ3I92BbYj8Xe08CoutjY0PgPhVEn5ksQ6Y3PsHHgJDXi%2BqyiVfq%2F6c0sWVfQSvE1OT7S01yW8Z11FqTP8cW7Cqt9PGN0giEVrJfHZSXyr%2FMDlMNPfQd4Je2iil6z2W9VK2j1LMIyo9aDhZbwlQBDgyKp5sr7C3rdXORnQ5ssw1C2U5BgvqKOUkbBtDEc6uDWQrXC%2Ba07Gl4IyZGgypMtVxRf2iC8%2B8WN3tzHVy2AGq5R%2BGy4pImoKzTdDwLR1HHC%2B604usN6rYBJ0PNo8joPOfw4plUCfBD3zuUyLP49P3D2I36PiWSYTqbikIqz%2BZi%2B213ac%2FMncFRCd5sQujjC30bTjwqUlI%2FjmP%2FLn%2FywmXcMfkSae5SxUWQjOtbCMY%2B8zlbT3EO%2FsWM0eqyzP%2FA4y5Y7X8Bseq5nq2YcLDiD9Z6b0mOhmc19HHNEyiE4C9aN%2BB5AmGI2mrzncrTkrxI2nrVR8TjUrClnfbvevDKRaV292jb2t4Dm1KcrXTOJHKgSf11CvjyTWYLQHABVZ%2BIAe5KnYDdJ%2Bvx2TzLYc9ArFCa8MMLbwckGOqUBSstRyvv72NIAcb8A0%2BuadNp5rDyXCCzYIT5MHQ4EEZdWH4jXOmRXCuHMgD2rsCRCI53OFqcukHOYKE5S%2FNcaSbynCs99lirbA3zBPBT6OPackicY16xAzNxzZ3obhX%2FMmZ2%2FDrNO%2FrHdCarCpOEs3a47OmR2kf9d0WH6Q36E%2FD5sKqK4%2Fpx5fQ75G74SYHRs3CuwS45YWnvbM%2FiNv%2B%2Fk1PUVNpIj&X-Amz-Signature=3573a28a80d8b9868e402089b1ec555098ad29213e74ec8b3c0fd7c685227d8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

