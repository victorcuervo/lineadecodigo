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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4FGICI7%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T234157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDZvfQlPpb6qPl7Nsu7klXH0tEob7VConBDQ0wpG9CyJQIhAKnoMWM4t6XoeqmsrGzfMvuKVtrgr7NU%2FPDjeptokNJHKv8DCDgQABoMNjM3NDIzMTgzODA1IgzVWI4gx4Pd381aeR0q3APEhPfatgGWIpe4zws6AB20LpczwYwrXqHY5sy77BMZ%2BrYwmKQGQaBR64kxuOTDsMf8HG3VU%2B5MUlsUfc5Sl9c9SZv%2BRMn9lgylvl0FSIbqTu81DF3ynFjyepI6cT4uk9ZNen9jZ9T4lJZSTm6MNYhafbRI4lFpSYF84KMTtqHPQ8UNxmgneE6XQJEHlcU%2B7SAUvVn%2BbwvbNOCqHiQ%2F7UZGpBi6IV6%2FLtssqZpXsnIlh7QSj5Tcu3zlM4r7TZrWtW2hayVqgxb5Y3TIsP6fYVwEVS2NNmWJRfKkzMSjG5eieCmPTiA04Q4b6WzYbUAX9slVt6EbZnLD9ezLDecgDI7LAGXcE6Fp3T%2Btlwk9IoLy8usTYFIFywCAXemD0Zc2KyfjgQ6MWCpBTztKyEiMPaxKVfD3BmJIuyIwODXAaGDUEdmdFOEHP1flJqLiiV7Gk8h4V0yN%2Fd%2Fq7By046XxX27ox7ylnHvYMaCowLOwtob8rlPOls0vjvet7MWwYn3Gizn0xNZqJuCfQEdSfpTHBPVy5QbDcoOg5M9B0mEgpEA1bBJ76vlKQ8MWIIqUHCjiF06FPVpXiJ9WcKDo3PQUz819Cic1GjtnzxScl3laqpSBXzOFF73621m%2FwrXnKjD4%2BMLJBjqkATYwXU%2BbQQUwYyuk1DI0uqgeKXU6qBxum5NZBuYkWrLit3497PeO%2FfVsRg6Oy5Cc7gg48DI0TAaCG4pPhhD%2B90ZExhFTmuFrN06J2zj1EEM9pFAfn%2Fcbn%2FZgCjsohf4dBUEStKUl9CbuCQiWUW3%2F8OxEEoAgLucdSmz1CW5mAAE%2B9I3GV1hEdR23VG1jasIR9enGnPvhhO8KxEJfamODFxHECdM2&X-Amz-Signature=da033e2e1739bd1ae988deeef302411b86589afb21da51545a9786bafed1c0a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

