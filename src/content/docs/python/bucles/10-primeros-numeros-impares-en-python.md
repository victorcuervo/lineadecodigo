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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUKOMRME%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T060644Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDbf1E8MKVcPHzrYmD9D2eB8JVL%2Fas8U%2B9vaIefMgn%2FKgIgfkVRME2DuPk%2BKEMb9arhKERZ68EMq5b3%2B4Xjkd9bgn0qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB0hQk4UJ3vWM2LoMyrcA7Sn9RtIOeMapIlMXpUcdvEUpufOxDCxtEfAh5lLfXpeReX8cAzI9OZog8OauEV7P9uMT049OXiuZj0Xb8NzMVCBWUpnKtFMc7biCMDxAkKwlplhjkiz%2FUPqZjCQTTYlQh5M18jdWdywp8js4mqqMlhXjPULNjmo1SWGojemk5q1JRfpKfZ4DMekoFUMdZtXvIaTsXXHtsLqV1ScksOe0buk%2B8c58LW4jB662JtYzkNvNm6uT9VhKX1SHtqlLk7%2FI5eHCx3lTXovzsFDsWQ6otjOwf9Wxk585DYqnGiVv1g16tGI4kWadGKoXKtueDvFybbI%2BZYK5vVdpcP%2Fz8KSUwggyJ1Td21609vKCWbLLCwE2f8vdn44tRB1COviI%2BpJuhSTJ%2Fn0gjQ6l4s8k7NFUVBQ7yPaNsAs9Rj278KNPj1yw2fa6n7OTTsxw5tPHZjaRMOEcfegozp0cz3jShUXjjlDVgV0C3lbYa5HolH5T1ZdUh%2F32Z5YWtiQccb3VlwAHDCLz7YI8KFYxNeTkHGtZfXG3j19AWmP7lQAbr5UfZsGLRaCoW%2BVrvmdINIkOA9qArXf4iWZ6w7aWKFEy0WfoZRNF6VUd%2FcklyYzTBtYQ%2FZolkeIQlLKdGNHXeb4MP3P2ckGOqUB6Q0zrVTZ9vTuQm5H98%2FLkjX0zWm%2FUhk5tcybRA6Og1esLSEGWuqDv%2FNxzWATbwu%2BzGyyP5x9KrVjvNkyWcZPt8R4pINn7eptIExosE66loIw44vUbuF7iOyGjecfFvvPex65VkNNm2hUD1b5hrjcvQFHPx2dBjfEl1Bt%2Bp6ChG14%2F9Ul9lakGliGaRtXG3baKdWr%2FVd4HV9oxSCql9J3ML7SX0dA&X-Amz-Signature=d330d6a546f8173c2e568fd09b06bd31e3dfe063cc83ac6316e9e42293d93203&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

