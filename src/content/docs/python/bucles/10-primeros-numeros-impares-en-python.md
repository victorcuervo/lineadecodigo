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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ORHU4MW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T081023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFvUOFPyeI9UUMrSeWwW%2B4xGg2LFkocfJGkmBYK624rSAiEAqAao8W7VM5cVS8T0aqFHo8DtLGvQ4uKVj4IE4lYJ5Ioq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDKBHk5Du6O%2BXEIEakircA92SaNDtWjC4%2F8QmteKrxXqshWAvbbxYhykUUNj%2Bj%2Fid9nndV8rgbeQWrR%2BOi395Xs98noozC%2BXc1f11f6VMOUh4YyxbH52RyjsK7EtDwk8QXli%2FdVNI5qDzh%2BjZ7FRmsmZc2xmaV1qlzuvSfCigYNWMBrPW2cLwBq7xpokcaRSWK8QEc8u6KseBt8S6KOgoQgHhgxQMu6NC%2BP3yNCmV7xVZ8UFjyIhe8grby6McSOR1riSQUeZ3yEfaMjrCm2IwTYwvNMrnRgcv%2BJzGjGYUttzDqMW5CWMoLqIhtc4CFZ2v6s4NNR%2F9KQ1GD0nTOVJSRtks5ZQGchf7j%2B3jWileMf9tuDH%2FHpthCKTv0XmHdpUqM78SFRFTU2b25jhdE9oevNlcU%2BMdeuV7WssRC2bnXipUKbYth3NZ%2FDRs%2B%2Bo6zZBislJdJkD8wKyQ2mOHBxl768DruNIx9L1y5PVIYVI6eJcHwQxwoCBvHktaQFgB4rPr8dsxiPGZNd%2F1c3WZmjWEPXdrpNptTIt%2BdVbKH4yIRov6ZG%2BSetiwwewap0KH9byzgmNSp%2B%2BFzJAectcfWrl4VSTJsnVdh3yXd3X8KukA8C8JO79yzbPbEIi9wmp9Ytj5Nv1ISypH%2BNkYFSmjMMe8z8kGOqUBIe3Is%2FsiqkAgpe2TIlr7f6B9KoRlfAQZ3ruXm10vEw1C2T20FxbWp3bmqZvjE%2F7ahPOPsiMIDKus6JHMrRlgQmWEyR%2BjQ3o7qZTT6mfqaOc2aKy77TfvtqfWZzurKyKOjWIAseQQm%2FoK7yXvLnHrZX4pwjXcvXqn%2F0FRy9Tq8SGKfukn535d%2F%2BltxlG5mpdvM%2FoAJcjqarDNCFDdSr%2Bx5Nt1yRRq&X-Amz-Signature=a8da6c81324dfa0ae2010f7d645a1a7e2c1b3df93753351f9da05a11b6187c98&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

