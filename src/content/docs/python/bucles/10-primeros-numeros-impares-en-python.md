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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FNIEDI4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T072256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCxdGpCRA7%2BKLlmN5G4ABKJaZ8iYWdJQIvtoxQvo8xZUwIgMpGCE5tst3rv1RXhOejn31oUJFchrwrSHGVQZrPyO0Uq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDPlVPg4Q1gVPnsu0hSrcAzQeRTiXh8HVIOomb%2Bzt8ZpDvwBnAzlnRjjjRVmlrMTjC3er%2Bpfro9Mb5sU1x7y9j6ZuJb4OkOHTZXxB6LIUV%2B0sw%2BdCtJZKXNXGqJF%2BIOqCSuyoNh5gKTa%2B9s7nhCIM3FfaQezJx8CmzB3fpehERzJq0VjlpIJqpTl7btFWZazblsB6Qq832XUhD0nCwMRgp0mVqGIP2nkYTSBZR5RcYqF3ZUFtXgVWkUEZQYK%2Bm%2FQeHudN95K%2BdVEOf1r2ZG6cT5sZCDdSVogX5K9EnsFubQnmcn4zgiAsvrDJ%2BgLaW7yne4tw0UWSDDDAFYTobH%2BChg5Tz%2B3fnroVP8aErcu%2BcLi3NTbU8lB28GVy%2BRV%2B8vofENjUdukfpAncPYiuCIrWgS%2Bc1UW9rqnm3jWAT52xhIv%2BgUF0YXGZM%2F1iWPBvwOTAhQyb8sN%2BLQYpan6n6TVXr7kXZWgZ40E%2B02Mntrsnd6%2FAmEcZQu7SnuPxOuPPinp9VdpVRPjEhsVnpbc1ghHMCEGHXHLsskvc18q1jVrpzmLUilSJkD4XSIBkuhKuEFDIpor4BnUHrUTmpnYset9JQRYsC95twstTg68F3t9sBwt%2F6ox2aaOwJRju12rnnkmYRtrt%2FEHb0UHrbc4DMLOsyckGOqUByT7SFmlMso9eOdfJEl9MjGm9gquAMy5xybjRbAuYoqhGEMw9u%2Fn%2BqfLGa29aL6bubI2MeFcoaP%2FU4DtSjD%2B8LZEF2BbXKy14mHslP1Fkz4feiY6Rs%2FtMTM0O6Zexy7raD5yC%2BMnsD0zEqGGKtrkga24WMfFfghqMFl09d0O1BQHiyTtpvS9ZVry1IuNPRbSylPgr%2BSpmMhaTdPnsb8cGP83o8M3O&X-Amz-Signature=f40054bed91802c44284ee608575e53c827980f2312c2674625282f92b8d5a7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

