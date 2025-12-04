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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S75IX6Z3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T001842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJGMEQCIDcJu2%2Fr9JTkhJiam%2Fue6TE5rwBaoXY7Lz3pvAp3OT7OAiB3FyleoAC9uwunFNqCNzBYA%2BjATtN7qZEdi%2BMnKmjd8ir%2FAwg5EAAaDDYzNzQyMzE4MzgwNSIMUHWitbaX0du6NNl2KtwD%2BySfN1Sx0%2BcjzUs8MBuLSUjeqFToLRVxsTaV9%2B9Gy0mphR1iz%2ByBJlAp6s%2BYq6%2FAqhmsjNFo00847hcFaUnd%2BtCm0pH4FO9cpqaJqrvhqZiMR4yqiSaEe1tSf1qz%2FUuha1x2Vd4f2AajmcDaENZrIUuKrYNRb3FC8J5iQYIqYdcl1uxb3BG643qbrWTo8J4kVGKX1D0q9CFlqsa6ZMtYkOX0MpWxsxeRaIhTdHlc%2Fo8yMhMQBamcJJENpxMBmeeEPiq%2FsFK%2FuKUrX7H4hvvtJwXGifTa6gnQMtiXryrwsm9%2FGigICuqDExbc5PwjxQzd18z6q01moR3Ki%2FSiQ%2Fyrf5hNy3jpxBSWWQWFYE9z%2BFWfq0dzAObCo0n0yXENR6A%2B9%2BrpRoSSsHGvA8bCabdXzVF8BmkOImBcS0MzI6%2Bwc5PDTeB7CHAreeyEbugVeynfzAT7cHJY%2BL4N0AECJrXy1sardGoid9BGZ%2BaxRofJTFxxUuPCjbHVmormZrue%2F4TTaUa%2FmpOZWagfzIyPa473Vlvrrz7xfgCKaFKku91gDKjam%2F0hgVKZ0dwFljY%2FSmY7SbndMae4GJkwm%2BTYfKevMIk2ME%2BDsiNZxr57P0%2FEjXJF%2FD81vbmjDyOvx%2FQwiZXDyQY6pgEhza8zLK3FvArD498C3FhLCT6RSHttqje9E2gdPB1GoKldYoGeYudBHWYW4Vrq9JW%2BzWWU0ERQBGStsqMOQJNZ2tmM3RuEOEYUD9Jh9sJWBFC4iTNsmGxNzAPuUxCjICevxtr8n%2Byux0RWwjra5o4BXBPPMnqQnoivaAxzd81HB9CtV80AkCbneYx3b9QWP%2BSVpJEHbahjWdoAyw4Uop3Yg%2FfyBi5j&X-Amz-Signature=7e12cce6afb00ea05b9200e97127c69f5e6c8d26c072adf7fdd8edb8e7a4c4d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

