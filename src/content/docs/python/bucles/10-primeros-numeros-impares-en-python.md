---
title: 10 primeros números impares en Python
description: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
lastUpdated: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNASY5C2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T033038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJGMEQCIGLtk8MyfZ5Nz4ioKLIf05tFe%2F3AtYMUnolfyUbHXLBkAiBPy6ksPvKo4uVfAqar7IqCsWXaHt3ubUcDZKxzSPm8WSr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIMhxRB1P4J4sGZrxQUKtwDn3tWBpOHjA4%2FG8y6Bz3NygvunXs2Oa4ayukIyyQdlKHVJg6Qn9gSG%2FJEwVM4W4OoCgcETr6fjb2AXaWUoFQl%2BUVFijUIEe783Dzza8ymjIggJXwsBiMAmyDnCb5XCG6329cobDJ0LUNBxdxSrnmtrIsX8BiB94voYvJ0wcs1kyLdU9YRyqgKjdtH4E9myDufJHtNRb30Mb%2BfxOOfMRD7tRW72zv1RamKCoeeWavgG%2BXEvieydGzLArrevEGobMU9zx89UYyuzjqiHYvTBtSNJBDk5RZDtN4iODOt5e1Ihxa76vPaY2uUOdIYGmRnTrJYCiKieDtYlJKC6H9AhPUY1ZGd%2FcZ4NrNaNx%2FU4%2Bq4l80Xr4S8kJ1T6kX942T32KrurVRioN7bGUnL%2BrclURDQ7FoNxE57V8iSoN2iQ617lGdQkkqNp9rTDBIFF%2FkO9%2BNddxl7qbkbuSkenfLCn4i5INGY5TftalVJJJ4Tf%2Bvn%2BSAhqoYdKIHiSlQ9lcnAkARhm%2F7Lc8%2FrXeZEagXn4X1Qm6Mvu8NsNNW1291Jb6LbHlL%2FcgAqUn0TA4dfZdE7EO%2FGh7qxEIrFWrCSi0vzXSugpDU9fO7httDUyhxs8Y9Z696rZ%2B2Mpi%2FwG2UpuXsw1PLDyQY6pgEM3RL9QbNATiA1th15rJIXOeL0Cxd2QOG2EPj1H2O%2BCRpKrFAN%2FIDvGCko0DKJVcn68n9cLEnUnhG%2Fsg4WsHnXLelJl86UfHUWqLQKAM8FEd%2BBn99RdHqsIoLAcVt8To0iUAaLsvDyt7JaLE3CV8aPT52HDLCY5OgVuVfhSkAcD85Pl2Woo9Imw%2BNbcCEmMqxw7gxRkmW%2FuCk0joZ0K5t8MFZwtWuw&X-Amz-Signature=3c0720221cc691674bbbde45351eef4702bcf112b64a6dd3ebcfe20eef47b9c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

