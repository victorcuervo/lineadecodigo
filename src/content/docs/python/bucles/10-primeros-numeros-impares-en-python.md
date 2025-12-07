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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KCKLXN3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T175500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfQadBe1Clao3AKebfDldfhL22bUfplXxsA4qjbv9tuwIhAIFPhxWhJ%2BnJyF9gd2Fwd0%2FQB4oZi0m0Yfb0HKQrgpWkKogECJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwCxgPM%2FtlGIBhP%2F84q3APl8DIMLkF74gGR82ehkWZQn%2BMXCMZEu4tYegPF1X4Ec8xqdvOIwN3ZatZoJe3seVgDB3LNyZpxl38G%2BCyg5%2FsgvXq0P487Yf7z%2Bft5vqm%2BudIcpqSSUx3x1tmoT6pDkpV1yDsnYqx2jlIJQVbIlwNjhug%2BwYewY9zPEILG9A2FNzRrA%2F%2FzT0W3WaqR7d5%2F2SKT7fLL0kzU98C1Z598ZbudoaYZT3oxt4wsPvEyGQZXW9IxiP0%2Bg8fjZ40BXvVq5rHbR%2FndiYBnOMNu9n2crJjIjZztSOOGPXRrvLva4Ouj9yf2lAAGGL0dfYNFlU4YAlz9jVfSwjciVfURocD0TM2yFsqhi9xot8BIc5qnXud06WMwdbBaqeNgQrkN35%2FbRMU9%2FZL%2FiQxz3rvOEzQxweZdv1Cfv1oEDFnDhbzNKH%2Bf0xYGoed7uVeZH98N%2F7mBVIqND3RlYG9fbyjWisMQxHEZ3MnfjCbL7W2maNs8YHcxzudDZm2R5LGaEAbb32RYIfF0JXmU6voSjqYHO90Tv3PWRJXBqG1V7p44kiCOTA62S%2BzKRtwdnmvP4ml%2BYdqQyqPqEFFvpBtu70%2BveEr9gDeYM3ATOWK5p9Pw7wckv8S1nguhq1igDoVQm36dyDDNu9bJBjqkARELZwyVC%2FSf%2FDIJRjy61kZ2a8DQZmyf75DkPLQZS%2Fhq1pQGv8XBiTTTs%2BeZt7qPhU2q5TYBSzUoDPdh%2Bz4vY38T2oU1HtgLaoWe2RHxrGK1XEcj46bnJkmbIDzpmmBXBt%2FXMyvYFm8GISyC0JR2xdw13vTJXrh9w0g8d9jRskV6W5lW5z1jf7T5Ut82w70rfbgR6IdxWrATVtH8pdMsGwq4qIRN&X-Amz-Signature=f98f66ba9c0a72f4ec765aaa7669613a281ef023e5f0e1abaed474fa2c760f0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

