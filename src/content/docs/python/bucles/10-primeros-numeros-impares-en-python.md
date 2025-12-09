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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2UWDAIL%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T082726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDaTvVpNFCY0ijcSY%2FLLzPPS%2FZ%2F8JONe54429qaAeyZrQIhAKHkIYZi1kqlCFD4HhL%2FHVFBwlGA9nJD%2FQGVq2nFkOuHKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy06b%2BwR6RxuHGmQ60q3APlVWitt5mius4T%2FDNxDAP8SBIXzgrR0IadgCS3NDWt9uUee%2FEy7BZD1FPKGlwQ%2Br2egpEcpOjKDr7UCtE%2BUxRDlUFVIiZsrVo215EHTDIy4kz09eKfq%2BH9fM0dokx2pElQDCFAUh%2BQbIP0PVBKo9wnkkKV8u%2B0LSgP5CziUrOQhH8%2BfdtgBmLWTYnH8SriJYNfG8dUi2CpmfPg4CMn0krGNJvlDoPMjxF1llfZbimM0%2B3V%2BDkLbxpJDWHX2%2BFhnwCP52y6YAa7D6Gscxzr2iGwx5nQJ3dvfL8EC78yDn7o%2Fd77%2BS9b7e7ER0HjdfUVY3l5tKHMzYNKRplP0bpk1KV4qaVli3US86j6enLYiWg5Ph6%2FJgq%2FE76gbzGTRme1CwPOv82SEA6iA2x2OFO5gIdM8x0EOeiNZP8T2s96%2FCVgGccOwDUiKYju%2F2itaIQiyLUQrhrNoKp5BdMmiVkAH7kkq3OqPxQ62KLc2f%2B7VQ0OCkFM6ETKGpUX3KX79qtDrpM45snb9oekQikoQ7N3K1Atj%2FietQigPv9vb1i8YUVzOrg%2F297rMJRXXDOZnXVOEqLXDB1J3dGSyM%2FsXsdu8zL%2BWRxQXw4aE9qepaDGJkZuUa%2Fpln7%2FACM8fxoFLDDQpd%2FJBjqkAbZ9HEhXXRrh%2BzrcRxwDQ3g95j%2BPleOEK3hm4efl0JSlC%2Bybm%2BNFrYJH9pfYlhuDpRK0WVyUUcxHBp2RVda8qU5p20dVB1Ju8ESNrq3s8th%2BrzQDAe26%2FLAG%2F5Jl3ponOHw5NteNp5%2BYlNOZjypI%2Bp72LOb5ABK%2By7BAUQ0QjaBy9tX3beEEcgIX4jv8vTW9MuV5KuauVNX3v5KCxjBBY6oiICqh&X-Amz-Signature=ee4b513144d51532108488d6a2475b3db33ba75ce7c989d8071abffd8915729d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

