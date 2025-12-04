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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQZKFACT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T055431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDc8o0Z3e92qxN7lMvDX%2BzrPcThfaCCC98voBDbmptj5wIgHQWSKjiIUn6xB46t%2B8MAbu%2F5Hr7kGWlhow2tUApUf4kq%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDE9lZwGY9u6O%2F2IR%2ByrcAwXQMTQf3pTbU6C0G4PZcdA%2FPIkwz%2Bi8oCSDQU2OvHZ4n6960z50fc4gxqDKHeXN3llWau5169NHK%2B2rVmJGIYgaxwlPZec4pAwl0bWbiWKGXcVOAWxS0Mh8VH%2B%2FNHccIuzoyFubI%2B1JmXDFvufnvMT3IPz9UuaxQQfF6xXNBdCnXBc5611CWEI1%2BWwDY7WlS%2BF8ud4ahR%2FGJXrAE7yJE5fTRX2D7zzr3RNB%2FsrlRkkK40Epu4k40lXvm2BG0FEUNUHxlFST%2FaPJ6B%2FuvZ60XxEx5n26hGB9%2F%2FQWateIkohkFos2qmMpZ6OsNeK9d8PyNP23mFZqdGSxVAevqM3lJCBaVti%2B4WrXPrW9rGF4v9Yh%2BB%2FAuGw4S9zyF%2BpJma4QBS%2F2pA0wWvDqqIHMUZNS5hvSnVL5oE0YuFUjlBReMG617S6OKNCZI0osKIL93%2FSmllBHLMF9L69V%2BTeafBCB0n8udwcNTrRgZ0plaSNk7HSI9j3mqZiuD5qnXZmRdvfHvjY2Qb2EKOCBTbuxcMrHBwTb3sVJwH4NdxwR67WhCm11jHFN9iVxyLtcSPZO89a27pjuu2GhOOtlVrncWA3bndpalw%2FMJvJ%2F2W5f2rZ5IprZ4cipRvwyTPQQcaKVMMSwxMkGOqUBMGyTQpHy31jdQu4fdpz8x%2B8hgtOZ0Qiz6Uqkx%2FYrFX0ksTm5IkbkFrC72%2Be%2FmeJmV%2Fgx6GtAoQ2IEh%2FHqmb4sWZniD%2F1Om9xrxeRuuqWC5G%2F8GENC93UL80svTM0GkuTpL1%2BaHPittbDZXq5BFk%2BP%2BWBTwpVDRJwvoZdnW5OcYnNtY7P1qJC2gJREJjaRuFLGuSWJZqA5Pt8n8AvK%2BhwAMA00jE%2B&X-Amz-Signature=847e90e2f177c14ec32d8d7b78d5e7b81d56b632aa82d78adc48dbf789dd5f60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

