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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46666SOVNT4%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T195730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBD85EsBFZrf6yfUNICrb%2FAwLt7AKxJ76AS%2FllWSeMdAiEAiPLGbBMfj%2Br4cVOVdF5WM4aRnUQ9%2B1TiOXvDwldfjz0q%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDBdM2xT44iON5D2f4yrcA3jkjVsO4EXrnATG6BY%2BjjfeRGLyIgbK20EvLHPIx6RFE6Ft2mFfBxj8MwsicOJXpDVkBnH7M5WG2XUr8eBVYbJ5KDc3%2Bde%2B5jgM2BkepdSeu8Xde8f0uObeOsUPxpO6ZK%2BL0nl0LrzpW2xAEIKDFJ%2F%2BQbR1pH8FD4XVJdypxsaL5zHQ82DVVxDxff7psShlXRBqRHQpTfWd%2FhYusSaLQGRn3E%2FBlcPZYYy5ch68Lrnr5LBhgNCPNjXMV64VPhGpCw0J5XNCPXb6kwPIFzWX%2BERHrNsiKyJlVRIEO74wzEmlzVpCpowBfK9P5roGwgaFOBjBtT6E%2Byc2Yd7meYigvQkTngqMCmX5VxlSQyu1YAw3CqMtwiGjz17fMEp9jOA%2BYT3Rjz6w%2FdVnrFVJdbJG4kSP6R6jlRh%2FndQqw5g0SaQBZawiCTkFSVFUFd%2FlVl2ODGOHhQ7DRvgCPIY8ONQPt3Np8AY9yGEw2Npe41lhkw3g34euAnmCFm%2F%2B%2B6kFvjQ7VoIa%2FJKhB%2BznltVAwQpoCatIawtIqVNRdWTyEgjsNxF%2FVf%2FiJgLmUHv5bR2GHNXdo6zVnKV%2BYINWjNbY8BT8iuFR7GZPsXDu%2BGpd9Xp52H%2F099t5cq0%2FlPbylskyMLD%2F0MkGOqUBzzzylWT2VZic6SEWR%2BDGibaqazxV9SNpFaG%2FZfULyU14i%2FitN76SZPkbB%2Bp0uE4u6gbXifnsobXwic4faKndWCdkdOe9am6M1fd2hJEF84SoQUAfWIlSeELz9WVp9kl9dBYcO%2BfJ5qRtShFOSMHnBvocNOkybkVkxiHc6wN5pTBYh2YuD5pdq%2FfjWvH2tZTb3xcbbyzNBiFf5djMcLMfdKWDCq4j&X-Amz-Signature=a98cf4fdff1a13f96652aaeba6e24037024d262973ec23961d1c6888f01e416f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

