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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIF627SP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T074257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIHbV92fPbxJL69puEY7MbXgLfD81GSS%2BNL6mEqW5pTGqAiEA2pvwZGKCinbTNtJ4Rr1x5KCwvMj625AI6gMVH8KpDN4q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDKAWROkyrvMJmkHS0yrcA8%2BQ6vWFZM5ycmNIorVUl4N%2BTZdjLlOUDmWIOIqhHb0F%2Bow59HU15b7CTPpK%2FADUoVrDR8kFIxJ%2B%2BL4K2kdwHk4DRJTyWJ6MKtn7VtwiViBvYPuYS0XCssYQWuZzrlM3lNWJAicCE713jaZjKnt2uqVOqf17Qp1yavRtjMpeTFL%2B91q%2BkMKJDRgEl%2F6uFiwfaIqJU7JXpdB%2F3ykU6XmfZMVd82KDBsaVwdkHB%2B09Ti6vKSw3uNsiYHNx%2BMwWkUjzPikpS7mATFL6xZDJiMTtVZXLMfnss8WW78pG%2FhC2ZEiGUEBTHZdJqf277RlcohA90ioT%2BB1BrxXoW0i1vUvqlevQPU7PI9d1csSnSxSqQeUi8%2FwAE%2BTrySsQ%2FOOGHlyys7IRV1GF8foADHxhCxewV4XR2LRsKRKsZ5yVKI7SuvGaZYdu4RtM4G1mPsqv2Bvhm3udEh4MmKK0okdVhvt9qSeVmq3PcYSR%2F7PPPSlbgnA9TWWyY1If%2F%2FrCb%2Fzs8z%2FmGS8HgkZl0rtYTt3fzox3rCyn1eMbLUxZs2cZeuA%2FAGbYtRI%2FXl6SAf3xOPaqDqMmExQFFWTmth%2FVZwAcqFmoqBBp02BVnpil4wjRjtxyySzWGW3D2KfK23OUeogDMM%2FoxMkGOqUB66rv81fGVUxG2IdI%2Bln8%2FNn1H4UYj75rR68Qb9%2FpQX%2FJk4PZ%2BTXygw2IV%2FJjLln02CH2%2FjPmd8f3LAU7jM4OyLZTNtsDdmmXEoOqAeJewCiSjlbmL5cXCltqVnOg11kimp%2BreYsaY9U6Ew1W087iWjmH2MYG8EemE2vIkvpGmKQZd4HEuj1gAdOmMUH7B6csATQMl2EJ5E29M%2FHTGQR4t9EcIg4z&X-Amz-Signature=10c2f861d257be9d6f752bfd6061a8d54c794d2abd0f1f50b741e0a3d4d1322a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

