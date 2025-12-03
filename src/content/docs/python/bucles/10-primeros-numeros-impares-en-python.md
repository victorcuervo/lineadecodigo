---
title: 10 primeros números impares en Python
description: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
lastupdates: 2024-02-10
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652ANPSDD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIFbolzwAiA%2F2utLOyMmiVoTMLokKZ6%2FG7JSdjUjYajL4AiEAmEw6ss2hsXyOSZZugLcWS2eQWlCmq9%2B8CEcjw20UJUUq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDP%2FZlLVLYQmzDRnfxSrcA6%2F2prUy%2BDTpXBLKzLZ%2BN3aRIyafexI9gEAFvSmlNUePghmGeF9O%2B7ei%2F2GkTtLq0zN400ilfOLEroST5pFWc0eCVpmjRf2gO1ShnZugBKXpYLesrej7yCfKjON5ZgDzaMscoV2eRsU3mquIcAHs8bolNJ%2FUrt0HfhgHS%2FSVjunBY5mnahu0ZK2LYzRB1BeeTsMHof3QK%2Fh8T0J08oKmZFCO1IxNt4fxM%2BWpnSzxzL0Gbdi3SLnntBcz%2B9RDTL%2BE%2BwK1JSV%2FzSt0GhyGNA7k1BROC%2FySSK6Ew0oOLPzpyU%2BzskGDlKMcG1MefbFY%2BFQQSIZPr7AD7Tc%2FCe5TJSGrP%2FJosGkcRMXm5%2B0qYawFujbS01HOLrSB%2BFwhOqqdBQsXHkvxRF%2BwVUvuDi43ypHlNQ8N3bcbK75m77xE1Ab6pqMAdxcyG%2FxDc6xdCGZZ0IrhV0UExH1crlyW6BRz0kUn%2BPnW9dSmUHznKOk4b%2BbyOX%2FRJXk%2BA0joRc946fKGt4M8unZO6gDA5jQWAA%2Fc1ron0gYh%2BGQF7ACOiQWyPrvIota%2FmizWQQgc7XSo3Z1vwJcQAIrdxjMiFrXm%2BE1ynXtLEqe0SIf2PsUEpTscnLjrz5%2BzWrW5zt0GJHlo3XrfMJLdwskGOqUBIjAyEbSqjIjKd27WPcmCJTAI8DoTqaEeyJm6wTTaQNsLenphYfxgZwG0b5b1JvrN1xhDnmZsC3eKFgZLzM88Ztz49GntWp6ScPVXfQtv%2BWuigmDg%2BrGYUBuHRGI4jXQoU%2B79IPue3sn8cbAp7ATKx0Hd21efhe1ZuOmJA1Ehse9EGCuLlO%2BXPHBw5GeFKSrTwk4tEA40048Q0C97rkhJfMkipgh9&X-Amz-Signature=387527e260d47928509e6028139c7747fa69e23398c26c2432043663ce754539&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

