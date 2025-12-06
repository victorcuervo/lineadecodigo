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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMSP4VIW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T072024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAn8O7DYrz%2FuFeXx74bFe4tPpUGCcAOBYB9R5%2BGr0%2BTRAiEAi%2BUbgrfNjAwAfiFzhR65N3%2FfmBPfNVCAfYazJN2lsPgq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDDsk5%2BAJwQ8GAPbMLSrcAzo4g2WeoS05ViLwZfxybIgQ5nvJbFV0ZagP8Prtw742IA%2BGZMChv8BAYcS5szonEX377VEXhYf%2FA%2FCZUu%2FjrJ743duZgfkOWPiWDofwlyIoEN%2BD2Ff9zznOcTyHqhmzN%2FFgEmPtiOPZRc1MVT5IW1GhjAM3Vw2g%2BK0egMjBBTDgGWnH1P0TdmgYyfDHZikyUEU5m5Y3zaUOkYZ7j9vUsrHKgyEok94KvD2Srl304sbHakME0AmocSSiKL7oaKPD41CpcrwkDI994LX8kswq5hbrotlIm6HEeXsM7wNqEFIv%2BGXYFSMC9TaPGcF5UINX3IeIi%2FVzLkPeghvGCZcDh5ZfoNt%2BagL0nP%2BdmhlWfBoe%2BT78oN0Po4AjPmR2PP%2F0UFiOFwStagxRdvWs1ZwuNSriP3%2FxxcbzGhFh56hdIk8YkxXR4etbXM00EReRSXfjLa6lJ49N47I%2B%2FJUsVcHWI5zP5gxQMuY2l5wu9FPUOTgnwA3MC0v9VpNNCbzOdYfI85Y%2BHXzC%2FSPxHq8BPQTNmkB0pK6mz9Ieytnu6PrzBFIGlXor0MVyG%2FCng0qiWZ65qYKLJcIHly54mxkk5ZVVF7EX2QZidOp6d6KTvaHEyaCBue1KlSvQ3RXiZ8bmMIefz8kGOqUBZtp0pLZ4yvFJJm5mbFI7fbUWkObqiLVaVHH0RWGFklXxIRW6qA%2F7erWmkB0R0cRS2ZKVX6TVBfye7ZtKrgcsy%2Bbc0KKcgePeqIo0%2BafLBGHnJ22KkEr7eG857jY7brthk2qN7E2sIPV5R4GZ7OA57jdXkzDh29NrAy91cu3utJGy7U2pltzousSsy3qUp0RqlbBl%2FsbikHvNFbvaFq%2B0OE70kz1a&X-Amz-Signature=c5ab096ec0ca67f78c036ab2daff901e5c46c6ca93805305d013cb75fa7f42db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

