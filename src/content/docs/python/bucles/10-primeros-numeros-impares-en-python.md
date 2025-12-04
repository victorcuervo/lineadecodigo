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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UZUE4QL4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T075132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJGMEQCIDF67Gz2YXrvSPMpv55SgfSqq5hZQ%2FCboyy8Zu6yPKazAiA5TkbEdpO4zZje24DPcNvYTbzRA354y%2BVXJ7J17k7XqSr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMMOtaRpdripx5AogWKtwDfxdtUwXgp0Tv7CUz5XIsjM8eyJ9SpP4uoD2ZRebpiRojVJsd%2BxawwCpWT9bN1rTO%2FO8BKl1n0%2B8he0dxzqy6H9rwl6%2FdAc9wRkeQPKzVrjoGioiqVmHkj16NVTgiYliQUHa8xWq2b0vILSHS%2BqdFJ7YRiT1YiP8zj7Nym7tnw4HWY%2BzIhYPtE8N%2FeCKYcb0TaqftFt2wBpCkQ4fSal%2F5kuHrtjz9iVaYLgmTnF2rB%2BXV3PYdpXUa4L78m5wiVf8sxDGlJIdphMKPqD0f43rYs3ZYMpdwTQgXuwp4OC9TLGFuK7GhpeR9ck96Wrhib88zTDCASZ3U5aFW5ttdp8qy6OgGjMeXD9tQYbA0pv45ZSwplnlfY8KO%2FstvG3P3SyLtbH7Xqg6YP2xdUbM7N9IY%2BCcmem9Cycvx%2FLnIB8jsHB4plzlpDhUb2ISnd%2FXIHvfLYd%2F%2BFdjX4VdMWLFpAcLl%2BG4qT4PJ6zUsG2pnII0ZyHLZPAHCOAQuenwTCb89CPImbWpElS2bS6KdBkPSuSM4jWoqgPjYiPqotJF5ZKb7x8S3DVW8NsQSi68et0o1Nsp9NL6yg7LKeZ2ef5npXKNAANVWxCiAj8nO7Sx0XC3OTzKwMK8EgPbpJ7WkiLswsOfEyQY6pgH6EoOBYhOJv0BX%2FyOb%2BMrnk2EBWCYYhizidRmY4Dln5t9QypA%2FDw1yItEIbUpBLP3godtz7HeSlojDX%2BWTuOdmtxPSZOS6V8Wdwg9tERGFtL8XHc24uLjq%2FtxB7Vx6RR0UpL5RyZQIyv39W1DVh%2F%2FC%2BXCc5NuebCS7bMhwRtJZa60X68CfdLZ9aZJV3gj6oLA2hr71nud4qQfEG6OZhvFHzl4CT%2BW7&X-Amz-Signature=e3d40a7d7b4b0008b042ed9ebafcdd4c63f5572f6d882eac163914e10f2fa71d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

