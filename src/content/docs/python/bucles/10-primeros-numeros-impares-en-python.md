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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PK7BROP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T092918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIEKfwZMD8TnIJNcl0nuvMbegHQMk8lcKtAxGhm4adAkaAiASWbS9jWlkpOUU5mkHkiEXFAeqrJDJ7MeEZCdw0gRm%2Byr%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIMi5iaOgkKkyFGe2UUKtwD3l69GmMlyrG%2FJ8uCR%2Fzx8mUxJeu8vUocDOZ67SJ8R49W6jyl0jpDHxXyDgX0ZVq3EK12WcSW5mOrB7sLTBnAIk%2F6OycQgXaOtcBBLgw9J%2BlwtbO8mEnQ2twFhTMm4nvatD5Qjyx4TCExQoa%2F7p6EzCRw%2Fhal%2B8bbo4syeWzsACOmwnU%2Bltx28uMh642QYN%2F8IAUpfVFBPiKLw4cCPsRM3%2Fs6%2FmSgsIbhnjpFBlYze%2FzUj34cou3hf02%2FsKmImrdxFK9gkJ6miIpZA9MgGo3AO90S8vWZ3PiS4z09d6KBR4hBAaD0MVt5ngI81ClkolzF0lZ%2FNOr1Uu2bIgTVYB7FdrbECuJMeJvxu2xsTXs%2FzM648m4W9ttp8xSpDdnkeSCiqGGqWhLntVQ%2BNGB2OWSUCsFLg1%2FNR4mTbeQlW2AcXtehtS3uXp%2F9cGu3t%2B53h%2BFO4v03X8ZbRetHsXdLyDs%2F%2F3%2BY36%2FuouYBrQd9xkLkutlXUu1V7DuUHNPX7LLy7jZCC9U4ubzI2v9%2FmeL2Yu3mGlZwwhbud18Qy34HgmH6TAV1Fgewc8QA17xwfVpwieWcqGBumoLzh6uNPfOqLZxdZxQ8jbXfAMxZpwrAVgZDPZe7EHrupzZX7LFZl40wiYbFyQY6pgHy5yrgWfB3In2DhH4B68jPOrTZt8eZTlLO0cfIicniQwayO1kY7H%2F3%2BPPDxCJfFcUcu68ZAd8qKMSvg5bMh24te74pIhCDLA3muK9PtQf0xJNhqItJYnrJhskq2NdevnAHJWPtx58exofCSH9ExizQ%2FyZWGW5AmP5M6PbwQwVfodyp8UsNavbF8uV1InICIEWA5cxhOi86IfK94%2BXMSug8rAwBMVv%2F&X-Amz-Signature=054692055401706605a3a3347fbff970ae5dcd228e9e121a4b23b3ed6607ee2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

