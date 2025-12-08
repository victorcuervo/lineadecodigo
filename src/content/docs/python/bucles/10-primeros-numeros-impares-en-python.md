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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVIZA6QI%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T220942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA2JKmibixMExnm9r1Ur9P4GJpNAoW2kfUkOs%2Bwp8i5IAiEA8XwcG5mH2c4EUEUywAK59PJWjE1eMGLa8Z%2FTUBFRiXgqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEs6z2k5lEBtOtGD7yrcA3HOJ1oUjd017eq7oXKpOar7%2FuTcotFHa46DUwI%2F7VmEoE1%2Fe30e%2FFNJ3oIU4Qtax%2FOrNr6LbQzBuFMOWVRKq5SM5SSjxzm%2FN9MN3ZlA%2F0Ci3kjwZ3s7TYa5qp5yqJCjzACz25u1D1cLig5Dg8OPCBcNjBZczVWmXmhJZhtFouazTJO8GMiOjoCuPzB98mM9%2FSYNwEflcJ0F9xWhipjINoJd6VC2WU4PS%2BNilwr1wCTH1lgm3iXxLxXfmM918ss2qgSfZ4ZSRtxnRv7hqh6tTd6Bbf227pGTwWkP0DvGSK8cIt74Ai7lgMBg%2BJ3W2ofeszk9hJ8WQr8I%2FDuyU3wRhRBKI87e7r0Fy2RqkJa%2BAxGjcEJFKQJWbDIZtM2p2%2F%2BPQEP74eU2%2F2vVZmw8ijXQT0XZrVJsmfFm8rvKzNd8S0QAq%2BToBbxOq78Nd5O4Ps7Zg%2Fl0KyyJCyvrYPSeaefy4eYXnk%2Br80qIn3eY9Se53Reopwx93kgrjsL%2BIMigfeSHT%2BGW6f1japdKjOtYoXdhFt4qzggxu6sLD9EDeoTtAq4g1QJ%2BG0zwxcFOwdNOhoGMf73IBz2mENSEFSL6onRyk1ZxesZJEvnpF3Ldh3nf%2BHahCQqI8d5mUck3mKb0MP7%2F3MkGOqUBPXNxpjJKiK9GZNMJ%2Frn7q2YYIOXc7F7fG3n4TNmylGR9hyu9TClTJhm7tVt4kDMTt8BXW8iRLH0uK02YpJA3nrl0JqWhIbBoRaEsxQ71YRI6dbi%2BmJVYtmdbU%2FUWA9ZVp%2BH4lA1LEMcrWFier6VCpnzdMS%2FDCD3IfuX6pVaD0zchDwfddMWYijRm3SEkJYg4V%2FpsQITQvaZLmqWdhLyg0o%2FEJVxf&X-Amz-Signature=9fc5707b8bda59809c59fa691f9db2e2db61752011e1608519c924a335427914&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

