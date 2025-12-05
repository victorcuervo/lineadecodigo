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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCIKWJ4D%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T051851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC4q2xCBMepFr8XuWvb7lsyoJEsMpdkE9fSedIfNL4a6wIgVkjgTmiY6FREqd2W7KO9Jrqxb7NV%2Ftz3lBZ6RDIaleYq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDFTQdUmq1fgLiq3Y%2FCrcA0xFpy3e4d%2BnOmTurvUJHRXwdQp3EJsn8gt6IxFOrq3wI9EAGtj474VJ%2FU7WwpM37p%2B6SclFucn%2FIM5BqQmw4hjDjS6tYfp1RwibNw9Gfo2j3BuQMRg1luLi%2FuNqZAY%2FiZgo%2BGr1WP5ZqfAOwLfIG%2BRWaeTg30%2FgU6vKy15RuxL1pa%2Fbb5ikdty%2Fb86nJrmjG1mgk5M%2BNvMkfHpbgbNDdJ7GYqxmzU1mvpcev7HKe1EcQFAa64IZx%2FGMoDDgk1hQgMNBTAI1piGRZaCenME0P%2FKUJcgguhN8KaNj%2FDwDL7ODqfNVtY7Cm%2BeqLwsbCG1jl6NIbF3XC3zUKtO66mq58y3%2FAYh46Dwv6%2FJS3vYsFE4QYAPhp2iX3zbVYWPybogq3hLzTcVtdrOgqfJWZ%2BLyGbum8SD1AuremnKxwKRiA6Fk3x3hEIujNs5yMMLzHxyz4Iev5vmlirobMa%2FV5jUlCoBisdZPZWdrUnlQJwDGQmQG57%2BH%2B%2B72J0f9blRnp1qhqy3AiaZU2NxkCqAOMdb0NWUlbv74%2F3j2R1Dbr9dPeYoUtDOHcN9t9XRU2bSNPYjnDUHvolv%2F6%2F%2FuUoJWrRrEEbPCj6tqv1rdOakbYIxEHo7st9EPHl8gBZNZTuhHMLmvyckGOqUBMmgt%2F6pUIxkfNF489cFc9opvztgREJ%2FM8JVNvAXGBkSQfhn%2FT1wczCDaIzCkKPyNh2pC5PCeDgg5Jl%2FMSegD5fAMO%2Bd4p%2BgSIrT6pAr5cH%2FqiN18Taria%2FaBRSpiL3oE6WQ3SCdD7N%2BG1fX%2FOIvN7ubl9bVAZMLOFGnFy%2Bd7JqQAZ1XJmTIQ%2Fr%2F09wnKM%2FjaKXypVR%2BK%2FcXcIRacg%2BLrCGoci5Xo&X-Amz-Signature=222b86dd24ddbf5b1ee449809774c83d7f5d1945ad6c49450786941f4a6ee81b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

