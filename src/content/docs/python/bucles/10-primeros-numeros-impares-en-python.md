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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7OR7T5J%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T055350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCU1qNfoM8ah3JGiUCYDG%2B6utT0SXMHWKxHT3rBJ7oIGgIgK4FDQuPmHkmtJYhbQecb6hYz01I1Awg4nzCvzl4FFJ8qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMWRJ2pYxdUPKeX1nyrcA7Y8BkEhPdMSBwCXx%2FST1JJELtaUr4pJW03LUh0QlA%2FUODHTZiMmBiCeSBBjWBLj5%2F3GXIrpScyPOERb11ITpI8%2FDiCA5svkwAvMU2MzUAymu8K4PCnOiRssqNjni5xcHP%2B5JapXBEBe7%2Fb4FKly5oZ4o%2Fw7GJBKi5h6ebRZjrNs6fn%2FsE9W7tfpZ0rcnCNYS8pDoF9Stjb2EbM%2BIqwtit3TL%2FhdBpHr1DlMMOShTMi7UWeUDDWJXZfqdKFtabCqlMDgUmgu%2BvKDny0vYzuajvHUvAuGyoNOJaYgDt%2BIiZGSzwyYaBZAfyo8q%2FKdUxpLqBy8%2Bf6RYY8u%2FnbOl9m6ZJuvPBSarY25Mdsn5%2Be1TSGTqJW%2Ftn7wEO8sK70kCUlFn4GRkjq4akN5tA64zsMOgPXm9dY22dTZH4pkX5%2BhQUVyl9WYz0%2F4dCL3Js%2B%2BAh2iiYFHdT3Q3STarOjWERJSZKTxXK4dfaA8QoJ1NDsCgRgNwTed8BrjepAsb3%2FyaEdS5Gh%2FpOSM8iN%2BfDI4BGZDC7UtrcI4PrJCZbbqoM2TV8IxDLK2%2BG1wvCtyB2S%2BBwOuyCTo71%2FYAOjFGKyfVP9z7oFCGbbd0pRRAm1Kd2ab%2FiqrJJA52jknuNIUSbuKMKSf1MkGOqUB48dwRY79smwBZE8hBjVKSXDXJLaA9LmrEkisB%2FkHRJ8n8sdvONanTKY%2B4em4liaYzks2C3e8XrMmR3Huc9TR9s5giwsRi%2FueG%2B7Wggh7hpNBsEiwzTWEigGqXFz4%2BHAyzKAXj1FZLUPMByqVVvnD3kKF9Vlds2%2BDMCgHvPs79B9bH2hLhsyFiplt7ryUDUGJ%2BuACOqXznzvNiVsbKTn9rXpVvsW%2F&X-Amz-Signature=c7a4d12a8524052250ca7c4aedb60ee38670df2afed99ac392069c71cac1a540&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

