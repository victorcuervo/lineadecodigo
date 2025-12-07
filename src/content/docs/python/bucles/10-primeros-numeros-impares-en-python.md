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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU4MCBTK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T034700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHlr4v5Kk92KDZhoPaZFtRXcZRFiA8zo1WZ19KXI2I5wAiAd0dVlzhciQiIbxd5jvYbxiBBXnMBKLhJirhBl%2F2KWbyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMC12EURV7FNzuemErKtwDoSaT%2BRqu5DnVtC%2BvD9C1d3Sw7KP3YYgGcNV7abzu0TJ%2B5fyz0pnjd9LJ6DYFpR7ip6O2%2BecIY3JBrp2UAyGJPXIPJXc4NjqudzX51Usz2141z%2B3K1y%2BHKdwij59UEl%2FVeiUAmQya1CRyp0sMJc3jJMONyqC%2B%2FkTHLaE00hi4AYlscFm%2BQwRzUJlNC0s0jzeH0DoBgsuRO4JIoMiNVTEcAhyEj2PaFuZU8QPpFc5XHqklkHOsdxwtq7g5KRNB8wOEhXFrd83wZ6iaqN6rP0KbF%2FPisvhXnfd8iXoM7N%2BcJqD8gtePVSFVUqo3yCDCJsLwhRYKddwLaMbf1zkGmve%2BWdkhsQs6bMU3nQn39zQ4ltiL%2FPubcrTN%2Blk1urTPo8Ef6TC5NsqsMuJEiqw2tRcjXFtviVAwT9HzCuSzY%2F4UVWj%2FOFpe61%2Bw%2FI2betOsXyWI%2B%2FCO1N%2FILFD84URUKE1xR8WFyK9NIzAm53pT3n%2B%2FTyB6gSwYD8vhT7wvV03LS6YJ%2BWP9iPEypSafVW6%2BBnVfu%2FwOkukBHpJJaJdhrGvY7ZDpK72qQnEbZ76s6gCd5iVpsi2yiOb%2FqtQu722GbvweeH8B5e%2F2W%2BBmM%2F%2FI%2BEWd3wiF4VTpEXHsbxPUFiIwkP3SyQY6pgHqFDSmgTcutVk%2BkQOMFmZ%2B%2FCTKiytfDQGzKupgZxuQkn3OfBvC8ZDhqHRQMoxpZm4zYY2fdpjA%2BCuS2PKTYnM%2F%2FOZM34lGw%2BepBk%2BbZGbOplNK%2FcxzZXXSBE%2BkzggjMZXi1uCpMCeSA1xslwoD5lb5J7Yp%2F%2BfHstGDbTOP025zPX60YqKB2HQo%2BjUjQ4n5COrR7EylR9fWg5LzcgeBWtjTtowm3mD%2F&X-Amz-Signature=752c2f270dbc0714a8cf24f0a44becc7a6f0751960a1924110908f906be70d41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

