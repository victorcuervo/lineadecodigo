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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFBT3T7Z%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T213415Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGYlTr9rs0DBEVHatPL%2Bh5ucOz6E91nIhI982EXHsb6BAiEApGNtdyuKjbYy88t8er8pyNLyj4u7N3B%2Fam9UjFXx3gYq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDF9%2BGIhtpm%2BDUA1dpircA6q6WL48XEoASH9WN%2FcAMFMsFdaT1EkFw7hwuw9xhrfr9leu3uDjRvf7rLCHD7ihZNL3%2BYCaCQ3kfjiejhFZJ4f4wpbT3%2Ft2HJubPX8FAbw6aZ7%2B3BblNTORs4gZenMgxmVxdQDn%2Fn%2F0NjOGXRoDoyqlyY0guSwYcb04B3kHNe3NWD1uIwRRjtpMB2eSyDzbCDrqtU5uiwPl5Yiw2XJuG%2BfaBm7in16dSKcXlGInMutEAfkGt2luPPQ3RnwBrTeafxdlagVWEItNMRh3rR1OjsgwcxBc7Fdqx%2B6qEiNZIQkJy7inzSIQh5srXKluuJnaLwX%2FMdXO%2B0JglXNAaCh%2BYwRG69YaUrKfSCg3Mq3WtdT2QvO8XsLLy0H2G557tXmJfvHOQGf%2BMwVfq3n3cFcDFNNTLHNYWL56onrZFN%2FCXZTAcxbZpHBGnaWbw3n4g6MNZyKTPmJqA2deDuJAJws%2BKpGcKuq9GOUaCcUZyr%2FB%2FotihgqMSGnDDkCR%2B%2FjKO8vo1R4%2BPwpNc8TvJA6zsWHAWnKnlEbqklfZJ%2F01PC%2BY9QYYiP4FlS2ijxgGe1nntCMMa9%2FsedEp6Jm8QV9xPlPBTIlMKdx2waIWiU2yQeDN26GKj10%2FWRA%2FSKdsViLkMPKTzckGOqUBe%2FIBfNA1wy%2B2M7619K8qLi8I2NosUhqvwpsnGGKZ4kx7rTKUNbrJ%2BBdzcm8wY3%2FSFEjROQ7afF%2BgIb71Se28lomkO50WJ0EGu057uvjyYTqpCjumOFlCUTRC%2BN4QvykxxR8vQI%2BGC7o4FxTkrqPBWSyKkd9sb0hNDiLCRpKYorQkr3TF9W3eTbh%2BFhpy1weTW9zMrYxWr%2BQJRbFm594GQys7g4Dw&X-Amz-Signature=f11f4df99137bd45954a733c550987462e97c7e4e6e9a04a4d125e25baa2768a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

