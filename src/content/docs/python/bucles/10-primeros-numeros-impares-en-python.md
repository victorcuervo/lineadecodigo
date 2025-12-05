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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J4XWTPY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T215637Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzj8%2FHT2HDjnogcgfKGCEmlKqLN4UPm9TgFFwDf8%2FhiAIgEw9sjDjotUMovGs3NuLsjZCWUmrjUcU%2BdZp6GnuF8e0q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDFMuHYGo%2FTgdvMWihSrcA0GlnE%2B6Y3OG8KOGXJ77uTUfd8kwNmnVwHgErZYbVZYOKN6sSKmIzHnpKXb%2BHRtWIPqXgASvNTRVFUfSGpVI2S3Tv4vvBW73oi6u6YlwN%2BpVNnNQWpx3ofeb1fQ8KL5Hjmp8%2FG%2Ff%2Bu3eNwW%2BnN6WDE0E2K6SauiL6c1axCwfFLmzhTKfo7ACVTh%2BcFMqOrkw5MPA3fZY5spzuipmc8LZsJ4MZeWhEwiSgSYBPLMFlDQ7qRaqWTSQkvu0%2BE%2FGjwLq%2FapnrX8xj8FqwySLNIa7lqYr0LKbNn5dKiRaJrr5JqhelINhk6ztjquC1bsWRH9lRDQ9uDMBVNeOqsjdHWGa%2FSoKeAwfVhsFftjSYXjHOeep6rpTTEF%2BTmB9Ror1fGEICD%2FeItYC40taLwaXTXEC%2BxbP3cF1tq20%2Bp2%2BU5dFFafetCQ332SuGFYo4SgcBY8Kw4xZYfghPkv2Wz%2Ff6who%2By9muSMYJrcm5Lgre0tcWCDw49yIdiI0smRop337oiNw0X%2FZs6iKkmTHyAwJjOpbCHKtyY65%2FygyugCrUA7NYIOEFgK5NmixmizjuC0yHZAIf%2BeYn4DRS2u9ExCDxze9lY3flUYEZ3g%2BMgQ%2BNdMLEVMFw1hywJtd6Q3N7zzwMO%2BGzckGOqUBx%2FfDb3WMbMs%2B4Dn7A4CNbsw5me5iM%2B7hJvlK%2F%2Fj9ODIfyxkmTetXAAhaJ2ezcXZnEBVv%2B6sAr73F0eR8tsCpUBLsrr%2BSj%2BzTZwkjhBqjW1YTwQ52k527LL2WR2hmPBzks3F2hV%2FWwt4vBJo5fNLC%2FGKlmyRiS9bqowDINL%2B5EeJWpzQsV7UbodPnAOlcihx9JEV8PUl6laxPY1iGlWMRO3ZV07iQ&X-Amz-Signature=954b892c163e55c0449908026cd465ebe1130785ed50f4fd600abaaa67d4bfb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

