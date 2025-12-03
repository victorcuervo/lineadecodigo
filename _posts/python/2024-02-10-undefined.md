---
layout: post
title: 10 primeros números impares en Python
excerpt: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
categories: Python
tags: [python básicos,python bucles]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W6OVLAD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T093236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIDqovRMD%2BBarGzP2D3oJRnqujiaHUORPhBg8Pg0vwnyfAiB4V3jPE0vTrXE2r51ErP3j9qFF4qtlNzDXHybOXfix2yr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM%2Bwnt9G14vWlvPMTHKtwDSXZIq7ha%2BcA0trzCCUjO9xr%2B0BRb0AfVa4Du8qx5yEJFzJGBDhLD7sEVS%2BeNh7w027yYH2PoB7%2Bx89Mv7LicsIMY77XnGYVfaynzT2cx2c4uHqW2LVlG9oY8CJiCiCFLI%2FMLcrLpUcJRUIRXy%2BwT0WxhSuygXVk4qaqTA6Dif%2B0h2XzgOE%2BgNKM1UF2Bh9LjtA5gAuyWrFXtLJfRERMb%2BiC4u5xzaE%2BSfZukaADpMtPYgMjEmaVzMDw94UctkhKnpMId%2F35mERrgaiDXDPs3bpmwc964bmLH2REGb2hAeeYJaYJCq6cRwvj6kRs6ZtXnPBVHlWazMZQlpBCXdbEz7r0qpHIoqjIwu1ny6G2WAsj3nreTXC%2BPjKIaSdID5ikYwCH5jpNskpe%2BdJjcmWQToEEXTGU1kyRslt8us04GCfT6VERJPC3hJuR75ANd%2Fefquu0hrtO8jDw1PRp0tXxILTaLnvN18lmq30zWaFuLi2h%2BpO%2B%2BxlSSXeCuh6AMv15m6QFUYjnF%2FWHuprz5Axbcj8eoYohK6gisPkpdklUG9bQwgbSln5j4oi7HOHhxmzDnO%2BnGfFq2Ramwpcja%2B8tBaSdnXTjlaOqgTUNy17k%2FnWKJ0HJY9KQV%2BkmGm4cwhfe%2FyQY6pgHGvB5YwjUhHTS9QmWyEYmEcLMqxX9S2%2BmLDOMRC%2FTnCN8VlnBKlwiZlZcsGic95cLNYcv0IKOoUVaB09Gb%2Bry%2B1z7liZhDTyGKaQstoxEMfL9LunInC4jp32f83G6oELa9XF%2FQoxuIdoJZN4PnPnR%2FGgLHIRowgkwqBz0G%2BXzlH58nJEFT1dIeZtXOA67Ap8KVWHpukJKvObhufkrekJDn1Q%2FmQRWw&X-Amz-Signature=d87510be816556a20de1eee326f6d0a6efb08049bbfd6398787e815620eb7dca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

