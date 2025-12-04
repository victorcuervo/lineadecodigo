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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSAGALGJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T123541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDRnV1iSXePg6Kucot7JcFrJ4CshYt0p12LBtEEP89RxwIhAMwAnE3Y17u2wgVUWgj%2B3FwF%2Fe2ygFK8W%2FKbMmE9SlbuKv8DCEUQABoMNjM3NDIzMTgzODA1IgyzNr%2BrPDf0qKJg6RUq3AO9e0EzICK0crIF9GshadEnlYL8tJ2b8aRLaaI3nMmylYCUIMPqHA5De6oSI7Hy2Qpq5hnl4BtCq%2BiEe5S9me%2FwEHxps7lmTYTnTqsuPpnjhytD%2F%2Fw6dvGcstqlUM56Si%2FTO4u8rlm8Apu4wtL%2B9mGIYc28v1mzVStoxWCFzRKpzuBPqBqVapM4WMJKYFsuZVaRv6YBNc8EdkZBnNaHgsRtRoFXtLbz1FZ2IyYCYt6WBXtTt%2F8YRwdTVh%2BXvQkJwwb3uqyipyMOWticV3YO7536QNDLZE1%2FoGKBTXAjq6A4au7ZQtxF9n66IBBNgewhABWfueC8N4xHivt3ZnMrCXAoqvQcDwILyR37DfmCwFAyVd39hN7rzJ6v82cnRFn0ZJlTY7J0nsvyIMw8rkymbIc7bVazwzkw4r9DW2GPUpTKgLD3nAAnPAZVGGjwqHRLB0k%2FIf6d8Mp%2BXuAODJ3M6Iz02xM7kVUt2zc%2B3b2UrXMpJdzDLTF6EFJagxmK4sY7dgP3WbzDgo2EC5jy7iOxCGF8alPfmcch919OX4fZxkCILjtloAnK41tK6OrmHDhuI3XdPQ9NPSiXHv9t0gDYvnxpRF1JD0pRuYE83okJ%2B%2BDAHj8AbqFtjndeG%2Bq3rDCB58XJBjqkAVDL6sY4WLsWeAjxBwuYvHKM3FL2csynkbuCws%2B18ybGN3lgSvCJY%2B1OfNlQtPf3npg4Y8%2FhJ2ozwSkJX%2BYJEfKm87lwlk7lM1If5WLAMddD8bqH1PvG1Kt8y1QzjHt50js1d0AJa2eDiT2y2ZdhsJD2yfSbfh9%2BPuT0%2Bn0TZ%2Fyk%2BU0LxgPACN8xJLTbk3X%2BqaszE6VvmJgnMvRZRDWv3jjeU%2BXP&X-Amz-Signature=8d90b36f3008d3d5cda1bd0175b4067d2d6611368fe732aabc3bd518979ad244&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

