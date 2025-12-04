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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YCRCB4BY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T130742Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCvVyAdQBhN7GnjUUBbmCg6VVQrAT52DdFQlfsS8ZXTEwIhALhVIEXGDvW1567iVJ%2B3742ezz8ldcjpKLIvBCW0SACoKv8DCEYQABoMNjM3NDIzMTgzODA1IgzvGo5vwtuaVrUFyoMq3APgdVUYuP1yfmahPPHk0gGJlCYeWnA%2FJow3ye6qsy2GtPirUXaC015o73mJzY6Kt3MJ4ELf5xYPRnazlRLT5WC%2B0gwJ98K1GMUSXdQ%2FFhmCjnb4OOTRzEpMtL7A08M2XGOs%2BUEa8sxsT4Q19UcFRBysHenxjZQTqbPhB1lEIHdbb7PWtq1ChekkRr7rfN9WuahN1JZxHrMWO8Hb%2B7lyLzFksMNUPJCX1U1Vl1JtOAU%2FyKYakhw5dWwn2DsRGR6phKCVryA6PSMKV5Xld2gCp1WQRbZrxIsqtDOOFAi0HBTX8myBLxdp5jwa3g3W9CyK3rUNYMHLcsoIsqrM3BHnf2vMW6SstCEOx1wRZqKjFwINzvKyRhoL6Woqh04bFG8Jq87Jz8pwydr90GLBm%2FRq%2Fz22KBqS9VAdW91A%2B060prur9tgmEPTDHvcFwr6Byb71VGse7%2BRv8RnAu6NDsdxNZkA2zzEEOTv7pDW57fI0LUJ0SLbLvlyeDM8cXGUYjw3YPG3fGFdsu8OrwRi%2BmqJx5uqqE5ZT0Z31EGRUDzVPm9jXieBqRd7YirzNQxClTLQw6x3gW0vtILHnd6qXLNtx2%2FB2Koy3Km1DP4TkuVlH0I%2FL81pl4ita2ub0yJsHKTDig8bJBjqkAW%2B2W93lAfj9D9ShZvRA6bU%2Fz3v5zraj9LQ316lfP3UUqUsJ2rVTSIYa66ZBo8d%2B2r2dHi3J3UY%2FBscoraBwF5rE2yJucfsbKEtPssO0lLcum3YNl8%2FufUJySNAUjqwfzMMA3OBtsduX3g1dYlz0iOYFJ61ACDNBhTfbJa%2Fye3e4EwhQk5jlZKtcK%2FsB2qj6D4zda3F1FNLY7tKYgSmTbeEXCCGd&X-Amz-Signature=ea97ce1c937105a747c5052deb4413c71f43dd6673f9620ccb3ae4d463aa7e5f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

