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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6TB4U2T%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T063016Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQCYlmW6Bk4JBSdUSVbpuYAmFB0KE7Wi78f37VdAh%2FutJwIgQAd7AwC6jJfnc5mTqWEy%2FwVqQ8E%2FZSpNGxae9NF2YwUq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDOTOcQyx40%2BRGSVfCircA%2Bwy%2Bn1SqfuQoYc3nFJ1HdE8o9dikbL42KdADJG%2BF5te2Z3it3VHGkz0x3Fl3qktEKfxTV%2F4qsSus8lboyJIzoafZH46ZJw7RWRhfU0%2F5MGEpqUyYgiQbSZPrwWZ72GuQYRmvv8i0JMqDIj7aj8e8WZ%2FzPmz1vbJgPQu26iNCVh5IAxluhDXqmJtzxxoxNEZbbvYjqnEuTkOwfJif0%2FP8x%2FqIrqP5KykbX11DQ9tnVj2H%2B5nO%2FMZgWYS3QagM2YpNgS7pvIUDKcBsARmkNgJJJ88iiBiBnazLXisD5UbnhcAvoFZSNVgrV%2BMpa1ajFMkQpN%2F6t6JZU5iYzM5o1vHjJUSk9mmgQ5thKlmlYBqAE%2BApgM5VEnO4rCNBepiiKb4DQkfduB%2FXOfTr%2Bs%2Ftn%2BREWsHt7nRRJBqK%2FQca9lu0lnDdCW1xEsjiLUgPyFwvN5uN6x71NzdmX%2FAbBZqPEWD7QZ5F7Dy3%2FsyHsFpp9Du94KA%2B8LosoRaB6mdKlTFVTvyVfiuksHMgjRBtYGXqtAALAuHJWhttpS9g0LXehAzVIM4An3Jdv6TE%2BUTCglChtcAfO6bfs7hiwgDtzXBVmn4vBdYx1KfMy2bBZVW3KvXJRpex27QKjYTuubAXzkTMLrLxMkGOqUB6yW8CLunJl3FtdH9K7v95SzTD376m6auEtvPdgOMe2TdLlFe8W3W%2Bb%2B0iY7tcnXKbBPA0LxYD%2FI67z7fPV01qtXk6Q7BIgSaR3ORJ3HL2reuFPvMQLqpWVyAdR2R3mhIx2sAvAP6JbgaBrvhzv4a4qRFzsld%2F2l1ic9NuglnZh%2FpXieXJDO12p6tbBQ8%2F5CE6qvYZxkpYbb%2FDwr7oDuWRXJ8blk0&X-Amz-Signature=b96ea77e5443e1c2e27cfa94151e131475ec7627354c4c21189e6e1715e044ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

