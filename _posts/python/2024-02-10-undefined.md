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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOTFBZKS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T135011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJHMEUCIFt33CeBUdl442l8b83nmWs9z2fd7Mf3qExICuDJqJihAiEA5FOEDxNjQAq75AtB1lRKSYeKaZjQ3bJZHCDbG3WrhrIq%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDKVJ%2FSlmZgwrJ2t5OCrcA7ibq7e%2FHU3Bo1GrZgReGJXhpAE06J9oLSWBVs1HByEe5Yufb%2BjXFPYUBEWXMRnWincoO3%2FQ9s6n8eJg9MzOUKGe0%2Fr9ayWEbkBM5pPBCxGw4t0Y4%2BbbGPSkafMJ1m4UefNQGNl%2FOoG1tULJhFTfjew0tkuIz55FU7gW8LAkG%2F8HvQwUtkTUqW%2Be948FqsRtuU9uxyvM0DS5ka%2BGyn6WykmwDbsBb3uo3XPDpjri7BbPQZhjo9D4TGM9W34Zl7B4fuxzDpgHe9FoG%2BIhu0lh4hKPhiivzsLW5uSqqLgtPsFjyyyPXpEjMEG3jdOyYzSjWMi5XfE3JNkMqtXeB7Yh8PSGla%2Bj0w7RC93FtbAW1WahdVTnrCqhuXNYBpjq%2FScWjx5V%2BmNsa8q1HvCp5WkFiWR%2Blwlg5qDxJdDCuLhVX%2BbHJiuZxkG%2FZXJYrC1urMBndW9hYjU9Uso3eU2JFt094vEr4uEbpG4OVPAghRngD4Ix%2B4yAccwzgQZ88UgyJMW0VaO9u7QVlKsTz9ty6Z9UvzEQzUevrNyvfL6YlH0a2urpaHowF3500Xry4Rwvu5j4hIxrkdWU1ipQlgL2ilXI1nidfp6VM9K8BY504LvA4CLFbMSsYRLIgLyLitV7MLXrwMkGOqUB2%2BSpY286o%2BrsD%2FdRfyKeVhO429zhzzt%2FJeEI30eImu1q6YTX0w6lvidwIy2BvWuG5brlsTnLq7ooPiyBRjEKGODs%2BQfWZgfnlnb6gxx31dR5vQA5Y7kVldg0RDLXBO3XiKBpanabOcJYjazfztciCL32QH0l2oJZKaOHxvX19Z4CVmS7PV5XXgOzm79sawyPX9m%2F1TfMoOTuvWM%2Fop5rUeKnHhZs&X-Amz-Signature=ad99c1ff95d2b543ebf10ac736f1285424994212cab05331fccd16e346b8298d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

