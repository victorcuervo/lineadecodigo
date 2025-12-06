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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5QK6ADZ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T102233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqbhRGa%2BvhqtVUhgmVduaUCtaE%2BCv7em4cxYhlGtDofQIgYPhxocepJtc%2B536eduVuKAFObOwEU8ze6lfhbfcJkw4q%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDPAzuPKHVXoWA%2FS3iyrcA0d7DVEW7XbAED7s%2BUfIM%2FA%2FdNqSVFNeX%2F2u%2BCjmdy5u1hRWeftMCBU5bTQPnlJlw5ryeyK%2FuGrtDCbSM7nzJ%2BI1FxpuStfV9keTll1hWW4NJxKLVS1B5FFiwOHur7xrOb7iARv6St%2FL%2FwHuCa36QaU52SksL2JlOAkNrvp3nIc3%2FBH4pOQELLwSt2f0B2L6N4VuEkZH23xIE85FCpTw%2BeJYC0YLGuT7c8%2FLnbEA3H0AaIm6qu%2FcIUyciZLNaZOZvaRYW4QgaMs0Sd0GHWeSzs7VnydkeC1xJlv0rOCBEnIXw1DeCfdQ3jz%2FUzoKv9DFTWDuVmG39mCJTd1Sa8eYtN6iZaBMQ1PTwQxa7LHiNsBMW6s0x2Zz9aoBUP%2B%2BLO4zkdTLQqyCCITsNJ6OTwX0Z4NC%2FTQi6%2FCq0j89Vh0liRgRHuvXdRe7RD0p9K3c2wNYDkzMaC10Y5lXg6jHOAiL23%2Ff0Hbi5voVpfjf9KrvI4NakCs4cnkkdH%2B9RsXy%2BhwWZr9pM%2BdOttL2vrwfLn1Sh0x3qFGe4jayVKpP%2FAzrOfCiY%2FCQLkEdoLVG8t1RTC6ZTPkD3imxd%2B5PlykPvJq2kgVo5ABdqXCLqA8kHFapcOR8WdsdZdqbu9Tr%2FhOFMKDrz8kGOqUBu3NnwEDdVW4xxbTUS9PtV5Gy4os%2FoWZHTz4p5iMRC%2BD%2BTI2qI%2FqMjME9BPcvEhE8%2BahlmddskOWINEv2fIQNhuZ3VduAO%2Byy9G7O%2BPPKnAFAOR%2F%2B6k6BS%2BHR50m4r7%2BR7MSaojh4f9%2F351qCiRq%2Fhyk1zTP4LBYCj09cWROgRKUymSBqZV3CSooGrY3ADZ8RavUrhX%2BGvVfMEzj7qR4VokWMobRC&X-Amz-Signature=9934659c0ea6b9fb1b5a8da47fb7f9522359f1cfdd06987f9153fe9a526a961f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

