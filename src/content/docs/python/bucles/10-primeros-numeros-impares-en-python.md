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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBX7FC23%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T211102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6UcQUxVdxjyDdTx6h8c9fgZPJhowHfgZsKw3MGpP3lgIgU%2BWlAd%2BQkPFqFai2oLXqAmA5O6ZdjN%2B9yovoDhm1ihAq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDBfCw9FAI3Mvlhvj3ircA7Xf06pq4jSnnWtG3TXp2uy%2FPwTlO7ftYcgo%2BxHIE%2BKWZnQ%2F7M37zH8zqVu3BFv6fGTPNzwYCoERm42z%2BRXRK9JSo6Gq3987aDesIzJv6fRmvy3vM6dHNt%2BnFwiD1zu2cVhxvUImQnRbhlpEyfPnDgBkU4kXdFlaa5n%2F6w%2BNr%2FK2551bG20aEwnow90LugNivLm4q1DZ0nwu85zX2j78fkmNVn%2BldlVnAvPeFZY6joctshozIvchxbJ7qwc3ketGc%2BY68zWlghymQ3dDk6yAxADryXAnnUoWv%2FTgboHlF9XexJLI0ltZxAnSulKLRPtWs1K9N3jsqBJ2X%2B1v%2BEloGquIkOujYa1zj1qTmYbzN12eyh1aGzP15eUUehHg9293ZL5vxkKz2ulOAYU%2Fb3h4y5qNQNO6D870TaQt85GQGZ4llRTR6ljOmRfuD7oyWZzUm3dd6YkglmrhcAC%2FAzAk4KrvYDqDY0oJAuTtwtyTuBd8zNDhc9jdXA4YTfXoKcQsdDnnY0snNaLC2vNPpr4E6OEQrbOXmutQh0jHJ9tCKwpJ73VW2QRvMlKTWFOccplsBGzUAOM5UbgAHlUzpivdfPNbqfJO9%2FMiz89WiKuw00y7%2FbdOiaLXgGAyaY7FMNn%2FzMkGOqUBnkzI%2BjcKEANw%2FbvRhPKgaPqWy8feWa7%2B%2FAYsJPLrxK41Oj2HPDlEtmmwgCm6c19%2FfRUig1AsN5nyWpkzFsZkrcakd241iXvcPwob9rWlAhjA%2F0tSWKiMCA%2BxzevIgXrRrq19OBlUi3GmYyHCFvRzwqdEHNKQUzfIYGDZRbuYoZp9bVTcY2bThrtnY1KT7%2B7%2Fo0PZAfDD8FE8O0UViFADDEstaSkt&X-Amz-Signature=db037ff1dd19797478ab64d7503f7e46fe917dfdcc9b4b9430761d86785e8850&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

