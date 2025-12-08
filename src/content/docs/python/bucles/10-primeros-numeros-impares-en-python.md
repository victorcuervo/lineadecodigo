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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6AJHCBG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T040641Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDYbuDLanJRXLI7ykDKWluV6IsON%2B7pvHTVZRR5s67u9QIgZ4UXa1bTk%2BGP7Gz70%2BFFs2dpxFMaY08oyhld6OjJFCkqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF2PTR9YY9HSm6I5mircAxPiwjgO0sG83CMGj1FuXXOrcJzex4Tv6Yxhkw4ORhEuUia8qNNJCQG29sQZeRMnHqbjNsHxmWvFi3rpmD2wVP53Ge7KEmK1mPOMTPKm0S8lWv4h9Ruf%2B87OZkwGGJD8ATLHlL7OgigxnekFHoFndZ%2FmyPhjDmy9nJ4ALBZoHuukM7Mws0S0Dz0HwL%2Fnb8Jkw7i2zrV32Hz4hfu0hlbvXn4e1H1QGsdF7KmZ3MsUNlbVsItDBYJNf25wHjhcW0YIkbmCuAo2jpvvKn%2FbiuN6sUQd4qnx%2FYYpka6EWPvV8rFZ%2FkUJDazrVL8p2yVrUHywdPKemq9%2F1L72W3scP%2FCQzk7yLDJHy4hFP0kJ3dm4CakOZ%2BkYdejDQU8%2FmcXi1ur17z4l07%2BmuicApLmxcjjNOx7zn9lhuO1kJV1JJTsQIjKDvxtrBuyN%2BIU082uDiRrVQH6aik5U8vbuLTCU1RK0Qae5lhEgn1xaYLIEIY9zTKqxs3%2BJHw42%2BLbfBab0AxhD0pvP8Zlu8BQsDO7PnLdo%2BSBxjwISy5IYyU2tXlQvbquoaME8OUMFQ4pS3LUJFYboYmszRK6p14Z6M6c7mdrHA%2FkI32A4wdDqeT5Pcbxjk2xmV7Ah%2BvRWH8V0Cr8sMKmU2ckGOqUB7hx%2FXNZ6XHkr7oNPbFaXEmpdx03%2F1YGom0J4x8Lke36lbdOqfqOCvVsilaHnP3V5w%2Bf73qmc1x17osg5iFn%2BYtkbv6CpqMTNnE42rIaJwOENIJdh5I6GdJFI0Qh2AMGfptwEbSIEIuG0NC3Xp1JzypEHPdPu%2F2211x1LcB0Nd1pMEBmOapqd6rwft3%2BJPHC%2FZ55MI8TaCwvuZF%2FHwnsK5qR32gaM&X-Amz-Signature=b87549708586dd9a95cebfdd1cce0b3b4569f317ba9344f29fa13bab0593c17a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

