---
title: 10 primeros números impares en Python
description: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
lastUpdated: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT6RGP56%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T142445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDonyy0ZCrwNHw7E8t9brvHrbl4trQ9zGgFUEXmLCWsyQIhAKx4msMPHVvuf%2F74QymJiDIuSX2kywelgdMv%2Bk%2FNR37vKv8DCEcQABoMNjM3NDIzMTgzODA1Igx4SeALpSrKf%2Fmdjogq3ANbP4ocpemDsxdfEUkGCH5QmSs1IK9QgC3pvajX2YDv20GVa2FzIHDYL0C%2BV8wYtBIpJ%2Ff8MErFysfPRsJotxKiEs4KIb8b1W4hUZKr0Eiab2XAs6HJdTYoy76EeTzxhcDrrPZ%2Bf8GdC78n87XP1TFlTUvUi968NDTcxhwILnTiqKrUbjw9W3RTdxyajE6Sa4xAXe3vR8YigtoS6QzLNnMf5eETJYQs2b54Zk8gvqqYL2U49dc0JWejcxwOHGzfBbiEEm%2F0dCKfDNdxSSkfjIlymxd9ApWWV4qG%2FdGXnM8MJPX3u4odpYV3tJG4oebcUerrKys777ikGMvnb9tXw%2Fk7nCKYwAxp6zQcOZllWNYyOlNz63w5O7I3zXkSBQQ8QWLfUazN4kAilLgSnPNu3elE1DsyodZJOz5%2F8ftzd7j7OBmMojUeWV03jdKOLzrC%2FSeffDFLIn%2FEkdwjplXIqC9CLqQB7YV0tAhAMdZLbZ0O5q1kKQGeLT3Hdr87DZ9PnS21kfP0U6THw%2FtJ4l8CD27b5teU7VKB2qUWgSGJDbM0Nw1YyuwAMfUHb0bSu0LZ1LfqUXpT8QmbJbWAZxFZk44F7ssXh%2Fs52ptDyNTDF14%2Fl8g4TLG8PVNGUHTd0DDoocbJBjqkAaAsmm1TF5feW%2Fh2HaHEO7FyX5h9CuZNQg5zWLzId1D%2BlFVX5rSahdLuLdVfC1r1SqgCqHgiN3ciF7N678PGg3SJlahxQUQN0L7Hxo4oozAOzJEIwdA3v7aJqQYoN8qnv5gazbVtxT0nXQ4U2TA0wOK%2BGXqF80KtsuCDt3sI1GqDWI8Scam4%2Bn%2F4mawbeppmNDGU5Rcdb67t5jGghuqWG0FnA0Bm&X-Amz-Signature=888c81aabb6db4d9ce3ff3b6138129a6ded2e4f43ebee46c463b0ed1fd1c296f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

