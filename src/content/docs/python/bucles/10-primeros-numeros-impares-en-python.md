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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XF234VRX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T041651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIHBzKVwNGCIMQLtz7VRx3qwFokjEa7s828IvPX%2FF%2BiCiAiATwbXrIDL8%2BS2tYb7rHmbQ%2FEPnEjmhCTTzE7L1kMZhpyr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMih%2BtU%2FSncYJy1ic8KtwD6htboSFZyoa%2BhQtQ%2Ff%2B%2FAlPB3EYbFSWH6z9gcv6Z54gAr0bkVQeLFH7%2F1L8UD2ywdOUIQCf5oTbLHhGqy5TBAl%2FoSJ2V22T1ceR4WmaTcNUFUk4se4Q8j%2FB7GUbv7754vfQViW0s7K6D7gvuUbQxU7xJ2%2F3Y%2B7pwtOyYTX4j2zTUWI8MEwFg1yvREIVIZ5Ll%2FY1FWbkgiRtUUajUXFh0pR9%2BD1pe%2BGOOF7oYjDs4s9Yk3OpH5fmCEI6KUQD1GJdbpsRWpc2RBVg9tncwkFQ1BnfhyIvJkedsOYKrqsSJxUtVvo8%2B%2BSfHk0jUhAZySko1sIBpf0X7xp2RaRFBi%2Fp6b%2Bipu9ukhG0Ajebz9lcF280D3d%2FBg0xEvjdtVqfKi4O5VMFpq8GjZLJ0YjB%2F44SPgr%2BggkAVVMWXVIQ93YAuMA6%2FvI4z7ToRL2PTngfn3xM0XOQRQY%2BODCHGz96m4wf3vBuXdc7qKqZjFQjFYse17123hUQH1zQON%2F%2B8JQhfkRhyA3tSnGg%2BKLVuUNHFWC4rKMu2aX5sJD5wwV480c2%2B245Mqs53E05LAGl6bAsaim1zPLsEW48C2GGJRrmo%2BcdRtGzmi0MNOykQAeVgqPlrESbQtRXN2WvP5bxY9TMwqJDEyQY6pgFEV65NaWzL%2FrD9oPOP5c1FYVpz2bGNYRHsLQjV0I3pMehXdYE%2BXatsPgoKDA%2FJczVOS0SkizTqY2LVNKjR9bROSZOqU1kQuoNAVsG%2B9cJ%2F91eHgIV%2BqgzWrk8bKFWqLNpZRk%2Fio8EXmps%2FeXwuLHAS4KV4rGkbDgQEfTOrS67v7CTqAntzmLFl8fv1xPWz2BvqV9GyD6EyJqOBTDKwj%2B097OAOEBJn&X-Amz-Signature=8076602561e8ff47dec5feb8f1484066b073247a4d92bba077620d41268f4020&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

