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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPS26S6H%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T011922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyqJ9%2FrY2DaBL7f%2FajT50D4Fonj9bc1Pf1RP%2B6mhrcSAIgIxq4nDDKLTCm9dtmPJSi09ZiU%2B8u0zARGUqp85dQvioqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJDfR2wswtg%2FNMwzvSrcA%2Fdk26vKDWJqHQAGSF3mhJC1aKpIxDm%2BmKFGMeaYH%2F%2BKjZHgzKNn9JvMcD9Kzj%2B8%2BUfzl4N1ttLRDn5VuYFjN26hsH4ZB86VtOOC3z5yC6lFa6gSF4BkCV3kFSceg3i%2FAVSUKnQWb1UMpYwdl0mbBH6xXoTHhe9CA7nYXW5HWmYCPHfUztWF3k7Vv6HKFbc6YqCO1l5IhqWTo%2BiPCEJ%2B2m2U3hlyR1aWDeSdolP58c6GVdkGt2zD5%2FZchs6t3WPd%2FrFh6aq%2F2Y3n7nZZn84Gi1xDLgtbL6x2NNCERYIkB2F%2B9Col8ao07Zrv8%2FzUNpK%2BYaxc7ZqcgB8MbmglbsN9ub3rESDd5TPxMUSj3ifzL5wf%2FVLepXqK55%2BYB99Tw3CuSR0aTBNlNqADBS%2FxImMukkYiYQ4IgQTes0D%2F3A1bkepkPCQQdFMu1VGPmxra5tKxADdCpUcmWn8eQk%2FAci%2B70DhhkPV%2Fh3VrnMwCf0M13OY8Ktfi0ulx2Ec%2B1UBStDAj7Gzvq%2B%2BMx2GVD2jfgK0vm6TIKCBjSQR5cyTJR3rl6OW76CMsVXmBj2bHcFSqJkHZ3HYQJeflFBGyKg1CLMZvfS3cW0YzHl7MiOhhPNiPbrPXWmBqULN%2BrvXPeT%2BoMKzp3ckGOqUBG4gb028yLpnBLwhqnMAwC%2FI0w4tZJlsiPU1%2FoAu2V8A%2B%2BG9aDSJikB5jkcuEFZmO8kZCP1WrJYjl3rZWz%2BoWCpswzNufxXYArU45Y6RfgHcrKY1IJ2qu85Aay15djcrcYi5DZrx%2BzrbvAneh8JzSZhtzrwiqAFHpugOoGKvhZy0TmYH95M2WzrNeyffDCPDB2h8aDDN3xlQ%2BEERKLgeNZ6q6JVIL&X-Amz-Signature=45a4e3390aacf021bdd373914cbdb22ffc4db7474e96b602974b4ac291b8e5bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

