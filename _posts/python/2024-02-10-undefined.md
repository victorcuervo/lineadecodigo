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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TCZK7BB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T150455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIHP6v4G1Tqn%2BMQSJ5LvtJRKo0glBHDA562k%2F9OF2DiyYAiEAgTWcolDel9Sbl7cwcFXAuHNcx%2FaySqqRxMnl7qUcZbYq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDJM%2F9OVXEMMVnoLktyrcAxXkpnkfr4z946hvfaa5Wv%2FuR0%2BJaYxWoOPVltbfFhmB6Ype9Z9qrON3tvD7x%2FhsujhaAQ9JCV5nChl%2BBdenOteSNvDUbdu35SYiluOsr9Y7Gp037U5e44Wu0dF53YWRr4ITR%2BEcoMoRWiml9gRinLA8BiEMDOXEilTI3XLOqPYprMUpDo7pntV1ou3OrcVnXQu8c6YdT3xHAIe27gLsvl%2BDOYDgxBmQnJ8I1PZP4rdIiGcp6iExFOv81iLR6bD8EsAypZFC%2BDtLwqjKo8dzTuIG7WemBkVEB%2FfA%2BfqB5Jp3NJNNQqzFvXdcNeFRJbr2GlDcr4qxJsXkqh8vbjwPwYpSD8%2BOm00AMZ9M7VhsiBLsDhvd9uSsdxjSQka0MfWieddOC85tLZePRdckFXGxXpmtyk5a2gXRtbhLGrvfGp9LcRA5kYK%2BPp08VczswBrIlXThR%2FW5xu9yi6NAsGsO8PI%2BuUo%2FwiLa64TXtmXjWAIC5pGE6bE67Uqy0ipEi8WNYP3ZWCi3bm6Nl4QQ3%2Fl%2FDnps%2Fzc1XFzFLcQV%2B%2FKBado5U4KZ6A29X7DldmN3c8dG%2FI8FCRDpapOTv0MOVO9rG%2BCC8XipA8nhaEJwVjxB31nToTwtQoXSXd1w3AxvMMCHwckGOqUBoIOBRgh%2FjBTjS%2BbNr1ZYnp7SLSfw27iIUv0h8tLhhhOwV1CswTVOD98%2BEwAnDedgVeNz9V1b6XsNSwRevxgDqIVuqnHSZm3fXHSdVHsDizHL6fUchWWPora24ZPph42bmuXezJUhvV%2Bp6raB4YyMQYzPYF6Z37PMzEbfA7GV7xMc8X%2BA38FVtQ4hKCCy0qmsPt6Ncc4I%2F5%2B0wT%2FnkxE16rM63aZC&X-Amz-Signature=dba52cc206f163f61d290f193c281f42fb07eed86c3ff85d86b7bf44a96e4d52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

