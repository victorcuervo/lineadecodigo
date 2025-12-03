---
title: 10 primeros números impares en Python
description: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
lastupdates: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCFFOEYJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIDSprr6Df01EWHvLvISxFiAr7u%2BxjVMh6iOAnCmDafTvAiEAlYpJ8ThRmpHcavQlrTbllNI3y%2Fn4CmGXXcWM%2FzegAUIq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDEC7CsjzF4aDNYVwgCrcAz5wDKk%2B3gBvnzOaFW9v%2FdmJNZojIwglIw%2BBNPfVbN%2FKeZ5kZ5F6rQkdGKisfst%2BY4wnfKHw%2FqBaPhFoCQt5IIokSwaMvfthCFwZi4IsBmytIt3TzHJvnnn3UUSTyuNGTk5rrO2ifQOG8M3To1%2FOdfTwjKmb%2FjGYnOnYCnJNoKnkFFvstjE3SndU55o7EO%2BAD6eM9BXxNm0OG1qp6YhVJd%2BseQUnq%2BUZXl4LxELQQqShlBdEVE7ZI9sU2wo%2B%2FudhJAPiGo8Ee%2F49wbna%2FRYtlC7UUAOzNDVArlSaCmhGSQGHSElbhDcdJ1BGpQSLh9QNaJo9MAQ%2BqNlQmGwiO40zqCrIIxze0ojqeMJMu3gl3Cl8dShdBWv5Av3Q8sKFI%2B1PNQRJI1hlg%2Fuw7%2Bz%2BxMDfxizcdf5hO9IQAj2ou%2FdYJ50Z1%2BZ3TMkUQOH3eY8kB4klezLNy2wwg88urFgdsdsRiwBI3nLk5ihV8dnUYCJJoTukaxUn150hAyfPKA99eyMpooBIKH8U4CzQpi7OPB8pAvZgXHNtYReMjzNgBbU3FIRoKxP%2FPv7E5bEL9Ngn7CjKfNJqeJhILd%2B1s0YqNQy3U2Q0H0DphlrZMnBR%2F0thD0QFtoezBvdMELfp500nMPGRwskGOqUBaWwZ4Asf5YarHLghFZBmuf1EIICvopKJ0h7aiFf1x831SpHM9qZNAkW2WA%2F2D5DvqTZRCXTHFRTrTNKrdYginDzu5ol882pvSQo11X1Djx2%2FVs%2Baai%2FSDZ%2FdHFhqhGTHk8R%2FzBXM6QTtXyI4UQt43sbsVyN21uSKlk6RupfM5I0k2TZaQ4cpqfEKy7%2F5kdhZwvprVYbiHfPKI3vF2YETYUaZU6hg&X-Amz-Signature=0f2f1fb32bfd44f5d00db6ed92e2391e17cc598fa81635f60a44dd9beb89b5e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

