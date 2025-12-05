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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWH6LCAW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T230026Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYVL2LKQNWf2oXr20hN5Jxhd8ZkG6somBJmHEFj6ltzAiEA7rmS18Cp%2B20FYiZjTTNR5rVm%2BmfYkP%2BACgsoGq7EDH0q%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDOvh3By20apQRMOPZircA%2BlA%2BzvONs20zHV0IrsUUXdBHjwE52znFT%2F%2BeJmXiYlxVgXdDDxY0uAe%2FK9F2wMqNhMevakYSC7ya0hDT6V9Zi%2B72X7j5l4DoKOXbsR%2BVZPc60AqZ%2BK1Cat9CdS76MDy%2Fxg4ZiE7VBVQLiXqHFYKEvO%2BKEO4TV4TxwuT%2B9SZlp5GrarucBWS37FJGJDySi97RNpOS4U6s54Dxqy73AU%2F5nOSSKhEimGt9zYLPFBxbRVIRXhJW%2Fb4c5dlkBk7EzI7F3VaP3Urc%2FWK5ExBFxeEZ8m0OszysEb%2BK6NwFP%2BikrinHbO7PWvI18jNjCWgdc8oscSQxK%2FQY9TvV8v3i%2FbNLo7XBBpTjT%2BwUStUPUqEGbv1%2BcPYxfNJea6wjjN3ggIZR%2Fq63WNbmGPMEpAmn5puKKY5QFs27sWI7cpyRW10KPHIY85Wy73UqXmGz4ZNqKKOqNcHr1v5u3%2FL0bgUGed6nEyaxWeg8diSsw3zmD3esB4dLTNkWeKg6KLiY7qcEui7mzXlasI8G5L9sHjAEQjEdPIi%2FOGs11e3oAKIK17Z%2FGmzT4g8gvxtqP9q9fmWpGLSoxV2tYGUg3SJotykRbiWqKFrU7%2BuoAfBzQwJ6AN0bZLxCStRo5IjyY%2BZZylBMN3GzckGOqUBLG48DR0V1fJj%2BTBDExsdLnuSFYLnATB8cOrh2e9MI1j7XAjhBOTeug0p6vSLnPgU3ELQ9%2BsuyVywb%2FUANqAw2kT%2Fgbbz1aoMvQp3aF4LKYGg4WTmA9xXSDQ%2Bo0YyqPKT1%2BiOD4HP1wHcg1GMnoE36Zxg77gXfQhyeZaMjKA%2FFaN4N3ptvPm2%2FGLsDisbPnRj5EwfFKLmzKrCDWGYOnaaNRGw0YNP&X-Amz-Signature=8d8b5d63a708fa9165cd5a500fb49a660e94664e9547a8b7c7d0e0a188e1417d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

