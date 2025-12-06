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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBTV3ORB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T083554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCidBnwdsovhd8JX%2FDlSYB5Wpps9vlsTOlcigk7Vhk1EwIhAO02a7WGn1J%2Btfbp32kiT8VIz%2BzSiqffy3SsbtGGbQMOKv8DCHEQABoMNjM3NDIzMTgzODA1IgwMTyJbuL70ZgJJ6QEq3APHgaeglfejZCfbJsP%2FdwIWFO7q4c%2Fy0%2F%2BxBzlEhMK1vGRIvULOiozOZysHHkbsqd0hEd23TveyxRFEIv5d9%2BljWIfcbx1pUwEs5iHm9qPs%2FQJBeCmYRqfbhO%2FEHt2rSTp%2B7zBsaYWIJPX%2Fa0%2BjEYFb6jIWMsd8oVVCW7yCe2oZy0LNQI3jQ5KZOsbm2m%2Ffs4MsNYDzC7iy%2F8DVt3Cpj5zN%2FTcHr8S%2B3b%2BHWuO6wB%2FNmrI32EjNw6M8bhjGnk3GNcoMEcpYNz74TG8G%2BGSSAHgX0fHsQiRp4y3kkopWkdBrqthKwJ4l%2BcphVzxIrXtZ0gYfmZW8I8d7kwBT%2FnrR57BL%2BeGzs%2F9TT%2BgRfw3kLmcXqLValhKx%2B6RUZswoYer0f43dYDswMXRpAUe22ei4O4lQrCCYBD1G1tEn9XfpoCpqqTpyJkZljUg4e3gbeXS89EzuPDA0vF5%2F0SvTde9LWs9epCsjBnVaUwmB76vzCa47Cc9iTZrkZT87ejJbJVIVFt0vcARDXfi1R8POM5Wd1QKtA6X3vHH3aX0TiuR18W0dN3XTd9LFqExFu5BjC7KMxENjXR5aVwMszrGI961sSjBCz8T2A1M4okP%2BBqQJDx%2F%2BJQQ%2BHQ%2FvmkomgxGhVDC9vM%2FJBjqkAcwAU4l52ePqZF%2FkBv3zQqYOetOmtaWyiX%2Bcj8PskbWd0CFW4PWfteRyY1BQK12B4eABBfnjuvWq4h78ddXYjN7nDu2W0dtfmy5yL9e8wpebvzJjkDXp2yq4cVoQDU16ATz%2BJBLFP91WZ0anVStIa5vrRJsM5oz%2Bad8YCsHsHmH%2F5Tz8%2BMkKCUGN0uqlckOCoqy1k352262K8DM1rV%2FmPMxJQGsV&X-Amz-Signature=80eddd497f9f54487fdf35ab35348ebfa64c4af36830e639cd6106e4d1536265&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

