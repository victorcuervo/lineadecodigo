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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q5N4GW6N%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T224620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIDgcWO9x17UYPNWs6ML%2FbT0zLmTC%2B4V4MXvc3ujjLk5OAiEAyEKGBMTC8qPZNaJBv6%2FL1wLkIVo9I%2FN9VM0kI7G1AKcq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDLhQlxFkFGph5ys9zCrcA6Iu8ykYvax2%2F2kko41M8th1kb%2FGLiUMDgQceK4bmXaH%2B02PH6y9%2F%2Fb4MJNu68XpAi5KLvT4xQpnm%2BSvGVz6QocwxYS39uURiVQMIAzJYIjuP%2Bhrdu%2F0qF7Xd9IGaIF0ZHKpYYCbg%2Blz4RlT2IhUJGFkdcDIpoi%2BubT4ubDezFOLsNHxlwjgTFdLTFKs67p2TZwREyiJoiGM5Y3y%2BBkyXKL3A%2BeFmzdOPhDU1OQRi7ouYGyPMNFNPZMuNmq9K1KHEbm6SMIkuuzuVV6rKTOSn6irqSS8bPw19oO8pZdZ0JXmj%2BBNRSl88b5RHm0uK2hOGutuViHUCdJMUKnkP%2BFzYtYHlHEW71tMUASbFx8avKOc6lKE7hPawkeNqAxUlvgq8KyJjp5uz7B9eqqfzlYUH47KdC2btJzzdLlb1eOb5to8Ll0PtAUMbkWGxdnuOWAOME18Rl7yjmtihYaoq84sg4rAZvuhpRElrE%2FpXnPgs7rFW52vCSI1cKBV3w28aMy1JpsdNSqBn%2BOyu1baOc7i3oeyim5ZsuU%2BlZvuVW6rgXEEYb2XqKtL0mi1RDJP4fFFdusR%2F4Wqqs4yKCbFm%2BNY9AJD1O%2BOfIPkGcbPoY8CLFCfV87l1HEVCv%2BotBUnMKj4wskGOqUBGiTtk7OWtR%2Bp7QgOBxFVMb9mDRkVKkI4URiNfcLYLSJ8JqyNmtJ4XdNU0MF04u6O3ymw5qE7IdXTcTlYUnlsod5asIjPeO9a0qwKVkI%2FqGNhHex%2BXsEdcb96D06zWrGYYQNMfn45bVi7Fz4gDyetZF9h%2BMu59Yqbhcy10%2B9YSK8BYJkqxogDxMEJHxgNTQqlrJfAmLr2UN9rOXRiB2NBbvT5Xmxe&X-Amz-Signature=14652398a8be2329115cda943ee9fa7e80c03dd0cfe4f8215123b8232cc49c9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

