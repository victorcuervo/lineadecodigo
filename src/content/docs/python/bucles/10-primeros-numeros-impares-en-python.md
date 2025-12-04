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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZRTWIT2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T091100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIDRkd2rFCkTMLy3%2BlHX04IdQLO86HzZnGcjC0L41UiqvAiB%2BZ2pRw%2FkP9M6UHW4vNdNekAob2%2BXkPQRM9THObIZ2Jyr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMGT5U4b8iSCu%2Febt6KtwD8mZDzTs9dIUT6XbdJCUOhusHRJzn1lXVmKP54f42Sp0%2FQcc0N2iFH7ZWiKU0SrUqTaK84RPj%2FUcAycAq%2FZH0KrGULjCQnhmVsogYFg7LueHGrOBMJTf8wfRGx%2FRTLjNwZ%2B%2BaBwCazzNUVamGCz4oFjfapYuHeeYk8b1J9w3rk%2BeUBT1uezKoqq9bpG4KhEh8tPd%2BuZLH2h4bWzrxq5Qf0V2j7MRGT2jnJClIchGPgufpAcUevthNexNQGlWtsGMZ%2BKj%2BHw3Nbf2fgyKoIRXtmhSeVaZTal4h0e63FaCdSvuQsXs4%2Bj7wyQ7oo7cGRVqmkmXsnW8JhpipwPQqtRivC53SKfcabzVfGWLNXWFMzZzqnFiaZKWsXntPxnDeiYwOyZXSfiCPzcTdSOAHorg3vcNFv9T04AgYn9P6YGOBNG%2FAMKqfMhMZM0kHojhayhmBKQO9JRLWRs1yIemRpo%2BZgl6sgjIrb0cR7MUinPIN3MyV4Bts5fsNEaju4WweaM48GSrJAGVhZb5LYuDDfWr%2F7lQOmbtUlbtLkwlpa8G2Ws9x7GgY2O61fFoFNue51QG2CCs%2BZciJROlONlqF8IwnG4Nw4rADTQ5GgCWSgilJlX97k9H6mMA8EEWrAA8wzYbFyQY6pgHWHy3zeRDqx12ePsyTbZw1A%2FSMHZ2J36PcK38RNNw4B1ajGE3C%2Bd5RqkAiLLrH8p699paj9ks6j4FrD%2By%2FGAsCsdw4pL9yQZ13WTz%2FdJifipNwLbFPhjofzWihk4B%2FDcPJqscTH1OGPWDpE%2BvJgpil9z8Yt1axqLrUxqrRk1l96YITXzyW4UIIHeludl6t2ftnv3HJzwhQAS6e9G5TM%2FBSVsxXNZvB&X-Amz-Signature=863d45284daef435eb413c669933c05634232a1697e01e0af4ddec521efe8386&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

