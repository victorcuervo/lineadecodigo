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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46643ZASBHR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T053116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJGMEQCIBHBbsqsRu035%2F3r79x7%2B03uTNcWTKjOz6AubJFFdgUMAiBTlBHBEbOmL5piMzxTJ7v3vIi6%2BGD58JIOyFozeW4fXir%2FAwg%2BEAAaDDYzNzQyMzE4MzgwNSIMTIkwFzqQmBeDyBatKtwDZ60lNzaLNBPdnz8a8SCTwFJ%2FA7qVMtPxwRX7ba4edwkZ%2BLZXKikpdLGcOgFIhbbujbRtXSsA3JzlPcN%2FrmeXIC6rUhvXWYuE3S5MSy0FzKPeozWJSLAHnEn%2Bzv8h7sycIaSfHwv0%2Bn7yneqFAjn6zyvgkNlo6fN8m3lSwYhjiIGVk9WGIDFaznjeFCxs99aJ9NmLyhyOPwmRVoDr7TF8OM1OHHIbI19VTsbHMJhIf4mdvJA%2BIO%2FNAPXwfciRkgbpNNgXB22cZ8YOZqdBkj2%2B7xyYXnbAlx2fwmUPkImRzBHzW5VvostKEd%2FkHfrxoO6HGYuisUZUO3WuWErG2focyyWbeB0uO%2FPL15pNfm9Ge41Er3A0EwzWR6RIe7gEQF4hpVKA3Pt9XfK%2FDez20tGG8DTiNfH%2BlO3S9uyJZK6OyPofHse2NmuuIjgSH9gGbEenD6OB5hpvDUSJ%2FNhVucy2O6mwDmqlTakv55gbKb4Q97bdEUar1XI1wnMOTKdjBPy2Xan1LUSw3AaeTZBe%2FCU27EB8xTlqSKijNhpyNLrv%2Fpijst7IdG7of9F%2FrhsnC2q2BnkSejJrOMwI28k2Ltt9d0NHe0qEQGoaDJ8B4wlnIp3WsY9uNJ%2FD0bIkOpYwy67EyQY6pgEUEzNcljq5hu3TuRX%2Fiz%2FMUEtCtY3FoVgD1bvIwWidnwl34V4HZ8F8J8%2FkesR2Rq3SnY3UvBVaZ%2FTmcLF8fyRxzROtMYmPF0ttoZEOPKunUPTq%2FwSb%2F5N7tNJtLPPGPx4%2FgTJX8kA8GHLIhwDBqnIjRWUqJrcgE2B561lnTV7vx9S2%2BsTHRLC9cMeGRfOlLybiFC%2FqRIZeDhCQ%2FatNrgasT%2BRoT83X&X-Amz-Signature=3aef8138823b6aed80081d8a29f63b8dfeb5fe90a7fe8464d125e59ab7670792&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

