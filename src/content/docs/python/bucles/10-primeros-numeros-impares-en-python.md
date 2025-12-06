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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSZWHUCW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T033640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDjjICm2S9MG0gRXV9CXRyLxBB3sNTmDRe10g4%2B3XFAYAiEA1U9mI28SilOl1vpF%2FAAEsg6NYHG6bs%2F%2B83meeA6B8Agq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDMw1Qv9NEXoiwqnhJCrcA9wfkkGyNhi%2FH%2FVd3Vw7OtZvnqqJRg%2FExSEG6UO1woG8zGj7PjGj%2FA97igZ8fSPSCLrk5g5x%2BKn0N4pCj%2FlK5j2rc%2F9axuFe5sjUKi0vLCJS%2BK%2BbGQywSCZFPdbb6JnCu%2BInsv4PIU1PI%2F6kkMf7fCFyn3%2FAt2zpoQtLLlbCetPyNtup4XS1gf1nVftJGxhar%2FSTdff2KPOpI1jDuf2DFhZYH0pKofFehqrZKZ%2B%2B8hz60%2FuK7pDk%2Fy%2FKVmPA0O%2Bb7BT%2FMYCk%2BuoXSC%2F8lyoLWgY%2FXWgXixGGCRNLBxQ1JBVdhKXR4j%2Bft%2FElHX9NmKG9fJHZPqnq52lFfKYzfHg5JhAfZAoEDonuxzyk8Wx8okoVdMIdglMRB4QPHqsGsog%2FLC%2Fut8gr2LqefaTH7LP%2Bh8dkI9CIEb20W2rDcakrA1yJG75alRqucaKlXVn1hj60%2FebHrMkt3Go6zPxQJ912llBWtZEYGxS2yBCFyKd%2BarCn42kwbp%2Fh2OXlAqUh9%2B0%2Bwz9%2BvxAIKBv8QbPWQJA1Onaqn1Nhag%2FvvRZ3uMB0QdY1GqhIb4YdVT4qDSdyvthtWB7RGLMjS6Zeuz1VEprbmOZ3Q7wiItVBVGUIVLzChIeFwI%2Bu79IVxGpauxljMLjCzskGOqUBxcuIe%2FYnST1jr8x0R%2FsTmqzlVGNAIKWkffTJ7MslySBWmJF%2FkAW9PhEsy8nAqc4OzKQ0KTmKF6lgwtsBB0muGPpHSbl33o83GgYd790TOYGfaIvCUnWXOBj5MG2hC7hOd%2FbFJBRRgEVEztkYObZBqjkoz8Ru1UHZiEDApq2PdjUaXIpSL7t27zAO1payz3o9RCUYCdK6QbMDMAJT455AmOnBu5qW&X-Amz-Signature=3b4b84a474032b973cf58aa53d9da87a0e6ca66c068299fc196021cd9f37be3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

