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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VXC7JBI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T094325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCI10tEDGKH2hkKcHZCCDfxU4HsXPAp%2F%2BhaIPI2aeQUGQIgEdjgjuweg2CvQsoXn%2B8zphd5bU4%2BzXIB4PdhHmMcf8Iq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDCAJR8A1iLZmnWHs6CrcAynP7%2BzyPUVulbXdN27e67l4O%2FcaoGS2MWmd%2BI%2BRdIEfM8hBYIi2OnaD6tqRRgiDonk9zIHRQiKECH22jNSnuqUP8NbNo9Ae0MJnOqtLxkuh97YgKgl5%2Bm0FEZMOaYejwg69OreJe2j%2FIbyqQbFUYTx%2B82U%2Fm1vg3rlZlgRMZDtO%2FRNq4kcmkVouvEqitgWdxKdWI83AmSWoVzHPrV7w52fWuVXGlmiMxF6mhEaTEmK1nVU6HxjcBTbMn0S0Yd1UlzrcwTLJf%2Bg8qKzrhDfPtGIM4AU8lDBiOZqTSs44HkJ7cfg%2F6XjX1M7H9upnzVh0garftNcvwIq8w9%2F1iNrK%2BD9de70Coukh69Q0K%2BgGHm1AE%2BWLuYa9XI1uaxHOKFcGnMI1g8R94cKcXZGGbiLBkglmGeO2lIfaNkw69bu7VfVNsz2T5ZjoBcG91oAxUBQpAwuVwuK5THjSL77EhReaSpbBt6dU9o5%2Bzl67u83dD8ojtHGZ%2Bb8jlbXiht1NbocVGxabQRe6QBT%2BVbd6tmo06x7Arf4BbTyRAn4Gur7V3vjICgR0C0q6XDVrB2wbhnHi1RQHO9Bkab81cVsjb07hXCr6No984%2BaD1hyUI18tYiRrQDvEzvA4t4JcTuh4ML3rz8kGOqUBA4508FFwuvLBarCn7AW4a137QEo3fqCHofWzwaLrBa2m4hdF62sSdh7DwnHbd5aO73AaXKPDx4EjsA7R81bYeqDHJbhbNyBs2s95zQBkVlCxrT%2BKmf05SbOyZSvJKxhNtoDGlnxeqFNrGXf6WURFdJ5QY%2BwUPaVbeAGnJXw%2FhsrsfvFiTAbzphi58v9u8jcuWEgC3clLl051yYkrqqCqB8CRbeZd&X-Amz-Signature=5e0a7042671a6c0469697dab38265aa4fa5ad2e4f36bcc0b16148ae41c538258&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

