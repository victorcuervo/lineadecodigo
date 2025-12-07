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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664MJ77A4L%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T210202Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGYUS7S0LlZ3j6lUSPZdvZc7W4v3zGcZ0%2BAjw2abKkQHAiAqq%2FiWjzH2eeiz2nHsQ25KC2ozAPIkOb3Ok%2BlsrFSb2yqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMW%2Fz3cLK1%2F2IzEWlsKtwDLDZT2bHaR9GRafWpsz%2FODp23iyHeUUhpVxgML7uR5FgbO9hQnTEKXLdf%2BAqwIiySTbOBorFda397OwMKS482%2BGDrDF%2FHUU1OnohM9iWhxFa3SdV%2FMZHWULhDmd7cQJWJgaifbNCNervOExcyt%2F8TKrVA0VGUrsJhRaTacza0jR4hY6mmdgxNURaB%2Fo93hoDbBIya%2FOLOkm73Zcym4c6PUIC5XlyNql6rF94rB9CGOdzHXQsKVIqWJsmgjq%2FSMGlW1DydMwpT1sXjx%2F4nf0mFgNIP3wS6N6wvxaq8SrlzqdEQSihhhtHi3w%2FNZiqZBNB55Zt9n%2FOSwD0Z95uli6lKpOTi3pzA064s8oAVHLsGfgixR8bKaG5Sij2w1m4eK1wuubsZDXQJMXtSgg1pj1xGfsF%2BrYwNrtI%2FRkkgHvGresPP9iHyVI10U0wpD6MNFELEIbGYsa%2F0iakcKah3Ne0A0ylNUevjGydRSHmWQfyGXWsfkZx6JSvMnfnR4d3rC9ze1RnAdAUmYzmtAF%2BYa23GSAItxmdRM0ruZ77SAAOPnKsg7ssAYYITz6NbxTYXSl0s8q4Imwgd0lvdM6xmE5z2xZ79DyH9eR5tcsIBWAUVeWkmV1Y2aUR0TCgFIRMw%2B8bXyQY6pgHEba5Km4N41Ix2GZaZAk31Qv6uMpn1OA3vNNHapccKPJertXzL3WE%2FFWyjhntQcklAM1a8pl3Rke5%2BpSuZbc1Rel%2FAUQDd0adOj7dho7uYsMLvJwOrekRwlcXETbgGgBHb191T3Z%2F%2BKsU1jS6FdyIrRn3OEPvduInWaQQ9O%2Bd8vTOoEiphU45t%2Fo8VTQuozVImn03oMeO0nCXm%2Fx6At5ps50eTux9O&X-Amz-Signature=8b82525b4927021e6f8231b6854bea2f7d6cef58862c071bd7c4ae352151c7cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

