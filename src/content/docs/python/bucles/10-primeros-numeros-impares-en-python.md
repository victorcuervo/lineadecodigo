---
title: 10 primeros números impares en Python
description: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
lastupdates: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DIWCLI6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215632Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDz5YC1fkd32pDBjEhBYZ1P4TnoY6%2FRKDEnIqvBZ8tLaQIhALPD5PpSOSSz5cwxCqWy20q8xY0fxxKoz6rV7x4rGTHyKv8DCDcQABoMNjM3NDIzMTgzODA1IgwNh4j%2BvZ%2F%2BMI6qnJcq3AMKIC3aXMWsH%2FWZXy%2B5y1bPVDish5lqYXtCiCkWJx4OLxrUBzCcLeeQXYpbPNJM6%2FQusf9y88o%2FocIeeSOaz3Y%2FB%2FS6CTgc%2FsNC%2FHQNardq9H93%2F0shfonQmNwt%2BIOJLbhrx8W%2BxX7ENdJbzOFmIrFv4jbDhsfUeyQ7hPUdeR%2F8%2FE6O4TKJlToHiF9hEwTuBD01R2%2BdrzhyXGAOpGoeAKT2CZF%2FHlEr1PeAJ2PA56MORMq3%2FuHIyRmTxXo0IbY0S6lThPx71Eo2j9XeYYg%2FgX%2BVthzEj086Nnu4OZJOyu2uVwD6z6Rm2TmBzzjT%2FYyQ%2FCSixSnjvjiHDll5orWBcJYkXXDYZ8TT0KqH%2FtPGMkaJmbfqobWQ49fTadhFJRGm6UQjXfjsJaJ8y6n6THOI00yhphN%2BXYmwY0O%2Bc21wmOBfloEoZ1J5MhUtZiRB5SQSeH%2BMDEdSLtqLJp5w9wyYKpSkXElnSIFMCQBA6Yj3PtJKWVtcnRgcH994dIw0UPDoqJhv8Zwh09HIS6bDKmd309DkBZFCoZ%2BGpQ11mLIxFv%2FTHsc0%2BHD5VTN9AkwWqoqJkuLS%2Fp%2BihYrNCf1nwlxaWvwGD2XPhlESXJMyvQOM3eP5w9eP0nr8Okn6dMlMvjC03cLJBjqkAY8Hrcco0bIus4b2aSkNa%2BJ0l8FtVaZV8n15pN18vHdTudOrXvvlehI%2FGpaBb8cd7qYyeaEufKJ3L0IEjuWLiXw163AhshuYvCge%2Fwt2gPK8FdNuGx03mH4mgaX5L8%2FNnv77%2BrxaTgRqnwdi8jPB5sQLZWy57x9WqytdRZAMUhqDg7WVw%2BFCxv3vA6PclbvEYEk%2FLgqUoy8sQXgVY2TSkNfI931U&X-Amz-Signature=94db4a9ef6c22a9785e4a3e2d2ee5298f2e3ae44393037a43fa9c6a0cc5b89f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

