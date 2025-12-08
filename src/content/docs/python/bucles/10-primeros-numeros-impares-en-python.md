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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PAWWR4U%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T032838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCCcKu3g1C5EsKiaDbiAYpIgtGzDiiySE2iUXBlrrWl5gIgapsCtJqYXx%2F8HQtDfGJ%2Bn5ytQA7Opnl8JXNP7DTKQXQqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPaOuFaau%2B6h3F3VYSrcA4ksIxrk4edHUfSAsClwdtYYivM5RhwV%2FuwsNoTkSBKB2iisZMYwwtDyT6t9DkxDECB5wKKihqLlTPEOpS328rWRS8BJFNU2JPg4tySbQyX%2FTKuKqVkOXcJRPo3HHDTza1o%2B3zfJjSzib9h0eljrCGGK3QwgDB18GMC8WXXVPt%2BGDP2PaTSwl3kyGelrn1vlvAsR3IppioSW4dX%2B0fhUfZNB4mhacYb2COrFmC2cqI%2BBENZc1L8uz6fVloWP7wz3UxRByVINMJuscYJGAcxZPx03lxjhg7MNgWUUuNfP2mI%2BRF0K0EV%2FPjIEQ5JLZPrH6BuMrPvmSX0gszBC1%2BLThooElcHh13ov%2Fix5d0gisQmcOgLvBgHWJ0ysx0tnvS8tx%2B4mJ2kOws2Lqe3i%2BB86p7%2BW84xHQBVqYD5SvjjZZtKuPHrhCzI8B3wZxZpY6ws%2Fz0W9ZFJ26FWTSAUhsU1uSvFsJUNyu3XWh07mJSOZj2fuosICsHl%2BEivk6QmqU2oavi1qhyguFw2KQfoR0E%2Bv8DU%2FJ5oas8rWJ7wkTGRK9iWH%2BXJTH6JNn31YEtH4YdQBpaXn6HCQLLdKnuca0sF45eaOXmo07w94w0C5jgbDXo8zdPLuDTndU3jj7IzYMJ3u2MkGOqUBrjg1JTQVYKuq%2BUOyurT67O%2BhvFp8UZe9GqTdYxLwuAcjX8p8yJEuFNnvKSCAzkVtCyqBHky3e6MtrvMP9KpkLy7j0Iyt7W2Po65%2ByVTEbZp5xMKsEnJrLpG1PfXBa1Rcnuw3JQAHmifG39E29wWhX2wGu5XaHGa4H39SlXWdkPmB%2BC1KU86v92i9IoMzyvm4ci8DfIxbIzOf0DkRLRFBv1eVCfve&X-Amz-Signature=f0b312ffd90c4d14a246609c92896deed7a1b3a8ad072f03abd5edf0fae9bce8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

