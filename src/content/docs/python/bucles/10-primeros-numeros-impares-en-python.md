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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5IEC7OY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T064701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQQYbBZVeR4SGjcZvujQ6YNH5Z5mLrtaFpIIZowW9tvgIhAKy7SVcLszcI56GfsND9S%2BHNIgcAC5fvGs8oeVmzPuzjKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoQpg6H7LgWPdiGAkq3AOWoQk2%2FKo%2B7WlVQ28kBaeMl3stDdkrAy0%2FKl9qAB6guVf5G98k%2FFs4Gc3IKrjfxF96akKEx6ng5dpoL%2BRaQ0IPcqY7ajXsDUT7skJ0yp7NSE8RJ5tkod8GaRG%2Fs0JELKqTb84N76AGbqY%2FGBr%2BHMuX%2B3NvwlNXyN2SESl1M4aTV4kMemxsLxkOFjhvI%2FAnYMj5KDmfm2oyMn2hPdZs%2BP1CUDofX35orjTAmwOK5G4OdCY7L8X483KJ%2B6xLyaSgjbrBw6wzFh0yfLLnJxbrPnMvHjvKdBNN3KZ2BWmZnDanlSRI16fqTG2BP7Mqwm%2FekSpmMZH391oh4nrZ1UBfqEcBBHH11V8CgPlq4%2BGm59350PJzZ0C%2BCzBLYsgF6GOX%2Bv3C4b4HjhZ6douRuuQA%2FUpmWw%2FVNfN95uj9NuPnyuFNBnqA9xCYh8xl%2F9HslhNRuhx17BZUzJSVwr5C%2F7Oiqz%2FJvMFeR%2BY56Pgs38%2BwWpBvqzC2vVQcx3xj6SeI2wAS5rA1IqYZX0k8N6l5MDW9tIRZ1vhgnqM4%2F%2B1WZYdT%2FZCchtLHrytcNstHz64PoddUwFJ4ullfQ9Bnqh8frqVE5B0XB6%2Fi46QI3o89YN46nfcI1ixmsBknPjWoztvcxTClh9%2FJBjqkAXAWpoz4KsjRFfVNkqZGRK9VvXGWtgSrqMBUug6ntEhE6HLgq3qdqEu2ePgJ6Zhy4YUg7K5fYKjAN%2F6byMto1u8qgyDAqYHiYneBsH8QzpS%2BAmUjaOX6eCyfp8u%2B6vwNS9BGW%2FQES9obo%2FuHcIxWmfbuSz8zmaw8s%2FQMtx1%2F0zMLqpRr2IuIzDnJBmdfDJySz032po%2FS9RLPMij0bVsJWpNfiTCZ&X-Amz-Signature=31c66197e043321357d4c907da1488c847b846f3de00a6b0a69b2ce89f7e19e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

