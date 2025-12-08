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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBLSXNCK%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T114049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtcsxNvrKzIF6SC8lD5wwNFiR5Pl30MB7k4T9aTeWV6AIgeA0pXxhhpAfMnwUND9%2BJ%2B7%2B0wkTy%2Bq6qSzXpiShsHc4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFivXobp9YzpTEAvyCrcA68doxu4IxNBcuyQZlXUkhZVbRAj2Mr1c6p1C1GOodAVS30bX0IFog8xJWIQlSziBk7GznuMEoapgYPq44isPNqw8hAMXQSnCLVCfvpDMMyhOOIXeSrvXv7vz6CTa7gHGPyrRNP1EeiVIbPW1exiX%2BaZvoRQTK6s3I5IDe0iDwWtXbJeSEZzuHmHA%2F1Gn7NsFGpgC%2FXrv9onHZMt8M5n9Hq75ZqgC8XvHrkXyMQSJ9XyMUTfFaKHRMwkMCcNbaWYXlgqXy9HMEKV3R6xQ7DROHYn4iiQofefZn9in8tiNYaYUZhH60i8MJRlO7vXu9pTG8Xwzeb1ZoCpsBMEhB4PFMfMjMrXXUZ2y66%2FHn5gGrEer4vCV%2F0Aj3LGwdFxI4RU9jHV5knjl73FaCirrN9elzYn%2B4nDBgIQnu1Bopfb1PesG6fDk7Q5H0uyWhLc6igfhzpDKaeNME4Nxbwhvgoe3vqESVlr9OmT0J0yESnl0s9TsPacy4JIykwOBqU26KwPMH6Eer8ctw6Vh7udo%2F1Ibvl44VQ7%2BQ955DwfpcnQo1smpYCYFHVZ3a5vodCB3NFBCtViuYfmBcSacC8CgGb9GsmCgpmiV2XwJ%2FP1wk8OXQVNeOArjqlP0toI0fMpMPvs2ckGOqUBrykn02cAd0ZCy1D0nY%2FYCamuTrZsXqNzIBjG44rEov6ntqloj9aSxCkqIc4VtFl88oCDUmTWoe9zxb3iLLs47RkIt0eEQQAO4wZLlqnoraEzIev%2FXixuOzRBqxN3%2BjSgGVJe33cRrPMsHlnIFE0W%2B6eS%2BLdS%2Brlp5eONKkWc%2FaKAA%2FmOsavfZQFlzWlyc%2FUgT1f2YmtedKh%2BuozN%2FcngnuIW7%2FBW&X-Amz-Signature=ecb0a5dea7df487e7d679f910a5d2e5433b41013a87c8e5f01a15d3dd901d2d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

