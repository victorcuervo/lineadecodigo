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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQKS4NYV%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T022352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF0H%2FiYQz3tBtKkwPUIwDUM4nepDfMhR9yKyRzu5fDLSAiAD3rEOauR3VsTF8QxLJqJR5FOYEIor8npf2jav00UUWiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMswnE8vI2RZHkadmYKtwDCYzfBub8N7MntlCRbBUzijCaXtjOdlkjclhQwunLAP2w2tqfTJOZYCtkTR0ElIHefEIPOv27%2FuUFKMuRuWFRy%2BNZLDoKn19Gyycfhe5rQe3SNORzB6tewDIW696gEWZFidWe04hKxZhd5d0LxHRikAGCkYfRS7j93%2Bhz2%2BIb2z%2FqtvFE4EO3ZGebbLgXRFdyzijQvXvalroTSeYky4Ly7sRICnp%2FYUDx7asIAoy%2FA9o9JmkfNmfr0je6DAeNtCwJaB4oA3ftTj8qLWtiuEj4zaHCVcE1OLDI3x%2FM9vd2AljInUYCMlJuIl25Jt1Tcx7pvQIhTeJieSdvqJr2Yw1oSGbjDl0wNa4dYFAjK2vBruAX36i26oWDlhWfkUbjOksYbGKjGFIVZ50QOnQKo4RG5Te3R1Ij77xUOucg51hZ84R4xsPMLNz5YHDlx59C%2BsKXt1Ot93O%2FnkcYHG6NmgwXxpqbGjKqbuFfWwS1ty%2BzktZ%2F0O1r1%2Fd3ZnUIym2SnOZY9bZ8VjzoucAvpQNy5SE7gebLfB8y8aKJpJHty5OgXW1K7huXjXC1OGcvVSsb2wJVd8Zl0xLsPJ6SMGqalfbhkpJiv1aS2ijo8gY0AIDXGF1riZ92CRvoWFwLVTUw043eyQY6pgFcuova0W2b7rLqg0iQR5ERlLrW4wa45i9m2JuAtj1XkKTOxE1Go1qJ10nMkzSMZcH5WviBw68FQqGTagW6S9ueIXJBuO8bhzOw77uX1bkzWWtbWBQWxTvuupXFhy6IYTLJzQop8Bz0QlUmfQuqJGlkSme537fKPrWcEm%2BfFHziJL6fYL%2BEeB1LTFh0%2BCAWStgk1plLjfeOKxHnwFc0%2FdrLxJF%2BvSb6&X-Amz-Signature=4f7a48d069e075848e7ae1c4eb3467d93f5e063cee198f10214ec48182577311&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

