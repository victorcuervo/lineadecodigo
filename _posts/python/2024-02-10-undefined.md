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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KBDNIHA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T161830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQDEqA19ccgd4eI%2FwyHdjxbqvOKHeyCmxn%2ByBbcb9PAjKAIhAJAyoPQBmD9gm3yAdIEBWEGu9iRr15U%2FWncAFNUXHcokKv8DCDEQABoMNjM3NDIzMTgzODA1IgyFWks3XIBH1ZGSQRkq3AN6NgWU1DaLsvPktx7rN2%2FO0g5SKXsaQkUa3BlI6o17lnq7dG907gYnUlEq1fvns64tBFqu4mCZT5uX1aRFz3OaHmLNxsiKQrna2JyqFvzy9T9ngg0v8r73io2xRZU8BBColiJeUEkxc1QkNZwohF3BDLGPWyri7m9Ar79qV6f%2FHFhvkKQZJ5r95qedOIpFD6tb8AcfWTECH7UEsarWHsQFGRt4SgDlHmonR1NDPWVPR6Vc272kBeoZNkyYNfu9XyBy%2B5LQ3QgVvz%2FyGdgKSM7rt9Gd1cOSwN9up0uguN4ghF7e%2FEGz3LZ7hRDEgXdGuQ%2Bvd%2BHff%2FnHCuTbPSi%2BZhicFSVQoxlhMFb06%2Fk2%2FfeAJoZc84qkYzqUPQWDmp%2FmIOT%2Biu4xGpiJ8AulcF4Q6gMxbSJE%2FKFEiO6fmogAGth3WPdnZ%2BSx%2B4frJezfykILLB1YzqEqglSkwSzq8f5dMEHXJ2qwTyocvh14wx4T86SQEgbXF5FcO28vC6olgfulJ9oqwJHUzbxtxSdrs8%2Bke6ake8SHm4hnRLaD0rkVKjzEh4SRqougjGSAb34sYNVxXG5dEuOqPQ72QYY4PHlSqw%2BGb7l2TO6ySfauDYzwUEuBRwBM6aRtKb3h8tlZ1jDlwcHJBjqkAQIT%2BEFsM6ySsA%2BfiUNTPFsVE8Gn4HhtEPOL%2BSfViToJ6kZ4NB9QBR8HsxZ41F3RyEk89NARaWBziH0FQwkOM06x3Y1bI1ObvQDocBmdizub9SDSHucY9sxZhthz8TL4ZWIvANVNBCeKwokEUEweOWO9y7JMMo3Bm6d0bcEf99pAeXiq6LmKWZCBrlZSgGSg3zB%2FjRbFJ8usEmmlrgSu7NyaXpdv&X-Amz-Signature=60166e8e60d6fc9c7b504aa98901cdac5e76634278da4930410b6a02fe4a933b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

