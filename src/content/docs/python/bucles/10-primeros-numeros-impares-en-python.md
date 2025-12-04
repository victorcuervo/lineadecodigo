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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFEFK2YW%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDcHjbl73f4ADdjAv%2BgY4PSkt11MoHjA5CqePTUWOQpuwIgRmfPeKFtyCfM1j%2B%2BJTgVfGxYqSeujBfO0RfvdUstc90q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDDNn%2Feunnin9hpZlXCrcA%2BWexKBy6tTlo0x3M9el4Mo6dQ%2F1MnEUUkRO1%2By21MAr%2BnFf31emjnHmVTRrYWzLdc4%2FDoVd2aBK8tA7r10yzJ1RAoZEyQHGHiM3KLZenN%2FNXbHWWhWBw6taUraxBCt5OrysYz%2B70BkzMWeBaQnZXM%2F1JApWySIapO59LjYW8wxryzxFJ%2Be2FeDQbTE6wSSVOFvPMdHrrxrfuxaF%2FeE%2Fjb3Wk5yskAIZLEUpi4arSjXEp0G0G9mQm0GYKA86tm6hZwXeDxJEYW2RI2WL7mFGgWxi2WelmiR8MbcbKwgZ1ILPyJpFxaZ64Rgo5z0fKUQPEy9X3ztHIk9VOJPgnPf9wyYBPSjLFaeRqTyezJPtdLhTcrZZM9lgKyZxvBIqP%2BKe5yVVASRdjCj1UJHVuMgoVtH8QeJEOxhHinwNdyETcIp69%2Flkjq9Kv7FC0y74ILDa09gXUNTRwEXf0MFJWHjq8d1lylFFXCGcrPwZhG5GYQUUt87UbE2ZzE1a3daEs03SE9NmRzQDQsUkAwW5uDw8J4UtA9MFB2PEyJ6FeODjwWd9YJTohjOvNW7WEhiQ8yb2MohparrA8Ld9w8or1uWx9fdNTdOX%2Ba1BnVcgi37fRRif%2FnNJOa%2FKY9FjS1zOMIiQxMkGOqUBqa63Iqf6LUm7ma8Jk48YbzryAydD1msu1rkRJM4EOGUnmfACo9U%2BFQw4XGAkAmphYFNBjrXzccVJXGnjKC6fJz9pLWLu0N5HXfA%2Fr%2FRV1D4yqlretIsWd2kQ432dPyF0TprsNOiEXdZQT6kPy4KXZoIEe41e3YJb911r2laXmtexeCU9G8ygNW8suVSMxTKopC1maWUhyBUZDdIxi0gtuC2VaoT%2B&X-Amz-Signature=4474500313825857531fccdd1c352c8009495ec998381afb65b8c6ff9a0ec53f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

