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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645OVXNOM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T170616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAoL%2FzomQyE62%2BgFnxWqEOjt8wzCudirZnhahroDDKnSAiAfBzNeMQEnBbcjN8uu4v5N769NMbSYnUkMeUqiT5zlHyr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIM908DB3NqGu2pp1caKtwDM8Mm88ePHaFT8OySKjv3IHeA%2BHiS19C5Zx0rZqaA85DKL3%2Bd347dT49AYsi2eONqyVo04g6O80dlstKIvGU%2BV%2F0f6iaMHkKFLpv7gaQNa2YD0YXENeTykAk89ls7pb8CaG4TjhYwHMgH1g8ZS05gW5msayo6Y73MoL3wI4d4qG5BX%2BF6MN02mEJkuHrSCEEXGvS2gT%2BDBRj3ogFebJhoekMdoalnhENC35sS6pwKIS5q7%2FYFdfmbiDnDWWijqTdW5QnBW%2FEX%2FRa9gnSr6TGq0Dc34M3koutWVs9%2FwH3hdJ6n%2B7vt6phowtPWjfs%2Fli2Oi5DuiGrTWMVORe%2B6Q3DjRcOk5lsLe79FLyZpl%2FHpHHT6j9mnMQiKOGKJ%2FLsP%2BjqLWnSH36nurwoe2lVcSfI5Y2%2FEmJYgqiodt9yvLP1oAu8NeAhm03NSGYZGnZzUIN3kKm%2FCwYa08xJXo5fAWXwf%2FKKe5E8p2BMBpCZlAWgodnrIHCeqxYj267OPOFURcbVly1LZk7Byv69Z%2FdtoSpFCmh5N3c2cZpOWcdzje4y2pkV%2B%2BAwmoA6nrJePpc2t%2FTkiG%2FwIK3gPCByxjBViDwwkTm9lDMl1WkUqRNC8cRdvkwWXQGUmAF9sIIouVjAwxvbLyQY6pgH%2B7T6huazL%2BT4q2N1uDRMDgBcp4m1KtZV7Gy9g5STGGZpz0oYzuzJ0IMXs%2FUtLVSH8oN%2BXmNt6YiKxiqtozk3gx4HgKRuGspAQXqrK7YK4xdpsDrFOBXCw1XvyszKX9TrW%2BMd%2FBph6dmxEStiVr%2FbH6zDN%2BlAKTTX0lWKo%2F4JJytYx3Cf9r4C4f3QKyViAR9h3MY6DBNDjl8%2BlO2JjvVDfti1%2B%2FZQG&X-Amz-Signature=1a2a76a6975d458ae6a714d8b73af0e396e5861f9ed4773209cc0da1bf95ec7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

