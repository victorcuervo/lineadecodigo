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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U6EKWZ4H%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T091801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIAnsZ%2BYPGaLgnMzKewT5MAxHlEhKcA7XJGpmYuMRO25MAiB%2FGRszHuLSothAWZnj4ZQAIug1DbQO3QKSrHTFCHViWyr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMWyxsmlqMQZTUTn%2BDKtwDMv3kj4uA2PVyp5ZogRJqpc1kBFPBats%2FvwU5wraH0jUJuttXsKAS%2FXprVNRl6QLokvbGkffXnNtoMHdFQt2sR7ixKHB53QVCYmMwn4rD%2FyfH8QZCBZAAyRPU%2FEpAXIe8mRKPhMHpNE5wUW7LHmgse3%2FsX4TX%2FL%2B%2FpYiFC476yPcM4QBzCV2EJQaZs5DwhgMF2PEOMm7HIz1%2B6GfNPnmAk%2FfvWmxXSI6M9E5gw%2BHTdB0vUS933deqheoA%2ByZdZ2FeK4Kii3bBX9%2F%2BTkuQzXgIkSRy2UY1tzaDb3CiIgGfzllmvkRtzXg2TvKr%2FEN6zy%2FGPcRs13Qx2En3H7VjWqXwdGkcHHJMo7h8AUl4k9bchwjx9iVePVcrLp85KP9l2UjVc6vZFtfCx7byN5cg0SU0Zvbq8v2%2BQixYpgyDwlg3EASeIW%2Ba%2BakNSRaaK%2FnSKquQOeLrwE1AeM01yTSVOKEBx7ZvHWTzyZ6x7a2mNeLo%2FHmV5FlCFe0NZFZnCbDcRlxPQX4DtOaDCT0irDR0q795iKvrHpzqzPrE%2FqmKp5QFUndge35iG%2BM8oL6wuEZOMKsjJsP4i2eQ9TNKHlXz%2BuQRojReFLbcQ%2BoHjAyCglugm3wZCUdtE%2F473QC%2FCzEw9Pa%2FyQY6pgFQEXb%2FxXLlvSl3ueQMJnwbHPWFRLm4rcmJsEwNovbjB12FdCFebtDAkC03%2BFODjdZJ%2B7ke3qZD10LTPREnHxcMYaoUtNtSKC1G6hqXgKT7gcQQzlsSiK%2Fj3NViPoGwtJGWJcpKN4MrFoHEc7mkSNHvwNQ%2F7Ch4T1Ez3A2M%2Bv4915F9fGrD8hTvBUBShQZbQ5GodbQpW6dT1ok908RtrVR7HmTzOgql&X-Amz-Signature=4b6acb4b8b142ee9c99943c55c3ce85d80eff84125e69a248ad4ae0a16515984&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

