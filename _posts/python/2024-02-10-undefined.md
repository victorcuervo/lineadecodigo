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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653DM7EJS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T051144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIF%2Bp6b5YFgQBYIrrblQ%2Frq2sgBHqDn6EiLlThewmq0ZtAiEAjID268WINMuTnGVrUtQ%2BGydmQjGGsSXHQI9Rd7z9iAkq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDMCSSTwMYb9VvCukTCrcAw6ZdEND3tI6MmNkxH9ZehxY5y7wqNprJgny0kS4dqD0Wp3Q2yhuJVvPUkqLvKAJ2PvCN53JDvy%2FtAaYMz92rXia87mTc8uZtg5X6SVspEDegvqtGjG8FNttIlrHc2dmIFkeehNuQej88jcqG24kwHCB3%2BGZ4zBAOpKe50HdHrnNv0iIn%2B9NTnlx%2BMuaW9esT9VRIZdcPEoMoznTnEnHgJiUaIdxu9wT14iBmdJi0HOYKeyMDq6bpLzSKVojLoerbEBKzJPwT4Co34nbHTdJFLz7cKRwRhwvkvaU70TBLc8p%2Bnic6w4fsI3XCfNVAxre0y3rKp%2FRWZ%2FAZ6u%2F4rSE56QmVaY8OjpWT%2BLgOPKOX20rVXLcVWBoeRZZwerGPiXR5SOWCU8cEsxwE2FV9hHlhAU5Q2V8m7GeWjB5EkR1WO5MX52%2Fy7vEr%2B180NPhzF4NlWJB0dkYWe%2FtzC1PwhjCXsRYffEiWy5yvQ%2FXQx9noNo4THUthMIMkFDpqxcL5nLZ%2FU2R0CNOYb42T5iDJD%2BgwnTVpi8AH7bCbPAnF7uTAPvvmxPZLp8vnF9n9oS9GpGXlEubF9v4N4JXHeBqBZHJIdKiqtYUc07SKIxhM5m%2B2nj1hEQ3%2FmUUrSVtgj0cMP2UvskGOqUBmTJa94qKZHdKFxoWWnVWYV0gptPtfCiBc9YrdsWsydYLwfP1TWr9vijmLHrn3Uhjj%2Ft72hCzuuqyqEUdLXJlDbpxCm1vTpSY4JIQ%2Bu36zY92BwAJ9OSzlPtyNyjPIAdNuEug3CW2pon6xEVeJd3pFtbZixU75LF%2Be8x%2FfAwdy%2BWqQ23mLrg%2Fu5yF8hxdTg2Qq24v9jXx9AljzOxaFmHulBYzBdeC&X-Amz-Signature=20f4e6fae09fd477deb0ab7fd9ea80ca3b9e656de2729725a8ab71327464af31&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

