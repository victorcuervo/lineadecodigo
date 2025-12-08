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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XLDNVOJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T234843Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEKbPpcJpkILUg%2BiRbsZKpTWumCQW1I6ybE5b2zGzKILAiBzCgeKXp7Qb%2FE%2FccLhhdXs5tWtOPbHzPt1dR%2B2o2ruEiqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMvmqkcM7jBxwd0madKtwDDs7nJjrMN1OH8Vp61nLkYmdA3OR8B9NzIDrvHm8yhm68G2EbGGeo1YQT8KALxQkNW3%2BSggUGgzR4u3rn2IIVlxPAzcozK4rYLn9Bmj0rNadsVT%2B5dc0Zujvgb6PtSeGymAAL0d9vAEA2WyFBX8aCaZO7E04I%2FgeC1VA4Jv17gDHOZPMtJipH3Ln5l%2BfWtP7%2FZAF%2BTcrVVqcWEXPydDPxMwXx7O39WbRTkMtKCbDJimd55aorXEjVUupCSZshudS%2BKVKcbbdjld0vztfsd92PQ3WuktVYiUffSKd2BLRLAc2I4xhW%2BrT%2F44vtLZ8lUOLYgF%2ByBZJV%2F150lU7v%2FomUhufaSOooe8VB82pPSUylZpTq6kCN3BOIN0yUXrHKKCZJUnI3fUffwMVbyEN4dmnZOprgKi1v8OOUDm4sIhnYEPsoU0a5NWQ4ap4BkLTtcyYTiOFbG2cVYDaC9PWtOZ9GnNxjYZc4%2F9Rjn4y7utEatIhYHg%2Fq4EoebjhqbK%2FI8srssZmHjF5o3TTvApTaVZuVyXfPm0CR0Yn3SScV%2Bkh%2F3DosBNNgma8GLu%2Fz%2FB1psb%2BTOPRqUsR1jkFcKXnwcJt5m8x9323BxvFIVxDN19p%2Bara7%2BXcl0z1yTUhpRXIwhsPdyQY6pgEwGewYeLiIeZz%2BLk6tZI%2B5LKqQlrD8we5Eigy6Xxi61fGuEx4CP7rBAFKQcIUe%2F5bTD9Q%2F2dd8LGFeQIBlcZhFBbiaookXIvqNQw8qUM1JLTPXD2JF8Ma%2F%2FP03GUQ7dNPe3Bw0t8yzf%2F7EHPjD7hMOxsceviV%2FMRg9f283h2e3aXffWCA2O0gr3CTF2Jx6EzQ8p%2Ff%2FkOsSdvM%2FFc5zPLD1UcUbF8zh&X-Amz-Signature=f314f4ac6189408eb07a8202416b79e6bffdc93596c67402effb37d9dcb5452b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

