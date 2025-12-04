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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665MKVGRVX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T170646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzCs0wohrYsh9f4qOheuAwhgdBnMdeJaP5rO5XO4HDlgIgSxbuFK0H2aWI9ysoFh8jzqW6zbe7AtoGvjPH0h0cbM0q%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDL0VdIR4wECjSQZ94SrcA2eLQaN1u9aHykIXS7f299PwL5BFGYIX9HG8YxYDgzZ5bkXNIoCpx1JPvGbXBLn%2FuE9ZWUmJi9Vw6xDpswrX%2FqMKZlT9wn%2BIhFNJm%2FycUFzNBwOF%2BXPRMC0M7mbo4bqzV5CjkCXNDM1nI29YnTLMk%2F3qFBdDJerFcI%2F8%2F2cIqSfQIFwudgymOnweR8x8NSdTBSz%2BUkUkHAFwXlD6MWwcq5R54FOMMVsfxU8fk17aLo7q4Lxv6xaQXN6ZQ4u9Vev59Z8vjjumCb6MN%2FKFvQY3E979GwPOXmEx8wTMO0WLxQOdO643IAxPN1Ac2KhgxdERZu6UGWO1F76o34xzqjKWT9vL0fIHMSr9Jq9azODVgq1uRx%2B1%2F23Nc7TmCKvXpl2f5V8umfj0pUq9a53bpA2ZuUM6cSiFTpoq1K8O1rcAvydvvwb8lwxjQMyzXmJJJWkTY782RpeRUOXNalqwlY6EdsSZdW%2FCZlLVIZc%2FqHuZ5en6JRrpkbFCSN3ek3Syu6ey7X5By7lf8T8zqpYQCUR1lfh2RIQRP1KUw%2BcTfFxU9M%2F37bf%2BucZMKWZDnDMieysdM5J0nKizupzEKbP83DY4eDgv34LzdPQkiDqlFPx3dI4h4y0BFQioVClVEtyzMJr6xskGOqUB910YMJxr1mBp1eS4Ii2d8JjEUIljkCH9rTHWOU75cH3kJyTWu5yLyXGdmP2OYfnJTz5FMqCZUByars%2FjvqUBs5UTAPQODh4D0%2B5%2F%2BITgAksKIoC9U%2Bf0B5JLFsHxqkqXrAKCujQ6kS9%2B9DwJkpBcJ2Lb3gv%2FnYqEnl1Ru3m76Jj4Spsh820zWIszuHQ%2B6hA%2F8CBg0i8jbjTb3xngnmRGWnKHvOMN&X-Amz-Signature=c4e87ed45a8acb46400e69feb403249165128f923e4326014ecd68951900db18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

