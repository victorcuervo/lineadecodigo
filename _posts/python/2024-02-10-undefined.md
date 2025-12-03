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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667AXPI32D%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T084854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIDeqpfFAkLOi%2BJMGkhaqWv4sI8g79iU0rJXrh6UqvAMjAiEApflSWFoCGtbu5S9Z6lw%2BeKajYm5XMf4H%2FN082Kbviqoq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDNg0sAWwdV%2BAzyp3zyrcA8eOE2xYjmYiYJZ7um3GpMP7XYYVyJwp5HLNKqfahL0Vb0L8%2FEC%2B3g98zDWQ9AevZxpe82VMeDOCd7I3S69r0bfcFyaAqmWsnAekZGEQS2qXgGen2lUlPY5CmFRzOCXC2ZLpXyZuBu3X7Z6YFvF19MklCtUe%2FpBDS35idAsXi9vYeKezM6G44edNbZu%2BZzsc3xFSZehIaq76xqqwnEocRuM04IfYRrZXMzjIyaWTokOEl8xb4jwawOrSYtTVdh4XDkP1gj%2Blj%2B0dHeOuRrFcp8pP50ML%2BKZyKGywIOMPV2dOtcjaUQJ2NDQEZMQ0nmOs39iEISVdZ3UgpfrvYHKNaliAsYE1omRJpywrmkZpuHXfQY91crzFQo7eBUs8veEVeq6fPPUQEgCuqRCZnfhiU%2B8OD%2F6sAMdT3DbU12DZ5jf3P6vJP4GIPNG2dsmdcMqHJO83Hf3%2Bye6Wj40uHig9xqan4bY3xd0LZWw%2FCo0H68pEM67UyEbKGRMkcQ7XwDbfbkm8EfNKp4K3L8MSu9Zf2EuhOfrdsk%2FvjyaEJliDDUQfGkkn%2FCPSs49ft3y17JHO0ndYWpMcgfYgu%2FwGjbpYJ%2F0Tr96JG1vBljOFYrnLswcedoNnLXbAcKjoRms9MOLVv8kGOqUBGrQNweZtNkvFRo1sKotym1%2B3Ste%2Fx0EPXakyIcNHxRqnEEu7O9zJSrDG2kdjqWXCFepnbyh0JKJAxkVpSp%2B1nokle%2BeGucioxAjpJfPuYXl2gcYjolP2UQAuZz4gpi2yxZ%2BLQ67UNpApPu2DXHJSe%2BSRm3i60flhT%2BaLBobuCYo947ABUi00kCn6wQTp1x45EXoYy5egL%2Fxpav8C2hA14TUJ95yc&X-Amz-Signature=49f20c68309b82e04cd6fef8629f8c8f10f534c00089c26da8cbb9e0ee15e71d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

