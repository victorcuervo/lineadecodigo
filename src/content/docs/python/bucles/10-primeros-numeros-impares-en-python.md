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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/1734baf4-9c36-4317-a67f-82a46bfaf069/range-python.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VY6S5D5K%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T074804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBCtpqb%2BebhbfaNamvRyP%2BK4CPJ6zOtlmpBSz6mCWw8rAiEAqYf3f9Cfz02WYvBpXDYD%2F%2BPrfmBfBGxit9DHqPXJ8Z0q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDLE66frzmZg375j%2FJyrcAxx%2BrCswOyn2a1%2Bylb%2FbXzpNYdWNNqEAHeWMLG9tV4QgHuISn%2FYXp1x68VJ6xrbe%2BDW9M1Zb%2FSN39czDqbrRZz9xP4RsqiK0XZx0cT1GxyxO1ylaj%2Bdh9PSyvT3qGWDvBdQzGMxXKXi4an3CxAA1%2B8xEo8H%2B0qidDFIoDCKmjj3lO2K3wgUWFkJEpks0Rdyn5AruQcLCUCabDS9Szv6f%2Fqsm5F19n3jN0nxeV0Yle5ekhIVPQOrWWWTi5tla1WlidDKd3pcHXW4FO0EWAQMnud8B2n%2BptVVGMqVb2opYoO3qEZc5cfWtiUF6wF%2FZV7yiBSs86hrl21fsCwtlhyCcu%2Bnv3TyxsDAAR6bWRM1yXJwhBy%2FPwwGzo8PhHtOnGQpFQE4H4m7zFkXvKtCPgdwZgYjxhI6Yu%2FgvVU%2FU2qh6obqEAq7cIjd3G%2B8n11O8aPYqL70Fg%2Bxe%2F7RuysypOj7sidzy35oLm%2FQjlRwFtlZTS7hBjXRwxT2fdvH9pyNcfc1R0%2FC2%2Fi9p7Tit5N0gfAD3YNVquxhfWi%2FDbW%2BcwG92R%2FVuY24bZlZkGNmRLkyKe2JGdPznbKF3XtnobY3fFHR3aJHkf6EENW0t2GejR02%2BY%2Bibx%2Bz0u73vCTo3cHvvMNK8z8kGOqUBLzFqN3I6voCN%2Fw3FRbrAiA%2F2TP%2FRVM1%2F476ijTkF%2BJEoST6aGB0QAAMrH4MwpPUlEE9VC9lNIeJ%2FnrSFFpkcLFcS1nRbwKeC8Zc7ltmyXNZdiFVWu72OisJKPWSmgmmlr82WbzXeL4Yi9oEiVOINipoMIoZkbF8Hv73InG4PTtw6eNbzpfRCGr299h9YRYaiywr2W%2FRpSVV3a46jUvP4rCsyyozZ&X-Amz-Signature=58ee891c125d97804ffe7fcae1e75f59d940b6dd16f268b5648cddff8450de8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

