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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS4CXQLS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T134736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQCPJY13eJFmm7Ip6GxKim3NIj2wlB325KhHrp%2BqxybwtAIgaT1Di5O8ajpwEPmysD812cVlkVWPNiZzFdZSc90Xq8Uq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDEc7WP06aTOZ3Ua49CrcA%2Foc2JqlRa7n1hjgOyCGYJty5WGpXeHQKWtkprm5fSeBazsaKR0FuWtajMw5cC6JbqjKMvtAWqga%2FCiRB6sviq7sfThNDY%2FFg%2FVocjjvFmWyqBhoWdXBGgInsZC7%2BPVhhqCXpuLgF%2FuYLCNqwWBdf8Pk7vY6IpoVbQa79mnwY0VVigKKaO7gngHalEEWvQbYzn5lKmwj2kG3Go693ilAnI1v%2F7LmMXW181hSwhsvQ3JrF%2FqJBDTpwKamwQepNqWq7D3Hu2NRFEcQ25QNKku27OBJL6hWT9GzpXSqzTmjjRCwE9XcOxJHnc8ApIE5Qk8O5j7TO29juJdISAn4aoIF5Ps8nPjPvBmcAvuvmhnqwhoYSli7jk9LcfWFOCxuDPrty9%2BaYXGVZg0ogmnvth4%2FRayZvUAJercdt81M6mI%2FpCnCW8kz42GlrBkLCekuq7RAfS3baehf1CWY6OSFQdEX9EBVh2i2CECzy7ery8FEY1njKdqP8fNIvF0tz%2F59EUGNNaS7k%2BtqUUUBi2PModJlBGQIvwfjXU%2B3Nyg%2FEQcgOFNVlZCjn8zD1OZFlTPceVakV5xH9Xl9%2B5hbgRC2Wl4SDYyUlo%2Ft%2BoDiI5IZFO5B69cGLhDjAJ3A%2BbfaAeeIMLmDxskGOqUBnrOl5gTd%2B0VLgfMnPoU0zCD0xQ0yY%2BURvK11Abmg0%2BOVG1gzTXoWZbLNHMVChx9BhaBAOAt%2FeXqB5ZS1uoV6zs6XaHv6PNNNv0evK5Nnpt%2FK5tPAewHJFKHEy0i0Rg5yQcUrB4Rdi7d1MPx5zUJ%2BFq9E8uKhNk%2Fn155ucC8I1VNFj5sixahoFp2YKGZGMMbot64TShLVI%2B74BV%2F7qveKb%2BPTrkhq&X-Amz-Signature=942605c9077fda9716f6e7145da11d7b2f083c2c72d19e92f342338584153c86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

