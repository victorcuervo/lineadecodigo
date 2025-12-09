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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655G6CNI6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T015935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICMxvsV6GR%2FGVJsgpnj4xHFE9gCRoWD588y%2BQoi4ymh3AiAjditYRkMle3MBSHnIWu%2FT62dlysWTwgeguRkgzfmkVCqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8QGVfRTFhyPLnJoUKtwDvHdgEQA%2BmW2S1GP7wiMPQ8fXuy09Ernod24w6SmPrKsMfQECv4NvjJkfPGfjMbVdWHCTCWqC%2Ffn0MukFED5Gy7i7Pwv7AL6L5p9aQyeAk9rpK4Y82WvmFD1rbk47ZqE%2FMIxPAkzr%2BDcaJoZRbVbo0IxBCaTMybcc7DRuzUcbQtN9DorGFlX1xBsr6sTZoei8h%2F2MnPm6beZlgEr8BiLh1GpdsH5BpR%2FmMO2P5mflO2W1VGZXPDVbLL4rBX38qEnVe8B2MRNNUlR%2FX5mMU3d43b2fenWh7f%2Bqjxz9cesFzVPgMmp1yErpVkiYd9JMGujrE%2Bh1ZQNCGosk7JTip7B98F78sYi2qZJjyeom70QEGuWGgaK0tBHMZd7UbdIqUjwndhdI5Sm0uAu6w%2BvVOEbcRu9ewYsELHjrMN7eVhVZnhAvRPJwp200aF0%2BKIJb0e8pVGB1BBSQplcFvxADDjtG4P0wLT58oM8gPo%2B3XH7cdAkqWLmVS8Oz6%2Bw0uZl2AD%2FBzVj9IaWiRsHKMqri7Bp1gzlNgGKSyhMlzN60%2BvnC90QW5W9hFeqYL7YCFQFjxZBxgIuYlc%2FGdKoBksjXIOjyzNcFENPlWDQNFy%2FXF4VU2hnlG1bBwDm4xNYDbLIwl%2BndyQY6pgFoU6QUBL4J43VUBJK6SORcHcjj6nA%2FI8kaFI1iQKJ9%2BILgtP8GPFTQSEF216Zf4RnJNzMuGOnKW%2B8h4ckydr4U5eui3BcUv%2F4GEyNOQfbXGtKuiMmW9awiqC9OTAg82D0sK5204uFVMn7FmnYzoRV5pexmZZ%2BHuJ3Jb5brZPRScxbsSPV6plOr80rcuEG5fe7Ki7FdfAwM3O8TIkMHNGSXTUbbpFVj&X-Amz-Signature=d1e2d5a40fe1821b002f80d8d55585e8ad72b0770a6e50679f12fd05f59d9f86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

