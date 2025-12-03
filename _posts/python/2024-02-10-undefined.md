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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4YAZK7Z%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T025017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDabdGzVoVg3ucxSyj%2F8qwFE2h6MRN%2B3u0WFQ7aY1XR6AIhAOwm%2FvxnItWDWxFsK0c%2BLuNlNl49iF3yCFd0TTl6%2BVorKv8DCCIQABoMNjM3NDIzMTgzODA1IgzrW8%2Bs8emulIfXc%2Fgq3APT0G76dH2gazIN5H%2BXrxFsNOF50rITqDNHEXXsaGbjsb5rY7Yszj%2BPbrFLuSx2ZNzeud0Tyq59pZjTchcYJH3Ahcy%2B5a7k%2Bc%2F97viTtobrU52IeGwHbKLH2xy9zsplWPMkXHI%2Fchmb%2FMMWDOC0rg80nPOBu7u9E%2BVkiXovrm%2BVgHj9fbM2zqkRvvf9XgGpGdjjmJBLSthwmHPQaC9%2Bl%2BEwXXLRWBzKKb3aQcfuwF1xti9G%2Fp%2Fbu9sHkcunq2cY7FVucFlWLw5GjH7kk7HtQjMCWWWatqF2ZD7IQaXEZAF1q8qfD9HFxFGY6DtPytiIuNC44vtEO6lzO1eDHKO2J9vKZfkJnhntUOOR2VwP9ATOoz8iVR9nTaa3JcvwL5iFVOqmA54LNQOp6HvML6qSaRL6PHK2hq%2FAhCQSTCEBceNGWtggBo%2Bj0LZMkTxbKJZ%2FNVnghqjGN3eRIc8DvP7sC0FAZ8j1ElOi%2Ftc01OymW9971JMgXHVG8jwBRHpxxfoVUCfBkE94Ry1SRA9swG%2BiGNlMjIpBqNNJITWlvdrP8gLEoa76CY5DSj1AxKh9SzZpFTmMtOz8XVUzUji0%2Bj78f0elov8VIXexo0nzE2JELngXji5pwIY1kQ6R0Gt7gzD2lb7JBjqkASYYBicnalnWxe85MVirchnmt%2FMYBIu6u8ebFNe2RI9x8whIKhyI0TJOoeVb%2BVJYPB78owO6X9sIUQB509bJaIyNf%2BqbtnG%2Bg72Z3p6KMUYmboCjJ92x5e5Nv9Tn%2Bh0hvPGKVAUW4Y5QcYnR5n7aKm8sE7ucEHFqxyTOinnKWYT4BGEsXTacdS%2FEZxrqsav1sMK%2BP17xOUCVrWtg2v%2Buyw45L2ha&X-Amz-Signature=684769e0258da324cea1f47a23652f2bd7a57b902a8e92ff9040a82b6668d5a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

