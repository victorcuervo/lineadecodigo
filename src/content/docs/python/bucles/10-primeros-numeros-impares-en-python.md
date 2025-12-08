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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AKPVYVH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T101502Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5VvVtWbVO58JgGpPKImyd5jq9EvA1Zk%2FpOnslkXr2ZgIhAOVmTOH0BFlF3%2BzSSzQQSIe5NX1xyNgpGwF9ftyu16GRKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgziEZkU%2FW0s5Kcc5y0q3AOO8K%2BC4sTn7xD60JgLnre2BBeQM9RBYyPYFMxix%2FL%2BUmFX4H5cAsH7hZEjqI5LeNyNzfxzH3GEf2a1om5YOsXokZKkkaEPsFcWtbB7I3qlAzZjnGZjorYw5pgl6PMjaWD51VVdo%2Bxu6MRosfRVuMkodxjTqPBDqZAMgQ2HP71C3lzehGFFdJ8FBdQgAsqALTQZ6q2fXa%2FVDfRUui1yU26MLvFCji%2FNBi98gPdtS%2FlDsZ7MagE9ZO2fku4Gsi4CEMq0cdVcn0ZY33joRhh4cEI05ufhnQMQPWeApUYJo9ho8eyvL37kaAk4Ilmapno4QXK0drg58K0I8Yte1LBfulwxtYDw6Q%2Bz48J91yX4%2FkPy1%2BKnd6fRAxrU9RZ4leBZFoV3kKOh8i1BB%2BcOFBu1jgAW6VeOrcL%2F4Ru6zD%2BX8OrCA33Zp%2B3vOvPA4wxGFjgBAIz8KOI4sw1XT9ZkwOw%2FmM8msk3AwtnHw6abu%2BWfdOmUFGpIhJZzdXanJ2XqTlVEe91q4HlHaiElwOLZ%2FCMQfVi6nTnz5w5UUQldmZEU1KhmP6Q8asQDDRPCftkud5IBHz2Szgoomik0RI%2FiAPHwKcYNTILN4gMRA7AjQK%2Fgy2qqbxMJ2Vl2WA6xa2o9TzC27tnJBjqkAd7gP3iVOp7dxUhhZ3ljed83z8SfLFhlsQXi12z%2Fo6vkz4HfO27u5t7Mm%2Fq6ZSuVBa6DLzSfnNcT8jHPmZga3ligEjINTsM0%2Bmkr2Nfbo4a0eLCH4zUe8zavloIFQz5MgT8mVt52GO5V7Q%2FigmbbrB74Wdk4SxNimrPKQ5uG7X9adQFfvs3xH3eLRS%2BwCeS0z%2BSIUcRJiaYpukIeRWhofVsOylw1&X-Amz-Signature=0bba1a44c666ab11ce2d3408f077d234724eb6b0fbebabb5516fbcbffc59f8da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

