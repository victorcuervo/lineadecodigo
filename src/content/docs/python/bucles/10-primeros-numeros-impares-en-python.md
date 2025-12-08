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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663E2B5X2D%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T191759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoIaZw05aXg8qaPNlx7cN%2Ba103b%2Fsn4wuguC5%2BM4NS3wIgASX%2F3SFqeGxiFnf5M4hcH9CNdZYwZxTyP0KMEP7%2Fv2oqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNJPgO78pB80Bce9IyrcAxgva8LaaeTZjpPFGBNC7jFTaeK9iZL87kO9YUEuOZ1R6R5tvLeJ1hPH%2FTN40rt7Gn%2FLgVcv%2Bq0tVqQML8S%2FyHJP8HMLbv5%2BgBZPeAQXrZGk48wF%2BW4UVvSI23e61lQt0%2Bwq7D8DRD9lJqRjR%2BsZZUR2%2BfM0aQFz8p6FcI70tip2%2FZUE0M8rJnKncm%2BqOinRbep9U9sLEkjDmEpWGd8c0a8bI2S00tW%2B%2BHLtVyWBsGl%2FCE1otTMsJxXBynkptvbBkbc2gan6yXrymKqTXbCUEXJz3BOfHcK1ysJmznIrschluWiOSWq8GbsSTUlgCcK0YTLyd21J%2B5Y1ub12tbmMJDY9n%2BNoozUJ4Li8%2BEGZC4PDLSdiudHunvqwpL7zr7FFdyy9MZXtICqDLYzWSiVA4SIdjW0YVa2EVT70sLWZUClThFG1p8%2BaaVHMfhWSFZQp0MVUfsqaAl5wO%2FVTaS4MMaGtjn4gD8ML6GstjBWucM52P0QdP5ty39nQw8L7XsW5dDFzwvlZq2JdJoeFUCi9QqmYrS8VoJC9Bu63lMKg%2FjkR6Z6DQOWrCaZXMX%2B5ckJphORVjxQcCfn6qsoNmb%2B5a6DlZvIUyB2YTF6rYXGqdnOGGU3jXtIo0z2PhEv6MOi03MkGOqUBcIBztqyZB8iP%2BRW6dFc%2BH0CcQ8MN03ZaqkatjY8XkP5d%2F1bVefUK6eauay2Ss6k2bDvbdwLbE7goZzx%2BHkEHPMAdS0rvh0mM2DMvwGpdULj7Qtoc7uw6OalOvaF9TJK8yWEdU0qTKolc3LW1hhC30KXxdhkDEM68kSkB0j1k%2F5g64r4Re%2BKZZucrD6d0%2FijvFyIZOg4PGGJjHz227DwntOec%2B1D%2F&X-Amz-Signature=3f1f1133cf33608b8d66c7386cd0b6c2e0e414e7cf80207c94bb82b97533ab92&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

