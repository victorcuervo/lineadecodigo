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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZYUT7N6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T131154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIQDUSm3el4E4D1DbAX%2FQCZvnnW6b%2BGY6NlZueXxIU2k%2FzwIgNo5bTFUzpD5JHPvHplM4tSGF9I1SO84ufgM1rTpA%2Fn4q%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDP%2Feo8ZSrca5OVHdsircA9al1u519yisuuPLNMfdGWHg5R810q23JPKGp7W%2FRkREmUw%2BntvKHJqwmosnqQwnEZtQ8Jp29JrV1%2B1aJa7k%2FxNm4u2HnFEw8CzverR%2BqyNYjRgMCKDAY%2BD%2FhQmO69jIJgvkco5kxApWezJijxSwyWD2K%2BuotpLCBCTFTsdIu59SxUF70G8ufGb%2BlzAlqz12YKqfbe8ANP2a3AgIxb8%2Fpgag4MMjH0r6Lp61nQIprX680LAC0X12tqib6OKeHrWOePnP004gaH6KBxOpyDYvxwPM2a41IcKnhCsxtV6183aQyRrR5XtlYRC6IaiAfETvSdnGiftKdyJmyKxR%2F2%2B2tmEdMrxnFOt6fKeFlpLFnn6nH5QnSN2I8a9KWJSWkm6ALSSSj64%2BNOxg4a%2BkQ6fKM9R%2BQeKnnV9LEW4GiD6XTwhD8kU0GfNpmGD4UmDRE8sPIAf8rhUYbK5%2F87WIsky965qpURjRGY90cFNU0zzOoWqDIFpbJNvwi9K%2FQAuxuC%2BFMpCL47EwOIarS98h7C2Wcs2LXeEuMBdzBLOQf4jzJe1UNnIFZP7V97Z3Y0vZgVQk98Dz1rk5klLGYFdwNJRRLkjuKJvwk7zl3N%2FpK4Fj2uxWwHgtsnOCSg%2BMPGbPMMSDxskGOqUBGU57peqohYTFBl0%2F0TAMaXgKABfdwt2jpU0t29s8iS4E6vB8xHGc3X0ZvEwKXD2wUgcaNNEZX9IE1Ks%2Be8C0NIYFj0EUZlSv6qQckHsbBH3Nx8koWhS2Rli73y2gHmulGQRtBNNVTfbMOP6D6tfsjo%2BpUNiLwoML8SWPfWbQuIctxjQqJs36%2FbNmcMwR%2BG9YsPKxkfJ153W0N4xGIXKJkvods%2B4V&X-Amz-Signature=e29f274be923edd29c790d43bdee852e5ee460a7c6f196165606b01b60c85e7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

