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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DN7PPTW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T001023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJGMEQCIDVewQ3%2BsLfusSMbz9vMAY999zQ8C7OICCqICe5UgASgAiAGLM8zG95JzNosg5dAyg6jkhW6X2O4I8QcPB4asjz6ISr%2FAwghEAAaDDYzNzQyMzE4MzgwNSIMI8cLUot9sPJzbFUCKtwD4DR5KFdhrXa6NyoOqsSsV%2BeiwXU7XQlEnEIAKo%2Fn8NV7IJw6r290iQ%2BTs%2BT7eeOzdl9tRpotasgVtS%2Fj0PSDw0VYwaRLSiUBXTvueQvQvkoBL3wQ2pRbls8iUazIf7U3l4hWFHwb225BVe0jOCus6%2Fz55ZFsrizLdQ%2BmKt%2FGEUxk9gwr8cAcKzYBU1YzzVHkMsDX%2FvsGEvyvlgmIRa1CSj59dCPXFUaqigAy2TR1VWMPsmYWuGdgfurvpT0g1foS2%2BAgn7W%2FOb9nLiPhnlpgB2iUxEdB1gqwUQH7y1UA6h9VkUXF3X21BfrpS94fwJ1Rl5sRBu0UNrSiNTc625WJt7RbfbnQiZl6PXjMT19yYX1UTZxs03H4WDxiLNY6FFehmhsJdMbrxZhaoS4PV%2BfAN8us4I0gFJTmNaqyRh7tpgtcTaWQjK%2FvD5mq7d0eNZMxn3mCsuZUdte63UEVyRzWtDxyK5Ef6aC2PvzyDF%2B8P%2F2HlxS4qAwZA%2BGS2CXJe52qJ94dpksHaI0D2URGNAAiiOsf317ixXi7yzQ809dX83WRrKldAA%2F6X3Y7Gkt5Id%2FsoGAWIaOt8171uKVxHLGlFLbQkZHFL5EtW2hCGzPkMQ0vPla477tqmH1W4NQwgv%2B9yQY6pgGOV%2BIKyoXYh0P%2B%2BHHt4Bz%2F%2Fc2b6LU%2BDpkFO5Asa7fqM5bjpxQLGSEs7S0kYJhI%2BIDWsdm%2Fw8DNB2p8yxMBf3mQXtDyXOPMI1nznMSmMjlHxGeqnAXkOBUAixU8eWwpJLS%2FdBxFuwatSwC%2FTTSRAfJpgxIJFrSqj8sFmqAMrioHGn4igb%2FB99PmSidH%2B%2FubtCjfwZYH1YvTf2fKZWs1bpNOGhaYuvFt&X-Amz-Signature=1e12a33bb21f4e920f9bd3a794267e2d34b7e1ac82676d66be8f5ec53489c239&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

