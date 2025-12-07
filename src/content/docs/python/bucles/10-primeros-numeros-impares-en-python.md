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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YEFR5TYQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T150049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFOsE3rqUNYrct3Zpb%2Froh163%2BbjG77qYy%2FNY587ODHBAiEAjtLAUVw5gYsV27YQcMFyM7a5eyTEcmjRf%2FC2HRRPkyYqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIocm3zsQF1nN1%2FS5CrcA%2FFqKQqnilj8rNCmedfykXSzqQmx8WCex78%2FoTYObH5cS2%2BGo4qJLqJVvGd0MRpNC4Sp78q3AKDzoOt7v1NLnmlgbByp%2B%2FydAyHTZM1RFifH21YR3CSqZ%2B66jaKZnBgZqHw5NiWftAG6eOTtZy6L9Z3CVDD2bDTomu7s1XSaTFRCouritbw6YT8U%2FOPgc750IDb9G%2BkY%2BA1eGobU4DhQD6oCoD6ClAOj7ssvwho%2BZ9ONVo%2FgMVHQVfehEYQc0aT5M7LZynQGEexuQIWVQa5KrRQbTXFES%2BkSDEMUE8g5BJ1mDfWvm26LqCOAmeGYtjqbrFLULRU2ARSfERo7CJDL3R9sB8c2HyO8P2udLdLJ10G1h7heek9g22f9ddrdBCAD8pTUQ19GybvN4dRIiHhD9CBWhwe2bzyRh0RXtUNbaFvty%2Ffbr3C9PlRn3KEX6BuDEvCWFMZtZ1PLikVrcVfRImYpKrtiPkuc37%2BvJwFzEYnX02XDqiUjQyhx4JyIzjHbq2ht6VhGeb1EOxEx3eT85rkRIOyWn4ij2Yp9D0rAzZ5s2mBNyeS2t0lJBF3gYR7mnOiD3zbDzIyrXTbh24%2FooB%2B9UeC%2B2ni%2BaBzmYLSGC2a8VlTHJ79jNtea1wl6MMqa1ckGOqUBGwPebynm7fEJUUk0ysCN9EqMCBnazrClsVMx%2Fi4SPu3aT0IixuFcvp9myJ4SKeaC08BOmAyVJPdnT9OUK9n5h9E%2FYg3ug16%2FdvKZRc0XXp%2B5usJz73XLA6gd4r48sMjp0TNjiL%2FFx4bZxxMoYtsTF4KZDY51KFOLBftJF%2FpIltLdyUfWWEEhKt3v0CsoWqHyXUzzCY8J2mJLECQBOId0%2B2KaizqT&X-Amz-Signature=2ed5a338d59e65b269ca4d441f5f0c422f18c7a3b3eadb4df31677ee35061ab9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

