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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3ASUCMM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T091540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZHgInJu1BVMlhObYQyfocpK5Eps1zr8v%2FOw8rQLNyeAiBhJCb6ekPji9O5pE%2FKEAmepbB3mcFl%2FGKhZl67AUI%2Bdyr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMoX8cQWSWxdI8ILHUKtwDDGk1t0nG%2BLFlMx6T2yx5WBJDa7ZopFEAiURGvWNrNlr5%2Fscj2nAiYdkEgG755rIAXD5ruNNNMzmBPlS%2Fjj1lp5B%2BWD2wN%2FiY805YlYhrCqNBPtXutgbdlCuq7lBn8omMXWsmQlYgun4QouGe9ZiIv1aGb%2Fq6LVGN4Pk07BhmQAZGT%2B8xZoX1QCeSFjiOJPZuBsfw6%2F%2BPUA6jKNHxw2y8yKiSYHOi4CnILd6uS978Z%2FvZUEpbjytTUEmi5MzD5e0S6kWYRjECQF9AiRhduYaZ9r3tdIedqznCvSG1HRCcu25AoduAXu3mq%2B2d8464xlk4YxL2ophmm%2F8IDtJyfmeIGOrmeGNq6jx%2BdrntJxZ2QE4ir3PXaT9qsWrVOvrb%2BCMyNDUuYd0pKb7ylYvXm2pKriftE%2BUmzj9iK4j2iMp2RK%2FwXcx65Miv9xeqyADzNekcUoAmBY8W6KbSGMYIVFtem8gGthkEl7rjPRib1qdSw0FtQElzqFK%2BiY77QHkn7OAA%2FuJ49GfANy2NpUsKnodNeGNGb96o4GURjBifFpmGS8bR2uZcNXRHOrcFfpHnTJFwsd5RnNbs2XsNQMthJabgRU5iSQBk%2FxsUUzbollupdWA3hgi61uL%2FQ65rZuQw6LzPyQY6pgF%2Bpqcj0%2BYLVKwxmtcP6tNaSFOHKav8kpIrd6XBjKNpzVtC%2F34OchHugnTG4sYOjEiQOmxDCIjPzswjT4knaqG0VFH1DGWWGKLsEl6tpeYW4%2FF5FimppihNeUryPAYsBcQup3m82Exs4f%2FDsye7OcBwaBLC81Odt4Y%2B%2FqxQ%2FQsdo%2FR7%2Bgq4taBdvDrcjqP0Cu9frdKcU%2FlBPS%2FVUFNmCTDxIxUqFtex&X-Amz-Signature=4f11e6a2bf6708d1e321aa767fb794b2cc06bdae346b2f33602c97d6b9e061a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

