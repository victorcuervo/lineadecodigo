---
layout: post
title: 10 primeros números impares en Python
excerpt: "Ejemplo de código que nos explica cómo utilizar la función range y su parámetro step para poder listar los primeros 10 números impares en Python."
categories: Python
tags: [python básicos,python bucles]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656KSQMFV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T004118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIFVd4p66Ac1K6s%2Fq2RDPMcUurPJHz3maCMdZFybeCS5zAiEA3nWJVkX%2BLmCsXQIV1shwdc%2FFu%2B1vrVysNo%2B%2FkqPKLQoq%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDLiMhb7qZtwnu2Z7NCrcA4vZdya8o6oNL5CN2FXuUQUTqxL4kSKAL3WsB%2BnwR6P2TxK0SoZFpmzsTtFF%2F%2FXqS3l6tvueMaiwnR%2BOsEZA%2BYo%2FTkkTRL%2FxSr4fGktWXoisBcMnrICyXBFnvNq5JmT1JRL14lgXt7daqlemK%2F%2BLZ3M1qLwyyQ3%2F6T4fFXtyr4R0ffgE0oR7g%2BNQ%2FmNSqrBW6t234novYLO7fahVUd7vKdZESuxqh90G07i9qg5fJtRe%2B5JY70GvW2c%2FsfEA6SAq9BJpwMcQJR9DeHOp9jX%2B%2BRaisFgUhCG%2FoHF4zEJLsjXcXayVSSmVMjodusElM55Zbjvpp%2FGX%2FA%2BHr3%2F0SEQl%2BDl9HJEObkqhSfz%2F28NTIl601OdIJNrdgIvq%2BP8NZH2iMFzn%2F5xFe4gKmKtkIW2UAArtV46q9W3sGMZZzukN%2BBJWvACW%2Bq%2B0QnK1nqd4M99tasijV2RuDZbYK%2BJOb5sLtmbzw0sX40FrCtn4PW%2FoB145mKbZhMhOSdlK7uV0toO479f0uCyPc3qSslAusGKWDpZLG5cEWlah1M%2FAfM93zflstfo1uNDsGAkt6LIspRm0wAkRJZbdurPAnMCjv1T2SGRBgFutvwMgYU3hmBiGkj7ygqEPHfP28DTaTs8vMKn%2FvckGOqUBbUMOsCbqeg%2FYH39f3OqprMW0gan1hCZbcVR0URA7TR24IRAPOA%2B2UFfZVNCTNfoVDxp58%2Bw6kUbuWL%2BMBgkNd7fWsNXwVVgAG%2Buazj%2BZndOFBUDwUy24ybSry6ehao6wjsX1vGqMGhn7rSYJaxtv6Sw%2FQBzhPstSGhE5nuevGEOci5vU0fCbFGJqUzI%2B1e0GqrBVZszJhiR3dXSK2zPCP0LkBpAI&X-Amz-Signature=6f85a0d2801dbb93fc163962fa3bdda0d6faeb6e70cc9ffd3e8f7b7f69d91af1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

