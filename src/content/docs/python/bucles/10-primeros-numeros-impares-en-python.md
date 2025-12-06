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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2NDQUAU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T230141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEg%2FfNffKJzpelhUVwOA0xPwaExf1tqywfhLdwvtWTB8AiEAxmkwY4QZddlJ%2BZc53aprG3zJgnXADPCO%2FETGBR103JUq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDFQD6BFIksk7m659pCrcAwKX%2FzxUiSF99HL2lePaISppZuUlL1BLWnsf2HJD9Yyjl07SgMI0nXzIuRd9MdRT%2FnUtD3iXsb6CIjMTt8vwMxLwpKfvYjc%2FJH0G0zPeO23n7GHYMRXNC1GAnSB9kCDWlXBiY%2FMSiFjIrETrDSWPDlCHEslkpWzy3FcCOE%2F4s6z5z7WWMzP7%2BTzZch%2FMFCt6iPwgf8dGHcJsD7TjPo8d3%2F7rZEQ3IliwYudqE1hQqbk1zB%2F9jP5fYXkZWCK%2FSHeJNUT%2BQCnT6ska5piaVhHcMCATZ05CDmw3BLU0EfiTbGjDkJoowtFoEEUjfOwhlZUEa52WWo9qyND3bcquAfjdPSFYPg3Mg2BZpo7DjESPFfwWx4DVSoGGlRUvIA297wQYd8qofHq8mUD5r8yJr0uabPdvzhh3ihOkrGr2siYDnpMz5lGJn027ttlpgKezX9DDKlPCsvx1EdSVoxqYqAkHxdJLOW3gLohMnDl7WGAR4M4whP2FHQd5n%2Btrm25YRqiqbS2JXfo26n64uv7vJLzuIZECQOw5E2XB%2FYWIVg4WhBkf4GPULm1%2F9OyCJ8Lprf1QtO44vJlRSjSQkeF41yadK5NNCpVBnDoB8LOdhUyw29ObufUmCV6EC0VLOmPqMIbT0skGOqUB%2BlO2VVXlm2C4ZyiQ2QD9u4OA%2BhXmwtCyHuLGRJ3o65%2BjIgNWopthiX4X59C4uOkM3HzOqCwS%2BvXQqwWaZzP4OCbxEX%2BxzdqAJQkGfcuO3M4UjV1%2F1752A32S6OUVnzC8TkCnnJmOohOXpIaj1QHi%2BoVdgadYnv0e%2F3XwlBTh31o1MctgQLZ5gUHiuWUdrm%2BbwhVTZRv2GSUoOdw%2BQo5NTnnhZw18&X-Amz-Signature=1979cb44657fcd8d4c620db6ae2b28a72c286bfaf23a14f1757a548a5c2325e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

